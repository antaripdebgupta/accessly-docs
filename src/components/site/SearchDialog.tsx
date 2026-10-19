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
import { staticSearchIndex, score, type SearchEntry } from "@/lib/search-index";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QUICK_LINKS_LIMIT = 6;

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
    return staticSearchIndex
      .map((entry) => ({ entry, s: score(entry, query) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .map((r) => r.entry);
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
      className="rounded-2xl shadow-2xl"
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
                value={item.title}
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
