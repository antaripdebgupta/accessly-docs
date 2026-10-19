"use client";

import { CodeBlock } from "@/components/mdx/CodeBlock";
import { Callout } from "@/components/docs/Callout";
import { DocArticle } from "@/components/docs/DocArticle";
import { PageHeading } from "@/components/docs/PageHeading";
import { SectionHeading } from "@/components/docs/SectionHeading";
import { DocPager } from "@/components/docs/DocPager";
import { ThemeToggle } from "@/components/site/ThemeProvider";

const tokensCssExample = `:root {
  --header-h: 4rem;
  --canvas: #f7f7f8;
  --surface: #ffffff;
  --surface-raised: #ededf0;
  --border: #d4d4d8;
  --border-strong: #7a7a82;
  --border-subtle: #e4e4e7;
  --accent: #2563eb;
  --accent-subtle: #eff3fe;
  --accent-muted: #93bbfd;
  --text: #18181b;
  --text-muted: #48484d;
  --text-faint: #494950;
}

.dark {
  --canvas: #111113;
  --surface: #19191b;
  --surface-raised: #222225;
  --border: #2e2e33;
  --border-strong: #797981;
  --border-subtle: #27272a;
  --accent: #60a5fa;
  --accent-subtle: #172137;
  --accent-muted: #2563eb;
  --text: #e4e4e7;
  --text-muted: #babac0;
  --text-faint: #9a9aa2;
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
    <DocArticle size="default">
      <PageHeading
        title="Theming & Styling"
        description="Learn how tokens, dark mode orchestration, and Tailwind CSS work in harmony."
      />

      <section className="mt-8">
        <SectionHeading id="design-tokens-architecture" level={2}>
          Design Tokens Architecture
        </SectionHeading>
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
        <SectionHeading id="dark-mode-synchronization" level={2}>
          Dark Mode Synchronization
        </SectionHeading>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          The ThemeProvider manages system preference detection, localStorage persistence,
          and class toggling on the HTML root element. You can place the ThemeToggle
          anywhere in your navigation.
        </p>

        <div className="my-6 flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
          <div>
            <h3 className="text-sm font-semibold text-[var(--text)]">
              Interactive Theme Toggle
            </h3>
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

      <DocPager
        prev={{
          href: "/docs/installation",
          label: "Installation",
        }}
        next={{
          href: "/docs/accessibility",
          label: "Accessibility Principles",
        }}
      />
    </DocArticle>
  );
}
