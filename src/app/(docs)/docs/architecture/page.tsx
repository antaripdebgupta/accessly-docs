import type { Metadata } from "next";
import { ArchitectureContent } from "@/components/docs/ArchitectureContent";
import { routeMetadata } from "@/lib/seo";

export const metadata: Metadata = routeMetadata("/docs/architecture");

export default function ArchitecturePage() {
  return <ArchitectureContent />;
}
