import { siteConfig } from "@/content/site";
import { e164 } from "@/lib/contact-links";
import {
  doctors,
  getDoctorByKey,
  type Doctor,
  type ReviewerKey,
} from "@/content/doctors";

// ─── Physician structured-data builders ───────────────────────────────
// Full Physician entities built entirely from content/doctors.ts
// (verified CV data). Referenced site-wide via stable profile-page @ids.

export const BASE = siteConfig.url.replace(/\/$/, "");
export const CLINIC_ID = BASE + "/#clinic";

// ─── Shared clinic facts ───────────────────────────────────────────────
// One set of location/contact facts reused by every LocalBusiness node:
// the MedicalClinic entity (layout) and the Physician entities — the
// doctors consult at the hospital, so address, geo, hours and phone are
// identical by definition.
export const CLINIC_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "2nd Floor, Vinraj Plaza, Kothi Road, opp. Government Press",
  addressLocality: "Vadodara",
  addressRegion: "Gujarat",
  postalCode: "390001",
  addressCountry: "IN",
};
export const CLINIC_GEO = {
  "@type": "GeoCoordinates",
  latitude: 22.304108,
  longitude: 73.193533,
};
export const CLINIC_OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "20:00",
  },
];
// Same directions URL linked in the footer and location block.
export const CLINIC_HAS_MAP =
  "https://www.google.com/maps/search/?api=1&query=Mungale+Eye+Hospital+Kothi+Vadodara";
// TODO(owner): no consultation fee is published anywhere on the site —
// "₹₹" is a neutral price-level placeholder until the real fee range is
// confirmed. Replace with e.g. "₹800 - ₹1500" once known.
export const CLINIC_PRICE_RANGE = "₹₹";

export function physicianId(key: ReviewerKey): string {
  return BASE + "/doctors/" + getDoctorByKey(key).slug + "/#physician";
}

export function reviewersOf(value: ReviewerKey | ReviewerKey[] | undefined): ReviewerKey[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export function physicianRefs(keys: ReviewerKey[]) {
  return keys.map((k) => ({ "@id": physicianId(k) }));
}

// Full Physician entity from verified CV data (content/doctors.ts).
function buildPhysician(d: Doctor) {
  const page: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": physicianId(d.key),
    name: d.fullName,
    alternateName: d.name,
    honorificPrefix: "Dr.",
    honorificSuffix: d.honorificSuffix,
    jobTitle: d.title,
    description: d.bio,
    image: BASE + d.imageUrl,
    url: BASE + "/doctors/" + d.slug + "/",
    // MedicalSpecialty enumeration member — matches the clinic node
    // (content/seo.ts); schema.org lists "Ophthalmologic", not
    // "Ophthalmology".
    medicalSpecialty: "Ophthalmologic",
    knowsAbout: [...d.focus, ...d.procedures],
    alumniOf: d.education.map((e) => ({
      "@type": "CollegeOrUniversity",
      name: e.institution,
    })),
    hasCredential: d.education.map((e) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: e.degree.toLowerCase().includes("fellowship") ? "fellowship" : "degree",
      name: e.degree + (e.years ? " (" + e.years + ")" : ""),
      recognizedBy: {
        "@type": "Organization",
        name: e.institution,
      },
    })),
    identifier: {
      "@type": "PropertyValue",
      name: "Gujarat Medical Council Registration",
      value: d.registrationNumber,
    },
    // Address/phone/hours identical to the MedicalClinic entity — the
    // doctors consult at the hospital. Physician is a LocalBusiness
    // subtype, so it carries the full business field set.
    telephone: e164(siteConfig.phone),
    address: CLINIC_ADDRESS,
    geo: CLINIC_GEO,
    openingHoursSpecification: CLINIC_OPENING_HOURS,
    priceRange: CLINIC_PRICE_RANGE,
    hasMap: CLINIC_HAS_MAP,
    worksFor: { "@id": CLINIC_ID },
    availableService: d.procedures.map((p) => ({
      "@type": "MedicalProcedure",
      name: p,
    })),
  };
  if (d.memberships) {
    page["memberOf"] = d.memberships.map((m) => ({
      "@type": "Organization",
      name: m,
    }));
  }
  if (d.sameAs && d.sameAs.length > 0) {
    page["sameAs"] = d.sameAs;
  }
  return page;
}

export function physicianJsonLd(key: ReviewerKey) {
  return buildPhysician(getDoctorByKey(key));
}

// Minimal Person node for author/reviewedBy references on pages where the
// full Physician entity isn't emitted (blog posts, treatment pages).
// Shares the physician @id so it merges with the canonical entity, and
// stays typed Person so it is never re-validated as a LocalBusiness.
// Google Article author requirements resolve through name + url.
function physicianPerson(key: ReviewerKey) {
  const d = getDoctorByKey(key);
  return {
    "@type": "Person",
    "@id": physicianId(key),
    name: d.name,
    url: BASE + "/doctors/" + d.slug + "/",
    image: BASE + d.imageUrl,
  };
}

export function reviewerPersons(keys: ReviewerKey[]) {
  return keys.map((k) => physicianPerson(k));
}

export function physiciansJsonLd() {
  return doctors.map((d) => buildPhysician(d));
}

export function profilePageJsonLd(key: ReviewerKey) {
  const d = getDoctorByKey(key);
  const url = BASE + "/doctors/" + d.slug + "/";
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": url + "#profilepage",
    url,
    name: d.name + " — " + d.title,
    description: d.bio,
    inLanguage: "en-IN",
    isPartOf: { "@id": BASE + "/#website" },
    mainEntity: { "@id": physicianId(key) },
  };
}
