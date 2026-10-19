import { describe, it, expect } from "vitest";
import { staticSearchIndex, score } from "@/lib/search-index";

describe("Search Index", () => {
  it("indexes all 22 components plus core docs", () => {
    expect(staticSearchIndex.length).toBeGreaterThanOrEqual(25);

    const buttonItem = staticSearchIndex.find((i) => i.title === "Button");
    expect(buttonItem).toBeDefined();
    expect(buttonItem?.url).toBe("/components/button");
    expect(buttonItem?.category).toBe("Forms & Inputs");
  });

  it("filters search items by title query", () => {
    const query = "dialog";
    const filtered = staticSearchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );

    expect(filtered.some((i) => i.title === "Dialog")).toBe(true);
  });

  it("scores exact matches highest (tooltip -> Tooltip first)", () => {
    const scored = staticSearchIndex
      .map((entry) => ({ entry, s: score(entry, "tooltip") }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s);

    expect(scored.length).toBeGreaterThan(0);
    expect(scored[0].entry.title).toBe("Tooltip");
    expect(scored[0].s).toBe(100);
  });
});
