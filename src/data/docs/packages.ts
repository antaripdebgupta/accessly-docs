import { INSTALL_COMMAND } from "../site";
import { COMPONENT_COUNT } from "../components/registry";

export interface PackageInfo {
  name: string;
  tagline: string;
  description: string;
  contains: string[];
  install: string;
  useWhen: string;
  dependsOn: string;
  npmUrl: string;
}

export const packages: PackageInfo[] = [
  {
    name: "@accessly-ui/react",
    tagline: "Pre-styled, composable components",
    description:
      "The package most applications install. Every component ships styled with the Tailwind preset's tokens, fully keyboard-accessible, and ready to use without any configuration.",
    contains: [
      `${COMPONENT_COUNT} components — Button through TreeView`,
      "Sensible defaults for every ARIA attribute and keyboard pattern",
      "Dark mode support out of the box via ThemeProvider",
    ],
    install: INSTALL_COMMAND,
    useWhen: "You want accessible components that look good immediately.",
    dependsOn: "@accessly-ui/primitives, @accessly-ui/tailwind-preset",
    npmUrl: "https://www.npmjs.com/package/@accessly-ui/react",
  },
  {
    name: "@accessly-ui/primitives",
    tagline: "Headless logic, zero styling",
    description:
      "The same focus management, roving tabindex, and ARIA wiring that power @accessly-ui/react, exposed with no visual opinion at all — bring your own markup and classes.",
    contains: [
      "Unstyled hooks: useFocusTrap, useRovingTabindex, useAsyncSearch",
      "Unstyled component logic for every pattern in @accessly-ui/react",
      "No dependency on Tailwind, CSS Modules, or any styling system",
    ],
    install: "npm install @accessly-ui/primitives",
    useWhen: "Your design system doesn't use Tailwind, or you need pixel-level control.",
    dependsOn: "@accessly-ui/utils",
    npmUrl: "https://www.npmjs.com/package/@accessly-ui/primitives",
  },
  {
    name: "@accessly-ui/tailwind-preset",
    tagline: "Design tokens as a Tailwind theme",
    description:
      "A Tailwind CSS v4 preset that turns the library's design tokens — color, spacing, radius, shadow — into Tailwind theme values and CSS custom properties.",
    contains: [
      "Light and dark token sets (colors, borders, shadows)",
      "Type scale and spacing scale matching @accessly-ui/react",
      "A single theme.css import — no tailwind.config plugin wiring required",
    ],
    install: "npm install @accessly-ui/tailwind-preset",
    useWhen:
      "You're using @accessly-ui/react, or want its tokens in your own components.",
    dependsOn: "—",
    npmUrl: "https://www.npmjs.com/package/@accessly-ui/tailwind-preset",
  },
  {
    name: "@accessly-ui/utils",
    tagline: "Shared accessibility internals",
    description:
      "The small, dependency-free utilities that every other package is built from. Rarely installed directly — pulled in automatically by primitives.",
    contains: [
      "Focus trap and focus restoration helpers",
      "Live-region announcer for assertive/polite status messages",
      "SSR-safe unique ID generation (useId-compatible)",
    ],
    install: "npm install @accessly-ui/utils",
    useWhen: "You're building your own accessible primitive from scratch.",
    dependsOn: "—",
    npmUrl: "https://www.npmjs.com/package/@accessly-ui/utils",
  },
];
