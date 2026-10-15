"use client";

import { useState } from "react";
import { Search, Mail, Copy } from "lucide-react";
import { Input, InputGroup, FieldGroup, FileInput } from "@accessly-ui/react";

export function InputDefaultDemo() {
  const [val, setVal] = useState("");

  return (
    <div className="w-full max-w-sm">
      <Input
        placeholder="Standard input placeholder"
        value={val}
        onChange={(v) => setVal(v)}
      />
    </div>
  );
}

export const inputDefaultCode = `import { useState } from "react";
import { Input } from "@accessly-ui/react";

export default function Example() {
  const [value, setValue] = useState("");

  return (
    <Input
      placeholder="Standard input placeholder"
      value={value}
      onChange={(v) => setValue(v)}
    />
  );
}`;

export function InputFieldDemo() {
  return (
    <div className="w-full max-w-sm">
      <Input
        label="Email Address"
        type="email"
        description="We will never share your email with third parties."
        placeholder="alex@example.com"
      />
    </div>
  );
}

export const inputFieldCode = `import { Input } from "@accessly-ui/react";

export default function Example() {
  return (
    <Input
      label="Email Address"
      type="email"
      description="We will never share your email with third parties."
      placeholder="alex@example.com"
    />
  );
}`;

export function InputFieldGroupDemo() {
  return (
    <FieldGroup legend="Date of Birth" description="Enter day, month, and year">
      <Input label="Day" placeholder="DD" className="w-20" />
      <Input label="Month" placeholder="MM" className="w-20" />
      <Input label="Year" placeholder="YYYY" className="w-28" />
    </FieldGroup>
  );
}

export const inputFieldGroupCode = `import { Input, FieldGroup } from "@accessly-ui/react";

export default function Example() {
  return (
    <FieldGroup legend="Date of Birth" description="Enter day, month, and year">
      <Input label="Day" placeholder="DD" className="w-20" />
      <Input label="Month" placeholder="MM" className="w-20" />
      <Input label="Year" placeholder="YYYY" className="w-28" />
    </FieldGroup>
  );
}`;

export function InputDisabledDemo() {
  return (
    <div className="w-full max-w-sm">
      <Input label="License Key" value="XXXX-XXXX-XXXX-XXXX" disabled />
    </div>
  );
}

export const inputDisabledCode = `import { Input } from "@accessly-ui/react";

export default function Example() {
  return (
    <Input
      label="License Key"
      value="XXXX-XXXX-XXXX-XXXX"
      disabled
    />
  );
}`;

export function InputInvalidDemo() {
  return (
    <div className="w-full max-w-sm">
      <Input
        label="Username"
        defaultValue="admin"
        error="This username is reserved. Please choose another."
      />
    </div>
  );
}

export const inputInvalidCode = `import { Input } from "@accessly-ui/react";

export default function Example() {
  return (
    <Input
      label="Username"
      defaultValue="admin"
      error="This username is reserved. Please choose another."
    />
  );
}`;

export function InputFileDemo() {
  return (
    <div className="w-full max-w-sm">
      <FileInput
        label="Document Upload"
        description="Upload PDF or DOCX files up to 10MB"
        accept=".pdf,.docx"
      />
    </div>
  );
}

export const inputFileCode = `import { FileInput } from "@accessly-ui/react";

export default function Example() {
  return (
    <FileInput
      label="Document Upload"
      description="Upload PDF or DOCX files up to 10MB"
      accept=".pdf,.docx"
    />
  );
}`;

export function InputInlineDemo() {
  return (
    <div className="w-full max-w-sm">
      <Input
        label="Subdomain"
        layout="inline"
        placeholder="my-company"
        suffix=".app.com"
      />
    </div>
  );
}

export const inputInlineCode = `import { Input } from "@accessly-ui/react";

export default function Example() {
  return (
    <Input
      label="Subdomain"
      layout="inline"
      placeholder="my-company"
      suffix=".app.com"
    />
  );
}`;

export function InputGridDemo() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
      <Input label="First Name" placeholder="Jane" />
      <Input label="Last Name" placeholder="Doe" />
      <Input
        label="Email"
        type="email"
        placeholder="jane@example.com"
        className="md:col-span-2"
      />
    </div>
  );
}

export const inputGridCode = `import { Input } from "@accessly-ui/react";

export default function Example() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
      <Input label="First Name" placeholder="Jane" />
      <Input label="Last Name" placeholder="Doe" />
      <Input label="Email" type="email" placeholder="jane@example.com" className="md:col-span-2" />
    </div>
  );
}`;

export function InputRequiredDemo() {
  return (
    <div className="w-full max-w-sm">
      <Input label="Full Name" required showRequiredIndicator placeholder="John Smith" />
    </div>
  );
}

export const inputRequiredCode = `import { Input } from "@accessly-ui/react";

export default function Example() {
  return (
    <Input
      label="Full Name"
      required
      showRequiredIndicator
      placeholder="John Smith"
    />
  );
}`;

export function InputBadgeDemo() {
  return (
    <div className="w-full max-w-sm">
      <Input label="Price" badge="USD" placeholder="0.00" />
    </div>
  );
}

export const inputBadgeCode = `import { Input } from "@accessly-ui/react";

export default function Example() {
  return (
    <Input
      label="Price"
      badge="USD"
      placeholder="0.00"
    />
  );
}`;

export function InputPrefixDemo() {
  return (
    <div className="w-full max-w-sm">
      <Input
        label="Search Documents"
        prefix={<Search size={16} />}
        placeholder="Type to search..."
      />
    </div>
  );
}

export const inputPrefixCode = `import { Input } from "@accessly-ui/react";
import { Search } from "lucide-react";

export default function Example() {
  return (
    <Input
      label="Search Documents"
      prefix={<Search size={16} />}
      placeholder="Type to search..."
    />
  );
}`;

export function InputButtonGroupDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Input label="Account Password" type="password" defaultValue="SuperSecretP@ss" />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="referral-link" className="text-sm font-medium text-[var(--text)]">
          Referral Link
        </label>
        <InputGroup>
          <Input
            id="referral-link"
            aria-label="Referral Link"
            value="https://acl.design/ref/12345"
            readOnly
            className="rounded-e-none"
          />
          <button
            type="button"
            className="shrink-0 rounded-e-md bg-[var(--accent)] px-4 py-2 text-xs font-medium text-white transition-colors hover:opacity-90"
            onClick={() => alert("Copied to clipboard!")}
          >
            <Copy size={14} className="mr-1 inline" />
            Copy
          </button>
        </InputGroup>
      </div>
    </div>
  );
}

export const inputButtonGroupCode = `import { Input, InputGroup } from "@accessly-ui/react";
import { Copy } from "lucide-react";

export default function Example() {
  return (
    <div className="flex max-w-md flex-col gap-4">
      <Input label="Account Password" type="password" defaultValue="SuperSecretP@ss" />
      <div className="flex flex-col gap-1.5">
        <label htmlFor="referral-link" className="text-sm font-medium">Referral Link</label>
        <InputGroup>
          <Input
            id="referral-link"
            aria-label="Referral Link"
            value="https://acl.design/ref/12345"
            readOnly
            className="rounded-e-none"
          />
          <button
            type="button"
            className="shrink-0 rounded-e-md bg-accent px-4 py-2 text-xs font-medium text-white"
            onClick={() => alert('Copied to clipboard!')}
          >
            <Copy size={14} className="mr-1 inline" />
            Copy
          </button>
        </InputGroup>
      </div>
    </div>
  );
}`;

export function InputFormCompositionDemo() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex w-full max-w-md flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xs"
    >
      <h2 className="text-lg font-bold text-[var(--text)]">Create Account</h2>

      <Input label="Full Name" required showRequiredIndicator placeholder="Alex Morgan" />
      <Input
        label="Email Address"
        type="email"
        required
        showRequiredIndicator
        prefix={<Mail size={16} />}
        placeholder="alex@example.com"
      />
      <Input label="Password" type="password" required showRequiredIndicator />

      <FileInput label="Profile Photo (Optional)" accept="image/*" />

      <button
        type="submit"
        className="mt-2 w-full rounded-md bg-[var(--accent)] py-2.5 font-medium text-white transition-opacity hover:opacity-90"
      >
        Register
      </button>

      {submitted && (
        <p className="text-center text-xs font-semibold text-[var(--accent)]">
          Form submitted successfully!
        </p>
      )}
    </form>
  );
}

export const inputFormCompositionCode = `import { useState } from "react";
import { Input, FileInput } from "@accessly-ui/react";
import { Mail } from "lucide-react";

export default function Example() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex w-full max-w-md flex-col gap-4 rounded-xl border border-border bg-surface p-6"
    >
      <h2 className="text-lg font-bold">Create Account</h2>
      <Input label="Full Name" required showRequiredIndicator placeholder="Alex Morgan" />
      <Input
        label="Email Address"
        type="email"
        required
        showRequiredIndicator
        prefix={<Mail size={16} />}
        placeholder="alex@example.com"
      />
      <Input label="Password" type="password" required showRequiredIndicator />
      <FileInput label="Profile Photo (Optional)" accept="image/*" />
      <button type="submit" className="mt-2 w-full rounded-md bg-accent py-2.5 font-medium text-white">
        Register
      </button>
      {submitted && (
        <p className="text-center text-xs font-semibold text-accent">Form submitted successfully!</p>
      )}
    </form>
  );
}`;

export function InputRTLDemo() {
  return (
    <div dir="rtl" className="w-full max-w-sm">
      <Input
        label="اسم المستخدم (Username)"
        dir="rtl"
        placeholder="ادخل اسم المستخدم..."
        prefix={<Search size={16} />}
        badge="SAR"
        required
      />
    </div>
  );
}

export const inputRTLCode = `import { Input } from "@accessly-ui/react";
import { Search } from "lucide-react";

export default function Example() {
  return (
    <div dir="rtl">
      <Input
        label="اسم المستخدم (Username)"
        dir="rtl"
        placeholder="ادخل اسم المستخدم..."
        prefix={<Search size={16} />}
        badge="SAR"
        required
      />
    </div>
  );
}`;

export const inputStories = [
  { title: "Default", Demo: InputDefaultDemo, code: inputDefaultCode },
  { title: "Field", Demo: InputFieldDemo, code: inputFieldCode },
  { title: "Field Group", Demo: InputFieldGroupDemo, code: inputFieldGroupCode },
  { title: "Disabled", Demo: InputDisabledDemo, code: inputDisabledCode },
  { title: "Invalid", Demo: InputInvalidDemo, code: inputInvalidCode },
  { title: "File", Demo: InputFileDemo, code: inputFileCode },
  { title: "Inline", Demo: InputInlineDemo, code: inputInlineCode },
  { title: "Grid", Demo: InputGridDemo, code: inputGridCode },
  { title: "Required", Demo: InputRequiredDemo, code: inputRequiredCode },
  { title: "Badge", Demo: InputBadgeDemo, code: inputBadgeCode },
  { title: "Prefix", Demo: InputPrefixDemo, code: inputPrefixCode },
  {
    title: "Input Group / Button Group",
    Demo: InputButtonGroupDemo,
    code: inputButtonGroupCode,
  },
  {
    title: "Form Composition",
    Demo: InputFormCompositionDemo,
    code: inputFormCompositionCode,
  },
  { title: "RTL", Demo: InputRTLDemo, code: inputRTLCode },
];

export function InputDemo() {
  return <InputFieldDemo />;
}

export const inputDemoCode = inputFieldCode;
