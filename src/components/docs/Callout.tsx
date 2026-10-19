import type { ReactNode } from "react";

export interface CalloutProps {
  type?: "info" | "warning" | "success" | "danger" | "tip";
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Callout({
  type = "info",
  title,
  children,
  className = "",
}: CalloutProps) {
  const styles = {
    info: {
      container: "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]",
      accent: "text-[var(--accent)]",
      defaultTitle: "Note",
    },
    warning: {
      container: "border-amber-500/30 bg-amber-500/10 text-[var(--text)]",
      accent: "text-amber-600 dark:text-amber-400",
      defaultTitle: "Warning",
    },
    success: {
      container: "border-emerald-500/30 bg-emerald-500/10 text-[var(--text)]",
      accent: "text-emerald-600 dark:text-emerald-400",
      defaultTitle: "Tip",
    },
    danger: {
      container: "border-red-500/30 bg-red-500/10 text-[var(--text)]",
      accent: "text-red-600 dark:text-red-400",
      defaultTitle: "Caution",
    },
    tip: {
      container: "border-[var(--accent)]/30 bg-[var(--accent-subtle)] text-[var(--text)]",
      accent: "text-[var(--accent)]",
      defaultTitle: "Best Practice",
    },
  }[type];

  return (
    <div
      role="note"
      className={`my-8 rounded-md border p-4 text-sm leading-relaxed ${styles.container} ${className}`.trim()}
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
        <span className={`inline-block text-sm font-semibold ${styles.accent}`}>
          {title || styles.defaultTitle}
        </span>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
