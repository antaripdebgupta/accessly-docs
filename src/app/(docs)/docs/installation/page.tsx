import type { Metadata } from "next";
import { InstallationContent } from "@/components/docs/InstallationContent";
import { routeMetadata } from "@/lib/seo";

export const metadata: Metadata = routeMetadata("/docs/installation");

export default function InstallationPage() {
  return <InstallationContent />;
}
