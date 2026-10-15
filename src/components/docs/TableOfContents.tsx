"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("article h2[id], article h3[id]")
    );

    const seenIds = new Set<string>();
    const nextHeadings = elements.map((element) => {
      const id = element.id || "section";
      let uniqueId = id;
      let suffix = 1;

      while (seenIds.has(uniqueId)) {
        uniqueId = `${id}-${suffix}`;
        suffix += 1;
      }

      seenIds.add(uniqueId);
      element.id = uniqueId;

      return {
        id: uniqueId,
        text: element.textContent ?? "",
        level: element.tagName === "H3" ? 3 : 2,
      };
    });

    queueMicrotask(() => {
      setHeadings(nextHeadings);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="On this page"
      className="sticky top-[calc(4rem+45px+1.5rem)] hidden w-56 shrink-0 self-start xl:block"
    >
      <p className="mb-3 text-sm font-semibold tracking-wide text-[var(--text-faint)] uppercase">
        On this page
      </p>
      <ul className="space-y-2 border-l border-[var(--border-subtle)] text-sm">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? "pl-7" : "pl-3"}>
            <a
              href={`#${heading.id}`}
              className={`-ml-px block border-l-2 py-0.5 pl-3 transition-colors ${
                activeId === heading.id
                  ? "border-[var(--accent)] font-medium text-[var(--accent)]"
                  : "border-transparent text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
