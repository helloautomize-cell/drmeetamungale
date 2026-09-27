"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Faq } from "@/content/faqs";

// shadcn-style Accordion (Radix): single collapsible item, animated
// chevron, full keyboard support and aria wiring vs the previous hand-rolled
// version. Renders VERBATIM faqs from content/faqs.ts.
export function FAQAccordion({
  faqs,
  eyebrow = "FAQs",
  title = "Frequently Asked Questions",
}: {
  faqs: Faq[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="py-space-2xl bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader eyebrow={eyebrow} title={title} />
        <AccordionPrimitive.Root
          type="single"
          collapsible
          defaultValue="item-0"
          className="max-w-3xl mx-auto space-y-3"
        >
          {faqs.map((f, i) => (
            <AccordionPrimitive.Item
              key={f.question}
              value={"item-" + i}
              className="bg-card-white rounded-2xl shadow-sm overflow-hidden"
            >
              <AccordionPrimitive.Header>
                <AccordionPrimitive.Trigger
                  className={cn(
                    "w-full flex items-center justify-between gap-4 px-6 py-4 text-left",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  )}
                >
                  <span className="font-title-md text-title-md text-on-surface font-bold">
                    {f.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-primary shrink-0 transition-transform duration-200 [[data-state=open]_&]:rotate-180" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-none">
                <p className="px-6 pb-5 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {f.answer}
                </p>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          ))}
        </AccordionPrimitive.Root>
      </div>
    </section>
  );
}
