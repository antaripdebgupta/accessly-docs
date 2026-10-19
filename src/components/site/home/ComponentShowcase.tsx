"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  Button,
  Switch,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Avatar,
  AvatarGroup,
  Alert,
  Pagination,
} from "@accessly-ui/react";
import { Container } from "@/components/site/Container";
import { COMPONENT_COUNT } from "@/data/components/registry";

interface ShowcaseCard {
  name: string;
  slug: string;
  preview: ReactNode;
}

const cards: ShowcaseCard[] = [
  {
    name: "Button",
    slug: "button",
    preview: (
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button variant="primary" size="sm">
          Primary
        </Button>
        <Button variant="secondary" size="sm">
          Secondary
        </Button>
        <Button variant="danger" size="sm">
          Danger
        </Button>
      </div>
    ),
  },
  {
    name: "Switch",
    slug: "switch",
    preview: (
      <div className="flex items-center gap-4">
        <Switch label="Active" size="sm" />
        <Switch label="Dark" defaultChecked size="sm" />
      </div>
    ),
  },
  {
    name: "Tabs",
    slug: "tabs",
    preview: (
      <Tabs defaultValue="design">
        <TabsList>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="design" className="mt-2 text-xs text-[var(--text-muted)]">
          Design panel content.
        </TabsContent>
        <TabsContent value="code" className="mt-2 text-xs text-[var(--text-muted)]">
          Code panel content.
        </TabsContent>
      </Tabs>
    ),
  },
  {
    name: "AvatarGroup",
    slug: "avatar",
    preview: (
      <AvatarGroup aria-label="Team members">
        <Avatar name="Alex Rivera" />
        <Avatar name="Sam Chen" />
        <Avatar name="Jordan Lee" />
      </AvatarGroup>
    ),
  },
  {
    name: "Alert",
    slug: "alert",
    preview: (
      <div className="w-full max-w-[280px]">
        <Alert variant="success" title="Changes saved" />
      </div>
    ),
  },
  {
    name: "Pagination",
    slug: "pagination",
    preview: <Pagination defaultCurrentPage={2} pageCount={5} />,
  },
];

export function ComponentShowcase() {
  return (
    <section aria-labelledby="showcase-heading" className="py-16 sm:py-24">
      <Container>
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2
            id="showcase-heading"
            className="text-3xl font-semibold tracking-tight text-[var(--text)]"
          >
            {COMPONENT_COUNT} components. One standard.
          </h2>
          <Link
            href="/components"
            className="text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            View all <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.name}
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--border-strong)]"
            >
              <div className="flex min-h-[168px] items-center justify-center p-6">
                {card.preview}
              </div>
              <div className="flex items-center justify-between border-t border-[var(--border)] px-4 py-3">
                <Link
                  href={`/components/${card.slug}`}
                  className="group inline-flex w-full items-center justify-between font-mono text-sm text-[var(--text-faint)] transition-colors hover:text-[var(--text)] focus-visible:underline focus-visible:outline-none"
                >
                  <span>{card.name}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="text-[var(--text-faint)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--text)]"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
