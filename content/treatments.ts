import { siteConfig } from "@/content/site";

export interface Treatment {
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  alt: string;
}

// Card descriptions are VERBATIM from the live homepage service cards
// (archive/raw/homepage.html — elementor-image-box-description).
export const treatments: Treatment[] = [
  {
    title: "Cornea Evaluation",
    slug: "cornea-evaluation",
    description:
      "Cornea evaluation assesses corneal shape, thickness, and clarity, essential for diagnosing eye conditions",
    imageUrl: "/images/services/focus_6435747.webp",
    alt: "Eye focus examination",
  },
  {
    title: "Corneal Treatments",
    slug: "corneal-treatments",
    description:
      "Corneal treatments address infections, injuries, or conditions through medication, surgeries, or specialized therapies",
    imageUrl: "/images/services/laser_4937053.webp",
    alt: "Laser corneal treatment",
  },
  {
    title: "Glaucoma Evaluation",
    slug: "glaucoma-evaluation",
    description:
      "Glaucoma evaluation measures eye pressure, optic nerve health, and visual field to detect vision loss",
    imageUrl: "/images/services/checkup_750693.webp",
    alt: "Eye checkup for glaucoma",
  },
  {
    title: "Glaucoma Treatments",
    slug: "glaucoma-treatments",
    description:
      "Glaucoma treatments include eye drops, oral medications, laser therapy, and surgical options to lower eye pressure",
    imageUrl: "/images/services/eye-drops_3209118.webp",
    alt: "Eye drops medication for glaucoma",
  },
  {
    title: "Cataract Surgery",
    slug: "cataract-surgery",
    description:
      "Cataract surgery removes the clouded lens using advanced phacoemulsification technology, restoring clear vision with suitable intraocular lens replacement",
    imageUrl: "/images/services/body-parts_1713560.webp",
    alt: "Eye anatomy for cataract surgery",
  },
  {
    title: "Optical & Contact Lenses",
    slug: "optical-contact-lenses",
    description:
      "Optical and contact lenses correct vision by refracting light, providing options for myopia, hyperopia, and astigmatism",
    imageUrl: "/images/services/ophthalmology_4892551.webp",
    alt: "Ophthalmology examination for lenses",
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

export function getTreatmentSlugs(): string[] {
  return siteConfig.treatments.map((t) => t.slug);
}
