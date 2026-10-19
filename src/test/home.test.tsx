import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@accessly-ui/react";
import HomePage from "@/app/(marketing)/page";

describe("HomePage", () => {
  it("renders with accessible structure and required links", () => {
    const { container } = render(
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    );

    // Exactly one level-1 heading
    const h1Elements = screen.getAllByRole("heading", { level: 1 });
    expect(h1Elements).toHaveLength(1);

    // Links to /docs/introduction and /components exist
    const docLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("href") === "/docs/introduction");
    expect(docLinks.length).toBeGreaterThanOrEqual(1);

    const componentLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("href") === "/components");
    expect(componentLinks.length).toBeGreaterThanOrEqual(1);

    // container.querySelector("a button") is null
    expect(container.querySelector("a button")).toBeNull();

    // hero decorative backgrounds have aria-hidden="true"
    const ariaHiddenVisuals = container.querySelectorAll("[aria-hidden='true']");
    expect(ariaHiddenVisuals.length).toBeGreaterThan(0);
  });
});
