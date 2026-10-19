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

import { SunIcon, MoonIcon, MonitorIcon, CheckIcon } from "@/components/icons";

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
          className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-hidden ${className}`}
        >
          {isDark ? <MoonIcon size={16} /> : <SunIcon size={16} />}
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
            <SunIcon size={14} />
            Light
          </span>
          {mode === "light" && <CheckIcon size={14} strokeWidth={2.5} />}
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
            <MoonIcon size={14} />
            Dark
          </span>
          {mode === "dark" && <CheckIcon size={14} strokeWidth={2.5} />}
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
            <MonitorIcon size={14} />
            System
          </span>
          {mode === "system" && <CheckIcon size={14} strokeWidth={2.5} />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
