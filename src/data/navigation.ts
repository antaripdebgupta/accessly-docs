export interface NavItem {
  title: string;
  href: string;
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
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Architecture", href: "/docs/architecture" },
      { title: "Packages", href: "/docs/packages" },
      { title: "Theming & Styling", href: "/docs/theming" },
      { title: "Accessibility Principles", href: "/docs/accessibility" },
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
  { title: "Components", href: "/components" },
];
