"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@accessly-ui/react";
import { ThemeToggle } from "@/components/site/ThemeProvider";
import { SearchDialog } from "@/components/site/SearchDialog";
import { MobileNav } from "@/components/site/MobileNav";
import { GitHubIcon } from "@/components/icons";
import { GITHUB_URL } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const section = pathname.startsWith("/components")
    ? "components"
    : pathname.startsWith("/docs")
      ? "docs"
      : "";

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--canvas)]/90 backdrop-blur-md supports-[backdrop-filter]:bg-[var(--canvas)]/80">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-8">
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-9">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-haspopup="dialog"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-hidden lg:hidden"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>

            <Link href="/" className="flex shrink-0 items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Accessly UI logo"
                width={24}
                height={24}
                className="h-8 w-8 rounded-md object-cover"
                priority
              />
              <span className="text-base font-semibold tracking-tight text-[var(--text)]">
                Accessly UI
              </span>
            </Link>

            <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
              <Link
                href="/docs/introduction"
                aria-current={section === "docs" ? "page" : undefined}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-hidden ${
                  section === "docs"
                    ? "bg-[var(--surface-raised)] text-[var(--text)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                Getting Started
              </Link>
              <Link
                href="/components"
                aria-current={section === "components" ? "page" : undefined}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-hidden ${
                  section === "components"
                    ? "bg-[var(--surface-raised)] text-[var(--text)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                Components
              </Link>
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search documentation"
              className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 text-sm text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-hidden"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden rounded border border-[var(--border)] bg-[var(--surface-raised)] px-1.5 py-0.5 font-mono text-[11px] text-[var(--text-muted)] sm:inline">
                ⌘K
              </kbd>
            </button>

            <Tooltip>
              <TooltipTrigger>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="hidden h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-hidden md:inline-flex"
                >
                  <GitHubIcon size={16} />
                </a>
              </TooltipTrigger>
              <TooltipContent className="rounded-md border border-[var(--border)] bg-[var(--surface-raised)] px-2 py-1 text-sm text-[var(--text)] shadow-sm">
                GitHub
              </TooltipContent>
            </Tooltip>

            <ThemeToggle />
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
