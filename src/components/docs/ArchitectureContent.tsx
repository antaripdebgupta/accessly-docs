import Link from "next/link";
import { Callout } from "@/components/docs/Callout";
import { DocArticle } from "@/components/docs/DocArticle";
import { PageHeading } from "@/components/docs/PageHeading";
import { SectionHeading } from "@/components/docs/SectionHeading";
import { DocPager } from "@/components/docs/DocPager";
import { layers, principles, dataFlowSteps } from "@/data/docs/architecture";

export function ArchitectureContent() {
  return (
    <DocArticle size="default">
      <PageHeading
        title="Architecture"
        description="Accessly UI is split into four packages so that accessibility logic, visual styling, and shared utilities can evolve — and be adopted — independently."
      />

      <section className="mt-10">
        <SectionHeading id="layered-architecture" level={2}>
          A layered architecture
        </SectionHeading>
        <p className="mt-2 max-w-2xl text-sm text-[var(--text-muted)]">
          Each layer only knows about the one beneath it. Your application never has to
          depend on anything lower than the layer it chooses to consume.
        </p>

        <div className="mt-6 flex flex-col items-center">
          {layers.map((layer, i) => (
            <div key={layer.name} className="flex w-full flex-col items-center">
              {i > 0 && (
                <div className="flex justify-center py-1.5" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--border-strong)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </div>
              )}
              <div
                className={`w-full rounded-xl border p-5 ${
                  layer.tone === "accent"
                    ? "border-[var(--accent)]/30 bg-[var(--accent-subtle)]"
                    : "border-[var(--border)] bg-[var(--surface)]"
                }`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-mono text-sm font-semibold text-[var(--text)]">
                    {layer.name}
                  </span>
                  <span className="text-xs text-[var(--text-faint)]">
                    {layer.tagline}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">
                  {layer.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm text-[var(--text-muted)]">
          <code className="rounded bg-[var(--surface-raised)] px-1.5 py-0.5 font-mono text-[13px]">
            @accessly-ui/tailwind-preset
          </code>{" "}
          sits beside this stack rather than inside it — it only supplies CSS custom
          properties and Tailwind theme tokens that{" "}
          <code className="rounded bg-[var(--surface-raised)] px-1.5 py-0.5 font-mono text-[13px]">
            @accessly-ui/react
          </code>{" "}
          reads at build time. See{" "}
          <Link
            href="/docs/packages"
            className="font-medium text-[var(--accent)] hover:underline"
          >
            Packages
          </Link>{" "}
          for exactly what each one exports.
        </p>
      </section>

      <section className="mt-12">
        <SectionHeading id="design-principles" level={2}>
          Design principles
        </SectionHeading>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <h3 className="text-sm font-semibold text-[var(--text)]">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading id="data-flow" level={2}>
          How theming flows through the system
        </SectionHeading>
        <ol className="mt-4 space-y-3">
          {dataFlowSteps.map(([title, body], i) => (
            <li key={title} className="flex gap-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-subtle)] text-xs font-semibold text-[var(--accent)]">
                {i + 1}
              </span>
              <div>
                <p className="text-sm font-medium text-[var(--text)]">{title}</p>
                <p className="mt-0.5 text-sm text-[var(--text-muted)]">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12 mb-4">
        <SectionHeading id="rendering-strategy" level={2}>
          Server and client boundaries
        </SectionHeading>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
          Components that hold no interactive state — Avatar, Breadcrumb, Alert, Skeleton
          — render as Server Components by default. Anything that manages open/closed
          state, focus, or keyboard interaction (Dialog, DropdownMenu, Combobox, Tabs) is
          marked with{" "}
          <code className="rounded bg-[var(--surface-raised)] px-1.5 py-0.5 font-mono text-[13px]">
            &quot;use client&quot;
          </code>{" "}
          internally — you never need to add that directive yourself when importing from
          @accessly-ui/react.
        </p>

        <div className="mt-6">
          <Callout type="tip" title="Mixing headless and styled">
            It&apos;s fine to use @accessly-ui/react for most of an app and drop down to
            @accessly-ui/primitives for one component that needs a completely custom look
            — they share the same accessibility behavior, so switching layers never costs
            you correctness.
          </Callout>
        </div>
      </section>

      <DocPager
        prev={{
          href: "/docs/accessibility",
          label: "Accessibility Principles",
        }}
        next={{
          href: "/docs/packages",
          label: "Packages",
        }}
      />
    </DocArticle>
  );
}
