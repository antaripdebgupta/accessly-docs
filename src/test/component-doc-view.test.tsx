import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ComponentDocView } from "@/components/docs/ComponentDocView";
import type { ComponentMeta } from "@/data/components/registry";

vi.mock("@/components/demos", () => ({
  demoRegistry: {},
}));

const baseMeta: ComponentMeta = {
  name: "Skeleton",
  slug: "skeleton",
  category: "Feedback",
  description: "Placeholder loading preview.",
  wcagCriteria: ["1.1.1 Non-text Content"],
  keyboardInteractions: [],
  relatedComponents: [],
};

describe("<ComponentDocView />", () => {
  it("does not render the Keyboard Interactions heading when keyboardInteractions is empty", () => {
    render(
      <ComponentDocView
        meta={baseMeta}
        slug="skeleton"
        propSections={[]}
        prevSlug={null}
        nextSlug={null}
      />
    );

    expect(
      screen.queryByRole("heading", { name: /keyboard interactions/i })
    ).not.toBeInTheDocument();
  });

  it("renders the Keyboard Interactions heading when keyboardInteractions has entries", () => {
    const metaWithKeyboard: ComponentMeta = {
      ...baseMeta,
      name: "Button",
      slug: "button",
      keyboardInteractions: [{ key: "Enter", description: "Activates the button." }],
    };

    render(
      <ComponentDocView
        meta={metaWithKeyboard}
        slug="button"
        propSections={[]}
        prevSlug={null}
        nextSlug={null}
      />
    );

    expect(
      screen.getByRole("heading", { name: /keyboard interactions/i })
    ).toBeInTheDocument();
  });
});
