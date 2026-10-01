"use client";

import React from "react";
import Link from "next/link";
import { TreatmentShell } from "@/components/sections/TreatmentShell";
import { TreatmentSelectorBar, TreatmentRail, treatmentNavOrder } from "@/components/sections/TreatmentNavigator";
import { ClinicalAccordion } from "@/components/sections/ClinicalAccordion";
import { ClinicalGallery } from "@/components/sections/ClinicalGallery";
import { SafeImage } from "@/components/sections/SafeImage";
import { getTreatmentDetail } from "@/content/treatment-details";
import {
  getTreatmentPage,
  pageDetails,
  pageGallery,
  type PageSection,
} from "@/content/treatment-pages";
import { Reveal } from "@/components/ui/motion";

// ─── TreatmentCataract (/treatments/cataract-surgery/) ─────────────────────
// Same design language as the approved pages. Personality: minimal surgical
// showcase. Deliberately short: compact hero → two technology stories →
// closer-look gallery → related + prev/next. Content is 100% verbatim live
// source (WPVibe-verified): hero intro = the hospital's published intro,
// chapters = source headings + source bodies. No summaries written here.
const SLUG = "cataract-surgery";

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

function Story({
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
  const mediaClass = section.contain
    ? "w-full aspect-[4/3] object-contain bg-white"
    : "w-full aspect-[4/3] object-cover";
  return (
    <article id={"cataract-" + section.id} className="scroll-mt-32 border-t border-secondary/10 pt-10 lg:pt-14">
      {hasMedia ? (
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          <Reveal className={flip ? "lg:order-2" : ""}>
            <figure>
              <div className="overflow-hidden rounded-[20px] ring-1 ring-secondary/10">
                <SafeImage
                  src={section.image!.src}
                  alt={section.image!.alt}
                  sizes="(min-width: 1024px) 32vw, 90vw"
                  className={mediaClass}
                  onFail={onFail}
                />
              </div>
              <Caption text={section.image!.caption} />
            </figure>
          </Reveal>
          <Reveal delay={0.08} className={flip ? "lg:order-1" : ""}>
            <span
              aria-hidden="true"
              className="block font-display-hero leading-none tracking-tight text-secondary/15 text-[64px] lg:text-[88px]"
            >
              {section.index}
            </span>
            <h3 className="mt-2 font-display-hero text-on-surface tracking-tight text-[30px] sm:text-[36px] leading-[1.08]">
              {details[0]?.title ?? section.title}
            </h3>
            <div className="mt-5 border-t border-secondary/10">
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
              className="block font-display-hero leading-none tracking-tight text-secondary/15 text-[64px] lg:text-[88px]"
            >
              {section.index}
            </span>
            <h3 className="mt-2 font-display-hero text-on-surface tracking-tight text-[30px] sm:text-[36px] leading-[1.08]">
              {details[0]?.title ?? section.title}
            </h3>
            <div className="mt-5 border-t border-secondary/10">
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

export function TreatmentCataract() {
  const page = getTreatmentPage(SLUG);
  const source = getTreatmentDetail(SLUG);
  const gallery = pageGallery(SLUG);
  const [failed, setFailed] = React.useState<Set<string>>(new Set());
  const markFailed = React.useCallback((src: string) => {
    setFailed((prev) => (prev.has(src) ? prev : new Set(prev).add(src)));
  }, []);
  const heroOk = !failed.has(page.heroImage.src);

  return (
    <TreatmentShell current={page.title} slug="cataract-surgery">
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
              {source && (
                <p className="mt-5 max-w-[52ch] font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {source.intro}
                </p>
              )}
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
              <Reveal delay={0.1}>
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
                <Caption text={page.heroImage.caption} />
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
            <div className="space-y-12 lg:space-y-16 pt-6 lg:pt-10">
              {page.sections.map((section, i) => (
                <Story
                  key={section.id}
                  section={section}
                  flip={i % 2 === 1}
                  onFail={markFailed}
                  failed={failed}
                />
              ))}
            </div>

            <section aria-label="Treatment gallery" className="border-t border-secondary/10 mt-14 lg:mt-20 pt-10 lg:pt-14">
              <Reveal>
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                  A closer look
                </p>
                <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[28px] sm:text-[36px] leading-[1.1]">
                  The platforms, up close.
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
