"use client";

import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@accessly-ui/react";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { Container } from "@/components/site/Container";

import { INSTALL_COMMAND } from "@/data/site";

const installCode = INSTALL_COMMAND;

const usageCode = `import { ThemeProvider, Button } from "@accessly-ui/react";

export default function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Get started</Button>
    </ThemeProvider>
  );
}`;

export function InstallSection() {
  return (
    <section aria-labelledby="install-heading" className="py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left column */}
          <div className="flex min-w-0 flex-col items-start gap-4">
            <h2
              id="install-heading"
              className="text-3xl font-semibold tracking-tight text-[var(--text)]"
            >
              Install in seconds.
            </h2>
            <p className="text-base text-[var(--text-muted)]">
              Works with Next.js, Vite and Remix.
            </p>
            <Link
              href="/docs/introduction"
              className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] hover:underline focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-none"
            >
              Read the docs <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Right column */}
          <div className="min-w-0">
            <div className="min-w-0 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
              <Tabs defaultValue="install" className="min-w-0 gap-0!">
                <TabsList className="mb-0! border-b border-[var(--border)] bg-[var(--surface-raised)] px-4 py-1">
                  <TabsTrigger value="install" className="text-sm">
                    Install
                  </TabsTrigger>
                  <TabsTrigger value="usage" className="text-sm">
                    Usage
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="install" className="mt-0! p-0! focus:outline-hidden">
                  <CodeBlock code={installCode} language="bash" flush />
                </TabsContent>
                <TabsContent value="usage" className="mt-0! p-0! focus:outline-hidden">
                  <CodeBlock code={usageCode} language="tsx" flush />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
