"use client";

import React from "react";
import Link from "next/link";
import { TreatmentShell } from "@/components/sections/TreatmentShell";
import { TreatmentSelectorBar, TreatmentRail, treatmentNavOrder } from "@/components/sections/TreatmentNavigator";
import { ClinicalAccordion } from "@/components/sections/ClinicalAccordion";
import { ClinicalGallery } from "@/components/sections/ClinicalGallery";
import { SafeImage } from "@/components/sections/SafeImage";
import {
  getTreatmentPage,
  pageDetails,
  pageGallery,
  type PageSection,
} from "@/content/treatment-pages";
import { Reveal } from "@/components/ui/motion";

// ─── TreatmentCorneaEval (/treatments/cornea-evaluation/) ─────────────────
// Personality: diagnostic precision. Compact split hero → integrated rail →
// "Understanding your cornea evaluation" intro → vertical technology
// timeline (6 instruments, alternating, verbatim accordions) → "what these
// technologies help us see" band → compact gallery → custom related +
// prev/next. No white duplicate CTA; the footer red band closes the page.
const SLUG = "cornea-evaluation";

function shortCategory(slug: string): string {
  try {
    const cat = getTreatmentPage(slug).category;
    return cat.split(/[—·]/)[0]?.trim() ?? "";
  } catch {
    return "";
  }
}

function Caption({ text }: { text: string }) {
  const [head, ...rest] = text.split(" — ");
  return (
    <p className="mt-3 text-[13px] leading-snug text-on-surface-variant">
      <span className="block font-semibold text-on-surface/80">{head}</span>
      {rest.length > 0 && <span className="block capitalize">{rest.join(" — ")}</span>}
    </p>
  );
}

function TimelineItem({
  section,
  flip,
  onFail,
  failed,
}: {
  section: PageSection;
  flip: boolean;
  onFail: (src: string) => void;
  failed: Set<string>;
}) {
  const details = pageDetails(SLUG, section.bodyKeys);
  const hasMedia = Boolean(section.image && !failed.has(section.image.src));
  return (
    <article id={"eval-" + section.id} className="scroll-mt-32">
      {hasMedia ? (
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          <Reveal className={flip ? "lg:order-2" : ""}>
            <figure>
              <div className="overflow-hidden rounded-[20px] ring-1 ring-secondary/10">
                <SafeImage
                  src={section.image!.src}
                  alt={section.image!.alt}
                  sizes="(min-width: 1024px) 32vw, 90vw"
                  className="w-full aspect-[4/3] object-cover"
                  onFail={onFail}
                />
              </div>
              <Caption text={section.image!.caption} />
            </figure>
          </Reveal>
          <Reveal delay={0.08} className={flip ? "lg:order-1" : ""}>
            <span
              aria-hidden="true"
              className="block font-display-hero leading-none tracking-tight text-secondary/15 text-[56px] lg:text-[72px]"
            >
              {section.index}
            </span>
            <h3 className="mt-2 font-display-hero text-on-surface tracking-tight text-[26px] sm:text-[32px] leading-[1.1]">
              {section.title}
            </h3>
            <p className="mt-3 font-body-md text-body-md text-on-surface leading-relaxed max-w-[58ch]">
              {section.summary}
            </p>
            <div className="mt-4 border-t border-secondary/10">
              {details.map((d) => (
                <ClinicalAccordion key={d.title} title={d.title} body={d.body} />
              ))}
            </div>
          </Reveal>
        </div>
      ) : (
        <Reveal>
          <div className="max-w-3xl">
            <span
              aria-hidden="true"
              className="block font-display-hero leading-none tracking-tight text-secondary/15 text-[56px] lg:text-[72px]"
            >
              {section.index}
            </span>
            <h3 className="mt-2 font-display-hero text-on-surface tracking-tight text-[26px] sm:text-[32px] leading-[1.1]">
              {section.title}
            </h3>
            <p className="mt-3 font-body-md text-body-md text-on-surface leading-relaxed max-w-[58ch]">
              {section.summary}
            </p>
            <div className="mt-4 border-t border-secondary/10">
              {details.map((d) => (
                <ClinicalAccordion key={d.title} title={d.title} body={d.body} />
              ))}
            </div>
          </div>
        </Reveal>
      )}
    </article>
  );
}

const SEE_MAP: { tech: string; reveals: string }[] = [
  { tech: "Slit-lamp imaging", reveals: "Every part of the eye, photographed and recorded" },
  { tech: "Pachymetry & tomography", reveals: "Thickness, curvature and elevation" },
  { tech: "IDRA tear-film analysis", reveals: "Dry-eye cause, documented" },
  { tech: "Specular microscopy", reveals: "Endothelial cell health" },
];

function Related() {
  const page = getTreatmentPage(SLUG);
  return (
    <section aria-label="Continue exploring" className="border-t border-secondary/10 mt-14 lg:mt-20 pt-10 lg:pt-14">
      <Reveal>
        <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
          Continue exploring
        </p>
        <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[28px] sm:text-[34px] leading-[1.1]">
          Other areas of eye care
        </h2>
        <div className="mt-4 border-t border-secondary/10">
          {page.related.map((slug) => {
            const target = treatmentNavOrder.find((t) => t.slug === slug);
            if (!target) return null;
            return (
              <Link
                key={slug}
                href={"/treatments/" + slug + "/"}
                className="group flex items-baseline gap-4 border-b border-secondary/10 py-5"
              >
                <span className="flex-1">
                  <span className="block text-[12px] font-bold uppercase tracking-[0.14em] text-on-surface-variant">
                    {shortCategory(slug)}
                  </span>
                  <span className="mt-1 flex items-center gap-2 font-display-hero text-[22px] lg:text-[26px] tracking-tight text-on-surface group-hover:text-primary-fixed transition-colors motion-reduce:transition-none">
                    {target.title}
                    <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

function PrevNext() {
  const idx = Math.max(0, treatmentNavOrder.findIndex((t) => t.slug === SLUG));
  const prev = treatmentNavOrder[(idx - 1 + treatmentNavOrder.length) % treatmentNavOrder.length];
  const next = treatmentNavOrder[(idx + 1) % treatmentNavOrder.length];
  if (!prev || !next) return null;
  return (
    <section aria-label="Previous and next treatments" className="border-t border-secondary/10 mt-14 lg:mt-20 pt-10 lg:pt-14 pb-16 lg:pb-24">
      <Reveal>
        <div className="grid sm:grid-cols-2 gap-8">
          <Link href={"/treatments/" + prev.slug + "/"} className="group block">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              Previous treatment
            </span>
            <span className="mt-3 flex items-center gap-3 font-display-hero tracking-tight leading-[1.05] text-[30px] lg:text-[40px] text-on-surface group-hover:text-primary-fixed transition-colors motion-reduce:transition-none">
              <span aria-hidden="true" className="text-primary-fixed text-[24px] lg:text-[32px]">&larr;</span>
              {prev.title}
            </span>
            <span className="mt-2 block text-[14px] text-on-surface-variant">{shortCategory(prev.slug)}</span>
          </Link>
          <Link href={"/treatments/" + next.slug + "/"} className="group block sm:text-right">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              Next treatment
            </span>
            <span className="mt-3 flex items-center gap-3 sm:justify-end font-display-hero tracking-tight leading-[1.05] text-[30px] lg:text-[40px] text-on-surface group-hover:text-primary-fixed transition-colors motion-reduce:transition-none">
              {next.title}
              <span aria-hidden="true" className="text-primary-fixed text-[24px] lg:text-[32px]">&rarr;</span>
            </span>
            <span className="mt-2 block text-[14px] text-on-surface-variant">{shortCategory(next.slug)}</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export function TreatmentCorneaEval() {
  const page = getTreatmentPage(SLUG);
  const gallery = pageGallery(SLUG);
  const [failed, setFailed] = React.useState<Set<string>>(new Set());
  const markFailed = React.useCallback((src: string) => {
    setFailed((prev) => (prev.has(src) ? prev : new Set(prev).add(src)));
  }, []);
  const heroOk = !failed.has(page.heroImage.src);
  const overlapOk = Boolean(page.heroImage.overlapSrc && !failed.has(page.heroImage.overlapSrc!));

  return (
    <TreatmentShell current={page.title} slug="cornea-evaluation">
      {/* ── Compact split hero ── */}
      <section className="overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-4 lg:pt-6 pb-10 lg:pb-14">
          <div className={"grid gap-8 lg:gap-12 items-center w-full " + (heroOk ? "lg:grid-cols-2" : "max-w-3xl")}>
            <Reveal>
              <p className="mt-4 lg:mt-6 text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                {page.category}
              </p>
              <h1 className="mt-3 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.04] text-[42px] sm:text-[56px] lg:text-[64px]">
                {page.title}
              </h1>
              <p className="mt-5 max-w-[52ch] font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {page.intro}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center gap-2 bg-primary text-on-primary font-semibold text-[15px] px-6 py-3 rounded-full hover:bg-primary-fixed transition-colors motion-reduce:transition-none min-h-[44px]"
                >
                  Book a consultation
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  href="/treatments/"
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface min-h-[44px]"
                >
                  <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
                    Back to all treatments
                  </span>
                  <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
                </Link>
              </div>
            </Reveal>
            {heroOk && (
              <Reveal delay={0.1} className="relative">
                <div className="overflow-hidden rounded-[20px] ring-1 ring-secondary/10">
                  <SafeImage
                    src={page.heroImage.src}
                    alt={page.heroImage.alt}
                    width={700}
                    height={525}
                    sizes="(min-width: 1024px) 44vw, 90vw"
                    className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover"
                    onFail={markFailed}
                    eager
                  />
                </div>
                {overlapOk && (
                  <div className="absolute -bottom-8 -left-4 sm:-left-8 w-[42%] overflow-hidden rounded-[16px] ring-1 ring-secondary/10 shadow-xl bg-background">
                    <SafeImage
                      src={page.heroImage.overlapSrc!}
                      alt={page.heroImage.overlapAlt ?? ""}
                      width={400}
                      height={400}
                      sizes="(min-width: 1024px) 16vw, 38vw"
                      className="w-full aspect-square object-cover"
                      onFail={markFailed}
                    />
                  </div>
                )}
                <div className="mt-12 flex items-baseline justify-between gap-6">
                  <Caption text={page.heroImage.caption} />
                  <p className="shrink-0 text-right text-[12px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
                    Corneal care · 6 instruments
                  </p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <TreatmentSelectorBar activeSlug={SLUG} />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-12">
          <TreatmentRail activeSlug={SLUG} />
          <div className="min-w-0">
            <Reveal>
              <div className="pt-6 lg:pt-10">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                  Understanding your cornea evaluation
                </p>
                <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[32px] sm:text-[44px] leading-[1.06]">
                  Mapping your cornea,
                  <br />
                  instrument by instrument.
                </h2>
                <p className="mt-4 max-w-[62ch] font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Six stations of measurement and imaging — each one answers a
                  different question about your cornea before any treatment is planned.
                </p>
                <hr className="mt-8 border-secondary/10" />
              </div>
            </Reveal>

            {/* ── Instrument stations ── */}
            <div className="mt-10 lg:mt-14">
              <div className="space-y-12 lg:space-y-16">
                {page.sections.map((section, i) => (
                  <TimelineItem
                    key={section.id}
                    section={section}
                    flip={i % 2 === 1}
                    onFail={markFailed}
                    failed={failed}
                  />
                ))}
              </div>
            </div>

            {/* ── What these technologies help us see ── */}
            <section aria-label="What these technologies help us see" className="border-t border-secondary/10 mt-14 lg:mt-20 pt-10 lg:pt-14">
              <Reveal>
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                  What these technologies help us see
                </p>
                <div className="mt-4 border-t border-secondary/10">
                  {SEE_MAP.map((row) => (
                    <div key={row.tech} className="grid sm:grid-cols-2 gap-1 sm:gap-6 border-b border-secondary/10 py-4">
                      <p className="font-display-hero text-[19px] lg:text-[21px] tracking-tight text-on-surface">
                        {row.tech}
                      </p>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {row.reveals}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* ── Compact gallery ── */}
            <section aria-label="Evaluation gallery" className="border-t border-secondary/10 mt-14 lg:mt-20 pt-10 lg:pt-14">
              <Reveal>
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                  A closer look
                </p>
                <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[28px] sm:text-[36px] leading-[1.1]">
                  The instruments, up close.
                </h2>
              </Reveal>
              <div className="mt-6">
                <ClinicalGallery
                  images={gallery.filter((g) => !failed.has(g.src))}
                  leadAspect="aspect-[16/10]"
                />
              </div>
            </section>

            <Related />
            <PrevNext />
          </div>
        </div>
      </div>
      <div className="h-4" />
    </TreatmentShell>
  );
}
