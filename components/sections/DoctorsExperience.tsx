"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { doctors, type Doctor } from "@/content/doctors";
import { Reveal } from "@/components/ui/motion";

// ─── DoctorsExperience — click-to-switch doctor scene (About page only).
// The homepage now uses two static editorial cards (DoctorsStory.tsx).
// One composed scene — vertical doctor selector left (~35%), large
// portrait + story right. No cards, no badges, no icons, no pill buttons,
// no gradients. The selector + portrait + story are exported as
// DoctorsExperience so the About page reuses the SAME system (compact
// variant only tightens spacing — identical visuals, typography, motion).
// Copy provenance:
// - Eyebrow/headline/support/practice-connection lines: OWNER-PROVIDED
//   (rebuild prompt). Names + qualifications: VERBATIM content/doctors.ts.
// - Descriptions: LIGHTLY TRIMMED from verified doctors.ts descriptions
//   (meaning preserved, no new claims). No invented quotes, no philosophy
//   block (no approved content exists — omitted per spec, not fabricated).
// - "Meet Dr. X →" links to /about-us/ (no doctor profile pages exist;
//   full doctor info lives there). "Credentials & expertise" expands the
//   verified qualification + role lines inline via <details>.
// Photos: official real portraits (no stock, no grading). LIMITATION:
// Dr. Meeta's source is 285×331 (~7KB; identical in both project copies —
// no higher-res version exists), so her portrait renders softer than
// Dr. Sachin's 1200×1600. Displayed at a restrained width, never upscaled
// beyond reason (see docs/CONTENT_GAPS.md image quality).

function DoctorPortrait({ doctor }: { doctor: Doctor }) {
  return (
    <div
      key={doctor.slug}
      className="animate-story-in overflow-hidden rounded-[20px] ring-1 ring-secondary/10"
    >
      <Image
        src={doctor.imageUrl}
        alt={doctor.alt}
        width={480}
        height={600}
        loading="lazy"
        sizes="(min-width: 1024px) 30vw, 90vw"
        className="w-full aspect-[4/5] object-cover"
      />
    </div>
  );
}

function DoctorInfo({ doctor, index }: { doctor: Doctor; index: string }) {
  const firstName = doctor.name.replace("Dr. ", "").split(" ")[0];
  // Real qualifications only — split the verified credential string
  // ("MS - Ophthalmology, DNB") into pill tags (§4.8).
  const credentials = doctor.title.split(",").map((c) => c.trim());
  return (
    <div key={doctor.slug + "-info"} className="animate-story-in">
      <p
        aria-hidden="true"
        className="font-display-hero leading-none text-on-surface/30 select-none text-[64px]"
      >
        {index}
      </p>
      <h3 className="mt-2 font-display-hero text-on-surface tracking-tight leading-tight text-[30px] lg:text-[38px]">
        {doctor.name}
      </h3>
      <ul
        aria-label="Qualifications"
        className="mt-3 flex flex-wrap gap-2"
      >
        {credentials.map((c) => (
          <li
            key={c}
            className="rounded-full ring-1 ring-line bg-paper px-3 py-1 text-[12.5px] font-semibold text-ink-soft"
          >
            {c}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[15.5px] lg:text-[17px] leading-relaxed text-on-surface-variant max-w-lg">
        {doctor.description}
      </p>
      <div className="mt-6 flex flex-col gap-4">
        <Link
          href="/about-us/"
          className="cta-quiet group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
        >
          <span className="cta-quiet-text">Meet Dr. {firstName}</span>
          <ArrowRight
            aria-hidden="true"
            className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
        {/* TODO: pre-select doctor on the booking form once the contact
            form supports a ?doctor= param — link passes it harmlessly
            today. */}
        <Link
          href={"/contact-us/?doctor=" + doctor.slug}
          className="cta-quiet group inline-flex items-center gap-2 text-[14px] font-medium text-on-surface-variant w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
        >
          <span className="cta-quiet-text">Book with this doctor</span>
          <ArrowRight
            aria-hidden="true"
            className="w-3.5 h-3.5 text-primary transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}

export function DoctorsExperience({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = React.useState(0);
  const current = doctors[active]!;

  return (
    <>
      {/* DESKTOP — selector + composed scene */}
      <div
        className={
          "hidden lg:grid lg:grid-cols-12 gap-12 items-start " +
          (compact ? "mt-8 lg:mt-10" : "mt-12 lg:mt-16")
        }
      >
        {/* LEFT (~35%) — editorial selector, navigation not cards */}
        <div className="lg:col-span-4">
          <div
            role="tablist"
            aria-label="Choose a doctor"
            className="border-y border-secondary/10 divide-y divide-secondary/10"
          >
            {doctors.map((d, i) => {
              const isActive = i === active;
              return (
                <button
                  key={d.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className="group w-full text-left flex items-start gap-4 py-6 min-h-[88px] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-lg"
                >
                  <span className="flex flex-col items-start shrink-0 w-10">
                    <span
                      aria-hidden="true"
                      className={
                        "text-[13px] font-bold tracking-[0.16em] transition-colors duration-200 " +
                        (isActive ? "text-primary" : "text-on-surface-variant")
                      }
                    >
                      {i === 0 ? "01" : "02"}
                    </span>
                  </span>
                  <span className="flex-1 min-w-0">
                    <span
                      className={
                        "block text-[19px] transition-colors duration-200 " +
                        (isActive
                          ? "text-on-surface font-semibold"
                          : "text-on-surface-variant font-medium group-hover:text-on-surface")
                      }
                    >
                      {d.name}
                    </span>
                    <span
                      className={
                        "mt-0.5 block text-[13.5px] transition-colors duration-200 " +
                        (isActive
                          ? "text-on-surface-variant"
                          : "text-on-surface-variant")
                      }
                    >
                      {d.title}
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className={
                      "mt-1 w-[18px] h-[18px] shrink-0 transition-all duration-200 " +
                      (isActive
                        ? "text-primary translate-x-0 opacity-100"
                        : "text-on-surface/25 -translate-x-1 opacity-0 group-hover:opacity-100")
                    }
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT (~65%) — portrait + story */}
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div>
            <DoctorPortrait doctor={current} />
            <p className="mt-3 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
              Mungale Eye Hospital · Kothi, Vadodara
            </p>
          </div>
          <DoctorInfo
            doctor={current}
            index={active === 0 ? "01" : "02"}
          />
        </div>
      </div>

      {/* MOBILE — intentional stacked sequence, both doctors fully shown */}
      <div className={"space-y-14 lg:hidden " + (compact ? "mt-8" : "mt-12")}>
        {doctors.map((d, i) => (
          <Reveal key={d.slug}>
            <article>
              <p className="text-[12px] font-bold tracking-[0.2em] text-primary">
                {i === 0 ? "01" : "02"}
              </p>
              <div className="mt-3">
                <DoctorPortrait doctor={d} />
              </div>
              <div className="mt-5">
                <DoctorInfo doctor={d} index={i === 0 ? "01" : "02"} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}
