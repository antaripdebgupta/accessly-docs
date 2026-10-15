import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const distDir = path.resolve("node_modules/@accessly-ui/react/dist");

const componentMap = {
  accordion: [
    "Accordion/Accordion.d.ts",
    "Accordion/AccordionItem.d.ts",
    "Accordion/AccordionTrigger.d.ts",
    "Accordion/AccordionContent.d.ts",
  ],
  alert: ["Alert/Alert.d.ts"],
  avatar: ["Avatar/Avatar.d.ts", "Avatar/AvatarBadge.d.ts", "Avatar/AvatarGroup.d.ts"],
  breadcrumb: [
    "Breadcrumb/Breadcrumb.d.ts",
    "Breadcrumb/BreadcrumbItem.d.ts",
    "Breadcrumb/BreadcrumbSeparator.d.ts",
  ],
  button: ["Button/Button.d.ts"],
  carousel: [
    "Carousel/Carousel.d.ts",
    "Carousel/CarouselSlide.d.ts",
    "Carousel/CarouselControls.d.ts",
  ],
  checkbox: ["Checkbox/Checkbox.d.ts"],
  combobox: [
    "Combobox/Combobox.d.ts",
    "Combobox/ComboboxInput.d.ts",
    "Combobox/ComboboxItem.d.ts",
  ],
  "command-palette": [
    "CommandPalette/CommandPalette.d.ts",
    "CommandPalette/CommandInput.d.ts",
    "CommandPalette/CommandItem.d.ts",
  ],
  "data-table": ["DataTable/DataTable.d.ts", "DataTable/DataTableRow.d.ts"],
  dialog: [
    "Dialog/Dialog.d.ts",
    "Dialog/DialogOverlay.d.ts",
    "Dialog/DialogContent.d.ts",
  ],
  "dropdown-menu": [
    "DropdownMenu/DropdownMenu.d.ts",
    "DropdownMenu/DropdownMenuItem.d.ts",
    "DropdownMenu/DropdownMenuCheckboxItem.d.ts",
  ],
  input: ["Input/Input.d.ts", "Input/InputGroup.d.ts", "Input/FileInput.d.ts"],
  pagination: ["Pagination/Pagination.d.ts"],
  "radio-group": ["RadioGroup/RadioGroup.d.ts", "RadioGroup/RadioGroupItem.d.ts"],
  skeleton: ["Skeleton/Skeleton.d.ts", "Skeleton/SkeletonGroup.d.ts"],
  switch: ["Switch/Switch.d.ts"],
  tabs: [
    "Tabs/Tabs.d.ts",
    "Tabs/TabsList.d.ts",
    "Tabs/TabsTrigger.d.ts",
    "Tabs/TabsContent.d.ts",
  ],
  textarea: ["Textarea/Textarea.d.ts"],
  toast: ["Toast/Toast.d.ts", "Toast/ToastProvider.d.ts"],
  tooltip: [
    "Tooltip/Tooltip.d.ts",
    "Tooltip/TooltipTrigger.d.ts",
    "Tooltip/TooltipContent.d.ts",
  ],
  "tree-view": ["TreeView/TreeView.d.ts", "TreeView/TreeItem.d.ts"],
};

function extractPropsFromFile(relPath) {
  const fullPath = path.join(distDir, relPath);
  if (!fs.existsSync(fullPath)) return [];

  const code = fs.readFileSync(fullPath, "utf8");
  const sf = ts.createSourceFile(
    path.basename(relPath),
    code,
    ts.ScriptTarget.Latest,
    true
  );

  const sections = [];

  function visit(node) {
    if (ts.isInterfaceDeclaration(node)) {
      const name = node.name.text;
      const props = [];

      for (const member of node.members) {
        if (ts.isPropertySignature(member)) {
          const propName = member.name.getText(sf);
          const typeStr = member.type ? member.type.getText(sf) : "any";
          const isRequired = !member.questionToken;

          props.push({
            name: propName,
            type: typeStr,
            required: isRequired,
            description: "",
          });
        }
      }

      if (props.length > 0) {
        sections.push({
          componentName: name,
          props,
        });
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sf);
  return sections;
}

const result = {};

for (const [slug, files] of Object.entries(componentMap)) {
  const sections = [];
  for (const f of files) {
    sections.push(...extractPropsFromFile(f));
  }
  result[slug] = sections;
}

const outContent = `export interface PropDoc {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: string;
  description: string;
}

export interface ComponentPropsSection {
  componentName: string;
  props: PropDoc[];
}

export const componentPropsMap: Record<string, ComponentPropsSection[]> = ${JSON.stringify(result, null, 2)};
`;

fs.writeFileSync(path.resolve("src/lib/component-props.ts"), outContent);
console.log(
  "Successfully generated src/lib/component-props.ts with",
  Object.keys(result).length,
  "components."
);
