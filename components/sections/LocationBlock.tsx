"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/motion";
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
// - Copy-address uses the Clipboard API with a textarea fallback.
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Mungale+Eye+Hospital+Kothi+Vadodara";
const EMBED_URL =
  "https://maps.google.com/maps?q=22.304108,73.193533&z=16&hl=en&output=embed";

const ADDRESS_SINGLE =
  "2nd Floor, Vinraj Plaza, opp. Government Press, Kothi Road, Anandpura, Vadodara, Gujarat 390001";

function telHref(n: string) {
  return "tel:" + n.replace(/[\s-]/g, "");
}

export function LocationBlock() {
  const [copied, setCopied] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    []
  );

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS_SINGLE);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = ADDRESS_SINGLE;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

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
          </div>

          {/* RIGHT (~58%) — the map as visual anchor */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative h-[300px] sm:h-[340px] lg:h-[430px] rounded-[20px] overflow-hidden ring-1 ring-secondary/10">
              <iframe
                title="Mungale Eye Hospital on Google Maps"
                src={EMBED_URL}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Floating place card — Google-style overlay: name + verbatim
                  address + directions/copy actions. NO rating row: no
                  verified aggregate rating exists (never fabricate one). */}
              <div className="absolute top-4 left-4 max-w-[248px] sm:max-w-[288px] bg-white rounded-xl px-4 py-3 shadow-[0_2px_12px_rgba(17,17,18,0.12)] ring-1 ring-secondary/10">
                <p className="text-[13.5px] font-bold text-on-surface leading-snug">
                  Mungale Eye Hospital
                </p>
                <p className="mt-1 text-[12px] leading-snug text-on-surface-variant">
                  {ADDRESS_SINGLE}
                </p>
                <div className="mt-2.5 flex items-center gap-2">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get directions to Mungale Eye Hospital"
                    className="w-9 h-9 rounded-full bg-primary text-white inline-flex items-center justify-center hover:bg-primary-fixed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={copyAddress}
                    aria-live="polite"
                    aria-label={copied ? "Address copied" : "Copy address"}
                    className="h-9 px-3.5 rounded-full ring-1 ring-inset ring-secondary/20 text-[12.5px] font-semibold text-on-surface hover:ring-primary hover:text-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    {copied ? "Copied ✓" : "Copy"}
                  </button>
                </div>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-secondary text-white text-[13px] font-semibold shadow-[0_2px_12px_rgba(17,17,18,0.25)] hover:bg-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <span>Open live map</span>
                <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
