import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/motion";
import { siteConfig } from "@/content/site";

// ─── 4.12 Final appointment CTA ─────────────────────────────────────────
// Closes the homepage with booking actions. The full appointment form lives
// in the hero BookingCard (task 4.2, consent unchecked by default); this
// band links to it and to direct call actions. No invented metrics.
// Visual: red-gradient split band (text left, stacked actions right) —
// distinct in composition from the centered mid-page band, same red system
// (the old cyan tint box is retired for CTA color consistency).
export function CTABand() {
  return (
    <section className="py-space-2xl bg-card-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-fixed to-primary rounded-3xl p-8 lg:p-12 shadow-brand-lg">
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold">
                  Take the First Step Toward Clearer Vision
                </h2>
                <p className="font-body-md text-body-md text-on-primary/90 mt-3 max-w-xl leading-relaxed">
                  {siteConfig.hours.weekdays} {siteConfig.hours.time} · Sunday {siteConfig.hours.sunday}.
                  Emergency care: {siteConfig.emergencyPhone}.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-stretch">
                <Link
                  href="/contact-us/"
                  className="px-6 py-3.5 bg-card-white text-primary font-label-md text-label-md font-bold rounded-full shadow-md hover:shadow-lg hover:-translate-y-px transition-all inline-flex items-center justify-center gap-2"
                >
                  <CalendarDays className="w-[18px] h-[18px]" />
                  <span>Book an Appointment</span>
                </Link>
                <a
                  href={"tel:" + siteConfig.phone.replace(/\s/g, "")}
                  className="px-6 py-3.5 border border-on-primary/40 text-on-primary font-label-md text-label-md rounded-full hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-[18px] h-[18px]" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
