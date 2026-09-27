import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/content/site";
import { doctors } from "@/content/doctors";
import { Reveal } from "@/components/ui/motion";
import { BadgeCheckIcon, BuildingIcon } from "@/components/icons/duotone";

// ─── 4.4 Doctors highlight banner — asymmetric editorial feature ────────
// Reference shows a 4-doctor panel; Mungale has 2 doctors, rebalanced to 2
// (no empty grid holes). Badges carry only verified values ("2 Senior
// Ophthalmologists", "Since 2007") — the reference's "125+ Certified / 35+
// Clinics" badges are purged.
// Visual: 7/5 asymmetric split on a warm band; both portraits share one
// aspect ratio + one warm grade overlay (unifies the differing color temps);
// badges anchor to the collage corners on a shared rhythm. Copy unchanged.
export function DoctorsBanner() {
  return (
    <section className="py-space-2xl bg-surface-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left: photo collage (7 cols) */}
        <Reveal className="lg:col-span-7">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {doctors.map((d, i) => (
                <div
                  key={d.slug}
                  className={
                    "rounded-2xl overflow-hidden relative shadow-brand-md ring-1 ring-secondary/10 " +
                    (i === 1 ? "mt-8 sm:mt-12" : "")
                  }
                >
                  <Image
                    src={d.imageUrl}
                    alt={d.alt}
                    width={512}
                    height={640}
                    className="w-full h-72 sm:h-96 object-cover"
                  />
                  {/* Shared warm grade: unifies both photos' color temperature */}
                  <div className="absolute inset-0 bg-primary-container/15 mix-blend-multiply pointer-events-none" aria-hidden="true" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/10 to-transparent pointer-events-none" aria-hidden="true" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-title-md text-title-md font-bold">{d.name}</p>
                    <p className="font-body-sm text-body-sm text-white/80">{d.title}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Corner-anchored badges — verified values only */}
            <div className="absolute -top-5 left-4 sm:left-8 bg-card-white/95 backdrop-blur-md pl-3 pr-4 py-2.5 rounded-xl shadow-brand-md ring-1 ring-border-light/60 flex items-center gap-2">
              <BadgeCheckIcon className="w-6 h-6 text-primary" />
              <div>
                <p className="font-label-sm text-label-sm font-bold text-on-surface">2 Senior</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Ophthalmologists</p>
              </div>
            </div>
            <div className="absolute -bottom-5 right-4 sm:right-8 bg-secondary pl-3 pr-4 py-2.5 rounded-xl shadow-brand-md flex items-center gap-2">
              <BuildingIcon className="w-6 h-6 text-white" />
              <div>
                <p className="font-label-sm text-label-sm font-bold text-white">Since 2007</p>
                <p className="font-body-sm text-body-sm text-white/70">Kothi, Vadodara</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: text content (5 cols) */}
        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="space-y-5 pt-4 lg:pt-0">
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              Leading Eye Hospital in Kothi, Vadodara
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold leading-tight">
              Consult With Expert Ophthalmologists in Your City
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Mungale Eye Hospital (MEH) was established on 24th June, 2007 in
              Vadodara, Gujarat, India. It is a private joint venture led by
              two accomplished ophthalmologists, Dr. Meeta Mungale and Dr.
              Sachin Mungale.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/about-us/"
                className="px-6 py-3 bg-gradient-to-r from-primary to-primary-fixed hover:shadow-brand-glow text-on-primary font-label-md text-label-md rounded-full shadow-brand-md transition-all inline-flex items-center gap-2"
              >
                <span>Meet Our Doctors</span>
                <ArrowRight className="w-[18px] h-[18px]" />
              </Link>
              <a
                href={"tel:" + siteConfig.phone.replace(/\s/g, "")}
                className="px-6 py-3 bg-card-white ring-1 ring-border-light hover:ring-primary/40 hover:shadow-brand-sm text-on-surface font-label-md text-label-md rounded-full transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-[18px] h-[18px] text-primary" />
                <span>Speak to Our Team</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
