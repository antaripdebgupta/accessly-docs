export const pillars = [
  {
    title: "1. Keyboard Operability (WCAG 2.1)",
    description:
      "Every single component is operable without a mouse. Standard keystrokes (Tab, Shift+Tab, Enter, Space, Arrow keys, Escape) follow established W3C APG patterns.",
  },
  {
    title: "2. Focus Management & Restoration (WCAG 2.4.3)",
    description:
      "Modal overlays trap focus within active boundaries. When overlays close, focus returns cleanly to the triggering element. Dynamic widgets utilize roving tabindex to preserve a single tab stop.",
  },
  {
    title: "3. Semantic ARIA & Live Regions (WCAG 4.1.2 & 4.1.3)",
    description:
      "Components ship explicit ARIA attributes (roles, states, expanded/selected/current flags). Asynchronous operations announce updates using polite or assertive live regions.",
  },
  {
    title: "4. Contrast & Motion Preferences (WCAG 1.4.3 & 2.2.2)",
    description:
      "All text maintains at least 4.5:1 contrast against cool zinc canvas backgrounds. Interactive control borders exceed 3:1. Animations automatically disable under prefers-reduced-motion.",
  },
];
