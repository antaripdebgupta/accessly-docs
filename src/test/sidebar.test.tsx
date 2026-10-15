import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Sidebar } from "@/components/docs/Sidebar";

vi.mock("next/navigation", () => ({
  usePathname: () => "/components/button",
}));

describe("<Sidebar />", () => {
  it("renders the active section tree for the current route", () => {
    render(<Sidebar />);

    expect(screen.queryByText("Overview")).not.toBeInTheDocument();
    expect(screen.getByText("Components")).toBeInTheDocument();
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.queryByText("Accessibility Principles")).not.toBeInTheDocument();
  });

  it("sets aria-current='page' on the active route link", () => {
    render(<Sidebar />);

    const buttonLink = screen.getByRole("link", { name: "Button" });
    expect(buttonLink).toHaveAttribute("aria-current", "page");

    const checkboxLink = screen.getByRole("link", { name: "Checkbox" });
    expect(checkboxLink).not.toHaveAttribute("aria-current");
  });
});
