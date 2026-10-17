// ─── Verified doctor data — single source of truth ────────────────────
// Every doctor mention on the site reads from this file: cards, profile
// pages, medical-review bylines, JSON-LD schema and the llms files.
// All facts below are verbatim from the doctors' own CVs (Oct 2026).
// Do NOT add: dates of birth, personal mobiles, personal emails,
// signatures, stamps, or personal interests.

import { EXPERIENCE_CLAIM } from "@/content/site";

export type ReviewerKey = "sachin" | "meeta";

// Both doctors personally reviewed every page on this date.
export const MEDICAL_REVIEW_DATE = "2026-10-03";

export interface DoctorEducation {
  degree: string;
  institution: string;
  years?: string;
  note?: string;
}

// Structured credential entry — one per degree/fellowship.
export interface DoctorCredential {
  degree: string; // degree or fellowship name
  institution: string;
  city?: string;
  year: string;
}

export interface DoctorExperience {
  role: string;
  years: string; // display string, e.g. "Nov 2009 – Present"
  start: string; // "YYYY-MM" — drives newest-first sorting
  end?: string; // "YYYY-MM"; absent = ongoing
}

// Current interests: one lead sentence + supporting bullets.
export interface DoctorInterests {
  lead: string;
  items: string[];
}

export interface Doctor {
  key: ReviewerKey;
  slug: string; // profile URL slug: /doctors/<slug>/
  name: string; // display name
  fullName: string;
  title: string; // e.g. "Ophthalmic Surgeon · Glaucoma Specialist"
  credentialLine: string; // deprecated alias — same value as credentialShort
  credentialShort: string; // formal line: cards, bylines, hero strip
  credentialCompact: string; // very tight spaces (small cards)
  credentialsFull: DoctorCredential[]; // structured degrees + fellowships
  honorificSuffix: string; // degrees for schema + bylines
  registration: string; // "Gujarat Medical Council Reg. No. G-XXXXX"
  registrationNumber: string;
  experience: string; // always EXPERIENCE_CLAIM ("Over 19 years")
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
  currentInterests?: DoctorInterests;
  publications: string[];
  memberships?: string[];
  teaching?: string[];
  /** Conference photos for "Teaching & conferences" — not rendered
      anywhere while approved is false. */
  conferencePhotos?: {
    src: string;
    alt: string;
    caption: string;
    approved: boolean;
  }[];
  training?: string[]; // short courses / observerships (not degrees)
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
    credentialLine: "MBBS, MS (Ophthalmology) · Fellowship in Glaucoma, L V Prasad Eye Institute, Hyderabad",
    credentialShort: "MBBS, MS (Ophthalmology) · Fellowship in Glaucoma, L V Prasad Eye Institute, Hyderabad",
    credentialCompact: "MBBS, MS (Ophthalmology) · Glaucoma Specialist",
    credentialsFull: [
      { degree: "MBBS", institution: "Baroda Medical College", year: "1999" },
      { degree: "MS (Ophthalmology)", institution: "Baroda Medical College", year: "2003" },
      {
        degree: "Long-Term Fellowship in Glaucoma",
        institution: "L V Prasad Eye Institute",
        city: "Hyderabad",
        year: "Jan 2006 – Mar 2007",
      },
    ],
    honorificSuffix: "MBBS, MS (Ophthalmology)",
    registration: "Gujarat Medical Council Reg. No. G-12281",
    registrationNumber: "G-12281",
    experience: EXPERIENCE_CLAIM,
    role: "Consultant Ophthalmic Surgeon & Glaucoma Specialist at Mungale Eye Hospital, Vadodara, 2007–present; heads the hospital's glaucoma department.",
    bio: "Dr. Sachin Mungale is an ophthalmic surgeon and glaucoma specialist who has led the glaucoma department at Mungale Eye Hospital since 2007. After his MS in Ophthalmology at Baroda Medical College, he completed a long-term glaucoma fellowship at the L V Prasad Eye Institute, Hyderabad. His work focuses on complex glaucoma, including cases combined with cataract, and he has published research in the Indian Journal of Ophthalmology.",
    description:
      "Ophthalmic surgeon and glaucoma specialist who heads the glaucoma department at Mungale Eye Hospital.",
    imageUrl: "/images/doctors/Dr-Sachin.jpg",
    alt: "Dr. Sachin Mungale at the slit lamp",
    // TODO(doctor): society memberships not in CV — none listed on profile.
    education: [
      { degree: "MBBS", institution: "Baroda Medical College", years: "1993–1999" },
      { degree: "MS (Ophthalmology)", institution: "Baroda Medical College", years: "2000–2003" },
      {
        degree: "Long-Term Fellowship in Glaucoma",
        institution: "L V Prasad Eye Institute, Hyderabad",
        years: "Jan 2006 – Mar 2007",
      },
    ],
    experienceHistory: [
      {
        role: "Consultant Ophthalmic Surgeon and Glaucoma Specialist — Mungale Eye Hospital, Vadodara; leads the glaucoma department",
        years: "2007 – Present",
        start: "2007",
      },
    ],
    focus: ["Complex glaucoma", "Glaucoma combined with cataract"],
    procedures: [
      "Glaucoma surgeries",
      "Trabeculectomy",
      "Trabeculotomy for congenital glaucoma",
      "Glaucoma valve (drainage implant) surgery",
      "Gonioscopy-Assisted Transluminal Trabeculotomy (GATT)",
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
    credentialLine: "MBBS, MS (Ophthalmology), DNB · Fellowship in Cornea & Anterior Segment, L V Prasad Eye Institute, Hyderabad",
    credentialShort: "MBBS, MS (Ophthalmology), DNB · Fellowship in Cornea & Anterior Segment, L V Prasad Eye Institute, Hyderabad",
    credentialCompact: "MBBS, MS (Ophthalmology), DNB · Cornea Specialist",
    credentialsFull: [
      {
        degree: "MBBS",
        institution: "Lokmanya Tilak Municipal Medical College",
        city: "Mumbai",
        year: "1999",
      },
      {
        degree: "MS (Ophthalmology)",
        institution: "Government Medical College",
        city: "Aurangabad",
        year: "2002",
      },
      {
        degree: "DNB (Ophthalmology)",
        institution: "National Board of Examinations",
        city: "New Delhi",
        year: "2004",
      },
      {
        degree: "Fellowship in Cornea & Anterior Segment",
        institution: "L V Prasad Eye Institute",
        city: "Hyderabad",
        year: "Jul 2003 – Oct 2004",
      },
      {
        degree: "Sir Ratan Tata Fellowship in Basic & Advanced Cataract Surgery",
        institution: "Sankara Nethralaya",
        city: "Chennai",
        year: "Oct–Dec 2002",
      },
    ],
    honorificSuffix: "MBBS, MS (Ophthalmology), DNB",
    registration: "Gujarat Medical Council Reg. No. G-39262",
    registrationNumber: "G-39262",
    experience: EXPERIENCE_CLAIM,
    role: "Consultant, Cornea & Anterior Segment, in Vadodara since 2008; Mungale Eye Hospital.",
    bio: "Dr. Meeta Mungale is an ophthalmic surgeon and cornea specialist. She holds an MS and DNB in Ophthalmology and completed a fellowship in cornea and anterior segment at the L V Prasad Eye Institute, Hyderabad, where she later served as faculty. She has performed more than 500 corneal transplants, including lamellar procedures such as Deep Anterior Lamellar Keratoplasty (DALK), Descemet's Stripping Endothelial Keratoplasty (DSEK) and Descemet Membrane Endothelial Keratoplasty (DMEK), and treats keratoconus, ocular surface disease, cataract and refractive errors. Her primary focus is corneal infections (infectious keratitis), and her current interests include dry eye disease and Meibomian Gland Dysfunction, with newer diagnostics and treatments such as Dry Eye Analysis (IDRA) and E-Eye treatments.",
    description:
      "Ophthalmic surgeon and cornea specialist; fellowship-trained in cornea and anterior segment at L V Prasad Eye Institute, Hyderabad.",
    imageUrl: "/images/doctors/DrMeeta-2.webp",
    alt: "Dr. Meeta Mungale writing at her desk",
    education: [
      {
        degree: "MBBS",
        institution: "Lokmanya Tilak Municipal Medical College, University of Mumbai, Mumbai",
        years: "1999",
        note: "Distinctions in Anatomy, Biochemistry, Pharmacology and Microbiology",
      },
      {
        degree: "MS (Ophthalmology)",
        institution: "Government Medical College, Dr. Babasaheb Ambedkar Marathwada University, Aurangabad",
        years: "2002",
      },
      { degree: "DNB (Ophthalmology)", institution: "National Board of Examinations, New Delhi", years: "2004" },
      {
        degree: "Fellowship in Cornea & Anterior Segment",
        institution: "L V Prasad Eye Institute, Hyderabad",
        years: "Jul 2003 – Oct 2004",
      },
      {
        degree: "Sir Ratan Tata Fellowship in Basic & Advanced Cataract Surgery",
        institution: "Sankara Nethralaya, Chennai",
        years: "Oct–Dec 2002",
      },
    ],
    // Newest first — sorted in code by `start` (see sortedExperience()).
    experienceHistory: [
      {
        // TODO(doctor): CV says "Cornea Clinic, Kothi, Baroda (private
        // practice)". Confirm the site should say Mungale Eye Hospital.
        role: "Consultant, Cornea & Anterior Segment — Mungale Eye Hospital, Vadodara",
        years: "Nov 2009 – Present",
        start: "2009-11",
      },
      {
        // TODO(doctor): in CV but not in her change request; confirm include.
        role: "Consultant, Cornea & Anterior Segment — New Vision Laser Centre, Vadodara",
        years: "Jun – Oct 2009",
        start: "2009-06",
        end: "2009-10",
      },
      {
        role: "Tutor in Ophthalmology — Medical College & SSG Hospital, Vadodara",
        years: "Jan – Jun 2008",
        start: "2008-01",
        end: "2008-06",
      },
      {
        role: "Adjunct Faculty, Cornea & Anterior Segment — L V Prasad Eye Institute, Hyderabad",
        years: "Feb 2006 – Mar 2007",
        start: "2006-02",
        end: "2007-03",
      },
      {
        role: "Consultant, Cornea & Anterior Segment — Laxmi Eye Institute, Panvel",
        years: "Apr – Nov 2005",
        start: "2005-04",
        end: "2005-11",
      },
      {
        role: "Consultant Ophthalmologist — L H Hiranandani Hospital, Thane",
        years: "Nov 2004 – Nov 2005",
        start: "2004-11",
        end: "2005-11",
      },
    ],
    focus: [
      "Cornea and anterior segment",
      "Keratoconus",
      "Ocular surface disease",
      "Cataract and refractive errors",
    ],
    procedures: [
      "Corneal transplants — lamellar keratoplasty including Deep Anterior Lamellar Keratoplasty (DALK), Descemet's Stripping Endothelial Keratoplasty (DSEK) and Descemet Membrane Endothelial Keratoplasty (DMEK); therapeutic and optical keratoplasty",
      "Collagen cross-linking and specialty contact lenses for keratoconus",
      "Ocular surface surgery (pterygium with conjunctival autograft, Simple Limbal Epithelial Transplantation (SLET), amniotic membrane transplantation, chemical burns)",
      "Refractive surgery (Laser-Assisted In Situ Keratomileusis (LASIK), Photorefractive Keratectomy (PRK), Phototherapeutic Keratectomy (PTK))",
      "All types of cataract surgery, including pediatric and complicated cataracts",
      "Corneal surgery combined with cataract, glaucoma and retina surgery",
      "Eye trauma",
    ],
    // TODO(doctor): confirm OK to publish "More than 500 corneal transplants".
    clinicalWork: ["More than 500 corneal transplants"],
    // Two diagnostics entries dropped per Dr. Meeta's review — the
    // hospital does not have that equipment.
    diagnostics: ["Specular microscopy", "Topography", "Optical Coherence Tomography (OCT)"],
    currentInterests: {
      lead: "Her primary focus is corneal infections (infectious keratitis), including bacterial, fungal and Acanthamoeba keratitis.",
      items: [
        "All cornea surgery — corneal transplantation (keratoplasty) including lamellar techniques, ocular surface surgery, collagen cross-linking for keratoconus, and refractive surgery.",
        "Dry eye disease and Meibomian Gland Dysfunction, with newer diagnostics and treatments such as Dry Eye Analysis (IDRA) and E-Eye treatments.",
      ],
    },
    publications: [
      "Poster on Nocardia keratitis, American Academy of Ophthalmology (2007), published in Ophthalmology (Jan 2011).",
      '"Acanthamoeba keratitis: an unusual presentation" in ESPY by Cipla.',
      "Presentations at L V Prasad Eye Institute, Hyderabad.",
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
      "Faculty for Small Incision Cataract Surgery (SICS) and phacoemulsification training at L V Prasad Eye Institute, Hyderabad",
      "Postgraduate teaching at SSG Hospital & Medical College, Vadodara",
      "Invited faculty at Keracon, Cornea Society of India",
      "Faculty at All India Ophthalmological Society (AIOS), Gujarat Ophthalmological Society (GOS) and Baroda Ophthalmological Society (BOS) meetings",
    ],
    // TODO(doctor): confirm Dr. Sachin is the person in both photos (the
    // plaque in the award photo may name someone else) and that the other
    // people shown agree to publication.
    conferencePhotos: [
      {
        src: "/images/home/conference-2024.webp",
        alt: "A speaker at a podium during the OphthaQuest 2024 conference, with a presentation screen and seated panelists behind",
        caption: "OphthaQuest 2024, Gurugram, 13 to 15 September 2024",
        approved: false,
      },
      {
        src: "/images/home/conference-2023.webp",
        alt: "Two people holding a plaque on a conference stage with an OphthaQuest backdrop, while another person applauds",
        // Backdrop year is occluded in the photo — caption stays year-free.
        caption: "OphthaQuest, Gurugram",
        approved: false,
      },
    ],
    training: [
      "Indian Contact Lens Education Program, 2000",
      "Low Vision Awareness Program, 2003",
      "Observership at Ramayamma International Eye Bank, 2003",
    ],
    cmes: [
      "Dry eye CME for Gujarat ophthalmologists (6 May 2018)",
      "Cornea Update CME, Sumandeep Vidyapeeth, Vadodara (17 Mar 2019)",
      "CME on Dry Eye, SSG Hospital",
    ],
    community: "For 15 years, Dr. Meeta Mungale served in community eye care, including charitable work at Shri Narayan Arogyadham, Tajpura, and visits to peripheral centres around Vadodara.",
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

// Newest-first by `start` ("YYYY-MM") so display order can never drift.
export function sortedExperience(d: Doctor): DoctorExperience[] {
  return [...(d.experienceHistory ?? [])].sort((a, b) => b.start.localeCompare(a.start));
}
