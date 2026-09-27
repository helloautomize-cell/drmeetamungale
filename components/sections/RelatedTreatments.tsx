import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Treatment } from "@/content/treatments";

// ─── Phase 5: RelatedTreatments ─────────────────────────────────────────
// Cross-links sibling treatments (excludes current slug). Titles/slugs from
// content/treatments.ts — verified slugs preserving old WordPress URLs.
export function RelatedTreatments({
  currentSlug,
  treatments,
}: {
  currentSlug: string;
  treatments: Treatment[];
}) {
  const related = treatments.filter((t) => t.slug !== currentSlug).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section className="py-space-xl bg-surface-canvas">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-6">
          Related Treatments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map((t) => (
            <Card key={t.slug}>
              <h3 className="font-title-md text-title-md text-on-surface font-bold">{t.title}</h3>
              <Link
                href={"/treatments/" + t.slug + "/"}
                className="mt-3 font-label-sm text-label-sm text-primary font-bold inline-flex items-center gap-1 hover:underline"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
