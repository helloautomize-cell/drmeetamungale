"use client";

import React from "react";
import type { InsuranceFaq } from "@/content/insurance-faqs";
import { Reveal } from "@/components/ui/motion";

// ─── InsuranceFaq ──────────────────────────────────────────────────────────
// Desktop: editorial two-column (question list left, selected answer right).
// Mobile: accordion. One open at a time; first selected by default.
// Keyboard-native buttons, visible active state (red marker + text, not
// colour alone), reduced-motion safe.
export function InsuranceFaq({ faqs }: { faqs: InsuranceFaq[] }) {
  const [active, setActive] = React.useState(0);
  const current = faqs[active] ?? faqs[0];
  return (
    <div>
      {/* Desktop: list + answer */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-14">
        <ol className="border-t border-secondary/10">
          {faqs.map((f, i) => {
            const selected = i === active;
            return (
              <li key={f.question} className="border-b border-secondary/10">
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(i)}
                  className="group flex w-full items-baseline gap-4 py-4 text-left min-h-[44px]"
                >
                  <span
                    aria-hidden="true"
                    className={
                      "font-display-hero text-[14px] w-7 shrink-0 transition-colors motion-reduce:transition-none " +
                      (selected ? "text-primary-fixed" : "text-on-surface-variant")
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={
                      "flex-1 font-body-md text-body-md font-semibold transition-colors motion-reduce:transition-none " +
                      (selected ? "text-on-surface" : "text-on-surface-variant group-hover:text-on-surface")
                    }
                  >
                    {f.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={
                      "h-[2px] w-6 shrink-0 self-center rounded-full transition-colors motion-reduce:transition-none " +
                      (selected ? "bg-primary" : "bg-transparent group-hover:bg-secondary/20")
                    }
                  />
                </button>
              </li>
            );
          })}
        </ol>
        <div className="lg:sticky lg:top-32 self-start">
          {current && (
            <div key={current.question} className="border-t-2 border-secondary/70 pt-5">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                {String(active + 1).padStart(2, "0")} / {String(faqs.length).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display-hero text-on-surface tracking-tight text-[24px] lg:text-[28px] leading-[1.15]">
                {current.question}
              </h3>
              <p className="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {current.answer}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile: accordion */}
      <div className="lg:hidden border-t border-secondary/10">
        {faqs.map((f, i) => {
          const open = i === active;
          return (
            <div key={f.question} className="border-b border-secondary/10">
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setActive(i)}
                className="flex w-full items-baseline gap-3 py-4 text-left min-h-[44px]"
              >
                <span className="flex-1 font-body-md text-body-md font-semibold text-on-surface">
                  {f.question}
                </span>
                <span
                  aria-hidden="true"
                  className={
                    "shrink-0 text-[20px] leading-none transition-transform duration-300 motion-reduce:transition-none " +
                    (open ? "rotate-45 text-primary-fixed" : "text-on-surface-variant")
                  }
                >
                  +
                </span>
              </button>
              <div
                style={{ maxHeight: open ? "500px" : "0px" }}
                className="overflow-hidden transition-[max-height] duration-500 ease-in-out motion-reduce:transition-none"
              >
                <p className="pb-5 pr-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {f.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
