import Link from "next/link";
import { ChevronRight } from "lucide-react";

// ─── Phase 5: PageHero ──────────────────────────────────────────────────
// Reusable inner-page hero: breadcrumb, eyebrow, title, subtitle.
// Styled like the reference hero, smaller. Content passed in by pages —
// this component holds no copy of its own.
export function PageHero({
  breadcrumb,
  eyebrow,
  title,
  subtitle,
}: {
  breadcrumb: { label: string; href: string }[];
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative w-full bg-gradient-to-b from-surface-tint/60 via-surface to-background pb-space-xl pt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-6">
          {breadcrumb.map((c, i) => (
            <span key={c.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-outline-variant" />}
              <Link
                href={c.href}
                className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {c.label}
              </Link>
            </span>
          ))}
        </nav>
        {eyebrow && (
          <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
            {eyebrow}
          </span>
        )}
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1 max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
