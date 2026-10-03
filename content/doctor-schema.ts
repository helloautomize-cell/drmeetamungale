import { siteConfig } from "@/content/site";
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
    medicalSpecialty: "Ophthalmology",
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
  return page;
}

export function physicianJsonLd(key: ReviewerKey) {
  return buildPhysician(getDoctorByKey(key));
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
