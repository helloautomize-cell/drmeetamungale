"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/motion";
import { careItems } from "@/components/sections/CarePanels";

// ─── Care discovery (owner redesign: ONE unified patient-first section)
// Patient experience first ("what am I experiencing?") → Mungale response
// ("here is where we can help"). Editorial index left (~42%), relevant
// care right (~58%); on mobile the panel follows the index.
// The six panels arrive server-rendered via the `panels` prop
// (CarePanels.tsx) — every panel's text sits in the server HTML
// (indexability); the inactive five stay `hidden`.
// Accessibility: semantic buttons, aria-expanded + aria-controls, visible
// focus rings, active state carried by text weight + support line + red
// accents (never color alone), animate-tab-in is reduced-motion safe.
export function CareDiscovery({ panels }: { panels: React.ReactNode[] }) {
  const [active, setActive] = React.useState(0);
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const items = careItems;

  // Roving tabindex + arrow-key navigation (spec §4.5 — works as tabs).
  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = items.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight")
      next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft")
      next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
            Start here
          </p>
          <h2 className="mt-4 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.05] text-[36px] sm:text-[44px] lg:text-[54px]">
            Start with what you&apos;re experiencing.
          </h2>
          <p className="mt-4 text-[17px] lg:text-[18px] leading-relaxed text-on-surface-variant max-w-xl">
            Tell us what brought you here and explore the areas of care that
            may be relevant to you.
          </p>
        </Reveal>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT (~33%) — editorial concern index, sticky on desktop. */}
          <div className="lg:col-span-4 lg:sticky lg:top-[140px]">
            <div
              role="tablist"
              aria-label="What are you experiencing"
              aria-orientation="vertical"
              onKeyDown={onKeyDown}
              className="border-y border-secondary/10 divide-y divide-secondary/10"
            >
              {items.map((item, i) => {
                const isActive = i === active;
                return (
                    <button
                      key={item.index}
                      ref={(el) => {
                        tabRefs.current[i] = el;
                      }}
                      type="button"
                      role="tab"
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => setActive(i)}
                      aria-selected={isActive}
                      aria-controls={"care-panel-" + i}
                      className={
                        "group relative w-full text-left flex items-start gap-4 py-5 min-h-[68px] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-lg " +
                        (isActive ? "bg-red-wash" : "")
                      }
                    >
                      {/* Active tick — thin red rule marking the row. */}
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-5 bottom-5 w-[2px] rounded-full bg-primary"
                        />
                      )}
                      <span
                        aria-hidden="true"
                        className={
                          "pl-4 pt-1 text-[12px] font-bold tracking-[0.16em] shrink-0 transition-colors duration-200 " +
                          (isActive
                            ? "text-primary"
                            : "text-on-surface-variant")
                        }
                      >
                        {item.index}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span
                          className={
                            "block text-[17px] lg:text-[18px] transition-colors duration-200 " +
                            (isActive
                              ? "text-on-surface font-semibold"
                              : "text-on-surface-variant font-medium group-hover:text-on-surface")
                          }
                        >
                          {item.title}
                        </span>
                        <span
                          className={
                            "mt-1 text-[14px] leading-snug text-on-surface-variant " +
                            (isActive ? "block animate-tab-in" : "hidden")
                          }
                        >
                          {item.support}
                        </span>
                      </span>
                      <ArrowRight
                        aria-hidden="true"
                        className={
                          "mt-1 w-[18px] h-[18px] shrink-0 transition-all duration-200 " +
                          (isActive
                            ? "text-primary translate-x-0"
                            : "text-on-surface/25 -translate-x-0.5 group-hover:text-on-surface/50")
                        }
                      />
                    </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT (~58%) — relevant care for the active concern. All six
              panels render in the DOM (indexability); inactive ones stay
              hidden. On mobile this block follows the index naturally.
              Switch: 250ms opacity fade-in via .animate-tab-in (§3). */}
          <div className="lg:col-span-8" aria-live="polite">
            {panels.map((panel, i) => (
              <div key={items[i]!.index} role="tabpanel" id={"care-panel-" + i} hidden={i !== active}>
                <div className={i === active ? "animate-tab-in" : undefined}>
                  {panel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
