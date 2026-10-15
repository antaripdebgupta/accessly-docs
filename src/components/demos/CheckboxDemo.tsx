"use client";

import { useState } from "react";
import { Checkbox } from "@accessly-ui/react";

export function CheckboxDefaultDemo() {
  const [checked, setChecked] = useState<boolean | "indeterminate">(false);

  return (
    <Checkbox
      checked={checked}
      onCheckedChange={setChecked}
      label="Subscribe to newsletter"
      description="We will send you updates once a week."
    />
  );
}

export const checkboxDefaultCode = `import { useState } from "react";
import { Checkbox } from "@accessly-ui/react";

export default function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onCheckedChange={setChecked}
      label="Subscribe to newsletter"
      description="We will send you updates once a week."
    />
  );
}`;

export function CheckboxCheckedDemo() {
  const [checked, setChecked] = useState<boolean | "indeterminate">(true);

  return (
    <Checkbox
      checked={checked}
      onCheckedChange={setChecked}
      label="Accept terms and conditions"
    />
  );
}

export const checkboxCheckedCode = `import { useState } from "react";
import { Checkbox } from "@accessly-ui/react";

export default function Example() {
  const [checked, setChecked] = useState(true);

  return (
    <Checkbox
      checked={checked}
      onCheckedChange={setChecked}
      label="Accept terms and conditions"
    />
  );
}`;

export function CheckboxIndeterminateDemo() {
  return (
    <Checkbox
      defaultChecked="indeterminate"
      label="Select all features"
      description="Some sub-items are currently active."
    />
  );
}

export const checkboxIndeterminateCode = `import { Checkbox } from "@accessly-ui/react";

export default function Example() {
  return (
    <Checkbox
      defaultChecked="indeterminate"
      label="Select all features"
      description="Some sub-items are currently active."
    />
  );
}`;

export function CheckboxErrorDemo() {
  return (
    <Checkbox
      variant="error"
      label="I agree to the privacy policy"
      error="You must agree to the privacy policy to proceed."
    />
  );
}

export const checkboxErrorCode = `import { Checkbox } from "@accessly-ui/react";

export default function Example() {
  return (
    <Checkbox
      variant="error"
      label="I agree to the privacy policy"
      error="You must agree to the privacy policy to proceed."
    />
  );
}`;

export function CheckboxDisabledDemo() {
  return (
    <div className="flex flex-col gap-3">
      <Checkbox
        disabled
        label="Beta features"
        description="Currently unavailable in your region."
      />
      <Checkbox disabled defaultChecked label="Required system telemetry" />
    </div>
  );
}

export const checkboxDisabledCode = `import { Checkbox } from "@accessly-ui/react";

export default function Example() {
  return (
    <div className="flex flex-col gap-3">
      <Checkbox
        disabled
        label="Beta features"
        description="Currently unavailable in your region."
      />
      <Checkbox
        disabled
        defaultChecked
        label="Required system telemetry"
      />
    </div>
  );
}`;

export const checkboxStories = [
  { title: "Default", Demo: CheckboxDefaultDemo, code: checkboxDefaultCode },
  { title: "Checked", Demo: CheckboxCheckedDemo, code: checkboxCheckedCode },
  {
    title: "Indeterminate",
    Demo: CheckboxIndeterminateDemo,
    code: checkboxIndeterminateCode,
  },
  { title: "Error", Demo: CheckboxErrorDemo, code: checkboxErrorCode },
  { title: "Disabled", Demo: CheckboxDisabledDemo, code: checkboxDisabledCode },
];

export function CheckboxDemo() {
  return <CheckboxDefaultDemo />;
}

export const checkboxDemoCode = checkboxDefaultCode;
