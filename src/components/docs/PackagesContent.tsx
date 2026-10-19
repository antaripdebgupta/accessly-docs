"use client";

import {
  DataTable,
  DataTableHeader,
  DataTableBody,
  type DataTableColumn,
} from "@accessly-ui/react";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { DocArticle } from "@/components/docs/DocArticle";
import { PageHeading } from "@/components/docs/PageHeading";
import { SectionHeading } from "@/components/docs/SectionHeading";
import { DocPager } from "@/components/docs/DocPager";

import { packages, type PackageInfo } from "@/data/docs/packages";

const comparisonColumns: DataTableColumn<PackageInfo>[] = [
  {
    id: "name",
    header: "Package",
    cell: (row) => (
      <code className="font-mono text-sm font-medium text-[var(--text)]">{row.name}</code>
    ),
  },
  {
    id: "dependsOn",
    header: "Depends on",
    cell: (row) => (
      <span className="text-sm text-[var(--text-muted)]">{row.dependsOn}</span>
    ),
  },
  {
    id: "useWhen",
    header: "Reach for it when",
    cell: (row) => (
      <span className="text-sm text-[var(--text-muted)]">{row.useWhen}</span>
    ),
  },
];

export function PackagesContent() {
  return (
    <DocArticle size="default">
      <PageHeading
        title="Packages"
        description="Four focused packages, published and versioned independently. Most projects only ever need the first one."
      />

      <section className="mt-10 space-y-6">
        {packages.map((pkg, i) => (
          <div
            key={pkg.name}
            id={pkg.name.replace("@accessly-ui/", "")}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="text-xs font-medium text-[var(--accent)]">
                  Package {i + 1} of {packages.length}
                </span>
                <h2
                  id={`pkg-${pkg.name.replace("@accessly-ui/", "")}`}
                  className="mt-1 font-mono text-xl font-semibold text-[var(--text)]"
                >
                  {pkg.name}
                </h2>
                <p className="mt-0.5 text-sm text-[var(--text-faint)]">{pkg.tagline}</p>
              </div>
              <a
                href={pkg.npmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm font-medium text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-hidden"
              >
                View on npm<span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
              {pkg.description}
            </p>

            <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="min-w-0">
                <p className="mb-2 text-xs font-semibold tracking-wide text-[var(--text-faint)] uppercase">
                  What&apos;s inside
                </p>
                <ul className="space-y-1.5">
                  {pkg.contains.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[var(--text)]"
                    >
                      <svg
                        width="14"
                        height="14"
                        className="mt-1 shrink-0 text-[var(--accent)]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="min-w-0">
                <p className="mb-2 text-xs font-semibold tracking-wide text-[var(--text-faint)] uppercase">
                  Install
                </p>
                <CodeBlock code={pkg.install} language="bash" />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-12 mb-4">
        <SectionHeading id="at-a-glance" level={2} className="mb-4">
          At a glance
        </SectionHeading>
        <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
          <div className="overflow-x-auto">
            <DataTable
              data={packages}
              columns={comparisonColumns}
              getRowId={(row) => row.name}
              caption="Comparison of Accessly UI packages"
              className="w-full rounded-none! border-0! text-left text-sm shadow-none! [&>div]:rounded-none! [&>div]:border-0! [&>div]:shadow-none!"
            >
              <DataTableHeader />
              <DataTableBody />
            </DataTable>
          </div>
        </div>
      </section>

      <DocPager
        prev={{
          href: "/docs/architecture",
          label: "Architecture",
        }}
        next={{
          href: "/docs/theming",
          label: "Theming & Styling",
        }}
      />
    </DocArticle>
  );
}
