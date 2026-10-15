"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
} from "@accessly-ui/react";

function TriggerButton({ children = "Open dialog" }: { children?: React.ReactNode }) {
  return (
    <button
      type="button"
      className="rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] px-4 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)]"
    >
      {children}
    </button>
  );
}

export function DialogDefaultDemo() {
  return (
    <Dialog>
      <DialogTrigger>
        <TriggerButton />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <div className="space-y-4">
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-[var(--text)]">Name</span>
              <input
                type="text"
                defaultValue="Jane Doe"
                className="w-full rounded-md border border-[var(--border)] bg-[var(--canvas)] px-3 py-2 text-sm outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-[var(--text)]">Email</span>
              <input
                type="email"
                defaultValue="jane@example.com"
                className="w-full rounded-md border border-[var(--border)] bg-[var(--canvas)] px-3 py-2 text-sm outline-none"
              />
            </label>
          </div>
        </DialogBody>
        <DialogFooter>
          <DialogClose className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm">
            Cancel
          </DialogClose>
          <button
            type="button"
            className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm text-white"
          >
            Save changes
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export const dialogDefaultCode = `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <Dialog>
      <DialogTrigger>
        <button type="button" className="rounded-lg border border-border bg-surface-raised px-4 py-2 text-sm">
          Open dialog
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <div className="space-y-4">
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Name</span>
              <input defaultValue="Jane Doe" className="w-full rounded-md border border-border px-3 py-2 text-sm" />
            </label>
          </div>
        </DialogBody>
        <DialogFooter>
          <DialogClose className="rounded-lg border border-border px-4 py-2 text-sm">Cancel</DialogClose>
          <button type="button" className="rounded-lg bg-accent px-4 py-2 text-sm text-white">Save changes</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`;

export function DialogCloseButtonDemo() {
  return (
    <Dialog>
      <DialogTrigger>
        <TriggerButton>Feedback</TriggerButton>
      </DialogTrigger>
      <DialogContent showCloseButton={true} size="sm">
        <DialogHeader>
          <DialogTitle>Send feedback</DialogTitle>
          <DialogDescription>
            Help us improve our products by sharing your feedback.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <input
            type="text"
            readOnly
            defaultValue="This is a read-only input field. You can select the text but not edit it."
            className="w-full rounded-md border border-[var(--border)] bg-[var(--canvas)] px-3 py-2 text-sm outline-none"
            onFocus={(e) => e.target.select()}
          />
        </DialogBody>
        <DialogFooter>
          <DialogClose className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm text-white">
            Close
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export const dialogCloseButtonCode = `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <Dialog>
      <DialogTrigger>
        <button type="button" className="rounded-lg border border-border bg-surface-raised px-4 py-2 text-sm">
          Feedback
        </button>
      </DialogTrigger>
      <DialogContent showCloseButton={true} size="sm">
        <DialogHeader>
          <DialogTitle>Send feedback</DialogTitle>
          <DialogDescription>
            Help us improve our products by sharing your feedback.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <input
            type="text"
            readOnly
            defaultValue="This is a read-only input field."
            className="w-full rounded-md border border-border px-3 py-2 text-sm"
          />
        </DialogBody>
        <DialogFooter>
          <DialogClose className="rounded-lg bg-accent px-4 py-2 text-sm text-white">
            Close
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`;

export function DialogNoCloseButtonDemo() {
  return (
    <Dialog>
      <DialogTrigger>
        <TriggerButton>Open without close button</TriggerButton>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Confirm action</DialogTitle>
          <DialogDescription>
            This dialog has no &quot;X&quot; — use the buttons below, click the overlay,
            or press Escape.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm">
            Cancel
          </DialogClose>
          <DialogClose className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm text-white">
            Confirm
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export const dialogNoCloseButtonCode = `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <Dialog>
      <DialogTrigger>
        <button type="button" className="rounded-lg border border-border bg-surface-raised px-4 py-2 text-sm">
          Open without close button
        </button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Confirm action</DialogTitle>
          <DialogDescription>
            This dialog has no "X" — use the buttons below, click the overlay, or press Escape.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose className="rounded-lg border border-border px-4 py-2 text-sm">Cancel</DialogClose>
          <DialogClose className="rounded-lg bg-accent px-4 py-2 text-sm text-white">Confirm</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`;

export function DialogStickyFooterDemo() {
  return (
    <Dialog>
      <DialogTrigger>
        <TriggerButton>Open sticky-footer dialog</TriggerButton>
      </DialogTrigger>
      <DialogContent size="lg">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Scroll to read the full terms before accepting.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          {Array.from({ length: 12 }, (_, i) => (
            <p key={i} className="mb-3 text-sm text-[var(--text-muted)]">
              Section {i + 1}: This is placeholder legal text demonstrating that the
              footer below stays pinned to the bottom of the dialog while this body
              content scrolls independently.
            </p>
          ))}
        </DialogBody>
        <DialogFooter>
          <DialogClose className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm">
            Decline
          </DialogClose>
          <DialogClose className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm text-white">
            Accept
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export const dialogStickyFooterCode = `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <Dialog>
      <DialogTrigger>
        <button type="button" className="rounded-lg border border-border bg-surface-raised px-4 py-2 text-sm">
          Open sticky-footer dialog
        </button>
      </DialogTrigger>
      <DialogContent size="lg">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>Scroll to read the full terms before accepting.</DialogDescription>
        </DialogHeader>
        <DialogBody>
          {Array.from({ length: 12 }, (_, i) => (
            <p key={i} className="mb-3 text-sm text-secondary">
              Section {i + 1}: Placeholder legal text demonstrating that the footer below stays pinned to the bottom.
            </p>
          ))}
        </DialogBody>
        <DialogFooter>
          <DialogClose className="rounded-lg border border-border px-4 py-2 text-sm">Decline</DialogClose>
          <DialogClose className="rounded-lg bg-accent px-4 py-2 text-sm text-white">Accept</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`;

export function DialogScrollableContentDemo() {
  return (
    <Dialog>
      <DialogTrigger>
        <TriggerButton>Open scrollable dialog</TriggerButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Changelog</DialogTitle>
        </DialogHeader>
        <DialogBody>
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="mb-4">
              <h3 className="mb-1 text-sm font-semibold text-[var(--text)]">
                v1.{20 - i}.0
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Various fixes and improvements in this release.
              </p>
            </div>
          ))}
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}

export const dialogScrollableContentCode = `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <Dialog>
      <DialogTrigger>
        <button type="button" className="rounded-lg border border-border bg-surface-raised px-4 py-2 text-sm">
          Open scrollable dialog
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Changelog</DialogTitle>
        </DialogHeader>
        <DialogBody>
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="mb-4">
              <h3 className="mb-1 text-sm font-semibold">v1.{20 - i}.0</h3>
              <p className="text-sm text-secondary">Various fixes and improvements in this release.</p>
            </div>
          ))}
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}`;

export function DialogControlledDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2">
      <p className="text-sm text-[var(--text-muted)]">
        Externally controlled — open: {String(open)}
      </p>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] px-4 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)]"
      >
        Open programmatically
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Controlled dialog</DialogTitle>
            <DialogDescription>
              Opened without a DialogTrigger — focus still restores correctly to the
              button above on close.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm text-white">
              Close
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export const dialogControlledCode = `import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@accessly-ui/react";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="rounded-lg border border-border px-4 py-2 text-sm">
        Open programmatically
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Controlled dialog</DialogTitle>
            <DialogDescription>
              Opened without a DialogTrigger — focus still restores correctly to the button on close.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose className="rounded-lg bg-accent px-4 py-2 text-sm text-white">
              Close
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}`;

export function DialogRTLDemo() {
  return (
    <div dir="rtl">
      <Dialog>
        <DialogTrigger>
          <TriggerButton>فتح الحوار</TriggerButton>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>تعديل الملف الشخصي</DialogTitle>
            <DialogDescription>قم بإجراء تغييرات على ملفك الشخصي هنا.</DialogDescription>
          </DialogHeader>
          <DialogBody>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-[var(--text)]">الاسم</span>
              <input
                type="text"
                defaultValue="جين دو"
                className="w-full rounded-md border border-[var(--border)] bg-[var(--canvas)] px-3 py-2 text-sm outline-none"
              />
            </label>
          </DialogBody>
          <DialogFooter>
            <DialogClose className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm">
              إلغاء
            </DialogClose>
            <DialogClose className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm text-white">
              حفظ
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export const dialogRTLCode = `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <div dir="rtl">
      <Dialog>
        <DialogTrigger>
          <button type="button" className="rounded-lg border border-border bg-surface-raised px-4 py-2 text-sm">
            فتح الحوار
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>تعديل الملف الشخصي</DialogTitle>
            <DialogDescription>قم بإجراء تغييرات على ملفك الشخصي هنا.</DialogDescription>
          </DialogHeader>
          <DialogBody>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">الاسم</span>
              <input defaultValue="جين دو" className="w-full rounded-md border border-border px-3 py-2 text-sm" />
            </label>
          </DialogBody>
          <DialogFooter>
            <DialogClose className="rounded-lg border border-border px-4 py-2 text-sm">إلغاء</DialogClose>
            <DialogClose className="rounded-lg bg-accent px-4 py-2 text-sm text-white">حفظ</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}`;

export const dialogStories = [
  { title: "Default", Demo: DialogDefaultDemo, code: dialogDefaultCode },
  { title: "Close Button", Demo: DialogCloseButtonDemo, code: dialogCloseButtonCode },
  {
    title: "No Close Button",
    Demo: DialogNoCloseButtonDemo,
    code: dialogNoCloseButtonCode,
  },
  { title: "Sticky Footer", Demo: DialogStickyFooterDemo, code: dialogStickyFooterCode },
  {
    title: "Scrollable Content",
    Demo: DialogScrollableContentDemo,
    code: dialogScrollableContentCode,
  },
  { title: "Controlled", Demo: DialogControlledDemo, code: dialogControlledCode },
  { title: "RTL", Demo: DialogRTLDemo, code: dialogRTLCode },
];

export function DialogDemo() {
  return <DialogDefaultDemo />;
}

export const dialogDemoCode = dialogDefaultCode;
