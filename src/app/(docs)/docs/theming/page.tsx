import type { Metadata } from "next";
import { ThemingContent } from "@/components/docs/ThemingContent";
import { routeMetadata } from "@/lib/seo";

export const metadata: Metadata = routeMetadata("/docs/theming");

export default function ThemingPage() {
  return <ThemingContent />;
}
