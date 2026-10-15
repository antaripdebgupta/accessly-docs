import { Suspense } from "react";
import { Header } from "@/components/site/Header";
import { MobileSidebar } from "@/components/docs/MobileSidebar";
import { Sidebar } from "@/components/docs/Sidebar";
import { TableOfContents } from "@/components/docs/TableOfContents";

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div
          aria-busy="true"
          className="min-h-screen bg-[var(--canvas)] text-[var(--text)]"
        >
          <div className="h-16 border-b border-[var(--border)] bg-[var(--canvas)]/80" />
          <div className="mx-auto flex w-full max-w-[1400px] flex-1 px-4 sm:px-6 lg:px-8">
            <div className="hidden w-64 shrink-0 border-r border-[var(--border)] lg:block" />
            <main id="main-content" className="min-w-0 flex-1 py-8 lg:px-10" />
            <div className="hidden w-52 shrink-0 xl:block" />
          </div>
        </div>
      }
    >
      <>
        <Header />
        <MobileSidebar />
        <div className="mx-auto flex w-full max-w-[1400px] flex-1 px-4 sm:px-6 lg:px-8">
          <Sidebar />
          <main id="main-content" className="min-w-0 flex-1 py-8 lg:px-10">
            {children}
          </main>
          <TableOfContents />
        </div>
      </>
    </Suspense>
  );
}
