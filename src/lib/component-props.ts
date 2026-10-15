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
        },
        {
          name: "closable",
          type: "boolean",
          required: false,
          description: "",
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
          description: "",
        },
        {
          name: "'aria-label'",
          type: "string",
          required: true,
          description: "",
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
          description: "",
        },
        {
          name: "onOverflowClick",
          type: "() => void",
          required: false,
          description: "",
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
        },
        {
          name: "itemsAfterCollapse",
          type: "number",
          required: false,
          description: "",
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
          description: "",
        },
        {
          name: "loadingText",
          type: "string",
          required: false,
          description: "",
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
          description: "",
        },
        {
          name: "loop",
          type: "boolean",
          required: false,
          description: "",
        },
        {
          name: "autoplayInterval",
          type: "number",
          required: false,
          description: "",
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
          description: "",
        },
        {
          name: "spacing",
          type: "CarouselSpacing",
          required: false,
          description: "",
        },
        {
          name: "slidesPerView",
          type: "number",
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
      componentName: "ComboboxContextValue",
      props: [
        {
          name: "inputRef",
          type: "RefObject<HTMLInputElement | null>",
          required: true,
          description: "",
        },
        {
          name: "contentRef",
          type: "RefObject<HTMLDivElement | null>",
          required: true,
          description: "",
        },
      ],
    },
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
          description: "",
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
      componentName: "CommandPaletteContextValue",
      props: [
        {
          name: "inputRef",
          type: "RefObject<HTMLInputElement | null>",
          required: true,
          description: "",
        },
        {
          name: "panelRef",
          type: "RefObject<HTMLDivElement | null>",
          required: true,
          description: "",
        },
      ],
    },
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
          description: "",
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
      componentName: "DialogContextValue",
      props: [
        {
          name: "triggerRef",
          type: "RefObject<HTMLElement | null>",
          required: true,
          description: "",
        },
      ],
    },
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
          description: "",
        },
        {
          name: "showCloseButton",
          type: "boolean",
          required: false,
          description: "",
        },
      ],
    },
  ],
  "dropdown-menu": [
    {
      componentName: "DropdownMenuContextValue",
      props: [
        {
          name: "triggerRef",
          type: "RefObject<HTMLElement | null>",
          required: true,
          description: "",
        },
        {
          name: "contentRef",
          type: "RefObject<HTMLDivElement | null>",
          required: true,
          description: "",
        },
      ],
    },
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
        },
        {
          name: "destructive",
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
        },
        {
          name: "dir",
          type: "'ltr' | 'rtl'",
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
        },
        {
          name: "disabled",
          type: "boolean",
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
          name: "dir",
          type: "'ltr' | 'rtl'",
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
        },
        {
          name: "dir",
          type: "'ltr' | 'rtl'",
          required: false,
          description: "",
        },
        {
          name: "responsive",
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
        },
        {
          name: "activationMode",
          type: "TabsActivationMode",
          required: false,
          description: "",
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
          description: "",
        },
        {
          name: "lazyMount",
          type: "boolean",
          required: false,
          description: "",
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
        },
        {
          name: "maxRows",
          type: "number",
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
          name: "dir",
          type: "'ltr' | 'rtl'",
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
      componentName: "ToastProps",
      props: [
        {
          name: "toast",
          type: "ToastItem",
          required: true,
          description: "",
        },
        {
          name: "onDismiss",
          type: "() => void",
          required: true,
          description: "",
        },
        {
          name: "onScheduleDismiss",
          type: "(ms: number) => void",
          required: true,
          description: "",
        },
        {
          name: "onPause",
          type: "() => void",
          required: true,
          description: "",
        },
      ],
    },
    {
      componentName: "ToastContextValue",
      props: [
        {
          name: "push",
          type: "(toast: Omit<ToastItem, 'id'>) => string",
          required: true,
          description: "",
        },
      ],
    },
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
        },
      ],
    },
  ],
  tooltip: [
    {
      componentName: "TooltipContextValue",
      props: [
        {
          name: "triggerRef",
          type: "RefObject<HTMLElement | null>",
          required: true,
          description: "",
        },
        {
          name: "placement",
          type: "TooltipPlacement",
          required: true,
          description: "",
        },
        {
          name: "showArrow",
          type: "boolean",
          required: true,
          description: "",
        },
      ],
    },
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
          description: "",
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
          description: "",
        },
        {
          name: "showArrow",
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
