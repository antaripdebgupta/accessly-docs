import type { ReactNode } from "react";

export interface SectionHeadingProps {
  id?: string;
  level?: 2 | 3;
  children: ReactNode;
  className?: string;
}

export function SectionHeading({
  id,
  level = 2,
  children,
  className = "",
}: SectionHeadingProps) {
  if (level === 3) {
    return (
      <h3
        id={id}
        className={`text-lg font-semibold tracking-tight text-[var(--text)] ${className}`.trim()}
      >
        {children}
      </h3>
    );
  }

  return (
    <h2
      id={id}
      className={`text-2xl font-semibold tracking-tight text-[var(--text)] ${className}`.trim()}
    >
      {children}
    </h2>
  );
}
