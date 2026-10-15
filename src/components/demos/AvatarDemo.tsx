"use client";

import {
  Avatar,
  AvatarGroup,
  AvatarStatusBadge,
  AvatarDropdown,
  DropdownMenuItem,
} from "@accessly-ui/react";
import { Crown } from "lucide-react";

export function AvatarDefaultDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar src="https://i.pravatar.cc/150?img=1" name="Ada Lovelace" />
      <Avatar name="Grace Hopper" />
      <Avatar />
    </div>
  );
}

export const avatarDefaultCode = `import { Avatar } from "@accessly-ui/react";

export default function Example() {
  return (
    <div className="flex items-center gap-4">
      <Avatar src="https://i.pravatar.cc/150?img=1" name="Ada Lovelace" />
      <Avatar name="Grace Hopper" />
      <Avatar />
    </div>
  );
}`;

export function AvatarSizesDemo() {
  return (
    <div className="flex items-end gap-4">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Avatar
          key={size}
          size={size}
          name="Ada Lovelace"
          src="https://i.pravatar.cc/150?img=1"
        />
      ))}
    </div>
  );
}

export const avatarSizesCode = `import { Avatar } from "@accessly-ui/react";

export default function Example() {
  return (
    <div className="flex items-end gap-4">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Avatar
          key={size}
          size={size}
          name="Ada Lovelace"
          src="https://i.pravatar.cc/150?img=1"
        />
      ))}
    </div>
  );
}`;

export function AvatarBadgeDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar
        name="Ada Lovelace"
        src="https://i.pravatar.cc/150?img=1"
        badge={
          <AvatarStatusBadge status="online" label="Online" className="h-full w-full" />
        }
      />
      <Avatar
        name="Grace Hopper"
        badge={<AvatarStatusBadge status="away" label="Away" className="h-full w-full" />}
      />
      <Avatar
        name="Alan Turing"
        badge={<AvatarStatusBadge status="busy" label="Busy" className="h-full w-full" />}
      />
    </div>
  );
}

export const avatarBadgeCode = `import { Avatar, AvatarStatusBadge } from "@accessly-ui/react";

export default function Example() {
  return (
    <div className="flex items-center gap-4">
      <Avatar
        name="Ada Lovelace"
        src="https://i.pravatar.cc/150?img=1"
        badge={<AvatarStatusBadge status="online" label="Online" className="h-full w-full" />}
      />
      <Avatar
        name="Grace Hopper"
        badge={<AvatarStatusBadge status="away" label="Away" className="h-full w-full" />}
      />
      <Avatar
        name="Alan Turing"
        badge={<AvatarStatusBadge status="busy" label="Busy" className="h-full w-full" />}
      />
    </div>
  );
}`;

export function AvatarBadgeWithIconDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar
        name="Ada Lovelace"
        src="https://i.pravatar.cc/150?img=1"
        size="xl"
        badgeIcon={<Crown aria-hidden="true" className="h-1/2 w-1/2" />}
      />
    </div>
  );
}

export const avatarBadgeWithIconCode = `import { Avatar } from "@accessly-ui/react";
import { Crown } from "lucide-react";

export default function Example() {
  return (
    <div className="flex items-center gap-4">
      <Avatar
        name="Ada Lovelace"
        src="https://i.pravatar.cc/150?img=1"
        size="xl"
        badgeIcon={<Crown aria-hidden="true" className="h-1/2 w-1/2" />}
      />
    </div>
  );
}`;

export function AvatarGroupDemo() {
  return (
    <AvatarGroup aria-label="Project collaborators">
      <Avatar name="Ada Lovelace" src="https://i.pravatar.cc/150?img=1" />
      <Avatar name="Grace Hopper" src="https://i.pravatar.cc/150?img=2" />
      <Avatar name="Alan Turing" src="https://i.pravatar.cc/150?img=3" />
    </AvatarGroup>
  );
}

export const avatarGroupCode = `import { Avatar, AvatarGroup } from "@accessly-ui/react";

export default function Example() {
  return (
    <AvatarGroup aria-label="Project collaborators">
      <Avatar name="Ada Lovelace" src="https://i.pravatar.cc/150?img=1" />
      <Avatar name="Grace Hopper" src="https://i.pravatar.cc/150?img=2" />
      <Avatar name="Alan Turing" src="https://i.pravatar.cc/150?img=3" />
    </AvatarGroup>
  );
}`;

export function AvatarGroupCountDemo() {
  return (
    <AvatarGroup aria-label="Project collaborators" max={3}>
      <Avatar name="Ada Lovelace" src="https://i.pravatar.cc/150?img=1" />
      <Avatar name="Grace Hopper" src="https://i.pravatar.cc/150?img=2" />
      <Avatar name="Alan Turing" src="https://i.pravatar.cc/150?img=3" />
      <Avatar name="Katherine Johnson" />
      <Avatar name="Margaret Hamilton" />
      <Avatar name="Hedy Lamarr" />
    </AvatarGroup>
  );
}

export const avatarGroupCountCode = `import { Avatar, AvatarGroup } from "@accessly-ui/react";

export default function Example() {
  return (
    <AvatarGroup aria-label="Project collaborators" max={3}>
      <Avatar name="Ada Lovelace" src="https://i.pravatar.cc/150?img=1" />
      <Avatar name="Grace Hopper" src="https://i.pravatar.cc/150?img=2" />
      <Avatar name="Alan Turing" src="https://i.pravatar.cc/150?img=3" />
      <Avatar name="Katherine Johnson" />
      <Avatar name="Margaret Hamilton" />
      <Avatar name="Hedy Lamarr" />
    </AvatarGroup>
  );
}`;

export function AvatarGroupWithIconDemo() {
  return (
    <AvatarGroup
      aria-label="Project collaborators"
      max={3}
      overflowIcon={<Crown aria-hidden="true" className="h-4 w-4" />}
    >
      <Avatar name="Ada Lovelace" src="https://i.pravatar.cc/150?img=1" />
      <Avatar name="Grace Hopper" src="https://i.pravatar.cc/150?img=2" />
      <Avatar name="Alan Turing" src="https://i.pravatar.cc/150?img=3" />
      <Avatar name="Katherine Johnson" />
      <Avatar name="Margaret Hamilton" />
    </AvatarGroup>
  );
}

export const avatarGroupWithIconCode = `import { Avatar, AvatarGroup } from "@accessly-ui/react";
import { Crown } from "lucide-react";

export default function Example() {
  return (
    <AvatarGroup
      aria-label="Project collaborators"
      max={3}
      overflowIcon={<Crown aria-hidden="true" className="h-4 w-4" />}
    >
      <Avatar name="Ada Lovelace" src="https://i.pravatar.cc/150?img=1" />
      <Avatar name="Grace Hopper" src="https://i.pravatar.cc/150?img=2" />
      <Avatar name="Alan Turing" src="https://i.pravatar.cc/150?img=3" />
      <Avatar name="Katherine Johnson" />
      <Avatar name="Margaret Hamilton" />
    </AvatarGroup>
  );
}`;

export function AvatarDropdownDemo() {
  return (
    <AvatarDropdown
      triggerLabel="Open account menu for Ada Lovelace"
      name="Ada Lovelace"
      src="https://i.pravatar.cc/150?img=1"
    >
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Sign out</DropdownMenuItem>
    </AvatarDropdown>
  );
}

export const avatarDropdownCode = `import { AvatarDropdown, DropdownMenuItem } from "@accessly-ui/react";

export default function Example() {
  return (
    <AvatarDropdown
      triggerLabel="Open account menu for Ada Lovelace"
      name="Ada Lovelace"
      src="https://i.pravatar.cc/150?img=1"
    >
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Sign out</DropdownMenuItem>
    </AvatarDropdown>
  );
}`;

export function AvatarRTLDemo() {
  return (
    <div dir="rtl" className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Avatar
          name="آدا لوفليس"
          src="https://i.pravatar.cc/150?img=1"
          badge={
            <AvatarStatusBadge status="online" label="متصل" className="h-full w-full" />
          }
        />
      </div>
      <AvatarGroup aria-label="المتعاونون في المشروع" max={3}>
        <Avatar name="آدا لوفليس" src="https://i.pravatar.cc/150?img=1" />
        <Avatar name="غريس هوبر" src="https://i.pravatar.cc/150?img=2" />
        <Avatar name="آلان تورينج" src="https://i.pravatar.cc/150?img=3" />
        <Avatar name="كاثرين جونسون" />
      </AvatarGroup>
    </div>
  );
}

export const avatarRTLCode = `import { Avatar, AvatarGroup, AvatarStatusBadge } from "@accessly-ui/react";

export default function Example() {
  return (
    <div dir="rtl" className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Avatar
          name="آدا لوفليس"
          src="https://i.pravatar.cc/150?img=1"
          badge={<AvatarStatusBadge status="online" label="متصل" className="h-full w-full" />}
        />
      </div>
      <AvatarGroup aria-label="المتعاونون في المشروع" max={3}>
        <Avatar name="آدا لوفليس" src="https://i.pravatar.cc/150?img=1" />
        <Avatar name="غريس هوبر" src="https://i.pravatar.cc/150?img=2" />
        <Avatar name="آلان تورينج" src="https://i.pravatar.cc/150?img=3" />
        <Avatar name="كاثرين جونسون" />
      </AvatarGroup>
    </div>
  );
}`;

export const avatarStories = [
  { title: "Default", Demo: AvatarDefaultDemo, code: avatarDefaultCode },
  { title: "Sizes", Demo: AvatarSizesDemo, code: avatarSizesCode },
  { title: "Badge", Demo: AvatarBadgeDemo, code: avatarBadgeCode },
  {
    title: "Badge with Icon",
    Demo: AvatarBadgeWithIconDemo,
    code: avatarBadgeWithIconCode,
  },
  { title: "Group", Demo: AvatarGroupDemo, code: avatarGroupCode },
  { title: "Group with Count", Demo: AvatarGroupCountDemo, code: avatarGroupCountCode },
  {
    title: "Group with Icon",
    Demo: AvatarGroupWithIconDemo,
    code: avatarGroupWithIconCode,
  },
  { title: "Dropdown", Demo: AvatarDropdownDemo, code: avatarDropdownCode },
  { title: "RTL", Demo: AvatarRTLDemo, code: avatarRTLCode },
];

export function AvatarDemo() {
  return <AvatarBadgeDemo />;
}

export const avatarDemoCode = avatarBadgeCode;
