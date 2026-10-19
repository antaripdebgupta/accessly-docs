"use client";

import { Skeleton } from "@accessly-ui/react";
import { DocArticle } from "@/components/docs/DocArticle";

export default function ComponentLoading() {
  return (
    <DocArticle size="default" aria-busy="true">
      <header className="border-b border-[var(--border)] pb-8">
        <Skeleton shape="rect" className="h-10 w-2/3 rounded-lg" />
        <Skeleton shape="text" width="80%" className="mt-4 h-5" />
      </header>

      <section className="mt-8">
        <Skeleton shape="text" width="80px" className="h-6" />
        <Skeleton shape="rect" className="mt-2 h-16 w-full rounded-xl" />
      </section>

      <section className="mt-10 space-y-4">
        <Skeleton shape="rect" className="h-64 w-full rounded-xl" />
      </section>

      <section className="mt-12 space-y-3">
        <Skeleton shape="text" width="200px" className="h-6" />
        <Skeleton shape="rect" className="h-40 w-full rounded-xl" />
      </section>
    </DocArticle>
  );
}
