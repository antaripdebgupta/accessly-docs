"use client";
/* eslint-disable jsx-a11y/no-noninteractive-tabindex -- Scrollable code region must be keyboard-accessible per WCAG 2.1.1 */

import { useEffect, useState } from "react";
import { highlight } from "@/lib/highlight";

export interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
  flush?: boolean;
}

export function CodeBlock({
  code,
  language = "tsx",
  filename,
  className,
  flush = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlightedHtml, setHighlightedHtml] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    highlight(code, language)
      .then((html) => {
        if (!cancelled) {
          setHighlightedHtml(html);
        }
      })
      .catch((err) => {
        if (process.env.NODE_ENV !== "production") console.error("[highlight]", err);
      });

    return () => {
      cancelled = true;
    };
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const containerClasses = flush
    ? `overflow-hidden bg-[var(--surface-raised)] text-[var(--text)] ${className || ""}`
    : `overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text)] shadow-sm ${className || "my-2"}`;

  return (
    <div className={containerClasses}>
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2.5 text-sm">
        <span className="font-mono text-[var(--text-muted)]">{filename || language}</span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copied code to clipboard" : "Copy code to clipboard"}
          className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-sm font-medium text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-raised)] hover:text-[var(--text)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-hidden"
        >
          {copied ? (
            <>
              <svg
                className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg
                className="h-3.5 w-3.5 text-[var(--text-muted)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div
        tabIndex={0}
        role="region"
        aria-label={`${filename || language} code`}
        className="relative overflow-x-auto p-4 font-mono text-sm leading-relaxed text-[var(--text)] tabular-nums focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-hidden focus-visible:ring-inset sm:text-sm"
      >
        {highlightedHtml ? (
          <div
            className="code-highlight-fade"
            style={{ opacity: 1 }}
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        ) : (
          <pre className="font-mono text-sm leading-relaxed">
            <code>{code}</code>
          </pre>
        )}
        <div aria-live="polite" className="sr-only">
          {copied ? "Code copied to clipboard" : ""}
        </div>
      </div>
    </div>
  );
}
