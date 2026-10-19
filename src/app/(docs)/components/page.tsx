import type { Metadata } from "next";
import { ComponentsGrid } from "@/components/docs/ComponentsGrid";
import { routeMetadata } from "@/lib/seo";

export const metadata: Metadata = routeMetadata("/components");

export default function ComponentsIndexPage() {
  return <ComponentsGrid />;
}
