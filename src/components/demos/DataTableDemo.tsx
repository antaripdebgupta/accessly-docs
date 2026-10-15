"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, Clock } from "lucide-react";
import {
  DataTable,
  DataTableHeader,
  DataTableBody,
  type DataTableColumn,
} from "@accessly-ui/react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "invited" | "suspended";
  joined: string;
}

const USERS: User[] = [
  {
    id: "1",
    name: "Jane Doe",
    email: "jane@example.com",
    role: "Admin",
    status: "active",
    joined: "2024-01-15",
  },
  {
    id: "2",
    name: "Sam Rivera",
    email: "sam@example.com",
    role: "Editor",
    status: "invited",
    joined: "2024-03-02",
  },
  {
    id: "3",
    name: "Alex Kim",
    email: "alex@example.com",
    role: "Viewer",
    status: "active",
    joined: "2023-11-20",
  },
  {
    id: "4",
    name: "Priya Patel",
    email: "priya@example.com",
    role: "Editor",
    status: "suspended",
    joined: "2024-02-10",
  },
  {
    id: "5",
    name: "Chris Vance",
    email: "chris@example.com",
    role: "Viewer",
    status: "active",
    joined: "2024-04-18",
  },
  {
    id: "6",
    name: "Morgan Diaz",
    email: "morgan@example.com",
    role: "Admin",
    status: "active",
    joined: "2023-09-05",
  },
  {
    id: "7",
    name: "Taylor Wu",
    email: "taylor@example.com",
    role: "Viewer",
    status: "invited",
    joined: "2024-05-01",
  },
  {
    id: "8",
    name: "Jordan Ng",
    email: "jordan@example.com",
    role: "Editor",
    status: "active",
    joined: "2024-01-30",
  },
];

const baseColumns: DataTableColumn<User>[] = [
  {
    id: "name",
    header: "Name",
    cell: (row) => row.name,
    sortable: true,
    sortValue: (row) => row.name,
  },
  {
    id: "email",
    header: "Email",
    cell: (row) => row.email,
    sortable: true,
    sortValue: (row) => row.email,
  },
  {
    id: "role",
    header: "Role",
    cell: (row) => row.role,
    sortable: true,
    sortValue: (row) => row.role,
  },
];

export function DataTableDefaultDemo() {
  return (
    <div className="w-full overflow-x-auto">
      <DataTable
        data={USERS}
        columns={baseColumns}
        getRowId={(row) => row.id}
        caption="Users"
      >
        <DataTableHeader />
        <DataTableBody />
      </DataTable>
    </div>
  );
}

export const dataTableDefaultCode = `import {
  DataTable,
  DataTableHeader,
  DataTableBody,
  type DataTableColumn,
} from "@accessly-ui/react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const USERS: User[] = [
  { id: "1", name: "Jane Doe", email: "jane@example.com", role: "Admin" },
  { id: "2", name: "Sam Rivera", email: "sam@example.com", role: "Editor" },
];

const columns: DataTableColumn<User>[] = [
  { id: "name", header: "Name", cell: (row) => row.name, sortable: true, sortValue: (row) => row.name },
  { id: "email", header: "Email", cell: (row) => row.email, sortable: true, sortValue: (row) => row.email },
  { id: "role", header: "Role", cell: (row) => row.role, sortable: true, sortValue: (row) => row.role },
];

export default function Example() {
  return (
    <DataTable data={USERS} columns={columns} getRowId={(row) => row.id} caption="Users">
      <DataTableHeader />
      <DataTableBody />
    </DataTable>
  );
}`;

export function DataTableSortableDemo() {
  return (
    <div className="w-full space-y-2 overflow-x-auto">
      <p className="text-sm text-[var(--text-muted)]">
        Click a column header to sort — cycles asc → desc → unsorted.
      </p>
      <DataTable
        data={USERS}
        columns={baseColumns}
        getRowId={(row) => row.id}
        caption="Sortable users table"
      >
        <DataTableHeader />
        <DataTableBody />
      </DataTable>
    </div>
  );
}

export const dataTableSortableCode = `import {
  DataTable,
  DataTableHeader,
  DataTableBody,
  type DataTableColumn,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <DataTable
      data={USERS}
      columns={baseColumns}
      getRowId={(row) => row.id}
      caption="Sortable users table"
    >
      <DataTableHeader />
      <DataTableBody />
    </DataTable>
  );
}`;

export function DataTableRowSelectionDemo() {
  const [data] = useState(USERS);
  return (
    <div className="w-full overflow-x-auto">
      <DataTable
        data={data}
        columns={baseColumns}
        getRowId={(row) => row.id}
        caption="Selectable users table"
        selectable
      >
        <DataTableHeader />
        <DataTableBody />
      </DataTable>
    </div>
  );
}

export const dataTableRowSelectionCode = `import {
  DataTable,
  DataTableHeader,
  DataTableBody,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <DataTable
      data={USERS}
      columns={baseColumns}
      getRowId={(row) => row.id}
      caption="Selectable users table"
      selectable
    >
      <DataTableHeader />
      <DataTableBody />
    </DataTable>
  );
}`;

export function DataTablePaginationDemo() {
  return (
    <div className="w-full overflow-x-auto">
      <DataTable
        data={USERS}
        columns={baseColumns}
        getRowId={(row) => row.id}
        caption="Paginated users table"
        pageSize={3}
      >
        <DataTableHeader />
        <DataTableBody />
      </DataTable>
    </div>
  );
}

export const dataTablePaginationCode = `import {
  DataTable,
  DataTableHeader,
  DataTableBody,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <DataTable
      data={USERS}
      columns={baseColumns}
      getRowId={(row) => row.id}
      caption="Paginated users table"
      pageSize={3}
    >
      <DataTableHeader />
      <DataTableBody />
    </DataTable>
  );
}`;

export function DataTableStickyHeaderDemo() {
  return (
    <div className="max-h-64 w-full overflow-y-auto rounded-xl border border-[var(--border)]">
      <DataTable
        data={[...USERS, ...USERS.map((u) => ({ ...u, id: `${u.id}-b` }))]}
        columns={baseColumns}
        getRowId={(row) => row.id}
        caption="Users table with a sticky header"
        className="[&_thead]:sticky [&_thead]:top-0 [&_thead]:z-10 [&_thead]:bg-[var(--surface)]"
      >
        <DataTableHeader />
        <DataTableBody />
      </DataTable>
    </div>
  );
}

export const dataTableStickyHeaderCode = `import {
  DataTable,
  DataTableHeader,
  DataTableBody,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <div className="max-h-64 overflow-y-auto rounded-xl border border-border">
      <DataTable
        data={USERS}
        columns={baseColumns}
        getRowId={(row) => row.id}
        caption="Users table with a sticky header"
        className="[&_thead]:sticky [&_thead]:top-0 [&_thead]:z-10 [&_thead]:bg-surface"
      >
        <DataTableHeader />
        <DataTableBody />
      </DataTable>
    </div>
  );
}`;

export function DataTableExpandableRowsDemo() {
  return (
    <div className="w-full overflow-x-auto">
      <DataTable
        data={USERS}
        columns={baseColumns}
        getRowId={(row) => row.id}
        caption="Users table with expandable rows"
        expandable
      >
        <DataTableHeader />
        <DataTableBody<User>
          renderExpanded={(row) => (
            <div className="text-sm text-[var(--text-muted)]">
              <p>
                <span className="font-medium text-[var(--text)]">Joined:</span>{" "}
                {row.joined}
              </p>
              <p>
                <span className="font-medium text-[var(--text)]">Status:</span>{" "}
                {row.status}
              </p>
            </div>
          )}
        />
      </DataTable>
    </div>
  );
}

export const dataTableExpandableRowsCode = `import {
  DataTable,
  DataTableHeader,
  DataTableBody,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <DataTable
      data={USERS}
      columns={baseColumns}
      getRowId={(row) => row.id}
      caption="Users table with expandable rows"
      expandable
    >
      <DataTableHeader />
      <DataTableBody<User>
        renderExpanded={(row) => (
          <div className="text-sm text-text-secondary">
            <p>
              <span className="font-medium text-text-primary">Joined:</span> {row.joined}
            </p>
            <p>
              <span className="font-medium text-text-primary">Status:</span> {row.status}
            </p>
          </div>
        )}
      />
    </DataTable>
  );
}`;

export function DataTableLoadingStateDemo() {
  return (
    <div className="w-full overflow-x-auto">
      <DataTable
        data={[]}
        columns={baseColumns}
        getRowId={(row) => row.id}
        caption="Loading users table"
        loading
      >
        <DataTableHeader />
        <DataTableBody />
      </DataTable>
    </div>
  );
}

export const dataTableLoadingStateCode = `import {
  DataTable,
  DataTableHeader,
  DataTableBody,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <DataTable
      data={[]}
      columns={baseColumns}
      getRowId={(row) => row.id}
      caption="Loading users table"
      loading
    >
      <DataTableHeader />
      <DataTableBody />
    </DataTable>
  );
}`;

export function DataTableEmptyStateDemo() {
  return (
    <div className="w-full overflow-x-auto">
      <DataTable
        data={[]}
        columns={baseColumns}
        getRowId={(row) => row.id}
        caption="Empty users table"
      >
        <DataTableHeader />
        <DataTableBody emptyMessage="No users match your filters." />
      </DataTable>
    </div>
  );
}

export const dataTableEmptyStateCode = `import {
  DataTable,
  DataTableHeader,
  DataTableBody,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <DataTable
      data={[]}
      columns={baseColumns}
      getRowId={(row) => row.id}
      caption="Empty users table"
    >
      <DataTableHeader />
      <DataTableBody emptyMessage="No users match your filters." />
    </DataTable>
  );
}`;

const statusStyles: Record<
  User["status"],
  { icon: typeof CheckCircle2; className: string; label: string }
> = {
  active: {
    icon: CheckCircle2,
    className: "text-emerald-600 dark:text-emerald-400",
    label: "Active",
  },
  invited: {
    icon: Clock,
    className: "text-amber-600 dark:text-amber-400",
    label: "Invited",
  },
  suspended: {
    icon: XCircle,
    className: "text-rose-600 dark:text-rose-400",
    label: "Suspended",
  },
};

export function DataTableCustomCellsDemo() {
  const columns: DataTableColumn<User>[] = [
    ...baseColumns,
    {
      id: "status",
      header: "Status",
      sortable: true,
      sortValue: (row) => row.status,
      cell: (row) => {
        const { icon: Icon, className, label } = statusStyles[row.status];
        return (
          <span className={`inline-flex items-center gap-1.5 font-medium ${className}`}>
            <Icon size={14} aria-hidden="true" />
            {label}
          </span>
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      align: "right",
      cell: (row) => (
        <button
          type="button"
          onClick={() => alert(`Edit ${row.name}`)}
          className="rounded-lg border border-[var(--border)] px-2 py-1 text-xs text-[var(--text)] hover:bg-[var(--surface-raised)]"
        >
          Edit
        </button>
      ),
    },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <DataTable
        data={USERS}
        columns={columns}
        getRowId={(row) => row.id}
        caption="Users table with custom cell renderers"
      >
        <DataTableHeader />
        <DataTableBody />
      </DataTable>
    </div>
  );
}

export const dataTableCustomCellsCode = `import {
  DataTable,
  DataTableHeader,
  DataTableBody,
  type DataTableColumn,
} from "@accessly-ui/react";
import { CheckCircle2, Clock, XCircle } from "lucide-react";

export default function Example() {
  const columns: DataTableColumn<User>[] = [
    ...baseColumns,
    {
      id: "status",
      header: "Status",
      sortable: true,
      sortValue: (row) => row.status,
      cell: (row) => (
        <span className="inline-flex items-center gap-1.5 font-medium">
          <CheckCircle2 size={14} />
          {row.status}
        </span>
      ),
    },
    {
      id: "actions",
      header: "Actions",
      align: "right",
      cell: (row) => (
        <button
          type="button"
          onClick={() => alert(\`Edit \${row.name}\`)}
          className="rounded-md border border-border px-2 py-1 text-xs"
        >
          Edit
        </button>
      ),
    },
  ];

  return (
    <DataTable
      data={USERS}
      columns={columns}
      getRowId={(row) => row.id}
      caption="Users table with custom cell renderers"
    >
      <DataTableHeader />
      <DataTableBody />
    </DataTable>
  );
}`;

export function DataTableDisabledDemo() {
  return (
    <div
      aria-disabled="true"
      className="pointer-events-none w-full overflow-x-auto opacity-50"
    >
      <DataTable
        data={USERS.slice(0, 3)}
        columns={baseColumns}
        getRowId={(row) => row.id}
        caption="Disabled users table"
        selectable
      >
        <DataTableHeader />
        <DataTableBody />
      </DataTable>
    </div>
  );
}

export const dataTableDisabledCode = `import {
  DataTable,
  DataTableHeader,
  DataTableBody,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <div aria-disabled="true" className="pointer-events-none opacity-50">
      <DataTable
        data={USERS.slice(0, 3)}
        columns={baseColumns}
        getRowId={(row) => row.id}
        caption="Disabled users table"
        selectable
      >
        <DataTableHeader />
        <DataTableBody />
      </DataTable>
    </div>
  );
}`;

const USERS_AR: User[] = [
  {
    id: "1",
    name: "سارة أحمد",
    email: "sara@example.com",
    role: "مسؤول",
    status: "active",
    joined: "2024-01-15",
  },
  {
    id: "2",
    name: "خالد محمد",
    email: "khaled@example.com",
    role: "محرر",
    status: "invited",
    joined: "2024-03-02",
  },
  {
    id: "3",
    name: "ليلى حسن",
    email: "layla@example.com",
    role: "مشاهد",
    status: "active",
    joined: "2023-11-20",
  },
];

export function DataTableRTLDemo() {
  const columns: DataTableColumn<User>[] = [
    {
      id: "name",
      header: "الاسم",
      cell: (row) => row.name,
      sortable: true,
      sortValue: (row) => row.name,
    },
    { id: "email", header: "البريد الإلكتروني", cell: (row) => row.email },
    { id: "role", header: "الدور", cell: (row) => row.role },
  ];

  return (
    <div dir="rtl" className="w-full overflow-x-auto">
      <DataTable
        data={USERS_AR}
        columns={columns}
        getRowId={(row) => row.id}
        caption="جدول المستخدمين"
      >
        <DataTableHeader />
        <DataTableBody />
      </DataTable>
    </div>
  );
}

export const dataTableRTLCode = `import {
  DataTable,
  DataTableHeader,
  DataTableBody,
  type DataTableColumn,
} from "@accessly-ui/react";

export default function Example() {
  const columns: DataTableColumn<User>[] = [
    {
      id: "name",
      header: "الاسم",
      cell: (row) => row.name,
      sortable: true,
      sortValue: (row) => row.name,
    },
    { id: "email", header: "البريد الإلكتروني", cell: (row) => row.email },
    { id: "role", header: "الدور", cell: (row) => row.role },
  ];

  return (
    <div dir="rtl">
      <DataTable
        data={USERS_AR}
        columns={columns}
        getRowId={(row) => row.id}
        caption="جدول المستخدمين"
      >
        <DataTableHeader />
        <DataTableBody />
      </DataTable>
    </div>
  );
}`;

export const dataTableStories = [
  { title: "Default", Demo: DataTableDefaultDemo, code: dataTableDefaultCode },
  { title: "Sortable", Demo: DataTableSortableDemo, code: dataTableSortableCode },
  {
    title: "Row Selection",
    Demo: DataTableRowSelectionDemo,
    code: dataTableRowSelectionCode,
  },
  { title: "Pagination", Demo: DataTablePaginationDemo, code: dataTablePaginationCode },
  {
    title: "Sticky Header",
    Demo: DataTableStickyHeaderDemo,
    code: dataTableStickyHeaderCode,
  },
  {
    title: "Expandable Rows",
    Demo: DataTableExpandableRowsDemo,
    code: dataTableExpandableRowsCode,
  },
  {
    title: "Loading State",
    Demo: DataTableLoadingStateDemo,
    code: dataTableLoadingStateCode,
  },
  { title: "Empty State", Demo: DataTableEmptyStateDemo, code: dataTableEmptyStateCode },
  {
    title: "Custom Cells",
    Demo: DataTableCustomCellsDemo,
    code: dataTableCustomCellsCode,
  },
  { title: "Disabled", Demo: DataTableDisabledDemo, code: dataTableDisabledCode },
  { title: "RTL", Demo: DataTableRTLDemo, code: dataTableRTLCode },
];

export function DataTableDemo() {
  return <DataTableDefaultDemo />;
}

export const dataTableDemoCode = dataTableDefaultCode;
