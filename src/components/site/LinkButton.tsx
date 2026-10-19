import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

export interface LinkButtonProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
}

export function LinkButton({
  href,
  variant = "primary",
  children,
  className = "",
  ...props
}: LinkButtonProps) {
  const baseClasses =
    "inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2";

  const variantClasses =
    variant === "primary"
      ? "bg-[var(--text)] text-[var(--canvas)] hover:opacity-90"
      : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--surface-raised)]";

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
