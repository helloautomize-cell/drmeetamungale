export interface BlogPostMeta {
  slug: string;
  title: string;
  url: string;
  coverImage?: string;
}

// All 20 live posts — slugs, titles and URLs VERBATIM from the WordPress REST API
// (archive/raw/posts_full.json). coverImage is set ONLY where a title-matched
// media-library file was verified to exist in public/images/blog-covers/.
// No dates: the REST API exposes no publish dates for these posts, so none are
// invented here. No excerpts invented — full bodies live in archive/content/posts/.
export const blogPosts: BlogPostMeta[] = [
  {
    slug: "benchmarks-in-eye-care",
    title: "What Are Progression Measurement Benchmarks in Eye Care?",
    url: "/blog/benchmarks-in-eye-care/",
    coverImage: "/images/blog-covers/What-Are-Progression-Measurement-Benchmarks-in-Eye-Care.jpg",
  },
  {
    slug: "routine-eye-examination",
    title: "What Is Involved in a Routine Eye Examination?",
    url: "/blog/routine-eye-examination/",
    coverImage: "/images/blog-covers/What-Is-Involved-in-a-Routine-Eye-Examination.jpg",
  },
  {
    slug: "disease-progression-velocity-in-eye-care",
    title: "How to Calculate Disease Progression Velocity in Eye Care",
    url: "/blog/disease-progression-velocity-in-eye-care/",
  },
  {
    slug: "corneal-treatment-recovery-process",
    title: "What is the recovery process like after corneal treatment?",
    url: "/blog/corneal-treatment-recovery-process/",
    coverImage: "/images/blog-covers/What-is-the-recovery-process-like-after-corneal-treatment.jpg",
  },
  {
    slug: "how-is-glaucoma-diagnosed-evaluated",
    title: "How is Glaucoma Typically Diagnosed and Evaluated?",
    url: "/blog/how-is-glaucoma-diagnosed-evaluated/",
    coverImage: "/images/blog-covers/How-is-glaucoma-typically-diagnosed-and-evaluated.jpg",
  },
  {
    slug: "risks-benefits-of-cataract-surgery",
    title: "What are the risks and benefits of cataract surgery?",
    url: "/blog/risks-benefits-of-cataract-surgery/",
    coverImage: "/images/blog-covers/Benefits-of-Cataract-Surgery-for-Better-Vision-in-Daily-Life.jpg",
  },
  {
    slug: "the-benefits-of-regular-eye-check-ups",
    title: "What are the benefits of regular eye check-ups?",
    url: "/blog/the-benefits-of-regular-eye-check-ups/",
    coverImage: "/images/blog-covers/What-are-the-benefits-of-regular-eye-check-ups.jpg",
  },
  {
    slug: "glaucoma-treatment-options",
    title: "What are the different treatment options for glaucoma?",
    url: "/blog/glaucoma-treatment-options/",
  },
  {
    slug: "benefits-of-cataract-surgery",
    title: "Benefits of Cataract Surgery for Better Vision in Daily Life",
    url: "/blog/benefits-of-cataract-surgery/",
    coverImage: "/images/blog-covers/Benefits-of-Cataract-Surgery-for-Better-Vision-in-Daily-Life.jpg",
  },
  {
    slug: "best-foods-for-eye-health",
    title: "Best Foods for Eye Health: 15 Superfoods to Improve Your Vision Naturally",
    url: "/blog/best-foods-for-eye-health/",
  },
  {
    slug: "ai-in-eye-care-in-2026",
    title: "AI in Eye Care: How Artificial Intelligence is Revolutionising Eye Disease Detection in 2026",
    url: "/blog/ai-in-eye-care-in-2026/",
    coverImage: "/images/blog-covers/blog-3.jpg",
  },
  {
    slug: "new-year-eye-health-resolutions-2026",
    title: "7 Habit for New Year Eye Health Resolutions 2026",
    url: "/blog/new-year-eye-health-resolutions-2026/",
  },
  {
    slug: "glaucoma-awareness-month-2026",
    title: "Glaucoma Awareness Month 2026: Early Detection Is Key to Stopping the Silent Thief of Sight",
    url: "/blog/glaucoma-awareness-month-2026/",
    coverImage: "/images/blog-covers/Glaucoma-Awareness-Month-2026.jpg",
  },
  {
    slug: "corneal-ulcer-treatment",
    title: "Corneal Ulcer Treatment: Causes, Early Warning Signs, and the Importance of Timely Cornea Evaluation at Mungale Eye Hospital",
    url: "/blog/corneal-ulcer-treatment/",
  },
  {
    slug: "thinking-of-lasik-surgery",
    title: "Thinking of LASIK Read This Before You Book Your Surgery",
    url: "/blog/thinking-of-lasik-surgery/",
  },
  {
    slug: "when-should-you-see-an-eye-doctor",
    title: "When Should You See an Eye Doctor? Let’s Talk About It Honestly",
    url: "/blog/when-should-you-see-an-eye-doctor/",
  },
  {
    slug: "best-eye-hospital-near-me",
    title: "Where to Find the Right Eye Hospital Near Me in Vadodara: A Local’s Complete Guide to Healthy Vision",
    url: "/blog/best-eye-hospital-near-me/",
  },
  {
    slug: "best-eye-hospital-for-corneal-transplant",
    title: "Best Eye Hospital for Corneal Transplant – Munagle Eye Hospital",
    url: "/blog/best-eye-hospital-for-corneal-transplant/",
  },
  {
    slug: "cataract-surgery-vadodara-gujarat",
    title: "Cataract Surgery Vadodara Gujarat: From Subtle Symptoms to Clear Vision",
    url: "/blog/cataract-surgery-vadodara-gujarat/",
  },
  {
    slug: "advanced-eye-care-treatment",
    title: "Advanced Eye Care Treatment in Raopura Vadodara",
    url: "/blog/advanced-eye-care-treatment/",
  },
];

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
