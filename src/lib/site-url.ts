let warnedMissingUrl = false;

//Normalizes a URL: ensures http(s) protocol and removes trailing slashes.
export function normalizeUrl(url: string): string {
  const trimmed = url.trim().replace(/\/+$/, "");
  if (!/^https?:\/\//i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  return trimmed;
}

//Returns the configured site URL.
// - In development, falls back to http://localhost:3000 if not specified.
// - In production, returns undefined if no env value is provided and logs a single warning.

export function getSiteUrl(): string | undefined {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (envUrl && envUrl.trim()) {
    return normalizeUrl(envUrl);
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  if (process.env.NODE_ENV === "production") {
    if (process.env.VERCEL_ENV === "production") {
      throw new Error(
        "NEXT_PUBLIC_SITE_URL is required in production deployment (VERCEL_ENV=production)."
      );
    }

    if (!warnedMissingUrl) {
      warnedMissingUrl = true;
      console.warn(
        "[site-url] Warning: NEXT_PUBLIC_SITE_URL is not set in production. Canonical URLs, sitemap, and metadataBase will degrade safely."
      );
    }
  }

  return undefined;
}

//Returns an absolute URL for a given relative path if site URL is known.
export function toAbsoluteUrl(path: string): string | undefined {
  const baseUrl = getSiteUrl();
  if (!baseUrl) return undefined;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${normalizedPath === "/" ? "" : normalizedPath}`;
}

//Determines if the site should be indexed by search engines.
//Preview environments (e.g. VERCEL_ENV === "preview") are marked non-indexable.
export function isSiteIndexable(): boolean {
  if (process.env.VERCEL_ENV === "preview") {
    return false;
  }
  if (process.env.NEXT_PUBLIC_INDEXABLE === "false") {
    return false;
  }
  return true;
}
