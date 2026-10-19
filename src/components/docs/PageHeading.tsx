import type { ReactNode } from "react";

export interface PageHeadingProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHeading({
  title,
  description,
  children,
  className = "",
}: PageHeadingProps) {
  return (
    <header className={`reveal border-b border-[var(--border)] pb-8 ${className}`.trim()}>
      <h1 className="text-3xl font-semibold tracking-tight text-balance text-[var(--text)] sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-base text-[var(--text-muted)] sm:text-lg">
          {description}
        </p>
      )}
      {children}
    </header>
  );
}
