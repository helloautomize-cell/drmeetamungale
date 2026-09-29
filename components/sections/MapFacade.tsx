"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

// ─── Map facade (perf pass) ────────────────────────────────────────────
// The Google Maps iframe is a heavy third-party payload, so it no longer
// loads on page load. A styled placeholder (same footprint, zero CLS)
// carries the place card + "Load map" button; the iframe mounts only on
// click. "Open live map" + directions links work in both states.
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Mungale+Eye+Hospital+Kothi+Vadodara";
const EMBED_URL =
  "https://maps.google.com/maps?q=22.304108,73.193533&z=16&hl=en&output=embed";
const ADDRESS_SINGLE =
  "2nd Floor, Vinraj Plaza, opp. Government Press, Kothi Road, Anandpura, Vadodara, Gujarat 390001";

export function MapFacade() {
  const [loaded, setLoaded] = React.useState(false);
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
    <div className="relative h-[300px] sm:h-[340px] lg:h-[430px] rounded-[20px] overflow-hidden ring-1 ring-secondary/10 bg-mist">
      {loaded ? (
        <iframe
          title="Mungale Eye Hospital on Google Maps"
          src={EMBED_URL}
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        /* Static facade — quiet map-toned placeholder, no network cost. */
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,#eef1f4_0%,#f7f5f1_55%,#e9e4dc_100%)]"
        >
          <svg
            className="absolute inset-0 w-full h-full text-secondary/[0.08]"
            preserveAspectRatio="none"
            viewBox="0 0 400 300"
            fill="none"
          >
            <path d="M-20 80 C80 60 140 110 220 90 S360 60 430 90" stroke="currentColor" strokeWidth="10" />
            <path d="M60 -20 C80 80 40 160 90 240 S120 320 100 340" stroke="currentColor" strokeWidth="8" />
            <path d="M200 -20 C210 60 260 120 240 200 S280 300 260 340" stroke="currentColor" strokeWidth="10" />
            <path d="M-20 200 C100 190 200 240 330 210 S420 190 440 200" stroke="currentColor" strokeWidth="7" />
          </svg>
          {/* Pin marker */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[70%]">
            <svg width="34" height="44" viewBox="0 0 34 44" fill="none" aria-hidden="true">
              <path d="M17 43S3 26.4 3 15.8C3 7.4 9.3 1 17 1s14 6.4 14 14.8C31 26.4 17 43 17 43Z" fill="#C62F28" />
              <circle cx="17" cy="15.5" r="5.5" fill="#fff" />
            </svg>
          </div>
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="absolute left-1/2 top-[62%] -translate-x-1/2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-[13.5px] font-semibold shadow-[0_2px_10px_rgba(14,17,22,0.18)] hover:bg-primary-fixed transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            Load map
          </button>
        </div>
      )}

      {/* Floating place card — Google-style overlay: name + verbatim
          address + directions/copy actions. NO rating row: no verified
          aggregate rating exists (never fabricate one). */}
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
  );
}
