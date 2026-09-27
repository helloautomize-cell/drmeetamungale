import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

// ─── Hero (editorial split — owner redesign spec + hero fix pass) ────
// Owner: the hero must land three things in 5 seconds — Mungale Eye
// Hospital, real experienced doctors, I will be cared for here. Editorial
// split: quiet left column (eyebrow → short emotional headline → 2-line
// support → doctor credit → CTA row → trust line), large real Mungale
// photograph right, subtle proof row underneath. Calm, not a form-first
// landing template.
// Hero fix pass (owner review of screenshot): the "Plan your visit" card
// is REMOVED from the hero entirely — it covered the doctor's face/hands
// and dominated the composition. Booking above the fold is carried by the
// red CTA + header CTA + floating pill, all → /contact-us/ (full form
// lives there). The stray red arc motif is REMOVED (read as a rendering
// bug in the gutter). Photo is re-framed on the faces/action via focal
// crop. BookingCard.tsx is kept unused as a reusable block for the
// contact section.
// Copy provenance:
// - Eyebrow, headline "You are seen here.", support copy, CTA labels,
//   trust line, proof figures: OWNER-PROVIDED wording/direction (hero
//   redesign prompt). Headline retires the old published "Best Eye
//   Hospital in Kothi, Vadodara" H1 by explicit owner instruction
//   (logged in docs/PROGRESS.md).
// - Doctor credit: VERBATIM from about-us ("Led by Dr. Sachin & Dr.
//   Meeta Mungale", "Two accomplished ophthalmologists — MS
//   Ophthalmology, DNB").
// - Proof: "20+" VERIFIED (est. 24 June 2007). "40,000+" / "15,000+" are
//   the WEBSITE'S claimed numbers — kept per owner instruction, NOT
//   independently verified (docs/CONTENT_GAPS.md #1).
// Photo: REAL Mungale photograph (slit-lamp examination underway at MEH,
// /images/IMG_21301-jpg.webp) — doctor, patient, staff, equipment, no
// stock, no heavy wash.

export function Hero() {
  return (
    <section className="relative w-full bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-4 lg:pt-6 pb-12 lg:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10 items-start">
          {/* LEFT — quiet editorial column */}
          <div className="lg:col-span-6 lg:pt-3">
            {/* Eyebrow — single quiet line (arc motif removed: it read as
                a stray mark in the gutter) */}
            <div
              className="hero-fade max-w-xl"
              style={{ animationDelay: "60ms" }}
            >
              <p className="text-[11px] lg:text-[12px] font-semibold uppercase tracking-[0.16em] text-on-surface/70">
                Mungale Eye Hospital · Kothi, Vadodara
              </p>
            </div>

            {/* Headline — "seen" keeps the editorial serif italic + red
                relationship, but in a slightly darker derived red
                (text-primary-fixed #B9191C, ~15% deeper than official red;
                logo + CTAs stay official #ED2225). One thin 1.5px curved
                stroke beneath "seen" (logo's upper curve), 64% of the word
                width, drawing in over 450ms. No glow, no boxes. */}
            <h1
              className="hero-rise mt-5 font-display-hero text-on-surface tracking-[-0.02em] text-[54px] sm:text-[66px] lg:text-[78px] xl:text-[88px] leading-[0.97]"
              style={{ animationDelay: "120ms" }}
            >
              You are{" "}
              <span className="relative inline-block">
                <em className="italic text-primary-fixed">seen</em>
                <svg
                  className="seen-stroke absolute left-[18%] w-[64%] -bottom-[10px] h-[8px]"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7.5 Q50 1.5 98 6"
                    stroke="#ED2225"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              here.
            </h1>

            {/* Supporting copy — OWNER-PROVIDED direction (art-direction
                refinement prompt): human, confident, concise */}
            <p
              className="hero-fade mt-6 text-[18px] lg:text-[19px] leading-[1.6] text-on-surface-variant max-w-xl"
              style={{ animationDelay: "300ms" }}
            >
              Specialist eye care built around careful diagnosis, honest
              conversations and knowing what comes next.
            </p>

            {/* Doctor credibility — quiet two-line block, never a card.
                Wording OWNER-PROVIDED (refinement prompt); names strong,
                credentials quiet. */}
            <div
              className="hero-fade mt-7 flex items-center gap-3"
              style={{ animationDelay: "440ms" }}
            >
              <div className="flex -space-x-2.5">
                <Image
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-background"
                  src="/images/doctors/DrMeeta-2.webp"
                  alt="Dr. Meeta Mungale, MS Ophthalmology, DNB"
                  width={32}
                  height={32}
                />
                <Image
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-background"
                  src="/images/doctors/Dr-Sachin.jpg"
                  alt="Dr. Sachin Mungale, MS Ophthalmology"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <p className="text-[14.5px] leading-snug text-on-surface-variant">
                  Led by{" "}
                  <span className="text-on-surface font-semibold">
                    Dr. Sachin &amp; Dr. Meeta Mungale
                  </span>
                </p>
                <p className="mt-0.5 text-[13px] leading-snug text-on-surface-variant">
                  Specialist ophthalmologists · MS Ophthalmology · DNB
                </p>
              </div>
            </div>

            {/* CTA hierarchy — primary official red; secondary is a quiet
                text link (no border): dark text + red arrow that nudges
                4px right on hover, thin red underline appears. */}
            <div
              className="hero-fade mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
              style={{ animationDelay: "620ms" }}
            >
              <Button
                asChild
                variant="primary"
                className="h-12 px-7 rounded-[13px] shadow-[0_1px_3px_rgba(17,17,18,0.18)]"
              >
                <Link href="/contact-us/">Book a consultation</Link>
              </Button>
              <Link
                href="/about-us/"
                className="cta-quiet group inline-flex items-center gap-1.5 h-12 px-1 text-[15px] font-semibold text-on-surface"
              >
                <span className="cta-quiet-text">Meet the doctors</span>
                <ArrowRight className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Quiet trust line — secondary, never a badge */}
            <p
              className="hero-fade mt-5 text-[13px] text-on-surface-variant"
              style={{ animationDelay: "720ms" }}
            >
              Since 2007 · Kothi, Vadodara
            </p>
          </div>

          {/* RIGHT — dominant real photograph, re-framed on the
              faces/action (focal crop, not dead-center). No card overlay:
              the photo column stays 100% clean. */}
          <div className="lg:col-span-6 relative">
            <div
              className="hero-sharpen h-[360px] sm:h-[440px] lg:h-[480px] xl:h-[500px] rounded-[20px] overflow-hidden ring-1 ring-border-subtle"
              style={{ animationDelay: "180ms" }}
            >
              <Image
                src="/images/IMG_21301-jpg.webp"
                alt="A doctor performing a slit-lamp eye examination on a patient at Mungale Eye Hospital, assisted by a staff member."
                priority
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[65%_28%] contrast-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
