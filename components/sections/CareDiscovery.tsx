"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArtImage } from "@/components/ui/ArtImage";
import { Reveal } from "@/components/ui/motion";
import { IMG, REAL, type Img } from "@/lib/images";
import { treatments } from "@/content/treatments";
import { siteConfig } from "@/content/site";

// ─── Care discovery (owner redesign: ONE unified patient-first section)
// Replaces the homepage's "What Brought You Here?" concern pills AND the
// "Signature Eye Care Treatments" card grid (TreatmentsShowcase stays in
// use on /treatments/ — untouched). Patient experience first ("what am I
// experiencing?") → Mungale response ("here is where we can help").
// Editorial index left (~42%), relevant care right (~58%); mobile is an
// intentional accordion reusing the same panel. No cards, no pills, no
// icons, no shadows — typography, numbers, rules and one red curve.
// Copy provenance:
// - Section header (eyebrow/headline/support), concern labels, blurry
//   heading "Where clearer vision begins.", blurry support line, not-sure
//   panel wording: OWNER-PROVIDED (redesign prompt).
// - Other concern headings + support lines: DRAFTED at owner permission,
//   plain-language navigation only — no diagnoses, no triage, no medical
//   advice (mark: DRAFT-COPY, CONTENT_GAPS).
// - Treatment blurbs: shortened from VERBATIM treatments.ts descriptions,
//   factual meaning preserved. Concern→treatment mapping stays inside the
//   site's own clinical families (cornea / glaucoma / cataract / optical),
//   extending the previously validated concern links — never invented
//   pages (e.g. owner's "Cataract Evaluation" example maps to the real
//   "Cataract Surgery" page). No images: no verified concern-specific
//   photos exist, and the spec forbids forcing one — the composition is
//   complete as pure typography.
// Accessibility: semantic buttons, aria-expanded + aria-controls, visible
// focus rings, active state carried by text weight + support line + red
// accents (never color alone), animate-tab-in is reduced-motion safe.

type CareConcern = {
  index: string;
  title: string;
  support: string;
  heading: string;
  slugs: string[];
  // Singleton enrichment: description-derived bullets + details-derived
  // supporting line so one-treatment states feel complete, never padded.
  // Sources in comments per concern — nothing invented.
  addresses?: string[];
  note?: string;
};

const concerns: CareConcern[] = [
  {
    index: "01",
    title: "Blurry vision",
    // OWNER-PROVIDED support line.
    support: "Something doesn't feel as clear as it used to.",
    // OWNER-PROVIDED heading.
    heading: "Where clearer vision begins.",
    slugs: ["cataract-surgery", "optical-contact-lenses"],
  },
  {
    index: "02",
    title: "Glaucoma concerns",
    // DRAFT-COPY — navigation label only.
    support: "Questions about eye pressure or ongoing checks.",
    // DRAFT-COPY.
    heading: "Understanding eye pressure, step by step.",
    slugs: ["glaucoma-evaluation", "glaucoma-treatments"],
  },
  {
    index: "03",
    title: "Corneal problems",
    // DRAFT-COPY — navigation label only.
    support: "Irritation, injury or surface discomfort.",
    // DRAFT-COPY.
    heading: "Care for the front of your eye.",
    slugs: ["cornea-evaluation", "corneal-treatments"],
  },
  {
    index: "04",
    title: "Cataract",
    // DRAFT-COPY — navigation label only.
    support: "Clouding, glare or fading colour.",
    // DRAFT-COPY.
    heading: "When clarity starts to cloud.",
    slugs: ["cataract-surgery"],
    // Bullet: verbatim treatments.ts wording. Note: condensed from
    // treatment-details.ts cataract intro (phaco + IOL range) — meaning kept.
    addresses: ["A clouded natural lens"],
    note: "Advanced phacoemulsification, often completed in minutes, with all intraocular lens types offered.",
  },
  {
    index: "05",
    title: "Glasses & lenses",
    // DRAFT-COPY — navigation label only.
    support: "Power checks, frames and contact lenses.",
    // DRAFT-COPY.
    heading: "Seeing well, every day.",
    slugs: ["optical-contact-lenses"],
    // Bullets: verbatim treatment description/intro wording. Note: condensed
    // from treatment-details.ts optical body (range + custom fit) — kept.
    addresses: ["Myopia", "Hyperopia", "Astigmatism"],
    note: "Spectacles and contact lenses — rigid, soft, cosmetic and specialty keratoconus lenses, custom-fit for your eyes.",
  },
];

// Shortened from VERBATIM treatments.ts descriptions — meaning preserved.
const blurbs: Record<string, string> = {
  "cataract-surgery":
    "Removes the clouded lens with advanced phaco technology, replacing it with a suitable intraocular lens.",
  "optical-contact-lenses":
    "Glasses and contact lenses correcting myopia, hyperopia and astigmatism.",
  "glaucoma-evaluation":
    "Measures eye pressure and checks optic nerve health and visual field to detect vision loss.",
  "glaucoma-treatments":
    "Eye drops, medications, laser therapy and surgical options to lower eye pressure.",
  "cornea-evaluation":
    "Assesses corneal shape, thickness and clarity to diagnose eye conditions.",
  "corneal-treatments":
    "Medication, surgery or specialised therapies for infections, injuries and conditions.",
};

// One image per symptom (quiet-luxury spec §5.3). The still-lifes have
// their subject low in the frame (~83%), so the mobile box is a shorter
// landscape crop anchored near the bottom and the desktop box is square
// at 82% — either way the subject isn't a sliver at the edge (bug 4).
// "Not sure" uses the real consultation-desk photo — a person, not an
// object. Alts describe the image, not a diagnosis.
type ConcernArt = { d: Img; m?: Img; alt: string; pos: string; mPos?: string };
const concernArt: Record<number, ConcernArt> = {
  0: { d: IMG.cataract.d, alt: "Warm artwork representing cataract care", pos: "object-[50%_82%]", mPos: "object-[50%_96%]" },
  1: { d: IMG.glaucoma.d, alt: "Warm artwork representing glaucoma care", pos: "object-[50%_82%]", mPos: "object-[50%_96%]" },
  2: { d: IMG.cornea.d, alt: "Warm artwork representing cornea care", pos: "object-[50%_82%]", mPos: "object-[50%_96%]" },
  3: { d: IMG.cataract.d, alt: "Warm artwork representing cataract care", pos: "object-[50%_82%]", mPos: "object-[50%_96%]" },
  4: { d: IMG.optical.d, alt: "Warm artwork representing optical and contact lenses", pos: "object-[50%_82%]", mPos: "object-[50%_96%]" },
  5: { d: REAL.consultDesk.d, alt: "Dr. Meeta Mungale in consultation at her desk", pos: "object-[50%_35%]", mPos: "object-[50%_25%]" },
};

function ConcernImage({ art }: { art: ConcernArt }) {
  return (
    <div className="w-full shrink-0 lg:w-[38%]">
      <div className="h-[200px] sm:h-[240px] overflow-hidden rounded-[20px] ring-1 ring-secondary/10 lg:aspect-square lg:h-auto">
        <ArtImage
          d={art.d}
          m={art.m}
          alt={art.alt}
          sizes="(min-width: 1024px) 300px, 90vw"
          className="h-full w-full"
          imgClassName={"h-full w-full object-cover " + (art.mPos ?? art.pos) + " lg:" + art.pos}
        />
      </div>
    </div>
  );
}

const NOT_SURE_INDEX = 5;

function TreatmentRows({ slugs }: { slugs: string[] }) {
  return (
    <ul className="divide-y divide-secondary/10 border-y border-secondary/10">
      {slugs.map((slug, i) => {
        const t = treatments.find((x) => x.slug === slug)!;
        return (
          <li key={slug}>
            <Link
              href={"/treatments/" + slug + "/"}
              className="group flex items-start gap-4 lg:gap-5 py-5 lg:py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-lg"
            >
              <span
                aria-hidden="true"
                className="pt-1 text-[13px] font-bold tracking-[0.12em] text-on-surface-variant shrink-0"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-[17px] lg:text-[19px] font-semibold text-on-surface group-hover:text-primary transition-colors duration-200">
                  {t.title}
                </span>
                <span className="mt-1 block text-[14px] lg:text-[15px] leading-relaxed text-on-surface-variant">
                  {blurbs[slug]}
                </span>
              </span>
              <ArrowRight
                aria-hidden="true"
                className="mt-1.5 w-[18px] h-[18px] shrink-0 text-on-surface/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function ExploreTreatments({ slugs }: { slugs: string[] }) {
  const single = slugs.length === 1;
  return (
    <Link
      href={single ? "/treatments/" + slugs[0] + "/" : "/treatments/"}
      className="cta-quiet group mt-7 lg:mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
    >
      <span className="cta-quiet-text">
        {single ? "Explore treatment" : "Explore all treatments"}
      </span>
      <ArrowRight
        aria-hidden="true"
        className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  );
}

function ConversationPanel() {
  const phone = siteConfig.phone.replace(/\s/g, "");
  const art = concernArt[NOT_SURE_INDEX]!;
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
      <ConcernImage art={art} />
      <div className="min-w-0 flex-1">
      {/* OWNER-PROVIDED wording — navigation to conversation, never a diagnosis. */}
      <h3 className="font-display-hero text-on-surface tracking-tight leading-tight text-[26px] lg:text-[34px]">
        That&apos;s okay. Start with a conversation.
      </h3>
      <p className="mt-3 text-[15px] lg:text-[16px] leading-relaxed text-on-surface-variant max-w-lg">
        Tell our team what you&apos;re experiencing and we&apos;ll help you
        find the right place to begin.
      </p>
      <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <a
          href={"tel:" + phone}
          className="cta-quiet group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
        >
          <span className="cta-quiet-text">Speak to our team</span>
          <ArrowRight
            aria-hidden="true"
            className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>
        <Link
          href="/contact-us/"
          className="cta-quiet group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
        >
          <span className="cta-quiet-text">Book a consultation</span>
          <ArrowRight
            aria-hidden="true"
            className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
      </div>
    </div>
  );
}

function CarePanel({ concernIndex }: { concernIndex: number }) {
  if (concernIndex === NOT_SURE_INDEX) return <ConversationPanel />;
  const c = concerns[concernIndex]!;
  const art = concernArt[concernIndex];
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
      {/* One image per symptom — square at ~38% of the panel on desktop,
          above the text on mobile. */}
      {art && <ConcernImage art={art} />}
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
          Care for this
        </p>
        <h3 className="mt-3 font-display-hero text-on-surface tracking-tight leading-tight text-[26px] lg:text-[34px]">
          {c.heading}
        </h3>
        <div className="mt-6">
          <TreatmentRows slugs={c.slugs} />
        </div>
        {c.addresses && (
          <div className="mt-7 border-t border-secondary/10 pt-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              What this addresses
            </p>
            <ul className="mt-3 space-y-2">
              {c.addresses.map((a) => (
                <li
                  key={a}
                  className="flex items-baseline gap-2.5 text-[15px] text-on-surface"
                >
                  <span
                    aria-hidden="true"
                    className="w-1 h-1 rounded-full bg-primary shrink-0 translate-y-[-2px]"
                  />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            {c.note && (
              <p className="mt-3 text-[14px] leading-relaxed text-on-surface-variant max-w-lg">
                {c.note}
              </p>
            )}
          </div>
        )}
        <ExploreTreatments slugs={c.slugs} />
      </div>
    </div>
  );
}

export function CareDiscovery() {
  const [active, setActive] = React.useState(0);
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const items = [...concerns.map((c) => ({ ...c, kind: "care" as const })), {
    index: "06",
    title: "Not sure where to start",
    // OWNER-PROVIDED direction.
    support: "That's okay — start with a conversation.",
    kind: "conversation" as const,
  }];

  // Roving tabindex + arrow-key navigation (spec §4.5 — works as tabs).
  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = items.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight")
      next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft")
      next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
            Start here
          </p>
          <h2 className="mt-4 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.05] text-[36px] sm:text-[44px] lg:text-[54px]">
            Start with what you&apos;re experiencing.
          </h2>
          <p className="mt-4 text-[17px] lg:text-[18px] leading-relaxed text-on-surface-variant max-w-xl">
            Tell us what brought you here and explore the areas of care that
            may be relevant to you.
          </p>
        </Reveal>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT (~33%) — editorial concern index, sticky on desktop.
              Rebalanced 5/7 → 4/8 so the panel's image + text breathe. */}
          <div className="lg:col-span-4 lg:sticky lg:top-[140px]">
            <div
              role="tablist"
              aria-label="What are you experiencing"
              aria-orientation="vertical"
              onKeyDown={onKeyDown}
              className="border-y border-secondary/10 divide-y divide-secondary/10"
            >
              {items.map((item, i) => {
                const isActive = i === active;
                return (
                    <button
                      key={item.index}
                      ref={(el) => {
                        tabRefs.current[i] = el;
                      }}
                      type="button"
                      role="tab"
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => setActive(i)}
                      aria-selected={isActive}
                      aria-controls="care-desktop care-mobile"
                      className={
                        "group relative w-full text-left flex items-start gap-4 py-5 min-h-[68px] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-lg " +
                        (isActive ? "bg-red-wash" : "")
                      }
                    >
                      {/* Active tick — thin red rule marking the row. */}
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-5 bottom-5 w-[2px] rounded-full bg-primary"
                        />
                      )}
                      <span
                        aria-hidden="true"
                        className={
                          "pl-4 pt-1 text-[12px] font-bold tracking-[0.16em] shrink-0 transition-colors duration-200 " +
                          (isActive
                            ? "text-primary"
                            : "text-on-surface-variant")
                        }
                      >
                        {item.index}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span
                          className={
                            "block text-[17px] lg:text-[18px] transition-colors duration-200 " +
                            (isActive
                              ? "text-on-surface font-semibold"
                              : "text-on-surface-variant font-medium group-hover:text-on-surface")
                          }
                        >
                          {item.title}
                        </span>
                        {isActive && (
                          <span className="mt-1 block text-[14px] leading-snug text-on-surface-variant animate-tab-in">
                            {item.support}
                          </span>
                        )}
                      </span>
                      <ArrowRight
                        aria-hidden="true"
                        className={
                          "mt-1 w-[18px] h-[18px] shrink-0 transition-all duration-200 " +
                          (isActive
                            ? "text-primary translate-x-0"
                            : "text-on-surface/25 -translate-x-0.5 group-hover:text-on-surface/50")
                        }
                      />
                    </button>
                );
              })}
            </div>
            {/* Mobile panel — outside the tablist so tablist children are
                tabs only (aria-required-children). Shared panel for whichever
                concern is active. */}
            <div id="care-mobile" className="lg:hidden pb-7 pt-6" role="tabpanel" aria-live="polite">
              <div key={active} className="animate-tab-in">
                <CarePanel concernIndex={active} />
              </div>
            </div>
          </div>

          {/* RIGHT (~58%) — relevant care for the active concern.
              Switch: 250ms opacity fade-in via .animate-tab-in (§3). */}
          <div
            className="hidden lg:block lg:col-span-8"
            role="tabpanel"
            id="care-desktop"
            aria-live="polite"
          >
            <div key={active} className="animate-tab-in">
              <CarePanel concernIndex={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
