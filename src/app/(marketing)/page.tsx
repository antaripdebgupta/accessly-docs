import type { Metadata } from "next";
import { Hero } from "@/components/site/home/Hero";
import { ComponentShowcase } from "@/components/site/home/ComponentShowcase";
import { InstallSection } from "@/components/site/home/InstallSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { routeMetadata } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site-url";
import { SITE_NAME, DEFAULT_DESCRIPTION } from "@/data/site";

export const metadata: Metadata = routeMetadata("/");

export default function HomePage() {
  const siteUrl = getSiteUrl() || "/";
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: siteUrl,
    description: DEFAULT_DESCRIPTION,
  };

  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <Hero />
      <ComponentShowcase />
      <InstallSection />
    </>
  );
}
