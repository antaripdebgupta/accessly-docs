import Link from "next/link";

export interface DocPagerItem {
  href: string;
  label: string;
}

export interface DocPagerProps {
  prev?: DocPagerItem;
  next?: DocPagerItem;
  className?: string;
}

export function DocPager({ prev, next, className = "" }: DocPagerProps) {
  if (!prev && !next) return null;

  return (
    <footer className={`mt-12 grid gap-3 sm:grid-cols-2 ${className}`.trim()}>
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col items-start justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--border-strong)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-hidden"
        >
          <span className="flex items-center gap-1.5 text-xs text-[var(--text-faint)]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transition-transform group-hover:-translate-x-0.5"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Previous
          </span>
          <span className="mt-2 font-medium text-[var(--text)]">{prev.label}</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex flex-col items-end justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-right transition-colors hover:border-[var(--border-strong)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-hidden sm:col-start-2"
        >
          <span className="flex items-center gap-1.5 text-xs text-[var(--text-faint)]">
            Next
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </span>
          <span className="mt-2 font-medium text-[var(--text)]">{next.label}</span>
        </Link>
      ) : (
        <div />
      )}
    </footer>
  );
}
