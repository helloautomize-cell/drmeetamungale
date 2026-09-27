"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

// shadcn-style Tabs (Radix primitives): keyboard navigation (arrow keys),
// roving tabindex and aria-selected come free vs the previous hand-rolled
// useState version. Same { tabs, defaultTab } API — call sites unchanged.
export function Tabs({ tabs, defaultTab }: { tabs: TabItem[]; defaultTab?: string }) {
  return (
    <TabsPrimitive.Root defaultValue={defaultTab || tabs[0]?.id}>
      <TabsPrimitive.List
        className="flex items-center justify-center gap-3 mb-6"
        aria-label="Treatment categories"
      >
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.id}
            value={tab.id}
            className={cn(
              "px-6 py-2.5 rounded-full font-label-md text-label-md transition-all",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
              "disabled:pointer-events-none disabled:opacity-50",
              "data-[state=active]:bg-primary data-[state=active]:text-on-primary data-[state=active]:shadow-brand-sm",
              "data-[state=inactive]:bg-card-white data-[state=inactive]:text-on-surface data-[state=inactive]:hover:bg-surface-tint data-[state=inactive]:hover:-translate-y-px"
            )}
          >
            {tab.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {tabs.map((tab) => (
        <TabsPrimitive.Content
          key={tab.id}
          value={tab.id}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-2xl animate-tab-in"
        >
          {tab.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}
