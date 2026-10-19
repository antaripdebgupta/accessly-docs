"use client";

import Link from "next/link";
import type { ComponentMeta } from "@/data/components/registry";
import { componentRegistry } from "@/data/components/registry";
import type { ComponentPropsSection, PropDoc } from "@/data/components/props";
import { demoRegistry } from "@/components/demos";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { DocArticle } from "@/components/docs/DocArticle";
import { PageHeading } from "@/components/docs/PageHeading";
import { SectionHeading } from "@/components/docs/SectionHeading";
import { DocPager } from "@/components/docs/DocPager";
import {
  DataTable,
  DataTableHeader,
  DataTableBody,
  type DataTableColumn,
} from "@accessly-ui/react";

const keyboardColumns: DataTableColumn<ComponentMeta["keyboardInteractions"][number]>[] =
  [
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

const propColumns: DataTableColumn<PropDoc>[] = [
  {
    id: "name",
    header: "Prop",
    cell: (row) => (
      <span className="font-mono text-sm font-medium text-[var(--text)]">{row.name}</span>
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

  return (
    <DocArticle size="default">
      <PageHeading title={meta.name} description={meta.description} />

      <section className="mt-8">
        <SectionHeading id="import" level={2}>
          Import
        </SectionHeading>
        <CodeBlock code={importCode} language="tsx" filename="tsx" />
      </section>

      <section className="mt-10 space-y-12">
        {stories && stories.length > 0
          ? stories.map((story) => {
              const StoryDemo = story.Demo;
              return (
                <div key={story.title} className="space-y-4">
                  <h3
                    id={`${slug}-${story.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="text-base font-semibold text-[var(--text)]"
                  >
                    {story.title}
                  </h3>
                  <ComponentPreview title={story.title} code={story.code}>
                    <StoryDemo />
                  </ComponentPreview>
                </div>
              );
            })
          : Demo && (
              <ComponentPreview title={meta.name} code={code}>
                <Demo />
              </ComponentPreview>
            )}
      </section>

      <section className="mt-12">
        <SectionHeading id="component-api-reference" level={2}>
          Component API Reference
        </SectionHeading>
        {propSections.length === 0 ? (
          <p className="mt-4 text-sm text-[var(--text-muted)]">
            No specific props extracted for this interface. Standard HTML attributes are
            supported.
          </p>
        ) : (
          <div className="mt-4 space-y-6">
            {propSections.map((section) => (
              <div
                key={section.componentName}
                className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]"
              >
                <div className="border-b border-[var(--border)] bg-[var(--surface-raised)] px-4 py-2.5">
                  <h3 className="font-mono text-sm font-semibold text-[var(--text)]">
                    {section.componentName}
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <DataTable
                    data={section.props}
                    columns={propColumns}
                    getRowId={(prop) => prop.name}
                    caption={`${section.componentName} props`}
                    className="w-full rounded-none! border-0! text-left text-sm shadow-none! [&>div]:rounded-none! [&>div]:border-0! [&>div]:shadow-none!"
                  >
                    <DataTableHeader />
                    <DataTableBody />
                  </DataTable>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {meta.keyboardInteractions.length > 0 && (
        <section className="mt-12">
          <SectionHeading id="keyboard-interactions" level={2}>
            Keyboard Interactions
          </SectionHeading>
          <div className="mt-4 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
            <div className="overflow-x-auto">
              <DataTable
                data={meta.keyboardInteractions}
                columns={keyboardColumns}
                getRowId={(_, i) => String(i)}
                caption="Keyboard interactions"
                className="w-full rounded-none! border-0! text-left text-sm shadow-none! [&>div]:rounded-none! [&>div]:border-0! [&>div]:shadow-none!"
              >
                <DataTableHeader />
                <DataTableBody />
              </DataTable>
            </div>
          </div>
        </section>
      )}

      {meta.relatedComponents.length > 0 && (
        <section className="mt-12">
          <SectionHeading level={2}>Related Components</SectionHeading>
          <div className="mt-4 flex flex-wrap gap-2">
            {meta.relatedComponents.map((relSlug) => {
              const relMeta = componentRegistry[relSlug];
              if (!relMeta) return null;
              return (
                <Link
                  key={relSlug}
                  href={`/components/${relSlug}`}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-sm font-medium text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {relMeta.name}
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <DocPager
        prev={
          prevSlug
            ? {
                href: `/components/${prevSlug}`,
                label: componentRegistry[prevSlug]?.name ?? "",
              }
            : undefined
        }
        next={
          nextSlug
            ? {
                href: `/components/${nextSlug}`,
                label: componentRegistry[nextSlug]?.name ?? "",
              }
            : undefined
        }
      />
    </DocArticle>
  );
}
