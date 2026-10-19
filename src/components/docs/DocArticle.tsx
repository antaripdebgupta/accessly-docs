import type { HTMLAttributes, ReactNode } from "react";

export interface DocArticleProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  size?: "narrow" | "default" | "wide";
  className?: string;
}

export function DocArticle({
  children,
  size = "default",
  className = "",
  ...props
}: DocArticleProps) {
  const sizeClass = {
    narrow: "max-w-3xl",
    default: "max-w-4xl",
    wide: "max-w-5xl",
  }[size];

  return (
    <article className={`min-w-0 ${sizeClass} ${className}`.trim()} {...props}>
      {children}
    </article>
  );
}
