import { componentRegistry } from "@/data/components/registry";
import { gettingStartedNav } from "@/data/navigation";
import { SITE_NAME, SITE_TAGLINE, DEFAULT_DESCRIPTION } from "@/data/site";

export interface BreadcrumbCrumb {
  title: string;
  href: string;
}

export type RouteKind = "marketing" | "components-index" | "doc" | "component";

export interface RouteEntry {
  path: string;
  title: string;
  description: string;
  kind: RouteKind;
  parentTrail: BreadcrumbCrumb[];
}

export function getPublicRoutes(): RouteEntry[] {
  const routes: RouteEntry[] = [
    {
      path: "/",
      title: `${SITE_NAME} — ${SITE_TAGLINE}`,
      description: DEFAULT_DESCRIPTION,
      kind: "marketing",
      parentTrail: [],
    },
    {
      path: "/components",
      title: "All Components",
      description: "Browse every component in Accessly UI.",
      kind: "components-index",
      parentTrail: [{ title: "Home", href: "/" }],
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
        parentTrail: [
          { title: "Home", href: "/" },
          { title: "Getting Started", href: "/docs/introduction" },
        ],
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
      parentTrail: [
        { title: "Home", href: "/" },
        { title: "Components", href: "/components" },
      ],
    });
  }

  return routes;
}

export function getRouteByPath(path: string): RouteEntry | undefined {
  const normalized = path === "/" ? "/" : path.replace(/\/+$/, "");
  return getPublicRoutes().find((r) => r.path === normalized);
}

export function getBreadcrumbTrail(path: string): BreadcrumbCrumb[] {
  const normalized = path === "/" ? "/" : path.replace(/\/+$/, "");
  const route = getRouteByPath(normalized);

  if (!route) {
    return [{ title: "Home", href: "/" }];
  }

  if (route.kind === "marketing") {
    return [{ title: "Home", href: "/" }];
  }

  return [...route.parentTrail, { title: route.title, href: route.path }];
}
