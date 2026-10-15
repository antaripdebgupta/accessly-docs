"use client";

import { ToastProvider, useToast, Button } from "@accessly-ui/react";

function ToastButtons() {
  const { push } = useToast();

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="primary"
        onClick={() =>
          push({
            title: "Success",
            description: "Your changes have been saved successfully.",
            variant: "success",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          push({
            title: "Information",
            description: "Something you should know.",
            variant: "info",
          })
        }
      >
        Info
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          push({
            title: "Warning",
            description: "Double check before continuing.",
            variant: "warning",
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="danger"
        onClick={() =>
          push({
            title: "Error",
            description: "Something went wrong.",
            variant: "danger",
          })
        }
      >
        Error
      </Button>
    </div>
  );
}

export function ToastDefaultDemo() {
  return (
    <ToastProvider placement="bottom-right">
      <ToastButtons />
    </ToastProvider>
  );
}

export const toastDefaultCode = `import { ToastProvider, useToast, Button } from "@accessly-ui/react";

function ExampleInner() {
  const { push } = useToast();

  return (
    <div className="flex gap-2">
      <Button onClick={() => push({ title: "Success", description: "Changes saved.", variant: "success" })}>
        Success
      </Button>
      <Button onClick={() => push({ title: "Info", description: "Note this.", variant: "info" })}>
        Info
      </Button>
      <Button onClick={() => push({ title: "Warning", description: "Be careful.", variant: "warning" })}>
        Warning
      </Button>
      <Button onClick={() => push({ title: "Error", description: "Failed.", variant: "danger" })}>
        Error
      </Button>
    </div>
  );
}

export default function Example() {
  return (
    <ToastProvider placement="bottom-right">
      <ExampleInner />
    </ToastProvider>
  );
}`;

function ToastPersistentButton() {
  const { push } = useToast();

  return (
    <Button
      variant="secondary"
      onClick={() =>
        push({
          title: "Persistent",
          description: "This will not close automatically.",
          variant: "info",
          duration: 0,
        })
      }
    >
      Show persistent notification
    </Button>
  );
}

export function ToastPersistentDemo() {
  return (
    <ToastProvider placement="bottom-right">
      <ToastPersistentButton />
    </ToastProvider>
  );
}

export const toastPersistentCode = `import { ToastProvider, useToast, Button } from "@accessly-ui/react";

function ExampleInner() {
  const { push } = useToast();

  return (
    <Button
      onClick={() =>
        push({
          title: "Persistent",
          description: "This will not close automatically.",
          variant: "info",
          duration: 0,
        })
      }
    >
      Show persistent notification
    </Button>
  );
}

export default function Example() {
  return (
    <ToastProvider placement="bottom-right">
      <ExampleInner />
    </ToastProvider>
  );
}`;

function ToastSingleButton({
  variant,
  title,
  description,
}: {
  variant: "success" | "info" | "warning" | "danger";
  title?: string;
  description: string;
}) {
  const { push } = useToast();
  return (
    <Button onClick={() => push({ title, description, variant })}>
      Open the notification box
    </Button>
  );
}

export function ToastSuccessDemo() {
  return (
    <ToastProvider placement="bottom-right">
      <ToastSingleButton
        variant="success"
        title="Success"
        description="Your changes were saved."
      />
    </ToastProvider>
  );
}

export const toastSuccessCode = `import { ToastProvider, useToast, Button } from "@accessly-ui/react";

function ExampleInner() {
  const { push } = useToast();
  return (
    <Button onClick={() => push({ title: "Success", description: "Your changes were saved.", variant: "success" })}>
      Open the notification box
    </Button>
  );
}

export default function Example() {
  return (
    <ToastProvider placement="bottom-right">
      <ExampleInner />
    </ToastProvider>
  );
}`;

export function ToastInfoDemo() {
  return (
    <ToastProvider placement="bottom-right">
      <ToastSingleButton
        variant="info"
        title="Informational"
        description="Something you should know."
      />
    </ToastProvider>
  );
}

export const toastInfoCode = `import { ToastProvider, useToast, Button } from "@accessly-ui/react";

function ExampleInner() {
  const { push } = useToast();
  return (
    <Button onClick={() => push({ title: "Informational", description: "Something you should know.", variant: "info" })}>
      Open the notification box
    </Button>
  );
}

export default function Example() {
  return (
    <ToastProvider placement="bottom-right">
      <ExampleInner />
    </ToastProvider>
  );
}`;

export function ToastWarningDemo() {
  return (
    <ToastProvider placement="bottom-right">
      <ToastSingleButton
        variant="warning"
        title="Warning"
        description="Double check before continuing."
      />
    </ToastProvider>
  );
}

export const toastWarningCode = `import { ToastProvider, useToast, Button } from "@accessly-ui/react";

function ExampleInner() {
  const { push } = useToast();
  return (
    <Button onClick={() => push({ title: "Warning", description: "Double check before continuing.", variant: "warning" })}>
      Open the notification box
    </Button>
  );
}

export default function Example() {
  return (
    <ToastProvider placement="bottom-right">
      <ExampleInner />
    </ToastProvider>
  );
}`;

export function ToastDangerDemo() {
  return (
    <ToastProvider placement="bottom-right">
      <ToastSingleButton
        variant="danger"
        title="Error"
        description="Something went wrong."
      />
    </ToastProvider>
  );
}

export const toastDangerCode = `import { ToastProvider, useToast, Button } from "@accessly-ui/react";

function ExampleInner() {
  const { push } = useToast();
  return (
    <Button onClick={() => push({ title: "Error", description: "Something went wrong.", variant: "danger" })}>
      Open the notification box
    </Button>
  );
}

export default function Example() {
  return (
    <ToastProvider placement="bottom-right">
      <ExampleInner />
    </ToastProvider>
  );
}`;

export function ToastLongContentDemo() {
  return (
    <ToastProvider placement="bottom-right">
      <ToastSingleButton
        variant="info"
        title="Notification Title"
        description="I will never close automatically. This is a purposely very very long description that has many many characters and words."
      />
    </ToastProvider>
  );
}

export const toastLongContentCode = `import { ToastProvider, useToast, Button } from "@accessly-ui/react";

function ExampleInner() {
  const { push } = useToast();
  return (
    <Button
      onClick={() =>
        push({
          title: "Notification Title",
          description: "I will never close automatically. This is a purposely very very long description that has many many characters and words.",
          variant: "info",
        })
      }
    >
      Open the notification box
    </Button>
  );
}

export default function Example() {
  return (
    <ToastProvider placement="bottom-right">
      <ExampleInner />
    </ToastProvider>
  );
}`;

export const toastStories = [
  { title: "Default", Demo: ToastDefaultDemo, code: toastDefaultCode },
  { title: "Persistent", Demo: ToastPersistentDemo, code: toastPersistentCode },
  { title: "Success", Demo: ToastSuccessDemo, code: toastSuccessCode },
  { title: "Info", Demo: ToastInfoDemo, code: toastInfoCode },
  { title: "Warning", Demo: ToastWarningDemo, code: toastWarningCode },
  { title: "Danger", Demo: ToastDangerDemo, code: toastDangerCode },
  { title: "Long Content", Demo: ToastLongContentDemo, code: toastLongContentCode },
];

export function ToastDemo() {
  return <ToastDefaultDemo />;
}

export const toastDemoCode = toastDefaultCode;
