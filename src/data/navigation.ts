export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  isNew?: boolean;
}

export interface NavSection {
  title: string;
  href?: string;
  items: NavItem[];
}

export const gettingStartedNav: NavSection[] = [
  {
    title: "Overview",
    items: [
      {
        title: "Introduction",
        href: "/docs/introduction",
        description:
          "Accessly UI is a collection of 22 WCAG 2.2 AA accessible React components with keyboard navigation, focus management, and ARIA wiring built in. Use them headless or pre-styled with Tailwind CSS.",
      },
      {
        title: "Installation",
        href: "/docs/installation",
        description:
          "How to install and configure Accessly UI in your React and Next.js projects.",
      },
      {
        title: "Architecture",
        href: "/docs/architecture",
        description:
          "How Accessly UI's four packages — react, primitives, tailwind-preset, and utils — layer together, and how theming flows from tokens to components.",
      },
      {
        title: "Packages",
        href: "/docs/packages",
        description:
          "What's inside @accessly-ui/react, @accessly-ui/primitives, @accessly-ui/tailwind-preset, and @accessly-ui/utils — and when to reach for each one.",
      },
      {
        title: "Theming & Styling",
        href: "/docs/theming",
        description:
          "Configure design tokens, dark mode synchronization, and Tailwind preset customization.",
      },
      {
        title: "Accessibility Principles",
        href: "/docs/accessibility",
        description:
          "Core WCAG 2.2 AA standards, keyboard navigation patterns, and focus architecture in Accessly UI.",
      },
    ],
  },
];

export const componentsNav: NavSection[] = [
  {
    title: "Components",
    href: "/components",
    items: [
      { title: "Accordion", href: "/components/accordion" },
      { title: "Alert", href: "/components/alert" },
      { title: "Avatar", href: "/components/avatar" },
      { title: "Breadcrumb", href: "/components/breadcrumb" },
      { title: "Button", href: "/components/button" },
      { title: "Carousel", href: "/components/carousel" },
      { title: "Checkbox", href: "/components/checkbox" },
      { title: "CommandPalette", href: "/components/command-palette" },
      { title: "Combobox", href: "/components/combobox" },
      { title: "DataTable", href: "/components/data-table" },
      { title: "Dialog", href: "/components/dialog" },
      { title: "DropdownMenu", href: "/components/dropdown-menu" },
      { title: "Input", href: "/components/input" },
      { title: "Pagination", href: "/components/pagination" },
      { title: "RadioGroup", href: "/components/radio-group" },
      { title: "Skeleton", href: "/components/skeleton" },
      { title: "Switch", href: "/components/switch" },
      { title: "Tabs", href: "/components/tabs" },
      { title: "Textarea", href: "/components/textarea" },
      { title: "Toast", href: "/components/toast" },
      { title: "Tooltip", href: "/components/tooltip" },
      { title: "TreeView", href: "/components/tree-view" },
    ],
  },
];

export const allNavSections: NavSection[] = [...gettingStartedNav, ...componentsNav];

export const mobileNavMenuItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Getting Started", href: "/docs/introduction" },
  { title: "Components", href: "/components" },
];

export const footerNavLinks: NavItem[] = [
  { title: "Docs", href: "/docs/introduction" },
  { title: "Installation", href: "/docs/installation" },
  { title: "Packages", href: "/docs/packages" },
  { title: "Accessibility", href: "/docs/accessibility" },
  { title: "Components", href: "/components" },
];
