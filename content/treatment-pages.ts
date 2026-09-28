import { atlasTreatments } from "@/content/treatments-atlas";
import { getTreatmentDetail } from "@/content/treatment-details";
import type { ClinicalImage } from "@/components/sections/ClinicalLightbox";

export interface TreatmentHeroImage {
  src: string;
  alt: string;
  caption: string;
  overlapSrc?: string;
  overlapAlt?: string;
}

// ─── Treatment child-page data (Phase 2) ───────────────────────────────────
// One structured model for all six /treatments/[slug]/ pages.
//
// CONTENT RULES (medical site):
// - `details` are VERBATIM live-source bodies, resolved from
//   content/treatment-details.ts by heading (fail-fast at build if a
//   heading drifts — never silently empty).
// - `intro` + `summary` are DRAFT-COPY condensations of source facts for
//   UI scannability. Owner sign-off required; see docs/CONTENT_GAPS.md.
// - Images reuse the verified atlas mappings (real media-library files,
//   visually art-directed). No stock.
// - Source superlatives stay inside detail bodies only — never badges.

export interface ResolvedDetail {
  title: string;
  body: string;
}

export interface PageSection {
  id: string;
  index: string;
  title: string;
  /** DRAFT-COPY */
  summary: string;
  bodyKeys: string[];
  image?: ClinicalImage;
  /** diagrams/illustrations with text: rendered contained, never cropped */
  contain?: boolean;
}

export interface PageGroup {
  id: string;
  index: string;
  title: string;
  /** DRAFT-COPY */
  summary: string;
  bodyKeys: string[];
  topics?: string[];
  image?: ClinicalImage;
}

export interface GalleryFilter {
  label: string;
  /** prefix matched against image captions; "" = all */
  match: string;
}

export interface TreatmentPageData {
  slug: string;
  category: string;
  title: string;
  /** DRAFT-COPY */
  intro: string;
  heroVariant: "split" | "overlay" | "stacked";
  heroImage: TreatmentHeroImage;
  sections: PageSection[];
  groups?: PageGroup[];
  galleryFilters?: GalleryFilter[];
  related: string[];
}

function atlasEntry(slug: string) {
  const entry = atlasTreatments.find((t) => t.slug === slug);
  if (!entry) throw new Error("[treatment-pages] unknown atlas slug: " + slug);
  return entry;
}

/** Verified image owned by another chapter's gallery (same hospital, same device). */
export function sharedAtlasImage(slug: string, src: string): ClinicalImage {
  return img(slug, src);
}

/** Gallery images for a slug (verified alts/captions from the atlas). */
export function pageGallery(slug: string): ClinicalImage[] {
  const entry = atlasEntry(slug);
  return [entry.heroImage, ...entry.gallery.filter((g) => g.src !== entry.heroImage.src)];
}

function img(slug: string, src: string): ClinicalImage {
  const found = pageGallery(slug).find((g) => g.src === src);
  if (!found) throw new Error("[treatment-pages] image not in atlas gallery: " + src);
  return found;
}

/** Resolve verbatim detail bodies for a page by source heading. Fail-fast. */
export function pageDetails(slug: string, keys: string[]): ResolvedDetail[] {
  const detail = getTreatmentDetail(slug);
  if (!detail) throw new Error("[treatment-pages] unknown detail slug: " + slug);
  return keys.map((key) => {
    const section = detail.sections.find((s) => s.heading === key);
    if (!section)
      throw new Error(
        "[treatment-pages] heading drift for " + slug + ": " + key
      );
    return { title: section.heading, body: section.body };
  });
}

const T = "/images/treatments/";

export const treatmentPages: TreatmentPageData[] = [
  // ── 01 · CORNEA EVALUATION — diagnostic precision, technology timeline ──
  {
    slug: "cornea-evaluation",
    category: "Diagnosis — Cornea",
    title: "Cornea Evaluation",
    intro:
      "Seven instruments, one clear picture — mapping the shape, thickness, tears and cell health of your cornea.",
    heroVariant: "split",
    heroImage: {
      src: T + "c3.jpg",
      alt: "LED CSO slit lamp with imaging, showing an eye on the monitor",
      caption: "Slit-lamp imaging — the starting point of every evaluation",
      overlapSrc: T + "c2.jpg",
      overlapAlt: "Tomey SP-100 handy pachymeter used to measure corneal thickness",
    },
    sections: [
      {
        id: "slit-lamp",
        index: "01",
        title: "Slit Lamp Imaging",
        summary: "Brilliant LED illumination with photo and real-time video — seen together by doctor and family.",
        bodyKeys: ["LED CSO Slit Lamp With Imaging"],
        image: img("cornea-evaluation", T + "c3.jpg"),
      },
      {
        id: "pachymetry",
        index: "02",
        title: "Pachymetry",
        summary: "Corneal thickness measurement — optical or ultrasonic — needed in glaucoma and cornea care.",
        bodyKeys: ["Corneal Handy Pachymeter SP-100"],
        image: img("cornea-evaluation", T + "c2.jpg"),
      },
      {
        id: "idra",
        index: "03",
        title: "IDRA",
        summary: "Non-invasive tear-film analysis that diagnoses dry eye with documented, demonstrable results.",
        bodyKeys: ["IDRA"],
        image: img("cornea-evaluation", T + "c1.png"),
      },
      {
        id: "specular",
        index: "04",
        title: "Specular Microscopy",
        summary: "Photographic analysis of the corneal endothelium — cell size, shape and population.",
        bodyKeys: ["EM-3000 TOMEY Specular Microscope"],
        image: img("cornea-evaluation", T + "c6.jpg"),
      },
      {
        id: "specialty-lenses",
        index: "05",
        title: "Specialty Lenses",
        summary: "Rose K and scleral lenses that restore visual acuity in keratoconus and irregular corneas.",
        bodyKeys: ["Rose K Contact Lens", "Scleral Contact Lens"],
        image: img("cornea-evaluation", T + "c5.jpg"),
      },
      {
        id: "anterion",
        index: "06",
        title: "Anterior Segment Imaging",
        summary: "OCT-based tomography measuring thickness, curvature and elevation for diagnosis and surgical planning.",
        bodyKeys: ["Anterion"],
        image: img("cornea-evaluation", T + "c4.jpg"),
      },
    ],
    related: ["corneal-treatments", "optical-contact-lenses"],
  },

  // ── 02 · CORNEAL TREATMENTS — rich treatment journey (PILOT) ────────────
  {
    slug: "corneal-treatments",
    category: "Treatment & Surgery · Cornea",
    title: "Corneal Treatments",
    intro:
      "Seven areas of cornea care, each approached according to the condition and clinical need.",
    heroVariant: "overlay",
    heroImage: {
      src: T + "cb1.jpg",
      alt: "Clouded cornea photographed at Mungale Eye Hospital",
      caption: "Corneal care — clinical photograph",
    },
    sections: [
      {
        id: "keratoconus",
        index: "01",
        title: "Keratoconus",
        summary: "A progressive thinning and cone-shaped bulging of the cornea that distorts vision — steadied with cross-linking, specialty lenses, or transplant.",
        bodyKeys: ["Keratoconus Treatment"],
        image: img("corneal-treatments", T + "q1.jpg"),
        contain: true,
      },
      {
        id: "infection",
        index: "02",
        title: "Corneal Infection",
        summary: "Viral, bacterial or fungal — a microbiology scraping identifies the cause so treatment targets it.",
        bodyKeys: ["Corneal Infection"],
        image: img("corneal-treatments", T + "infection.jpg"),
      },
      {
        id: "transplantation",
        index: "03",
        title: "Transplantation",
        summary: "A diseased cornea replaced with a healthy donor cornea — full thickness, or layer by layer.",
        bodyKeys: ["Transplantation"],
        image: img("corneal-treatments", T + "cornea-transplant.webp"),
        contain: true,
      },
      {
        id: "chemical-burns",
        index: "04",
        title: "Chemical Burns",
        summary: "Chemical injuries need emergency care — from amniotic membrane transplantation to vision-restoring procedures.",
        bodyKeys: ["Chemical Burns"],
        image: img("corneal-treatments", T + "cb2.jpg"),
      },
      {
        id: "dry-eye",
        index: "05",
        title: "Dry Eye",
        summary: "Care begins by assessing tear production and evaporation to understand the dryness.",
        bodyKeys: ["Dry Eye Treatments"],
      },
      {
        id: "allergy",
        index: "06",
        title: "Eye Allergy",
        summary: "Allergic symptoms identified early — left untreated, they may contribute to vision loss.",
        bodyKeys: ["Eye Allergy Treatments"],
        image: img("corneal-treatments", T + "allergy.jpg"),
      },
      {
        id: "sjs",
        index: "07",
        title: "Stevens–Johnson Syndrome",
        summary: "A rare disorder needing careful lubrication, infection watch, and stage-matched surgical care.",
        bodyKeys: ["Steven Johnson Syndrome"],
        image: img("corneal-treatments", T + "sjs1.jpg"),
      },
    ],
    galleryFilters: [
      { label: "All", match: "" },
      { label: "Keratoconus", match: "Keratoconus" },
      { label: "Infection", match: "Corneal infection" },
      { label: "Transplantation", match: "Transplantation" },
      { label: "Chemical Burns", match: "Chemical burns" },
      { label: "Dry Eye", match: "Dry eye" },
      { label: "Allergy", match: "Eye allergy" },
      { label: "SJS", match: "Stevens" },
    ],
    related: ["cornea-evaluation", "optical-contact-lenses"],
  },

  // ── 03 · GLAUCOMA EVALUATION — structured diagnostic work-up ────────────
  {
    slug: "glaucoma-evaluation",
    category: "Diagnosis — Glaucoma",
    title: "Glaucoma Evaluation",
    intro:
      "Pressure, angles, fields and nerve imaging — a complete work-up that finds glaucoma early, often before symptoms.",
    heroVariant: "split",
    heroImage: {
      src: T + "g1.jpg",
      alt: "Handheld fundus camera displaying a retinal image",
      caption: "Fundus imaging — the retina, photographed",
      overlapSrc: T + "g6.jpg",
      overlapAlt: "Slit-lamp examination at Mungale Eye Hospital",
    },
    sections: [],
    groups: [
      {
        id: "pressure",
        index: "01",
        title: "Eye Pressure",
        summary: "Four tonometers cover every eye — routine, immobile, paediatric, scarred and post-surgical corneas.",
        bodyKeys: ["Tonometry", "Goldmanns Applanation Tonometer", "Perkins Hand Held Tonometer", "Tono-pen AVIA", "iCare IC100 Tonometer"],
        image: img("glaucoma-evaluation", T + "g7.jpg"),
      },
      {
        id: "angle",
        index: "02",
        title: "Angle & Structure",
        summary: "Gonioscopy examines the eye's drainage system to tell glaucoma types apart — and treat each correctly.",
        bodyKeys: ["Gonioscopy Lenses"],
        image: img("glaucoma-evaluation", T + "g3.jpg"),
      },
      {
        id: "function",
        index: "03",
        title: "Visual Function",
        summary: "Visual-field mapping quantifies what glaucoma silently takes — repeated at least every year.",
        bodyKeys: ["ZEISS Humphrey Field Analyzer 3", "Perimetry / Visual Field"],
        image: img("glaucoma-evaluation", T + "g2.jpg"),
      },
      {
        id: "retinal",
        index: "04",
        title: "Retinal Assessment",
        summary: "Fundus photography and OCT reveal structural damage — including early glaucoma.",
        bodyKeys: ["Fundus Camera", "OCT"],
        image: img("glaucoma-evaluation", T + "g1.jpg"),
      },
      {
        id: "corneal",
        index: "05",
        title: "Corneal Measurement",
        summary: "Corneal thickness changes glaucoma management — so it is measured, not assumed.",
        bodyKeys: ["Pachymetry"],
        image: sharedAtlasImage("cornea-evaluation", T + "c2.jpg"),
      },
    ],
    related: ["glaucoma-treatments", "cornea-evaluation"],
  },

  // ── 04 · GLAUCOMA TREATMENTS — laser + surgical intervention ────────────
  {
    slug: "glaucoma-treatments",
    category: "Treatment & Surgery — Glaucoma",
    title: "Glaucoma Treatments",
    intro:
      "Lasers and surgery that lower eye pressure — from a repeatable laser procedure to micro-invasive and valve techniques.",
    heroVariant: "split",
    heroImage: {
      src: T + "gt1.jpg",
      alt: "YAG laser machine used for peripheral iridotomy",
      caption: "YAG laser — a microscopic opening that controls pressure",
      overlapSrc: T + "gt2.jpg",
      overlapAlt: "Glaucoma laser treatment equipment at Mungale Eye Hospital",
    },
    sections: [],
    groups: [
      {
        id: "laser",
        index: "01",
        title: "Laser",
        summary: "Focused laser care that lowers eye pressure — improving outflow, or opening a new drainage path.",
        bodyKeys: ["SLT (Selective Laser Trabeculoplasty)", "YAG Laser Machine (Peripheral Iridotomy)"],
        image: img("glaucoma-treatments", T + "gt1.jpg"),
      },
      {
        id: "surgery",
        index: "02",
        title: "Surgery",
        summary: "From filtration surgery to micro-invasive and valve techniques — matched to the stage of disease.",
        bodyKeys: ["Anti Glaucoma Surgeries — Conventional & MIGS", "Anti Glaucoma Surgeries — Valves & Congenital"],
        topics: ["Trabeculectomy with MMC", "MIGS — GATT · KDB · iStent", "Valves — AGV · ACP · AADI"],
        image: img("glaucoma-treatments", T + "gt2.jpg"),
      },
      {
        id: "congenital",
        index: "03",
        title: "Congenital Glaucoma",
        summary: "Surgical approaches for childhood glaucoma — detailed in the surgery panel above.",
        bodyKeys: [],
        topics: ["Trabeculotomy + Trabeculectomy", "Goniotomy", "Valve surgeries", "GATT"],
      },
    ],
    related: ["glaucoma-evaluation", "cataract-surgery"],
  },

  // ── 05 · CATARACT SURGERY — minimal technology showcase ─────────────────
  {
    slug: "cataract-surgery",
    category: "Surgery — Cataract",
    title: "Cataract Surgery",
    intro:
      "A clouded lens, removed in minutes — phacoemulsification on two specialist platforms, with a lens matched to your eye.",
    heroVariant: "stacked",
    heroImage: {
      src: T + "ct2.jpg",
      alt: "Oertli CataRhex 3 surgical platform for cataract surgery",
      caption: "Oertli CataRhex 3 — one of two phaco platforms",
    },
    sections: [
      {
        id: "ellips",
        index: "01",
        title: "Ellips FXO",
        summary: "An advanced phacoemulsification system that removes cataract with high efficiency — plus intraocular lenses at reasonable prices.",
        bodyKeys: ["Ellips FXO"],
        image: img("cataract-surgery", T + "ct1.jpg"),
        contain: true,
      },
      {
        id: "catarhex",
        index: "02",
        title: "Oertli CataRhex 3",
        summary: "A compact, lightweight surgical platform for cataract and glaucoma surgery — with anterior vitrectomy built in.",
        bodyKeys: ["OERTLI CataRhex 3"],
        image: img("cataract-surgery", T + "ct2.jpg"),
      },
    ],
    related: ["glaucoma-treatments", "optical-contact-lenses"],
  },

  // ── 06 · OPTICAL & CONTACT LENSES — human, lifestyle rhythm ─────────────
  {
    slug: "optical-contact-lenses",
    category: "Vision Correction",
    title: "Optical & Contact Lenses",
    intro:
      "Spectacles and lenses, fitted to your eyes — including specialty lenses for keratoconus, verified in-house.",
    heroVariant: "split",
    heroImage: {
      src: T + "op1.jpg",
      alt: "Spectacle frames on display at the Mungale optical",
      caption: "The Mungale optical — frames on display",
      overlapSrc: T + "op2.jpg",
      overlapAlt: "Lens verification unit at the Mungale optical",
    },
    sections: [
      {
        id: "options",
        index: "01",
        title: "Find Your Correction",
        summary: "Spectacles, rigid, soft and cosmetic lenses — plus specialty keratoconus lenses, all custom-fit.",
        bodyKeys: ["Optical & Contact Lenses"],
        image: img("optical-contact-lenses", T + "op1.jpg"),
      },
      {
        id: "verification",
        index: "02",
        title: "Lens Verification",
        summary: "Every prescription double-checked on the GL7000 — glasses and contact lenses alike.",
        bodyKeys: ["GL7000 Auto Lensometer"],
        image: img("optical-contact-lenses", T + "op2.jpg"),
      },
    ],
    related: ["cornea-evaluation", "corneal-treatments"],
  },
];

export function getTreatmentPage(slug: string): TreatmentPageData {
  const page = treatmentPages.find((p) => p.slug === slug);
  if (!page) throw new Error("[treatment-pages] unknown page slug: " + slug);
  return page;
}
