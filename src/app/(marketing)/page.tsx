"use client";

import Link from "next/link";
import {
  Button,
  Switch,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  DataTable,
  DataTableHeader,
  DataTableBody,
  type DataTableColumn,
} from "@accessly-ui/react";
import { CodeBlock } from "@/components/mdx/CodeBlock";

const componentStrip = [
  {
    name: "Button",
    preview: (
      <Button variant="primary" size="sm">
        Action
      </Button>
    ),
  },
  {
    name: "Switch",
    preview: <Switch label="Active" defaultChecked size="sm" />,
  },
  {
    name: "Tabs",
    preview: (
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Design</TabsTrigger>
          <TabsTrigger value="tab2">Code</TabsTrigger>
        </TabsList>
      </Tabs>
    ),
  },
];

const categories = [
  {
    name: "Forms & Inputs",
    count: 7,
    items: "Input, Textarea, Checkbox, RadioGroup, Switch, Combobox, Pagination",
    href: "/components/input",
  },
  {
    name: "Overlays & Dialogs",
    count: 4,
    items: "Dialog, DropdownMenu, Tooltip, CommandPalette",
    href: "/components/dialog",
  },
  {
    name: "Navigation",
    count: 3,
    items: "Breadcrumb, Tabs, TreeView",
    href: "/components/tabs",
  },
  {
    name: "Feedback",
    count: 3,
    items: "Alert, Toast, Skeleton",
    href: "/components/alert",
  },
  {
    name: "Data Display",
    count: 3,
    items: "DataTable, Avatar, AvatarGroup",
    href: "/components/avatar",
  },
  {
    name: "Layout & Misc",
    count: 2,
    items: "Carousel, Accordion",
    href: "/components/accordion",
  },
];

const categoryColumns: DataTableColumn<(typeof categories)[0]>[] = [
  {
    id: "name",
    header: "Category",
    cell: (row) => (
      <Link
        href={row.href}
        className="font-medium whitespace-nowrap text-[var(--text)] transition-colors hover:text-[var(--accent)]"
      >
        {row.name}
      </Link>
    ),
  },
  {
    id: "items",
    header: "Components",
    cell: (row) => <span className="text-sm text-[var(--text-muted)]">{row.items}</span>,
  },
  {
    id: "count",
    header: "Count",
    cell: (row) => (
      <span className="font-mono text-sm whitespace-nowrap text-[var(--text-faint)]">
        {row.count}
      </span>
    ),
  },
];

const installCode = `npm install @accessly-ui/react @accessly-ui/tailwind-preset`;

const usageCode = `import { ThemeProvider, Button } from "@accessly-ui/react";

export default function App() {
  return (
    <ThemeProvider defaultMode="system">
      <Button variant="primary">Get started</Button>
    </ThemeProvider>
  );
}`;

export default function HomePage() {
  return (
    <>
      <section className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-16 px-4 pt-20 pb-16 sm:px-8">
        <div className="flex min-w-0 flex-[999_1_460px] flex-col gap-6">
          <h1 className="font-display text-4xl leading-[1.08] font-normal tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
            Accessible components,
            <br />
            without the accessibility homework.
          </h1>

          <p className="max-w-[480px] text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            22 React components, each with keyboard navigation, focus management, and ARIA
            wiring handled correctly. Built as headless primitives with complete styling
            freedom, or ready to use out of the box.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link href="/docs/introduction">
              <Button variant="primary">Get Started</Button>
            </Link>
            <Link href="/components/button">
              <Button variant="secondary">Explore Components</Button>
            </Link>
          </div>
        </div>

        <div className="max-w-[460px] min-w-[320px] flex-[1_1_400px]">
          <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-md">
            <div className="flex items-center gap-1.5 border-b border-[var(--border)] bg-[var(--surface-raised)] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--border-strong)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--border-strong)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--border-strong)]" />
              <span className="ml-2 font-mono text-sm text-[var(--text-faint)]">
                Dialog.tsx
              </span>
            </div>
            <div className="relative flex min-h-[280px] items-center justify-center bg-[var(--canvas)] p-8">
              <div
                className="absolute inset-0 flex flex-col gap-3 p-6 opacity-30"
                aria-hidden="true"
              >
                <div className="h-2.5 w-[50%] rounded bg-[var(--border-strong)]" />
                <div className="h-2.5 w-[75%] rounded bg-[var(--border)]" />
                <div className="h-2.5 w-[35%] rounded bg-[var(--border)]" />
                <div className="mt-4 h-8 w-24 rounded bg-[var(--border)]" />
              </div>

              <div
                className="absolute inset-0 bg-black/25 backdrop-blur-[1px]"
                aria-hidden="true"
              />

              <div className="hero-dialog-anim relative flex w-full max-w-[300px] flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl">
                <div className="space-y-1.5">
                  <span className="text-sm font-semibold text-[var(--text)]">
                    Delete document?
                  </span>
                  <p className="text-sm leading-normal text-[var(--text-muted)]">
                    This action cannot be undone. Focus is trapped within this dialog and
                    restored upon closing.
                  </p>
                </div>
                <div className="flex justify-end gap-2 pt-1">
                  <Button variant="secondary" size="sm">
                    Cancel
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 pt-4 pb-16 sm:px-8">
        <p className="mb-4 text-center text-sm font-medium text-[var(--text-muted)]">
          Built from real, composable primitives
        </p>
        <div className="grid grid-cols-1 divide-y divide-[var(--border)] rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-xs sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {componentStrip.map((comp) => (
            <div
              key={comp.name}
              className="flex flex-col items-center justify-center gap-3 p-6"
            >
              {comp.preview}
              <span className="font-mono text-sm text-[var(--text-faint)]">
                {comp.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] border-t border-[var(--border)] px-4 pt-16 pb-20 sm:px-8">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
              22 components, organized by purpose
            </h2>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Browse components by category or jump directly to API docs.
            </p>
          </div>
          <Link
            href="/components/button"
            className="text-sm font-medium text-[var(--accent)] hover:underline"
          >
            View all components
          </Link>
        </div>

        <DataTable
          data={categories}
          columns={categoryColumns}
          getRowId={(row) => row.name}
          caption="Components organized by category"
          className="w-full text-left text-sm"
        >
          <DataTableHeader />
          <DataTableBody />
        </DataTable>
      </section>

      <section className="mx-auto flex max-w-[1400px] flex-wrap items-start gap-12 border-t border-[var(--border)] px-4 pt-16 pb-20 sm:px-8">
        <div className="flex min-w-[320px] flex-[1_1_420px] flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
            From install to accessible UI in minutes
          </h2>
          <p className="max-w-[420px] text-sm leading-relaxed text-[var(--text-muted)]">
            No config step required to get correct focus management, keyboard support, or
            theming. The defaults are the accessible, production-ready path.
          </p>
          <ul className="mt-2 space-y-3">
            {[
              "Tailwind v4 preset wired with a single CSS import",
              "Light, dark, and system theming via ThemeProvider",
              "Headless primitives available separately for custom styling",
            ].map((text) => (
              <li
                key={text}
                className="flex items-start gap-2.5 text-sm text-[var(--text)]"
              >
                <svg
                  width="15"
                  height="15"
                  className="mt-0.5 shrink-0 text-[var(--accent)]"
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
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-[540px] min-w-[320px] flex-[1_1_440px]">
          <Tabs defaultValue="install">
            <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
              <TabsList className="border-b border-[var(--border)] bg-[var(--surface-raised)] px-4 py-1">
                <TabsTrigger value="install" className="text-sm">
                  Install
                </TabsTrigger>
                <TabsTrigger value="usage" className="text-sm">
                  Usage
                </TabsTrigger>
              </TabsList>
              <TabsContent value="install" className="p-0">
                <CodeBlock code={installCode} language="bash" />
              </TabsContent>
              <TabsContent value="usage" className="p-0">
                <CodeBlock code={usageCode} language="tsx" />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
    </>
  );
}
