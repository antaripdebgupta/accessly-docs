"use client";

import { useState } from "react";
import { Search, Globe, Flag } from "lucide-react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxItem,
  ComboboxGroup,
  ComboboxEmpty,
} from "@accessly-ui/react";

const FRUITS = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

const COUNTRIES = [
  { code: "us", name: "United States", flag: "🇺🇸" },
  { code: "in", name: "India", flag: "🇮🇳" },
  { code: "jp", name: "Japan", flag: "🇯🇵" },
  { code: "de", name: "Germany", flag: "🇩🇪" },
  { code: "br", name: "Brazil", flag: "🇧🇷" },
];

const FRUITS_AR = ["تفاح", "موز", "كرز", "تمر", "توت", "تين", "عنب"];

export function ComboboxDefaultDemo() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <Combobox
      value={value}
      onValueChange={(v) => setValue(v as string)}
      className="w-72 max-w-full"
    >
      <ComboboxInput placeholder="Select a fruit..." />
      <ComboboxContent>
        <ComboboxEmpty />
        {FRUITS.map((fruit) => (
          <ComboboxItem key={fruit} value={fruit}>
            {fruit}
          </ComboboxItem>
        ))}
      </ComboboxContent>
    </Combobox>
  );
}

export const comboboxDefaultCode = `import { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxItem,
  ComboboxEmpty,
} from "@accessly-ui/react";

const FRUITS = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

export default function Example() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <Combobox
      value={value}
      onValueChange={(v) => setValue(v as string)}
      className="w-72 max-w-full"
    >
      <ComboboxInput placeholder="Select a fruit..." />
      <ComboboxContent>
        <ComboboxEmpty />
        {FRUITS.map((fruit) => (
          <ComboboxItem key={fruit} value={fruit}>
            {fruit}
          </ComboboxItem>
        ))}
      </ComboboxContent>
    </Combobox>
  );
}`;

export function ComboboxMultipleDemo() {
  const [value, setValue] = useState<string[]>(["Apple", "Cherry"]);

  return (
    <div className="w-80 max-w-full">
      <Combobox multiple value={value} onValueChange={(v) => setValue(v as string[])}>
        <ComboboxInput placeholder="Add fruits..." />
        <ComboboxContent>
          <ComboboxEmpty />
          {FRUITS.map((fruit) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          ))}
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export const comboboxMultipleCode = `import { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxItem,
  ComboboxEmpty,
} from "@accessly-ui/react";

const FRUITS = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

export default function Example() {
  const [value, setValue] = useState<string[]>(["Apple", "Cherry"]);

  return (
    <div className="w-80 max-w-full">
      <Combobox multiple value={value} onValueChange={(v) => setValue(v as string[])}>
        <ComboboxInput placeholder="Add fruits..." />
        <ComboboxContent>
          <ComboboxEmpty />
          {FRUITS.map((fruit) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          ))}
        </ComboboxContent>
      </Combobox>
    </div>
  );
}`;

export function ComboboxClearButtonDemo() {
  const [value, setValue] = useState<string | undefined>("Banana");

  return (
    <div className="w-72 max-w-full">
      <Combobox value={value} onValueChange={(v) => setValue(v as string)}>
        <ComboboxInput placeholder="Select a fruit..." showClearButton />
        <ComboboxContent>
          <ComboboxEmpty />
          {FRUITS.map((fruit) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          ))}
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export const comboboxClearButtonCode = `import { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxItem,
  ComboboxEmpty,
} from "@accessly-ui/react";

const FRUITS = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

export default function Example() {
  const [value, setValue] = useState<string | undefined>("Banana");

  return (
    <div className="w-72 max-w-full">
      <Combobox value={value} onValueChange={(v) => setValue(v as string)}>
        <ComboboxInput placeholder="Select a fruit..." showClearButton />
        <ComboboxContent>
          <ComboboxEmpty />
          {FRUITS.map((fruit) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          ))}
        </ComboboxContent>
      </Combobox>
    </div>
  );
}`;

export function ComboboxGroupsDemo() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <div className="w-72 max-w-full">
      <Combobox value={value} onValueChange={(v) => setValue(v as string)}>
        <ComboboxInput placeholder="Select a timezone..." />
        <ComboboxContent>
          <ComboboxEmpty />
          <ComboboxGroup heading="Americas">
            <ComboboxItem value="est">Eastern Time</ComboboxItem>
            <ComboboxItem value="cst">Central Time</ComboboxItem>
            <ComboboxItem value="pst">Pacific Time</ComboboxItem>
          </ComboboxGroup>
          <ComboboxGroup heading="Europe">
            <ComboboxItem value="gmt">London (GMT)</ComboboxItem>
            <ComboboxItem value="cet">Paris (CET)</ComboboxItem>
          </ComboboxGroup>
          <ComboboxGroup heading="Asia">
            <ComboboxItem value="ist">Kolkata (IST)</ComboboxItem>
            <ComboboxItem value="jst">Tokyo (JST)</ComboboxItem>
          </ComboboxGroup>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export const comboboxGroupsCode = `import { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxItem,
  ComboboxGroup,
  ComboboxEmpty,
} from "@accessly-ui/react";

export default function Example() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <div className="w-72 max-w-full">
      <Combobox value={value} onValueChange={(v) => setValue(v as string)}>
        <ComboboxInput placeholder="Select a timezone..." />
        <ComboboxContent>
          <ComboboxEmpty />
          <ComboboxGroup heading="Americas">
            <ComboboxItem value="est">Eastern Time</ComboboxItem>
            <ComboboxItem value="cst">Central Time</ComboboxItem>
            <ComboboxItem value="pst">Pacific Time</ComboboxItem>
          </ComboboxGroup>
          <ComboboxGroup heading="Europe">
            <ComboboxItem value="gmt">London (GMT)</ComboboxItem>
            <ComboboxItem value="cet">Paris (CET)</ComboboxItem>
          </ComboboxGroup>
          <ComboboxGroup heading="Asia">
            <ComboboxItem value="ist">Kolkata (IST)</ComboboxItem>
            <ComboboxItem value="jst">Tokyo (JST)</ComboboxItem>
          </ComboboxGroup>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}`;

export function ComboboxCustomItemsDemo() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <div className="w-80 max-w-full">
      <Combobox value={value} onValueChange={(v) => setValue(v as string)}>
        <ComboboxInput placeholder="Select a country..." leading={<Globe size={16} />} />
        <ComboboxContent>
          <ComboboxEmpty />
          {COUNTRIES.map((country) => (
            <ComboboxItem
              key={country.code}
              value={country.code}
              textValue={country.name}
            >
              <span className="flex items-center gap-2">
                <span aria-hidden="true">{country.flag}</span>
                <span className="flex flex-col">
                  <span>{country.name}</span>
                  <span className="text-xs text-[var(--text-muted)]">
                    {country.code.toUpperCase()}
                  </span>
                </span>
              </span>
            </ComboboxItem>
          ))}
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export const comboboxCustomItemsCode = `import { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxItem,
  ComboboxEmpty,
} from "@accessly-ui/react";
import { Globe } from "lucide-react";

const COUNTRIES = [
  { code: "us", name: "United States", flag: "🇺🇸" },
  { code: "in", name: "India", flag: "🇮🇳" },
  { code: "jp", name: "Japan", flag: "🇯🇵" },
  { code: "de", name: "Germany", flag: "🇩🇪" },
  { code: "br", name: "Brazil", flag: "🇧🇷" },
];

export default function Example() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <div className="w-80 max-w-full">
      <Combobox value={value} onValueChange={(v) => setValue(v as string)}>
        <ComboboxInput placeholder="Select a country..." leading={<Globe size={16} />} />
        <ComboboxContent>
          <ComboboxEmpty />
          {COUNTRIES.map((country) => (
            <ComboboxItem key={country.code} value={country.code} textValue={country.name}>
              <span className="flex items-center gap-2">
                <span aria-hidden="true">{country.flag}</span>
                <span className="flex flex-col">
                  <span>{country.name}</span>
                  <span className="text-xs text-secondary">{country.code.toUpperCase()}</span>
                </span>
              </span>
            </ComboboxItem>
          ))}
        </ComboboxContent>
      </Combobox>
    </div>
  );
}`;

export function ComboboxInvalidDemo() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <div className="w-72 max-w-full space-y-1">
      <Combobox value={value} onValueChange={(v) => setValue(v as string)} invalid>
        <ComboboxInput placeholder="Select a fruit..." />
        <ComboboxContent>
          <ComboboxEmpty />
          {FRUITS.map((fruit) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          ))}
        </ComboboxContent>
      </Combobox>
      <p className="text-xs text-red-500">Please select a valid fruit.</p>
    </div>
  );
}

export const comboboxInvalidCode = `import { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxItem,
  ComboboxEmpty,
} from "@accessly-ui/react";

const FRUITS = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

export default function Example() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <div className="w-72 max-w-full space-y-1">
      <Combobox value={value} onValueChange={(v) => setValue(v as string)} invalid>
        <ComboboxInput placeholder="Select a fruit..." />
        <ComboboxContent>
          <ComboboxEmpty />
          {FRUITS.map((fruit) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          ))}
        </ComboboxContent>
      </Combobox>
      <p className="text-xs text-danger">Please select a valid fruit.</p>
    </div>
  );
}`;

export function ComboboxDisabledDemo() {
  return (
    <div className="w-72 max-w-full">
      <Combobox disabled value="Apple">
        <ComboboxInput placeholder="Select a fruit..." />
        <ComboboxContent>
          {FRUITS.map((fruit) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          ))}
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export const comboboxDisabledCode = `import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxItem,
} from "@accessly-ui/react";

const FRUITS = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

export default function Example() {
  return (
    <div className="w-72 max-w-full">
      <Combobox disabled value="Apple">
        <ComboboxInput placeholder="Select a fruit..." />
        <ComboboxContent>
          {FRUITS.map((fruit) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          ))}
        </ComboboxContent>
      </Combobox>
    </div>
  );
}`;

export function ComboboxAutoHighlightDemo() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <div className="w-72 max-w-full space-y-2">
      <p className="text-xs text-[var(--text-muted)]">
        The first matching item is automatically highlighted as you type — press Enter to
        select it immediately.
      </p>
      <Combobox value={value} onValueChange={(v) => setValue(v as string)} autoHighlight>
        <ComboboxInput placeholder="Try typing 'a'..." />
        <ComboboxContent>
          <ComboboxEmpty />
          {FRUITS.map((fruit) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          ))}
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export const comboboxAutoHighlightCode = `import { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxItem,
  ComboboxEmpty,
} from "@accessly-ui/react";

const FRUITS = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

export default function Example() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <Combobox value={value} onValueChange={(v) => setValue(v as string)} autoHighlight>
      <ComboboxInput placeholder="Try typing 'a'..." />
      <ComboboxContent>
        <ComboboxEmpty />
        {FRUITS.map((fruit) => (
          <ComboboxItem key={fruit} value={fruit}>
            {fruit}
          </ComboboxItem>
        ))}
      </ComboboxContent>
    </Combobox>
  );
}`;

export function ComboboxPopupDemo() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <div className="flex h-64 w-72 max-w-full items-end">
      <Combobox
        value={value}
        onValueChange={(v) => setValue(v as string)}
        className="w-full"
      >
        <ComboboxInput placeholder="Popup positions above/below..." />
        <ComboboxContent>
          <ComboboxEmpty />
          {FRUITS.map((fruit) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          ))}
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export const comboboxPopupCode = `import { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxItem,
  ComboboxEmpty,
} from "@accessly-ui/react";

const FRUITS = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

export default function Example() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <div className="flex h-64 w-72 max-w-full items-end">
      <Combobox value={value} onValueChange={(v) => setValue(v as string)} className="w-full">
        <ComboboxInput placeholder="Popup positions above/below..." />
        <ComboboxContent>
          <ComboboxEmpty />
          {FRUITS.map((fruit) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          ))}
        </ComboboxContent>
      </Combobox>
    </div>
  );
}`;

export function ComboboxInputGroupDemo() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <div className="w-72 max-w-full">
      <Combobox value={value} onValueChange={(v) => setValue(v as string)}>
        <ComboboxInput placeholder="Search fruits..." leading={<Search size={16} />} />
        <ComboboxContent>
          <ComboboxEmpty />
          {FRUITS.map((fruit) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          ))}
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export const comboboxInputGroupCode = `import { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxItem,
  ComboboxEmpty,
} from "@accessly-ui/react";
import { Search } from "lucide-react";

const FRUITS = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

export default function Example() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <div className="w-72 max-w-full">
      <Combobox value={value} onValueChange={(v) => setValue(v as string)}>
        <ComboboxInput placeholder="Search fruits..." leading={<Search size={16} />} />
        <ComboboxContent>
          <ComboboxEmpty />
          {FRUITS.map((fruit) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          ))}
        </ComboboxContent>
      </Combobox>
    </div>
  );
}`;

export function ComboboxRTLDemo() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <div dir="rtl" className="w-72 max-w-full">
      <Combobox value={value} onValueChange={(v) => setValue(v as string)}>
        <ComboboxInput placeholder="اختر فاكهة..." leading={<Flag size={16} />} />
        <ComboboxContent>
          <ComboboxEmpty />
          {FRUITS_AR.map((fruit) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          ))}
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export const comboboxRTLCode = `import { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxItem,
  ComboboxEmpty,
} from "@accessly-ui/react";
import { Flag } from "lucide-react";

const FRUITS_AR = ["تفاح", "موز", "كرز", "تمر", "توت", "تين", "عنب"];

export default function Example() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <div dir="rtl" className="w-72 max-w-full">
      <Combobox value={value} onValueChange={(v) => setValue(v as string)}>
        <ComboboxInput placeholder="اختر فاكهة..." leading={<Flag size={16} />} />
        <ComboboxContent>
          <ComboboxEmpty />
          {FRUITS_AR.map((fruit) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          ))}
        </ComboboxContent>
      </Combobox>
    </div>
  );
}`;

export const comboboxStories = [
  { title: "Default", Demo: ComboboxDefaultDemo, code: comboboxDefaultCode },
  { title: "Multiple", Demo: ComboboxMultipleDemo, code: comboboxMultipleCode },
  { title: "Clear Button", Demo: ComboboxClearButtonDemo, code: comboboxClearButtonCode },
  { title: "Groups", Demo: ComboboxGroupsDemo, code: comboboxGroupsCode },
  { title: "Custom Items", Demo: ComboboxCustomItemsDemo, code: comboboxCustomItemsCode },
  { title: "Invalid", Demo: ComboboxInvalidDemo, code: comboboxInvalidCode },
  { title: "Disabled", Demo: ComboboxDisabledDemo, code: comboboxDisabledCode },
  {
    title: "Auto Highlight",
    Demo: ComboboxAutoHighlightDemo,
    code: comboboxAutoHighlightCode,
  },
  { title: "Popup", Demo: ComboboxPopupDemo, code: comboboxPopupCode },
  { title: "Input Group", Demo: ComboboxInputGroupDemo, code: comboboxInputGroupCode },
  { title: "RTL", Demo: ComboboxRTLDemo, code: comboboxRTLCode },
];

export function ComboboxDemo() {
  return <ComboboxDefaultDemo />;
}

export const comboboxDemoCode = comboboxDefaultCode;
