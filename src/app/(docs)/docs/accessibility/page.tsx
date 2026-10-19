import type { Metadata } from "next";
import { AccessibilityContent } from "@/components/docs/AccessibilityContent";
import { routeMetadata } from "@/lib/seo";

export const metadata: Metadata = routeMetadata("/docs/accessibility");

export default function AccessibilityPrinciplesPage() {
  return <AccessibilityContent />;
}
