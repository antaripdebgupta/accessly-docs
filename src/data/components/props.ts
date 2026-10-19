export interface PropDoc {
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

export const componentPropsMap: Record<string, ComponentPropsSection[]> = {
  accordion: [
    {
      componentName: "AccordionProps",
      props: [
        {
          name: "type",
          type: "AccordionType",
          required: false,
          description: "",
          defaultValue: '"single"',
        },
        {
          name: "value",
          type: "string | string[]",
          required: false,
          description: "",
        },
        {
          name: "defaultValue",
          type: "string | string[]",
          required: false,
          description: "",
        },
        {
          name: "onValueChange",
          type: "(value: string | string[]) => void",
          required: false,
          description: "",
        },
        {
          name: "collapsible",
          type: "boolean",
          required: false,
          description: "",
          defaultValue: "true",
        },
        {
          name: "dir",
          type: "'ltr' | 'rtl'",
          required: false,
          description: "",
        },
        {
          name: "id",
          type: "string",
          required: false,
          description: "",
        },
      ],
    },
    {
      componentName: "AccordionItemProps",
      props: [
        {
          name: "value",
          type: "string",
          required: true,
          description: "",
        },
        {
          name: "disabled",
          type: "boolean",
          required: false,
          description: "",
          defaultValue: "false",
        },
      ],
    },
  ],
  alert: [
    {
      componentName: "AlertProps",
      props: [
        {
          name: "title",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "urgency",
          type: "'polite' | 'assertive' | 'off'",
          required: false,
          description: "",
          defaultValue: '"assertive"',
        },
        {
          name: "closable",
          type: "boolean",
          required: false,
          description: "",
          defaultValue: "false",
        },
        {
          name: "onClose",
          type: "() => void",
          required: false,
          description: "",
        },
      ],
    },
  ],
  avatar: [
    {
      componentName: "AvatarProps",
      props: [
        {
          name: "src",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "name",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "alt",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "badge",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "badgeIcon",
          type: "ReactNode",
          required: false,
          description: "",
        },
      ],
    },
    {
      componentName: "AvatarStatusBadgeProps",
      props: [
        {
          name: "label",
          type: "string",
          required: true,
          description: "",
        },
      ],
    },
    {
      componentName: "AvatarGroupProps",
      props: [
        {
          name: "max",
          type: "number",
          required: false,
          description: "",
        },
        {
          name: "size",
          type: "AvatarProps['size']",
          required: false,
          description: "Avatar sizing for all members of the group.",
          defaultValue: '"md"',
        },
        {
          name: "'aria-label'",
          type: "string",
          required: true,
          description:
            'Accessible label for the group as a whole, e.g. "Project collaborators".',
        },
        {
          name: "children",
          type: "ReactNode",
          required: true,
          description: "",
        },
        {
          name: "overflowIcon",
          type: "ReactNode",
          required: false,
          description:
            'Icon rendered inside the "+N" overflow avatar instead of the count text.',
        },
        {
          name: "onOverflowClick",
          type: "() => void",
          required: false,
          description:
            'Called when the overflow "+N" avatar is activated — wire this to open a dropdown/list.',
        },
      ],
    },
  ],
  breadcrumb: [
    {
      componentName: "BreadcrumbProps",
      props: [
        {
          name: "items",
          type: "BreadcrumbItemData[]",
          required: false,
          description: "",
        },
        {
          name: "separator",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "maxItems",
          type: "number",
          required: false,
          description: "",
        },
        {
          name: "itemsBeforeCollapse",
          type: "number",
          required: false,
          description: "",
          defaultValue: "1",
        },
        {
          name: "itemsAfterCollapse",
          type: "number",
          required: false,
          description: "",
          defaultValue: "1",
        },
        {
          name: "as",
          type: "ElementType",
          required: false,
          description: "",
        },
        {
          name: "dir",
          type: "'ltr' | 'rtl'",
          required: false,
          description: "",
          defaultValue: '"ltr"',
        },
        {
          name: "children",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "className",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "listClassName",
          type: "string",
          required: false,
          description: "",
        },
      ],
    },
    {
      componentName: "BreadcrumbItemProps",
      props: [
        {
          name: "children",
          type: "ReactNode",
          required: true,
          description: "",
        },
        {
          name: "href",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "isCurrent",
          type: "boolean",
          required: false,
          description: "",
          defaultValue: "false",
        },
        {
          name: "as",
          type: "ElementType",
          required: false,
          description: "",
        },
        {
          name: "className",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "linkClassName",
          type: "string",
          required: false,
          description: "",
        },
      ],
    },
    {
      componentName: "BreadcrumbSeparatorProps",
      props: [
        {
          name: "children",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "className",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "dir",
          type: "'ltr' | 'rtl'",
          required: false,
          description: "",
        },
      ],
    },
  ],
  button: [
    {
      componentName: "ButtonProps",
      props: [
        {
          name: "loading",
          type: "boolean",
          required: false,
          description: "Shows an accessible loading spinner and sets aria-busy.",
          defaultValue: "false",
        },
        {
          name: "loadingText",
          type: "string",
          required: false,
          description:
            "Visible while loading; accessible name stays stable via aria-busy, not label swap.",
        },
      ],
    },
  ],
  carousel: [
    {
      componentName: "CarouselProps",
      props: [
        {
          name: "'aria-label'",
          type: "string",
          required: true,
          description: "",
        },
        {
          name: "index",
          type: "number",
          required: false,
          description: "",
        },
        {
          name: "defaultIndex",
          type: "number",
          required: false,
          description: "",
        },
        {
          name: "onIndexChange",
          type: "(index: number) => void",
          required: false,
          description: "",
        },
        {
          name: "orientation",
          type: "CarouselOrientation",
          required: false,
          description: "Scroll orientation (horizontal or vertical).",
          defaultValue: '"horizontal"',
        },
        {
          name: "loop",
          type: "boolean",
          required: false,
          description: "Whether carousel loops seamlessly from last to first slide.",
          defaultValue: "true",
        },
        {
          name: "autoplayInterval",
          type: "number",
          required: false,
          description:
            "ms between auto-advances. Omit to disable autoplay. Ignored under prefers-reduced-motion.",
        },
        {
          name: "dir",
          type: "'ltr' | 'rtl'",
          required: false,
          description: "",
        },
        {
          name: "size",
          type: "CarouselSize",
          required: false,
          description:
            'How wide each slide renders relative to the viewport. Default "full" (one slide at a time).',
          defaultValue: '"full"',
        },
        {
          name: "spacing",
          type: "CarouselSpacing",
          required: false,
          description: 'Gap between slides. Default "md".',
          defaultValue: '"md"',
        },
        {
          name: "slidesPerView",
          type: "number",
          required: false,
          description: "How many slides are visible at once. Default 1.",
          defaultValue: "1",
        },
        {
          name: "id",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "children",
          type: "ReactNode",
          required: true,
          description: "",
        },
      ],
    },
    {
      componentName: "CarouselSlideProps",
      props: [
        {
          name: "'data-slide-index'",
          type: "number",
          required: false,
          description: "",
        },
      ],
    },
  ],
  checkbox: [
    {
      componentName: "CheckboxProps",
      props: [
        {
          name: "checked",
          type: "boolean | 'indeterminate'",
          required: false,
          description: "",
        },
        {
          name: "defaultChecked",
          type: "boolean | 'indeterminate'",
          required: false,
          description: "",
        },
        {
          name: "onCheckedChange",
          type: "(checked: boolean | 'indeterminate') => void",
          required: false,
          description: "",
        },
        {
          name: "label",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "description",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "error",
          type: "ReactNode",
          required: false,
          description: "",
        },
      ],
    },
  ],
  combobox: [
    {
      componentName: "ComboboxProps",
      props: [
        {
          name: "value",
          type: "string | string[]",
          required: false,
          description: "",
        },
        {
          name: "defaultValue",
          type: "string | string[]",
          required: false,
          description: "",
        },
        {
          name: "onValueChange",
          type: "(value: string | string[]) => void",
          required: false,
          description: "",
        },
        {
          name: "multiple",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "inputValue",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "defaultInputValue",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "onInputValueChange",
          type: "(value: string) => void",
          required: false,
          description: "",
        },
        {
          name: "disabled",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "invalid",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "autoHighlight",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "filter",
          type: "(label: string, query: string) => boolean",
          required: false,
          description: "",
        },
        {
          name: "id",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "children",
          type: "ReactNode",
          required: true,
          description: "",
        },
      ],
    },
    {
      componentName: "ComboboxInputProps",
      props: [
        {
          name: "placeholder",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "className",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "leading",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "showClearButton",
          type: "boolean",
          required: false,
          description: "Renders a button to clear the input text when populated.",
          defaultValue: "true",
        },
        {
          name: "getTagLabel",
          type: "(value: string) => string",
          required: false,
          description: "",
        },
      ],
    },
    {
      componentName: "ComboboxItemProps",
      props: [
        {
          name: "value",
          type: "string",
          required: true,
          description: "",
        },
        {
          name: "disabled",
          type: "boolean",
          required: false,
          description: "",
          defaultValue: "false",
        },
        {
          name: "group",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "icon",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "textValue",
          type: "string",
          required: false,
          description: "",
        },
      ],
    },
  ],
  "command-palette": [
    {
      componentName: "CommandPaletteProps",
      props: [
        {
          name: "open",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "defaultOpen",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          required: false,
          description: "",
        },
        {
          name: "inputValue",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "defaultInputValue",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "onInputValueChange",
          type: "(value: string) => void",
          required: false,
          description: "",
        },
        {
          name: "loop",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "hotkey",
          type: "string | null",
          required: false,
          description: "Global keyboard shortcut that toggles the palette.",
          defaultValue: '"mod+k"',
        },
        {
          name: "id",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "className",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "children",
          type: "ReactNode",
          required: true,
          description: "",
        },
      ],
    },
    {
      componentName: "CommandInputProps",
      props: [
        {
          name: "placeholder",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "className",
          type: "string",
          required: false,
          description: "",
        },
      ],
    },
    {
      componentName: "CommandItemProps",
      props: [
        {
          name: "value",
          type: "string",
          required: true,
          description: "",
        },
        {
          name: "disabled",
          type: "boolean",
          required: false,
          description: "",
          defaultValue: "false",
        },
        {
          name: "icon",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "textValue",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "onSelect",
          type: "() => void",
          required: false,
          description: "",
        },
      ],
    },
  ],
  "data-table": [
    {
      componentName: "DataTableProps",
      props: [
        {
          name: "caption",
          type: "string",
          required: true,
          description:
            "Accessible table caption describing the tabular dataset to screen readers.",
        },
        {
          name: "children",
          type: "ReactNode",
          required: true,
          description: "",
        },
      ],
    },
    {
      componentName: "DataTableRowProps",
      props: [
        {
          name: "row",
          type: "T",
          required: true,
          description: "",
        },
        {
          name: "rowIndex",
          type: "number",
          required: true,
          description: "",
        },
        {
          name: "renderExpanded",
          type: "(row: T, rowIndex: number) => React.ReactNode",
          required: false,
          description: "",
        },
      ],
    },
  ],
  dialog: [
    {
      componentName: "DialogProps",
      props: [
        {
          name: "open",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "defaultOpen",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          required: false,
          description: "",
        },
        {
          name: "closeOnOverlayClick",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "closeOnEscape",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "id",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "children",
          type: "ReactNode",
          required: true,
          description: "",
        },
      ],
    },
    {
      componentName: "DialogOverlayProps",
      props: [
        {
          name: "visible",
          type: "boolean",
          required: true,
          description: "",
        },
      ],
    },
    {
      componentName: "DialogContentProps",
      props: [
        {
          name: "size",
          type: "'sm' | 'md' | 'lg' | 'xl'",
          required: false,
          description:
            'Max width — matches this library\'s small/medium/large content sizes. Default "md".',
          defaultValue: '"md"',
        },
        {
          name: "showCloseButton",
          type: "boolean",
          required: false,
          description: 'Shows the top-right "X" close button. Default true.',
          defaultValue: "true",
        },
      ],
    },
  ],
  "dropdown-menu": [
    {
      componentName: "DropdownMenuProps",
      props: [
        {
          name: "open",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "defaultOpen",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          required: false,
          description: "",
        },
        {
          name: "id",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "children",
          type: "ReactNode",
          required: true,
          description: "",
        },
      ],
    },
    {
      componentName: "DropdownMenuItemProps",
      props: [
        {
          name: "disabled",
          type: "boolean",
          required: false,
          description: "",
          defaultValue: "false",
        },
        {
          name: "destructive",
          type: "boolean",
          required: false,
          description: "",
          defaultValue: "false",
        },
        {
          name: "icon",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "textValue",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "onSelect",
          type: "() => void",
          required: false,
          description: "",
        },
      ],
    },
    {
      componentName: "DropdownMenuCheckboxItemProps",
      props: [
        {
          name: "checked",
          type: "boolean",
          required: true,
          description: "",
        },
        {
          name: "onCheckedChange",
          type: "(checked: boolean) => void",
          required: true,
          description: "",
        },
        {
          name: "disabled",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "icon",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "textValue",
          type: "string",
          required: false,
          description: "",
        },
      ],
    },
  ],
  input: [
    {
      componentName: "InputProps",
      props: [
        {
          name: "label",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "description",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "error",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "required",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "showRequiredIndicator",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "badge",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "prefix",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "suffix",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "actionButton",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "layout",
          type: "'stacked' | 'inline'",
          required: false,
          description: "",
          defaultValue: '"stacked"',
        },
        {
          name: "dir",
          type: "'ltr' | 'rtl'",
          required: false,
          description: "",
          defaultValue: '"ltr"',
        },
        {
          name: "wrapperClassName",
          type: "string",
          required: false,
          description: "",
        },
      ],
    },
    {
      componentName: "InputGroupProps",
      props: [
        {
          name: "children",
          type: "ReactNode",
          required: true,
          description: "",
        },
        {
          name: "className",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "dir",
          type: "'ltr' | 'rtl'",
          required: false,
          description: "",
        },
      ],
    },
    {
      componentName: "FieldGroupProps",
      props: [
        {
          name: "legend",
          type: "ReactNode",
          required: true,
          description: "",
        },
        {
          name: "description",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "error",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "children",
          type: "ReactNode",
          required: true,
          description: "",
        },
        {
          name: "className",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "dir",
          type: "'ltr' | 'rtl'",
          required: false,
          description: "",
        },
      ],
    },
    {
      componentName: "FileInputProps",
      props: [
        {
          name: "label",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "description",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "error",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "onFilesSelected",
          type: "(files: FileList | null) => void",
          required: false,
          description: "",
        },
        {
          name: "accept",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "multiple",
          type: "boolean",
          required: false,
          description: "",
          defaultValue: "false",
        },
        {
          name: "disabled",
          type: "boolean",
          required: false,
          description: "",
          defaultValue: "false",
        },
        {
          name: "required",
          type: "boolean",
          required: false,
          description: "",
          defaultValue: "false",
        },
        {
          name: "dir",
          type: "'ltr' | 'rtl'",
          required: false,
          description: "",
          defaultValue: '"ltr"',
        },
        {
          name: "className",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "dropzoneText",
          type: "ReactNode",
          required: false,
          description: "",
        },
      ],
    },
  ],
  pagination: [
    {
      componentName: "PaginationProps",
      props: [
        {
          name: "currentPage",
          type: "number",
          required: false,
          description: "",
        },
        {
          name: "defaultCurrentPage",
          type: "number",
          required: false,
          description: "",
        },
        {
          name: "pageCount",
          type: "number",
          required: true,
          description: "",
        },
        {
          name: "onPageChange",
          type: "(page: number) => void",
          required: false,
          description: "",
        },
        {
          name: "siblingCount",
          type: "number",
          required: false,
          description: "",
        },
        {
          name: "boundaryCount",
          type: "number",
          required: false,
          description: "",
        },
        {
          name: "className",
          type: "string",
          required: false,
          description: "",
        },
      ],
    },
  ],
  "radio-group": [
    {
      componentName: "RadioGroupProps",
      props: [
        {
          name: "value",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "defaultValue",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "onValueChange",
          type: "(value: string) => void",
          required: false,
          description: "",
        },
        {
          name: "disabled",
          type: "boolean",
          required: false,
          description: "",
          defaultValue: "false",
        },
        {
          name: "name",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "orientation",
          type: "'horizontal' | 'vertical'",
          required: false,
          description: "",
          defaultValue: '"vertical"',
        },
        {
          name: "dir",
          type: "'ltr' | 'rtl'",
          required: false,
          description: "",
          defaultValue: '"ltr"',
        },
        {
          name: "responsive",
          type: "boolean",
          required: false,
          description: "",
          defaultValue: "false",
        },
        {
          name: "label",
          type: "ReactNode",
          required: false,
          description: "",
        },
      ],
    },
    {
      componentName: "RadioGroupItemProps",
      props: [
        {
          name: "value",
          type: "string",
          required: true,
          description: "",
        },
        {
          name: "label",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "description",
          type: "ReactNode",
          required: false,
          description: "",
        },
      ],
    },
  ],
  skeleton: [
    {
      componentName: "SkeletonProps",
      props: [
        {
          name: "width",
          type: "string | number",
          required: false,
          description: "",
        },
        {
          name: "height",
          type: "string | number",
          required: false,
          description: "",
        },
      ],
    },
    {
      componentName: "SkeletonGroupProps",
      props: [
        {
          name: "loading",
          type: "boolean",
          required: true,
          description: "",
        },
        {
          name: "label",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "fallback",
          type: "ReactNode",
          required: true,
          description: "",
        },
        {
          name: "children",
          type: "ReactNode",
          required: true,
          description: "",
        },
      ],
    },
  ],
  switch: [
    {
      componentName: "SwitchProps",
      props: [
        {
          name: "checked",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "defaultChecked",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "onCheckedChange",
          type: "(checked: boolean) => void",
          required: false,
          description: "",
        },
        {
          name: "pending",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "label",
          type: "ReactNode",
          required: false,
          description: "",
        },
      ],
    },
  ],
  tabs: [
    {
      componentName: "TabsProps",
      props: [
        {
          name: "value",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "defaultValue",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "onValueChange",
          type: "(value: string) => void",
          required: false,
          description: "",
        },
        {
          name: "orientation",
          type: "TabsOrientation",
          required: false,
          description: "",
          defaultValue: '"horizontal"',
        },
        {
          name: "activationMode",
          type: "TabsActivationMode",
          required: false,
          description: "",
          defaultValue: '"automatic"',
        },
        {
          name: "dir",
          type: "'ltr' | 'rtl'",
          required: false,
          description: "",
        },
        {
          name: "loop",
          type: "boolean",
          required: false,
          description: "",
          defaultValue: "true",
        },
        {
          name: "id",
          type: "string",
          required: false,
          description: "",
        },
      ],
    },
    {
      componentName: "TabsListProps",
      props: [
        {
          name: "scrollable",
          type: "boolean",
          required: false,
          description: "",
          defaultValue: "false",
        },
      ],
    },
    {
      componentName: "TabsTriggerProps",
      props: [
        {
          name: "value",
          type: "string",
          required: true,
          description: "",
        },
        {
          name: "disabled",
          type: "boolean",
          required: false,
          description: "",
          defaultValue: "false",
        },
        {
          name: "icon",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "badge",
          type: "ReactNode",
          required: false,
          description: "",
        },
      ],
    },
    {
      componentName: "TabsContentProps",
      props: [
        {
          name: "value",
          type: "string",
          required: true,
          description: "",
        },
        {
          name: "forceMount",
          type: "boolean",
          required: false,
          description:
            "Keep the panel mounted (with visibility toggled) even before first selection.",
          defaultValue: "false",
        },
        {
          name: "lazyMount",
          type: "boolean",
          required: false,
          description:
            "Defer mounting panel contents until first selected. Default true.",
          defaultValue: "true",
        },
      ],
    },
  ],
  textarea: [
    {
      componentName: "TextareaProps",
      props: [
        {
          name: "label",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "description",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "error",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "maxCount",
          type: "number",
          required: false,
          description: "",
        },
        {
          name: "autoResize",
          type: "boolean",
          required: false,
          description: "",
          defaultValue: "false",
        },
        {
          name: "maxRows",
          type: "number",
          required: false,
          description: "",
          defaultValue: "6",
        },
        {
          name: "actionButton",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "dir",
          type: "'ltr' | 'rtl'",
          required: false,
          description: "",
          defaultValue: '"ltr"',
        },
        {
          name: "className",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "wrapperClassName",
          type: "string",
          required: false,
          description: "",
        },
      ],
    },
  ],
  toast: [
    {
      componentName: "ToastProviderProps",
      props: [
        {
          name: "children",
          type: "ReactNode",
          required: true,
          description: "",
        },
        {
          name: "placement",
          type: "ToastPlacement",
          required: false,
          description: "",
          defaultValue: '"bottom-right"',
        },
      ],
    },
  ],
  tooltip: [
    {
      componentName: "TooltipProps",
      props: [
        {
          name: "open",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "defaultOpen",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          required: false,
          description: "",
        },
        {
          name: "delayDuration",
          type: "number",
          required: false,
          description: "Delay (ms) before showing on hover. Default 300.",
          defaultValue: "300",
        },
        {
          name: "disabled",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "placement",
          type: "TooltipPlacement",
          required: false,
          description:
            "Tooltip placement relative to trigger (top, right, bottom, left).",
          defaultValue: '"top"',
        },
        {
          name: "showArrow",
          type: "boolean",
          required: false,
          description:
            "Renders a small pointer arrow linking the tooltip to its trigger. Default true.",
          defaultValue: "true",
        },
        {
          name: "id",
          type: "string",
          required: false,
          description: "",
        },
        {
          name: "children",
          type: "ReactNode",
          required: true,
          description: "",
        },
      ],
    },
    {
      componentName: "TooltipTriggerProps",
      props: [
        {
          name: "children",
          type: "ReactElement",
          required: true,
          description: "",
        },
      ],
    },
  ],
  "tree-view": [
    {
      componentName: "TreeViewProps",
      props: [
        {
          name: "'aria-label'",
          type: "string",
          required: true,
          description: "",
        },
        {
          name: "selectionMode",
          type: "TreeSelectionMode",
          required: false,
          description: "",
          defaultValue: '"single"',
        },
        {
          name: "selected",
          type: "string | string[]",
          required: false,
          description: "",
        },
        {
          name: "defaultSelected",
          type: "string | string[]",
          required: false,
          description: "",
        },
        {
          name: "onSelectedChange",
          type: "(value: string | string[]) => void",
          required: false,
          description: "",
        },
        {
          name: "expanded",
          type: "string[]",
          required: false,
          description: "",
        },
        {
          name: "defaultExpanded",
          type: "string[]",
          required: false,
          description: "",
        },
        {
          name: "onExpandedChange",
          type: "(value: string[]) => void",
          required: false,
          description: "",
        },
        {
          name: "id",
          type: "string",
          required: false,
          description: "",
        },
      ],
    },
    {
      componentName: "TreeItemProps",
      props: [
        {
          name: "value",
          type: "string",
          required: true,
          description: "",
        },
        {
          name: "label",
          type: "ReactNode",
          required: true,
          description: "",
        },
        {
          name: "icon",
          type: "ReactNode",
          required: false,
          description: "",
        },
        {
          name: "disabled",
          type: "boolean",
          required: false,
          description: "",
          defaultValue: "false",
        },
        {
          name: "children",
          type: "ReactNode",
          required: false,
          description: "",
        },
      ],
    },
  ],
};
