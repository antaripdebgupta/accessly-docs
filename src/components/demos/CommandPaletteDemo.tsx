"use client";

import { useState } from "react";
import { FileText, Settings, User, Calculator, Calendar, Smile } from "lucide-react";
import {
  CommandPalette,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandEmpty,
  CommandLoading,
  CommandShortcut,
} from "@accessly-ui/react";
import { useAsyncSearch } from "@accessly-ui/primitives";

function OpenButton({
  onClick,
  children = "Open (or press ⌘K / Ctrl+K)",
}: {
  onClick: () => void;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] px-4 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)]"
    >
      {children}
    </button>
  );
}

export function CommandPaletteDefaultDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <OpenButton onClick={() => setOpen(true)} />
      <CommandPalette open={open} onOpenChange={setOpen}>
        <CommandInput />
        <CommandList>
          <CommandEmpty />
          <CommandItem
            value="new-file"
            icon={<FileText size={16} />}
            onSelect={() => setOpen(false)}
          >
            New File
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem
            value="profile"
            icon={<User size={16} />}
            onSelect={() => setOpen(false)}
          >
            View Profile
          </CommandItem>
          <CommandItem
            value="settings"
            icon={<Settings size={16} />}
            onSelect={() => setOpen(false)}
          >
            Open Settings
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
        </CommandList>
      </CommandPalette>
    </div>
  );
}

export const commandPaletteDefaultCode = `import { useState } from "react";
import {
  CommandPalette,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandShortcut,
} from "@accessly-ui/react";
import { FileText, User, Settings } from "lucide-react";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg border border-border bg-surface-raised px-4 py-2 text-sm"
      >
        Open (or press ⌘K / Ctrl+K)
      </button>
      <CommandPalette open={open} onOpenChange={setOpen}>
        <CommandInput />
        <CommandList>
          <CommandEmpty />
          <CommandItem
            value="new-file"
            icon={<FileText size={16} />}
            onSelect={() => setOpen(false)}
          >
            New File
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem
            value="profile"
            icon={<User size={16} />}
            onSelect={() => setOpen(false)}
          >
            View Profile
          </CommandItem>
          <CommandItem
            value="settings"
            icon={<Settings size={16} />}
            onSelect={() => setOpen(false)}
          >
            Open Settings
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
        </CommandList>
      </CommandPalette>
    </>
  );
}`;

export function CommandPaletteGroupsDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <OpenButton onClick={() => setOpen(true)}>Open grouped palette</OpenButton>
      <CommandPalette open={open} onOpenChange={setOpen}>
        <CommandInput />
        <CommandList>
          <CommandEmpty />
          <CommandGroup heading="Suggestions">
            <CommandItem
              value="calendar"
              icon={<Calendar size={16} />}
              onSelect={() => setOpen(false)}
            >
              Calendar
            </CommandItem>
            <CommandItem
              value="calculator"
              icon={<Calculator size={16} />}
              onSelect={() => setOpen(false)}
            >
              Calculator
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Settings">
            <CommandItem
              value="profile-2"
              icon={<User size={16} />}
              onSelect={() => setOpen(false)}
            >
              Profile
            </CommandItem>
            <CommandItem
              value="settings-2"
              icon={<Settings size={16} />}
              onSelect={() => setOpen(false)}
            >
              Preferences
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandPalette>
    </div>
  );
}

export const commandPaletteGroupsCode = `import { useState } from "react";
import {
  CommandPalette,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandEmpty,
} from "@accessly-ui/react";
import { Calendar, Calculator, User, Settings } from "lucide-react";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg border border-border bg-surface-raised px-4 py-2 text-sm"
      >
        Open grouped palette
      </button>
      <CommandPalette open={open} onOpenChange={setOpen}>
        <CommandInput />
        <CommandList>
          <CommandEmpty />
          <CommandGroup heading="Suggestions">
            <CommandItem
              value="calendar"
              icon={<Calendar size={16} />}
              onSelect={() => setOpen(false)}
            >
              Calendar
            </CommandItem>
            <CommandItem
              value="calculator"
              icon={<Calculator size={16} />}
              onSelect={() => setOpen(false)}
            >
              Calculator
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Settings">
            <CommandItem
              value="profile-2"
              icon={<User size={16} />}
              onSelect={() => setOpen(false)}
            >
              Profile
            </CommandItem>
            <CommandItem
              value="settings-2"
              icon={<Settings size={16} />}
              onSelect={() => setOpen(false)}
            >
              Preferences
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandPalette>
    </>
  );
}`;

const ALL_ITEMS = [
  "Apple",
  "Application",
  "Apricot",
  "Banana",
  "Berry",
  "Cherry",
  "Date",
  "Elderberry",
];

function simulateBackendSearch(query: string): Promise<string[]> {
  const matches = query
    ? ALL_ITEMS.filter((i) => i.toLowerCase().includes(query.toLowerCase()))
    : ALL_ITEMS;
  const delay = Math.max(50, 600 - query.length * 150);
  return new Promise((resolve) => setTimeout(() => resolve(matches), delay));
}

export function CommandPaletteAsyncSearchDemo() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { results, loading } = useAsyncSearch({
    query,
    search: simulateBackendSearch,
    debounceMs: 100,
  });

  return (
    <div className="flex flex-col items-center">
      <OpenButton onClick={() => setOpen(true)}>Open async search palette</OpenButton>
      <p className="mt-2 max-w-sm text-center text-xs text-[var(--text-muted)]">
        Try typing quickly (e.g. &quot;a&quot; then immediately &quot;ap&quot;) — shorter
        queries are deliberately made to resolve slower here, on purpose, to demonstrate
        that the final displayed list always matches your LATEST query, never a stale
        slower response landing after it.
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        inputValue={query}
        onInputValueChange={setQuery}
      >
        <CommandInput placeholder="Search fruits..." />
        <CommandList>
          <CommandLoading loading={loading} />
          {!loading && <CommandEmpty />}
          {results.map((fruit) => (
            <CommandItem
              key={fruit}
              value={fruit}
              icon={<Smile size={16} />}
              onSelect={() => setOpen(false)}
            >
              {fruit}
            </CommandItem>
          ))}
        </CommandList>
      </CommandPalette>
    </div>
  );
}

export const commandPaletteAsyncSearchCode = `import { useState } from "react";
import {
  CommandPalette,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandLoading,
} from "@accessly-ui/react";
import { useAsyncSearch } from "@accessly-ui/primitives";
import { Smile } from "lucide-react";

const ALL_ITEMS = [
  "Apple",
  "Application",
  "Apricot",
  "Banana",
  "Berry",
  "Cherry",
  "Date",
  "Elderberry",
];

function simulateBackendSearch(query: string): Promise<string[]> {
  const matches = query
    ? ALL_ITEMS.filter((i) => i.toLowerCase().includes(query.toLowerCase()))
    : ALL_ITEMS;
  const delay = Math.max(50, 600 - query.length * 150);
  return new Promise((resolve) => setTimeout(() => resolve(matches), delay));
}

export default function Example() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { results, loading } = useAsyncSearch({
    query,
    search: simulateBackendSearch,
    debounceMs: 100,
  });

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg border border-border bg-surface-raised px-4 py-2 text-sm"
      >
        Open async search palette
      </button>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        inputValue={query}
        onInputValueChange={setQuery}
      >
        <CommandInput placeholder="Search fruits..." />
        <CommandList>
          <CommandLoading loading={loading} />
          {!loading && <CommandEmpty />}
          {results.map((fruit) => (
            <CommandItem
              key={fruit}
              value={fruit}
              icon={<Smile size={16} />}
              onSelect={() => setOpen(false)}
            >
              {fruit}
            </CommandItem>
          ))}
        </CommandList>
      </CommandPalette>
    </>
  );
}`;

export function CommandPaletteRTLDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div dir="rtl" className="flex flex-col items-center">
      <OpenButton onClick={() => setOpen(true)}>فتح لوحة الأوامر</OpenButton>
      <CommandPalette open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="ابحث عن أمر..." />
        <CommandList>
          <CommandEmpty />
          <CommandItem
            value="new-file-ar"
            icon={<FileText size={16} />}
            onSelect={() => setOpen(false)}
          >
            ملف جديد
          </CommandItem>
          <CommandItem
            value="settings-ar"
            icon={<Settings size={16} />}
            onSelect={() => setOpen(false)}
          >
            الإعدادات
          </CommandItem>
        </CommandList>
      </CommandPalette>
    </div>
  );
}

export const commandPaletteRTLCode = `import { useState } from "react";
import {
  CommandPalette,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
} from "@accessly-ui/react";
import { FileText, Settings } from "lucide-react";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div dir="rtl">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg border border-border bg-surface-raised px-4 py-2 text-sm"
      >
        فتح لوحة الأوامر
      </button>
      <CommandPalette open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="ابحث عن أمر..." />
        <CommandList>
          <CommandEmpty />
          <CommandItem
            value="new-file-ar"
            icon={<FileText size={16} />}
            onSelect={() => setOpen(false)}
          >
            ملف جديد
          </CommandItem>
          <CommandItem
            value="settings-ar"
            icon={<Settings size={16} />}
            onSelect={() => setOpen(false)}
          >
            الإعدادات
          </CommandItem>
        </CommandList>
      </CommandPalette>
    </div>
  );
}`;

export const commandPaletteStories = [
  { title: "Default", Demo: CommandPaletteDefaultDemo, code: commandPaletteDefaultCode },
  { title: "Groups", Demo: CommandPaletteGroupsDemo, code: commandPaletteGroupsCode },
  {
    title: "Async Search",
    Demo: CommandPaletteAsyncSearchDemo,
    code: commandPaletteAsyncSearchCode,
  },
  { title: "RTL", Demo: CommandPaletteRTLDemo, code: commandPaletteRTLCode },
];

export function CommandPaletteDemo() {
  return <CommandPaletteDefaultDemo />;
}

export const commandPaletteDemoCode = commandPaletteDefaultCode;
