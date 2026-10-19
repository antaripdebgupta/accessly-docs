import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { demoRegistry } from "@/components/demos";

const componentToSlug: Record<string, string> = {
  Accordion: "accordion",
  Alert: "alert",
  Avatar: "avatar",
  Breadcrumb: "breadcrumb",
  Button: "button",
  Carousel: "carousel",
  Checkbox: "checkbox",
  Combobox: "combobox",
  CommandPalette: "command-palette",
  DataTable: "data-table",
  Dialog: "dialog",
  DropdownMenu: "dropdown-menu",
  Input: "input",
  Pagination: "pagination",
  RadioGroup: "radio-group",
  Skeleton: "skeleton",
  Switch: "switch",
  Tabs: "tabs",
  Textarea: "textarea",
  Toast: "toast",
  Tooltip: "tooltip",
  TreeView: "tree-view",
};

const IGNORE_REGEX =
  /Interaction|KeyboardInteraction|DisabledDoesNotFire|DismissesManually|PausesOnFocus|ButtonVariantInteraction|ClosableInteraction/;

const ALIAS_ALLOWLIST = new Set(["AutomaticActivation", "Uncontrolled", "Overflow"]);

const candidatePaths = [
  path.resolve(process.cwd(), "packages/react/src"),
  path.resolve(process.cwd(), "../accessible-component-library/packages/react/src"),
  path.resolve(process.cwd(), "../packages/react/src"),
];

const storiesRoot =
  process.env.STORIES_DIR ||
  candidatePaths.find((p) => fs.existsSync(p)) ||
  candidatePaths[0];

const hasStories = fs.existsSync(storiesRoot);

describe.skipIf(!hasStories)("Storybook stories coverage", () => {
  it("found the stories directory", () => {
    expect(fs.existsSync(storiesRoot)).toBe(true);
  });

  const componentDirs = hasStories
    ? fs
        .readdirSync(storiesRoot)
        .filter((file) => fs.statSync(path.join(storiesRoot, file)).isDirectory())
    : [];

  for (const componentName of componentDirs) {
    const slug = componentToSlug[componentName];
    if (!slug) continue;

    it(`covers all non-interaction stories for ${componentName}`, () => {
      const storyFile = path.join(
        storiesRoot,
        componentName,
        `${componentName}.stories.tsx`
      );
      expect(fs.existsSync(storyFile)).toBe(true);

      let content = fs.readFileSync(storyFile, "utf8");
      // Strip block and line comments to ignore commented-out stories
      content = content.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*/g, "");

      const matches = [
        ...content.matchAll(/export const (\w+):\s*(?:Story|StoryObj)/g),
      ].map((m) => m[1]);

      // Filter out pure aliases in Tabs or interaction tests
      const activeStories = matches.filter((name) => {
        if (IGNORE_REGEX.test(name)) return false;
        if (
          componentName === "Tabs" &&
          (name === "Horizontal" || ALIAS_ALLOWLIST.has(name))
        ) {
          return false;
        }
        if (ALIAS_ALLOWLIST.has(name)) return false;
        return true;
      });

      const entry = demoRegistry[slug];
      expect(entry, `demoRegistry should contain ${slug}`).toBeDefined();

      const docsStories = entry.stories || [];
      const docsTitles = docsStories.map((s) => s.title);

      const missingStories = activeStories.filter((storyName) => {
        const hasDirectMatch = docsTitles.some(
          (title) =>
            title.toLowerCase().replace(/[^a-z0-9]/g, "") ===
            storyName.toLowerCase().replace(/[^a-z0-9]/g, "")
        );
        return !hasDirectMatch;
      });

      if (docsStories.length < activeStories.length) {
        console.error(
          `[Coverage failure] ${componentName} has ${docsStories.length} docs stories but ${activeStories.length} active Storybook stories.` +
            `\nStorybook stories: ${activeStories.join(", ")}` +
            `\nDocs titles: ${docsTitles.join(", ")}` +
            `\nMissing potential matches: ${missingStories.join(", ")}`
        );
      }

      expect(
        docsStories.length,
        `Expected ${componentName} docs (${docsStories.length}) to have >= active stories (${activeStories.length}). Missing: ${missingStories.join(", ")}`
      ).toBeGreaterThanOrEqual(activeStories.length);
    });
  }
});
