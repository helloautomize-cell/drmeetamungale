import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/motion";
import { siteConfig } from "@/content/site";

// ─── 4.12 Final appointment CTA ─────────────────────────────────────────
// Warm Editorial rhythm (design.md): the mid-page band is the ONE red
// event, so the finale converts to cream — ink title, red filled primary,
// black-outline secondary. No invented metrics; booking form lives in the
// hero BookingCard (consent unchecked by default).
export function CTABand() {
  return (
    <section className="py-space-2xl bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="bg-card-white rounded-3xl p-8 lg:p-12 shadow-brand-md ring-1 ring-secondary/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                  Take the First Step Toward Clearer Vision
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-3 max-w-xl leading-relaxed">
                  {siteConfig.hours.weekdays} {siteConfig.hours.time} · Sunday {siteConfig.hours.sunday}.
                  Emergency care: {siteConfig.emergencyPhone}.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-stretch">
                <Link
                  href="/contact-us/"
                  className="px-6 py-3.5 bg-primary text-on-primary font-label-md text-label-md font-bold rounded-full shadow-brand-sm hover:bg-primary-fixed hover:shadow-brand-glow transition-all inline-flex items-center justify-center gap-2"
                >
                  <CalendarDays className="w-[18px] h-[18px]" />
                  <span>Book an Appointment</span>
                </Link>
                <a
                  href={"tel:" + siteConfig.phone.replace(/\s/g, "")}
                  className="px-6 py-3.5 bg-transparent text-on-surface font-label-md text-label-md font-semibold rounded-full ring-1 ring-inset ring-secondary/30 hover:ring-secondary hover:bg-secondary hover:text-white transition-all inline-flex items-center justify-center gap-2"
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
