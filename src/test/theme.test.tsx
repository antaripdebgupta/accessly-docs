import { describe, it, expect } from "vitest";
import { getThemeScript } from "@/lib/theme-script";

describe("Theme Script", () => {
  it("generates anti-flash script with default mode and storage key", () => {
    const script = getThemeScript({
      defaultMode: "system",
      storageKey: "accessly-theme",
    });

    expect(script).toContain("accessly-theme");
    expect(script).toContain("localStorage.getItem");
    expect(script).toContain("classList.add");
    expect(script).toContain("colorScheme");
  });

  it("handles forced theme option", () => {
    const script = getThemeScript({ forcedTheme: "dark" });
    expect(script).toContain('"dark"');
  });
});
