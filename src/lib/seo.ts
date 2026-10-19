import type { Metadata } from "next";
import { getRouteByPath } from "./routes";
import { isSiteIndexable, toAbsoluteUrl } from "./site-url";
import { SITE_NAME, DEFAULT_DESCRIPTION } from "@/data/site";

export interface PageMetadataOptions {
  title?: string;
  description?: string;
  robots?: Metadata["robots"];
  isAbsoluteTitle?: boolean;
}

export function routeMetadata(path: string, options?: PageMetadataOptions): Metadata {
  const route = getRouteByPath(path);
  const rawTitle = options?.title || route?.title || SITE_NAME;
  const description = options?.description || route?.description || DEFAULT_DESCRIPTION;

  const isHome = path === "/";
  const canonicalPath = isHome ? "/" : path.replace(/\/+$/, "");

  // Root template in layout is: "%s | Accessly UI"
  // For home or when isAbsoluteTitle is true, use absolute title.
  const titleConfig =
    isHome || options?.isAbsoluteTitle ? { absolute: rawTitle } : rawTitle;

  const fullOgTitle = rawTitle.includes(SITE_NAME)
    ? rawTitle
    : `${rawTitle} | ${SITE_NAME}`;

  const absoluteUrl = toAbsoluteUrl(canonicalPath);
  const indexable = isSiteIndexable();

  const robots =
    options?.robots || (indexable ? undefined : { index: false, follow: false });

  return {
    title: titleConfig,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: fullOgTitle,
      description,
      url: absoluteUrl || canonicalPath,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullOgTitle,
      description,
    },
    ...(robots ? { robots } : {}),
  };
}
