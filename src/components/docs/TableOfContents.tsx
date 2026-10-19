"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

const OFFSET = 96; // sticky header + breathing room

export function TableOfContents() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");
  const elsRef = useRef<HTMLElement[]>([]);

  const updateActive = useCallback(() => {
    const els = elsRef.current;
    if (!els.length) return;
    let current = els[0].id;
    for (const el of els) {
      if (el.getBoundingClientRect().top - OFFSET <= 0) current = el.id;
      else break;
    }
    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom) current = els[els.length - 1].id;
    setActiveId(current);
  }, []);

  useEffect(() => {
    let raf = 0;
    let debounceTimer: ReturnType<typeof setTimeout> | undefined;

    const collect = () => {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>("article h2[id], article h3[id]")
      ).filter((el) => el.getClientRects().length > 0);
      const seen = new Set<string>();
      for (const el of els) {
        let id = el.id;
        let n = 1;
        while (seen.has(id)) id = `${el.id}-${n++}`;
        seen.add(id);
        if (el.id !== id) el.id = id;
      }
      elsRef.current = els;
      const next = els.map((el) => ({
        id: el.id,
        text: el.textContent ?? "",
        level: el.tagName === "H3" ? 3 : 2,
      }));
      setHeadings((prev) =>
        prev.length === next.length && prev.every((h, i) => h.id === next[i].id)
          ? prev
          : next
      );
      updateActive();
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(collect);
    };

    const debouncedSchedule = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(schedule, 100);
    };

    schedule(); // re-scan on every route change
    const main = document.getElementById("main-content");
    const mo = new MutationObserver(debouncedSchedule);
    if (main) mo.observe(main, { childList: true, subtree: true });

    let scrollRaf = 0;
    const onScrollOrResize = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        updateActive();
      });
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(scrollRaf);
      if (debounceTimer) clearTimeout(debounceTimer);
      mo.disconnect();
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [pathname, updateActive]);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (lenis && !reduce) {
      const targetStyle =
        typeof window !== "undefined" ? window.getComputedStyle(el) : null;
      const scrollMargin = targetStyle ? parseFloat(targetStyle.scrollMarginTop) : 0;
      const offset = scrollMargin ? 0 : -OFFSET;
      lenis.scrollTo(el, { offset });
    } else {
      el.scrollIntoView?.({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
    history.replaceState(null, "", `#${id}`);
    setActiveId(id);
  };

  // Fade in the ToC when headings arrive after a route change.
  // We use a ref + rAF to avoid calling setState synchronously inside an effect.
  const navRef = useRef<HTMLElement>(null);
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // On pathname change, immediately hide (opacity 0)
    if (pathname !== prevPathnameRef.current) {
      nav.style.opacity = "0";
      prevPathnameRef.current = pathname;
    }

    // Once headings are populated, fade in via rAF
    if (headings.length > 0) {
      const raf = requestAnimationFrame(() => {
        nav.style.opacity = "1";
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [headings, pathname]);

  if (headings.length === 0) return null;

  return (
    <nav
      ref={navRef}
      aria-label="On this page"
      className="toc-fade-enter sticky top-[calc(var(--header-h)+1.5rem)] hidden w-56 shrink-0 self-start xl:block"
      style={{ opacity: 0 }}
    >
      <p className="mb-3 text-sm font-semibold tracking-wide text-[var(--text-faint)] uppercase">
        On this page
      </p>
      <ul className="space-y-2 border-l border-[var(--border-subtle)] text-sm">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "pl-7" : "pl-3"}>
            <a
              href={`#${h.id}`}
              onClick={(e) => onClick(e, h.id)}
              aria-current={activeId === h.id ? "location" : undefined}
              className={`-ml-px block border-l-2 py-0.5 pl-3 transition-[color,border-color] duration-200 ${
                activeId === h.id
                  ? "border-[var(--accent)] font-medium text-[var(--accent)]"
                  : "border-transparent text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
