import type { Metadata } from "next";
import { ComponentsGrid } from "@/components/docs/ComponentsGrid";

export const metadata: Metadata = {
  title: "All Components",
  description: "Browse every component in Accessly UI.",
};

export default function ComponentsIndexPage() {
  return <ComponentsGrid />;
}
