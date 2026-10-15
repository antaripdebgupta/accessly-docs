"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@accessly-ui/react";

function AccordionItems() {
  return (
    <>
      <AccordionItem value="item-1">
        <AccordionTrigger>What makes Accessly UI accessible?</AccordionTrigger>
        <AccordionContent>
          Accessly UI components follow WAI-ARIA Authoring Practices Guide (APG) patterns,
          providing built-in keyboard navigation, roving tabindex, focus management, and
          ARIA attributes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Does it support server components?</AccordionTrigger>
        <AccordionContent>
          Yes. Layouts, wrappers, and theme bootstrap scripts run entirely on the server.
          Interactive primitives utilize client boundaries where browser events and state
          hooks are required.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I customize Tailwind styles?</AccordionTrigger>
        <AccordionContent>
          Every component accepts className overrides and inherits theme variables
          configured via the @accessly-ui/tailwind-preset package.
        </AccordionContent>
      </AccordionItem>
    </>
  );
}

export function AccordionDefaultDemo() {
  return (
    <div className="w-full max-w-md">
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItems />
      </Accordion>
    </div>
  );
}

export const accordionDefaultCode = `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Accessly UI?</AccordionTrigger>
        <AccordionContent>An accessible React component library.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it customizable?</AccordionTrigger>
        <AccordionContent>Yes, via Tailwind CSS and design tokens.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`;

export function AccordionMultipleDemo() {
  return (
    <div className="w-full max-w-md">
      <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
        <AccordionItems />
      </Accordion>
    </div>
  );
}

export const accordionMultipleCode = `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Accessly UI?</AccordionTrigger>
        <AccordionContent>An accessible React component library.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it customizable?</AccordionTrigger>
        <AccordionContent>Yes, via Tailwind CSS.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`;

export function AccordionDisabledDemo() {
  return (
    <div className="w-full max-w-md">
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Accessly UI?</AccordionTrigger>
          <AccordionContent>An accessible component library.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" disabled>
          <AccordionTrigger>Coming soon (Disabled)</AccordionTrigger>
          <AccordionContent>This section is currently disabled.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it WCAG 2.2 AA compliant?</AccordionTrigger>
          <AccordionContent>Yes, verified with axe-core audits.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export const accordionDisabledCode = `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Active Section</AccordionTrigger>
        <AccordionContent>Active content...</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Disabled Section</AccordionTrigger>
        <AccordionContent>Disabled content...</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`;

export function AccordionBorderDemo() {
  return (
    <div className="w-full max-w-md">
      <Accordion type="single" variant="border" defaultValue="item-1">
        <AccordionItems />
      </Accordion>
    </div>
  );
}

export const accordionBorderCode = `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <Accordion type="single" variant="border" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>What makes Accessly UI accessible?</AccordionTrigger>
        <AccordionContent>Accessly UI components follow WAI-ARIA APG patterns.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Does it support server components?</AccordionTrigger>
        <AccordionContent>Yes, layout and bootstrap run on server.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`;

export function AccordionCardDemo() {
  return (
    <div className="w-full max-w-md">
      <Accordion type="single" variant="card" defaultValue="item-1">
        <AccordionItems />
      </Accordion>
    </div>
  );
}

export const accordionCardCode = `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <Accordion type="single" variant="card" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is this library?</AccordionTrigger>
        <AccordionContent>
          An accessible, production-grade component library built on ARIA APG patterns.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it WCAG 2.2 AA compliant?</AccordionTrigger>
        <AccordionContent>
          Yes — verified with axe-core, Playwright, and manual screen reader testing.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`;

export function AccordionRTLDemo() {
  return (
    <div className="w-full max-w-md" dir="rtl">
      <Accordion type="single" defaultValue="a" dir="rtl">
        <AccordionItem value="a">
          <AccordionTrigger>ما هذه المكتبة؟</AccordionTrigger>
          <AccordionContent>مكتبة مكونات يمكن الوصول إليها.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="b">
          <AccordionTrigger>هل تتوافق مع WCAG؟</AccordionTrigger>
          <AccordionContent>نعم، تم التحقق باستخدام axe-core.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export const accordionRTLCode = `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <div dir="rtl">
      <Accordion type="single" defaultValue="a" dir="rtl">
        <AccordionItem value="a">
          <AccordionTrigger>ما هذه المكتبة؟</AccordionTrigger>
          <AccordionContent>مكتبة مكونات يمكن الوصول إليها.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="b">
          <AccordionTrigger>هل تتوافق مع WCAG؟</AccordionTrigger>
          <AccordionContent>نعم، تم التحقق باستخدام axe-core.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}`;

export const accordionStories = [
  { title: "Default", Demo: AccordionDefaultDemo, code: accordionDefaultCode },
  { title: "Multiple", Demo: AccordionMultipleDemo, code: accordionMultipleCode },
  { title: "Disabled", Demo: AccordionDisabledDemo, code: accordionDisabledCode },
  { title: "Border", Demo: AccordionBorderDemo, code: accordionBorderCode },
  { title: "Card", Demo: AccordionCardDemo, code: accordionCardCode },
  { title: "RTL", Demo: AccordionRTLDemo, code: accordionRTLCode },
];

export function AccordionDemo() {
  return <AccordionDefaultDemo />;
}

export const accordionDemoCode = accordionDefaultCode;
