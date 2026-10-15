"use client";

import Link from "next/link";
import type { ComponentMeta } from "@/lib/component-registry";
import { componentRegistry } from "@/lib/component-registry";
import type { ComponentPropsSection } from "@/lib/component-props";
import { demoRegistry } from "@/components/demos";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import {
  DataTable,
  DataTableHeader,
  DataTableBody,
  type DataTableColumn,
} from "@accessly-ui/react";

export interface ComponentDocViewProps {
  meta: ComponentMeta;
  slug: string;
  propSections: ComponentPropsSection[];
  prevSlug: string | null;
  nextSlug: string | null;
}

export function ComponentDocView({
  meta,
  slug,
  propSections,
  prevSlug,
  nextSlug,
}: ComponentDocViewProps) {
  const entry = demoRegistry[slug] ?? {
    Demo: null,
    code: "",
    importCode: 'import { Button } from "@accessly-ui/react";',
    stories: [],
  };
  const { Demo, code, importCode, stories } = entry;

  const keyboardColumns: DataTableColumn<(typeof meta.keyboardInteractions)[0]>[] = [
    {
      id: "key",
      header: "Key",
      cell: (row) => (
        <kbd className="rounded border border-[var(--border)] bg-[var(--canvas)] px-1.5 py-0.5 font-mono text-sm font-semibold text-[var(--accent)] shadow-xs">
          {row.key}
        </kbd>
      ),
    },
    {
      id: "description",
      header: "Description",
      cell: (row) => <span className="text-[var(--text)]">{row.description}</span>,
    },
  ];

  const propColumns: DataTableColumn<import("@/lib/component-props").PropDoc>[] = [
    {
      id: "name",
      header: "Prop",
      cell: (row) => (
        <span className="font-mono text-sm font-medium text-[var(--text)]">
          {row.name}
        </span>
      ),
    },
    {
      id: "type",
      header: "Type",
      cell: (row) => (
        <code className="rounded bg-[var(--surface-raised)] px-1.5 py-0.5 font-mono text-sm text-[var(--text)]">
          {row.type}
        </code>
      ),
    },
    {
      id: "required",
      header: "Requirement",
      cell: (row) =>
        row.required ? (
          <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">
            required
          </span>
        ) : (
          <span className="text-sm text-[var(--text-muted)]">optional</span>
        ),
    },
  ];

  return (
    <article className="max-w-4xl min-w-0 py-6">
      <header className="border-b border-[var(--border)] pb-8">
        <div className="flex items-center gap-3">
          <span className="rounded bg-[var(--accent-subtle)] px-2.5 py-0.5 text-sm font-medium text-[var(--accent)]">
            {meta.category}
          </span>
          <div className="flex items-center gap-1.5">
            {meta.wcagCriteria.map((wcag) => (
              <span
                key={wcag}
                className="rounded border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 text-[11px] font-medium text-[var(--text-muted)]"
              >
                {wcag}
              </span>
            ))}
          </div>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          {meta.name}
        </h1>
        <p className="mt-3 text-base text-[var(--text-muted)] sm:text-lg">
          {meta.description}
        </p>
      </header>

      <section className="mt-8">
        <h2 id="import" className="text-xl font-semibold text-[var(--text)]">
          Import
        </h2>
        <CodeBlock code={importCode} language="tsx" filename="tsx" />
      </section>

      <section className="mt-10 space-y-10">
        {stories && stories.length > 0
          ? stories.map((story) => (
              <div key={story.title} className="space-y-3">
                <h3
                  id={`${slug}-${story.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="text-base font-semibold text-[var(--text)]"
                >
                  {story.title}
                </h3>
                <ComponentPreview title={story.title} code={story.code}>
                  <story.Demo />
                </ComponentPreview>
              </div>
            ))
          : Demo && (
              <ComponentPreview title={meta.name} code={code}>
                <Demo />
              </ComponentPreview>
            )}
      </section>

      <section className="mt-12">
        <h2
          id="component-api-reference"
          className="text-xl font-semibold text-[var(--text)]"
        >
          Component API Reference
        </h2>
        {propSections.length === 0 ? (
          <p className="mt-4 text-sm text-[var(--text-muted)]">
            No specific props extracted for this interface. Standard HTML attributes are
            supported.
          </p>
        ) : (
          <div className="mt-4 space-y-6">
            {propSections.map((section) => (
              <div key={section.componentName}>
                <div className="rounded-t-xl border border-b-0 border-[var(--border)] bg-[var(--surface-raised)] px-4 py-2.5">
                  <h3 className="font-mono text-sm font-semibold text-[var(--text)]">
                    {section.componentName}
                  </h3>
                </div>
                <DataTable
                  data={section.props}
                  columns={propColumns}
                  getRowId={(prop) => prop.name}
                  caption={`${section.componentName} props`}
                  className="w-full text-left text-sm"
                >
                  <DataTableHeader />
                  <DataTableBody />
                </DataTable>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="mt-12">
        <h2
          id="keyboard-interactions"
          className="text-xl font-semibold text-[var(--text)]"
        >
          Keyboard Interactions
        </h2>
        <div className="mt-4">
          <DataTable
            data={meta.keyboardInteractions}
            columns={keyboardColumns}
            getRowId={(_, i) => String(i)}
            caption="Keyboard interactions"
            className="w-full text-left text-sm"
          >
            <DataTableHeader />
            <DataTableBody />
          </DataTable>
        </div>
      </section>

      {meta.relatedComponents.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[var(--text)]">Related Components</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {meta.relatedComponents.map((relSlug) => {
              const relMeta = componentRegistry[relSlug];
              if (!relMeta) return null;
              return (
                <Link
                  key={relSlug}
                  href={`/components/${relSlug}`}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {relMeta.name}
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <footer className="mt-14 flex items-center justify-between border-t border-[var(--border)] pt-6 text-sm">
        {prevSlug ? (
          <Link
            href={`/components/${prevSlug}`}
            className="group flex flex-col text-left"
          >
            <span className="text-sm text-[var(--text-faint)]">Previous</span>
            <span className="font-medium text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]">
              {componentRegistry[prevSlug]?.name}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {nextSlug && (
          <Link
            href={`/components/${nextSlug}`}
            className="group ml-auto flex flex-col text-right"
          >
            <span className="text-sm text-[var(--text-faint)]">Next</span>
            <span className="font-medium text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]">
              {componentRegistry[nextSlug]?.name}
            </span>
          </Link>
        )}
      </footer>
    </article>
  );
}
