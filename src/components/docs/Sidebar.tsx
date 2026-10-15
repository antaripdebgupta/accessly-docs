"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@accessly-ui/react";
import { gettingStartedNav, componentsNav, type NavSection } from "@/lib/nav-config";

function SidebarNav({
  sections,
  onNavigate,
}: {
  sections: NavSection[];
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const allSectionTitles = sections.map((section) => section.title);

  return (
    <Accordion type="multiple" defaultValue={allSectionTitles} className="space-y-4">
      {sections.map((section) =>
        section.href ? (
          <div key={section.title}>
            <Link
              href={section.href}
              className="block py-1 text-sm font-semibold tracking-wide text-[var(--text-faint)] uppercase hover:text-[var(--text)]"
            >
              {section.title}
            </Link>
            <ul className="mt-1 space-y-0.5 border-l border-[var(--border-subtle)] pl-3">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      aria-current={isActive ? "page" : undefined}
                      className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
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
        ) : (
          <AccordionItem
            key={section.title}
            value={section.title}
            className="border-none"
          >
            <AccordionTrigger className="flex w-full items-center justify-between py-1 text-sm font-semibold tracking-wide text-[var(--text-faint)] uppercase hover:text-[var(--text)]">
              {section.title}
            </AccordionTrigger>
            <AccordionContent className="pt-1">
              <ul className="space-y-0.5 border-l border-[var(--border-subtle)] pl-3">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onNavigate}
                        aria-current={isActive ? "page" : undefined}
                        className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
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
            </AccordionContent>
          </AccordionItem>
        )
      )}
    </Accordion>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const sections = pathname.startsWith("/components") ? componentsNav : gettingStartedNav;

  return (
    <aside className="hidden w-64 shrink-0 border-r border-[var(--border)] lg:block">
      <nav
        aria-label="Section navigation"
        className="sticky top-[calc(4rem+45px)] h-[calc(100dvh-4rem-45px)] overflow-y-auto px-4 py-6"
      >
        <SidebarNav sections={sections} />
      </nav>
    </aside>
  );
}

export { SidebarNav };
