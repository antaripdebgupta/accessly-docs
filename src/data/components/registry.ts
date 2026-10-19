export interface ComponentMeta {
  name: string;
  slug: string;
  category:
    | "Forms & Inputs"
    | "Overlays & Dialogs"
    | "Navigation"
    | "Feedback"
    | "Data Display"
    | "Layout & Misc";
  description: string;
  wcagCriteria: string[];
  keyboardInteractions: { key: string; description: string }[];
  relatedComponents: string[];
}

export const componentRegistry: Record<string, ComponentMeta> = {
  button: {
    name: "Button",
    slug: "button",
    category: "Forms & Inputs",
    description:
      "Interactive button with accessible keyboard activation, pending loading states, and full ARIA semantics.",
    wcagCriteria: ["2.1.1 Keyboard", "4.1.2 Name, Role, Value"],
    keyboardInteractions: [
      { key: "Enter / Space", description: "Activates the button." },
      { key: "Tab", description: "Focuses the next interactive control." },
    ],
    relatedComponents: ["input", "dialog"],
  },
  checkbox: {
    name: "Checkbox",
    slug: "checkbox",
    category: "Forms & Inputs",
    description:
      "Two-state or indeterminate checkbox input with accessible group labeling and native form integration.",
    wcagCriteria: ["1.3.1 Info and Relationships", "4.1.2 Name, Role, Value"],
    keyboardInteractions: [
      { key: "Space", description: "Toggles the checked state." },
      { key: "Tab", description: "Moves focus to the next focusable element." },
    ],
    relatedComponents: ["switch", "radio-group"],
  },
  combobox: {
    name: "Combobox",
    slug: "combobox",
    category: "Forms & Inputs",
    description:
      "Autocomplete combobox with virtualized listbox, live search filtering, and roving tabindex navigation.",
    wcagCriteria: [
      "1.3.1 Info and Relationships",
      "2.1.1 Keyboard",
      "4.1.2 Name, Role, Value",
    ],
    keyboardInteractions: [
      { key: "ArrowDown / ArrowUp", description: "Navigates between suggestions." },
      { key: "Enter", description: "Selects active suggestion and closes popup." },
      { key: "Escape", description: "Closes popup and resets focus." },
    ],
    relatedComponents: ["input", "dropdown-menu"],
  },
  input: {
    name: "Input",
    slug: "input",
    category: "Forms & Inputs",
    description:
      "Accessible single-line text input with label association, helper text description, and validation error announcements.",
    wcagCriteria: [
      "1.3.1 Info and Relationships",
      "3.3.1 Error Identification",
      "3.3.2 Labels or Instructions",
    ],
    keyboardInteractions: [{ key: "Tab", description: "Focuses input control." }],
    relatedComponents: ["textarea", "combobox"],
  },
  pagination: {
    name: "Pagination",
    slug: "pagination",
    category: "Forms & Inputs",
    description:
      "Accessible multi-page navigation with aria-current='page', range indicators, and screen reader announcements.",
    wcagCriteria: ["2.1.1 Keyboard", "2.4.4 Link Purpose", "4.1.2 Name, Role, Value"],
    keyboardInteractions: [
      { key: "Enter / Space", description: "Navigates to the selected page." },
      { key: "Tab", description: "Moves focus through page controls." },
    ],
    relatedComponents: ["data-table", "breadcrumb"],
  },
  "radio-group": {
    name: "RadioGroup",
    slug: "radio-group",
    category: "Forms & Inputs",
    description:
      "Accessible single-selection group using roving tabindex and arrow key navigation adhering to WAI-ARIA APG.",
    wcagCriteria: [
      "1.3.1 Info and Relationships",
      "2.1.1 Keyboard",
      "4.1.2 Name, Role, Value",
    ],
    keyboardInteractions: [
      {
        key: "ArrowUp / ArrowLeft",
        description: "Selects previous radio item in group.",
      },
      { key: "ArrowDown / ArrowRight", description: "Selects next radio item in group." },
      {
        key: "Tab",
        description: "Moves focus into/out of group directly to checked item.",
      },
    ],
    relatedComponents: ["checkbox", "switch"],
  },
  switch: {
    name: "Switch",
    slug: "switch",
    category: "Forms & Inputs",
    description:
      "Binary toggle switch component implementing role='switch' with aria-checked states.",
    wcagCriteria: ["2.1.1 Keyboard", "4.1.2 Name, Role, Value"],
    keyboardInteractions: [
      { key: "Space / Enter", description: "Toggles switch state between on and off." },
      { key: "Tab", description: "Navigates to or from the switch." },
    ],
    relatedComponents: ["checkbox"],
  },
  textarea: {
    name: "Textarea",
    slug: "textarea",
    category: "Forms & Inputs",
    description:
      "Multi-line text input with automated height adjustment, accessible character counting, and validation feedback.",
    wcagCriteria: ["1.3.1 Info and Relationships", "3.3.2 Labels or Instructions"],
    keyboardInteractions: [{ key: "Tab", description: "Focuses textarea field." }],
    relatedComponents: ["input"],
  },
  "command-palette": {
    name: "CommandPalette",
    slug: "command-palette",
    category: "Overlays & Dialogs",
    description:
      "Global modal search and command prompt with fuzzy scoring, keyboard shortcuts, and live announcements.",
    wcagCriteria: ["2.1.1 Keyboard", "2.4.3 Focus Order", "4.1.2 Name, Role, Value"],
    keyboardInteractions: [
      { key: "⌘K / Ctrl+K", description: "Opens command palette from anywhere." },
      { key: "ArrowDown / ArrowUp", description: "Highlights next or previous command." },
      { key: "Enter", description: "Executes selected command." },
      { key: "Escape", description: "Dismisses palette and restores focus." },
    ],
    relatedComponents: ["dialog", "combobox"],
  },
  dialog: {
    name: "Dialog",
    slug: "dialog",
    category: "Overlays & Dialogs",
    description:
      "Modal dialog overlay with automatic focus trapping, scroll locking, and accessible restoration upon dismissal.",
    wcagCriteria: [
      "2.1.2 No Keyboard Trap",
      "2.4.3 Focus Order",
      "4.1.2 Name, Role, Value",
    ],
    keyboardInteractions: [
      {
        key: "Tab / Shift+Tab",
        description: "Cycles focus within dialog without escaping.",
      },
      { key: "Escape", description: "Dismisses dialog and restores focus to trigger." },
    ],
    relatedComponents: ["dropdown-menu", "command-palette"],
  },
  "dropdown-menu": {
    name: "DropdownMenu",
    slug: "dropdown-menu",
    category: "Overlays & Dialogs",
    description:
      "Action menu popover with submenu nesting, keyboard typeahead navigation, and anchor positioning.",
    wcagCriteria: ["2.1.1 Keyboard", "2.4.3 Focus Order", "4.1.2 Name, Role, Value"],
    keyboardInteractions: [
      { key: "ArrowDown / ArrowUp", description: "Traverses items in menu." },
      { key: "Enter / Space", description: "Activates menu item." },
      { key: "Escape", description: "Closes menu and restores trigger focus." },
    ],
    relatedComponents: ["combobox", "tooltip"],
  },
  tooltip: {
    name: "Tooltip",
    slug: "tooltip",
    category: "Overlays & Dialogs",
    description:
      "Non-modal informational popup triggered by hover and keyboard focus without obscuring interactive controls.",
    wcagCriteria: ["1.4.13 Content on Hover or Focus", "2.1.1 Keyboard"],
    keyboardInteractions: [
      { key: "Focus", description: "Reveals tooltip content." },
      { key: "Escape", description: "Dismisses open tooltip immediately." },
    ],
    relatedComponents: ["dropdown-menu"],
  },
  breadcrumb: {
    name: "Breadcrumb",
    slug: "breadcrumb",
    category: "Navigation",
    description:
      "Navigational trail landmark indicating current hierarchical position with aria-current='page'.",
    wcagCriteria: [
      "1.3.1 Info and Relationships",
      "2.4.4 Link Purpose",
      "2.4.8 Location",
    ],
    keyboardInteractions: [
      { key: "Tab", description: "Steps through sequential hierarchy links." },
    ],
    relatedComponents: ["pagination", "tabs"],
  },
  tabs: {
    name: "Tabs",
    slug: "tabs",
    category: "Navigation",
    description:
      "WAI-ARIA compliant tabbed interface supporting horizontal/vertical orientation and roving focus.",
    wcagCriteria: ["2.1.1 Keyboard", "2.4.3 Focus Order", "4.1.2 Name, Role, Value"],
    keyboardInteractions: [
      {
        key: "ArrowRight / ArrowLeft",
        description: "Moves focus and activates adjacent tab.",
      },
      { key: "Home / End", description: "Moves focus to first or last tab." },
    ],
    relatedComponents: ["accordion", "breadcrumb"],
  },
  "tree-view": {
    name: "TreeView",
    slug: "tree-view",
    category: "Navigation",
    description:
      "Hierarchical tree structure with expandable/collapsible nodes, arrow-key navigation, and selection management.",
    wcagCriteria: ["2.1.1 Keyboard", "4.1.2 Name, Role, Value"],
    keyboardInteractions: [
      {
        key: "ArrowDown / ArrowUp",
        description: "Moves focus between visible tree nodes.",
      },
      { key: "ArrowRight", description: "Expands closed node or steps into child." },
      { key: "ArrowLeft", description: "Collapses open node or moves to parent." },
    ],
    relatedComponents: ["accordion"],
  },
  alert: {
    name: "Alert",
    slug: "alert",
    category: "Feedback",
    description:
      "Status and feedback callout conveying contextual priority (info, success, warning, danger) with role='alert'.",
    wcagCriteria: ["4.1.3 Status Messages", "1.4.1 Use of Color"],
    keyboardInteractions: [
      { key: "Tab", description: "Focuses close button or action links within alert." },
    ],
    relatedComponents: ["toast"],
  },
  skeleton: {
    name: "Skeleton",
    slug: "skeleton",
    category: "Feedback",
    description:
      "Placeholder loading state with aria-busy announcements and reduced-motion compliant animations.",
    wcagCriteria: ["2.2.2 Pause, Stop, Hide", "2.3.3 Animation from Interactions"],
    keyboardInteractions: [],
    relatedComponents: ["alert"],
  },
  toast: {
    name: "Toast",
    slug: "toast",
    category: "Feedback",
    description:
      "Ephemeral notification toasts rendering into an accessible polite/assertive aria-live region queue.",
    wcagCriteria: ["4.1.3 Status Messages", "2.2.1 Timing Adjustable"],
    keyboardInteractions: [
      { key: "Alt+T", description: "Focuses newest toast message if configured." },
      { key: "Escape", description: "Dismisses active focused toast." },
    ],
    relatedComponents: ["alert"],
  },
  avatar: {
    name: "Avatar",
    slug: "avatar",
    category: "Data Display",
    description:
      "Visual identity representation with fallback initials, accessible alt description, and presence indicators.",
    wcagCriteria: ["1.1.1 Non-text Content", "1.4.11 Non-text Contrast"],
    keyboardInteractions: [],
    relatedComponents: ["data-table"],
  },
  "data-table": {
    name: "DataTable",
    slug: "data-table",
    category: "Data Display",
    description:
      "Accessible tabular data display featuring sortable headers, column pinning, row selection, and pagination integration.",
    wcagCriteria: [
      "1.3.1 Info and Relationships",
      "2.1.1 Keyboard",
      "4.1.2 Name, Role, Value",
    ],
    keyboardInteractions: [
      {
        key: "Arrow Keys",
        description: "Navigates between interactive cells and headers.",
      },
      { key: "Space / Enter", description: "Triggers sort on sortable column headers." },
    ],
    relatedComponents: ["pagination"],
  },
  accordion: {
    name: "Accordion",
    slug: "accordion",
    category: "Layout & Misc",
    description:
      "Vertically stacked interactive disclosures with single or multi-expand modes and keyboard control.",
    wcagCriteria: ["2.1.1 Keyboard", "4.1.2 Name, Role, Value"],
    keyboardInteractions: [
      {
        key: "Enter / Space",
        description: "Toggles open/closed state of focused accordion section.",
      },
      {
        key: "ArrowDown / ArrowUp",
        description: "Moves focus to next or previous accordion header.",
      },
    ],
    relatedComponents: ["tabs"],
  },
  carousel: {
    name: "Carousel",
    slug: "carousel",
    category: "Layout & Misc",
    description:
      "Rotational slider component with accessible slide landmarks, play/pause controls, and keyboard navigation.",
    wcagCriteria: [
      "2.1.1 Keyboard",
      "2.2.2 Pause, Stop, Hide",
      "4.1.2 Name, Role, Value",
    ],
    keyboardInteractions: [
      {
        key: "ArrowRight / ArrowLeft",
        description: "Advances to next or previous slide.",
      },
      { key: "Tab", description: "Navigates slide contents and controls." },
    ],
    relatedComponents: ["tabs"],
  },
};
