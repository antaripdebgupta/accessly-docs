import { componentRegistry } from "./component-registry";
import { allNavSections } from "./nav-config";

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
          description: `${section.title} documentation guide for Accessly UI`,
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
