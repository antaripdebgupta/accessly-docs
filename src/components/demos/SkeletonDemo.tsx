"use client";

import { useState, useEffect } from "react";
import {
  Skeleton,
  SkeletonGroup,
  SkeletonAvatar,
  SkeletonText,
  SkeletonCard,
  SkeletonForm,
  SkeletonTable,
} from "@accessly-ui/react";

export function SkeletonDefaultDemo() {
  return (
    <div className="flex w-64 flex-col gap-3">
      <Skeleton shape="rect" className="h-24 w-full" />
      <Skeleton shape="text" width="80%" />
      <Skeleton shape="text" width="60%" />
    </div>
  );
}

export const skeletonDefaultCode = `import { Skeleton } from "@accessly-ui/react";

export default function Example() {
  return (
    <div className="flex w-64 flex-col gap-3">
      <Skeleton shape="rect" className="h-24 w-full" />
      <Skeleton shape="text" width="80%" />
      <Skeleton shape="text" width="60%" />
    </div>
  );
}`;

export function SkeletonAvatarDemo() {
  return (
    <div className="flex items-center gap-3">
      <SkeletonAvatar size="xs" />
      <SkeletonAvatar size="sm" />
      <SkeletonAvatar size="md" />
      <SkeletonAvatar size="lg" />
      <SkeletonAvatar size="xl" />
    </div>
  );
}

export const skeletonAvatarCode = `import { SkeletonAvatar } from "@accessly-ui/react";

export default function Example() {
  return (
    <div className="flex items-center gap-3">
      <SkeletonAvatar size="xs" />
      <SkeletonAvatar size="sm" />
      <SkeletonAvatar size="md" />
      <SkeletonAvatar size="lg" />
      <SkeletonAvatar size="xl" />
    </div>
  );
}`;

export function SkeletonCardDemo() {
  return <SkeletonCard />;
}

export const skeletonCardCode = `import { SkeletonCard } from "@accessly-ui/react";

export default function Example() {
  return <SkeletonCard />;
}`;

export function SkeletonTextDemo() {
  return (
    <div className="w-80">
      <SkeletonText lines={4} lastLineWidth="45%" />
    </div>
  );
}

export const skeletonTextCode = `import { SkeletonText } from "@accessly-ui/react";

export default function Example() {
  return (
    <div className="w-80">
      <SkeletonText lines={4} lastLineWidth="45%" />
    </div>
  );
}`;

export function SkeletonFormDemo() {
  return <SkeletonForm fields={4} />;
}

export const skeletonFormCode = `import { SkeletonForm } from "@accessly-ui/react";

export default function Example() {
  return <SkeletonForm fields={4} />;
}`;

export function SkeletonTableDemo() {
  return <SkeletonTable rows={5} columns={4} />;
}

export const skeletonTableCode = `import { SkeletonTable } from "@accessly-ui/react";

export default function Example() {
  return <SkeletonTable rows={5} columns={4} />;
}`;

export function SkeletonLoadingToLoadedDemo() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <SkeletonGroup loading={loading} label="Loading profile" fallback={<SkeletonCard />}>
      <div className="w-full max-w-sm rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/acl/400/160"
          alt=""
          className="mb-4 h-40 w-full rounded-lg object-cover"
        />
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-[var(--accent-subtle)]" />
          <div>
            <p className="font-medium text-[var(--text)]">Ada Lovelace</p>
            <p className="text-xs text-[var(--text-muted)]">Software Engineer</p>
          </div>
        </div>
      </div>
    </SkeletonGroup>
  );
}

export const skeletonLoadingToLoadedCode = `import { useState, useEffect } from "react";
import { SkeletonGroup, SkeletonCard } from "@accessly-ui/react";

export default function Example() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <SkeletonGroup loading={loading} label="Loading profile" fallback={<SkeletonCard />}>
      <div className="w-full max-w-sm rounded-xl border border-border bg-surface p-4">
        <img
          src="https://picsum.photos/seed/acl/400/160"
          alt=""
          className="mb-4 h-40 w-full rounded-lg object-cover"
        />
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-accent-subtle" />
          <div>
            <p className="font-medium text-text-primary">Ada Lovelace</p>
            <p className="text-xs text-text-secondary">Software Engineer</p>
          </div>
        </div>
      </div>
    </SkeletonGroup>
  );
}`;

export function SkeletonActiveAnimationDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm font-medium text-[var(--text-muted)]">
          Shimmer sweep — actively animating
        </p>
        <div className="flex w-80 flex-col gap-3">
          <Skeleton shape="rect" className="h-32 w-full" />
          <div className="flex items-center gap-3">
            <SkeletonAvatar size="md" />
            <div className="flex-1 space-y-2">
              <Skeleton shape="text" width="70%" />
              <Skeleton shape="text" width="45%" height={12} />
            </div>
          </div>
          <SkeletonText lines={3} lastLineWidth="55%" />
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-[var(--text-muted)]">
          Reduced-motion equivalent (static, animation removed)
        </p>
        <div className="flex w-80 flex-col gap-3 opacity-70 motion-reduce:opacity-70 [&_*]:before:!hidden [&_*]:before:!animate-none">
          <Skeleton shape="rect" className="h-32 w-full" />
          <div className="flex items-center gap-3">
            <SkeletonAvatar size="md" />
            <div className="flex-1 space-y-2">
              <Skeleton shape="text" width="70%" />
              <Skeleton shape="text" width="45%" height={12} />
            </div>
          </div>
          <SkeletonText lines={3} lastLineWidth="55%" />
        </div>
      </div>
    </div>
  );
}

export const skeletonActiveAnimationCode = `import { Skeleton, SkeletonAvatar, SkeletonText } from "@accessly-ui/react";

export default function Example() {
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm font-medium">Shimmer sweep — actively animating</p>
        <div className="flex w-80 flex-col gap-3">
          <Skeleton shape="rect" className="h-32 w-full" />
          <div className="flex items-center gap-3">
            <SkeletonAvatar size="md" />
            <div className="flex-1 space-y-2">
              <Skeleton shape="text" width="70%" />
              <Skeleton shape="text" width="45%" height={12} />
            </div>
          </div>
          <SkeletonText lines={3} lastLineWidth="55%" />
        </div>
      </div>
    </div>
  );
}`;

export function SkeletonRTLDemo() {
  return (
    <div dir="rtl" className="space-y-6">
      <SkeletonCard />
      <div className="max-w-md">
        <SkeletonForm fields={3} />
      </div>
    </div>
  );
}

export const skeletonRTLCode = `import { SkeletonCard, SkeletonForm } from "@accessly-ui/react";

export default function Example() {
  return (
    <div dir="rtl" className="space-y-6">
      <SkeletonCard />
      <div className="max-w-md">
        <SkeletonForm fields={3} />
      </div>
    </div>
  );
}`;

export const skeletonStories = [
  { title: "Default", Demo: SkeletonDefaultDemo, code: skeletonDefaultCode },
  { title: "Avatar", Demo: SkeletonAvatarDemo, code: skeletonAvatarCode },
  { title: "Card", Demo: SkeletonCardDemo, code: skeletonCardCode },
  { title: "Text", Demo: SkeletonTextDemo, code: skeletonTextCode },
  { title: "Form", Demo: SkeletonFormDemo, code: skeletonFormCode },
  { title: "Table", Demo: SkeletonTableDemo, code: skeletonTableCode },
  {
    title: "Loading to Loaded Transition",
    Demo: SkeletonLoadingToLoadedDemo,
    code: skeletonLoadingToLoadedCode,
  },
  {
    title: "Active Animation",
    Demo: SkeletonActiveAnimationDemo,
    code: skeletonActiveAnimationCode,
  },
  { title: "RTL", Demo: SkeletonRTLDemo, code: skeletonRTLCode },
];

export function SkeletonDemo() {
  return <SkeletonCardDemo />;
}

export const skeletonDemoCode = skeletonCardCode;
