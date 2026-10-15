import type { Metadata } from "next";
import { ThemingContent } from "@/components/docs/ThemingContent";

export const metadata: Metadata = {
  title: "Theming & Styling",
  description:
    "Configure design tokens, dark mode synchronization, and Tailwind preset customization.",
};

export default function ThemingPage() {
  return <ThemingContent />;
}
