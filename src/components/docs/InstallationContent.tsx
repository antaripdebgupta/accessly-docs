"use client";

import Link from "next/link";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { Callout } from "@/components/docs/Callout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
  Button,
} from "@accessly-ui/react";

const installNpm = `npm install @accessly-ui/react @accessly-ui/tailwind-preset`;
const installPnpm = `pnpm add @accessly-ui/react @accessly-ui/tailwind-preset`;
const installYarn = `yarn add @accessly-ui/react @accessly-ui/tailwind-preset`;

const globalsCss = `@import "tailwindcss";
@import "@accessly-ui/tailwind-preset/theme.css";

@source "../node_modules/@accessly-ui/react/dist";`;

const rootLayoutCode = `import { Fraunces } from "next/font/google";
import { getThemeScript, ThemeProvider } from "@accessly-ui/react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: getThemeScript({ defaultMode: "system" }),
          }}
        />
      </head>
      <body>
        <ThemeProvider defaultMode="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`;

const firstComponentCode = `import { Button } from "@accessly-ui/react";

export default function Page() {
  return (
    <main className="p-8">
      <Button variant="primary">Hello Accessly UI</Button>
    </main>
  );
}`;

export function InstallationContent() {
  return (
    <article className="max-w-4xl min-w-0 py-6">
      <div className="mb-6">
        <Breadcrumb aria-label="Breadcrumb navigation">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem href="/docs/introduction">Docs</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem href="/docs/installation" isCurrent>
            Installation
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <header className="border-b border-[var(--border)] pb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          Installation
        </h1>
        <p className="mt-3 text-base text-[var(--text-muted)] sm:text-lg">
          Set up @accessly-ui/react and the Tailwind CSS preset in your application.
        </p>
      </header>

      <section className="mt-8">
        <h2 id="install-packages" className="text-xl font-semibold text-[var(--text)]">
          1. Install Packages
        </h2>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          Install the main React component bundle alongside the Tailwind theme preset.
        </p>
        <div className="mt-4 space-y-4">
          <CodeBlock code={installNpm} language="bash" filename="npm" />
          <CodeBlock code={installPnpm} language="bash" filename="pnpm" />
          <CodeBlock code={installYarn} language="bash" filename="yarn" />
        </div>
      </section>

      <section className="mt-10">
        <h2 id="configure-styles" className="text-xl font-semibold text-[var(--text)]">
          2. Configure Styles
        </h2>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          Import the Accessly UI Tailwind preset theme into your main CSS stylesheet.
          Ensure the source directive scans the published component distribution.
        </p>
        <CodeBlock code={globalsCss} language="css" filename="src/app/globals.css" />
      </section>

      <section className="mt-10">
        <h2
          id="themeprovider-script"
          className="text-xl font-semibold text-[var(--text)]"
        >
          3. ThemeProvider & Script
        </h2>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          Wrap your root layout with ThemeProvider and inline the anti-flash theme script
          in the head. This eliminates dark mode flickering on initial load.
        </p>
        <CodeBlock code={rootLayoutCode} language="tsx" filename="src/app/layout.tsx" />
      </section>

      <section className="mt-10">
        <h2
          id="test-your-first-component"
          className="text-xl font-semibold text-[var(--text)]"
        >
          4. Test Your First Component
        </h2>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          Import and render any component from @accessly-ui/react:
        </p>
        <CodeBlock code={firstComponentCode} language="tsx" filename="src/app/page.tsx" />
        <div className="mt-4 flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
          <span className="text-sm font-medium text-[var(--text-muted)]">Preview:</span>
          <Button variant="primary">Hello Accessly UI</Button>
        </div>
      </section>

      <section className="mt-10">
        <Callout type="tip" title="TypeScript Ready">
          All packages ship first-class TypeScript declaration files. No separate @types
          packages are required.
        </Callout>
      </section>

      <footer className="mt-14 flex items-center justify-between border-t border-[var(--border)] pt-6 text-sm">
        <Link href="/docs/introduction" className="group flex flex-col text-left">
          <span className="text-sm text-[var(--text-faint)]">Previous</span>
          <span className="font-medium text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]">
            Introduction
          </span>
        </Link>
        <Link href="/docs/theming" className="group ml-auto flex flex-col text-right">
          <span className="text-sm text-[var(--text-faint)]">Next</span>
          <span className="font-medium text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]">
            Theming & Styling
          </span>
        </Link>
      </footer>
    </article>
  );
}
