// ─── Verified doctor data — single source of truth ────────────────────
// Every doctor mention on the site reads from this file: cards, profile
// pages, medical-review bylines, JSON-LD schema and the llms files.
// All facts below are verbatim from the doctors' own CVs (Oct 2026).
// Do NOT add: dates of birth, personal mobiles, personal emails,
// signatures, stamps, or personal interests.

export type ReviewerKey = "sachin" | "meeta";

// Both doctors personally reviewed every page on this date.
export const MEDICAL_REVIEW_DATE = "2026-10-03";

export interface DoctorEducation {
  degree: string;
  institution: string;
  years?: string;
  note?: string;
}

export interface DoctorExperience {
  role: string;
  years: string;
}

export interface Doctor {
  key: ReviewerKey;
  slug: string; // profile URL slug: /doctors/<slug>/
  name: string; // display name
  fullName: string;
  title: string; // e.g. "Ophthalmic Surgeon · Glaucoma Specialist"
  credentialLine: string; // short credential line used in cards + bylines
  honorificSuffix: string; // degrees for schema + bylines
  registration: string; // "Gujarat Medical Council Reg. No. G-XXXXX"
  registrationNumber: string;
  experience: string; // "19+ years"
  role: string;
  bio: string;
  description: string; // short card description
  imageUrl: string;
  alt: string;
  education: DoctorEducation[];
  experienceHistory?: DoctorExperience[];
  focus: string[];
  procedures: string[];
  clinicalWork?: string[];
  diagnostics?: string[];
  currentInterests?: string;
  publications: string[];
  memberships?: string[];
  teaching?: string[];
  cmes?: string[];
  community?: string;
}

export const doctors: Doctor[] = [
  {
    key: "sachin",
    slug: "sachin-mungale",
    name: "Dr. Sachin Mungale",
    fullName: "Dr. Sachin Chandrashekhar Mungale",
    title: "Ophthalmic Surgeon · Glaucoma Specialist",
    credentialLine: "MS (Ophthalmology) · Glaucoma Fellowship, LVPEI",
    honorificSuffix: "MS (Ophthalmology)",
    registration: "Gujarat Medical Council Reg. No. G-12281",
    registrationNumber: "G-12281",
    experience: "19+ years",
    role: "Consultant Ophthalmic Surgeon & Glaucoma Specialist at Mungale Eye Hospital, Vadodara, 2007–present; heads the hospital's glaucoma department.",
    bio: "Dr. Sachin Mungale is an ophthalmic surgeon and glaucoma specialist who has led the glaucoma department at Mungale Eye Hospital since 2007. After his MS in Ophthalmology at Baroda Medical College, he completed a long-term glaucoma fellowship at the L.V. Prasad Eye Institute, Hyderabad. His work focuses on complex glaucoma, including cases combined with cataract, and he has published research in the Indian Journal of Ophthalmology.",
    description:
      "Ophthalmic surgeon and glaucoma specialist who heads the glaucoma department at Mungale Eye Hospital.",
    imageUrl: "/images/doctors/Dr-Sachin.jpg",
    alt: "Dr. Sachin Mungale at the slit lamp",
    education: [
      { degree: "MBBS", institution: "Baroda Medical College", years: "1993–1999" },
      { degree: "MS (Ophthalmology)", institution: "Baroda Medical College", years: "2000–2003" },
      {
        degree: "Long-Term Fellowship in Glaucoma",
        institution: "L.V. Prasad Eye Institute, Hyderabad",
        years: "Jan 2006 – Mar 2007",
      },
    ],
    focus: ["Complex glaucoma", "Glaucoma combined with cataract"],
    procedures: [
      "Glaucoma surgeries",
      "Trabeculectomy",
      "Trabeculotomy for congenital glaucoma",
      "Glaucoma valve (drainage implant) surgery",
      "GATT (gonioscopy-assisted transluminal trabeculotomy)",
      "Combined cataract and glaucoma surgery",
    ],
    publications: [
      'Mungale S, Dave P. "Novel simplified method for managing inadvertent tube cut during Aurolab aqueous drainage implant surgery for refractory glaucoma." Indian Journal of Ophthalmology, 2019.',
      'Rao H, Mungale SC, Kumbar T, Parikh RS, Garudadri CS. "Evaluation of blotchy pigments in the anterior chamber angle: a sign of angle closure." Indian Journal of Ophthalmology, 2012.',
    ],
  },
  {
    key: "meeta",
    slug: "meeta-mungale",
    name: "Dr. Meeta Mungale",
    fullName: "Dr. Meeta Mungale",
    title: "Ophthalmic Surgeon · Cornea Specialist",
    credentialLine: "MS (Ophthalmology), DNB · Cornea Fellowship, LVPEI",
    honorificSuffix: "MS (Ophthalmology), DNB",
    registration: "Gujarat Medical Council Reg. No. G-39262",
    registrationNumber: "G-39262",
    experience: "19+ years",
    role: "Consultant, Cornea & Anterior Segment, in Vadodara since 2008; Mungale Eye Hospital.",
    bio: "Dr. Meeta Mungale is an ophthalmic surgeon and cornea specialist. She holds an MS and DNB in Ophthalmology and completed a fellowship in cornea and anterior segment at the L.V. Prasad Eye Institute, Hyderabad, where she later served as faculty. She has performed more than 500 corneal transplants, including lamellar procedures such as DALK, DSEK and DMEK, and treats keratoconus, ocular surface disease, cataract and refractive errors. Her current interests include dry eye disease and meibomian gland dysfunction.",
    description:
      "Ophthalmic surgeon and cornea specialist; fellowship-trained in cornea and anterior segment at LVPEI, Hyderabad.",
    imageUrl: "/images/doctors/DrMeeta-2.webp",
    alt: "Dr. Meeta Mungale writing at her desk",
    education: [
      {
        degree: "MBBS",
        institution: "Lokmanya Tilak Municipal Medical College, Mumbai (University of Mumbai)",
        years: "1999",
        note: "Distinctions in Anatomy, Biochemistry, Pharmacology and Microbiology",
      },
      {
        degree: "MS (Ophthalmology)",
        institution: "Government Medical College, Aurangabad (Dr. Babasaheb Ambedkar Marathwada University)",
        years: "2002",
      },
      { degree: "DNB (Ophthalmology)", institution: "National Board of Examinations, New Delhi", years: "2004" },
      {
        degree: "Fellowship in Cornea & Anterior Segment",
        institution: "L.V. Prasad Eye Institute, Hyderabad",
        years: "Jul 2003 – Oct 2004",
      },
      {
        degree: "Sir Ratan Tata Fellowship, Basic & Advanced Cataract Surgery",
        institution: "Sankara Nethralaya, Chennai",
        years: "Oct–Dec 2002",
      },
    ],
    experienceHistory: [
      { role: "Faculty, Cornea & Anterior Segment — L.V. Prasad Eye Institute, Hyderabad", years: "2006–07" },
      { role: "Tutor in Ophthalmology — Medical College & SSG Hospital, Baroda", years: "2008" },
      { role: "Consultant Ophthalmologist — L.H. Hiranandani Hospital, Thane", years: "2004–05" },
      { role: "Consultant, Cornea & Anterior Segment — Laxmi Eye Institute, Panvel", years: "2005" },
      { role: "Consultant, Cornea & Anterior Segment — Vadodara", years: "2009–present" },
    ],
    focus: [
      "Cornea and anterior segment",
      "Keratoconus",
      "Ocular surface disease",
      "Cataract and refractive errors",
    ],
    procedures: [
      "Corneal transplants — lamellar keratoplasty (DALK, DSEK, DMEK); therapeutic and optical keratoplasty",
      "Collagen cross-linking and specialty contact lenses for keratoconus",
      "Ocular surface surgery (pterygium with conjunctival autograft, SLET, amniotic membrane transplantation, chemical burns)",
      "Refractive surgery (LASIK, PRK, PTK)",
      "All types of cataract surgery, including pediatric and complicated cataracts",
      "Corneal surgery combined with cataract, glaucoma and retina surgery",
      "Eye trauma",
    ],
    clinicalWork: ["More than 500 corneal transplants"],
    diagnostics: ["Confocal microscopy", "Aberrometry", "Specular microscopy", "Topography", "OCT"],
    currentInterests: "Dry eye disease and meibomian gland dysfunction",
    publications: [
      "Poster on Nocardia keratitis, American Academy of Ophthalmology (2007), published in Ophthalmology (Jan 2011).",
      '"Acanthamoeba keratitis: an unusual presentation" (ESPY).',
    ],
    memberships: [
      "All India Ophthalmological Society",
      "Gujarat Ophthalmological Society",
      "Baroda Ophthalmological Society",
      "Bombay Ophthalmological Association",
      "Maharashtra Ophthalmological Society",
      "Cornea Society of India",
    ],
    teaching: [
      "Faculty, LVP-Zeiss Academy",
      "Faculty for SICS and phacoemulsification training at LVPEI",
      "Postgraduate teaching at SSG Hospital & Medical College, Vadodara",
      "Invited faculty at Keracon (Cornea Society of India)",
      "Faculty at AIOS, GOS and BOS meetings",
      'Video "It takes two to tango!" among the top 50 at the AIOS film festival',
    ],
    cmes: [
      "Dry eye CME for Gujarat ophthalmologists (6 May 2018)",
      "Cornea Update CME, Sumandeep Vidyapeeth (17 Mar 2019)",
      "Dry eye CME, SSG Hospital",
    ],
    community: "Outreach to peripheral centres around Vadodara; charitable work at Shri Narayan Arogyadham, Tajpura",
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}

export function getDoctorByKey(key: ReviewerKey): Doctor {
  return doctors.find((d) => d.key === key)!;
}

export function doctorHref(key: ReviewerKey): string {
  return "/doctors/" + getDoctorByKey(key).slug + "/";
}
