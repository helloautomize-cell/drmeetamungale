// Patient-facing glossary. Every abbreviation on the site is written in
// full at first use; these entries provide the plain-language explanations
// shown under procedure/test names on treatment pages (and as tooltips
// elsewhere). needsReview: wording is a DRAFT for doctor approval — see
// content/review-needed.md.

export interface GlossaryTerm {
  short: string;
  full: string;
  /** Max ~35 words. Empty = show name only (doctor's own wording pending). */
  explanation: string;
  needsReview: boolean;
}

export const GLOSSARY = {
  slt: {
    short: "SLT",
    full: "Selective Laser Trabeculoplasty",
    explanation:
      "A gentle laser treatment applied to the eye's drainage tissue to help fluid leave the eye more easily and lower eye pressure.",
    needsReview: true,
  },
  yagIridotomy: {
    short: "Nd:YAG Laser Peripheral Iridotomy",
    full: "Nd:YAG Laser Peripheral Iridotomy",
    explanation:
      "A tiny laser opening made at the edge of the iris, the coloured part of the eye, to improve fluid flow in narrow-angle eyes.",
    needsReview: true,
  },
  conventionalGlaucomaSurgery: {
    short: "Conventional glaucoma surgery",
    full: "Conventional glaucoma surgery (trabeculectomy and drainage implants)",
    explanation:
      "Surgery that creates a new route for fluid to leave the eye, or places a small drainage tube, to lower eye pressure when drops and lasers are not enough.",
    needsReview: true,
  },
  migs: {
    short: "MIGS",
    full: "Minimally Invasive Glaucoma Surgery",
    explanation:
      "Small-incision procedures that improve the eye's own drainage with less tissue disturbance. Suitable for selected patients.",
    needsReview: true,
  },
  gatt: {
    short: "GATT",
    full: "Gonioscopy-Assisted Transluminal Trabeculotomy",
    explanation:
      "A microsurgical procedure that opens the eye's natural drainage channel from the inside through a very small incision.",
    needsReview: true,
  },
  trabeculotomyCongenital: {
    short: "Trabeculotomy",
    full: "Trabeculotomy for congenital glaucoma",
    explanation:
      "Surgery that opens the drainage channel in infants and children born with an abnormally developed drainage system.",
    needsReview: true,
  },
  agv: {
    short: "AGV",
    full: "Ahmed Glaucoma Valve",
    explanation:
      "A small drainage device placed in the eye to carry fluid out and lower pressure.",
    needsReview: true,
  },
  mgd: {
    short: "MGD",
    full: "Meibomian Gland Dysfunction",
    explanation:
      "Blockage of the tiny oil glands in the eyelids, a common cause of dry eye.",
    needsReview: true,
  },
  // TODO(doctor): explanation needs the doctor's own wording.
  idra: {
    short: "IDRA",
    full: "Dry Eye Analysis (IDRA)",
    explanation: "",
    needsReview: true,
  },
  // TODO(doctor): explanation needs the doctor's own wording.
  eEye: {
    short: "E-Eye",
    full: "E-Eye",
    explanation: "",
    needsReview: true,
  },
  dalk: {
    short: "DALK",
    full: "Deep Anterior Lamellar Keratoplasty",
    explanation:
      "Replaces the front and middle layers of a diseased cornea while keeping the patient's own inner layer.",
    needsReview: true,
  },
  dsek: {
    short: "DSEK",
    full: "Descemet's Stripping Endothelial Keratoplasty",
    explanation:
      "Replaces only the inner layer of the cornea when its inner cells have failed.",
    needsReview: true,
  },
  dmek: {
    short: "DMEK",
    full: "Descemet Membrane Endothelial Keratoplasty",
    explanation:
      "Replaces the thinnest inner layer of the cornea with donor tissue.",
    needsReview: true,
  },
  keratoplasty: {
    short: "Keratoplasty",
    full: "Keratoplasty",
    explanation:
      "Corneal transplantation, replacing diseased or scarred cornea with healthy donor tissue.",
    needsReview: true,
  },
  cxl: {
    short: "CXL",
    full: "Corneal Collagen Cross-linking",
    explanation:
      "Strengthens a thinning, weak cornea (keratoconus) using riboflavin drops and ultraviolet light to slow progression.",
    needsReview: true,
  },
  lasik: {
    short: "LASIK",
    full: "Laser-Assisted In Situ Keratomileusis",
    explanation:
      "Laser reshaping of the cornea to correct short-sightedness, long-sightedness and astigmatism.",
    needsReview: true,
  },
  prk: {
    short: "PRK",
    full: "Photorefractive Keratectomy",
    explanation:
      "Surface laser vision correction, suited to some patients with thinner corneas.",
    needsReview: true,
  },
  ptk: {
    short: "PTK",
    full: "Phototherapeutic Keratectomy",
    explanation:
      "Laser treatment that smooths or removes surface corneal irregularities and scars.",
    needsReview: true,
  },
  smile: {
    short: "SMILE",
    full: "Small Incision Lenticule Extraction",
    explanation: "Keyhole laser vision correction without a flap.",
    needsReview: true,
  },
  slet: {
    short: "SLET",
    full: "Simple Limbal Epithelial Transplantation",
    explanation:
      "Transfers a small amount of healthy surface cells to help repair a damaged corneal surface.",
    needsReview: true,
  },
  phaco: {
    short: "Phacoemulsification",
    full: "Phacoemulsification",
    explanation:
      "Cataract surgery in which ultrasound gently breaks up the cloudy lens through a small incision, followed by placing an artificial lens.",
    needsReview: true,
  },
  sics: {
    short: "SICS",
    full: "Small Incision Cataract Surgery",
    explanation:
      "Cataract removal through a small self-sealing incision, often used for very dense cataracts.",
    needsReview: true,
  },
  ecce: {
    short: "ECCE",
    full: "Extracapsular Cataract Extraction",
    explanation:
      "Traditional cataract surgery, removing the lens in one piece through a larger incision.",
    needsReview: true,
  },
  iol: {
    short: "IOL",
    full: "Intraocular Lens",
    explanation:
      "The artificial lens placed inside the eye to replace the clouded natural lens.",
    needsReview: true,
  },
  oct: {
    short: "OCT",
    full: "Optical Coherence Tomography",
    explanation:
      "A painless scan that takes cross-section images of the retina, optic nerve or cornea.",
    needsReview: true,
  },
  iop: {
    short: "IOP",
    full: "Intraocular Pressure",
    explanation: "The fluid pressure inside the eye.",
    needsReview: true,
  },
  specularMicroscopy: {
    short: "Specular microscopy",
    full: "Specular microscopy",
    explanation:
      "A scan that photographs and counts the cells lining the inside of the cornea.",
    needsReview: true,
  },
  topography: {
    short: "Topography",
    full: "Topography",
    explanation: "A scan that maps the curve of the front surface of the cornea.",
    needsReview: true,
  },
} as const;

export type GlossaryKey = keyof typeof GLOSSARY;

/** "Full name (SHORT)" for visible copy where patients use the short form. */
export function termLabel(key: GlossaryKey): string {
  const t = GLOSSARY[key];
  // Full already equals short (e.g. Phacoemulsification) or already holds
  // the bracket (IDRA) → return as written.
  return t.full === t.short || t.full.includes("(") ? t.full : `${t.full} (${t.short})`;
}

/** The two-line explanation, or "" where the doctor's wording is pending. */
export function termNote(key: GlossaryKey): string {
  return GLOSSARY[key].explanation;
}
