import type { Metadata } from "next";
import { PackagesContent } from "@/components/docs/PackagesContent";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "What's inside @accessly-ui/react, @accessly-ui/primitives, @accessly-ui/tailwind-preset, and @accessly-ui/utils — and when to reach for each one.",
};

export default function PackagesPage() {
  return <PackagesContent />;
}
