import { componentRegistry } from "@/data/components/registry";
import { allNavSections } from "@/data/navigation";

export interface SearchEntry {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  keywords?: string[];
}

export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  // Index documentation guides
  for (const section of allNavSections) {
    for (const item of section.items) {
      if (item.href.startsWith("/docs/")) {
        entries.push({
          id: item.href,
          title: item.title,
          description:
            item.description || `${section.title} documentation guide for Accessly UI`,
          category: section.title,
          url: item.href,
          keywords: [
            section.title.toLowerCase(),
            item.title.toLowerCase(),
            "docs",
            "guide",
          ],
        });
      }
    }
  }

  // Index components
  for (const [slug, comp] of Object.entries(componentRegistry)) {
    entries.push({
      id: `/components/${slug}`,
      title: comp.name,
      description: comp.description,
      category: comp.category,
      url: `/components/${slug}`,
      keywords: [
        comp.name.toLowerCase(),
        comp.category.toLowerCase(),
        ...comp.wcagCriteria.map((c) => c.toLowerCase()),
        ...comp.relatedComponents,
        "component",
        "react",
      ],
    });
  }

  return entries;
}

export const staticSearchIndex: SearchEntry[] = buildSearchIndex();

export function score(entry: SearchEntry, query: string): number {
  const q = query.trim().toLowerCase();
  const title = entry.title.toLowerCase();
  if (title === q) return 100;
  if (title.startsWith(q)) return 80;
  if (title.includes(q)) return 60;
  if (entry.keywords?.some((k) => k.toLowerCase().startsWith(q))) return 40;
  if (entry.category.toLowerCase().includes(q)) return 25;
  if (entry.description.toLowerCase().includes(q)) return 10;
  return 0;
}
