import type { Metadata } from "next";
import { PackagesContent } from "@/components/docs/PackagesContent";
import { routeMetadata } from "@/lib/seo";

export const metadata: Metadata = routeMetadata("/docs/packages");

export default function PackagesPage() {
  return <PackagesContent />;
}
