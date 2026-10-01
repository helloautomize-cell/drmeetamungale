export interface Doctor {
  name: string;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  alt: string;
}

// Descriptions grounded ONLY in verified source claims
// (archive/content/pages/about-us.md):
// - "private joint venture led by two accomplished ophthalmologists,
//    Dr. Meeta Mungale and Dr. Sachin Mungale"
// - "referral center for complex cases of cornea and glaucoma"
// - "full range of state-of-the-art diagnostic, curative, and surgical equipment"
export const doctors: Doctor[] = [
  {
    name: "Dr. Sachin Mungale",
    title: "MS - Ophthalmology",
    slug: "dr-sachin-mungale",
    description:
      "Accomplished ophthalmologist leading Mungale Eye Hospital, a private joint venture serving referrals from Gujarat, Madhya Pradesh and Rajasthan.",
    imageUrl: "/images/doctors/Dr-Sachin.jpg",
    alt: "Dr. Sachin Mungale, MS Ophthalmology",
  },
  {
    name: "Dr. Meeta Mungale",
    title: "MS - Ophthalmology, DNB",
    slug: "dr-meeta-mungale",
    description:
      "Accomplished ophthalmologist leading Mungale Eye Hospital, a referral center for complex cases of cornea and glaucoma.",
    imageUrl: "/images/doctors/DrMeeta-2.webp",
    alt: "Dr. Meeta Mungale, MS Ophthalmology, DNB",
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}

// Medical-review bylines — display strings only; a page shows the byline
// when its content entry sets reviewedBy/reviewedOn (all unset for now).
export type ReviewerKey = "sachin" | "meeta";

export const medicalReviewers: Record<ReviewerKey, { name: string; credentials: string }> = {
  sachin: { name: "Dr. Sachin Mungale", credentials: "MS (Ophthalmology)" },
  meeta: { name: "Dr. Meeta Mungale", credentials: "MS (Ophthalmology), DNB" },
};
