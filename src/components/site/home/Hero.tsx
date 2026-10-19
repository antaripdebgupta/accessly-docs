import { Container } from "@/components/site/Container";
import { LinkButton } from "@/components/site/LinkButton";
import { HeroDemo } from "@/components/site/home/HeroDemo";
import { COMPONENT_COUNT } from "@/data/components/registry";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-x-clip pt-16 pb-20 lg:pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,var(--accent-subtle),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border-subtle)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-subtle)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] bg-[size:48px_48px] opacity-40"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          {/* Left column */}
          <div className="flex flex-col items-start gap-6">
            {/* 2. Heading h1 */}
            <h1
              id="hero-heading"
              className="reveal font-display text-5xl leading-[1.05] tracking-tight text-balance text-[var(--text)] sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "60ms" }}
            >
              Accessible components, without the accessibility homework.
            </h1>

            {/* 3. One sentence */}
            <p
              className="reveal max-w-[44ch] text-lg text-[var(--text-muted)]"
              style={{ animationDelay: "120ms" }}
            >
              Keyboard, focus and ARIA handled for you. {COMPONENT_COUNT} React
              components.
            </p>

            {/* 4. Two CTAs */}
            <div
              className="reveal flex w-full flex-col gap-3 min-[400px]:w-auto min-[400px]:flex-row min-[400px]:items-center"
              style={{ animationDelay: "180ms" }}
            >
              <LinkButton href="/docs/introduction" variant="primary">
                Get started
              </LinkButton>
              <LinkButton href="/components" variant="secondary">
                Components
              </LinkButton>
            </div>

            {/* 5. Check items */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--text-faint)]">
              {["Keyboard first", "Focus managed", "Dark mode"].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="text-[var(--accent)]"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column (visual) */}
          {/* Right column (interactive demo) */}
          <div
            className="reveal flex items-center justify-center lg:justify-end"
            style={{ animationDelay: "240ms" }}
          >
            <HeroDemo />
          </div>
        </div>
      </Container>
    </section>
  );
}
