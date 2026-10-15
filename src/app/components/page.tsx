import type { Metadata } from "next";
import Link from "next/link";
import { componentRegistry } from "@/lib/component-registry";

export const metadata: Metadata = {
  title: "All Components",
  description: "Browse every component in Accessly UI.",
};

export default function ComponentsIndexPage() {
  const grouped = Object.values(componentRegistry).reduce<
    Record<string, (typeof componentRegistry)[string][]>
  >((acc, meta) => {
    (acc[meta.category] ??= []).push(meta);
    return acc;
  }, {});

  return (
    <article className="max-w-5xl min-w-0 py-6">
      <header className="pb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          All Components
        </h1>
        <p className="mt-3 text-base text-[var(--text-muted)]">
          {Object.keys(componentRegistry).length} accessible, production-ready components.
        </p>
      </header>
      {Object.entries(grouped).map(([category, items]) => (
        <section key={category} className="mb-10">
          <h2 className="mb-3 text-sm font-semibold tracking-wide text-[var(--text-faint)] uppercase">
            {category}
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((meta) => (
              <Link
                key={meta.slug}
                href={`/components/${meta.slug}`}
                className="flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-6 text-center text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {meta.name}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
