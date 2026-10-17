"use client";

import React from "react";

// ─── Blog TOC ──────────────────────────────────────────────────────────────
// "On this page" — desktop sticky rail (>=1200px) with active-section
// highlighting via IntersectionObserver; "In this article" — a native
// <details> block for smaller screens. Anchor jumps rely on
// html{scroll-padding-top:120px} + scroll-behavior (motion-reduce aware)
// already set in globals.css.

export interface TocItem {
  id: string;
  text: string;
}

export function BlogToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = React.useState<string>(items[0]?.id ?? "");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      // Highlight the heading in the top third of the viewport.
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 3) return null;

  return (
    <nav aria-label="On this page">
      <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
        On this page
      </p>
      <ul className="mt-4 space-y-2.5 border-l border-secondary/10">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={"#" + item.id}
              aria-current={active === item.id ? "location" : undefined}
              className={
                "-ml-px block border-l-2 pl-4 py-0.5 text-[14px] leading-snug transition-colors " +
                (active === item.id
                  ? "border-primary text-on-surface font-semibold"
                  : "border-transparent text-on-surface-variant hover:text-on-surface")
              }
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Collapsible TOC for <1200px — closed by default, no JS needed. */
export function BlogTocCollapsible({ items }: { items: TocItem[] }) {
  if (items.length < 3) return null;
  return (
    <details className="rounded-[14px] ring-1 ring-secondary/10 bg-surface-canvas/60 px-5 py-4 group">
      <summary className="flex cursor-pointer list-none items-center justify-between text-[14px] font-semibold text-on-surface min-h-[44px] [&::-webkit-details-marker]:hidden">
        In this article
        <span
          aria-hidden="true"
          className="text-[18px] leading-none text-on-surface-variant transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
        >
          +
        </span>
      </summary>
      <ul className="mt-1 space-y-2 border-t border-secondary/10 pt-4 pb-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={"#" + item.id}
              className="block py-1 text-[14px] leading-snug text-on-surface-variant hover:text-on-surface transition-colors"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
