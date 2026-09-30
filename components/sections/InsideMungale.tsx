import React from "react";
import { ArtImage } from "@/components/ui/ArtImage";
import { Reveal } from "@/components/ui/motion";
import { REAL, canShow } from "@/lib/images";

// ─── "The moment of being seen" — photo band directly after the hero.
// The bridge from the brand idea (iris artwork) to real care (a specialist
// examining a patient). Full-bleed, capped at ~80vh, with a paper caption
// card bottom-left. Motion: .reveal only.
//
// CONSENT GATE: care-yag-* shows an identifiable patient. Until
// PATIENT_PHOTO_CONSENT_CONFIRMED is true we fall back to Dr. Sachin's
// clean portrait in a split composition (portrait left, caption right)
// rather than stretching a 4:5 portrait across a 16:9 band.
// Copy: eyebrow/line/credit exactly as briefed.

function Caption({ dark }: { dark?: boolean }) {
  return (
    <div
      className={
        dark
          ? "max-w-[420px] rounded-[16px] bg-ink/70 backdrop-blur-[10px] ring-1 ring-white/10 px-6 py-5 text-porcelain"
          : "max-w-[420px]"
      }
    >
      <p
        className={
          "text-[11.5px] font-bold uppercase tracking-[0.2em] " +
          (dark ? "text-porcelain/70" : "text-primary-fixed")
        }
      >
        Inside Mungale
      </p>
      <p
        className={
          "mt-3 font-display-hero tracking-[-0.01em] leading-[1.2] text-[22px] lg:text-[26px] " +
          (dark ? "text-porcelain" : "text-on-surface")
        }
      >
        Every examination, done by a specialist, explained in plain words.
      </p>
      <p
        className={
          "mt-3 text-[13px] " +
          (dark ? "text-porcelain/65" : "text-on-surface-variant")
        }
      >
        Dr. Sachin Mungale · Kothi, Vadodara
      </p>
    </div>
  );
}

export function InsideMungale() {
  if (canShow(REAL.careYag)) {
    return (
      <section className="bg-background pt-6 pb-4 lg:pt-8 lg:pb-6">
        <Reveal className="mx-auto max-w-[1600px] px-3 lg:px-6">
          <div className="relative overflow-hidden rounded-[28px] max-h-[80vh] aspect-[4/5] sm:aspect-[3/2] md:aspect-[16/9]">
            <ArtImage
              d={REAL.careYag.d}
              m={REAL.careYag.m}
              alt="Dr. Sachin Mungale examining an elderly patient at the YAG laser"
              sizes="(min-width: 1600px) 1600px, 100vw"
              className="h-full w-full"
              imgClassName="h-full w-full object-cover object-[50%_40%] md:object-[50%_45%]"
            />
            {/* Bottom-left legibility for the caption card */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[55%] bg-[linear-gradient(180deg,rgba(14,17,22,0)_0%,rgba(14,17,22,0.55)_100%)]"
            />
            <div className="absolute left-4 bottom-4 lg:left-8 lg:bottom-8">
              <Caption dark />
            </div>
          </div>
        </Reveal>
      </section>
    );
  }

  // Fallback — consent not yet on file.
  return (
    <section className="bg-background py-6 lg:py-10">
      <Reveal className="mx-auto max-w-site px-6 lg:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="overflow-hidden rounded-[28px] aspect-[4/5] max-w-[480px]">
              <ArtImage
                d={REAL.sachin.d}
                alt="Dr. Sachin Mungale at the slit lamp"
                sizes="(min-width: 1024px) 420px, (min-width: 768px) 40vw, 90vw"
                className="h-full w-full"
                imgClassName="h-full w-full object-cover object-[50%_35%]"
              />
            </div>
          </div>
          <div className="md:col-span-7 lg:col-span-6 lg:col-start-6">
            <Caption />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
