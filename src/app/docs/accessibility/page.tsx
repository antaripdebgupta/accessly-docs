import type { Metadata } from "next";
import { AccessibilityContent } from "@/components/docs/AccessibilityContent";

export const metadata: Metadata = {
  title: "Accessibility Principles",
  description:
    "Core WCAG 2.2 AA standards, keyboard navigation patterns, and focus architecture in Accessly UI.",
};

export default function AccessibilityPrinciplesPage() {
  return <AccessibilityContent />;
}
