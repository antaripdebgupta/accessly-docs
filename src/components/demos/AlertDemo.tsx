"use client";

import { Alert } from "@accessly-ui/react";

export function AlertSuccessDemo() {
  return (
    <div className="w-full max-w-md">
      <Alert variant="success" title="Success Tips">
        Detailed description and advice about your submission.
      </Alert>
    </div>
  );
}

export const alertSuccessCode = `import { Alert } from "@accessly-ui/react";

export default function Example() {
  return (
    <Alert variant="success" title="Success Tips">
      Detailed description and advice about your submission.
    </Alert>
  );
}`;

export function AlertInfoDemo() {
  return (
    <div className="w-full max-w-md">
      <Alert variant="info" title="Informational Notes">
        Additional description and information.
      </Alert>
    </div>
  );
}

export const alertInfoCode = `import { Alert } from "@accessly-ui/react";

export default function Example() {
  return (
    <Alert variant="info" title="Informational Notes">
      Additional description and information.
    </Alert>
  );
}`;

export function AlertWarningDemo() {
  return (
    <div className="w-full max-w-md">
      <Alert variant="warning" title="Warning" closable>
        This is a warning notice that can be dismissed.
      </Alert>
    </div>
  );
}

export const alertWarningCode = `import { Alert } from "@accessly-ui/react";

export default function Example() {
  return (
    <Alert variant="warning" title="Warning" closable>
      This is a warning notice that can be dismissed.
    </Alert>
  );
}`;

export function AlertDangerDemo() {
  return (
    <div className="w-full max-w-md">
      <Alert variant="danger" title="Error">
        This is an error message indicating an operation failure.
      </Alert>
    </div>
  );
}

export const alertDangerCode = `import { Alert } from "@accessly-ui/react";

export default function Example() {
  return (
    <Alert variant="danger" title="Error">
      This is an error message indicating an operation failure.
    </Alert>
  );
}`;

export function AlertBannerDemo() {
  return (
    <div className="w-full max-w-md">
      <Alert variant="warning" banner closable>
        Display alert as a full-width banner notice.
      </Alert>
    </div>
  );
}

export const alertBannerCode = `import { Alert } from "@accessly-ui/react";

export default function Example() {
  return (
    <Alert variant="warning" banner closable>
      Display alert as a full-width banner notice.
    </Alert>
  );
}`;

export function AlertNoDescriptionDemo() {
  return (
    <div className="w-full max-w-md">
      <Alert variant="warning" title="Warning text without description" />
    </div>
  );
}

export const alertNoDescriptionCode = `import { Alert } from "@accessly-ui/react";

export default function Example() {
  return (
    <Alert variant="warning" title="Warning text without description" />
  );
}`;

export function AlertClosableDismissesDemo() {
  return (
    <div className="w-full max-w-md">
      <Alert variant="warning" title="Warning" closable>
        Click close to dismiss.
      </Alert>
    </div>
  );
}

export const alertClosableDismissesCode = `import { Alert } from "@accessly-ui/react";

export default function Example() {
  return (
    <Alert variant="warning" title="Warning" closable>
      Click close to dismiss.
    </Alert>
  );
}`;

export const alertStories = [
  { title: "Success", Demo: AlertSuccessDemo, code: alertSuccessCode },
  { title: "Info", Demo: AlertInfoDemo, code: alertInfoCode },
  { title: "Warning", Demo: AlertWarningDemo, code: alertWarningCode },
  { title: "Danger", Demo: AlertDangerDemo, code: alertDangerCode },
  { title: "Banner", Demo: AlertBannerDemo, code: alertBannerCode },
  { title: "No Description", Demo: AlertNoDescriptionDemo, code: alertNoDescriptionCode },
  {
    title: "Closable / Dismisses",
    Demo: AlertClosableDismissesDemo,
    code: alertClosableDismissesCode,
  },
];

export function AlertDemo() {
  return <AlertInfoDemo />;
}

export const alertDemoCode = alertInfoCode;
