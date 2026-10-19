"use client";

import { Button, Tooltip, TooltipTrigger, TooltipContent } from "@accessly-ui/react";

export function TooltipDefaultDemo() {
  return (
    <div className="flex items-center justify-center p-4">
      <Tooltip delayDuration={0}>
        <TooltipTrigger>
          <Button variant="secondary">Hover or focus me</Button>
        </TooltipTrigger>
        <TooltipContent>Saves your changes</TooltipContent>
      </Tooltip>
    </div>
  );
}

export const tooltipDefaultCode = `import { Button, Tooltip, TooltipTrigger, TooltipContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger>
        <Button variant="secondary">Hover or focus me</Button>
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
            <Button variant="secondary">
              {placement.charAt(0).toUpperCase() + placement.slice(1)}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{placement} tooltip</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}

export const tooltipPlacementsCode = `import { Button, Tooltip, TooltipTrigger, TooltipContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <div className="flex gap-8 p-16">
      {(["left", "top", "bottom", "right"] as const).map((placement) => (
        <Tooltip key={placement} delayDuration={0} placement={placement}>
          <TooltipTrigger>
            <Button variant="secondary">
              {placement.charAt(0).toUpperCase() + placement.slice(1)}
            </Button>
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
          <Button variant="secondary">Hover and wait 600ms</Button>
        </TooltipTrigger>
        <TooltipContent>Appeared after a delay</TooltipContent>
      </Tooltip>
    </div>
  );
}

export const tooltipHoverDelayCode = `import { Button, Tooltip, TooltipTrigger, TooltipContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <Tooltip delayDuration={600}>
      <TooltipTrigger>
        <Button variant="secondary">Hover and wait 600ms</Button>
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
          <Button variant="secondary">Tooltip disabled</Button>
        </TooltipTrigger>
        <TooltipContent>You should never see this</TooltipContent>
      </Tooltip>
    </div>
  );
}

export const tooltipDisabledCode = `import { Button, Tooltip, TooltipTrigger, TooltipContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <Tooltip delayDuration={0} disabled>
      <TooltipTrigger>
        <Button variant="secondary">Tooltip disabled</Button>
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
            <Button variant="secondary" disabled>
              Disabled
            </Button>
          </span>
        </TooltipTrigger>
        <TooltipContent>This feature is currently unavailable</TooltipContent>
      </Tooltip>
    </div>
  );
}

export const tooltipDisabledButtonCode = `import { Button, Tooltip, TooltipTrigger, TooltipContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger>
        <span tabIndex={0} className="inline-block cursor-not-allowed">
          <Button variant="secondary" disabled>
            Disabled
          </Button>
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
          {/* eslint-disable jsx-a11y/no-noninteractive-tabindex */}
          <span
            tabIndex={0}
            className="cursor-help text-[var(--text)] underline decoration-dotted underline-offset-4"
          >
            WAI-ARIA APG
          </span>
          {/* eslint-enable jsx-a11y/no-noninteractive-tabindex */}
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
          <Button variant="secondary">No arrow</Button>
        </TooltipTrigger>
        <TooltipContent>Plain tooltip, no pointer</TooltipContent>
      </Tooltip>
    </div>
  );
}

export const tooltipNoArrowCode = `import { Button, Tooltip, TooltipTrigger, TooltipContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <Tooltip delayDuration={0} showArrow={false}>
      <TooltipTrigger>
        <Button variant="secondary">No arrow</Button>
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
            <Button variant="secondary">{label}</Button>
          </TooltipTrigger>
          <TooltipContent>إضافة إلى المكتبة</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}

export const tooltipRTLCode = `import { Button, Tooltip, TooltipTrigger, TooltipContent } from "@accessly-ui/react";

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
            <Button variant="secondary">{label}</Button>
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
