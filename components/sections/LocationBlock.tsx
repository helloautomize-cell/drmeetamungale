import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/motion";
import { MapFacade } from "@/components/sections/MapFacade";
import { ArtImage } from "@/components/ui/ArtImage";
import { REAL } from "@/lib/images";
import { siteConfig } from "@/content/site";

// ─── Visit Mungale — "your visit starts here" (owner rebuild) ────────
// Replaces the white contact-card + map grid: editorial split with the map
// as the visual anchor (~58%) and warm-paper typography left (~42%).
// No icon boxes, no giant cards, no gradients.
// Copy/data provenance — ALL from content/site.ts (verbatim values):
// address lines, hours, both call numbers, both emergency numbers, email,
// maps search URL (existing directions destination) + verified embed
// coordinates (22.304108, 73.193533, live homepage JSON-LD geo).
// - "What to expect →" points to /faqs/ (the only remaining guidance
//   resource — the old FirstVisit homepage section was removed per owner,
//   so no first-visit anchor exists anymore).
// - Perf pass: the map iframe moved to a click-to-load facade
//   (MapFacade.tsx — a small client island; this section stays a Server
//   Component).
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Mungale+Eye+Hospital+Kothi+Vadodara";

function telHref(n: string) {
  return "tel:" + n.replace(/[\s-]/g, "");
}

export function LocationBlock() {
  return (
    <section id="visit" className="bg-background scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-14">
        <Reveal className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
            Visit Mungale
          </p>
          <h2 className="mt-4 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.05] text-[34px] sm:text-[40px] lg:text-[44px]">
            Your visit starts here.
          </h2>
          <p className="mt-3 text-[16px] lg:text-[17px] leading-relaxed text-on-surface-variant max-w-xl">
            Find us in Kothi, Vadodara. Everything you need before you
            arrive.
          </p>
        </Reveal>

        <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT (~42%) — hours, call, actions (address lives in the
              map place card) */}
          <div className="lg:col-span-5">
            <Reveal delay={0.08}>
              <div className="border-t border-secondary/10">
                <div className="py-4 border-b border-secondary/10">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                    Hours
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-on-surface">
                    {siteConfig.hours.weekdays.replace(" - ", "–")}
                    <br />
                    {siteConfig.hours.time}
                  </p>
                  <p className="mt-1.5 text-[15px] text-on-surface-variant">
                    Sunday · {siteConfig.hours.sunday}
                  </p>
                </div>
                <div className="py-4 border-b border-secondary/10">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                    Call
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed">
                    <a
                      href={telHref(siteConfig.phone)}
                      className="text-on-surface font-medium hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
                    >
                      {siteConfig.phone}
                    </a>
                    <br />
                    <a
                      href={telHref(siteConfig.landline)}
                      className="text-on-surface font-medium hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
                    >
                      {siteConfig.landline}
                    </a>
                  </p>
                  <p className="mt-1.5 text-[14px] text-on-surface-variant">
                    Emergency:{" "}
                    <a
                      href={telHref(siteConfig.emergencyPhone)}
                      className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
                    >
                      {siteConfig.emergencyPhone}
                    </a>
                    {", "}
                    <a
                      href={telHref(siteConfig.emergencyPhone2)}
                      className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
                    >
                      {siteConfig.emergencyPhone2}
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-5 flex flex-col gap-4">
                <Link
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 px-7 w-fit items-center justify-center gap-2 bg-primary text-white text-[14.5px] font-semibold rounded-[11px] shadow-[0_1px_2px_rgba(17,17,18,0.15)] hover:bg-primary-fixed transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <span>Get directions</span>
                  <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            {/* Thumbnail — the consultation room, captioned with the
                floor/building so it doubles as a wayfinding cue.
                TODO(photo wanted): building exterior / signage + reception
                would replace this. */}
            <Reveal delay={0.14}>
              <figure className="mt-8 flex items-center gap-4">
                <div className="h-[72px] w-[96px] shrink-0 overflow-hidden rounded-[12px] ring-1 ring-secondary/10">
                  <ArtImage
                    d={REAL.consultDesk.d}
                    alt="Consultation room at Mungale Eye Hospital"
                    sizes="96px"
                    className="h-full w-full"
                    imgClassName="h-full w-full object-cover object-[50%_40%]"
                  />
                </div>
                <figcaption className="text-[13.5px] leading-snug text-on-surface-variant">
                  2nd Floor, Vinraj Plaza
                  <span className="block text-[12.5px] text-on-surface-variant">opp. Government Press, Kothi Road</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* RIGHT (~58%) — map facade; iframe loads only on click */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <MapFacade />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
