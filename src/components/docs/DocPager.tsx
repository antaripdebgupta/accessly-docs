import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
            <ChevronLeft
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5"
            />
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
            <ChevronRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            />
          </span>
          <span className="mt-2 font-medium text-[var(--text)]">{next.label}</span>
        </Link>
      ) : (
        <div />
      )}
    </footer>
  );
}
