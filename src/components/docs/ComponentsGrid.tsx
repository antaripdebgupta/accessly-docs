"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { DocArticle } from "@/components/docs/DocArticle";
import { PageHeading } from "@/components/docs/PageHeading";
import { SectionHeading } from "@/components/docs/SectionHeading";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Alert,
  Avatar,
  AvatarGroup,
  Breadcrumb,
  Button,
  Carousel,
  CarouselViewport,
  CarouselTrack,
  CarouselSlide,
  CarouselPrevButton,
  CarouselNextButton,
  CarouselDots,
  Checkbox,
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxItem,
  ComboboxEmpty,
  CommandPalette,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  DataTable,
  DataTableHeader,
  DataTableBody,
  type DataTableColumn,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  Input,
  Pagination,
  RadioGroup,
  RadioGroupItem,
  Skeleton,
  SkeletonAvatar,
  Switch,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Textarea,
  ToastProvider,
  useToast,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TreeView,
  TreeItem,
} from "@accessly-ui/react";
import { groupedByCategory, COMPONENT_COUNT } from "@/data/components/registry";
import { MoveRight } from "lucide-react";

function DialogPreview() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="secondary" size="sm">
          Open dialog
        </Button>
      </DialogTrigger>
      <DialogContent size="sm">
        <DialogHeader>
          <DialogTitle>Delete document?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => setOpen(false)}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function CommandPalettePreview() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" size="sm" onClick={() => setOpen(true)}>
        Open palette
      </Button>
      <CommandPalette open={open} onOpenChange={setOpen} hotkey={null}>
        <CommandInput />
        <CommandList>
          <CommandEmpty />
          <CommandItem value="new-file" onSelect={() => setOpen(false)}>
            New File
          </CommandItem>
          <CommandItem value="settings" onSelect={() => setOpen(false)}>
            Open Settings
          </CommandItem>
        </CommandList>
      </CommandPalette>
    </>
  );
}

function ToastButton() {
  const { push } = useToast();
  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={() =>
        push({
          title: "Saved",
          description: "Your changes were saved.",
          variant: "success",
        })
      }
    >
      Show toast
    </Button>
  );
}

/* ---------- Data table sample ---------- */

interface Row {
  id: string;
  name: string;
  role: string;
}
const ROWS: Row[] = [
  { id: "1", name: "Jane Doe", role: "Admin" },
  { id: "2", name: "Sam Rivera", role: "Editor" },
  { id: "3", name: "Alex Kim", role: "Viewer" },
];
const ROW_COLUMNS: DataTableColumn<Row>[] = [
  { id: "name", header: "Name", cell: (r) => r.name },
  { id: "role", header: "Role", cell: (r) => r.role },
];

/* ---------- Previews keyed by registry slug ---------- */

const FRUITS = ["Apple", "Banana", "Cherry"];

const previews: Record<string, ReactNode> = {
  accordion: (
    <div className="w-full max-w-[260px]">
      <Accordion type="single" collapsible defaultValue="a">
        <AccordionItem value="a">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes, WCAG 2.2 AA.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="b">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>Yes, via Tailwind.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  alert: (
    <div className="w-full max-w-[280px]">
      <Alert variant="success" title="Changes saved" />
    </div>
  ),
  avatar: (
    <AvatarGroup aria-label="Team members">
      <Avatar name="Alex Rivera" />
      <Avatar name="Sam Chen" />
      <Avatar name="Jordan Lee" />
    </AvatarGroup>
  ),
  breadcrumb: (
    <Breadcrumb
      aria-label="Breadcrumb preview"
      items={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/introduction" },
        { label: "Components", href: "/components" },
      ]}
    />
  ),
  button: (
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
  carousel: (
    <div className="w-full max-w-[260px]">
      <Carousel aria-label="Carousel preview">
        <CarouselViewport>
          <CarouselTrack>
            {[1, 2, 3].map((n) => (
              <CarouselSlide key={n}>
                <div className="flex h-20 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] text-sm text-[var(--text)]">
                  Slide {n}
                </div>
              </CarouselSlide>
            ))}
          </CarouselTrack>
        </CarouselViewport>
        <div className="mt-2 flex items-center justify-between">
          <CarouselPrevButton />
          <CarouselDots slideCount={3} />
          <CarouselNextButton />
        </div>
      </Carousel>
    </div>
  ),
  checkbox: <Checkbox defaultChecked label="Subscribe to newsletter" />,
  combobox: (
    <div className="w-full max-w-[220px]">
      <Combobox>
        <ComboboxInput placeholder="Select a fruit..." />
        <ComboboxContent>
          <ComboboxEmpty />
          {FRUITS.map((f) => (
            <ComboboxItem key={f} value={f}>
              {f}
            </ComboboxItem>
          ))}
        </ComboboxContent>
      </Combobox>
    </div>
  ),
  "command-palette": <CommandPalettePreview />,
  "data-table": (
    <div className="w-full max-w-[280px] overflow-x-auto">
      <DataTable
        data={ROWS}
        columns={ROW_COLUMNS}
        getRowId={(r) => r.id}
        caption="Users preview"
      >
        <DataTableHeader />
        <DataTableBody />
      </DataTable>
    </div>
  ),
  dialog: <DialogPreview />,
  "dropdown-menu": (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary" size="sm">
          Open menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem destructive>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  input: (
    <div className="w-full max-w-[220px]">
      <Input
        label="Email"
        type="email"
        autoComplete="email"
        placeholder="alex@example.com"
      />
    </div>
  ),
  pagination: <Pagination defaultCurrentPage={2} pageCount={5} />,
  "radio-group": (
    <RadioGroup defaultValue="standard" label="Shipping">
      <RadioGroupItem value="standard" label="Standard" />
      <RadioGroupItem value="express" label="Express" />
    </RadioGroup>
  ),
  skeleton: (
    <div className="flex w-full max-w-[220px] items-center gap-3">
      <SkeletonAvatar size="md" />
      <div className="flex-1 space-y-2">
        <Skeleton shape="text" width="80%" />
        <Skeleton shape="text" width="55%" />
      </div>
    </div>
  ),
  switch: (
    <div className="flex items-center gap-4">
      <Switch label="Active" size="sm" />
      <Switch label="Dark" defaultChecked size="sm" />
    </div>
  ),
  tabs: (
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
  textarea: (
    <div className="w-full max-w-[220px]">
      <Textarea label="Feedback" placeholder="Write your feedback..." />
    </div>
  ),
  toast: (
    <ToastProvider placement="bottom-right">
      <ToastButton />
    </ToastProvider>
  ),
  tooltip: (
    <Tooltip delayDuration={0}>
      <TooltipTrigger>
        <Button variant="secondary" size="sm">
          Hover or focus me
        </Button>
      </TooltipTrigger>
      <TooltipContent>Saves your changes</TooltipContent>
    </Tooltip>
  ),
  "tree-view": (
    <div className="w-full max-w-[220px]">
      <TreeView aria-label="Project files preview" defaultExpanded={["src"]}>
        <TreeItem value="src" label="src">
          <TreeItem value="index.ts" label="index.ts" />
          <TreeItem value="app.ts" label="app.ts" />
        </TreeItem>
        <TreeItem value="package.json" label="package.json" />
      </TreeView>
    </div>
  ),
};

/* ---------- Grid ---------- */

export function ComponentsGrid() {
  const categoryCount = Object.keys(groupedByCategory).length;
  const description = `Explore all ${COMPONENT_COUNT} accessible React components organized into ${categoryCount} functional categories.`;

  return (
    <DocArticle size="wide">
      <PageHeading title="All Components" description={description} />

      <div className="mt-8 space-y-12">
        {Object.entries(groupedByCategory).map(([category, items]) => (
          <section key={category}>
            <SectionHeading
              id={category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              level={2}
              className="mb-4 text-xs font-semibold tracking-wider text-[var(--text-faint)] uppercase"
            >
              {category}
            </SectionHeading>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((meta) => (
                <div
                  key={meta.slug}
                  className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--border-strong)]"
                >
                  <div className="flex min-h-[168px] items-center justify-center p-6">
                    {previews[meta.slug] ?? null}
                  </div>
                  <div className="border-t border-[var(--border)] px-4 py-3">
                    <Link
                      href={`/components/${meta.slug}`}
                      className="group inline-flex w-full items-center justify-between font-mono text-sm text-[var(--text-faint)] transition-colors hover:text-[var(--text)] focus-visible:underline focus-visible:outline-none"
                    >
                      <span>{meta.name}</span>
                      <MoveRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-[var(--text-faint)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--text)]"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </DocArticle>
  );
}
