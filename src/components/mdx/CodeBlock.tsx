"use client";

import { useState } from "react";

export interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({
  code,
  language = "tsx",
  filename,
  className = "my-2",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      className={`overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text)] shadow-sm ${className}`}
    >
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2.5 text-sm">
        <span className="font-mono text-[var(--text-muted)]">{filename || language}</span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copied code to clipboard" : "Copy code to clipboard"}
          className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-sm font-medium text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-raised)] hover:text-[var(--text)] focus:ring-2 focus:ring-[var(--accent)] focus:outline-hidden"
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
      <div className="relative overflow-x-auto p-4 font-mono text-sm leading-relaxed text-[var(--text)] sm:text-sm">
        <pre>
          <code>{code}</code>
        </pre>
        <div aria-live="polite" className="sr-only">
          {copied ? "Code copied to clipboard" : ""}
        </div>
      </div>
    </div>
  );
}
