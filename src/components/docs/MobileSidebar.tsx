"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
} from "@accessly-ui/react";
import { gettingStartedNav, componentsNav } from "@/lib/nav-config";
import { SidebarNav } from "./Sidebar";

export function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const sections = pathname.startsWith("/components") ? componentsNav : gettingStartedNav;

  return (
    <div className="border-b border-[var(--border)] px-4 py-2.5 lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-medium text-[var(--text)]"
        aria-haspopup="dialog"
      >
        On this page
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogOverlay visible={open} />
        <DialogContent className="fixed inset-y-0 left-0 w-[85vw] max-w-sm overflow-y-auto rounded-none border-r border-[var(--border)] bg-[var(--canvas)] p-6">
          <DialogHeader>
            <DialogTitle className="sr-only">Navigation</DialogTitle>
            <DialogClose className="absolute top-4 right-4" />
          </DialogHeader>
          <div className="mt-8">
            <SidebarNav sections={sections} onNavigate={() => setOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
