"use client";

import { useState } from "react";
import {
  User,
  Settings,
  LogOut,
  CreditCard,
  Keyboard,
  Cloud,
  Mail,
  MessageSquare,
  PlusCircle,
  GitGraph,
  Trash2,
  Sun,
  Moon,
  Laptop,
  MoreHorizontal,
} from "lucide-react";
import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@accessly-ui/react";

function UserAvatar({ initials }: { initials: string }) {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-semibold text-white">
      {initials}
    </span>
  );
}

export function DropdownMenuBasicDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={() => console.log("Profile")}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => console.log("Billing")}>
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => console.log("Team")}>Team</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Invite users (disabled)</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const dropdownMenuBasicCode = `import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Invite users (disabled)</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

export function DropdownMenuSubmenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem icon={<Mail size={14} />}>Email</DropdownMenuItem>
            <DropdownMenuItem icon={<MessageSquare size={14} />}>
              Message
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem icon={<PlusCircle size={14} />}>
              More options
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>Team</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const dropdownMenuSubmenuCode = `import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@accessly-ui/react";
import { Mail, MessageSquare, PlusCircle } from "lucide-react";

export default function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem icon={<Mail size={14} />}>Email</DropdownMenuItem>
            <DropdownMenuItem icon={<MessageSquare size={14} />}>Message</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem icon={<PlusCircle size={14} />}>More options</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>Team</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

export function DropdownMenuShortcutsDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem textValue="Profile">
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem textValue="Billing">
          Billing
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem textValue="Settings">
          Settings
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem textValue="Log out">
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const dropdownMenuShortcutsCode = `import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem textValue="Profile">
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem textValue="Billing">
          Billing
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem textValue="Settings">
          Settings
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem textValue="Log out">
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

export function DropdownMenuIconsDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem icon={<User size={14} />}>Profile</DropdownMenuItem>
        <DropdownMenuItem icon={<CreditCard size={14} />}>Billing</DropdownMenuItem>
        <DropdownMenuItem icon={<Settings size={14} />}>Settings</DropdownMenuItem>
        <DropdownMenuItem icon={<Keyboard size={14} />}>
          Keyboard shortcuts
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={<LogOut size={14} />}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const dropdownMenuIconsCode = `import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@accessly-ui/react";
import { User, CreditCard, Settings, Keyboard, LogOut } from "lucide-react";

export default function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem icon={<User size={14} />}>Profile</DropdownMenuItem>
        <DropdownMenuItem icon={<CreditCard size={14} />}>Billing</DropdownMenuItem>
        <DropdownMenuItem icon={<Settings size={14} />}>Settings</DropdownMenuItem>
        <DropdownMenuItem icon={<Keyboard size={14} />}>Keyboard shortcuts</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={<LogOut size={14} />}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

export function DropdownMenuCheckboxesDemo() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">View</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
        >
          Activity bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const dropdownMenuCheckboxesCode = `import { useState } from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@accessly-ui/react";

export default function Example() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">View</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
          Status bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
          Activity bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

export function DropdownMenuCheckboxesIconsDemo() {
  const [cloud, setCloud] = useState(true);
  const [github, setGithub] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">Integrations</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem
          checked={cloud}
          onCheckedChange={setCloud}
          icon={<Cloud size={14} />}
        >
          Cloud sync
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={github}
          onCheckedChange={setGithub}
          icon={<GitGraph size={14} />}
        >
          GitHub sync
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const dropdownMenuCheckboxesIconsCode = `import { useState } from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@accessly-ui/react";
import { Cloud, GitGraph } from "lucide-react";

export default function Example() {
  const [cloud, setCloud] = useState(true);
  const [github, setGithub] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">Integrations</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem
          checked={cloud}
          onCheckedChange={setCloud}
          icon={<Cloud size={14} />}
        >
          Cloud sync
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={github}
          onCheckedChange={setGithub}
          icon={<GitGraph size={14} />}
        >
          GitHub sync
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">Panel position</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const dropdownMenuRadioGroupCode = `import { useState } from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@accessly-ui/react";

export default function Example() {
  const [position, setPosition] = useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">Panel position</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

export function DropdownMenuRadioIconsDemo() {
  const [theme, setTheme] = useState("system");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">Theme</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="light" icon={<Sun size={14} />}>
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark" icon={<Moon size={14} />}>
            Dark
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system" icon={<Laptop size={14} />}>
            System
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const dropdownMenuRadioIconsCode = `import { useState } from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@accessly-ui/react";
import { Sun, Moon, Laptop } from "lucide-react";

export default function Example() {
  const [theme, setTheme] = useState("system");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">Theme</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="light" icon={<Sun size={14} />}>
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark" icon={<Moon size={14} />}>
            Dark
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system" icon={<Laptop size={14} />}>
            System
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

export function DropdownMenuDestructiveDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary" aria-label="More options">
          <MoreHorizontal size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem icon={<User size={14} />}>Edit profile</DropdownMenuItem>
        <DropdownMenuItem icon={<Settings size={14} />}>Preferences</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem destructive icon={<Trash2 size={14} />}>
          Delete account
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const dropdownMenuDestructiveCode = `import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@accessly-ui/react";
import { MoreHorizontal, User, Settings, Trash2 } from "lucide-react";

export default function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary" aria-label="More options">
          <MoreHorizontal size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem icon={<User size={14} />}>Edit profile</DropdownMenuItem>
        <DropdownMenuItem icon={<Settings size={14} />}>Preferences</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem destructive icon={<Trash2 size={14} />}>
          Delete account
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

export function DropdownMenuAvatarDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button
          type="button"
          className="rounded-full focus:ring-2 focus:ring-[var(--accent)] focus:outline-none"
          aria-label="Open user menu"
        >
          <UserAvatar initials="JD" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-[var(--text)]">Jane Doe</span>
            <span className="text-xs font-normal text-[var(--text-muted)]">
              jane@example.com
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={<User size={14} />}>Profile</DropdownMenuItem>
        <DropdownMenuItem icon={<CreditCard size={14} />}>Billing</DropdownMenuItem>
        <DropdownMenuItem icon={<Settings size={14} />}>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={<LogOut size={14} />}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const dropdownMenuAvatarCode = `import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@accessly-ui/react";
import { User, CreditCard, Settings, LogOut } from "lucide-react";

export default function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button type="button" className="rounded-full" aria-label="Open user menu">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-semibold text-white">
            JD
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Jane Doe</span>
            <span className="text-xs text-secondary">jane@example.com</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={<User size={14} />}>Profile</DropdownMenuItem>
        <DropdownMenuItem icon={<CreditCard size={14} />}>Billing</DropdownMenuItem>
        <DropdownMenuItem icon={<Settings size={14} />}>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={<LogOut size={14} />}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

export function DropdownMenuComplexDemo() {
  const [showMinimap, setShowMinimap] = useState(true);
  const [wordWrap, setWordWrap] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">Complex Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>File</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem icon={<PlusCircle size={14} />} textValue="New Document">
            New Document
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem icon={<Cloud size={14} />} textValue="Import File">
            Import File
            <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger icon={<GitGraph size={14} />}>
              Recent Files
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>report-draft.md</DropdownMenuItem>
              <DropdownMenuItem>roadmap.md</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Shared with team</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>design-review.md</DropdownMenuItem>
                  <DropdownMenuItem>q3-notes.md</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>View</DropdownMenuLabel>
        <DropdownMenuCheckboxItem checked={showMinimap} onCheckedChange={setShowMinimap}>
          Show minimap
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={wordWrap} onCheckedChange={setWordWrap}>
          Word wrap
        </DropdownMenuCheckboxItem>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuItem icon={<User size={14} />}>Profile</DropdownMenuItem>
        <DropdownMenuItem icon={<Settings size={14} />}>Preferences</DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          destructive
          icon={<Trash2 size={14} />}
          textValue="Delete Workspace"
        >
          Delete Workspace
          <DropdownMenuShortcut>⇧⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const dropdownMenuComplexCode = `import { useState } from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@accessly-ui/react";
import { PlusCircle, Cloud, GitGraph, User, Settings, Trash2 } from "lucide-react";

export default function Example() {
  const [showMinimap, setShowMinimap] = useState(true);
  const [wordWrap, setWordWrap] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">Complex Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>File</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem icon={<PlusCircle size={14} />} textValue="New Document">
            New Document
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem icon={<Cloud size={14} />} textValue="Import File">
            Import File
            <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger icon={<GitGraph size={14} />}>
              Recent Files
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>report-draft.md</DropdownMenuItem>
              <DropdownMenuItem>roadmap.md</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>View</DropdownMenuLabel>
        <DropdownMenuCheckboxItem checked={showMinimap} onCheckedChange={setShowMinimap}>
          Show minimap
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem destructive icon={<Trash2 size={14} />} textValue="Delete Workspace">
          Delete Workspace
          <DropdownMenuShortcut>⇧⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

export function DropdownMenuRTLDemo() {
  return (
    <div dir="rtl">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="secondary">القائمة</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem icon={<User size={14} />}>الملف الشخصي</DropdownMenuItem>
          <DropdownMenuItem icon={<CreditCard size={14} />}>الفواتير</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem destructive icon={<Trash2 size={14} />}>
            حذف الحساب
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export const dropdownMenuRTLCode = `import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@accessly-ui/react";
import { User, CreditCard, Trash2 } from "lucide-react";

export default function Example() {
  return (
    <div dir="rtl">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="secondary">القائمة</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem icon={<User size={14} />}>الملف الشخصي</DropdownMenuItem>
          <DropdownMenuItem icon={<CreditCard size={14} />}>الفواتير</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem destructive icon={<Trash2 size={14} />}>
            حذف الحساب
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}`;

export const dropdownMenuStories = [
  { title: "Basic", Demo: DropdownMenuBasicDemo, code: dropdownMenuBasicCode },
  { title: "Submenu", Demo: DropdownMenuSubmenuDemo, code: dropdownMenuSubmenuCode },
  {
    title: "Shortcuts",
    Demo: DropdownMenuShortcutsDemo,
    code: dropdownMenuShortcutsCode,
  },
  { title: "Icons", Demo: DropdownMenuIconsDemo, code: dropdownMenuIconsCode },
  {
    title: "Checkboxes",
    Demo: DropdownMenuCheckboxesDemo,
    code: dropdownMenuCheckboxesCode,
  },
  {
    title: "Checkboxes with Icons",
    Demo: DropdownMenuCheckboxesIconsDemo,
    code: dropdownMenuCheckboxesIconsCode,
  },
  {
    title: "Radio Group",
    Demo: DropdownMenuRadioGroupDemo,
    code: dropdownMenuRadioGroupCode,
  },
  {
    title: "Radio with Icons",
    Demo: DropdownMenuRadioIconsDemo,
    code: dropdownMenuRadioIconsCode,
  },
  {
    title: "Destructive",
    Demo: DropdownMenuDestructiveDemo,
    code: dropdownMenuDestructiveCode,
  },
  { title: "Avatar", Demo: DropdownMenuAvatarDemo, code: dropdownMenuAvatarCode },
  { title: "Complex", Demo: DropdownMenuComplexDemo, code: dropdownMenuComplexCode },
  { title: "RTL", Demo: DropdownMenuRTLDemo, code: dropdownMenuRTLCode },
];

export function DropdownMenuDemo() {
  return <DropdownMenuBasicDemo />;
}

export const dropdownMenuDemoCode = dropdownMenuBasicCode;
