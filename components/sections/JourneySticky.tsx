"use client";

import React from "react";
import { ArtImage } from "@/components/ui/ArtImage";
import type { Img } from "@/lib/images";

// ─── Pattern B — sticky step list (desktop ≥1024px only) ────────────────
// Left column is plain `position: sticky`: the current step's big serif
// numeral + label, a vertical progress line with 4 dots (completed = red),
// and the current step's image crossfading below. Right column is the 4
// steps as a normal scrolling list; the step nearest the viewport centre
// is active (ink), the rest fade to 40%.
// Detection: one IntersectionObserver with rootMargin -45%/-45% (a thin
// band around the viewport centre). No pinning, no scroll-jacking — the
// page scrolls natively. JS off: step 1 is shown at left, all steps
// render at full opacity (the `js`-gated CSS below).
// Reduced motion: transitions off via the global rule; nothing moves.

export type JourneyStep = {
  num: string;
  title: string;
  body: string;
  img: { d: Img; m?: Img };
  alt: string;
  pos?: string;
};

export function JourneySticky({ steps }: { steps: JourneyStep[] }) {
  const [active, setActive] = React.useState(0);
  const refs = React.useRef<(HTMLLIElement | null)[]>([]);

  React.useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset["step"]);
            if (!Number.isNaN(idx)) setActive(idx);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const current = steps[active] ?? steps[0]!;

  return (
    <div className="grid grid-cols-12 gap-12 xl:gap-16">
      {/* LEFT — sticky rail */}
      <div className="col-span-5">
        <div className="sticky top-[152px]">
          <div className="flex items-start gap-8">
            {/* Progress line + dots */}
            <ol
              aria-hidden="true"
              className="relative flex flex-col items-center pt-3"
            >
              <span className="absolute top-3 bottom-3 w-px bg-line" />
              {steps.map((s, i) => (
                <li
                  key={s.num}
                  className={
                    "relative z-10 my-[22px] h-2.5 w-2.5 rounded-full ring-4 ring-porcelain transition-colors duration-300 " +
                    (i <= active ? "bg-brand-red-strong" : "bg-line")
                  }
                />
              ))}
            </ol>

            <div className="min-w-0 flex-1">
              {/* Numeral + label crossfade */}
              <div key={current.num} className="animate-story-in">
                <p className="font-display-hero leading-none tracking-tight text-brand-red text-[96px] xl:text-[112px] tabular-nums">
                  {current.num}
                </p>
                <p className="mt-2 font-display-hero text-ink tracking-tight leading-tight text-[26px] xl:text-[30px]">
                  {current.title}
                </p>
              </div>

              {/* Image — all four stacked; the active one is opaque. */}
              <div className="relative mt-8 aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-[20px] border border-line bg-paper">
                {steps.map((s, i) => (
                  <div
                    key={s.num}
                    aria-hidden={i !== active}
                    className={
                      "absolute inset-0 transition-opacity duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none " +
                      (i === active ? "opacity-100" : "opacity-0")
                    }
                  >
                    <ArtImage
                      d={s.img.d}
                      alt={i === active ? s.alt : ""}
                      sizes="(min-width: 1280px) 520px, 40vw"
                      className="h-full w-full"
                      imgClassName={"h-full w-full object-cover " + (s.pos ?? "")}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — the steps as a normal list */}
      <ol className="col-span-7 pt-6">
        {steps.map((s, i) => (
          <li
            key={s.num}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-step={i}
            className={
              "journey-step border-t border-line py-14 xl:py-16 transition-opacity duration-300 motion-reduce:transition-none " +
              (i === active ? "opacity-100" : "opacity-40")
            }
          >
            <p className="text-[12px] font-bold tracking-[0.2em] text-brand-red-strong tabular-nums">
              {s.num}
            </p>
            <h3 className="mt-2 font-display-hero text-ink tracking-tight leading-tight text-[28px] xl:text-[32px]">
              {s.title}
            </h3>
            <p className="mt-4 max-w-[520px] text-[16.5px] xl:text-[17.5px] leading-relaxed text-ink-soft">
              {s.body}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
