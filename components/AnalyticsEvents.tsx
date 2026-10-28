"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

// ─── AnalyticsEvents ───────────────────────────────────────────────────────
// One document-level delegated click listener for GA4 conversion events,
// mounted once in the root layout. Parameters are deliberately minimal —
// never phone numbers, emails or link text (hospital site: no patient or
// health-related data may reach analytics).
//
//   <a href="tel:">                              → phone_click
//   wa.me / api.whatsapp.com / whatsapp: links   → whatsapp_click
//   <a href="mailto:">                           → email_click
//   Google Maps / directions links               → directions_click
//   data-ga="appointment" elements               → appointment_click
//   booking URL or CTA text (content fallback)   → appointment_click
//
// The booking-form success branch fires appointment_submit separately
// (ContactBookingForm.tsx → trackEvent).

const TEL_RE = /^tel:/i;
const MAILTO_RE = /^mailto:/i;
const WHATSAPP_RE = /(wa\.me\/|api\.whatsapp\.com|^whatsapp:)/i;
const MAPS_RE =
  /(google\.[a-z.]+\/maps|maps\.google\.|maps\.app\.goo\.gl|goo\.gl\/maps)/i;
// Every first-party booking CTA carries data-ga="appointment". The href
// check is a fallback for links rendered from content files (blog bodies).
const BOOKING_HREF_RE = /^\/contact-us\/.*#book|^#book$/;
// Fallback for CMS-rendered content only: whole-word, case-insensitive.
// Never applied inside header/footer/nav, never on social links — so
// "Consultants", "Our Doctors" and "ebook" can't match.
const APPOINTMENT_TEXT_RE =
  /\b(book appointment|book now|book a consultation|consult now|book eye checkup|schedule)\b/i;
const SOCIAL_RE =
  /(facebook\.|instagram\.|youtube\.|youtu\.be|twitter\.|x\.com|linkedin\.|t\.me\/)/i;

type GaWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

// Guarded so clicks before gtag.js has loaded are queued via dataLayer
// (sendGAEvent) or dropped silently — never throw from analytics.
export function trackEvent(name: string, params: Record<string, string>) {
  try {
    const w = window as GaWindow;
    if (typeof w.gtag === "function") {
      w.gtag("event", name, params);
    } else if (Array.isArray(w.dataLayer)) {
      sendGAEvent("event", name, params);
    }
  } catch {
    // analytics must never break the page
  }
}

function linkLocation(el: Element): string {
  const marked = el.closest<HTMLElement>("[data-ga-location]");
  const location = marked?.dataset["gaLocation"];
  if (location) return location;
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  if (el.closest("nav")) return "nav";
  return "body";
}

export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      const el = t.closest("a[href], button, [data-ga='appointment']");
      if (!el) return;
      const anchor = el.closest("a[href]");
      const href = anchor?.getAttribute("href") ?? "";

      // At most one event per click.
      let event: string | null = null;
      if (el.closest("[data-ga='appointment']") || BOOKING_HREF_RE.test(href)) {
        event = "appointment_click";
      } else if (TEL_RE.test(href)) {
        event = "phone_click";
      } else if (MAILTO_RE.test(href)) {
        event = "email_click";
      } else if (WHATSAPP_RE.test(href)) {
        event = "whatsapp_click";
      } else if (MAPS_RE.test(href)) {
        event = "directions_click";
      } else if (
        anchor &&
        !anchor.closest("header, footer, nav") &&
        !SOCIAL_RE.test(href) &&
        APPOINTMENT_TEXT_RE.test(anchor.textContent ?? "")
      ) {
        event = "appointment_click";
      }
      if (!event) return;
      trackEvent(event, {
        page_path: window.location.pathname,
        link_location: linkLocation(el),
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
