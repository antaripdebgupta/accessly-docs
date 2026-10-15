"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@accessly-ui/react";
import { ThemeToggle } from "@/components/site/ThemeProvider";
import { SearchDialog } from "@/components/site/SearchDialog";

export function Header() {
  const router = useRouter();
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
      <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--canvas)]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-8">
          <div className="flex items-center gap-6 sm:gap-9">
            <Link href="/" className="flex shrink-0 items-center gap-2.5">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[var(--accent)] text-[var(--canvas)]">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-base font-semibold tracking-tight text-[var(--text)]">
                Accessly UI
              </span>
            </Link>

            <nav aria-label="Main" className="hidden items-center md:flex">
              <Tabs
                value={section}
                onValueChange={(v) =>
                  router.push(
                    v === "components" ? "/components/button" : "/docs/introduction"
                  )
                }
              >
                <TabsList>
                  <TabsTrigger
                    value="docs"
                    onClick={() => router.push("/docs/introduction")}
                  >
                    Getting Started
                  </TabsTrigger>
                  <TabsTrigger
                    value="components"
                    onClick={() => router.push("/components/button")}
                  >
                    Components
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-2.5">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search documentation"
              className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 text-sm text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
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
                  href="https://github.com/antaripdebgupta/accessible-component-library"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)] focus:ring-2 focus:ring-[var(--accent)] focus:outline-hidden"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </a>
              </TooltipTrigger>
              <TooltipContent className="rounded-md border border-[var(--border)] bg-[var(--surface-raised)] px-2 py-1 text-sm text-[var(--text)] shadow-sm">
                GitHub
              </TooltipContent>
            </Tooltip>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open mobile menu"
              className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] p-1.5 text-[var(--text-muted)] md:hidden"
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
          </div>
        </div>
      </header>

      <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
        <DialogOverlay visible={mobileOpen} />
        <DialogContent className="fixed inset-y-0 right-0 w-[280px] rounded-none border-l border-[var(--border)] bg-[var(--canvas)] p-6 shadow-xl">
          <DialogHeader>
            <DialogTitle className="sr-only">Navigation menu</DialogTitle>
            <DialogClose className="absolute top-4 right-4" />
          </DialogHeader>
          <nav aria-label="Mobile" className="mt-8 flex flex-col gap-4">
            <Link
              href="/docs/introduction"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-[var(--text-muted)] hover:text-[var(--text)]"
            >
              Getting Started
            </Link>
            <Link
              href="/components/button"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-[var(--text-muted)] hover:text-[var(--text)]"
            >
              Components
            </Link>
            <a
              href="https://github.com/antaripdebgupta/accessible-component-library"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-[var(--text-muted)] hover:text-[var(--text)]"
            >
              GitHub
            </a>
          </nav>
        </DialogContent>
      </Dialog>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
