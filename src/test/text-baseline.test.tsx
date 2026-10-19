import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import IntroductionPage from "@/app/(docs)/docs/introduction/page";
import { InstallationContent } from "@/components/docs/InstallationContent";
import { ThemingContent } from "@/components/docs/ThemingContent";
import { AccessibilityContent } from "@/components/docs/AccessibilityContent";
import { ArchitectureContent } from "@/components/docs/ArchitectureContent";
import { PackagesContent } from "@/components/docs/PackagesContent";
import ComponentsIndexPage from "@/app/(docs)/components/page";
import { ComponentDocView } from "@/components/docs/ComponentDocView";
import { componentRegistry } from "@/data/components/registry";
import { componentPropsMap } from "@/data/components/props";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MobileNav } from "@/components/site/MobileNav";
import { Sidebar } from "@/components/docs/Sidebar";

vi.mock("@/components/demos", () => ({
  demoRegistry: {},
}));

vi.mock("next/cache", () => ({
  cacheLife: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/components/button",
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
}));

function normalize(text: string | null | undefined): string {
  return (text ?? "").replace(/\s+/g, " ").trim();
}

describe("Text Baselines", () => {
  it("snapshots IntroductionPage text", async () => {
    const { container } = render(
      <ThemeProvider>
        <IntroductionPage />
      </ThemeProvider>
    );
    await expect(normalize(container.textContent)).toMatchFileSnapshot(
      "./__text__/page-introduction.txt"
    );
  });

  it("snapshots InstallationContent text", async () => {
    const { container } = render(
      <ThemeProvider>
        <InstallationContent />
      </ThemeProvider>
    );
    await expect(normalize(container.textContent)).toMatchFileSnapshot(
      "./__text__/content-installation.txt"
    );
  });

  it("snapshots ThemingContent text", async () => {
    const { container } = render(
      <ThemeProvider>
        <ThemingContent />
      </ThemeProvider>
    );
    await expect(normalize(container.textContent)).toMatchFileSnapshot(
      "./__text__/content-theming.txt"
    );
  });

  it("snapshots AccessibilityContent text", async () => {
    const { container } = render(
      <ThemeProvider>
        <AccessibilityContent />
      </ThemeProvider>
    );
    await expect(normalize(container.textContent)).toMatchFileSnapshot(
      "./__text__/content-accessibility.txt"
    );
  });

  it("snapshots ArchitectureContent text", async () => {
    const { container } = render(
      <ThemeProvider>
        <ArchitectureContent />
      </ThemeProvider>
    );
    await expect(normalize(container.textContent)).toMatchFileSnapshot(
      "./__text__/content-architecture.txt"
    );
  });

  it("snapshots PackagesContent text", async () => {
    const { container } = render(
      <ThemeProvider>
        <PackagesContent />
      </ThemeProvider>
    );
    await expect(normalize(container.textContent)).toMatchFileSnapshot(
      "./__text__/content-packages.txt"
    );
  });

  it("snapshots ComponentsIndexPage text", async () => {
    const page = await ComponentsIndexPage();
    const { container } = render(<ThemeProvider>{page}</ThemeProvider>);
    await expect(normalize(container.textContent)).toMatchFileSnapshot(
      "./__text__/page-components-index.txt"
    );
  });

  const allSlugs = Object.keys(componentRegistry);
  for (const [index, slug] of allSlugs.entries()) {
    it(`snapshots ComponentDocView text for ${slug}`, async () => {
      const meta = componentRegistry[slug];
      const propSections = componentPropsMap[slug] || [];
      const prevSlug = index > 0 ? allSlugs[index - 1] : null;
      const nextSlug = index < allSlugs.length - 1 ? allSlugs[index + 1] : null;
      const { container } = render(
        <ThemeProvider>
          <ComponentDocView
            meta={meta}
            slug={slug}
            propSections={propSections}
            prevSlug={prevSlug}
            nextSlug={nextSlug}
          />
        </ThemeProvider>
      );
      await expect(normalize(container.textContent)).toMatchFileSnapshot(
        `./__text__/component-${slug}.txt`
      );
    });
  }

  it("snapshots Footer text", async () => {
    const footerElem = await Footer();
    const { container } = render(<ThemeProvider>{footerElem}</ThemeProvider>);
    await expect(normalize(container.textContent)).toMatchFileSnapshot(
      "./__text__/footer.txt"
    );
  });

  it("snapshots Header text", async () => {
    const { container } = render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    await expect(normalize(container.textContent)).toMatchFileSnapshot(
      "./__text__/header.txt"
    );
  });

  it("snapshots MobileNav (open) text", async () => {
    const { container } = render(
      <ThemeProvider>
        <MobileNav open={true} onOpenChange={() => {}} />
      </ThemeProvider>
    );
    await expect(normalize(container.textContent)).toMatchFileSnapshot(
      "./__text__/mobile-nav.txt"
    );
  });

  it("snapshots Sidebar text", async () => {
    const { container } = render(
      <ThemeProvider>
        <Sidebar />
      </ThemeProvider>
    );
    await expect(normalize(container.textContent)).toMatchFileSnapshot(
      "./__text__/sidebar.txt"
    );
  });
});
