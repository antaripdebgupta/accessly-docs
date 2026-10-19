"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@accessly-ui/react";
import {
  gettingStartedNav,
  componentsNav,
  mobileNavMenuItems,
  type NavSection,
} from "@/data/navigation";
import { GITHUB_URL } from "@/data/site";
import { SunIcon, MoonIcon, MonitorIcon, GitHubIcon } from "@/components/icons";
import { SidebarNav } from "@/components/docs/Sidebar";
import { useTheme } from "@/components/site/ThemeProvider";

export interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const navSections: NavSection[] = [
  ...gettingStartedNav.map((s) => ({
    ...s,
    title: s.title === "Overview" ? "Getting Started" : s.title,
  })),
  ...componentsNav,
];

const menuItems = mobileNavMenuItems;

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const pathname = usePathname();
  const { mode, setMode } = useTheme();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer on route change using derived-state pattern (avoids setState inside useEffect)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (open) {
      onOpenChange(false);
    }
  }

  // Scroll the active link into view when the drawer opens
  useEffect(() => {
    if (!open) return;
    const raf = requestAnimationFrame(() => {
      const activeEl = drawerRef.current?.querySelector<HTMLElement>(
        '[aria-current="page"]'
      );
      if (activeEl && typeof activeEl.scrollIntoView === "function") {
        const prefersReducedMotion =
          typeof window !== "undefined" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        activeEl.scrollIntoView({
          block: "center",
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay visible={open} className="lg:hidden" />
      <DialogContent
        ref={drawerRef}
        showCloseButton={false}
        className="drawer-enter fixed inset-y-0 left-0 z-50 flex h-dvh max-h-none w-[88vw] max-w-sm flex-col overflow-hidden rounded-none border-r border-[var(--border)] bg-[var(--canvas)] p-0 shadow-2xl lg:hidden"
      >
        {/* Drawer header: close button + visible title on the left */}
        <div className="flex h-14 shrink-0 items-center gap-3 border-b border-[var(--border)] bg-[var(--canvas)] px-4">
          <DialogClose
            aria-label="Close menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <span className="sr-only">Close</span>
          </DialogClose>
          <DialogTitle className="text-base font-semibold tracking-tight text-[var(--text)]">
            Menu
          </DialogTitle>
        </div>

        {/* Drawer body */}
        <div
          data-lenis-prevent
          className="min-h-0 flex-1 space-y-6 overflow-y-auto overscroll-contain p-4"
        >
          {/* MENU group */}
          <div>
            <p className="py-0.5 text-sm font-semibold tracking-wide text-[var(--text-faint)] uppercase">
              Menu
            </p>
            <ul className="mt-1 space-y-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => onOpenChange(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex min-h-10 items-center rounded-md px-2.5 py-2.5 text-[15px] transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-hidden ${
                        isActive
                          ? "bg-[var(--accent-subtle)] font-medium text-[var(--accent)]"
                          : "text-[var(--text-muted)] hover:bg-[var(--surface-raised)] hover:text-[var(--text)]"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* GETTING STARTED and COMPONENTS groups */}
          <SidebarNav
            sections={navSections}
            size="touch"
            onNavigate={() => onOpenChange(false)}
          />
        </div>

        {/* Drawer footer */}
        <div className="mt-auto shrink-0 space-y-3 border-t border-[var(--border)] bg-[var(--canvas)] p-4">
          {/* Theme switcher: 3-button segmented control */}
          <div>
            <span className="sr-only">Select theme</span>
            <div
              role="group"
              aria-label="Theme selection"
              className="flex rounded-lg border border-[var(--border)] bg-[var(--surface)] p-1"
            >
              {[
                {
                  id: "light",
                  label: "Light",
                  icon: <SunIcon size={14} />,
                },
                {
                  id: "dark",
                  label: "Dark",
                  icon: <MoonIcon size={14} />,
                },
                {
                  id: "system",
                  label: "System",
                  icon: <MonitorIcon size={14} />,
                },
              ].map((themeOpt) => {
                const isSelected = mode === themeOpt.id;
                return (
                  <button
                    key={themeOpt.id}
                    type="button"
                    onClick={() => setMode(themeOpt.id as "light" | "dark" | "system")}
                    aria-pressed={isSelected}
                    className={`flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-2 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-hidden ${
                      isSelected
                        ? "bg-[var(--surface-raised)] text-[var(--text)] shadow-xs"
                        : "text-[var(--text-muted)] hover:text-[var(--text)]"
                    }`}
                  >
                    {themeOpt.icon}
                    {themeOpt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* GitHub link */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-10 items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-raised)] hover:text-[var(--text)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-hidden"
          >
            <GitHubIcon size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
