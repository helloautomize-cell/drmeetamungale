import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/motion";
import {
  AwardIcon,
  StethoscopeIcon,
  CareBellIcon,
  MicroscopeIcon,
  ReferralIcon,
  ReceiptIcon,
} from "@/components/icons/duotone";

// ─── 4.3 Trust pillars — dark navy contrast band ────────────────────────
// The page's single dark section: deep trustworthy navy (#0b1c30) breaks the
// all-light monotony. Copy VERBATIM (about-us.md, homepage highlights,
// insurance-cashless page existence) — visual treatment only.
// - Duotone brand icons replace the generic lucide set (single line system).
// - Five pillars render as borderless glass rows; the Insurance pillar is a
//   red-gradient action card (the section's one real link, given CTA weight).
// - No invented statistics. Eyebrow uses lightened red for AA on navy.
const pillars: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  text: string;
}[] = [
  {
    icon: AwardIcon,
    title: "20+ Years Expertise",
    text: "Mungale Eye Hospital was established on 24th June, 2007 in Vadodara, Gujarat, India.",
  },
  {
    icon: StethoscopeIcon,
    title: "Certified Eye Surgeons",
    text: "A private joint venture led by two accomplished ophthalmologists, Dr. Meeta Mungale and Dr. Sachin Mungale.",
  },
  {
    icon: CareBellIcon,
    title: "24/7 Service Facilities",
    text: "Round-the-clock service facilities with emergency care on +91 9723311209.",
  },
  {
    icon: MicroscopeIcon,
    title: "Full-Range Diagnostic & Surgical Equipment",
    text: "The hospital is equipped with a full range of state-of-the-art diagnostic, curative, and surgical equipment designed to treat a wide variety of eye diseases.",
  },
  {
    icon: ReferralIcon,
    title: "Referral Center for Cornea & Glaucoma",
    text: "MEH is a referral center for complex cases of cornea and glaucoma, providing quality eye care at affordable prices.",
  },
];

export function TrustPillars() {
  return (
    <section className="relative py-space-2xl bg-secondary overflow-hidden">
      {/* Soft red glow on navy (decorative). */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -bottom-40 right-[-6rem] w-[34rem] h-[34rem] rounded-full bg-primary/25 blur-3xl animate-hero-drift" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <SectionHeader
            tone="dark"
            eyebrow="Clinical Excellence"
            title="Why Choose Mungale Eye Hospital"
            subtitle="Specialized eye care led by two accomplished ophthalmologists, with a full range of state-of-the-art diagnostic, curative, and surgical equipment."
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.06 * i}>
              <div className="h-full rounded-2xl bg-white/[0.05] ring-1 ring-white/10 p-7 backdrop-blur-sm hover:bg-white/[0.08] hover:ring-white/20 hover:-translate-y-1 transition-all duration-200">
                <span className="w-12 h-12 rounded-xl bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center text-white mb-5">
                  <p.icon className="w-7 h-7" />
                </span>
                <h3 className="font-title-md text-title-md text-white font-bold mb-2">
                  {p.title}
                </h3>
                <p className="font-body-md text-body-md text-white/70 leading-relaxed">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
          {/* Insurance pillar — the section's one link, as a red action card */}
          <Reveal delay={0.3}>
            <Link
              href="/insurance-cashless/"
              className="h-full rounded-2xl bg-gradient-to-br from-primary to-primary-fixed p-7 flex flex-col justify-between gap-6 shadow-brand-glow hover:-translate-y-1 transition-all duration-200 group"
            >
              <div>
                <span className="w-12 h-12 rounded-xl bg-white/15 ring-1 ring-white/25 flex items-center justify-center text-white mb-5">
                  <ReceiptIcon className="w-7 h-7" />
                </span>
                <h3 className="font-title-md text-title-md text-white font-bold mb-2">
                  Insurance &amp; Cashless
                </h3>
                <p className="font-body-md text-body-md text-white/85 leading-relaxed">
                  Insurance and cashless facility support. See our Insurance &amp; Cashless page for details.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-label-md text-label-md text-white font-bold">
                <span>Learn More</span>
                <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
