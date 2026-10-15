"use client";

import { useState } from "react";
import { Pagination } from "@accessly-ui/react";

export function PaginationDefaultDemo() {
  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-sm text-[var(--text-muted)]">Active Page: {page}</span>
      <Pagination currentPage={page} pageCount={5} onPageChange={setPage} />
    </div>
  );
}

export const paginationDefaultCode = `import { useState } from "react";
import { Pagination } from "@accessly-ui/react";

export default function Example() {
  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm">Active Page: {page}</p>
      <Pagination currentPage={page} pageCount={5} onPageChange={setPage} />
    </div>
  );
}`;

export function PaginationWithEllipsisDemo() {
  const [page, setPage] = useState(5);

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-sm text-[var(--text-muted)]">Active Page: {page} / 10</span>
      <Pagination
        currentPage={page}
        pageCount={10}
        onPageChange={setPage}
        siblingCount={1}
        boundaryCount={1}
      />
    </div>
  );
}

export const paginationWithEllipsisCode = `import { useState } from "react";
import { Pagination } from "@accessly-ui/react";

export default function Example() {
  const [page, setPage] = useState(5);

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm">Active Page: {page} / 10</p>
      <Pagination
        currentPage={page}
        pageCount={10}
        onPageChange={setPage}
        siblingCount={1}
        boundaryCount={1}
      />
    </div>
  );
}`;

export function PaginationCustomBoundariesDemo() {
  const [page, setPage] = useState(8);

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-sm text-[var(--text-muted)]">
        Active Page: {page} (2 boundaries, 2 siblings)
      </span>
      <Pagination
        currentPage={page}
        pageCount={15}
        onPageChange={setPage}
        siblingCount={2}
        boundaryCount={2}
      />
    </div>
  );
}

export const paginationCustomBoundariesCode = `import { useState } from "react";
import { Pagination } from "@accessly-ui/react";

export default function Example() {
  const [page, setPage] = useState(8);

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm">Active Page: {page} (2 boundaries, 2 siblings)</p>
      <Pagination
        currentPage={page}
        pageCount={15}
        onPageChange={setPage}
        siblingCount={2}
        boundaryCount={2}
      />
    </div>
  );
}`;

const MOCK_ITEMS = [
  {
    id: 1,
    title: "Introduction to Accessibility",
    category: "A11y",
    desc: "Learn the core principles of web accessibility.",
  },
  {
    id: 2,
    title: "WAI-ARIA Roles Demystified",
    category: "A11y",
    desc: "Understanding when and how to use ARIA roles.",
  },
  {
    id: 3,
    title: "Keyboard Navigation Basics",
    category: "UX",
    desc: "Designing interfaces navigable solely by keyboard.",
  },
  {
    id: 4,
    title: "Color Contrast Guidelines",
    category: "Design",
    desc: "Satisfying WCAG contrast ratios for text and UI.",
  },
  {
    id: 5,
    title: "Screen Reader Testing",
    category: "QA",
    desc: "Setting up and using popular screen readers.",
  },
  {
    id: 6,
    title: "Semantic HTML Elements",
    category: "HTML",
    desc: "Why using standard HTML elements is key.",
  },
  {
    id: 7,
    title: "Focus Ring Strategies",
    category: "CSS",
    desc: "Styling focus rings without ruining UX.",
  },
  {
    id: 8,
    title: "Accessible Form Controls",
    category: "Forms",
    desc: "Creating forms that work for everyone.",
  },
  {
    id: 9,
    title: "Dynamic Content & Live Regions",
    category: "React",
    desc: "Using aria-live to announce page changes.",
  },
  {
    id: 10,
    title: "Building Custom Comboboxes",
    category: "Components",
    desc: "Step-by-step accessible combobox patterns.",
  },
];

export function PaginationPaginatedContentDemo() {
  const [page, setPage] = useState(1);
  const [displayPage, setDisplayPage] = useState(1);
  const [visible, setVisible] = useState(true);
  const itemsPerPage = 3;
  const pageCount = Math.ceil(MOCK_ITEMS.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setVisible(false);
    setTimeout(() => {
      setDisplayPage(newPage);
      setPage(newPage);
      setVisible(true);
    }, 120);
  };

  const startIndex = (displayPage - 1) * itemsPerPage;
  const currentItems = MOCK_ITEMS.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full max-w-md space-y-6">
      <div
        className={`space-y-3 transition-[opacity,transform] duration-200 ease-out ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-2 scale-95 opacity-0"
        }`}
      >
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-xs"
          >
            <span className="rounded bg-[var(--accent-subtle)] px-2 py-0.5 text-xs font-semibold text-[var(--accent)]">
              {item.category}
            </span>
            <h4 className="mt-2 text-sm font-medium text-[var(--text)]">{item.title}</h4>
            <p className="mt-1 text-xs text-[var(--text-muted)]">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-[var(--border)] pt-4">
        <p className="text-xs text-[var(--text-muted)]">
          Showing {startIndex + 1}-
          {Math.min(startIndex + itemsPerPage, MOCK_ITEMS.length)} of {MOCK_ITEMS.length}
        </p>
        <Pagination
          currentPage={page}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export const paginationPaginatedContentCode = `import { useState } from "react";
import { Pagination } from "@accessly-ui/react";

const MOCK_ITEMS = [
  { id: 1, title: "Introduction to Accessibility", category: "A11y", desc: "Learn core principles." },
  { id: 2, title: "WAI-ARIA Roles Demystified", category: "A11y", desc: "Understanding roles." },
  { id: 3, title: "Keyboard Navigation Basics", category: "UX", desc: "Designing keyboard flows." },
  { id: 4, title: "Color Contrast Guidelines", category: "Design", desc: "Satisfying WCAG ratios." },
];

export default function Example() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;
  const pageCount = Math.ceil(MOCK_ITEMS.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = MOCK_ITEMS.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-md space-y-6">
      <div className="space-y-3">
        {currentItems.map((item) => (
          <div key={item.id} className="rounded-xl border border-border bg-surface p-4">
            <span className="rounded bg-accent-subtle px-2 py-0.5 text-xs font-semibold text-accent">
              {item.category}
            </span>
            <h4 className="mt-2 text-sm font-medium">{item.title}</h4>
            <p className="mt-1 text-xs text-secondary">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-border pt-4">
        <p className="text-xs text-secondary">
          Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, MOCK_ITEMS.length)} of {MOCK_ITEMS.length}
        </p>
        <Pagination currentPage={page} pageCount={pageCount} onPageChange={setPage} />
      </div>
    </div>
  );
}`;

export const paginationStories = [
  { title: "Default", Demo: PaginationDefaultDemo, code: paginationDefaultCode },
  {
    title: "With Ellipsis",
    Demo: PaginationWithEllipsisDemo,
    code: paginationWithEllipsisCode,
  },
  {
    title: "Custom Boundaries",
    Demo: PaginationCustomBoundariesDemo,
    code: paginationCustomBoundariesCode,
  },
  {
    title: "Paginated Content",
    Demo: PaginationPaginatedContentDemo,
    code: paginationPaginatedContentCode,
  },
];

export function PaginationDemo() {
  return <PaginationDefaultDemo />;
}

export const paginationDemoCode = paginationDefaultCode;
