"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@accessly-ui/react";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { DocArticle } from "@/components/docs/DocArticle";
import { PageHeading } from "@/components/docs/PageHeading";
import { SectionHeading } from "@/components/docs/SectionHeading";
import { LinkButton } from "@/components/site/LinkButton";
import { INSTALL_COMMAND } from "@/data/site";
import { packages } from "@/data/docs/packages";
import { ArrowUpRight } from "lucide-react";

const installCode = INSTALL_COMMAND;

const cssSetup = `/* globals.css */
@import "tailwindcss";
@import "@accessly-ui/tailwind-preset/theme.css";
@source "../node_modules/@accessly-ui/react/dist/**/*.js";`;

const usageCode = `import {
  ThemeProvider,
  Button
} from "@accessly-ui/react";

export default function App() {
  return (
    <ThemeProvider defaultMode="system">
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  );
}`;

export function IntroductionContent() {
  return (
    <DocArticle size="narrow">
      <PageHeading
        title="Introduction"
        description="Accessly UI is a collection of 22 WCAG 2.2 AA accessible React components with keyboard navigation, focus management, and ARIA wiring built in. Use them headless or pre-styled with Tailwind CSS."
      />

      <section className="mt-8 mb-12 space-y-4">
        <SectionHeading id="quick-start" level={2}>
          Quick Start
        </SectionHeading>
        <CodeBlock code={installCode} language="bash" filename="Terminal" />
        <CodeBlock code={cssSetup} language="css" filename="globals.css" />
        <CodeBlock code={usageCode} language="tsx" filename="App.tsx" />
      </section>

      <section className="mb-12 space-y-4">
        <SectionHeading id="packages" level={2}>
          Packages
        </SectionHeading>
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
          ].map((pkg) => {
            const npmUrl = packages.find((p) => p.name === pkg.name)?.npmUrl;
            return (
              <div
                key={pkg.name}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
              >
                <a
                  href={npmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-sm font-mono text-sm font-semibold text-[var(--text)] hover:text-[var(--accent)] hover:underline focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-hidden"
                >
                  {pkg.name}
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
                <span className="mt-1 block text-sm text-[var(--text-muted)]">
                  {pkg.desc}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-12">
        <SectionHeading id="faq" level={2} className="mb-4">
          FAQ
        </SectionHeading>
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
        <LinkButton href="/docs/installation" variant="primary">
          Installation
        </LinkButton>
        <LinkButton href="/components" variant="secondary">
          Browse Components
        </LinkButton>
      </div>
    </DocArticle>
  );
}
