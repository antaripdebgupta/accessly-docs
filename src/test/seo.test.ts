import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";
import { getPublicRoutes } from "@/lib/routes";
import { routeMetadata } from "@/lib/seo";
import { getSiteUrl, toAbsoluteUrl, normalizeUrl } from "@/lib/site-url";
import { serializeJsonLd } from "@/components/seo/JsonLd";

describe("SEO Suite", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.unstubAllEnvs();
  });

  it("sitemap contains every route from getPublicRoutes() as an absolute URL", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://example.test");
    const routes = getPublicRoutes();
    const siteMapResult = sitemap();

    expect(siteMapResult.length).toBe(routes.length);

    for (const route of routes) {
      const expectedUrl = `https://example.test${route.path === "/" ? "" : route.path}`;
      const found = siteMapResult.find((entry) => entry.url === expectedUrl);
      expect(found, `Expected sitemap to contain ${expectedUrl}`).toBeDefined();
    }
  });

  it("there is no localhost when URL env var is set to a test-only value", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://production.test");
    const siteMapResult = sitemap();

    for (const entry of siteMapResult) {
      expect(entry.url).not.toContain("localhost");
      expect(entry.url.startsWith("https://production.test")).toBe(true);
    }

    expect(toAbsoluteUrl("/docs/installation")).toBe(
      "https://production.test/docs/installation"
    );
  });

  it("degrades safely in production without env var and never emits localhost", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    delete process.env.SITE_URL;
    delete process.env.VERCEL_ENV;
    vi.stubEnv("NODE_ENV", "production");

    expect(getSiteUrl()).toBeUndefined();
    expect(toAbsoluteUrl("/components")).toBeUndefined();

    // Sitemap degrades safely to empty array
    const emptySitemap = sitemap();
    expect(emptySitemap).toEqual([]);

    // Robots excludes sitemap line when site URL is unknown
    const robotsResult = robots();
    expect(robotsResult.sitemap).toBeUndefined();
  });

  it("throws on Vercel production without a site URL", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("VERCEL_ENV", "production");

    expect(() => getSiteUrl()).toThrow();
  });

  it("titles and descriptions are unique across all routes and within sensible length bounds", () => {
    const routes = getPublicRoutes();
    const titles = new Set<string>();
    const descriptions = new Set<string>();

    for (const route of routes) {
      // Uniqueness
      expect(titles.has(route.title), `Duplicate title found: "${route.title}"`).toBe(
        false
      );
      titles.add(route.title);

      expect(
        descriptions.has(route.description),
        `Duplicate description found: "${route.description}" for path ${route.path}`
      ).toBe(false);
      descriptions.add(route.description);

      // Title length checks: component names and doc titles should be concise
      if (route.kind === "component") {
        expect(
          route.title.length,
          `Component title "${route.title}" should be concise`
        ).toBeLessThanOrEqual(50);
      }

      // Meta descriptions should be between 30 and 200 characters
      expect(
        route.description.length,
        `Description for ${route.path} too short (${route.description.length})`
      ).toBeGreaterThanOrEqual(30);
      expect(
        route.description.length,
        `Description for ${route.path} too long (${route.description.length})`
      ).toBeLessThanOrEqual(200);
    }
  });

  it("canonical paths match each route", () => {
    const routes = getPublicRoutes();

    for (const route of routes) {
      const meta = routeMetadata(route.path);
      const expectedCanonical = route.path === "/" ? "/" : route.path;

      expect(
        meta.alternates?.canonical,
        `Canonical path for ${route.path} should match`
      ).toBe(expectedCanonical);
    }
  });

  it("the JSON-LD serializer escapes < to prevent XSS injection", () => {
    const malicious = {
      "@context": "https://schema.org",
      name: "</script><script>alert('xss')</script>",
      html: "<img src=x onerror=alert(1)>",
    };

    const serialized = serializeJsonLd(malicious);

    expect(serialized).not.toContain("<script>");
    expect(serialized).not.toContain("</script>");
    expect(serialized).not.toContain("<img");
    expect(serialized).toContain("\\u003c");
  });

  it("robots output has the intended rules in indexable and preview environments", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://example.test");
    delete process.env.VERCEL_ENV;

    const normalRobots = robots();
    expect(normalRobots.rules).toEqual({ userAgent: "*", allow: "/" });
    expect(normalRobots.sitemap).toBe("https://example.test/sitemap.xml");

    // Preview deployment should be noindex
    vi.stubEnv("VERCEL_ENV", "preview");
    const previewRobots = robots();
    expect(previewRobots.rules).toEqual({ userAgent: "*", disallow: "/" });
  });

  it("normalizes URLs correctly", () => {
    expect(normalizeUrl("https://example.com/")).toBe("https://example.com");
    expect(normalizeUrl("http://example.com///")).toBe("http://example.com");
    expect(normalizeUrl("example.com")).toBe("https://example.com");
  });
});
