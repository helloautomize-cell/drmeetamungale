import { siteConfig } from "@/content/site";

// ─── Contact data (/contact-us/) ───────────────────────────────────────────
// SOURCE OF TRUTH: live WordPress /contact-us/, re-read via WPVibe/REST.
// All phone numbers, address lines, hours, doctor names, consent and
// Google-Sheets disclosure are VERBATIM live values (or shared siteConfig
// values that match them exactly). Nothing invented: no response times,
// no availability, no schedules.
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
  return "tel:" + display.replace(/[\s-]/g, "");
}

export const contactPhones = {
  main: siteConfig.phone,
  landline: siteConfig.landline,
  emergency: [siteConfig.emergencyPhone2, siteConfig.emergencyPhone],
  email: siteConfig.email,
};

export const contactDoctors = [
  { name: "Dr. Meeta Mungale", value: "dr-meeta-mungale" },
  { name: "Dr. Sachin Mungale", value: "dr-sachin-mungale" },
];

// Before-visit items VERBATIM from the live insurance documents answer —
// the only verified preparation list on the site.
export const visitPrepItems = [
  "Health insurance card or policy number",
  "Valid photo ID",
  "Referral letter, if required",
  "Previous consultation papers",
  "Eye reports / investigation records",
];

// Consent + processing disclosure VERBATIM (existing implementation).
export const CONSENT_LABEL =
  "I agree to receive appointment details & health updates via WhatsApp & SMS.";
export const SHEETS_DISCLOSURE =
  "Your information will be securely sent to and stored in Google Sheets for the purpose of processing your form submission.";

// Success copy: receipt only — never a confirmed appointment.
export const SUCCESS_TITLE = "Request received.";
export const SUCCESS_BODY =
  "We'll use the contact details you provided to follow up regarding your consultation.";
