"use client";

import { Callout } from "@/components/docs/Callout";
import { DocArticle } from "@/components/docs/DocArticle";
import { PageHeading } from "@/components/docs/PageHeading";
import { SectionHeading } from "@/components/docs/SectionHeading";
import { DocPager } from "@/components/docs/DocPager";
import { Button, Switch } from "@accessly-ui/react";
import { pillars } from "@/data/docs/accessibility";

export function AccessibilityContent() {
  return (
    <DocArticle size="default">
      <PageHeading
        title="Accessibility Principles"
        description="Our foundation for building inclusive, standard-conforming software for all users."
      />

      <section className="mt-8">
        <SectionHeading id="four-pillars-of-accessly-ui" level={2}>
          Four Pillars of Accessly UI
        </SectionHeading>
        <div className="mt-6 space-y-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="py-1 pl-4">
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
        <SectionHeading id="visible-focus-ring-guarantees" level={2}>
          Visible Focus Ring Guarantees
        </SectionHeading>
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

      <DocPager
        prev={{
          href: "/docs/theming",
          label: "Theming & Styling",
        }}
        next={{
          href: "/components",
          label: "Browse Components",
        }}
      />
    </DocArticle>
  );
}
