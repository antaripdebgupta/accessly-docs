import type { HTMLAttributes, ReactNode } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "default" | "narrow" | "wide" | "full";
  className?: string;
}

export function Container({
  children,
  size = "default",
  className = "",
  ...props
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-[1400px]",
    wide: "max-w-7xl",
    full: "max-w-full",
  }[size];

  return (
    <div className={`mx-auto w-full px-4 sm:px-8 ${sizeClasses} ${className}`} {...props}>
      {children}
    </div>
  );
}
