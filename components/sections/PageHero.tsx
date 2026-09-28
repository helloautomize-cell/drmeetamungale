import Link from "next/link";
import { ChevronRight } from "lucide-react";

// ─── Inner-page hero — homepage editorial grammar ─────────────────────
// Replaces the retired teal-gradient reference hero: warm paper, red
// eyebrow, editorial serif H1, quiet breadcrumb. Same props API — no page
// edits needed. Content passed in by pages; this component holds no copy.
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
    <section className="relative w-full bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 lg:pt-14 pb-10 lg:pb-12">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-6">
          {breadcrumb.map((c, i) => (
            <span key={c.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-on-surface/30" aria-hidden="true" />}
              <Link
                href={c.href}
                className="text-[13px] text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
              >
                {c.label}
              </Link>
            </span>
          ))}
        </nav>
        {eyebrow && (
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display-hero text-on-surface tracking-[-0.015em] leading-[1.05] text-[38px] sm:text-[46px] lg:text-[56px] mt-3 max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[16px] lg:text-[17px] text-on-surface-variant mt-3 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
