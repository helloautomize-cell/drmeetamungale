export interface GalleryCategory {
  title: string;
  items: { src: string; alt: string }[];
  mappingNote?: string;
}

// Gallery categories are VERBATIM headings from the live gallery page
// (archive/content/pages/gallery.md — page ID 4352):
// "Hospital", "Events", "See the Results",
// "Keracon 2018 Faculty: Dr Meeta Mungale",
// "'Vision 2020' meeting Organized in Academic Partnership with
//  Mungale Eye Hospital On 6th May 2019".
//
// Item-level photo mapping is intentionally left empty: the media library
// holds candidate gallery photos (numbered files), but assigning specific
// photos to specific categories without page-section evidence would be
// guessing (master prompt rule 1). Resolve via MCP per-category check
// before the Phase 6 gallery build.
const NEEDS_MCP_MAPPING =
  "Item-level photo mapping pending MCP verification — do not assign photos by filename guess.";

export const galleryCategories: GalleryCategory[] = [
  { title: "Hospital", items: [], mappingNote: NEEDS_MCP_MAPPING },
  { title: "Events", items: [], mappingNote: NEEDS_MCP_MAPPING },
  { title: "See the Results", items: [], mappingNote: NEEDS_MCP_MAPPING },
  {
    title: "Keracon 2018 Faculty: Dr Meeta Mungale",
    items: [],
    mappingNote: NEEDS_MCP_MAPPING,
  },
  {
    title: "‘Vision 2020’ meeting Organized in Academic Partnership with Mungale Eye Hospital On 6th May 2019",
    items: [],
    mappingNote: NEEDS_MCP_MAPPING,
  },
];

export const galleryItems = galleryCategories.flatMap((c) => c.items);
