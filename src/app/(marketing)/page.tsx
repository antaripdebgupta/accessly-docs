import { Hero } from "@/components/site/home/Hero";
import { ComponentShowcase } from "@/components/site/home/ComponentShowcase";
import { InstallSection } from "@/components/site/home/InstallSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ComponentShowcase />
      <InstallSection />
    </>
  );
}
