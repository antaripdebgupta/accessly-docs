"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { ReactLenis } from "lenis/react";

export interface SmoothScrollProps {
  children: ReactNode;
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getSnapshot() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const reducedMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        syncTouch: false,
        orientation: "vertical",
        gestureOrientation: "vertical",
        prevent: (node) =>
          Boolean(
            node instanceof Element &&
            node.closest(
              '[data-lenis-prevent], [role="dialog"], [aria-modal="true"], [role="listbox"], [role="menu"]'
            )
          ),
      }}
    >
      {children}
    </ReactLenis>
  );
}
