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
}

const G = "/images/gallery/";

export const galleryPhotos: GalleryPhoto[] = [
  { src: G + "IMG_2179-scaled.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1440, height: 2560, group: "moments" },
  { src: G + "IMG_2131-scaled.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1440, height: 2560, group: "moments" },
  { src: G + "IMG_2098-scaled.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1440, height: 2560, group: "moments" },
  { src: G + "IMG_2138-scaled.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1440, height: 2560, group: "moments" },
  { src: G + "IMG_2174-scaled.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1440, height: 2560, group: "moments" },
  { src: G + "IMG_2116-scaled.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1440, height: 2560, group: "moments" },
  { src: G + "IMG_2188-scaled.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1440, height: 2560, group: "moments" },
  { src: G + "IMG_2130.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1200, height: 2133, group: "moments" },
  { src: G + "IMG_2235-scaled.jpg", alt: "Doctors at work at Mungale Eye Hospital", width: 1440, height: 2560, group: "moments" },
  { src: G + "IMG_2197-scaled.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1440, height: 2560, group: "moments" },
  { src: G + "IMG_2219-scaled.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1440, height: 2560, group: "moments" },
  { src: G + "IMG_2217-scaled.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1440, height: 2560, group: "moments" },
  { src: G + "IMG_2207.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1200, height: 2133, group: "moments" },
  { src: G + "IMG_2220-scaled.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1440, height: 2560, group: "moments" },
  { src: G + "IMG_2193-scaled.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1440, height: 2560, group: "moments" },
  { src: G + "IMG_2239-scaled.jpg", alt: "Hospital photograph from the Mungale Eye Hospital gallery", width: 1440, height: 2560, group: "moments" },
  { src: G + "Dr-Sachin.jpg", alt: "Dr. Sachin Mungale", width: 1200, height: 1600, group: "moments" },
  {
    src: G + "Before-After-Tattooing.jpg",
    alt: "Ocular tattooing before-and-after clinical photographs",
    width: 1906, height: 924, group: "clinical",
    caption: "Ocular tattooing — before and after",
  },
  {
    src: G + "Before-After-DSEKDescemet_s-stripping-endothelial-keratoplasty.jpg",
    alt: "DSEK corneal transplant before-and-after clinical photographs",
    width: 1906, height: 924, group: "clinical",
    caption: "DSEK — before and after",
  },
  {
    src: G + "before-After-Pterygium-Surgery.jpg",
    alt: "Pterygium surgery before-and-after clinical photographs",
    width: 1906, height: 924, group: "clinical",
    caption: "Pterygium surgery — before and after",
  },
  {
    src: G + "Before-After-DALK-Deep-anterior-lamellar-keratoplasty.jpg",
    alt: "DALK corneal transplant before-and-after clinical photographs",
    width: 1906, height: 924, group: "clinical",
    caption: "DALK — before and after",
  },
  {
    src: G + "before-after-PK-Penetrating-keratoplasty.jpg",
    alt: "Penetrating keratoplasty before-and-after clinical photographs",
    width: 1906, height: 924, group: "clinical",
    caption: "Penetrating keratoplasty — before and after",
  },
];

// Program headings VERBATIM from the live gallery page (text-only sections;
// preserved as history, no photos attached).
export const galleryPrograms: string[] = [
  "Keracon 2018 Faculty: Dr Meeta Mungale",
  "\u2018Vision 2020\u2019 meeting Organized in Academic Partnership with Mungale Eye Hospital On 6th May 2019",
  "Post Graduate Teaching Program Organized For Students Studying Ophthalmology At Government Medical College",
  "Talk at LMW Power",
  "Talk on SLT (Selective Laser Trabeculopasty) 2017",
  "Our Clinic Services",
  "Camp & Conference Organized At Navsari 2015",
  "MEH proud Organiser of CME on Ocular Surface Disorders",
  "MEH proud Organiser of CME for Women Ophthalmologists of Vadodara",
];

export type GalleryFilter = "all" | GalleryGroup;

export const galleryFilters: { id: GalleryFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "moments", label: "Moments" },
  { id: "clinical", label: "Clinical" },
];
