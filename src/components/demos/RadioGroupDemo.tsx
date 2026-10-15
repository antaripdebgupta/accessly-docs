"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@accessly-ui/react";

export function RadioGroupDefaultDemo() {
  const [val, setVal] = useState("standard");

  return (
    <div className="w-full max-w-sm">
      <RadioGroup value={val} onValueChange={setVal} label="Select a shipping method">
        <RadioGroupItem
          value="standard"
          label="Standard Shipping"
          description="Delivery in 5-7 business days."
        />
        <RadioGroupItem
          value="express"
          label="Express Shipping"
          description="Delivery in 2-3 business days."
        />
        <RadioGroupItem
          value="overnight"
          label="Overnight Shipping"
          description="Delivery next business day."
        />
      </RadioGroup>
    </div>
  );
}

export const radioGroupDefaultCode = `import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@accessly-ui/react";

export default function Example() {
  const [shipping, setShipping] = useState("standard");

  return (
    <RadioGroup value={shipping} onValueChange={setShipping} label="Select a shipping method">
      <RadioGroupItem
        value="standard"
        label="Standard Shipping"
        description="Delivery in 5-7 business days."
      />
      <RadioGroupItem
        value="express"
        label="Express Shipping"
        description="Delivery in 2-3 business days."
      />
      <RadioGroupItem
        value="overnight"
        label="Overnight Shipping"
        description="Delivery next business day."
      />
    </RadioGroup>
  );
}`;

export function RadioGroupHorizontalDemo() {
  const [layout, setLayout] = useState("grid");

  return (
    <RadioGroup
      orientation="horizontal"
      value={layout}
      onValueChange={setLayout}
      label="Choose a layout"
    >
      <RadioGroupItem value="grid" label="Grid View" />
      <RadioGroupItem value="list" label="List View" />
      <RadioGroupItem value="compact" label="Compact View" />
    </RadioGroup>
  );
}

export const radioGroupHorizontalCode = `import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@accessly-ui/react";

export default function Example() {
  const [layout, setLayout] = useState("grid");

  return (
    <RadioGroup
      orientation="horizontal"
      value={layout}
      onValueChange={setLayout}
      label="Choose a layout"
    >
      <RadioGroupItem value="grid" label="Grid View" />
      <RadioGroupItem value="list" label="List View" />
      <RadioGroupItem value="compact" label="Compact View" />
    </RadioGroup>
  );
}`;

export function RadioGroupResponsiveDemo() {
  const [choice, setChoice] = useState("yes");

  return (
    <RadioGroup
      orientation="horizontal"
      responsive
      value={choice}
      onValueChange={setChoice}
      label="Responsive Layout (stacks on mobile)"
    >
      <RadioGroupItem value="yes" label="Yes, enable responsive styling" />
      <RadioGroupItem value="no" label="No, keep horizontal always" />
    </RadioGroup>
  );
}

export const radioGroupResponsiveCode = `import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@accessly-ui/react";

export default function Example() {
  const [choice, setChoice] = useState("yes");

  return (
    <RadioGroup
      orientation="horizontal"
      responsive
      value={choice}
      onValueChange={setChoice}
      label="Responsive Layout (stacks on mobile)"
    >
      <RadioGroupItem value="yes" label="Yes, enable responsive styling" />
      <RadioGroupItem value="no" label="No, keep horizontal always" />
    </RadioGroup>
  );
}`;

export function RadioGroupDisabledDemo() {
  return (
    <div className="w-full max-w-sm">
      <RadioGroup defaultValue="credit-card" label="Select a payment method">
        <RadioGroupItem value="credit-card" label="Credit Card" />
        <RadioGroupItem
          value="paypal"
          label="PayPal"
          disabled
          description="Currently undergoing maintenance."
        />
        <RadioGroupItem value="apple-pay" label="Apple Pay" />
      </RadioGroup>
    </div>
  );
}

export const radioGroupDisabledCode = `import { RadioGroup, RadioGroupItem } from "@accessly-ui/react";

export default function Example() {
  return (
    <RadioGroup defaultValue="credit-card" label="Select a payment method">
      <RadioGroupItem value="credit-card" label="Credit Card" />
      <RadioGroupItem
        value="paypal"
        label="PayPal"
        disabled
        description="Currently undergoing maintenance."
      />
      <RadioGroupItem value="apple-pay" label="Apple Pay" />
    </RadioGroup>
  );
}`;

export const radioGroupStories = [
  { title: "Default", Demo: RadioGroupDefaultDemo, code: radioGroupDefaultCode },
  { title: "Horizontal", Demo: RadioGroupHorizontalDemo, code: radioGroupHorizontalCode },
  { title: "Responsive", Demo: RadioGroupResponsiveDemo, code: radioGroupResponsiveCode },
  { title: "Disabled Items", Demo: RadioGroupDisabledDemo, code: radioGroupDisabledCode },
];

export function RadioGroupDemo() {
  return <RadioGroupDefaultDemo />;
}

export const radioGroupDemoCode = radioGroupDefaultCode;
