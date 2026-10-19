import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { DocPager } from "@/components/docs/DocPager";
import { DocArticle } from "@/components/docs/DocArticle";

describe("Docs Layout Components", () => {
  it("renders DocPager with both prev and next props", () => {
    render(
      <DocPager
        prev={{ href: "/docs/prev", label: "Prev Page" }}
        next={{ href: "/docs/next", label: "Next Page" }}
      />
    );

    const prevLink = screen.getByRole("link", { name: /prev page/i });
    expect(prevLink).toHaveAttribute("href", "/docs/prev");
    expect(screen.getByText("Previous")).toBeInTheDocument();

    const nextLink = screen.getByRole("link", { name: /next page/i });
    expect(nextLink).toHaveAttribute("href", "/docs/next");
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  it("renders DocPager with only next prop and ensures Previous caption is absent", () => {
    render(<DocPager next={{ href: "/docs/next", label: "Next Page" }} />);

    const nextLink = screen.getByRole("link", { name: /next page/i });
    expect(nextLink).toHaveAttribute("href", "/docs/next");
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.queryByText("Previous")).not.toBeInTheDocument();
  });

  it("renders DocArticle with size narrow and asserts class contains max-w-3xl", () => {
    const { container } = render(
      <DocArticle size="narrow">
        <p>Article content</p>
      </DocArticle>
    );

    const article = container.querySelector("article");
    expect(article).not.toBeNull();
    expect(article?.className).toContain("max-w-3xl");
  });
});
