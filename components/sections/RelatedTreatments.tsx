import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Treatment } from "@/content/treatments";

// ─── RelatedTreatments — ruled rows (consistency pass) ────────────────
// Cross-links sibling treatments (excludes current slug). Titles/slugs from
// content/treatments.ts — verified slugs preserving old WordPress URLs.
// Optional `slugs` curates the exact pairing (child-page brief); otherwise
// falls back to the first three siblings.
export function RelatedTreatments({
  currentSlug,
  treatments,
  slugs,
  heading = "Related Treatments",
}: {
  currentSlug: string;
  treatments: Treatment[];
  slugs?: string[];
  heading?: string;
}) {
  const related = slugs
    ? slugs
        .map((s) => treatments.find((t) => t.slug === s))
        .filter((t): t is Treatment => Boolean(t))
    : treatments.filter((t) => t.slug !== currentSlug).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section className="py-20 lg:py-24 bg-surface-canvas">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="font-display-hero text-on-surface tracking-tight leading-tight text-[26px] lg:text-[32px]">
          {heading}
        </h2>
        <ul className="mt-4 divide-y divide-secondary/10 border-b border-secondary/10">
          {related.map((t) => (
            <li key={t.slug}>
              <Link
                href={"/treatments/" + t.slug + "/"}
                className="group flex items-center justify-between gap-4 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-lg"
              >
                <span className="text-[17px] lg:text-[18px] font-semibold text-on-surface group-hover:text-primary transition-colors duration-200">
                  {t.title}
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="w-[18px] h-[18px] shrink-0 text-on-surface/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 motion-reduce:transition-none"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
