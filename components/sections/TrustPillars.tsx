import { ArtImage } from "@/components/ui/ArtImage";
import { Reveal } from "@/components/ui/motion";
import { IMG, REAL, canShow } from "@/lib/images";

// ─── Why Mungale (quiet-luxury reset, spec §5.4) — dark ink-navy band.
// A generated lens artwork carries the header band and melts into navy;
// below it the three numbers sit as STATIC text — the only place stats
// appear on the page. No circles, no column photos, no scrubs, no
// count-ups. Copy provenance unchanged: eyebrow/headline/state headings
// and bodies are OWNER-PROVIDED; 20+/40,000+/15,000+ are the site's
// published claims; the quote is a VERBATIM Pankaj Makhijani Google
// review excerpt.

const states = [
  {
    index: "01",
    value: "20+",
    label: "Years of specialist eye care",
    heading: "Experience that compounds over time.",
    body: "Established in 2007, Mungale Eye Hospital has grown into a referral center for complex cornea and glaucoma cases.",
  },
  {
    index: "02",
    value: "40,000+",
    label: "Patients treated",
    heading: "Every number is a person.",
    body: "Behind every count is an individual story — a concern, a family, a decision.",
    quote:
      "The doctors explained everything clearly and the staff was very supportive. We are very happy with the results.",
    quoteBy: "Pankaj Makhijani · Google review",
  },
  {
    index: "03",
    value: "15,000+",
    label: "Eye surgeries",
    heading: "Surgical experience built over thousands of procedures.",
    body: "Each procedure begins with careful evaluation, clear discussion and a plan tailored to the patient.",
  },
];

export function TrustPillars() {
  return (
    <section className="bg-ink-navy">
      {/* Header band — lens artwork, right-anchored on desktop and low
          on mobile; bottom gradient melts it into the navy field. */}
      <div className="relative h-[440px] md:h-[560px]">
        <ArtImage
          d={IMG.whyLens.d}
          m={IMG.whyLens.m}
          alt=""
          className="absolute inset-0"
          imgClassName="h-full w-full object-cover object-[center_bottom] md:object-[right_center]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,43,0)_30%,rgba(16,27,43,0.55)_62%,#101b2b_96%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,27,43,0.72)_0%,rgba(16,27,43,0.25)_55%,rgba(16,27,43,0)_80%)]"
        />
        <Reveal className="relative z-10 mx-auto flex h-full max-w-site flex-col justify-end px-6 pb-12 lg:px-gutter lg:pb-16">
          <div className="max-w-[560px]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#ff8f8f]">
              Why Mungale
            </p>
            <h2 className="mt-4 font-display-hero text-white tracking-[-0.015em] leading-[1.04] text-[36px] sm:text-[44px] lg:text-[54px]">
              Specialist care, with the time to explain.
            </h2>
            {/* Structural microcopy, not a claim. */}
            <p className="mt-4 text-[16px] text-white/60">
              Three numbers. One story.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Columns — static figures, hairline, serif sub-heading, body. */}
      <div className="mx-auto max-w-site px-6 pb-20 lg:px-gutter lg:pb-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
          {states.map((s, i) => (
            <Reveal key={s.index} delay={i * 0.08} className="min-w-0">
              <article className="flex h-full flex-col">
                <p className="text-[12px] font-bold tracking-[0.22em] text-[#ff8f8f]">
                  {s.index}
                </p>
                <p className="mt-2 font-display-hero text-porcelain leading-[0.95] tracking-tight text-[40px] lg:text-[46px] whitespace-nowrap tabular-nums">
                  {s.value}
                </p>
                <p className="mt-2 text-[15px] text-white/65">{s.label}</p>

                <div className="mt-6 border-t border-line-dark pt-6">
                  <h3 className="font-display-hero text-white tracking-tight leading-tight text-[22px] lg:text-[25px]">
                    {s.heading}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-white/65">
                    {s.body}
                  </p>
                  {s.quote && (
                    <blockquote className="relative mt-4 border-l-2 border-primary pl-4">
                      <p className="text-[14px] leading-relaxed text-white/85 italic">
                        “{s.quote}”
                      </p>
                      <cite className="mt-1.5 block text-[12.5px] not-italic text-white/50">
                        — {s.quoteBy}
                      </cite>
                    </blockquote>
                  )}
                  {/* Laser suite — facility/equipment imagery only, no
                      outcome claim (NMC). CONSENT-GATED: the patient's
                      eye is visible, so until consent is on file the
                      slot shows a tight crop of the lens artwork. */}
                  {s.index === "03" && (
                    <figure className="mt-6">
                      <div className="aspect-[4/5] max-h-[360px] lg:max-h-none overflow-hidden rounded-[20px] ring-1 ring-white/10">
                        {canShow(REAL.theatre) ? (
                          <ArtImage
                            d={REAL.theatre.d}
                            m={REAL.theatre.m}
                            alt="Mungale Eye Hospital laser suite, guide lines projected during a procedure"
                            sizes="(min-width: 1024px) 400px, 90vw"
                            className="h-full w-full"
                            imgClassName="h-full w-full object-cover object-[50%_60%]"
                          />
                        ) : (
                          <ArtImage
                            d={IMG.whyLens.d}
                            m={IMG.whyLens.m}
                            alt=""
                            sizes="(min-width: 1024px) 400px, 90vw"
                            className="h-full w-full"
                            imgClassName="h-full w-full object-cover object-[70%_50%]"
                          />
                        )}
                      </div>
                      <figcaption className="mt-2.5 text-[12.5px] text-white/50">
                        Our laser suite
                      </figcaption>
                    </figure>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
