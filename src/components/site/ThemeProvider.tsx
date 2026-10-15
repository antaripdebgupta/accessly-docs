"use client";

import {
  ThemeProvider as AccesslyThemeProvider,
  useTheme as useAccesslyTheme,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@accessly-ui/react";
import { useSyncExternalStore } from "react";
import type { ReactNode } from "react";

const emptySubscribe = () => () => {};

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <AccesslyThemeProvider defaultMode="system">{children}</AccesslyThemeProvider>;
}

export { useAccesslyTheme as useTheme };

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { mode, setMode, resolvedTheme } = useAccesslyTheme();

  if (!mounted) {
    return (
      <div
        className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button
          type="button"
          aria-label={`Current theme: ${mode}. Click to change theme`}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)] focus:ring-2 focus:ring-[var(--accent)] focus:outline-hidden ${className}`}
        >
          {isDark ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          )}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="z-50 w-36 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-1 shadow-lg"
      >
        <DropdownMenuItem
          onSelect={() => setMode("light")}
          className={`flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium ${
            mode === "light"
              ? "bg-[var(--accent-subtle)] text-[var(--accent)]"
              : "text-[var(--text-muted)] hover:bg-[var(--surface-raised)] hover:text-[var(--text)]"
          }`}
        >
          <span className="flex items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
            Light
          </span>
          {mode === "light" && (
            <svg
              width="14"
              height="14"
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
          )}
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={() => setMode("dark")}
          className={`flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium ${
            mode === "dark"
              ? "bg-[var(--accent-subtle)] text-[var(--accent)]"
              : "text-[var(--text-muted)] hover:bg-[var(--surface-raised)] hover:text-[var(--text)]"
          }`}
        >
          <span className="flex items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
            Dark
          </span>
          {mode === "dark" && (
            <svg
              width="14"
              height="14"
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
          )}
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={() => setMode("system")}
          className={`flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium ${
            mode === "system"
              ? "bg-[var(--accent-subtle)] text-[var(--accent)]"
              : "text-[var(--text-muted)] hover:bg-[var(--surface-raised)] hover:text-[var(--text)]"
          }`}
        >
          <span className="flex items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="14" x="2" y="3" rx="2" />
              <line x1="8" x2="16" y1="21" y2="21" />
              <line x1="12" x2="12" y1="17" y2="21" />
            </svg>
            System
          </span>
          {mode === "system" && (
            <svg
              width="14"
              height="14"
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
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
