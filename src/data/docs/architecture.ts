export interface LayerInfo {
  name: string;
  tagline: string;
  detail: string;
  tone?: "default" | "accent";
}

export const layers: LayerInfo[] = [
  {
    name: "Your application",
    tagline: "App Router / Pages Router",
    detail:
      "Imports the pieces it needs — usually just @accessly-ui/react and the Tailwind preset.",
  },
  {
    name: "@accessly-ui/react",
    tagline: "styled components",
    detail:
      "Pre-styled, composable components. Wraps primitives and applies the Tailwind preset's design tokens.",
    tone: "accent",
  },
  {
    name: "@accessly-ui/primitives",
    tagline: "headless logic",
    detail:
      "Unstyled hooks and components: focus traps, roving tabindex, ARIA state, keyboard handling. No visual opinion at all.",
  },
  {
    name: "@accessly-ui/utils",
    tagline: "shared internals",
    detail:
      "Low-level helpers primitives build on — id generation, live-region announcements, portal management.",
  },
];

export const principles = [
  {
    title: "Headless first",
    description:
      "Every interaction pattern — focus management, keyboard navigation, ARIA wiring — is built once in primitives, with no assumption about markup or class names.",
  },
  {
    title: "Server Component friendly",
    description:
      "Layout, copy, and static structure render on the server. Client boundaries are drawn only where state or browser APIs are actually needed.",
  },
  {
    title: "Composition over configuration",
    description:
      "Components expose small, composable parts (DialogHeader, DialogFooter, DialogClose) rather than one component with dozens of boolean props.",
  },
  {
    title: "Zero-runtime styling",
    description:
      "Styling resolves to static Tailwind classes at build time — no CSS-in-JS runtime, no style recalculation cost in the browser.",
  },
];

export const dataFlowSteps: [string, string][] = [
  [
    "ThemeProvider",
    "Reads the stored preference (or system setting) and sets a class — light or dark — on the document root before first paint.",
  ],
  [
    "CSS custom properties",
    "That class selects a block of tokens in tokens.css — --surface, --text, --accent, and the rest.",
  ],
  [
    "Tailwind preset",
    "@accessly-ui/tailwind-preset maps those same custom properties onto Tailwind's theme, so bg-surface and text-accent resolve to them.",
  ],
  [
    "Components",
    "@accessly-ui/react components are written entirely in terms of those Tailwind utilities — never a hard-coded hex value.",
  ],
];
