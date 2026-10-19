import type { Metadata } from "next";
import { ArchitectureContent } from "@/components/docs/ArchitectureContent";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "How Accessly UI's four packages — react, primitives, tailwind-preset, and utils — layer together, and how theming flows from tokens to components.",
};

export default function ArchitecturePage() {
  return <ArchitectureContent />;
}
