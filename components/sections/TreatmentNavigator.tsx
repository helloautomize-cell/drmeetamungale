import { siteConfig } from "@/content/site";

// ─── TreatmentNavigator ────────────────────────────────────────────────────
// Sticky treatment switcher shared by all child pages. Desktop: editorial
// index (number + title, red active indicator). Mobile: sticky compact
// horizontal bar with the current title. SSG-safe: active page via prop.
export const treatmentNavOrder = siteConfig.treatments;

function railList(activeSlug: string) {
  return (
    <ol className="mt-4 space-y-1">
      {treatmentNavOrder.map((t, i) => {
        const isActive = t.slug === activeSlug;
        return (
          <li key={t.slug}>
            <a
              href={"/treatments/" + t.slug + "/"}
              aria-current={isActive ? "page" : undefined}
              className="group flex items-baseline gap-3 py-1.5 min-h-[32px]"
            >
              <span
                aria-hidden="true"
                className={
                  "h-[2px] w-5 shrink-0 self-center rounded-full transition-colors motion-reduce:transition-none " +
                  (isActive ? "bg-primary" : "bg-secondary/15 group-hover:bg-secondary/30")
                }
              />
              <span
                className={
                  "text-[14px] font-semibold leading-snug transition-colors motion-reduce:transition-none " +
                  (isActive ? "text-primary-fixed" : "text-on-surface-variant group-hover:text-on-surface")
                }
              >
                {String(i + 1).padStart(2, "0")} · {t.title}
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

/** Compact sticky horizontal selector (mobile). */
export function TreatmentSelectorBar({ activeSlug }: { activeSlug: string }) {
  return (
      <div className="lg:hidden sticky top-[92px] z-30 bg-background/90 backdrop-blur-md border-y border-secondary/10">
      <div className="px-6 py-3 flex items-center gap-3 overflow-x-auto">
        {treatmentNavOrder.map((t, i) => {
          const isActive = t.slug === activeSlug;
          return (
            <a
              key={t.slug}
              href={"/treatments/" + t.slug + "/"}
              aria-label={"Go to " + t.title}
              aria-current={isActive ? "page" : undefined}
              className={
                "shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center font-display-hero text-[14px] ring-1 transition-colors motion-reduce:transition-none " +
                (isActive
                  ? "bg-primary text-on-primary ring-primary"
                  : "text-on-surface-variant ring-secondary/20")
              }
            >
              {String(i + 1).padStart(2, "0")}
            </a>
          );
        })}
        <span className="ml-1 truncate text-[13px] font-semibold text-on-surface">
          {treatmentNavOrder.find((t) => t.slug === activeSlug)?.title}
        </span>
      </div>
    </div>
  );
}

/** Sticky editorial rail (desktop). Lives inside the content grid so it
    sticks only while the treatment content is in view. */
export function TreatmentRail({ activeSlug }: { activeSlug: string }) {
  return (
    <aside className="hidden lg:block" aria-label="All treatments">
      <nav className="sticky top-32">
        <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
          All treatments
        </p>
        {railList(activeSlug)}
      </nav>
    </aside>
  );
}

export function TreatmentNavigator({ activeSlug }: { activeSlug: string }) {
  return (
    <>
      <TreatmentSelectorBar activeSlug={activeSlug} />
      <TreatmentRail activeSlug={activeSlug} />
    </>
  );
}
