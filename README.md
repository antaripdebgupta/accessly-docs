# Accessly Docs

Documentation site for [Accessly UI](https://github.com/antaripdebgupta/accessible-component-library), a library of 22 accessible React components with keyboard navigation, focus management, and ARIA semantics built in. It includes live previews, copyable code, API references, and keyboard interaction tables for every component.

## Features

- Live, interactive previews for every component, with a Code tab and copy button
- API reference and keyboard interaction tables for each component
- Command palette search (`⌘K` / `Ctrl+K`)
- Light, dark, and system themes with an anti-flash theme script
- Skip link, visible focus rings, and `prefers-reduced-motion` support
- Responsive layout with a mobile navigation drawer and an on-page table of contents
- Right-to-left (RTL) examples for components

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React](https://react.dev) and TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Accessly UI](https://www.npmjs.com/package/@accessly-ui/react)
- [Shiki](https://shiki.style) for syntax highlighting
- [Lenis](https://lenis.darkroom.engineering) for smooth scrolling
- [Lucide](https://lucide.dev) icons
- [Vitest](https://vitest.dev) and [Testing Library](https://testing-library.com)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

| Variable               | Description                                                                                                                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | Canonical site base URL (for example `https://accessly-ui.com`). Defaults to `http://localhost:3000` in development. In production without this variable, canonical URLs and sitemaps degrade safely without inventing a host. |

> **Note:** Preview deployments (`VERCEL_ENV=preview`) are served with `robots: { index: false }` and a `Disallow: /` robots directive so search engines do not index them.

## Scripts

| Command             | Description                   |
| ------------------- | ----------------------------- |
| `npm run dev`       | Start the development server  |
| `npm run build`     | Create a production build     |
| `npm run test`      | Run the test suite (Vitest)   |
| `npm run lint`      | Lint with ESLint              |
| `npm run format`    | Format with Prettier          |
| `npm run typecheck` | Run the TypeScript type check |

```bash
npm run lint && npm run typecheck && npm run test && npm run build
```

## Packages

Accessly UI is published as four independently versioned packages. Most projects only need the first one.

| Package                                                                                      | Description                                              |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [`@accessly-ui/react`](https://www.npmjs.com/package/@accessly-ui/react)                     | Pre-styled, composable React components                  |
| [`@accessly-ui/primitives`](https://www.npmjs.com/package/@accessly-ui/primitives)           | Headless, unstyled component logic and hooks             |
| [`@accessly-ui/tailwind-preset`](https://www.npmjs.com/package/@accessly-ui/tailwind-preset) | Tailwind CSS v4 theme preset with design tokens          |
| [`@accessly-ui/utils`](https://www.npmjs.com/package/@accessly-ui/utils)                     | Shared accessibility utilities (focus trap, live region) |

Install the main package with the Tailwind preset:

```bash
npm install @accessly-ui/react @accessly-ui/tailwind-preset
```

## Components

The documentation covers 22 components in six categories.

| Category           | Components                                                                  |
| ------------------ | --------------------------------------------------------------------------- |
| Forms & Inputs     | Button, Checkbox, Combobox, Input, Pagination, RadioGroup, Switch, Textarea |
| Overlays & Dialogs | CommandPalette, Dialog, DropdownMenu, Tooltip                               |
| Navigation         | Breadcrumb, Tabs, TreeView                                                  |
| Feedback           | Alert, Skeleton, Toast                                                      |
| Data Display       | Avatar, DataTable                                                           |
| Layout & Misc      | Accordion, Carousel                                                         |

## Accessibility

The docs site follows the same standards as the library it documents: keyboard-operable navigation, visible focus indicators, semantic landmarks, a skip link, and reduced-motion support. Automated checks do not replace manual testing with assistive technologies.

## License

[MIT](./LICENSE)
