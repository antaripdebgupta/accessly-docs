"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  Button,
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Skeleton,
  SkeletonText,
} from "@accessly-ui/react";

type Status = "idle" | "deploying" | "done";

const ENVIRONMENTS = ["Production", "Staging", "Preview"];

export function HeroDemo() {
  const [env, setEnv] = useState<string | undefined>("Staging");
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const deploy = () => {
    if (!env) return;
    setStatus("deploying");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("done"), 1500);
  };

  const rollBack = () => {
    if (timer.current) clearTimeout(timer.current);
    setStatus("idle");
  };

  const menu = (
    <DropdownMenuContent align="end" sideOffset={8}>
      <DropdownMenuItem onSelect={deploy} disabled={!env || status === "deploying"}>
        Redeploy
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem destructive onSelect={rollBack} disabled={status === "idle"}>
        Roll back
      </DropdownMenuItem>
    </DropdownMenuContent>
  );

  return (
    <div
      role="group"
      aria-label="Interactive component demo: deploy tracker"
      className="flex w-full max-w-[380px] flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <span className="block text-base font-semibold text-[var(--text)]">
            Deploy to environment
          </span>
          <p className="text-sm text-[var(--text-muted)]">Review checks, then ship it.</p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="secondary" size="sm" aria-label="More deploy actions">
              <span aria-hidden="true">⋯</span>
            </Button>
          </DropdownMenuTrigger>
          {mounted ? createPortal(menu, document.body) : null}
        </DropdownMenu>
      </div>

      <Combobox value={env} onValueChange={(v) => setEnv(v as string)}>
        <ComboboxInput placeholder="Select an environment..." showClearButton />
        <ComboboxContent>
          <ComboboxEmpty />
          {ENVIRONMENTS.map((name) => (
            <ComboboxItem key={name} value={name}>
              {name}
            </ComboboxItem>
          ))}
        </ComboboxContent>
      </Combobox>

      {status === "deploying" ? (
        <div aria-busy="true" className="space-y-3 py-1">
          <Skeleton shape="text" width="50%" />
          <SkeletonText lines={3} lastLineWidth="60%" />
        </div>
      ) : status === "done" ? (
        <Alert variant="success" title={`Deployed to ${env}`} urgency="polite">
          All checks passed. Your changes are live.
        </Alert>
      ) : (
        <Accordion type="single" collapsible defaultValue="build">
          <AccordionItem value="build">
            <AccordionTrigger>Build</AccordionTrigger>
            <AccordionContent>Compiled in 12s with zero warnings.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="tests">
            <AccordionTrigger>Tests</AccordionTrigger>
            <AccordionContent>248 passed, 0 failed.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="a11y">
            <AccordionTrigger>Accessibility audit</AccordionTrigger>
            <AccordionContent>axe-core found no violations.</AccordionContent>
          </AccordionItem>
        </Accordion>
      )}

      <div className="flex justify-end border-t border-[var(--border)] pt-4">
        <Button
          variant="primary"
          loading={status === "deploying"}
          loadingText="Deploying…"
          disabled={!env || status === "done"}
          onClick={deploy}
        >
          {status === "done" ? "Deployed" : "Deploy"}
        </Button>
      </div>
    </div>
  );
}
