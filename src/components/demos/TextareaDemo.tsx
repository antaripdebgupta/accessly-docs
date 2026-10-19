"use client";

import { useState } from "react";
import { Textarea } from "@accessly-ui/react";

export function TextareaDefaultDemo() {
  const [val, setVal] = useState("");

  return (
    <div className="w-full max-w-sm">
      <Textarea
        aria-label="Response"
        placeholder="Type your response..."
        value={val}
        onChange={(v) => setVal(v)}
      />
    </div>
  );
}

export const textareaDefaultCode = `import { useState } from "react";
import { Textarea } from "@accessly-ui/react";

export default function Example() {
  const [value, setValue] = useState("");

  return (
    <Textarea
      aria-label="Response"
      placeholder="Type your response..."
      value={value}
      onChange={(v) => setValue(v)}
    />
  );
}`;

export function TextareaFieldDemo() {
  return (
    <div className="w-full max-w-sm">
      <Textarea
        label="User Feedback"
        description="Please provide detailed comments about your experience."
        placeholder="Write your feedback..."
      />
    </div>
  );
}

export const textareaFieldCode = `import { Textarea } from "@accessly-ui/react";

export default function Example() {
  return (
    <Textarea
      label="User Feedback"
      description="Please provide detailed comments about your experience."
      placeholder="Write your feedback..."
    />
  );
}`;

export function TextareaDisabledDemo() {
  return (
    <div className="w-full max-w-sm">
      <Textarea
        label="Archived Notes"
        value="This note is archived and cannot be edited."
        disabled
      />
    </div>
  );
}

export const textareaDisabledCode = `import { Textarea } from "@accessly-ui/react";

export default function Example() {
  return (
    <Textarea
      label="Archived Notes"
      value="This note is archived and cannot be edited."
      disabled
    />
  );
}`;

export function TextareaInvalidDemo() {
  return (
    <div className="w-full max-w-sm">
      <Textarea
        label="Bio"
        defaultValue="This bio contains restricted terms."
        error="Bio contains invalid characters or forbidden terms."
      />
    </div>
  );
}

export const textareaInvalidCode = `import { Textarea } from "@accessly-ui/react";

export default function Example() {
  return (
    <Textarea
      label="Bio"
      defaultValue="This bio contains restricted terms."
      error="Bio contains invalid characters or forbidden terms."
    />
  );
}`;

export function TextareaAutoResizeDemo() {
  return (
    <div className="w-full max-w-sm">
      <Textarea
        label="Auto-resizing Textarea"
        description="Type multiple lines to see height adjust automatically up to 6 rows."
        autoResize
        maxRows={6}
        placeholder="Press enter multiple times to test auto-resize..."
      />
    </div>
  );
}

export const textareaAutoResizeCode = `import { Textarea } from "@accessly-ui/react";

export default function Example() {
  return (
    <Textarea
      label="Auto-resizing Textarea"
      description="Type multiple lines to see height adjust automatically up to 6 rows."
      autoResize
      maxRows={6}
      placeholder="Press enter multiple times to test auto-resize..."
    />
  );
}`;

export function TextareaCharacterCountDemo() {
  return (
    <div className="w-full max-w-sm">
      <Textarea
        label="Short Post"
        description="Maximum 140 characters."
        maxCount={140}
        defaultValue="This is a sample post content."
      />
    </div>
  );
}

export const textareaCharacterCountCode = `import { Textarea } from "@accessly-ui/react";

export default function Example() {
  return (
    <Textarea
      label="Short Post"
      description="Maximum 140 characters."
      maxCount={140}
      defaultValue="This is a sample post content."
    />
  );
}`;

export function TextareaButtonVariantDemo() {
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex min-h-[100px] flex-col gap-2 rounded-md border border-[var(--border)] bg-[var(--surface-raised)] p-3">
        {messages.length === 0 ? (
          <span className="text-xs text-[var(--text-muted)]">No messages sent yet.</span>
        ) : (
          messages.map((msg, i) => (
            <div
              key={i}
              className="rounded border border-[var(--border)] bg-[var(--surface)] p-2 text-xs"
            >
              {msg}
            </div>
          ))
        )}
      </div>

      <Textarea
        label="Chat Input"
        placeholder="Write a message... (Press Enter to send)"
        submitOnEnter
        autoResize
        maxRows={4}
        onSubmit={(val) => {
          if (val.trim()) {
            setMessages((prev) => [...prev, val]);
          }
        }}
        actionButton={
          <button
            type="button"
            className="rounded bg-[var(--accent)] px-3 py-1 text-xs font-medium text-white transition-opacity hover:opacity-90"
          >
            Send
          </button>
        }
      />
    </div>
  );
}

export const textareaButtonVariantCode = `import { useState } from "react";
import { Textarea } from "@accessly-ui/react";

export default function Example() {
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex min-h-[100px] flex-col gap-2 rounded-md border border-border bg-surface-raised p-3">
        {messages.length === 0 ? (
          <span className="text-xs text-secondary">No messages sent yet.</span>
        ) : (
          messages.map((msg, i) => (
            <div key={i} className="rounded border border-border bg-surface p-2 text-xs">
              {msg}
            </div>
          ))
        )}
      </div>

      <Textarea
        label="Chat Input"
        placeholder="Write a message... (Press Enter to send)"
        submitOnEnter
        autoResize
        maxRows={4}
        onSubmit={(val) => {
          if (val.trim()) {
            setMessages((prev) => [...prev, val]);
          }
        }}
        actionButton={
          <button
            type="button"
            className="rounded bg-accent px-3 py-1 text-xs font-medium text-white"
          >
            Send
          </button>
        }
      />
    </div>
  );
}`;

export function TextareaRTLDemo() {
  return (
    <div dir="rtl" className="w-full max-w-sm">
      <Textarea
        label="الملاحظات (Feedback in Arabic)"
        description="يرجى تقديم ملاحظاتك التفصيلية هنا."
        dir="rtl"
        placeholder="اكتب نصك هنا..."
        maxCount={200}
      />
    </div>
  );
}

export const textareaRTLCode = `import { Textarea } from "@accessly-ui/react";

export default function Example() {
  return (
    <div dir="rtl">
      <Textarea
        label="الملاحظات (Feedback in Arabic)"
        description="يرجى تقديم ملاحظاتك التفصيلية هنا."
        dir="rtl"
        placeholder="اكتب نصك هنا..."
        maxCount={200}
      />
    </div>
  );
}`;

export const textareaStories = [
  { title: "Default", Demo: TextareaDefaultDemo, code: textareaDefaultCode },
  { title: "Field", Demo: TextareaFieldDemo, code: textareaFieldCode },
  { title: "Disabled", Demo: TextareaDisabledDemo, code: textareaDisabledCode },
  { title: "Invalid", Demo: TextareaInvalidDemo, code: textareaInvalidCode },
  { title: "Auto-Resize", Demo: TextareaAutoResizeDemo, code: textareaAutoResizeCode },
  {
    title: "Character Count",
    Demo: TextareaCharacterCountDemo,
    code: textareaCharacterCountCode,
  },
  {
    title: "Chat Input / Button Variant",
    Demo: TextareaButtonVariantDemo,
    code: textareaButtonVariantCode,
  },
  { title: "RTL", Demo: TextareaRTLDemo, code: textareaRTLCode },
];

export function TextareaDemo() {
  return <TextareaFieldDemo />;
}

export const textareaDemoCode = textareaFieldCode;
