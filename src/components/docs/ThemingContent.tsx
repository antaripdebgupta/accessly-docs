"use client";

import Link from "next/link";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { Callout } from "@/components/docs/Callout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator } from "@accessly-ui/react";
import { ThemeToggle } from "@/components/site/ThemeProvider";

const tokensCssExample = `:root {
  --canvas: #f8fafc;
  --surface: #ffffff;
  --surface-raised: #f1f5f9;
  --border: #e2e8f0;
  --border-strong: #cbd5e1;
  --accent: #2563eb;
  --accent-subtle: #eff6ff;
  --text: #0f172a;
  --text-muted: #64748b;
}

.dark {
  --canvas: #090d16;
  --surface: #0f172a;
  --surface-raised: #1e293b;
  --border: #1e293b;
  --border-strong: #334155;
  --accent: #3b82f6;
  --accent-subtle: #1e3a8a;
  --text: #f8fafc;
  --text-muted: #94a3b8;
}`;

const useThemeExample = `import { useTheme } from "@accessly-ui/react";

export function CustomToggle() {
  const { mode, setMode } = useTheme();

  return (
    <button
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      className="rounded px-3 py-1.5 text-sm font-medium"
    >
      Current mode: {mode}
    </button>
  );
}`;

export function ThemingContent() {
  return (
    <article className="max-w-4xl min-w-0 py-6">
      <div className="mb-6">
        <Breadcrumb aria-label="Breadcrumb navigation">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem href="/docs/introduction">Docs</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem href="/docs/theming" isCurrent>
            Theming & Styling
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <header className="border-b border-[var(--border)] pb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          Theming & Styling
        </h1>
        <p className="mt-3 text-base text-[var(--text-muted)] sm:text-lg">
          Learn how tokens, dark mode orchestration, and Tailwind CSS work in harmony.
        </p>
      </header>

      <section className="mt-8">
        <h2
          id="design-tokens-architecture"
          className="text-xl font-semibold text-[var(--text)]"
        >
          Design Tokens Architecture
        </h2>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          Accessly UI is styled around a precise palette of cool zinc surfaces,
          high-contrast readable typography, and an intentional focus-ring blue accent.
          All tokens are exposed as standard CSS variables.
        </p>
        <CodeBlock
          code={tokensCssExample}
          language="css"
          filename="src/styles/tokens.css"
        />
      </section>

      <section className="mt-10">
        <h2
          id="dark-mode-synchronization"
          className="text-xl font-semibold text-[var(--text)]"
        >
          Dark Mode Synchronization
        </h2>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          The ThemeProvider manages system preference detection, localStorage persistence,
          and class toggling on the HTML root element. You can place the ThemeToggle
          anywhere in your navigation.
        </p>

        <div className="my-6 flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
          <div>
            <h4 className="text-sm font-semibold text-[var(--text)]">
              Interactive Theme Toggle
            </h4>
            <p className="text-sm text-[var(--text-muted)]">
              Try toggling the theme here to observe instant token updates.
            </p>
          </div>
          <ThemeToggle />
        </div>

        <CodeBlock code={useThemeExample} language="tsx" filename="CustomToggle.tsx" />
      </section>

      <section className="mt-10">
        <Callout type="warning" title="Anti-Flash Head Script">
          Always include getThemeScript() inside the document head. This runs
          synchronously before initial paint, completely preventing light/dark flash
          during hydration.
        </Callout>
      </section>

      <footer className="mt-14 flex items-center justify-between border-t border-[var(--border)] pt-6 text-sm">
        <Link href="/docs/installation" className="group flex flex-col text-left">
          <span className="text-sm text-[var(--text-faint)]">Previous</span>
          <span className="font-medium text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]">
            Installation
          </span>
        </Link>
        <Link
          href="/docs/accessibility"
          className="group ml-auto flex flex-col text-right"
        >
          <span className="text-sm text-[var(--text-faint)]">Next</span>
          <span className="font-medium text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]">
            Accessibility Principles
          </span>
        </Link>
      </footer>
    </article>
  );
}
