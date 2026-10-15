import type { ReactNode } from "react";

export interface PageHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHeading({
  badge,
  title,
  description,
  children,
  className = "",
}: PageHeadingProps) {
  return (
    <header className={`space-y-4 pt-2 pb-6 ${className}`}>
      {badge && <span className="text-sm font-medium text-[var(--accent)]">{badge}</span>}
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="max-w-3xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
          {description}
        </p>
      )}
      {children}
    </header>
  );
}
