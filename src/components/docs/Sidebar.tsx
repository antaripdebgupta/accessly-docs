"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { gettingStartedNav, componentsNav, type NavSection } from "@/data/navigation";

export interface SidebarNavProps {
  sections: NavSection[];
  onNavigate?: () => void;
  size?: "default" | "touch";
}

function SidebarNav({ sections, onNavigate, size = "default" }: SidebarNavProps) {
  const pathname = usePathname();
  const isTouch = size === "touch";

  return (
    <div className={isTouch ? "space-y-6" : "flex min-h-0 flex-1 flex-col space-y-4"}>
      {sections.map((section) => (
        <div
          key={section.title}
          className={isTouch ? "" : "flex min-h-0 flex-1 flex-col"}
        >
          <div className="shrink-0">
            {section.href ? (
              <Link
                href={section.href}
                onClick={onNavigate}
                aria-current={pathname === section.href ? "page" : undefined}
                className={`block rounded-sm py-0.5 text-xs font-semibold tracking-wider uppercase transition-colors hover:text-[var(--text)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-hidden ${
                  pathname === section.href
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-faint)]"
                }`}
              >
                {section.title}
              </Link>
            ) : (
              <p className="py-0.5 text-xs font-semibold tracking-wider text-[var(--text-faint)] uppercase">
                {section.title}
              </p>
            )}
          </div>
          <ul
            data-lenis-prevent
            className={
              isTouch
                ? "mt-1 space-y-1"
                : "mt-1 min-h-0 flex-1 space-y-0.5 overflow-y-auto overscroll-contain"
            }
          >
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-lg transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-hidden ${
                      isTouch
                        ? "flex min-h-10 items-center px-3 py-2.5 text-[15px]"
                        : "block px-3 py-1.5 text-sm"
                    } ${
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
      ))}
    </div>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const sections = pathname.startsWith("/components") ? componentsNav : gettingStartedNav;

  return (
    <aside className="sticky top-[var(--header-h)] hidden h-[calc(100dvh-var(--header-h))] w-64 shrink-0 flex-col self-start border-r border-[var(--border)] lg:flex">
      <nav
        aria-label="Section navigation"
        className="flex min-h-0 flex-1 flex-col py-8 pr-4 pl-0"
      >
        <SidebarNav sections={sections} />
      </nav>
    </aside>
  );
}

export { SidebarNav };
