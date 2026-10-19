import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { MobileNav } from "@/components/site/MobileNav";

vi.mock("next/navigation", () => ({
  usePathname: () => "/components/button",
  useRouter: () => ({ push: vi.fn() }),
}));

function renderMobileNav(props: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return render(
    <ThemeProvider>
      <MobileNav {...props} />
    </ThemeProvider>
  );
}

describe("<MobileNav />", () => {
  it("renders MobileNav open, asserts the Menu title and three groups", () => {
    const onOpenChange = vi.fn();
    renderMobileNav({ open: true, onOpenChange });

    // Asserts the "Menu" title
    expect(screen.getByRole("heading", { name: "Menu" })).toBeInTheDocument();

    // Asserts the three groups: Menu, Getting Started, Components
    expect(screen.getByText("Menu", { selector: "p" })).toBeInTheDocument();
    expect(screen.getByText("Getting Started", { selector: "p" })).toBeInTheDocument();
    const componentsLinks = screen.getAllByRole("link", { name: "Components" });
    expect(componentsLinks.length).toBe(2);
    expect(componentsLinks.some((l) => l.getAttribute("href") === "/components")).toBe(
      true
    );
  });

  it("sets aria-current='page' on the link for the current path", () => {
    const onOpenChange = vi.fn();
    renderMobileNav({ open: true, onOpenChange });

    // /components/button is the mocked path
    const buttonLink = screen.getByRole("link", { name: "Button" });
    expect(buttonLink).toHaveAttribute("aria-current", "page");

    // Other links should not have aria-current
    const accordionLink = screen.getByRole("link", { name: "Accordion" });
    expect(accordionLink).not.toHaveAttribute("aria-current");

    const introLink = screen.getByRole("link", { name: "Introduction" });
    expect(introLink).not.toHaveAttribute("aria-current");
  });

  it("calls onOpenChange(false) when a link is clicked", () => {
    const onOpenChange = vi.fn();
    renderMobileNav({ open: true, onOpenChange });

    const introLink = screen.getByRole("link", { name: "Introduction" });
    fireEvent.click(introLink);

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("calls onOpenChange(false) when the close button is clicked", () => {
    const onOpenChange = vi.fn();
    renderMobileNav({ open: true, onOpenChange });

    const closeBtn = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeBtn);

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
