import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ArtImage } from "@/components/ui/ArtImage";
import { Reveal } from "@/components/ui/motion";
import { IMG } from "@/lib/images";
import { siteConfig } from "@/content/site";

// ─── Footer — two-layer editorial closing (owner rebuild) ────────────
// LAYER 01: compact full-width official-red closing (part of page flow,
// never a floating card): eyebrow + serif "See life clearly." + support +
// cream primary CTA + quiet call link. One white arc motif.
// LAYER 02: spacious charcoal (#111112) functional footer — brand +
// location | explore | contact (hours + emergency inside), quiet legal bar
// with the VERBATIM medical disclaimer, decorative MUNGALE watermark.
// Copy provenance: red-layer words + "Doctor-led eye care in Kothi,
// Vadodara." are OWNER-PROVIDED design wording (CONTENT_GAPS) —
// everything factual (address, phones, hours, links, disclaimer) verbatim.
// - Explore uses real routes only: Doctors → /about-us/ (no doctor profile
//   pages exist; full doctor info lives there), Patient Stories → Google
//   search results (no reviews page exists), rest direct.
// - No Terms page exists → Privacy Policy only. Social = the three real
//   siteConfig accounts, compact text links. No treatment list (seen above).
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Mungale+Eye+Hospital+Kothi+Vadodara";
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Mungale+Eye+Hospital+Vadodara+reviews";

function telHref(n: string) {
  return "tel:" + n.replace(/[\s-]/g, "");
}

const explore: { label: string; href: string; external?: boolean }[] = [
  { label: "About", href: "/about-us/" },
  { label: "Doctors", href: "/about-us/" },
  { label: "Treatments", href: "/treatments/" },
  { label: "Patient Stories", href: GOOGLE_REVIEWS_URL, external: true },
  { label: "Health Insights", href: "/blog/" },
  { label: "Contact", href: "/contact-us/" },
];

export function Footer() {
  return (
    <footer>
      {/* ── LAYER 01 · emotional closing — generated red artwork carries
          the band (bokeh right on desktop, low on mobile); white copy on
          the left. One red band on the page, per brand rules. ────────── */}
      <section className="relative bg-primary overflow-hidden">
        <ArtImage
          d={IMG.ctaRed.d}
          m={IMG.ctaRed.m}
          alt=""
          className="absolute inset-0"
          imgClassName="h-full w-full object-cover object-[right_center] max-md:object-[center_bottom]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(158,35,30,0.55)_0%,rgba(158,35,30,0.25)_60%,rgba(158,35,30,0)_100%)] md:bg-[linear-gradient(90deg,rgba(158,35,30,0.72)_0%,rgba(158,35,30,0.35)_55%,rgba(158,35,30,0)_85%)]"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <Reveal className="max-w-3xl">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/85">
              Your next step
            </p>
            <h2 className="mt-4 font-display-hero text-white tracking-[-0.015em] leading-[1.02] text-[48px] sm:text-[64px] lg:text-[80px]">
              See life clearly.
            </h2>
            <svg
              width="96"
              height="11"
              viewBox="0 0 96 11"
              fill="none"
              aria-hidden="true"
              className="mt-5 text-white/70"
            >
              <path
                d="M1 8.5 Q48 -1 95 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <p className="mt-4 text-[17px] lg:text-[18px] leading-relaxed text-white/90">
              Start with a conversation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <Link
                href="/contact-us/"
                className="group inline-flex h-[50px] px-7 w-full sm:w-auto items-center justify-center gap-2 bg-white text-primary text-[15px] font-bold rounded-[11px] hover:bg-background transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <span>Book a consultation</span>
                <ArrowRight
                  aria-hidden="true"
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </Link>
              <a
                href={telHref(siteConfig.phone)}
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:rounded"
              >
                <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-white">
                  Call us
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── LAYER 02 · functional charcoal footer ────────────────────── */}
      <section className="bg-secondary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* LEFT · brand + location */}
            <div className="lg:col-span-5">
              <Link
                href="/"
                aria-label={siteConfig.name + " — home"}
                className="inline-block bg-background rounded-[13px] px-4 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <img
                  src="/images/hero/httpsmungaleeyehospital-logo.svg"
                  alt={siteConfig.name + " logo"}
                  className="h-10 w-auto"
                  width={168}
                  height={70}
                />
              </Link>
              <p className="mt-5 text-[17px] font-semibold text-white">
                {siteConfig.name}
              </p>
              <p className="mt-1 text-[14px] text-white/60">
                Doctor-led eye care in Kothi, Vadodara.
              </p>
              <address className="mt-4 text-[14px] leading-relaxed text-white/60 not-italic">
                2nd Floor, Vinraj Plaza,
                <br />
                opp. Government Press, Kothi Road,
                <br />
                Anandpura, Vadodara, Gujarat 390001
              </address>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-white/85 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:rounded"
              >
                <span className="underline underline-offset-4 decoration-white/25 group-hover:decoration-primary">
                  Get directions
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="w-3.5 h-3.5 text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                />
              </a>
            </div>

            {/* MIDDLE · explore */}
            <nav
              aria-label="Explore"
              className="lg:col-span-3 lg:border-t-0 border-t border-white/10 pt-8 lg:pt-0"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">
                Explore
              </p>
              <ul className="mt-4 space-y-1">
                {explore.map((l) => (
                  <li key={l.label}>
                    {l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 py-1.5 text-[14.5px] text-white/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:rounded"
                      >
                        <span>{l.label}</span>
                        <ArrowRight
                          aria-hidden="true"
                          className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 motion-reduce:transition-none"
                        />
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="group inline-flex items-center gap-1.5 py-1.5 text-[14.5px] text-white/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:rounded"
                      >
                        <span>{l.label}</span>
                        <ArrowRight
                          aria-hidden="true"
                          className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 motion-reduce:transition-none"
                        />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-6 lg:mt-8 border-t border-white/10 pt-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">
                  First visit?
                </p>
                <Link
                  href="/faqs/"
                  className="group mt-2 inline-flex items-center gap-1.5 text-[14px] font-semibold text-white/85 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:rounded"
                >
                  <span>What to expect</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="w-3.5 h-3.5 text-primary transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </Link>
              </div>
            </nav>

            {/* RIGHT · contact, hours, emergency */}
            <div className="lg:col-span-4 lg:border-t-0 border-t border-white/10 pt-8 lg:pt-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">
                Contact
              </p>
              <p className="mt-4 space-y-1.5 text-[15px]">
                <a
                  href={telHref(siteConfig.phone)}
                  className="block text-white font-medium hover:text-primary transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:rounded"
                >
                  {siteConfig.phone}
                </a>
                <a
                  href={telHref(siteConfig.landline)}
                  className="block text-white/70 hover:text-primary transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:rounded"
                >
                  {siteConfig.landline}
                </a>
                <a
                  href={"mailto:" + siteConfig.email}
                  className="block text-[14px] text-white/60 hover:text-primary transition-colors w-fit break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:rounded"
                >
                  {siteConfig.email}
                </a>
              </p>
              <div className="mt-5 text-[13.5px] leading-relaxed text-white/50">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">
                  Hours
                </p>
                <p className="mt-2">
                  {siteConfig.hours.weekdays.replace(" - ", "–")} ·{" "}
                  {siteConfig.hours.time}
                  <br />
                  Sunday · {siteConfig.hours.sunday}
                </p>
              </div>
              <p className="mt-4 flex items-center gap-2 text-[13.5px] text-white/60">
                <span
                  aria-hidden="true"
                  className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                />
                <span>
                  Emergency:{" "}
                  <a
                    href={telHref(siteConfig.emergencyPhone)}
                    className="text-[#ff8080] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:rounded"
                  >
                    {siteConfig.emergencyPhone}
                  </a>
                  {" · "}
                  <a
                    href={telHref(siteConfig.emergencyPhone2)}
                    className="text-[#ff8080] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:rounded"
                  >
                    {siteConfig.emergencyPhone2}
                  </a>
                </span>
              </p>
              <div className="mt-5 flex items-center gap-5 text-[13.5px] font-medium">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:rounded"
                >
                  Instagram
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:rounded"
                >
                  Facebook
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:rounded"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Legal bar — quiet, separated */}
          <div className="mt-12 lg:mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[12.5px] text-white/45">
            <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <p>
              <Link
                href="/privacy-policy/"
                className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:rounded"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
          <p className="mt-4 max-w-2xl text-[12px] leading-relaxed text-white/60">
            The information on this site is for general guidance only and is
            not a substitute for professional medical advice, diagnosis or
            treatment.
          </p>

          {/* Signature watermark — static, decorative (quiet-luxury). */}
          <div aria-hidden="true" className="select-none overflow-hidden">
            <p className="font-display-hero text-center leading-[0.85] tracking-tight text-white/40 text-[110px] sm:text-[140px] lg:text-[170px] -mb-8 sm:-mb-10 lg:-mb-12 pt-6">
              MUNGALE
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
