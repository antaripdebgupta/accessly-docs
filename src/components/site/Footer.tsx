import Link from "next/link";

const footerLinks = {
  Documentation: [
    { label: "Getting Started", href: "/docs/introduction" },
    { label: "Installation", href: "/docs/installation" },
    { label: "Theming", href: "/docs/theming" },
    { label: "Accessibility", href: "/docs/accessibility" },
  ],
  Packages: [
    {
      label: "@accessly-ui/react",
      href: "https://www.npmjs.com/package/@accessly-ui/react",
    },
    {
      label: "@accessly-ui/primitives",
      href: "https://www.npmjs.com/package/@accessly-ui/primitives",
    },
    {
      label: "@accessly-ui/tailwind-preset",
      href: "https://www.npmjs.com/package/@accessly-ui/tailwind-preset",
    },
    {
      label: "@accessly-ui/utils",
      href: "https://www.npmjs.com/package/@accessly-ui/utils",
    },
  ],
  Project: [
    {
      label: "GitHub",
      href: "https://github.com/antaripdebgupta/accessible-component-library",
    },
    {
      label: "Contributing",
      href: "https://github.com/antaripdebgupta/accessible-component-library/blob/main/CONTRIBUTING.md",
    },
    {
      label: "MIT License",
      href: "https://github.com/antaripdebgupta/accessible-component-library/blob/main/LICENSE",
    },
  ],
};

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-[1400px] flex-wrap justify-between gap-12 px-4 pt-14 pb-7 sm:px-8">
        <div className="max-w-[240px] space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-[var(--accent)] text-[var(--canvas)]">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span className="text-[15px] font-semibold text-[var(--text)]">
              Accessly UI
            </span>
          </div>
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">
            Accessible React components, designed the way a real design-systems team would
            build them.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="space-y-2.5">
            <span className="text-sm font-semibold text-[var(--text)]">{title}</span>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-between gap-2 px-4 py-4 sm:px-8">
          <span className="text-sm text-[var(--text-faint)]">
            © 2026 Accessly UI. MIT Licensed.
          </span>
          <span className="text-sm text-[var(--text-faint)]">
            Built with Accessly UI components.
          </span>
        </div>
      </div>
    </footer>
  );
}
