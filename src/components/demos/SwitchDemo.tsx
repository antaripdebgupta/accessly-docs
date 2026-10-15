"use client";

import { useState } from "react";
import { Switch } from "@accessly-ui/react";

export function SwitchDefaultDemo() {
  const [checked, setChecked] = useState(false);

  return <Switch checked={checked} onCheckedChange={setChecked} label="Dark Mode" />;
}

export const switchDefaultCode = `import { useState } from "react";
import { Switch } from "@accessly-ui/react";

export default function Example() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onCheckedChange={setEnabled}
      label="Dark Mode"
    />
  );
}`;

export function SwitchCheckedDemo() {
  const [checked, setChecked] = useState(true);

  return (
    <Switch
      checked={checked}
      onCheckedChange={setChecked}
      label="Notifications Enabled"
    />
  );
}

export const switchCheckedCode = `import { useState } from "react";
import { Switch } from "@accessly-ui/react";

export default function Example() {
  const [checked, setChecked] = useState(true);

  return (
    <Switch
      checked={checked}
      onCheckedChange={setChecked}
      label="Notifications Enabled"
    />
  );
}`;

export function SwitchSizesDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Switch size="sm" label="Small Switch" />
      <Switch size="md" label="Medium Switch" defaultChecked />
      <Switch size="lg" label="Large Switch" />
    </div>
  );
}

export const switchSizesCode = `import { Switch } from "@accessly-ui/react";

export default function Example() {
  return (
    <div className="flex flex-col gap-4">
      <Switch size="sm" label="Small Switch" />
      <Switch size="md" label="Medium Switch" defaultChecked />
      <Switch size="lg" label="Large Switch" />
    </div>
  );
}`;

export function SwitchPendingDemo() {
  return <Switch label="Saving settings..." pending />;
}

export const switchPendingCode = `import { Switch } from "@accessly-ui/react";

export default function Example() {
  return <Switch label="Saving settings..." pending />;
}`;

export function SwitchDisabledDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Switch label="Disabled unchecked" disabled />
      <Switch label="Disabled checked" disabled defaultChecked />
    </div>
  );
}

export const switchDisabledCode = `import { Switch } from "@accessly-ui/react";

export default function Example() {
  return (
    <div className="flex flex-col gap-4">
      <Switch label="Disabled unchecked" disabled />
      <Switch label="Disabled checked" disabled defaultChecked />
    </div>
  );
}`;

export const switchStories = [
  { title: "Default", Demo: SwitchDefaultDemo, code: switchDefaultCode },
  { title: "Checked", Demo: SwitchCheckedDemo, code: switchCheckedCode },
  { title: "Sizes", Demo: SwitchSizesDemo, code: switchSizesCode },
  { title: "Pending", Demo: SwitchPendingDemo, code: switchPendingCode },
  { title: "Disabled", Demo: SwitchDisabledDemo, code: switchDisabledCode },
];

export function SwitchDemo() {
  return <SwitchDefaultDemo />;
}

export const switchDemoCode = switchDefaultCode;
