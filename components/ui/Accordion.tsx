"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Accordion (§2.4): thin-rule editorial accordion on Radix primitives —
// keyboard navigation, aria-expanded and height animation built in.
// Editorial styling: hairline dividers, serif trigger, red chevron turn.
export interface AccordionItemData {
  id: string;
  question: string;
  answer: React.ReactNode;
}

export function Accordion({
  items,
  className,
  type = "single",
}: {
  items: AccordionItemData[];
  className?: string;
  type?: "single" | "multiple";
}) {
  return (
    <AccordionPrimitive.Root
      type={type === "single" ? "single" : "multiple"}
      collapsible
      className={cn("divide-y divide-line border-y border-line", className)}
    >
      {items.map((item) => (
        <AccordionPrimitive.Item key={item.id} value={item.id}>
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger
              className={cn(
                "group flex w-full items-center justify-between gap-6 py-5 lg:py-6 text-left",
                "text-[17px] lg:text-[19px] font-semibold text-ink",
                "transition-colors duration-200 hover:text-brand-red-strong",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-strong/50 focus-visible:rounded-lg"
              )}
            >
              {item.question}
              <ChevronDown
                aria-hidden="true"
                className="w-5 h-5 shrink-0 text-iris-grey transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-brand-red-strong"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-none data-[state=open]:animate-none">
            <div className="pb-6 pr-10 text-[15px] lg:text-[16px] leading-relaxed text-ink-soft">
              {item.answer}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
