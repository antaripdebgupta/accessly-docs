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

// Internal types that are not public component props
const internalInterfaces = new Set([
  "ComboboxContextValue",
  "CommandPaletteContextValue",
  "DialogContextValue",
  "DropdownMenuContextValue",
  "ToastContextValue",
  "TooltipContextValue",
  "ToastProps",
]);

// Verified default values from component implementations and CVA configurations
const knownDefaults = {
  ButtonProps: {
    variant: '"primary"',
    size: '"md"',
    loading: "false",
  },
  AccordionProps: {
    type: '"single"',
    collapsible: "true",
    variant: '"default"',
  },
  AccordionItemProps: {
    disabled: "false",
  },
  AlertProps: {
    variant: '"info"',
    banner: "false",
    urgency: '"assertive"',
    closable: "false",
  },
  AvatarGroupProps: {
    size: '"md"',
  },
  BreadcrumbProps: {
    itemsBeforeCollapse: "1",
    itemsAfterCollapse: "1",
    dir: '"ltr"',
    "aria-label": '"Breadcrumb"',
  },
  BreadcrumbItemProps: {
    isCurrent: "false",
  },
  CarouselProps: {
    orientation: '"horizontal"',
    loop: "true",
    size: '"full"',
    spacing: '"md"',
    slidesPerView: "1",
  },
  CarouselSlideProps: {
    slideIndex: "0",
  },
  ComboboxInputProps: {
    showClearButton: "true",
  },
  ComboboxItemProps: {
    disabled: "false",
  },
  CommandPaletteProps: {
    hotkey: '"mod+k"',
  },
  CommandItemProps: {
    disabled: "false",
  },
  DialogContentProps: {
    size: '"md"',
    showCloseButton: "true",
  },
  DropdownMenuContentProps: {
    align: '"start"',
    sideOffset: "4",
  },
  DropdownMenuItemProps: {
    disabled: "false",
    destructive: "false",
  },
  FileInputProps: {
    multiple: "false",
    disabled: "false",
    required: "false",
    dir: '"ltr"',
  },
  InputProps: {
    type: '"text"',
    layout: '"stacked"',
    dir: '"ltr"',
  },
  RadioGroupProps: {
    orientation: '"vertical"',
    disabled: "false",
    responsive: "false",
    dir: '"ltr"',
  },
  SwitchProps: {
    size: '"md"',
  },
  TabsProps: {
    orientation: '"horizontal"',
    activationMode: '"automatic"',
    loop: "true",
  },
  TabsContentProps: {
    forceMount: "false",
    lazyMount: "true",
  },
  TabsListProps: {
    scrollable: "false",
  },
  TabsTriggerProps: {
    disabled: "false",
  },
  TextareaProps: {
    autoResize: "false",
    maxRows: "6",
    dir: '"ltr"',
  },
  ToastProviderProps: {
    placement: '"bottom-right"',
  },
  TooltipProps: {
    placement: '"top"',
    showArrow: "true",
    delayDuration: "300",
  },
  TreeViewProps: {
    selectionMode: '"single"',
  },
  TreeItemProps: {
    disabled: "false",
  },
  SkeletonProps: {
    label: '"Loading"',
  },
};

// Verified descriptions from component JSDocs and source
const knownDescriptions = {
  ButtonProps: {
    loadingText:
      "Visible while loading; accessible name stays stable via aria-busy, not label swap.",
    loading: "Shows an accessible loading spinner and sets aria-busy.",
    variant: "Visual style variant (primary, secondary, danger).",
    size: "Button sizing (sm, md, lg).",
  },
  DialogContentProps: {
    size: "Max width — matches library standard content sizes (sm, md, lg).",
    showCloseButton: "Shows the top-right close icon button.",
  },
  TabsContentProps: {
    forceMount:
      "Keep the panel mounted in the DOM (with visibility toggled) even before first selection.",
    lazyMount: "Defer mounting panel contents until first selected.",
  },
  TooltipProps: {
    delayDuration: "Delay (in milliseconds) before showing the tooltip on hover.",
    showArrow: "Renders a pointer arrow linking the tooltip to its trigger.",
    placement: "Tooltip placement relative to trigger (top, right, bottom, left).",
  },
  CarouselProps: {
    autoplayInterval:
      "Milliseconds between auto-advances. Omit to disable autoplay. Ignored under prefers-reduced-motion.",
    size: 'How wide each slide renders relative to the viewport ("full" for one slide at a time).',
    spacing: 'Gap between slides ("sm", "md", "lg").',
    slidesPerView: "Number of slides visible simultaneously.",
    loop: "Whether carousel loops seamlessly from last to first slide.",
    orientation: "Scroll orientation (horizontal or vertical).",
  },
  AvatarGroupProps: {
    "aria-label":
      'Accessible label for the group as a whole, e.g. "Project collaborators".',
    overflowIcon:
      'Icon rendered inside the "+N" overflow avatar instead of the count text.',
    onOverflowClick:
      'Called when the overflow "+N" avatar is activated — wire this to open a dropdown/list.',
    size: "Avatar sizing for all members of the group.",
  },
  DataTableProps: {
    caption: "Accessible table caption describing the tabular dataset to screen readers.",
    columns: "Column definitions including header, cell render, and sort accessors.",
    data: "Array of row data records.",
    getRowId: "Unique identifier extractor for each row item.",
  },
  ComboboxInputProps: {
    showClearButton: "Renders a button to clear the input text when populated.",
  },
  CommandPaletteProps: {
    hotkey: "Global keyboard shortcut that toggles the palette.",
  },
};

function getJsDoc(node, sf, code) {
  const fullText = code.slice(node.getFullStart(), node.getStart());
  const match = fullText.match(/\/\*\*([\s\S]*?)\*\//);
  if (!match) return "";
  return match[1]
    .split("\n")
    .map((line) => line.replace(/^\s*\*\s?/, "").trim())
    .filter(Boolean)
    .join(" ");
}

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

      // Filter out internal context values and non-public interfaces
      if (internalInterfaces.has(name) || name.endsWith("ContextValue")) {
        return;
      }

      const props = [];
      const sectionDefaults = knownDefaults[name] || {};
      const sectionDescriptions = knownDescriptions[name] || {};

      for (const member of node.members) {
        if (ts.isPropertySignature(member)) {
          const propName = member.name.getText(sf).replace(/['"]/g, "");
          const rawPropName = member.name.getText(sf);
          const typeStr = member.type ? member.type.getText(sf) : "any";
          const isRequired = !member.questionToken;

          const astDoc = getJsDoc(member, sf, code);
          const description =
            astDoc ||
            sectionDescriptions[propName] ||
            sectionDescriptions[rawPropName] ||
            "";

          const defaultValue =
            sectionDefaults[propName] || sectionDefaults[rawPropName] || undefined;

          const propEntry = {
            name: rawPropName,
            type: typeStr,
            required: isRequired,
            description,
          };

          if (defaultValue !== undefined) {
            propEntry.defaultValue = defaultValue;
          }

          props.push(propEntry);
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

fs.writeFileSync(path.resolve("src/data/components/props.ts"), outContent);
console.log(
  "Successfully generated src/data/components/props.ts with",
  Object.keys(result).length,
  "components."
);
