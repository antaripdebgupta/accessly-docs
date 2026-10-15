"use client";

import { Folder, File } from "lucide-react";
import { TreeView, TreeItem } from "@accessly-ui/react";

export function TreeViewDefaultDemo() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3">
      <TreeView
        aria-label="Project files"
        defaultExpanded={["src", "components"]}
        className="w-80"
      >
        <TreeItem key="src" value="src" label="src" icon={<Folder size={16} />}>
          <TreeItem
            key="components"
            value="components"
            label="components"
            icon={<Folder size={16} />}
          >
            <TreeItem
              key="Button.tsx"
              value="Button.tsx"
              label="Button.tsx"
              icon={<File size={16} />}
            />
            <TreeItem
              key="Tabs.tsx"
              value="Tabs.tsx"
              label="Tabs.tsx"
              icon={<File size={16} />}
            />
          </TreeItem>
          <TreeItem
            key="index.ts"
            value="index.ts"
            label="index.ts"
            icon={<File size={16} />}
          />
        </TreeItem>
        <TreeItem
          key="package.json"
          value="package.json"
          label="package.json"
          icon={<File size={16} />}
        />
        <TreeItem
          key="README.md"
          value="README.md"
          label="README.md"
          icon={<File size={16} />}
        />
      </TreeView>
    </div>
  );
}

export const treeViewDefaultCode = `import { TreeView, TreeItem } from "@accessly-ui/react";
import { Folder, File } from "lucide-react";

export default function Example() {
  return (
    <TreeView aria-label="Project files" defaultExpanded={["src", "components"]} className="w-80">
      <TreeItem key="src" value="src" label="src" icon={<Folder size={16} />}>
        <TreeItem
          key="components"
          value="components"
          label="components"
          icon={<Folder size={16} />}
        >
          <TreeItem
            key="Button.tsx"
            value="Button.tsx"
            label="Button.tsx"
            icon={<File size={16} />}
          />
          <TreeItem key="Tabs.tsx" value="Tabs.tsx" label="Tabs.tsx" icon={<File size={16} />} />
        </TreeItem>
        <TreeItem key="index.ts" value="index.ts" label="index.ts" icon={<File size={16} />} />
      </TreeItem>
      <TreeItem
        key="package.json"
        value="package.json"
        label="package.json"
        icon={<File size={16} />}
      />
      <TreeItem key="README.md" value="README.md" label="README.md" icon={<File size={16} />} />
    </TreeView>
  );
}`;

export function TreeViewMultiSelectDemo() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3">
      <TreeView
        aria-label="Project files"
        selectionMode="multiple"
        defaultExpanded={["src"]}
        className="w-80"
      >
        <TreeItem key="src" value="src" label="src" icon={<Folder size={16} />}>
          <TreeItem
            key="index.ts"
            value="index.ts"
            label="index.ts"
            icon={<File size={16} />}
          />
          <TreeItem
            key="app.ts"
            value="app.ts"
            label="app.ts"
            icon={<File size={16} />}
          />
        </TreeItem>
        <TreeItem
          key="package.json"
          value="package.json"
          label="package.json"
          icon={<File size={16} />}
        />
      </TreeView>
    </div>
  );
}

export const treeViewMultiSelectCode = `import { TreeView, TreeItem } from "@accessly-ui/react";
import { Folder, File } from "lucide-react";

export default function Example() {
  return (
    <TreeView
      aria-label="Project files"
      selectionMode="multiple"
      defaultExpanded={["src"]}
      className="w-80"
    >
      <TreeItem key="src" value="src" label="src" icon={<Folder size={16} />}>
        <TreeItem key="index.ts" value="index.ts" label="index.ts" icon={<File size={16} />} />
        <TreeItem key="app.ts" value="app.ts" label="app.ts" icon={<File size={16} />} />
      </TreeItem>
      <TreeItem
        key="package.json"
        value="package.json"
        label="package.json"
        icon={<File size={16} />}
      />
    </TreeView>
  );
}`;

export function TreeViewDisabledNodeDemo() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3">
      <TreeView aria-label="Project files" defaultExpanded={["src"]} className="w-80">
        <TreeItem key="src" value="src" label="src" icon={<Folder size={16} />}>
          <TreeItem
            key="locked.ts"
            value="locked.ts"
            label="locked.ts (no access)"
            icon={<File size={16} />}
            disabled
          />
          <TreeItem
            key="index.ts"
            value="index.ts"
            label="index.ts"
            icon={<File size={16} />}
          />
        </TreeItem>
      </TreeView>
    </div>
  );
}

export const treeViewDisabledNodeCode = `import { TreeView, TreeItem } from "@accessly-ui/react";
import { Folder, File } from "lucide-react";

export default function Example() {
  return (
    <TreeView aria-label="Project files" defaultExpanded={["src"]} className="w-80">
      <TreeItem key="src" value="src" label="src" icon={<Folder size={16} />}>
        <TreeItem
          key="locked.ts"
          value="locked.ts"
          label="locked.ts (no access)"
          icon={<File size={16} />}
          disabled
        />
        <TreeItem key="index.ts" value="index.ts" label="index.ts" icon={<File size={16} />} />
      </TreeItem>
    </TreeView>
  );
}`;

export function TreeViewRTLDemo() {
  return (
    <div
      dir="rtl"
      className="w-full max-w-sm rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3"
    >
      <TreeView
        aria-label="ملفات المشروع"
        defaultExpanded={["src", "components"]}
        className="w-80"
      >
        <TreeItem key="src" value="src" label="المصدر" icon={<Folder size={16} />}>
          <TreeItem
            key="components"
            value="components"
            label="المكونات"
            icon={<Folder size={16} />}
          >
            <TreeItem
              key="Button.tsx"
              value="Button.tsx"
              label="Button.tsx"
              icon={<File size={16} />}
            />
            <TreeItem
              key="Tabs.tsx"
              value="Tabs.tsx"
              label="Tabs.tsx"
              icon={<File size={16} />}
            />
          </TreeItem>
          <TreeItem
            key="index.ts"
            value="index.ts"
            label="index.ts"
            icon={<File size={16} />}
          />
        </TreeItem>
        <TreeItem
          key="package.json"
          value="package.json"
          label="package.json"
          icon={<File size={16} />}
        />
      </TreeView>
    </div>
  );
}

export const treeViewRTLCode = `import { TreeView, TreeItem } from "@accessly-ui/react";
import { Folder, File } from "lucide-react";

export default function Example() {
  return (
    <div dir="rtl">
      <TreeView aria-label="ملفات المشروع" defaultExpanded={["src", "components"]} className="w-80">
        <TreeItem key="src" value="src" label="المصدر" icon={<Folder size={16} />}>
          <TreeItem
            key="components"
            value="components"
            label="المكونات"
            icon={<Folder size={16} />}
          >
            <TreeItem
              key="Button.tsx"
              value="Button.tsx"
              label="Button.tsx"
              icon={<File size={16} />}
            />
            <TreeItem key="Tabs.tsx" value="Tabs.tsx" label="Tabs.tsx" icon={<File size={16} />} />
          </TreeItem>
          <TreeItem key="index.ts" value="index.ts" label="index.ts" icon={<File size={16} />} />
        </TreeItem>
        <TreeItem
          key="package.json"
          value="package.json"
          label="package.json"
          icon={<File size={16} />}
        />
      </TreeView>
    </div>
  );
}`;

export const treeViewStories = [
  { title: "Default", Demo: TreeViewDefaultDemo, code: treeViewDefaultCode },
  { title: "Multi-Select", Demo: TreeViewMultiSelectDemo, code: treeViewMultiSelectCode },
  {
    title: "With Disabled Node",
    Demo: TreeViewDisabledNodeDemo,
    code: treeViewDisabledNodeCode,
  },
  { title: "RTL", Demo: TreeViewRTLDemo, code: treeViewRTLCode },
];

export function TreeViewDemo() {
  return <TreeViewDefaultDemo />;
}

export const treeViewDemoCode = treeViewDefaultCode;
