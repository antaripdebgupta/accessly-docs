import { componentRegistry } from "@/data/components/registry";
import { gettingStartedNav } from "@/data/navigation";
import { SITE_NAME, SITE_TAGLINE, DEFAULT_DESCRIPTION } from "@/data/site";

export type RouteKind = "marketing" | "components-index" | "doc" | "component";

export interface RouteEntry {
  path: string;
  title: string;
  description: string;
  kind: RouteKind;
}

export function getPublicRoutes(): RouteEntry[] {
  const routes: RouteEntry[] = [
    {
      path: "/",
      title: `${SITE_NAME} — ${SITE_TAGLINE}`,
      description: DEFAULT_DESCRIPTION,
      kind: "marketing",
    },
    {
      path: "/components",
      title: "All Components",
      description: "Browse every component in Accessly UI.",
      kind: "components-index",
    },
  ];

  // Guides from navigation
  for (const section of gettingStartedNav) {
    for (const item of section.items) {
      routes.push({
        path: item.href,
        title: item.title,
        description:
          item.description || `${item.title} documentation guide for ${SITE_NAME}.`,
        kind: "doc",
      });
    }
  }

  // Component pages from registry
  for (const [slug, comp] of Object.entries(componentRegistry)) {
    routes.push({
      path: `/components/${slug}`,
      title: comp.name,
      description: comp.description,
      kind: "component",
    });
  }

  return routes;
}

export function getRouteByPath(path: string): RouteEntry | undefined {
  const normalized = path === "/" ? "/" : path.replace(/\/+$/, "");
  return getPublicRoutes().find((r) => r.path === normalized);
}
