"use client";

import Link from "next/link";
import { Callout } from "@/components/docs/Callout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
  Button,
  Switch,
} from "@accessly-ui/react";

const pillars = [
  {
    title: "1. Keyboard Operability (WCAG 2.1)",
    description:
      "Every single component is operable without a mouse. Standard keystrokes (Tab, Shift+Tab, Enter, Space, Arrow keys, Escape) follow established W3C APG patterns.",
  },
  {
    title: "2. Focus Management & Restoration (WCAG 2.4.3)",
    description:
      "Modal overlays trap focus within active boundaries. When overlays close, focus returns cleanly to the triggering element. Dynamic widgets utilize roving tabindex to preserve a single tab stop.",
  },
  {
    title: "3. Semantic ARIA & Live Regions (WCAG 4.1.2 & 4.1.3)",
    description:
      "Components ship explicit ARIA attributes (roles, states, expanded/selected/current flags). Asynchronous operations announce updates using polite or assertive live regions.",
  },
  {
    title: "4. Contrast & Motion Preferences (WCAG 1.4.3 & 2.2.2)",
    description:
      "All text maintains at least 4.5:1 contrast against warm canvas backgrounds. Interactive control borders exceed 3:1. Animations automatically disable under prefers-reduced-motion.",
  },
];

export function AccessibilityContent() {
  return (
    <article className="max-w-4xl min-w-0 py-6">
      <div className="mb-6">
        <Breadcrumb aria-label="Breadcrumb navigation">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem href="/docs/introduction">Docs</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem href="/docs/accessibility" isCurrent>
            Accessibility Principles
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <header className="border-b border-[var(--border)] pb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          Accessibility Principles
        </h1>
        <p className="mt-3 text-base text-[var(--text-muted)] sm:text-lg">
          Our foundation for building inclusive, standard-conforming software for all
          users.
        </p>
      </header>

      <section className="mt-8">
        <h2
          id="four-pillars-of-accessly-ui"
          className="text-xl font-semibold text-[var(--text)]"
        >
          Four Pillars of Accessly UI
        </h2>
        <div className="mt-6 space-y-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="border-l-2 border-[var(--accent)] py-1 pl-4"
            >
              <h3 className="text-base font-semibold text-[var(--text)]">
                {pillar.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2
          id="visible-focus-ring-guarantees"
          className="text-xl font-semibold text-[var(--text)]"
        >
          Visible Focus Ring Guarantees
        </h2>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          Focus indicators are never hidden or suppressed. Every interactive element
          renders a high-contrast 2px focus ring with an offset when focused via keyboard
          navigation:
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <Button variant="primary">Focus Me with Tab</Button>
          <Button variant="secondary">Another Target</Button>
          <Switch defaultChecked label="Interactive Toggle" />
        </div>
      </section>

      <section className="mt-10">
        <Callout type="info" title="Audit Testing Routine">
          Every component in Accessly UI is tested with automated axe-core accessibility
          linters, keyboard navigation unit tests in Vitest, and screen reader
          verification with NVDA and VoiceOver.
        </Callout>
      </section>

      <footer className="mt-14 flex items-center justify-between border-t border-[var(--border)] pt-6 text-sm">
        <Link href="/docs/theming" className="group flex flex-col text-left">
          <span className="text-sm text-[var(--text-faint)]">Previous</span>
          <span className="font-medium text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]">
            Theming & Styling
          </span>
        </Link>
        <Link
          href="/components/button"
          className="group ml-auto flex flex-col text-right"
        >
          <span className="text-sm text-[var(--text-faint)]">Next</span>
          <span className="font-medium text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]">
            Browse Components (Button)
          </span>
        </Link>
      </footer>
    </article>
  );
}
