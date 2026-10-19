import { describe, it, expect } from "vitest";
import { gettingStartedNav, componentsNav, allNavSections } from "@/data/navigation";
import { componentRegistry } from "@/data/components/registry";
import { demoRegistry } from "@/components/demos";

describe("Navigation Link Integrity", () => {
  it("separates the Getting Started and Components trees", () => {
    const docRoutes = gettingStartedNav.flatMap((section) =>
      section.items.map((item) => item.href)
    );
    const componentRoutes = componentsNav.flatMap((section) =>
      section.items.map((item) => item.href)
    );

    expect(docRoutes).toEqual([
      "/docs/introduction",
      "/docs/installation",
      "/docs/architecture",
      "/docs/packages",
      "/docs/theming",
      "/docs/accessibility",
    ]);
    expect(componentRoutes).toContain("/components/button");
    expect(componentRoutes).toContain("/components/dialog");
    expect(componentRoutes).toContain("/components/data-table");
    expect(allNavSections).toEqual([...gettingStartedNav, ...componentsNav]);
  });

  it("verifies all documentation and component links in nav config are valid routes", () => {
    const knownDocRoutes = new Set([
      "/docs/introduction",
      "/docs/installation",
      "/docs/architecture",
      "/docs/packages",
      "/docs/theming",
      "/docs/accessibility",
    ]);

    const knownComponentSlugs = new Set(Object.keys(componentRegistry));

    for (const section of allNavSections) {
      for (const item of section.items) {
        if (item.href.startsWith("/docs/")) {
          expect(knownDocRoutes.has(item.href)).toBe(true);
        } else if (item.href.startsWith("/components/")) {
          const slug = item.href.replace("/components/", "");
          expect(knownComponentSlugs.has(slug)).toBe(true);
        } else {
          expect(["/", "#"]).toContain(item.href);
        }
      }
    }
  });

  it("verifies all 22 components in componentRegistry are represented in navigation", () => {
    const navHrefs = new Set(
      allNavSections.flatMap((section) => section.items.map((i) => i.href))
    );

    for (const slug of Object.keys(componentRegistry)) {
      expect(navHrefs.has(`/components/${slug}`)).toBe(true);
    }
  });

  it("ensures every component has a matching demo entry", () => {
    for (const slug of Object.keys(componentRegistry)) {
      expect(demoRegistry[slug], `Missing demo for ${slug}`).toBeDefined();
    }
  });
});
