"use client";

import React from "react";
import Link from "next/link";
import { TreatmentShell } from "@/components/sections/TreatmentShell";
import { TreatmentSelectorBar, TreatmentRail, treatmentNavOrder } from "@/components/sections/TreatmentNavigator";
import { ClinicalAccordion } from "@/components/sections/ClinicalAccordion";
import { ClinicalLightbox, type ClinicalImage } from "@/components/sections/ClinicalLightbox";
import { SafeImage } from "@/components/sections/SafeImage";
import {
  getTreatmentPage,
  pageDetails,
  pageGallery,
  type PageSection,
} from "@/content/treatment-pages";
import { Reveal } from "@/components/ui/motion";

// ─── TreatmentCorneal — REBUILT (/treatments/corneal-treatments/) ──────────
// Structural rebuild: real clinical hero (never the transplant diagram),
// integrated sticky rail, seven distinct editorial chapters with
// failure-proof media (no broken icons, no empty boxes — text-led fallback),
// curated gallery with live counts, custom related + prev/next with
// categories, shared SEE LIFE CLEARLY closing. Content, routes, design
// system and source images preserved.
const SLUG = "corneal-treatments";

function shortCategory(slug: string): string {
  try {
    const cat = getTreatmentPage(slug).category;
    return cat.split(/[—·]/)[0]?.trim() ?? "";
  } catch {
    return "";
  }
}

/** Small muted two-line caption: condition / kind. Never raw alt text. */
function Caption({ text }: { text: string }) {
  const [head, ...rest] = text.split(" — ");
  return (
    <p className="mt-3 text-[13px] leading-snug text-on-surface-variant">
      <span className="block font-semibold text-on-surface/80">{head}</span>
      {rest.length > 0 && <span className="block capitalize">{rest.join(" — ")}</span>}
    </p>
  );
}

function ChapterMedia({
  section,
  onFail,
  failed,
  sizes,
  aspect = "aspect-[4/3]",
}: {
  section: PageSection;
  onFail: (src: string) => void;
  failed: Set<string>;
  sizes?: string;
  aspect?: string;
}) {
  const img = section.image;
  if (!img || failed.has(img.src)) return null;
  const cls = section.contain
    ? "w-full " + aspect + " object-contain bg-white"
    : "w-full " + aspect + " object-cover";
  return (
    <figure>
      <div className="overflow-hidden rounded-[20px] ring-1 ring-secondary/10">
        <SafeImage
          src={img.src}
          alt={img.alt}
          sizes={sizes}
          className={cls}
          onFail={onFail}
        />
      </div>
      <Caption text={img.caption} />
    </figure>
  );
}

function ChapterText({ section }: { section: PageSection }) {
  // Reserve anchor + heading even if media failed — layout is text-led then.
  const details = pageDetails(SLUG, section.bodyKeys);
  return (
    <div>
      <span
        aria-hidden="true"
        className="block font-display-hero leading-none tracking-tight text-secondary/15 text-[64px] lg:text-[88px]"
      >
        {section.index}
      </span>
      <h3 className="mt-2 font-display-hero text-on-surface tracking-tight text-[30px] sm:text-[36px] leading-[1.08]">
        {section.title}
      </h3>
      <p className="mt-4 font-body-md text-body-md text-on-surface leading-relaxed max-w-[58ch]">
        {section.summary}
      </p>
      <div className="mt-5 border-t border-secondary/10">
        {details.map((d) => (
          <ClinicalAccordion key={d.title} title={d.title} body={d.body} />
        ))}
      </div>
    </div>
  );
}

function StandardChapter({
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
  const hasMedia = Boolean(section.image && !failed.has(section.image.src));
  return (
    <article id={"corneal-" + section.id} className="scroll-mt-32 border-t border-secondary/10 pt-10 lg:pt-14">
      {hasMedia ? (
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          <Reveal className={flip ? "lg:order-2" : ""}>
            <ChapterMedia section={section} onFail={onFail} failed={failed} />
          </Reveal>
          <Reveal delay={0.08} className={flip ? "lg:order-1" : ""}>
            <ChapterText section={section} />
          </Reveal>
        </div>
      ) : (
        <Reveal>
          <div className="max-w-3xl">
            <ChapterText section={section} />
          </div>
        </Reveal>
      )}
    </article>
  );
}

function LargeChapter({
  section,
  onFail,
  failed,
}: {
  section: PageSection;
  onFail: (src: string) => void;
  failed: Set<string>;
}) {
  const hasMedia = Boolean(section.image && !failed.has(section.image.src));
  const details = pageDetails(SLUG, section.bodyKeys);
  return (
    <article id={"corneal-" + section.id} className="scroll-mt-32 border-t border-secondary/10 pt-10 lg:pt-14">
      <Reveal>
        <span
          aria-hidden="true"
          className="block font-display-hero leading-none tracking-tight text-secondary/15 text-[64px] lg:text-[88px]"
        >
          {section.index}
        </span>
        <h3 className="mt-2 font-display-hero text-on-surface tracking-tight text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.08] max-w-[20ch]">
          {section.title}
        </h3>
      </Reveal>
      {hasMedia && (
        <Reveal>
          <figure className="mt-8">
            <div className="overflow-hidden rounded-[20px] ring-1 ring-secondary/10">
              <SafeImage
                src={section.image!.src}
                alt={section.image!.alt}
                width={1200}
                height={570}
                sizes="(min-width: 1024px) 75vw, 90vw"
                className="w-full aspect-[21/10] object-cover"
                onFail={onFail}
              />
            </div>
            <Caption text={section.image!.caption} />
          </figure>
        </Reveal>
      )}
      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
        <Reveal>
          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            {section.summary}
          </p>
          <Link
            href="/contact-us/"
            className="group mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface min-h-[44px]"
          >
            <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
              Ask about this treatment
            </span>
            <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
          </Link>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="border-t border-secondary/10">
            {details.map((d) => (
              <ClinicalAccordion key={d.title} title={d.title} body={d.body} />
            ))}
          </div>
        </Reveal>
      </div>
    </article>
  );
}

function TextLedChapter({
  section,
  strip,
  onFail,
  failed,
}: {
  section: PageSection;
  strip: ClinicalImage[];
  onFail: (src: string) => void;
  failed: Set<string>;
}) {
  const details = pageDetails(SLUG, section.bodyKeys);
  const live = strip.filter((s) => !failed.has(s.src));
  return (
    <article id={"corneal-" + section.id} className="scroll-mt-32 border-t border-secondary/10 pt-10 lg:pt-14">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7">
          <span
            aria-hidden="true"
            className="block font-display-hero leading-none tracking-tight text-secondary/15 text-[64px] lg:text-[88px]"
          >
            {section.index}
          </span>
          <h3 className="mt-2 font-display-hero text-on-surface tracking-tight text-[30px] sm:text-[36px] leading-[1.08]">
            {section.title}
          </h3>
          <p className="mt-4 font-body-md text-body-md text-on-surface leading-relaxed max-w-[58ch]">
            {section.summary}
          </p>
          <div className="mt-5 border-t border-secondary/10">
            {details.map((d) => (
              <ClinicalAccordion key={d.title} title={d.title} body={d.body} />
            ))}
          </div>
        </Reveal>
        {live.length > 0 && (
          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 gap-3 lg:sticky lg:top-32">
              {live.map((s) => (
                <figure key={s.src}>
                  <div className="overflow-hidden rounded-[14px] ring-1 ring-secondary/10">
                    <SafeImage
                      src={s.src}
                      alt={s.alt}
                      width={300}
                      height={300}
                      sizes="(min-width: 1024px) 12vw, 28vw"
                      className="w-full aspect-square object-cover"
                      onFail={onFail}
                    />
                  </div>
                  <Caption text={s.caption} />
                </figure>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

function Gallery() {
  const page = getTreatmentPage(SLUG);
  const all = pageGallery(SLUG);
  const filters = page.galleryFilters ?? [{ label: "All", match: "" }];
  const [match, setMatch] = React.useState("");
  const [failed, setFailed] = React.useState<string[]>([]);
  const [expanded, setExpanded] = React.useState(false);
  const [lb, setLb] = React.useState<number | null>(null);
  const markFailed = React.useCallback(
    (src: string) => setFailed((f) => (f.includes(src) ? f : [...f, src])),
    []
  );
  const valid = all.filter((g) => !failed.includes(g.src));
  const visible = match ? valid.filter((g) => g.caption.startsWith(match)) : valid;
  const featured = visible.slice(0, 4);
  const shown = expanded ? visible : featured;
  const active = filters.find((f) => f.match === match) ?? filters[0];
  const nav = React.useCallback(
    (dir: 1 | -1) => {
      setLb((i) => (i === null ? i : (i + dir + visible.length) % visible.length));
    },
    [visible.length]
  );
  const openAt = (src: string) => {
    const i = visible.findIndex((g) => g.src === src);
    if (i >= 0) setLb(i);
  };
  return (
    <section aria-label="Clinical gallery" className="border-t border-secondary/10 mt-14 lg:mt-20 pt-10 lg:pt-14">
      <Reveal>
        <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
          A closer look
        </p>
        <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[30px] sm:text-[38px] leading-[1.08]">
          Seen at Mungale.
        </h2>
        <p className="mt-3 max-w-[58ch] font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Clinical images and illustrations from the corneal care section.
        </p>
        <div role="group" aria-label="Filter gallery by condition" className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {filters.map((f) => {
            const selected = active && f.label === active.label;
            const count = f.match
              ? valid.filter((g) => g.caption.startsWith(f.match)).length
              : valid.length;
            return (
              <button
                key={f.label}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setMatch(f.match);
                  setExpanded(false);
                  setLb(null);
                }}
                className={
                  "min-h-[44px] text-[13px] font-bold uppercase tracking-[0.12em] border-b-2 pb-1 transition-colors motion-reduce:transition-none " +
                  (selected
                    ? "border-primary text-on-surface"
                    : "border-transparent text-on-surface-variant hover:text-on-surface")
                }
              >
                {f.label} <span className="font-normal">({count})</span>
              </button>
            );
          })}
        </div>
      </Reveal>
      {shown.length > 0 ? (
        <div className="mt-8 grid grid-cols-12 gap-4">
          {shown.map((img, i) => (
            <div
              key={img.src}
              className={
                !expanded && i < 4
                  ? i % 4 === 0
                    ? "col-span-12 sm:col-span-7"
                    : i % 4 === 3
                      ? "col-span-12 sm:col-span-7"
                      : "col-span-6 sm:col-span-5"
                  : "col-span-6 sm:col-span-4 lg:col-span-3"
              }
            >
              <Reveal delay={Math.min(i * 0.04, 0.2)}>
                <button
                  type="button"
                  onClick={() => openAt(img.src)}
                  aria-label={"Open image in viewer: " + img.caption}
                  className="block w-full overflow-hidden rounded-[16px] ring-1 ring-secondary/10"
                >
                  <SafeImage
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={600}
                    sizes="(min-width: 1024px) 25vw, 44vw"
                    className={
                      "w-full object-cover transition-transform duration-700 motion-reduce:transition-none hover:scale-[1.03] " +
                      (!expanded && (i % 4 === 0 || i % 4 === 3) ? "aspect-[16/10]" : "aspect-square")
                    }
                    onFail={markFailed}
                  />
                </button>
                <Caption text={img.caption} />
              </Reveal>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-8 font-body-md text-body-md text-on-surface-variant">
          No images under this filter right now — the clinical descriptions above carry the detail.
        </p>
      )}
      {!expanded && visible.length > 4 && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="group mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface min-h-[44px]"
        >
          <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
            View all {visible.length} images
          </span>
          <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
        </button>
      )}
      {lb !== null && visible[lb] && (
        <ClinicalLightbox images={visible} index={lb} onClose={() => setLb(null)} onNav={nav} />
      )}
    </section>
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
    <section aria-label="Previous and next treatments" className="border-t border-secondary/10 mt-14 lg:mt-20 pt-10 lg:pt-14">
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

export function TreatmentCorneal() {
  const page = getTreatmentPage(SLUG);
  const gallery = pageGallery(SLUG);
  const [failed, setFailed] = React.useState<Set<string>>(new Set());
  const markFailed = React.useCallback((src: string) => {
    setFailed((prev) => (prev.has(src) ? prev : new Set(prev).add(src)));
  }, []);
  const heroOk = !failed.has(page.heroImage.src);
  const dryStrip = ["de1.jpg", "de2.jpg", "de3.jpg"]
    .map((f) => gallery.find((g) => g.src.endsWith(f)))
    .filter((g): g is ClinicalImage => Boolean(g));

  return (
    <>
      <TreatmentShell current={page.title} slug="corneal-treatments">
        {/* ── Hero: real clinical image, ~75vh, vertically centred ── */}
        <section className="overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-4 lg:pt-6 pb-10 lg:pb-14">
            <div className={"grid gap-8 lg:gap-12 items-center w-full " + (heroOk ? "lg:grid-cols-2" : "max-w-3xl")}>
              <Reveal>
                <p className="mt-4 lg:mt-6 text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                  Treatment & Surgery · Cornea
                </p>
                <h1 className="mt-3 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.04] text-[42px] sm:text-[56px] lg:text-[64px]">
                  Corneal Treatments
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
                <Reveal delay={0.1}>
                  <div className="overflow-hidden rounded-[20px] ring-1 ring-secondary/10">
                    <SafeImage
                      src={page.heroImage.src}
                      alt={page.heroImage.alt}
                      width={800}
                      height={1000}
                      sizes="(min-width: 1024px) 44vw, 90vw"
                      className="w-full h-[300px] sm:h-[400px] lg:h-[400px] object-cover"
                      onFail={markFailed}
                      eager
                    />
                  </div>
                  <div className="mt-3 flex items-baseline justify-between">
                    <Caption text={page.heroImage.caption} />
                    <p className="shrink-0 pl-6 text-right text-[12px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
                      Corneal care · 7 areas
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
              {/* ── Intro ── */}
              <Reveal>
                <div className="pt-6 lg:pt-10">
                  <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                    Corneal care
                  </p>
                  <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[32px] sm:text-[44px] leading-[1.06]">
                    Different conditions.
                    <br />
                    Different approaches.
                  </h2>
                  <p className="mt-4 max-w-[62ch] font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Seven areas of cornea care, presented with the conditions,
                    approaches and clinical material used at Mungale.
                  </p>
                  <hr className="mt-8 border-secondary/10" />
                </div>
              </Reveal>

              {/* ── Chapters: composition follows content ── */}
              <div className="space-y-12 lg:space-y-16 mt-2">
                {page.sections.map((section, i) => {
                  if (i === 3) {
                    return (
                      <LargeChapter key={section.id} section={section} onFail={markFailed} failed={failed} />
                    );
                  }
                  if (i === 4) {
                    return (
                      <TextLedChapter
                        key={section.id}
                        section={section}
                        strip={dryStrip}
                        onFail={markFailed}
                        failed={failed}
                      />
                    );
                  }
                  return (
                    <StandardChapter
                      key={section.id}
                      section={section}
                      flip={i % 2 === 1}
                      onFail={markFailed}
                      failed={failed}
                    />
                  );
                })}
              </div>

              <Gallery />
              <Related />
              <PrevNext />
            </div>
          </div>
        </div>
        <div className="h-4" />
      </TreatmentShell>
    </>
  );
}
