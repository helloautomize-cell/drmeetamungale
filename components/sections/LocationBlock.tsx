import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/motion";
import { PinIcon, ClockIcon, PhoneIcon, MailIcon, CompassIcon } from "@/components/icons/duotone";
import { siteConfig } from "@/content/site";

// ─── 4.11 Clinic locator ───────────────────────────────────────────────
// Single location (no multi-city switcher — Mungale has one hospital).
// Address, hours and phones verbatim from content/site.ts. Coordinates
// (22.304108, 73.193533) verbatim from the live homepage JSON-LD geo block.
// Map loads only on click (facade) per performance budget — but the facade
// is now a designed place-card (street-grid texture, pin medallion, address
// + live-map button), not an empty box, so it reads as intentional.
export function LocationBlock() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Mungale+Eye+Hospital+Kothi+Vadodara";

  return (
    <section className="py-space-2xl bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <SectionHeader
            eyebrow="Visit Us"
            title="Find Our Clinic"
            subtitle="In the heart of Baroda city — easy to reach from anywhere in Vadodara."
          />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Info card */}
          <Reveal className="h-full">
            <div className="h-full bg-card-white rounded-3xl p-8 shadow-sm ring-1 ring-border-light/50 space-y-5">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-surface-tint flex items-center justify-center text-primary shrink-0">
                  <PinIcon className="w-6 h-6" />
                </span>
                <p className="font-body-md text-body-md text-on-surface pt-1.5">{siteConfig.address}</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-surface-tint flex items-center justify-center text-primary shrink-0">
                  <ClockIcon className="w-6 h-6" />
                </span>
                <p className="font-body-md text-body-md text-on-surface pt-1.5">
                  {siteConfig.hours.weekdays} {siteConfig.hours.time}
                  <br />
                  Sunday {siteConfig.hours.sunday}
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-surface-tint flex items-center justify-center text-primary shrink-0">
                  <PhoneIcon className="w-6 h-6" />
                </span>
                <p className="font-body-md text-body-md text-on-surface pt-1.5">
                  <a href={"tel:" + siteConfig.phone.replace(/\s/g, "")} className="hover:text-primary transition-colors">
                    {siteConfig.phone}
                  </a>
                  <br />
                  <a href={"tel:" + siteConfig.landline.replace(/\s/g, "")} className="hover:text-primary transition-colors">
                    {siteConfig.landline}
                  </a>
                  <br />
                  <a
                    href={"tel:" + siteConfig.emergencyPhone.replace(/\s/g, "")}
                    className="hover:text-primary transition-colors"
                  >
                    Emergency: {siteConfig.emergencyPhone}, {siteConfig.emergencyPhone2}
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-surface-tint flex items-center justify-center text-primary shrink-0">
                  <MailIcon className="w-6 h-6" />
                </span>
                <a
                  href={"mailto:" + siteConfig.email}
                  className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors pt-1.5 break-all"
                >
                  {siteConfig.email}
                </a>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-fixed hover:shadow-brand-glow text-on-primary font-label-md text-label-md rounded-full shadow-brand-md transition-all"
              >
                <CompassIcon className="w-[18px] h-[18px]" />
                <span>Get Directions</span>
              </a>
            </div>
          </Reveal>

          {/* Live map — real Google Maps embed centered on the hospital's
              verified coordinates (22.304108, 73.193533, from the live
              homepage JSON-LD geo block). Keyless output=embed; lazy-loads
              for performance. */}
          <Reveal delay={0.1} className="h-full">
            <div className="relative h-full min-h-[380px] rounded-3xl overflow-hidden shadow-sm ring-1 ring-border-light/50">
              <iframe
                title="Mungale Eye Hospital on Google Maps"
                src="https://maps.google.com/maps?q=22.304108,73.193533&z=16&hl=en&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Floating place chip (non-interactive) + open-in-Maps action */}
              <span className="pointer-events-none absolute top-4 left-4 flex items-center gap-2 bg-card-white/95 backdrop-blur-md rounded-full pl-2 pr-4 py-1.5 shadow-brand-md ring-1 ring-border-light/60">
                <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white">
                  <PinIcon className="w-4 h-4" />
                </span>
                <span className="font-label-sm text-label-sm font-bold text-on-surface">
                  Mungale Eye Hospital
                </span>
              </span>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-white font-label-sm text-label-sm font-bold shadow-brand-md hover:bg-primary transition-colors"
              >
                <span>Open Live Map</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
