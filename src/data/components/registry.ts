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
  summary?: string;
  commonIssues?: { title: string; description: string }[];
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
    summary:
      "Button is an interactive action element supporting primary, secondary, and danger variants across three sizes. Use it to trigger immediate on-page actions, form submissions, or modal dialogs. It manages keyboard activation via Space and Enter, displays loading spinners with aria-busy, and preserves accessible names without disruptive label swapping.",
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
    summary:
      "Checkbox provides a standard binary or indeterminate selection control for forms and settings. Use it when users can select one or more independent options from a list. It natively integrates with form submit lifecycles, supports tri-state selection, and exposes proper aria-checked semantics.",
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
      "Autocomplete combobox with popup listbox, live search filtering, and roving tabindex navigation.",
    summary:
      "Combobox combines a single-line text input with a floating suggestions popup listbox. Use it when users need to search, filter, and pick from a large dataset without loading all options into view. It manages roving focus, keyboard navigation with Arrow keys, and dynamic aria-expanded attributes.",
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
    summary:
      "Input provides an accessible single-line text field with built-in label pairing, helper description, and error announcements. Use it for capturing short user text, emails, passwords, or file selections. It automatically coordinates aria-describedby and aria-invalid attributes for screen readers.",
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
    category: "Navigation",
    description:
      "Accessible multi-page navigation with aria-current='page', range indicators, and screen reader announcements.",
    summary:
      "Pagination provides multi-page navigational controls with previous, next, and numbered page links. Use it to divide large tabular datasets or long lists into discrete pages. It indicates the current active page with aria-current='page' and preserves sequential tab navigation.",
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
    summary:
      "RadioGroup manages mutually exclusive single-selection from a set of related options. Use it when users must choose exactly one option from two to seven visible choices. It implements WAI-ARIA roving tabindex so Arrow keys traverse items while Tab exits the entire group.",
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
    summary:
      "Switch provides a binary toggle control representing an instant on or off state. Use it for application settings and preferences that take effect immediately without requiring form submission. It uses role='switch' with aria-checked to communicate toggled states.",
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
    summary:
      "Textarea provides a multi-line plain text editing field with optional automated height adjustment and character counting. Use it for capturing long-form text such as comments, feedback, or descriptions. It coordinates aria-describedby for helper text and live character limit tracking.",
    wcagCriteria: ["1.3.1 Info and Relationships", "3.3.2 Labels or Instructions"],
    keyboardInteractions: [{ key: "Tab", description: "Focuses textarea field." }],
    relatedComponents: ["input"],
  },
  "command-palette": {
    name: "CommandPalette",
    slug: "command-palette",
    category: "Overlays & Dialogs",
    description:
      "Global modal search and command prompt with keyword filtering, keyboard shortcuts, and live announcements.",
    summary:
      "CommandPalette provides a global modal search prompt triggered by keyboard shortcuts like ⌘K or Ctrl+K. Use it to enable rapid keyboard navigation, action triggering, and documentation search across an application. It manages modal focus trapping, list filtering, and keyboard traversal.",
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
    summary:
      "Dialog is a modal window rendered in an overlay that sits above the primary page content. Use it for critical confirmations, sub-tasks, or forms that require focused user interaction before proceeding. It automatically traps keyboard focus, locks background scrolling, and restores focus upon dismissal.",
    commonIssues: [
      {
        title: "Overlay visibility",
        description:
          "DialogOverlay requires explicit visibility management via open/onOpenChange or DialogTrigger.",
      },
    ],
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
    summary:
      "DropdownMenu displays a contextual menu of actions or selections triggered by a button. Use it to consolidate secondary actions, table row tools, or profile options into an anchor-positioned popup. It supports nested submenus, checkbox items, and Arrow-key typeahead traversal.",
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
    summary:
      "Tooltip provides a non-modal floating label that describes an interactive element upon pointer hover or keyboard focus. Use it to explain icon buttons or cryptic controls without cluttering the interface. It dismisses on Escape and never obscures interactive trigger elements.",
    commonIssues: [
      {
        title: "Disabled trigger buttons",
        description:
          "Native disabled buttons suppress pointer and keyboard events; wrap disabled controls in a focusable span with tabIndex={0} to preserve tooltip triggers.",
      },
    ],
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
    summary:
      "Breadcrumb renders a hierarchical trail of links reflecting the user's location within the site structure. Use it on nested pages to help users orient themselves and navigate up to ancestor levels. It marks the current page with aria-current='page' and supports automatic item collapsing.",
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
    summary:
      "Tabs organizes related content into multiple panels, showing one panel at a time while keeping the rest hidden. Use it to reduce page height and group alternate views of the same context. It supports horizontal and vertical layouts with automatic or manual roving arrow-key activation.",
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
    summary:
      "TreeView presents hierarchical data in an expandable and collapsible tree structure. Use it for nested file directories, category trees, or organization charts. It supports single or multi-selection, keyboard navigation with Arrow keys (expanding right, collapsing left), and roving tabindex.",
    commonIssues: [
      {
        title: "Root labeling",
        description:
          "TreeView requires an aria-label to identify the hierarchical structure.",
      },
    ],
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
    summary:
      "Alert communicates critical system status messages, notices, and errors with contextual color coding. Use it to present persistent or closable notifications within the content flow. It uses role='alert' or role='status' with appropriate live region politeness to alert screen readers.",
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
    summary:
      "Skeleton renders placeholder preview shapes that mimic the layout of content while it is loading. Use it to reduce perceived latency and prevent disruptive layout shifts during asynchronous data fetches. It includes aria-busy indicators and automatically respects prefers-reduced-motion.",
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
    summary:
      "Toast renders ephemeral feedback notifications into an accessible live-region queue. Use it to confirm the outcome of background actions like saving, deleting, or copying to clipboard. It announces updates via polite or assertive live regions and supports automatic dismissal.",
    wcagCriteria: ["4.1.3 Status Messages", "2.2.1 Timing Adjustable"],
    keyboardInteractions: [
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
    summary:
      "Avatar represents a user or organization with an image, initials fallback, or placeholder icon. Use it in navigation bars, comment threads, and user lists. It provides accessible alt descriptions, customizable status badges for online presence, and grouped avatar overlapping.",
    commonIssues: [
      {
        title: "Group labeling",
        description:
          "AvatarGroup requires an explicit aria-label (e.g. aria-label='Active collaborators') to identify the relationship to screen readers.",
      },
    ],
    wcagCriteria: ["1.1.1 Non-text Content", "1.4.11 Non-text Contrast"],
    keyboardInteractions: [],
    relatedComponents: ["data-table"],
  },
  "data-table": {
    name: "DataTable",
    slug: "data-table",
    category: "Data Display",
    description:
      "Accessible tabular data display featuring sortable headers, row selection, and pagination integration.",
    summary:
      "DataTable renders tabular data with sortable column headers, custom cell formatters, row selection, and integrated pagination. Use it for complex data exploration and structured reporting. It enforces proper semantic table markup, caption labeling, and keyboard-operable header sorting.",
    commonIssues: [
      {
        title: "Table caption",
        description:
          "DataTable requires an accessible caption (or aria-label) describing the dataset content.",
      },
    ],
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
    summary:
      "Accordion displays stacked interactive disclosure headers that expand and collapse associated content panels. Use it to organize dense FAQs, product specifications, or multi-step settings. It supports single or multi-expand modes and keyboard control with Space, Enter, and Arrow keys.",
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
    summary:
      "Carousel is a rotational slider for cycling through sequential cards, images, or testimonials. Use it when limited horizontal space must showcase multiple rich items. It provides accessible slide landmarks, play/pause controls, keyboard navigation, and respects motion preferences.",
    commonIssues: [
      {
        title: "Landmark labeling",
        description:
          "Carousel requires an aria-label on the root container so screen reader users can distinguish the rotational region.",
      },
    ],
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

export const COMPONENT_COUNT = Object.keys(componentRegistry).length;

export const groupedByCategory = Object.values(componentRegistry).reduce<
  Record<string, ComponentMeta[]>
>((acc, meta) => {
  (acc[meta.category] ??= []).push(meta);
  return acc;
}, {});
