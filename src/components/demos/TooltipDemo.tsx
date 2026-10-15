"use client";

import { Tooltip, TooltipTrigger, TooltipContent } from "@accessly-ui/react";

export function TooltipDefaultDemo() {
  return (
    <div className="flex items-center justify-center p-4">
      <Tooltip delayDuration={0}>
        <TooltipTrigger>
          <button
            type="button"
            className="rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] px-4 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)]"
          >
            Hover or focus me
          </button>
        </TooltipTrigger>
        <TooltipContent>Saves your changes</TooltipContent>
      </Tooltip>
    </div>
  );
}

export const tooltipDefaultCode = `import { Tooltip, TooltipTrigger, TooltipContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger>
        <button type="button" className="rounded-lg border border-border px-4 py-2 text-sm">
          Hover or focus me
        </button>
      </TooltipTrigger>
      <TooltipContent>Saves your changes</TooltipContent>
    </Tooltip>
  );
}`;

export function TooltipPlacementsDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 p-16">
      {(["left", "top", "bottom", "right"] as const).map((placement) => (
        <Tooltip key={placement} delayDuration={0} placement={placement}>
          <TooltipTrigger>
            <button
              type="button"
              className="rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] px-4 py-2 text-sm font-medium text-[var(--text)] capitalize"
            >
              {placement}
            </button>
          </TooltipTrigger>
          <TooltipContent>{placement} tooltip</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}

export const tooltipPlacementsCode = `import { Tooltip, TooltipTrigger, TooltipContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <div className="flex gap-8 p-16">
      {(["left", "top", "bottom", "right"] as const).map((placement) => (
        <Tooltip key={placement} delayDuration={0} placement={placement}>
          <TooltipTrigger>
            <button type="button" className="rounded-lg border border-border px-4 py-2 text-sm capitalize">
              {placement}
            </button>
          </TooltipTrigger>
          <TooltipContent>{placement} tooltip</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}`;

export function TooltipHoverDelayDemo() {
  return (
    <div className="flex items-center justify-center p-4">
      <Tooltip delayDuration={600}>
        <TooltipTrigger>
          <button
            type="button"
            className="rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] px-4 py-2 text-sm font-medium text-[var(--text)]"
          >
            Hover and wait 600ms
          </button>
        </TooltipTrigger>
        <TooltipContent>Appeared after a delay</TooltipContent>
      </Tooltip>
    </div>
  );
}

export const tooltipHoverDelayCode = `import { Tooltip, TooltipTrigger, TooltipContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <Tooltip delayDuration={600}>
      <TooltipTrigger>
        <button type="button" className="rounded-lg border border-border px-4 py-2 text-sm">
          Hover and wait 600ms
        </button>
      </TooltipTrigger>
      <TooltipContent>Appeared after a delay</TooltipContent>
    </Tooltip>
  );
}`;

export function TooltipDisabledDemo() {
  return (
    <div className="flex items-center justify-center p-4">
      <Tooltip delayDuration={0} disabled>
        <TooltipTrigger>
          <button
            type="button"
            className="rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] px-4 py-2 text-sm font-medium text-[var(--text)]"
          >
            Tooltip disabled
          </button>
        </TooltipTrigger>
        <TooltipContent>You should never see this</TooltipContent>
      </Tooltip>
    </div>
  );
}

export const tooltipDisabledCode = `import { Tooltip, TooltipTrigger, TooltipContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <Tooltip delayDuration={0} disabled>
      <TooltipTrigger>
        <button type="button" className="rounded-lg border border-border px-4 py-2 text-sm">
          Tooltip disabled
        </button>
      </TooltipTrigger>
      <TooltipContent>You should never see this</TooltipContent>
    </Tooltip>
  );
}`;

export function TooltipDisabledButtonDemo() {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-semibold text-[var(--text)]">Disabled Button</h4>
      <p className="text-sm text-[var(--text-muted)]">
        Show a tooltip on a disabled button by wrapping it with a span.
      </p>
      <Tooltip delayDuration={0}>
        <TooltipTrigger>
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
          <span tabIndex={0} className="inline-block cursor-not-allowed">
            <button
              type="button"
              disabled
              className="pointer-events-none rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] px-4 py-2 text-sm opacity-50"
            >
              Disabled
            </button>
          </span>
        </TooltipTrigger>
        <TooltipContent>This feature is currently unavailable</TooltipContent>
      </Tooltip>
    </div>
  );
}

export const tooltipDisabledButtonCode = `import { Tooltip, TooltipTrigger, TooltipContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger>
        <span tabIndex={0} className="inline-block cursor-not-allowed">
          <button type="button" disabled className="pointer-events-none rounded-lg border border-border px-4 py-2 text-sm opacity-50">
            Disabled
          </button>
        </span>
      </TooltipTrigger>
      <TooltipContent>This feature is currently unavailable</TooltipContent>
    </Tooltip>
  );
}`;

export function TooltipTextTriggerDemo() {
  return (
    <p className="max-w-sm text-sm text-[var(--text-muted)]">
      This component follows the{" "}
      <Tooltip delayDuration={0}>
        <TooltipTrigger>
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
          <span
            tabIndex={0}
            className="cursor-help text-[var(--text)] underline decoration-dotted underline-offset-4"
          >
            WAI-ARIA APG
          </span>
        </TooltipTrigger>
        <TooltipContent>
          Web Accessibility Initiative — Authoring Practices Guide
        </TooltipContent>
      </Tooltip>{" "}
      pattern for tabs, accordions, and tooltips alike.
    </p>
  );
}

export const tooltipTextTriggerCode = `import { Tooltip, TooltipTrigger, TooltipContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <p className="text-sm text-secondary">
      This component follows the{" "}
      <Tooltip delayDuration={0}>
        <TooltipTrigger>
          <span tabIndex={0} className="cursor-help underline decoration-dotted underline-offset-4">
            WAI-ARIA APG
          </span>
        </TooltipTrigger>
        <TooltipContent>Web Accessibility Initiative — Authoring Practices Guide</TooltipContent>
      </Tooltip>{" "}
      pattern for tabs, accordions, and tooltips alike.
    </p>
  );
}`;

export function TooltipNoArrowDemo() {
  return (
    <div className="flex items-center justify-center p-4">
      <Tooltip delayDuration={0} showArrow={false}>
        <TooltipTrigger>
          <button
            type="button"
            className="rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] px-4 py-2 text-sm font-medium text-[var(--text)]"
          >
            No arrow
          </button>
        </TooltipTrigger>
        <TooltipContent>Plain tooltip, no pointer</TooltipContent>
      </Tooltip>
    </div>
  );
}

export const tooltipNoArrowCode = `import { Tooltip, TooltipTrigger, TooltipContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <Tooltip delayDuration={0} showArrow={false}>
      <TooltipTrigger>
        <button type="button" className="rounded-lg border border-border px-4 py-2 text-sm">
          No arrow
        </button>
      </TooltipTrigger>
      <TooltipContent>Plain tooltip, no pointer</TooltipContent>
    </Tooltip>
  );
}`;

export function TooltipRTLDemo() {
  return (
    <div dir="rtl" className="flex flex-wrap gap-3 p-16">
      {[
        { placement: "right" as const, label: "يمين" },
        { placement: "top" as const, label: "أعلى" },
        { placement: "bottom" as const, label: "أسفل" },
        { placement: "left" as const, label: "يسار" },
      ].map(({ placement, label }) => (
        <Tooltip key={placement} delayDuration={0} placement={placement}>
          <TooltipTrigger>
            <button
              type="button"
              className="rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] px-4 py-2 text-sm font-medium text-[var(--text)]"
            >
              {label}
            </button>
          </TooltipTrigger>
          <TooltipContent>إضافة إلى المكتبة</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}

export const tooltipRTLCode = `import { Tooltip, TooltipTrigger, TooltipContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <div dir="rtl" className="flex gap-3 p-16">
      {[
        { placement: "right" as const, label: "يمين" },
        { placement: "top" as const, label: "أعلى" },
        { placement: "bottom" as const, label: "أسفل" },
        { placement: "left" as const, label: "يسار" },
      ].map(({ placement, label }) => (
        <Tooltip key={placement} delayDuration={0} placement={placement}>
          <TooltipTrigger>
            <button type="button" className="rounded-lg border border-border px-4 py-2 text-sm">
              {label}
            </button>
          </TooltipTrigger>
          <TooltipContent>إضافة إلى المكتبة</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}`;

export const tooltipStories = [
  { title: "Default", Demo: TooltipDefaultDemo, code: tooltipDefaultCode },
  { title: "Placements", Demo: TooltipPlacementsDemo, code: tooltipPlacementsCode },
  { title: "Hover Delay", Demo: TooltipHoverDelayDemo, code: tooltipHoverDelayCode },
  { title: "Disabled", Demo: TooltipDisabledDemo, code: tooltipDisabledCode },
  {
    title: "Disabled Button",
    Demo: TooltipDisabledButtonDemo,
    code: tooltipDisabledButtonCode,
  },
  { title: "Text Trigger", Demo: TooltipTextTriggerDemo, code: tooltipTextTriggerCode },
  { title: "No Arrow", Demo: TooltipNoArrowDemo, code: tooltipNoArrowCode },
  { title: "RTL", Demo: TooltipRTLDemo, code: tooltipRTLCode },
];

export function TooltipDemo() {
  return <TooltipDefaultDemo />;
}

export const tooltipDemoCode = tooltipDefaultCode;
