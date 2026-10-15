"use client";

import { useState, type ReactNode } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@accessly-ui/react";
import { CodeBlock } from "@/components/mdx/CodeBlock";

export interface ComponentPreviewProps {
  title?: string;
  code: string;
  language?: string;
  children: ReactNode;
  className?: string;
}

export function ComponentPreview({
  title,
  code,
  language = "tsx",
  children,
  className = "",
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <div
      className={`my-8 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-xs ${className}`}
    >
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface-raised)] px-4 py-2">
          {title ? (
            <span className="text-sm font-medium text-[var(--text-muted)]">{title}</span>
          ) : (
            <span />
          )}
          <TabsList className="border p-0.5">
            <TabsTrigger value="preview" className="px-3 py-1 text-sm">
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="px-3 py-1 text-sm">
              Code
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="preview" className="p-6 focus:outline-hidden">
          <div className="flex min-h-[140px] w-full items-center justify-center overflow-x-auto rounded-lg border border-dashed border-[var(--border)] bg-[var(--canvas)] p-6">
            {children}
          </div>
        </TabsContent>

        <TabsContent value="code" className="p-0 focus:outline-hidden">
          <CodeBlock
            code={code}
            language={language}
            className="rounded-none border-0 shadow-none"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
