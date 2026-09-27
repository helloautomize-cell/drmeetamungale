"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, CalendarDays } from "lucide-react";
import { siteConfig } from "@/content/site";

// Floating contact actions (call / WhatsApp / book). Behavior unchanged —
// visual integration only: brand-tinted elevation, hover/focus-expand labels
// (desktop), press feedback, visible focus rings. Labels appear on hover AND
// keyboard focus so keyboard users get the same affordance.
function ActionLabel({ text }: { text: string }) {
  return (
    <span className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap px-3 py-1.5 rounded-full bg-secondary text-white font-label-sm text-label-sm font-semibold shadow-brand-md opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 hidden sm:block">
      {text}
    </span>
  );
}

const btn =
  "group relative w-11 h-11 rounded-full text-on-primary flex items-center justify-center shadow-brand-md ring-1 ring-white/30 hover:shadow-brand-glow hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="bg-card-white/95 backdrop-blur-md rounded-full shadow-brand-lg ring-1 ring-border-light/60 px-3.5 py-2.5 flex items-center gap-2.5">
        <a
          href={"tel:" + siteConfig.phone}
          className={btn + " bg-gradient-to-br from-primary to-primary-fixed"}
          aria-label="Call Mungale Eye Hospital"
          title="Call now"
        >
          <ActionLabel text="Call now" />
          <Phone className="w-5 h-5" />
        </a>
        <a
          href="#"
          className={btn + " bg-success-emerald"}
          aria-label="WhatsApp Mungale Eye Hospital"
          title="WhatsApp"
          onClick={(e) => { e.preventDefault(); window.open("https://wa.me/" + siteConfig.whatsapp.replace(/\D/g, ""), "_blank"); }}
        >
          <ActionLabel text="WhatsApp us" />
          <MessageCircle className="w-5 h-5" />
        </a>
        <Link
          href="/contact-us/"
          className={btn + " bg-secondary"}
          aria-label="Book an Appointment"
          title="Book appointment"
        >
          <ActionLabel text="Book appointment" />
          <CalendarDays className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
