"use client";

import { useState } from "react";
import { Button } from "@accessly-ui/react";

export function ButtonPrimaryDemo() {
  return <Button variant="primary">Save changes</Button>;
}

export const buttonPrimaryCode = `import { Button } from "@accessly-ui/react";

export default function Example() {
  return <Button variant="primary">Save changes</Button>;
}`;

export function ButtonSecondaryDemo() {
  return <Button variant="secondary">Cancel</Button>;
}

export const buttonSecondaryCode = `import { Button } from "@accessly-ui/react";

export default function Example() {
  return <Button variant="secondary">Cancel</Button>;
}`;

export function ButtonDangerDemo() {
  return <Button variant="danger">Delete account</Button>;
}

export const buttonDangerCode = `import { Button } from "@accessly-ui/react";

export default function Example() {
  return <Button variant="danger">Delete account</Button>;
}`;

export function ButtonLoadingDemo() {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      variant="primary"
      loading={loading}
      loadingText="Saving…"
      onClick={() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
      }}
    >
      {loading ? "Saving…" : "Click to save"}
    </Button>
  );
}

export const buttonLoadingCode = `import { useState } from "react";
import { Button } from "@accessly-ui/react";

export default function Example() {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      variant="primary"
      loading={loading}
      loadingText="Saving…"
      onClick={() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
      }}
    >
      {loading ? "Saving…" : "Click to save"}
    </Button>
  );
}`;

export function ButtonDisabledDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary" disabled>
        Primary Disabled
      </Button>
      <Button variant="secondary" disabled>
        Secondary Disabled
      </Button>
      <Button variant="danger" disabled>
        Danger Disabled
      </Button>
    </div>
  );
}

export const buttonDisabledCode = `import { Button } from "@accessly-ui/react";

export default function Example() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="primary" disabled>Primary Disabled</Button>
      <Button variant="secondary" disabled>Secondary Disabled</Button>
      <Button variant="danger" disabled>Danger Disabled</Button>
    </div>
  );
}`;

export const buttonStories = [
  { title: "Primary", Demo: ButtonPrimaryDemo, code: buttonPrimaryCode },
  { title: "Secondary", Demo: ButtonSecondaryDemo, code: buttonSecondaryCode },
  { title: "Danger", Demo: ButtonDangerDemo, code: buttonDangerCode },
  { title: "Loading", Demo: ButtonLoadingDemo, code: buttonLoadingCode },
  { title: "Disabled", Demo: ButtonDisabledDemo, code: buttonDisabledCode },
];

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </div>
  );
}

export const buttonDemoCode = buttonPrimaryCode;
