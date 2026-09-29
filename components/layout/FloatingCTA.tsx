"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, CalendarDays } from "lucide-react";
import { siteConfig } from "@/content/site";
import { StickyMobileBar } from "@/components/ui/StickyMobileBar";

// Floating contact actions (call / WhatsApp / book). Behavior unchanged —
// art-direction refinement: deliberately quiet utility, not hero design.
// Smaller buttons/icons, subtler white container, no glow. Safe-area aware
// so it never covers mobile CTAs. Labels appear on hover AND keyboard
// focus so keyboard users get the same affordance.
function ActionLabel({ text }: { text: string }) {
  return (
    <span className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap px-3 py-1.5 rounded-full bg-secondary text-white font-label-sm text-label-sm font-semibold shadow-brand-md opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 hidden sm:block">
      {text}
    </span>
  );
}

const btn =
  "group relative w-9 h-9 rounded-full text-on-primary flex items-center justify-center shadow-brand-sm ring-1 ring-white/30 hover:-translate-y-px active:translate-y-0 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

export function FloatingCTA() {
  return (
    <>
      {/* Desktop/tablet — floating pill, unchanged */}
      <div className="fixed bottom-6 right-6 z-40 mb-[env(safe-area-inset-bottom)] hidden md:block">
        <div className="bg-white/90 backdrop-blur-md rounded-full shadow-brand-sm ring-1 ring-secondary/10 px-2 py-2 flex items-center gap-1.5">
          <a
            href={"tel:" + siteConfig.phone.replace(/[\s-]/g, "")}
            className={btn + " bg-primary"}
            aria-label="Call Mungale Eye Hospital"
            title="Call now"
          >
            <ActionLabel text="Call now" />
            <Phone className="w-4 h-4" />
          </a>
          <a
            href="#"
            className={btn + " bg-success-emerald"}
            aria-label="WhatsApp Mungale Eye Hospital"
            title="WhatsApp"
            onClick={(e) => { e.preventDefault(); window.open("https://wa.me/" + siteConfig.whatsapp.replace(/\D/g, ""), "_blank"); }}
          >
            <ActionLabel text="WhatsApp us" />
            <MessageCircle className="w-4 h-4" />
          </a>
          <Link
            href="/contact-us/"
            className={btn + " bg-secondary"}
            aria-label="Book an Appointment"
            title="Book a consultation"
          >
            <ActionLabel text="Book a consultation" />
            <CalendarDays className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Mobile — sticky bottom action bar (extracted to shared
          StickyMobileBar primitive; body padding lives in globals.css). */}
      <StickyMobileBar />
    </>
  );
}
