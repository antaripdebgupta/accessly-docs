import { getPublicRoutes } from "@/lib/routes";
import { toAbsoluteUrl } from "@/lib/site-url";
import { componentRegistry } from "@/data/components/registry";
import { packages } from "@/data/docs/packages";
import { SITE_NAME, DEFAULT_DESCRIPTION, GITHUB_URL } from "@/data/site";

export function GET() {
  const routes = getPublicRoutes();
  const docRoutes = routes.filter((r) => r.kind === "doc");

  const lines: string[] = [];

  // H1 and blockquote summary
  lines.push(`# ${SITE_NAME}`);
  lines.push("");
  lines.push(`> ${DEFAULT_DESCRIPTION}`);
  lines.push("");

  // Docs guides
  lines.push("## Docs");
  lines.push("");
  for (const doc of docRoutes) {
    const url = toAbsoluteUrl(doc.path) || doc.path;
    lines.push(`- [${doc.title}](${url}): ${doc.description}`);
  }
  lines.push("");

  // Components grouped by category
  lines.push("## Components");
  lines.push("");

  const allComps = Object.values(componentRegistry);
  const categories = Array.from(new Set(allComps.map((c) => c.category)));

  for (const category of categories) {
    lines.push(`### ${category}`);
    lines.push("");
    const comps = allComps.filter((c) => c.category === category);
    for (const comp of comps) {
      const url = toAbsoluteUrl(`/components/${comp.slug}`) || `/components/${comp.slug}`;
      lines.push(`- [${comp.name}](${url}): ${comp.description}`);
    }
    lines.push("");
  }

  // Packages
  lines.push("## Packages");
  lines.push("");
  for (const pkg of packages) {
    lines.push(`- [${pkg.name}](${pkg.npmUrl}): ${pkg.tagline}. ${pkg.description}`);
  }
  lines.push("");

  // Optional
  lines.push("## Optional");
  lines.push("");
  lines.push(`- [GitHub](${GITHUB_URL}): Source code repository for Accessly UI.`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
