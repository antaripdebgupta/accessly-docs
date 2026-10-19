import type { Metadata } from "next";
import { IntroductionContent } from "@/components/docs/IntroductionContent";
import { routeMetadata } from "@/lib/seo";

export const metadata: Metadata = routeMetadata("/docs/introduction");

export default function IntroductionPage() {
  return <IntroductionContent />;
}
