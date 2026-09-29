"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "motion/react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

// ─── Patient journey — "What happens when you come in." (§4.7) ─────────
// Desktop ≥1024px: pinned section; step text swaps on the left while a
// vertical rail fills red on the right with 4 nodes lighting up, and the
// facility photograph crossfades per step.
// Mobile / reduced-motion: a simple stacked card list — same content.
//
// Step copy is calm, factual process language describing the practice
// (diagnostic workup, planning discussion, follow-up care) — no outcome
// promises. TODO: confirm exact visit sequence with the doctors.
// Images: real published facility photographs.

const STEPS = [
  {
    num: "01",
    title: "Consultation",
    body: "You sit with one of the doctors. They listen first — symptoms, history, concerns — before anything is examined.",
    img: "/images/gallery/IMG_2235-scaled.jpg",
    alt: "Doctors consulting at Mungale Eye Hospital",
  },
  {
    num: "02",
    title: "Detailed diagnostics",
    body: "Tests are done in-house — vision measurement, corneal scans, eye pressure and retinal imaging as needed.",
    img: "/images/gallery/IMG_2138-scaled.jpg",
    alt: "Slit lamp examination equipment",
  },
  {
    num: "03",
    title: "Your plan, explained",
    body: "Findings are discussed openly — the diagnosis, the options, and what each path involves. Nothing is rushed.",
    img: "/images/gallery/IMG_2174-scaled.jpg",
    alt: "Doctor working at diagnostic station",
  },
  {
    num: "04",
    title: "Treatment & follow-up",
    body: "Whether it's a procedure, medication or monitoring, follow-up visits are scheduled so progress is tracked.",
    img: "/images/gallery/IMG_2193-scaled.jpg",
    alt: "Equipment and treatment room at Mungale Eye Hospital",
  },
];

export function PatientJourney() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const railRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(0);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const st = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=" + STEPS.length * 55 + "%",
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const i = Math.min(
                STEPS.length - 1,
                Math.floor(self.progress * STEPS.length)
              );
              setActive(i);
              if (railRef.current)
                railRef.current.style.transform =
                  "scaleY(" + self.progress + ")";
            },
          },
        });
        return () => st.scrollTrigger?.kill();
      });
      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [reduced] }
  );

  const step = STEPS[active] ?? STEPS[0]!;

  return (
    <section
      ref={sectionRef}
      className="bg-mist py-20 lg:py-0 lg:h-[100svh] lg:min-h-[720px] lg:flex lg:flex-col lg:justify-center overflow-x-clip"
    >
      <div className="max-w-site mx-auto w-full px-6 lg:px-gutter">
        <Reveal className="max-w-3xl">
          <Eyebrow>First visit?</Eyebrow>
          <h2 className="mt-4 font-fluid-h2 text-fluid-h2 text-ink tracking-[-0.015em]">
            What happens when you come in.
          </h2>
        </Reveal>

        {/* ── Desktop: pinned swap scene ─────────────────────────── */}
        <div className="mt-12 hidden lg:grid grid-cols-12 gap-14 items-center">
          {/* Left — step text swaps */}
          <div className="col-span-5 relative min-h-[280px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="font-display-hero text-[15px] tabular-nums text-brand-red-strong">
                  {step.num}
                </span>
                <h3 className="mt-2 font-display-hero text-ink tracking-tight leading-tight text-[34px]">
                  {step.title}
                </h3>
                <p className="mt-4 text-[17px] leading-relaxed text-ink-soft max-w-md">
                  {step.body}
                </p>
              </motion.div>
            </AnimatePresence>
            <Link
              href="/faqs/"
              className="cta-quiet group mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-ink w-fit absolute bottom-0"
            >
              <span className="cta-quiet-text">What to expect →</span>
            </Link>
          </div>

          {/* Right — crossfading images + vertical rail */}
          <div className="col-span-7 relative">
            {/* Rail: porcelain hairline + red fill + 4 nodes */}
            <div
              aria-hidden="true"
              className="absolute -left-8 top-6 bottom-6 w-px bg-ink/10"
            >
              <div
                ref={railRef}
                className="absolute inset-0 bg-brand-red-strong origin-top scale-y-0"
              />
              {STEPS.map((s, i) => (
                <span
                  key={s.num}
                  className={
                    "absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full ring-2 transition-all duration-300 " +
                    (i <= active
                      ? "bg-brand-red-strong ring-brand-red-strong/30"
                      : "bg-mist ring-ink/15")
                  }
                  style={{ top: (i / (STEPS.length - 1)) * 100 + "%" }}
                />
              ))}
            </div>
            <div className="relative h-[62vh] min-h-[440px] rounded-media overflow-hidden ring-1 ring-ink/10">
              {STEPS.map((s, i) => (
                <div
                  key={s.num}
                  className="absolute inset-0 transition-opacity duration-500 ease-out"
                  style={{ opacity: i === active ? 1 : 0 }}
                  aria-hidden={i !== active}
                >
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile / reduced: stacked step list ────────────────── */}
        <ol className="mt-10 lg:hidden space-y-4">
          {STEPS.map((s) => (
            <li
              key={s.num}
              className="bg-paper rounded-[20px] ring-1 ring-line overflow-hidden"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  loading="lazy"
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <span className="font-display-hero text-[13px] tabular-nums text-brand-red-strong">
                  {s.num}
                </span>
                <h3 className="mt-1.5 font-display-hero text-ink tracking-tight text-[22px]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/faqs/"
              className="cta-quiet inline-flex items-center gap-2 text-[15px] font-semibold text-ink"
            >
              <span className="cta-quiet-text">What to expect →</span>
            </Link>
          </li>
        </ol>
      </div>
    </section>
  );
}
