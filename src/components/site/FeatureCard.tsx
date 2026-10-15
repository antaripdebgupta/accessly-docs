import type { ReactNode } from "react";

export interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
  href?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className = "",
  href,
}: FeatureCardProps) {
  const content = (
    <>
      {icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)]">
          {icon}
        </div>
      )}
      <div className="space-y-1.5">
        <h3 className="text-base font-semibold text-[var(--text)]">{title}</h3>
        <p className="text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
      </div>
    </>
  );

  const baseClasses = `flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--border-strong)] ${className}`;

  if (href) {
    return (
      <a href={href} className={`${baseClasses} group block`}>
        {content}
      </a>
    );
  }

  return <div className={baseClasses}>{content}</div>;
}
