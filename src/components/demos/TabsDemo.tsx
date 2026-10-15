"use client";

import { useState } from "react";
import { Settings, CreditCard, User, Bell } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@accessly-ui/react";

export function TabsDefaultDemo() {
  return (
    <div className="w-full max-w-md">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Manage your account settings here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
        <TabsContent value="team">Manage team members here.</TabsContent>
      </Tabs>
    </div>
  );
}

export const tabsDefaultCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account settings here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="team">Manage team members here.</TabsContent>
    </Tabs>
  );
}`;

export function TabsManualActivationDemo() {
  return (
    <div className="w-full max-w-md">
      <Tabs defaultValue="a" activationMode="manual">
        <TabsList>
          <TabsTrigger value="a">Tab A</TabsTrigger>
          <TabsTrigger value="b">Tab B</TabsTrigger>
          <TabsTrigger value="c">Tab C</TabsTrigger>
        </TabsList>
        <TabsContent value="a">
          Arrow keys move focus only — press Enter or Space to activate.
        </TabsContent>
        <TabsContent value="b">Content B</TabsContent>
        <TabsContent value="c">Content C</TabsContent>
      </Tabs>
    </div>
  );
}

export const tabsManualActivationCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <Tabs defaultValue="a" activationMode="manual">
      <TabsList>
        <TabsTrigger value="a">Tab A</TabsTrigger>
        <TabsTrigger value="b">Tab B</TabsTrigger>
        <TabsTrigger value="c">Tab C</TabsTrigger>
      </TabsList>
      <TabsContent value="a">Arrow keys move focus only — press Enter or Space to activate.</TabsContent>
      <TabsContent value="b">Content B</TabsContent>
      <TabsContent value="c">Content C</TabsContent>
    </Tabs>
  );
}`;

export function TabsVerticalDemo() {
  return (
    <div className="w-full max-w-lg">
      <Tabs defaultValue="general" orientation="vertical" className="w-[28rem]">
        <TabsList>
          <TabsTrigger value="general" icon={<Settings size={16} />}>
            General
          </TabsTrigger>
          <TabsTrigger value="profile" icon={<User size={16} />}>
            Profile
          </TabsTrigger>
          <TabsTrigger value="billing" icon={<CreditCard size={16} />}>
            Billing
          </TabsTrigger>
          <TabsTrigger value="notifications" icon={<Bell size={16} />}>
            Notifications
          </TabsTrigger>
        </TabsList>
        <div className="flex-1">
          <TabsContent value="general">General settings content.</TabsContent>
          <TabsContent value="profile">Profile settings content.</TabsContent>
          <TabsContent value="billing">Billing settings content.</TabsContent>
          <TabsContent value="notifications">Notification preferences.</TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export const tabsVerticalCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@accessly-ui/react";
import { Settings, User, CreditCard, Bell } from "lucide-react";

export default function Example() {
  return (
    <Tabs defaultValue="general" orientation="vertical">
      <TabsList>
        <TabsTrigger value="general" icon={<Settings size={16} />}>General</TabsTrigger>
        <TabsTrigger value="profile" icon={<User size={16} />}>Profile</TabsTrigger>
        <TabsTrigger value="billing" icon={<CreditCard size={16} />}>Billing</TabsTrigger>
        <TabsTrigger value="notifications" icon={<Bell size={16} />}>Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="general">General settings content.</TabsContent>
      <TabsContent value="profile">Profile settings content.</TabsContent>
      <TabsContent value="billing">Billing settings content.</TabsContent>
      <TabsContent value="notifications">Notification preferences.</TabsContent>
    </Tabs>
  );
}`;

export function TabsDisabledDemo() {
  return (
    <div className="w-full max-w-md">
      <Tabs defaultValue="a">
        <TabsList>
          <TabsTrigger value="a">Available</TabsTrigger>
          <TabsTrigger value="b" disabled>
            Locked
          </TabsTrigger>
          <TabsTrigger value="c">Available 2</TabsTrigger>
        </TabsList>
        <TabsContent value="a">This tab is available.</TabsContent>
        <TabsContent value="b">
          You shouldn&apos;t be able to reach this via keyboard.
        </TabsContent>
        <TabsContent value="c">
          Also available — arrow keys skip the locked tab.
        </TabsContent>
      </Tabs>
    </div>
  );
}

export const tabsDisabledCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <Tabs defaultValue="a">
      <TabsList>
        <TabsTrigger value="a">Available</TabsTrigger>
        <TabsTrigger value="b" disabled>Locked</TabsTrigger>
        <TabsTrigger value="c">Available 2</TabsTrigger>
      </TabsList>
      <TabsContent value="a">This tab is available.</TabsContent>
      <TabsContent value="b">You shouldn't be able to reach this via keyboard.</TabsContent>
      <TabsContent value="c">Also available — arrow keys skip the locked tab.</TabsContent>
    </Tabs>
  );
}`;

export function TabsControlledDemo() {
  const [value, setValue] = useState("a");

  return (
    <div className="w-full max-w-md space-y-2">
      <p className="text-sm text-[var(--text-muted)]">
        Externally controlled — current: {value}
      </p>
      <Tabs value={value} onValueChange={setValue}>
        <TabsList>
          <TabsTrigger value="a">A</TabsTrigger>
          <TabsTrigger value="b">B</TabsTrigger>
        </TabsList>
        <TabsContent value="a">Content A</TabsContent>
        <TabsContent value="b">Content B</TabsContent>
      </Tabs>
    </div>
  );
}

export const tabsControlledCode = `import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@accessly-ui/react";

export default function Example() {
  const [value, setValue] = useState("a");

  return (
    <div className="space-y-2">
      <p className="text-sm">Externally controlled — current: {value}</p>
      <Tabs value={value} onValueChange={setValue}>
        <TabsList>
          <TabsTrigger value="a">A</TabsTrigger>
          <TabsTrigger value="b">B</TabsTrigger>
        </TabsList>
        <TabsContent value="a">Content A</TabsContent>
        <TabsContent value="b">Content B</TabsContent>
      </Tabs>
    </div>
  );
}`;

export function TabsWithIconsAndBadgesDemo() {
  return (
    <div className="w-full max-w-md">
      <Tabs defaultValue="inbox">
        <TabsList>
          <TabsTrigger value="inbox" icon={<Bell size={16} />} badge="12">
            Inbox
          </TabsTrigger>
          <TabsTrigger value="sent" icon={<User size={16} />}>
            Sent
          </TabsTrigger>
        </TabsList>
        <TabsContent value="inbox">12 unread messages.</TabsContent>
        <TabsContent value="sent">Sent items.</TabsContent>
      </Tabs>
    </div>
  );
}

export const tabsWithIconsAndBadgesCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@accessly-ui/react";
import { Bell, User } from "lucide-react";

export default function Example() {
  return (
    <Tabs defaultValue="inbox">
      <TabsList>
        <TabsTrigger value="inbox" icon={<Bell size={16} />} badge="12">Inbox</TabsTrigger>
        <TabsTrigger value="sent" icon={<User size={16} />}>Sent</TabsTrigger>
      </TabsList>
      <TabsContent value="inbox">12 unread messages.</TabsContent>
      <TabsContent value="sent">Sent items.</TabsContent>
    </Tabs>
  );
}`;

export function TabsLoadingStateDemo() {
  return (
    <div className="w-full max-w-md">
      <Tabs defaultValue="data">
        <TabsList>
          <TabsTrigger value="data">Data</TabsTrigger>
        </TabsList>
        <TabsContent value="data">
          <div aria-busy="true" className="animate-pulse space-y-2">
            <div className="h-4 w-3/4 rounded bg-[var(--surface-raised)]" />
            <div className="h-4 w-1/2 rounded bg-[var(--surface-raised)]" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export const tabsLoadingStateCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <Tabs defaultValue="data">
      <TabsList>
        <TabsTrigger value="data">Data</TabsTrigger>
      </TabsList>
      <TabsContent value="data">
        <div aria-busy="true" className="animate-pulse space-y-2">
          <div className="h-4 w-3/4 bg-surface-raised" />
          <div className="h-4 w-1/2 bg-surface-raised" />
        </div>
      </TabsContent>
    </Tabs>
  );
}`;

export function TabsErrorStateDemo() {
  return (
    <div className="w-full max-w-md">
      <Tabs defaultValue="data">
        <TabsList>
          <TabsTrigger value="data">Data</TabsTrigger>
        </TabsList>
        <TabsContent value="data">
          <p role="alert" className="text-sm text-red-500">
            Failed to load data. Please retry.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export const tabsErrorStateCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <Tabs defaultValue="data">
      <TabsList>
        <TabsTrigger value="data">Data</TabsTrigger>
      </TabsList>
      <TabsContent value="data">
        <p role="alert" className="text-sm text-danger">Failed to load data. Please retry.</p>
      </TabsContent>
    </Tabs>
  );
}`;

export function TabsScrollableDemo() {
  return (
    <div className="w-full max-w-sm">
      <Tabs defaultValue="tab-1" className="w-72">
        <TabsList scrollable>
          {Array.from({ length: 12 }, (_, i) => (
            <TabsTrigger key={i} value={`tab-${i + 1}`}>
              Tab {i + 1}
            </TabsTrigger>
          ))}
        </TabsList>
        {Array.from({ length: 12 }, (_, i) => (
          <TabsContent key={i} value={`tab-${i + 1}`}>
            Content for tab {i + 1}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export const tabsScrollableCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <Tabs defaultValue="tab-1" className="w-72">
      <TabsList scrollable>
        {Array.from({ length: 12 }, (_, i) => (
          <TabsTrigger key={i} value={\`tab-\${i + 1}\`}>Tab {i + 1}</TabsTrigger>
        ))}
      </TabsList>
      {Array.from({ length: 12 }, (_, i) => (
        <TabsContent key={i} value={\`tab-\${i + 1}\`}>Content for tab {i + 1}</TabsContent>
      ))}
    </Tabs>
  );
}`;

export function TabsNestedDemo() {
  return (
    <div className="w-full max-w-lg">
      <Tabs defaultValue="outer-1" className="w-full">
        <TabsList>
          <TabsTrigger value="outer-1">Outer 1</TabsTrigger>
          <TabsTrigger value="outer-2">Outer 2</TabsTrigger>
        </TabsList>
        <TabsContent value="outer-1">
          <Tabs defaultValue="inner-1" className="mt-4">
            <TabsList>
              <TabsTrigger value="inner-1">Inner 1</TabsTrigger>
              <TabsTrigger value="inner-2">Inner 2</TabsTrigger>
            </TabsList>
            <TabsContent value="inner-1">Nested content 1</TabsContent>
            <TabsContent value="inner-2">Nested content 2</TabsContent>
          </Tabs>
        </TabsContent>
        <TabsContent value="outer-2">Outer content 2</TabsContent>
      </Tabs>
    </div>
  );
}

export const tabsNestedCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <Tabs defaultValue="outer-1">
      <TabsList>
        <TabsTrigger value="outer-1">Outer 1</TabsTrigger>
        <TabsTrigger value="outer-2">Outer 2</TabsTrigger>
      </TabsList>
      <TabsContent value="outer-1">
        <Tabs defaultValue="inner-1">
          <TabsList>
            <TabsTrigger value="inner-1">Inner 1</TabsTrigger>
            <TabsTrigger value="inner-2">Inner 2</TabsTrigger>
          </TabsList>
          <TabsContent value="inner-1">Nested content 1</TabsContent>
          <TabsContent value="inner-2">Nested content 2</TabsContent>
        </Tabs>
      </TabsContent>
      <TabsContent value="outer-2">Outer content 2</TabsContent>
    </Tabs>
  );
}`;

export function TabsRTLDemo() {
  return (
    <div dir="rtl" className="w-full max-w-md">
      <Tabs defaultValue="a" dir="rtl">
        <TabsList>
          <TabsTrigger value="a">حساب</TabsTrigger>
          <TabsTrigger value="b">كلمة المرور</TabsTrigger>
        </TabsList>
        <TabsContent value="a">محتوى الحساب</TabsContent>
        <TabsContent value="b">محتوى كلمة المرور</TabsContent>
      </Tabs>
    </div>
  );
}

export const tabsRTLCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@accessly-ui/react";

export default function Example() {
  return (
    <div dir="rtl">
      <Tabs defaultValue="a" dir="rtl">
        <TabsList>
          <TabsTrigger value="a">حساب</TabsTrigger>
          <TabsTrigger value="b">كلمة المرور</TabsTrigger>
        </TabsList>
        <TabsContent value="a">محتوى الحساب</TabsContent>
        <TabsContent value="b">محتوى كلمة المرور</TabsContent>
      </Tabs>
    </div>
  );
}`;

export const tabsStories = [
  { title: "Default", Demo: TabsDefaultDemo, code: tabsDefaultCode },
  {
    title: "Manual Activation",
    Demo: TabsManualActivationDemo,
    code: tabsManualActivationCode,
  },
  { title: "Vertical", Demo: TabsVerticalDemo, code: tabsVerticalCode },
  { title: "Disabled Tabs", Demo: TabsDisabledDemo, code: tabsDisabledCode },
  { title: "Controlled", Demo: TabsControlledDemo, code: tabsControlledCode },
  {
    title: "With Icons and Badges",
    Demo: TabsWithIconsAndBadgesDemo,
    code: tabsWithIconsAndBadgesCode,
  },
  { title: "Loading State", Demo: TabsLoadingStateDemo, code: tabsLoadingStateCode },
  { title: "Error State", Demo: TabsErrorStateDemo, code: tabsErrorStateCode },
  { title: "Scrollable", Demo: TabsScrollableDemo, code: tabsScrollableCode },
  { title: "Nested Tabs", Demo: TabsNestedDemo, code: tabsNestedCode },
  { title: "RTL", Demo: TabsRTLDemo, code: tabsRTLCode },
];

export function TabsDemo() {
  return <TabsDefaultDemo />;
}

export const tabsDemoCode = tabsDefaultCode;
