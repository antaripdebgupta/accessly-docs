"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator } from "@accessly-ui/react";
import { Slash, ArrowRight } from "lucide-react";

const sampleItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/products/categories" },
  { label: "Electronics", href: "/products/categories/electronics" },
  { label: "Headphones", href: "/products/categories/electronics/headphones" },
  {
    label: "Wireless Noise Canceling",
    href: "/products/categories/electronics/headphones/wireless-nc",
  },
];

export function BreadcrumbDefaultDemo() {
  return (
    <Breadcrumb aria-label="Breadcrumb navigation" items={sampleItems.slice(0, 4)} />
  );
}

export const breadcrumbDefaultCode = `import { Breadcrumb } from "@accessly-ui/react";

const items = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/products/categories" },
  { label: "Electronics", href: "/products/categories/electronics" },
];

export default function Example() {
  return <Breadcrumb aria-label="Breadcrumb navigation" items={items} />;
}`;

export function BreadcrumbCustomSeparatorDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb items={sampleItems.slice(0, 4)} separator={<Slash size={14} />} />
      <Breadcrumb items={sampleItems.slice(0, 4)} separator={<ArrowRight size={14} />} />
      <Breadcrumb items={sampleItems.slice(0, 4)} separator=">" />
    </div>
  );
}

export const breadcrumbCustomSeparatorCode = `import { Breadcrumb } from "@accessly-ui/react";
import { Slash, ArrowRight } from "lucide-react";

const items = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/products/categories" },
  { label: "Electronics", href: "/products/categories/electronics" },
];

export default function Example() {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb items={items} separator={<Slash size={14} />} />
      <Breadcrumb items={items} separator={<ArrowRight size={14} />} />
      <Breadcrumb items={items} separator=">" />
    </div>
  );
}`;

export function BreadcrumbCollapsedDemo() {
  return <Breadcrumb items={sampleItems} maxItems={3} />;
}

export const breadcrumbCollapsedCode = `import { Breadcrumb } from "@accessly-ui/react";

const items = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/products/categories" },
  { label: "Electronics", href: "/products/categories/electronics" },
  { label: "Headphones", href: "/products/categories/electronics/headphones" },
  {
    label: "Wireless Noise Canceling",
    href: "/products/categories/electronics/headphones/wireless-nc",
  },
];

export default function Example() {
  return <Breadcrumb items={items} maxItems={3} />;
}`;

export function BreadcrumbDropdownDemo() {
  return (
    <Breadcrumb
      items={sampleItems}
      maxItems={2}
      itemsBeforeCollapse={1}
      itemsAfterCollapse={1}
    />
  );
}

export const breadcrumbDropdownCode = `import { Breadcrumb } from "@accessly-ui/react";

const items = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/products/categories" },
  { label: "Electronics", href: "/products/categories/electronics" },
  { label: "Headphones", href: "/products/categories/electronics/headphones" },
  {
    label: "Wireless Noise Canceling",
    href: "/products/categories/electronics/headphones/wireless-nc",
  },
];

export default function Example() {
  return (
    <Breadcrumb
      items={items}
      maxItems={2}
      itemsBeforeCollapse={1}
      itemsAfterCollapse={1}
    />
  );
}`;

export function BreadcrumbLinkComponentDemo() {
  const NextLinkMock = ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      data-next-link="true"
      className="font-medium text-[var(--accent)]"
      {...props}
    >
      {children}
    </a>
  );

  return <Breadcrumb items={sampleItems.slice(0, 4)} as={NextLinkMock} />;
}

export const breadcrumbLinkComponentCode = `import { Breadcrumb } from "@accessly-ui/react";

const items = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/products/categories" },
  { label: "Electronics", href: "/products/categories/electronics" },
];

const NextLinkMock = ({ href, children, ...props }: any) => (
  <a href={href} data-next-link="true" className="font-medium text-accent-default" {...props}>
    {children}
  </a>
);

export default function Example() {
  return <Breadcrumb items={items} as={NextLinkMock} />;
}`;

export function BreadcrumbCompositionDemo() {
  return (
    <Breadcrumb aria-label="Store navigation">
      <BreadcrumbItem href="/">Store</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem href="/category">Apparel</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem href="/category/jackets">Jackets</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem isCurrent>Winter Parka</BreadcrumbItem>
    </Breadcrumb>
  );
}

export const breadcrumbCompositionCode = `import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <Breadcrumb aria-label="Store navigation">
      <BreadcrumbItem href="/">Store</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem href="/category">Apparel</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem href="/category/jackets">Jackets</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem isCurrent>Winter Parka</BreadcrumbItem>
    </Breadcrumb>
  );
}`;

export function BreadcrumbRTLDemo() {
  return (
    <Breadcrumb
      items={[
        { label: "الصفحة الرئيسية (Home)", href: "/" },
        { label: "المنتجات (Products)", href: "/products" },
        { label: "الإلكترونيات (Electronics)", href: "/electronics" },
        { label: "سماعات الرأس (Headphones)", href: "/headphones" },
      ]}
      dir="rtl"
    />
  );
}

export const breadcrumbRTLCode = `import { Breadcrumb } from "@accessly-ui/react";

export default function Example() {
  return (
    <Breadcrumb
      items={[
        { label: "الصفحة الرئيسية (Home)", href: "/" },
        { label: "المنتجات (Products)", href: "/products" },
        { label: "الإلكترونيات (Electronics)", href: "/electronics" },
        { label: "سماعات الرأس (Headphones)", href: "/headphones" },
      ]}
      dir="rtl"
    />
  );
}`;

export const breadcrumbStories = [
  { title: "Default", Demo: BreadcrumbDefaultDemo, code: breadcrumbDefaultCode },
  {
    title: "Custom Separator",
    Demo: BreadcrumbCustomSeparatorDemo,
    code: breadcrumbCustomSeparatorCode,
  },
  { title: "Collapsed", Demo: BreadcrumbCollapsedDemo, code: breadcrumbCollapsedCode },
  { title: "Dropdown", Demo: BreadcrumbDropdownDemo, code: breadcrumbDropdownCode },
  {
    title: "Link Component",
    Demo: BreadcrumbLinkComponentDemo,
    code: breadcrumbLinkComponentCode,
  },
  {
    title: "Composition",
    Demo: BreadcrumbCompositionDemo,
    code: breadcrumbCompositionCode,
  },
  { title: "RTL", Demo: BreadcrumbRTLDemo, code: breadcrumbRTLCode },
];

export function BreadcrumbDemo() {
  return <BreadcrumbCompositionDemo />;
}

export const breadcrumbDemoCode = breadcrumbCompositionCode;
