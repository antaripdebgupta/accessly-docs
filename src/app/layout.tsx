import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import { getThemeScript } from "@/lib/theme-script";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Accessly UI — Accessible React Components",
    template: "%s | Accessly UI",
  },
  description:
    "22 WCAG 2.2 AA accessible React components with keyboard navigation, focus management, and ARIA wiring built in.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning

      className={`${geist.variable} ${geistMono.variable} ${sourceSerif.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: getThemeScript({ defaultMode: "system" }),
          }}
        />
      </head>
      <body className="flex min-h-dvh flex-col bg-[var(--canvas)] font-sans text-[var(--text)] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-[var(--surface)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--text)] focus:ring-2 focus:ring-[var(--accent)] focus:outline-hidden"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
