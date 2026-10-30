"use client";

import { useEffect } from "react";

// ─── AnalyticsEvents ───────────────────────────────────────────────────────
// One document-level delegated click listener for GA4 conversion events,
// mounted once in the root layout. Parameters are deliberately minimal —
// never phone numbers, emails or link text (hospital site: no patient or
// health-related data may reach analytics).
//
// gtag.js is injected lazily — on the first real interaction, else on a
// short timer — so the ~100KB third-party script never competes with the
// LCP image or runs on the critical path. The head stub (app/layout.tsx)
// queues every gtag() call into dataLayer; queued calls flush when the
// library loads, so early clicks and the page_view config are preserved.
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

const GA_ID = "G-XMGYEFNLY5";

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
// (the head stub) or dropped silently — never throw from analytics.
export function trackEvent(name: string, params: Record<string, string>) {
  try {
    const w = window as GaWindow;
    if (typeof w.gtag === "function") {
      w.gtag("event", name, params);
    } else if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push(["event", name, params]);
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

    // Lazy gtag.js — first interaction wins; the timer catches visitors
    // who read without ever clicking or scrolling.
    let injected = false;
    const loadGtag = () => {
      if (injected) return;
      injected = true;
      const s = document.createElement("script");
      s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
      s.async = true;
      document.head.appendChild(s);
    };
    const triggers: (keyof WindowEventMap)[] = [
      "pointerdown",
      "keydown",
      "touchstart",
      "scroll",
    ];
    triggers.forEach((e) =>
      window.addEventListener(e, loadGtag, { once: true, passive: true })
    );
    const timer = window.setTimeout(loadGtag, 4000);

    return () => {
      document.removeEventListener("click", onClick, true);
      triggers.forEach((e) => window.removeEventListener(e, loadGtag));
      window.clearTimeout(timer);
    };
  }, []);
  return null;
}
