"use client";

import { usePathname } from "next/navigation";
import { getRouteByPath } from "@/lib/routes";
import { toAbsoluteUrl, getSiteUrl } from "@/lib/site-url";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_NAME } from "@/data/site";

export function DocsBreadcrumbs() {
  const pathname = usePathname();
  const route = getRouteByPath(pathname);

  const siteUrl = getSiteUrl() || "/";

  const techArticleJsonLd =
    route && (route.kind === "doc" || route.kind === "component")
      ? {
          "@type": "TechArticle",
          headline: route.title,
          description: route.description,
          url: toAbsoluteUrl(route.path) || route.path,
          inLanguage: "en",
          isPartOf: {
            "@type": "WebSite",
            name: SITE_NAME,
            url: siteUrl,
          },
        }
      : null;

  if (!techArticleJsonLd) {
    return null;
  }

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [techArticleJsonLd],
  };

  return <JsonLd data={jsonLdGraph} />;
}
