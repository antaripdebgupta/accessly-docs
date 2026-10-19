import type { MetadataRoute } from "next";
import { getPublicRoutes } from "@/lib/routes";
import { toAbsoluteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getPublicRoutes();
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const url = toAbsoluteUrl(route.path);
    if (!url) {
      // Degrade safely if site URL is not configured
      continue;
    }
    sitemapEntries.push({
      url,
    });
  }

  return sitemapEntries;
}
