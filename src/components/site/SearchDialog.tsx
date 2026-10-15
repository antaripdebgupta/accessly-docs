"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CommandPalette,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandEmpty,
} from "@accessly-ui/react";
import { staticSearchIndex, type SearchEntry } from "@/lib/search-index";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QUICK_LINKS_LIMIT = 6;

function matches(entry: SearchEntry, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return false;
  const haystack = [
    entry.title,
    entry.description,
    entry.category,
    ...(entry.keywords ?? []),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [prevOpen, setPrevOpen] = useState(open);
  if (prevOpen !== open) {
    setPrevOpen(open);
    if (!open) {
      setQuery("");
    }
  }

  const results = useMemo(() => {
    if (!query.trim()) {
      return staticSearchIndex.slice(0, QUICK_LINKS_LIMIT);
    }
    return staticSearchIndex.filter((entry) => matches(entry, query));
  }, [query]);

  const grouped = useMemo(() => {
    return results.reduce<Record<string, SearchEntry[]>>((acc, item) => {
      const key = item.category;
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});
  }, [results]);

  return (
    <CommandPalette
      open={open}
      onOpenChange={onOpenChange}
      inputValue={query}
      onInputValueChange={setQuery}
      hotkey="k"
    >
      <CommandInput placeholder="Search documentation..." />
      <CommandList>
        <CommandEmpty>
          {query.trim() ? `No results for "${query}".` : "Start typing to search."}
        </CommandEmpty>
        {Object.entries(grouped).map(([category, items]) => (
          <CommandGroup key={category} heading={category}>
            {items.map((item) => (
              <CommandItem
                key={item.id}
                value={[item.title, item.description, ...(item.keywords ?? [])].join(" ")}
                onSelect={() => {
                  router.push(item.url);
                  onOpenChange(false);
                }}
              >
                <span className="font-medium">{item.title}</span>
                <span className="ml-2 text-sm text-[var(--text-muted)]">
                  {item.description.slice(0, 60)}…
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandPalette>
  );
}
