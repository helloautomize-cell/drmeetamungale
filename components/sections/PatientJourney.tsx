import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArtImage } from "@/components/ui/ArtImage";
import { Reveal } from "@/components/ui/motion";
import { IMG, REAL, gated } from "@/lib/images";
import { JourneySticky, type JourneyStep } from "@/components/sections/JourneySticky";

// ─── Patient journey — "What happens when you come in." ────────────────
// Desktop (≥1024px): Pattern B sticky step list (JourneySticky — a small
// client island; native scrolling, no pinning). Mobile: stacked cards.
// Images: step 1 = real consultation-desk photo; step 2 = real slit-lamp
// exam (CONSENT-GATED → falls back to the diagnostics still-life);
// steps 3–4 = still-lifes. Copy unchanged.
// TODO(content): confirm the exact visit sequence with the doctors —
// copy is generic process language, no source document exists.

const STEPS: JourneyStep[] = [
  {
    num: "01",
    title: "Consultation",
    body: "You sit with one of the doctors. They listen first — symptoms, history, concerns — before anything is examined.",
    img: REAL.consultDesk,
    alt: "Dr. Meeta Mungale in consultation at her desk",
    pos: "object-[50%_40%]",
  },
  {
    num: "02",
    title: "Detailed diagnostics",
    body: "Tests are done in-house — vision measurement, corneal scans, eye pressure and retinal imaging as needed.",
    img: gated(REAL.examSlit, IMG.j2),
    alt: gated(REAL.examSlit, IMG.j2) === REAL.examSlit
      ? "A slit-lamp examination at Mungale Eye Hospital"
      : "Diagnostic imaging being performed",
    pos: "object-[50%_45%]",
  },
  {
    num: "03",
    title: "Your plan, explained",
    body: "Findings are discussed openly — the diagnosis, the options, and what each path involves. Nothing is rushed.",
    img: IMG.j3,
    alt: "A doctor explaining findings and next steps",
  },
  {
    num: "04",
    title: "Treatment & follow-up",
    body: "Whether it's a procedure, medication or monitoring, follow-up visits are scheduled so progress is tracked.",
    img: IMG.j4,
    alt: "Recovery and follow-up care",
  },
];

export function PatientJourney() {
  return (
    <section className="bg-porcelain">
      <div className="mx-auto max-w-site px-6 py-[88px] lg:px-gutter lg:py-24">
        <Reveal className="max-w-2xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-red-strong">
            First visit?
          </p>
          <h2 className="mt-4 font-display-hero text-ink tracking-[-0.015em] leading-[1.05] text-[36px] sm:text-[44px] lg:text-[54px]">
            What happens when you come in.
          </h2>
        </Reveal>

        {/* DESKTOP — Pattern B */}
        <div className="mt-12 hidden lg:block">
          <JourneySticky steps={STEPS} />
        </div>

        {/* MOBILE / TABLET — stacked cards, same images */}
        <Reveal className="mt-12 lg:hidden">
          <ol className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 no-scrollbar md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:gap-8">
            {STEPS.map((s) => (
              <li key={s.num} className="w-[82vw] shrink-0 snap-center md:w-auto">
                <div className="aspect-[4/5] overflow-hidden rounded-[20px] border border-line bg-paper md:aspect-[4/3]">
                  <ArtImage
                    d={s.img.d}
                    m={s.img.m}
                    alt={s.alt}
                    sizes="(min-width: 768px) 45vw, 82vw"
                    className="h-full w-full"
                    imgClassName={"h-full w-full object-cover " + (s.pos ?? "")}
                  />
                </div>
                <div className="mt-4">
                  <p className="text-[12px] font-bold tracking-[0.2em] text-brand-red-strong tabular-nums">
                    {s.num}
                  </p>
                  <h3 className="mt-1.5 font-display-hero text-ink tracking-tight leading-tight text-[22px]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-10 lg:mt-6">
          <Link
            href="/faqs/"
            className="cta-quiet group inline-flex w-fit items-center gap-2 text-[15px] font-semibold text-ink"
          >
            <span className="cta-quiet-text">What to expect</span>
            <ArrowRight
              aria-hidden="true"
              className="w-4 h-4 text-brand-red-strong transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
