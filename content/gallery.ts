import { SHOW_BEFORE_AFTER } from "@/lib/site-config";

// ─── Gallery data (/gallery/) ─────────────────────────────────────────────
// SOURCE OF TRUTH: live WordPress gallery page ID 4352, read via WPVibe/REST.
// 22/22 images mirrored to /images/gallery/ with INTRINSIC dimensions from
// the live markup — the masonry is built from these real ratios, never
// assigned heights. No cropping, no distortion.
//
// Honest grouping (markup evidence):
// - "moments": the 17-photo main grid (hospital life — doctors, staff,
//   practice; verified by visual inspection). The live markup carries NO
//   per-photo Hospital/Events/Teaching subdivision, so none is invented —
//   they share one honest collection. Previously-unmapped (#10) RESOLVED.
// - "clinical": 5 before-and-after result photographs ("See the Results"
//   by content). Captions come from the source filenames only.
// - "programs": the live page's teaching/event program headings (text-only
//   sections on live — zero images beneath them). Titles preserved VERBATIM
//   as a text strip; no photos attached, none invented.

export type GalleryGroup = "moments" | "clinical";

export interface GalleryPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
  group: GalleryGroup;
  caption?: string;
  /** False until the doctor approves publication — filtered out below. */
  approved?: boolean;
}

const G = "/images/gallery/";

const allGalleryPhotos: GalleryPhoto[] = [
  // NMC-01: photographs showing identifiable patients or EMR/clinical
  // screens were removed (IMG_2179, IMG_2130, IMG_2207, IMG_2219,
  // IMG_2193, IMG_2197, IMG_2116, IMG_2131, IMG_2188, IMG_2217) and the
  // before/after clinical set with them (NMC-13) — files moved out of
  // public/ until documented patient consent is on file.
  { src: G + "IMG_2098-scaled.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1440, height: 2560, group: "moments" },
  { src: G + "IMG_2138-scaled.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1440, height: 2560, group: "moments" },
  { src: G + "IMG_2174-scaled.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1440, height: 2560, group: "moments" },
  { src: G + "IMG_2235-scaled.jpg", alt: "Doctors at work at Mungale Eye Hospital", width: 1440, height: 2560, group: "moments" },
  { src: G + "IMG_2220-scaled.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1440, height: 2560, group: "moments" },
  { src: G + "IMG_2239-scaled.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1440, height: 2560, group: "moments" },
  { src: G + "Dr-Sachin.jpg", alt: "Dr. Sachin Mungale", width: 1200, height: 1600, group: "moments" },
  // Conference photographs — hidden until approved. Captions use only
  // what is visible on the banners; alt text names no person.
  // TODO(doctor): confirm Dr. Sachin is the person in both photos (the
  // plaque in the award photo may name someone else) and that the other
  // people shown agree to publication.
  {
    src: "/images/home/conference-2024.webp",
    alt: "A speaker at a podium during the OphthaQuest 2024 conference, with a presentation screen and seated panelists behind",
    width: 1536, height: 1024, group: "moments",
    caption: "OphthaQuest 2024, Gurugram, 13 to 15 September 2024",
    approved: false,
  },
  {
    src: "/images/home/conference-2023.webp",
    alt: "Two people holding a plaque on a conference stage with an OphthaQuest backdrop, while another person applauds",
    width: 1536, height: 1024, group: "moments",
    // Backdrop year is occluded in the photo — caption stays year-free.
    caption: "OphthaQuest, Gurugram",
    approved: false,
  },
];

// Program headings VERBATIM from the live gallery page (text-only sections;
// preserved as history, no photos attached).
export const galleryPrograms: string[] = [
  "Keracon 2018 Faculty: Dr Meeta Mungale",
  "\u2018Vision 2020\u2019 meeting Organized in Academic Partnership with Mungale Eye Hospital On 6th May 2019",
  "Post Graduate Teaching Program Organized For Students Studying Ophthalmology At Government Medical College",
  "Talk at LMW Power",
  "Talk on Selective Laser Trabeculoplasty (SLT), 2017",
  "Our Clinic Services",
  "Camp & Conference Organized At Navsari 2015",
  "Mungale Eye Hospital proud organiser of CME on Ocular Surface Disorders",
  "Mungale Eye Hospital proud organiser of CME for Women Ophthalmologists of Vadodara",
];

// Before/after result photographs are hidden while SHOW_BEFORE_AFTER is
// false — they are the whole "clinical" group today.
const isBeforeAfter = (p: GalleryPhoto) =>
  p.group === "clinical" && /before/i.test(p.caption ?? p.alt);

export const galleryPhotos: GalleryPhoto[] = allGalleryPhotos.filter(
  (p) => (SHOW_BEFORE_AFTER || !isBeforeAfter(p)) && p.approved !== false
);

export type GalleryFilter = "all" | GalleryGroup;

export const galleryFilters: { id: GalleryFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "moments", label: "Moments" },
  ...(galleryPhotos.some((p) => p.group === "clinical")
    ? [{ id: "clinical" as const, label: "Clinical" }]
    : []),
];
