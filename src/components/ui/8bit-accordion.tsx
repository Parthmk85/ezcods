"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionContextValue = {
  value: string | null;
  setValue: (v: string | null) => void;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);
const ItemContext = React.createContext<string>("");

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
  /** Only "single" is supported. */
  type?: "single";
  collapsible?: boolean;
}

export function Accordion({ children, className }: AccordionProps) {
  const [value, setValue] = React.useState<string | null>(null);
  return (
    <AccordionContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  className,
  children,
}: {
  value: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <ItemContext.Provider value={value}>
      <div
        className={cn("pixel-border mb-6 bg-[#0a0a0a] text-white", className)}
      >
        {children}
      </div>
    </ItemContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = React.useContext(AccordionContext);
  const value = React.useContext(ItemContext);
  const open = ctx?.value === value;

  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={() => ctx?.setValue(open ? null : value)}
      className={cn(
        "flex w-full items-center justify-between gap-3 px-4 py-3 text-left",
        className
      )}
    >
      <span>{children}</span>
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          open && "rotate-180"
        )}
      />
    </button>
  );
}

export function AccordionContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = React.useContext(AccordionContext);
  const value = React.useContext(ItemContext);
  const open = ctx?.value === value;

  return (
    <div
      className={cn(
        "grid transition-[grid-template-rows] duration-300 ease-out",
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      )}
    >
      <div className="overflow-hidden">
        <div className={cn("px-4 pb-4", className)}>{children}</div>
      </div>
    </div>
  );
}
