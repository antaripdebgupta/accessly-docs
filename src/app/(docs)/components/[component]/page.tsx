import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { componentRegistry } from "@/data/components/registry";
import { componentPropsMap } from "@/data/components/props";
import { ComponentDocView } from "@/components/docs/ComponentDocView";

interface ComponentPageProps {
  params: Promise<{
    component: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(componentRegistry).map((slug) => ({
    component: slug,
  }));
}

export async function generateMetadata({
  params,
}: ComponentPageProps): Promise<Metadata> {
  const { component } = await params;
  const meta = componentRegistry[component];

  if (!meta) {
    return {
      title: "Component Not Found",
    };
  }

  return {
    title: `${meta.name} — Component Documentation`,
    description: meta.description,
  };
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { component } = await params;
  const meta = componentRegistry[component];
  const propSections = componentPropsMap[component] || [];

  if (!meta) {
    notFound();
  }

  const allSlugs = Object.keys(componentRegistry);
  const currentIndex = allSlugs.indexOf(component);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  return (
    <ComponentDocView
      meta={meta}
      slug={component}
      propSections={propSections}
      prevSlug={prevSlug}
      nextSlug={nextSlug}
    />
  );
}
