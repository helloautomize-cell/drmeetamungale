import { siteConfig } from "@/content/site";

// ─── Insurance & Cashless data (/insurance-cashless/) ──────────────────────
// SOURCE OF TRUTH: live WordPress page ID 5409, re-read via WPVibe/REST.
// - `steps`, `checklist`, `cashlessDefinition`, `fallback`, partner names and
//   FAQ answers are VERBATIM live source (FAQs live in insurance-faqs.ts).
// - Section framing (decision answer, step titles, panel labels) follows the
//   owner brief wording; logged as OWNER-PROVIDED in docs/PROGRESS.md.
// - Insurance desk phone is the page's own +91-8140250055 (NOT the site's
//   main contact number). Hours use the shared siteConfig truth (Mon–Sat
//   09:00 AM–08:00 PM) — the insurance page's older "9 AM – 7 PM" is
//   superseded; see docs/CONTENT_GAPS.md.
// - Partner artwork is unaltered live media (2026/04 re-uploads), mirrored
//   to /images/insurance/. Pairing verified visually: i1=IFFCO Tokio,
//   i2=Navi, i3=Tata AIG, i4=HDFC ERGO.

export const INSURANCE_DESK_DISPLAY = "+91-8140250055";
export const INSURANCE_DESK_TEL = "tel:+918140250055";

export interface InsurancePartner {
  name: string;
  src: string;
  alt: string;
}

export const insurancePartners: InsurancePartner[] = [
  {
    name: "HDFC ERGO",
    src: "/images/insurance/i4.png",
    alt: "HDFC ERGO General Insurance logo",
  },
  {
    name: "IFFCO Tokio",
    src: "/images/insurance/i1.png",
    alt: "IFFCO Tokio General Insurance logo",
  },
  {
    name: "Navi General Insurance",
    src: "/images/insurance/i2.png",
    alt: "Navi General Insurance logo",
  },
  {
    name: "Tata AIG",
    src: "/images/insurance/i3.png",
    alt: "Tata AIG Insurance logo",
  },
];

export interface CashlessStep {
  index: string;
  title: string;
  body: string;
}

// Step bodies VERBATIM from the live page; step 04 reframed per owner brief
// ("Know what you will need to pay" — the source's own co-payment/
// deductible/exclusions sentence is preserved as the explanation, so no
// patient is promised zero payment).
export const cashlessSteps: CashlessStep[] = [
  {
    index: "01",
    title: "Bring your documents",
    body: "Bring your health insurance card or policy number, a valid photo ID, and any referral letter, previous consultation papers, reports, or eye treatment records, if applicable.",
  },
  {
    index: "02",
    title: "Tell us at booking",
    body: "When you call to book your appointment, let us know that you want to use health insurance for cashless eye treatment, cashless cataract surgery, or another covered eye procedure.",
  },
  {
    index: "03",
    title: "We coordinate approval",
    body: "Our team coordinates with your insurer or TPA for pre-authorization. Once approved, the eligible treatment amount is settled directly between the insurer and hospital as per your policy terms.",
  },
  {
    index: "04",
    title: "Know what you will need to pay",
    body: "Covered amounts may be settled directly with the insurer/hospital, while co-payments, deductibles, exclusions or non-covered charges may still apply. Any co-payment, deductible, exclusions, or non-covered charges as per your health insurance policy will be explained to you in advance.",
  },
];

// Checklist VERBATIM from the live documents answer.
export const cashlessChecklist: string[] = [
  "Health insurance card or policy number",
  "Valid photo ID",
  "Referral letter, if required",
  "Previous consultation papers",
  "Eye reports / investigation records",
];

// Cashless definition VERBATIM from the live page.
export const cashlessDefinition =
  "Cashless eye treatment means your approved hospital bill is settled directly with your insurance provider without full upfront payment. Many eye procedures like cataract surgery are covered under health insurance, depending on your policy terms and approval.";

// Patient-pay categories — only those explicitly named in the source.
export const patientPayItems = [
  "Co-payment",
  "Deductible",
  "Exclusions",
  "Non-covered charges",
];

// Coverage index VERBATIM from the live page ("may be considered" + full
// disclaimer kept visible). Retina has no dedicated route — plain text.
export const coverageAreas: { label: string; href?: string }[] = [
  { label: "Cataract", href: "/treatments/cataract-surgery/" },
  { label: "Glaucoma", href: "/treatments/glaucoma-treatments/" },
  { label: "Retina" },
  { label: "Cornea", href: "/treatments/corneal-treatments/" },
];

// Fallback VERBATIM from the live "not approved" FAQ answer.
export const fallbackBody =
  "If pre-authorization is not granted, you can still proceed with treatment and file for reimbursement with your insurer directly, depending on your policy terms. We will provide all necessary medical records, bills, and supporting documents.";

export const insuranceAddress =
  "Mungale Eye Hospital, Vinraj Plaza, Opp. Govt Press, Kothi, Vadodara — 390001";

export function insuranceDirectionsUrl(): string {
  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Mungale Eye Hospital Vinraj Plaza Kothi Vadodara")
  );
}

export function sharedHoursLine(): string {
  return (
    siteConfig.hours.weekdays + " | " + siteConfig.hours.time + " · Sunday " + siteConfig.hours.sunday
  );
}
