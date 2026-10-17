import { siteConfig } from "@/content/site";
import { doctors } from "@/content/doctors";
import { telHref } from "@/lib/contact-links";

// ─── Contact data (/contact-us/) ───────────────────────────────────────────
// SOURCE OF TRUTH: live WordPress /contact-us/, re-read via WPVibe/REST.
// All phone numbers, address lines, hours and doctor names are VERBATIM
// live values (or shared siteConfig values that match them exactly).
// Consent/privacy copy was rewritten when submissions moved to email —
// nothing else invented: no response times, no availability, no schedules.
// - Doctor order mirrors the live form: Dr. Meeta first, then Dr. Sachin.
// - The file named Image_20241004_131842_773.jpeg is a location QR code,
//   not a photograph — it is used as a scan-to-navigate utility in the
//   visit section, never as the hero image. Hero uses the verified team
//   photograph already serving on /about-us/.
// - "No preference" doctor option per owner brief (form affordance only).

export const CONTACT_MAP_EMBED =
  "https://maps.google.com/maps?q=22.304108,73.193533&z=16&hl=en&output=embed";

export const CONTACT_QR_SRC = "/images/contact/Image_20241004_131842_773.jpeg";

export const CONTACT_HERO_SRC = "/images/welcome-img-1146-1024x768.jpg";

export const contactAddressLines = [
  "2nd Floor, Vinraj Plaza",
  "Opp. Government Press",
  "Kothi Road",
  "Anandpura, Vadodara",
  "Gujarat 390001",
];

export function contactDirectionsUrl(): string {
  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Mungale Eye Hospital Vinraj Plaza Kothi Vadodara")
  );
}

export function telOf(display: string): string {
  return telHref(display);
}

export const contactPhones = {
  main: siteConfig.phone,
  landline: siteConfig.landline,
  emergency: [siteConfig.emergencyPhone, siteConfig.emergencyPhone2],
  email: siteConfig.email,
};

export const contactDoctors = [doctors[1]!, doctors[0]!].map((d) => ({
  name: d.name,
  value: d.slug,
}));

// Before-visit items VERBATIM from the live insurance documents answer —
// the only verified preparation list on the site.
export const visitPrepItems = [
  "Health insurance card or policy number",
  "Valid photo ID",
  "Referral letter, if required",
  "Previous consultation papers",
  "Eye reports / investigation records",
];

// Consent split: (a) required — appointment contact; (b) optional —
// marketing/health updates, unchecked by default, reported as Yes/No in the
// booking email.
export const CONSENT_LABEL =
  "I agree to be contacted by Mungale Eye Hospital about this appointment request.";
export const CONSENT_UPDATES_LABEL =
  "Send me health updates by WhatsApp and SMS.";

// Success copy: receipt only — never a confirmed appointment.
// TODO(doctor): confirm the callback promise (for example within 2 working hours).
export const SUCCESS_TITLE = "Request received.";
export const SUCCESS_BODY =
  "Thank you. Our team will call you to confirm your appointment.";

// TODO(doctor): confirm slot times and whether to show hours for the
// preferred-time field (Morning / Evening).
