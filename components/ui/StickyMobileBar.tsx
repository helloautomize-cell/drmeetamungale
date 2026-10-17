"use client";

import Link from "next/link";
import { Phone, MessageCircle, CalendarDays } from "lucide-react";
import { siteConfig } from "@/content/site";
import { telHref, waHref } from "@/lib/contact-links";
import { bookingHref } from "@/lib/booking-links";

// StickyMobileBar (§2.4, §4.16): bottom action bar on <768px — Call,
// WhatsApp, Book at thumb reach. Content spacing lives in globals.css
// (body padding-bottom under 768px). Safe-area aware.
export function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden">
      <div className="grid grid-cols-3 border-t border-line bg-paper/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]">
        <a
          href={telHref(siteConfig.phone)}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-brand-red-strong active:bg-red-wash"
          aria-label={"Call " + siteConfig.name + " on " + siteConfig.phone}
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          <span className="text-[11px] font-semibold">Call</span>
        </a>
        <a
          href={waHref(siteConfig.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-success active:bg-red-wash"
          aria-label={"WhatsApp " + siteConfig.name + " on " + siteConfig.whatsapp}
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>
        <Link
          href={bookingHref()}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-ink active:bg-red-wash"
          aria-label="Book an Appointment"
        >
          <CalendarDays className="w-5 h-5" aria-hidden="true" />
          <span className="text-[11px] font-semibold">Book</span>
        </Link>
      </div>
    </div>
  );
}
