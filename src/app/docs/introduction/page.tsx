"use client";

import Link from "next/link";
import {
  Button,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@accessly-ui/react";
import { CodeBlock } from "@/components/mdx/CodeBlock";

const installCode = `npm install @accessly-ui/react @accessly-ui/tailwind-preset`;

const cssSetup = `/* globals.css */
@import "tailwindcss";
@import "@accessly-ui/tailwind-preset/theme.css";
@source "../node_modules/@accessly-ui/react/dist/**/*.js";`;

const usageCode = `import { ThemeProvider, Button, Dialog, DialogTrigger, DialogOverlay, DialogContent, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogClose } from "@accessly-ui/react";

export default function App() {
  return (
    <ThemeProvider defaultMode="system">
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  );
}`;

export default function IntroductionPage() {
  return (
    <article className="max-w-3xl">
      <div className="mb-8 space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          Introduction
        </h1>
        <p className="text-base leading-relaxed text-[var(--text-muted)]">
          Accessly UI is a collection of 22 WCAG 2.2 AA accessible React components with
          keyboard navigation, focus management, and ARIA wiring built in. Use them
          headless or pre-styled with Tailwind CSS.
        </p>
      </div>

      <section className="mb-12 space-y-4">
        <h2 className="text-xl font-semibold text-[var(--text)]">Quick Start</h2>
        <CodeBlock code={installCode} language="bash" filename="Terminal" />
        <CodeBlock code={cssSetup} language="css" filename="globals.css" />
        <CodeBlock code={usageCode} language="tsx" filename="App.tsx" />
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-xl font-semibold text-[var(--text)]">Packages</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              name: "@accessly-ui/react",
              desc: "Pre-styled, composable React components.",
            },
            {
              name: "@accessly-ui/primitives",
              desc: "Headless, unstyled component logic and hooks.",
            },
            {
              name: "@accessly-ui/tailwind-preset",
              desc: "Tailwind CSS v4 theme preset with design tokens.",
            },
            {
              name: "@accessly-ui/utils",
              desc: "Shared accessibility utilities (focus trap, live region, etc).",
            },
          ].map((pkg) => (
            <div
              key={pkg.name}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
            >
              <span className="block font-mono text-sm font-semibold text-[var(--text)]">
                {pkg.name}
              </span>
              <span className="mt-1 block text-sm text-[var(--text-muted)]">
                {pkg.desc}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">FAQ</h2>
        <Accordion type="multiple">
          <AccordionItem value="frameworks">
            <AccordionTrigger>
              Does Accessly UI work with Next.js, Remix, Vite?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-[var(--text-muted)]">
                Yes. Accessly UI is framework-agnostic React. It works with any React
                meta-framework or bundler.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="tailwind">
            <AccordionTrigger>Is Tailwind CSS required?</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-[var(--text-muted)]">
                No. The pre-styled components use Tailwind via the preset, but
                @accessly-ui/primitives is completely unstyled and works without Tailwind.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="wcag">
            <AccordionTrigger>What level of WCAG compliance?</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-[var(--text-muted)]">
                All components target WCAG 2.2 AA. Every interactive pattern follows the
                WAI-ARIA Authoring Practices Guide with keyboard and screen reader
                testing.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <div className="flex gap-3">
        <Link href="/docs/installation">
          <Button variant="primary">Installation</Button>
        </Link>
        <Link href="/components/button">
          <Button variant="secondary">Browse Components</Button>
        </Link>
      </div>
    </article>
  );
}
