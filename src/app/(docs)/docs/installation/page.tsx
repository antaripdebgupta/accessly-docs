import type { Metadata } from "next";
import { InstallationContent } from "@/components/docs/InstallationContent";

export const metadata: Metadata = {
  title: "Installation",
  description:
    "How to install and configure Accessly UI in your React and Next.js projects.",
};

export default function InstallationPage() {
  return <InstallationContent />;
}
