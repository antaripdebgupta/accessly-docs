import Link from "next/link";
import { cacheLife } from "next/cache";
import { Container } from "@/components/site/Container";
import { CheckIcon } from "@/components/icons";
import { GITHUB_URL, NPM_URL } from "@/data/site";

export async function Footer() {
  "use cache";
  cacheLife("days");

  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[var(--border)] py-8">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-[var(--accent)] text-[var(--canvas)]">
              <CheckIcon size={10} strokeWidth={3} />
            </span>
            <span className="font-semibold text-[var(--text)]">Accessly UI</span>
            <span aria-hidden="true">·</span>
            <span>&copy; {year} · MIT</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/docs/introduction"
              className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              Docs
            </Link>
            <Link
              href="/components"
              className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              Components
            </Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              GitHub
            </a>
            <a
              href={NPM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              npm
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
