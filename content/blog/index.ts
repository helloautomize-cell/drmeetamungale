import type { ReviewerKey } from "@/content/doctors";
import { supportMetas, type ClusterId } from "@/content/blog-support";
import { blogSeoOverrides, CONTENT_EDIT_DATE } from "@/content/blog-seo-overrides";

export type BlogTopic = "cataract" | "glaucoma" | "cornea" | "surgery" | "eye-health";

export interface BlogPostMeta {
  slug: string;
  title: string;
  url: string;
  coverImage: string;
  coverWidth: number;
  coverHeight: number;
  date: string;
  excerpt: string;
  readMinutes: number;
  topics: BlogTopic[];
  // Reviewer mapping confirmed by both doctors (Oct 2026).
  reviewedBy?: ReviewerKey | ReviewerKey[];
  reviewedOn?: string;
  // ── Support-pipeline fields (optional; existing posts unaffected) ──
  role?: "pillar" | "support";
  cluster?: ClusterId;
  pillarSlug?: string;
  supportNumber?: string;
  seoTitle?: string; // absolute <title>, ≤60 incl. brand
  metaDescription?: string; // 120-160
  // Schema-only BlogPosting headline when the verbatim post title is
  // longer than Google's recommended ~110 chars. Never rendered —
  // the visible H1 stays `title`.
  schemaHeadline?: string;
  coverAlt?: string;
  reviewConfirmed?: boolean;
  treatmentPage?: string;
  /** Real last-edit date (YYYY-MM-DD). Drives dateModified + the
      "Updated" byline. Absent = never edited since publishing. */
  updatedAt?: string;
}

// All 36 posts — 26 live (slugs/titles/URLs VERBATIM from the WordPress
// REST API; titles entity-decoded for display) + 10 hospital-authored docs
// from new_blog/ (titles/slugs/excerpts per doc front-matter, verbatim).
// coverImage = each post's own featured media, mirrored to
// public/images/blog-covers/ (26 JPG originals + 10 optimized WebP copies;
// PNG originals retained in new_blog/). date = WP publish date, or
// 2026-09-28/29/30 author dates for the 10 new posts. excerpt = source-text
// truncation (first sentence-ish, never rewritten). readMinutes = ceil from
// live word count, or doc READ TIME. topics = keyword-derived buckets (26)
// or doc CATEGORY mapping (10) for journal filtering (source taxonomy
// untouched).
export const blogPosts: BlogPostMeta[] = [
  {
    slug: "lasik-eye-surgery-types-cost-benefits-candidacy",
    role: "pillar",
    cluster: "lasik",
    reviewedBy: "meeta",
    title: "Laser-Assisted In Situ Keratomileusis (LASIK) Eye Surgery Types, Cost, Benefits and Who Qualifies",
    url: "/blog/lasik-eye-surgery-types-cost-benefits-candidacy/",
    coverImage: "/images/blog-covers/lasik-eye-surgery-types-cost-benefits-candidacy.webp",
    coverWidth: 1280,
    coverHeight: 720,
    date: "2026-09-30",
    excerpt: "A plain guide to Laser-Assisted In Situ Keratomileusis (LASIK) eye surgery in India, covering Femto-LASIK, Contoura, Small Incision Lenticule Extraction (SMILE) and Photorefractive Keratectomy (PRK), indicative costs, recovery, and who makes a good candidate.",
    readMinutes: 16,
    topics: ["surgery"],
  },
  {
    slug: "diabetic-retinopathy-symptoms-screening-stages-treatment",
    role: "pillar",
    cluster: "diabetic-retinopathy",
    reviewedBy: "meeta",
    title: "Diabetic Retinopathy: Symptoms, Screening, Stages & Treatment",
    url: "/blog/diabetic-retinopathy-symptoms-screening-stages-treatment/",
    coverImage: "/images/blog-covers/diabetic-retinopathy-symptoms-screening-stages-treatment.webp",
    coverWidth: 1280,
    coverHeight: 720,
    date: "2026-09-30",
    excerpt: "Diabetic retinopathy can develop without symptoms. Learn about its stages, screening, diabetic macular edema, treatment options and ways to protect vision.",
    readMinutes: 14,
    topics: ["eye-health"],
  },
  {
    slug: "eye-checkup-after-forty-tests-frequency-warning-signs",
    role: "pillar",
    cluster: "eye-checkup",
    reviewedBy: ["sachin", "meeta"],
    title: "Eye Check-Up After 40: Tests, Frequency & Warning Signs",
    url: "/blog/eye-checkup-after-forty-tests-frequency-warning-signs/",
    coverImage: "/images/blog-covers/eye-checkup-after-forty-tests-frequency-warning-signs.webp",
    coverWidth: 1280,
    coverHeight: 720,
    date: "2026-09-30",
    excerpt: "An eye check-up after 40 can pick up glaucoma, cataract and retinal changes before you notice them. Here's what the tests involve and how often you should go.",
    readMinutes: 16,
    topics: ["eye-health"],
  },
  {
    slug: "pterygium-causes-symptoms-stages-treatment-surgery",
    role: "pillar",
    cluster: "pterygium",
    reviewedBy: "meeta",
    title: "Pterygium: Causes, Symptoms, Stages, Treatment & Surgery",
    url: "/blog/pterygium-causes-symptoms-stages-treatment-surgery/",
    coverImage: "/images/blog-covers/pterygium-causes-symptoms-stages-treatment-surgery.webp",
    coverWidth: 1280,
    coverHeight: 720,
    date: "2026-09-29",
    excerpt: "Pterygium is a non-cancerous growth on the white of the eye. Learn what causes it, how it is graded, when surgery helps, what recovery is like and how to prevent regrowth.",
    readMinutes: 15,
    topics: ["cornea", "surgery"],
  },
  {
    slug: "corneal-ulcer-keratitis-symptoms-treatment",
    role: "pillar",
    cluster: "corneal-ulcer",
    reviewedBy: "meeta",
    title: "Corneal Ulcer & Keratitis: Symptoms & Treatment",
    url: "/blog/corneal-ulcer-keratitis-symptoms-treatment/",
    coverImage: "/images/blog-covers/corneal-ulcer-keratitis-symptoms-treatment.webp",
    coverWidth: 1280,
    coverHeight: 720,
    date: "2026-09-29",
    excerpt: "Corneal ulcers and keratitis can cause eye pain, redness and blurred vision. Learn the causes, symptoms, diagnosis, treatment and when urgent care is needed.",
    readMinutes: 15,
    topics: ["cornea"],
  },
  {
    slug: "cataract-surgery-guide",
    role: "pillar",
    cluster: "cataract",
    reviewedBy: ["sachin", "meeta"],
    title: "Cataract Surgery: Symptoms, When Surgery Is Needed, Lens Options, Procedure & Recovery",
    url: "/blog/cataract-surgery-guide/",
    // TODO(doctor): AI-generated cover — the before/after eye inset could
    // be read as a promised surgical result. Swap for a real photo if that
    // is a concern.
    coverImage: "/images/blog/cataract-surgery-guide-cover.webp",
    coverWidth: 1280,
    coverHeight: 720,
    coverAlt:
      "AI-generated illustration: a woman patient beside circular before-and-after eye close-ups, an intraocular lens graphic and an eye surgery scene.",
    date: "2026-09-28",
    excerpt: "A practical guide to cataract symptoms, when surgery is considered, cataract surgery steps, lens choices, recovery, risks and common patient questions.",
    readMinutes: 15,
    topics: ["cataract", "surgery"],
  },
  {
    slug: "corneal-transplant-surgery",
    role: "pillar",
    cluster: "corneal-transplant",
    reviewedBy: "meeta",
    title: "Corneal Transplant Surgery: When It Is Needed, Types, Recovery & Risks",
    url: "/blog/corneal-transplant-surgery/",
    coverImage: "/images/blog/corneal-transplant-surgery-cover.webp",
    coverWidth: 1280,
    coverHeight: 720,
    coverAlt:
      "AI-generated illustration: a woman doctor examining a man's eyes at a slit-lamp unit in a consulting room.",
    date: "2026-09-28",
    excerpt: "A corneal transplant is an operation in which damaged or diseased corneal tissue is replaced with healthy donor tissue. It may be considered when corneal disease cau…",
    readMinutes: 17,
    topics: ["cornea", "surgery"],
  },
  {
    slug: "dry-eye-disease-causes-symptoms-treatment",
    role: "pillar",
    cluster: "dry-eye",
    reviewedBy: "meeta",
    title: "Dry Eye Disease: Causes, Symptoms, Diagnosis & Treatment",
    url: "/blog/dry-eye-disease-causes-symptoms-treatment/",
    coverImage: "/images/blog/dry-eye-disease-causes-symptoms-treatment-cover.webp",
    coverWidth: 1280,
    coverHeight: 720,
    coverAlt:
      "AI-generated illustration: a woman having her eyes examined by a female doctor at a slit-lamp unit.",
    date: "2026-09-28",
    excerpt: "Dry eye disease can cause burning, irritation and fluctuating vision. Learn about its causes, symptoms, diagnosis, treatment and long-term management.",
    readMinutes: 19,
    topics: ["cornea"],
  },
  {
    slug: "glaucoma-symptoms-causes-treatment",
    role: "pillar",
    cluster: "glaucoma",
    reviewedBy: "sachin",
    title: "Glaucoma: Symptoms, Causes, Eye Pressure Tests & Treatment",
    url: "/blog/glaucoma-symptoms-causes-treatment/",
    // TODO(doctor): AI-generated cover — the tonometry device shows a
    // third-party brand logo. Swap for a real photo if that is a concern.
    coverImage: "/images/blog/glaucoma-symptoms-causes-treatment-cover.webp",
    coverWidth: 1280,
    coverHeight: 720,
    coverAlt:
      "AI-generated illustration: an eye examination room with a slit lamp and an eye-pressure testing device on a table.",
    date: "2026-09-28",
    excerpt: "Glaucoma often develops without warning signs. Learn its causes, symptoms, eye pressure tests, and treatment options from Mungale Eye Hospital, Vadodara.",
    readMinutes: 15,
    topics: ["glaucoma"],
  },
  {
    slug: "keratoconus-symptoms-causes-diagnosis-treatment",
    role: "pillar",
    cluster: "keratoconus",
    reviewedBy: "meeta",
    title: "Keratoconus: Symptoms, Causes, Diagnosis & Treatment",
    url: "/blog/keratoconus-symptoms-causes-diagnosis-treatment/",
    coverImage: "/images/blog-covers/keratoconus.webp",
    coverWidth: 1280,
    coverHeight: 720,
    date: "2026-09-28",
    excerpt: "Keratoconus causes the cornea to thin and bulge, blurring vision. Learn the symptoms, causes, diagnosis and treatment options, from cross-linking to lenses.",
    readMinutes: 14,
    topics: ["cornea", "surgery"],
  },
  {
    slug: "benchmarks-in-eye-care",
    reviewedBy: "sachin",
    title: "What Are Progression Measurement Benchmarks in Eye Care?",
    url: "/blog/benchmarks-in-eye-care/",
    coverImage: "/images/blog-covers/What-Are-Progression-Measurement-Benchmarks-in-Eye-Care.jpg",
    coverWidth: 800,
    coverHeight: 472,
    date: "2026-05-22",
    excerpt: "Progression measurement benchmarks in eye care are standardized metrics used to track the advancement of a chronic eye condition over time.",
    readMinutes: 6,
    topics: ["eye-health"],
  },
  {
    slug: "routine-eye-examination",
    reviewedBy: ["sachin", "meeta"],
    title: "What Is Involved in a Routine Eye Examination?",
    url: "/blog/routine-eye-examination/",
    coverImage: "/images/blog-covers/What-Is-Involved-in-a-Routine-Eye-Examination.jpg",
    coverWidth: 800,
    coverHeight: 472,
    date: "2026-05-14",
    excerpt: "A thorough routine eye examination is a comprehensive evaluation because it tests both visual acuity and physical eye structures to detect underlying conditions early .",
    readMinutes: 6,
    topics: ["eye-health"],
  },
  {
    slug: "disease-progression-velocity-in-eye-care",
    reviewedBy: "sachin",
    title: "How to Calculate Disease Progression Velocity in Eye Care",
    url: "/blog/disease-progression-velocity-in-eye-care/",
    coverImage: "/images/blog-covers/Untitled-1-7.jpg",
    coverWidth: 800,
    coverHeight: 472,
    date: "2026-05-13",
    excerpt: "Disease progression velocity in eye care calculates the rate of structural and functional deterioration over time by applying linear regression to visual field data…",
    readMinutes: 6,
    topics: ["eye-health"],
  },
  {
    slug: "corneal-treatment-recovery-process",
    reviewedBy: "meeta",
    title: "What is the recovery process like after corneal treatment?",
    url: "/blog/corneal-treatment-recovery-process/",
    coverImage: "/images/blog-covers/What-is-the-recovery-process-like-after-corneal-treatment.jpg",
    coverWidth: 800,
    coverHeight: 472,
    date: "2026-05-11",
    excerpt: "The key to corneal treatment recovery is strict adherence to clinical aftercare protocols because it minimizes the risk of graft rejection and accelerates…",
    readMinutes: 6,
    topics: ["cornea"],
  },
  {
    slug: "how-is-glaucoma-diagnosed-evaluated",
    reviewedBy: "sachin",
    title: "How is Glaucoma Typically Diagnosed and Evaluated?",
    url: "/blog/how-is-glaucoma-diagnosed-evaluated/",
    coverImage: "/images/blog-covers/How-is-glaucoma-typically-diagnosed-and-evaluated.jpg",
    coverWidth: 800,
    coverHeight: 472,
    date: "2026-05-08",
    excerpt: "Glaucoma diagnosed through a comprehensive eye examination that measures intraocular pressure, evaluates the optic nerve for damage, and assesses peripheral vision loss.",
    readMinutes: 6,
    topics: ["glaucoma"],
  },
  {
    slug: "risks-benefits-of-cataract-surgery",
    reviewedBy: ["sachin", "meeta"],
    title: "What are the risks and benefits of cataract surgery?",
    url: "/blog/risks-benefits-of-cataract-surgery/",
    coverImage: "/images/blog-covers/Benefits-of-Cataract-Surgery-for-Better-Vision-in-Daily-Life.jpg",
    coverWidth: 800,
    coverHeight: 427,
    date: "2026-04-24",
    excerpt: "Cataract Surgery: Navigating the Risks and Embracing the Benefits A cataract is a clouding of the eye’s natural lens, which can significantly impair vision and…",
    readMinutes: 6,
    topics: ["cataract", "surgery"],
  },
  {
    slug: "the-benefits-of-regular-eye-check-ups",
    reviewedBy: "meeta",
    title: "What are the benefits of regular eye check-ups?",
    url: "/blog/the-benefits-of-regular-eye-check-ups/",
    coverImage: "/images/blog-covers/What-are-the-benefits-of-regular-eye-check-ups.jpg",
    coverWidth: 800,
    coverHeight: 427,
    date: "2026-04-23",
    excerpt: "The Crucial Importance of Regular Eye Check-ups for Your Vision and Health Our vision is one of our most precious senses, allowing us to experience the world in…",
    readMinutes: 4,
    topics: ["eye-health"],
  },
  {
    slug: "glaucoma-treatment-options",
    reviewedBy: "sachin",
    title: "What are the different treatment options for glaucoma?",
    url: "/blog/glaucoma-treatment-options/",
    coverImage: "/images/blog-covers/mungale-eye-blog-copy.jpg",
    coverWidth: 800,
    coverHeight: 427,
    date: "2026-03-30",
    excerpt: "Glaucoma Treatment Options: A Comprehensive Guide Glaucoma is a group of eye conditions that damage the optic nerve, which is vital for good vision.",
    readMinutes: 7,
    topics: ["glaucoma"],
  },
  {
    slug: "benefits-of-cataract-surgery",
    reviewedBy: ["sachin", "meeta"],
    title: "Benefits of Cataract Surgery for Better Vision in Daily Life",
    url: "/blog/benefits-of-cataract-surgery/",
    coverImage: "/images/blog-covers/mungale-eye-blog.jpg",
    coverWidth: 800,
    coverHeight: 427,
    date: "2026-03-23",
    excerpt: "Benefits of Cataract Surgery for Better Vision in Daily Life Cataracts rarely announce themselves. They creep in quietly.",
    readMinutes: 6,
    topics: ["cataract", "surgery"],
  },
  {
    slug: "best-foods-for-eye-health",
    reviewedBy: "meeta",
    title: "Best Foods for Eye Health: 15 Superfoods to Improve Your Vision Naturally",
    url: "/blog/best-foods-for-eye-health/",
    coverImage: "/images/blog-covers/blog-copy-2.jpg",
    coverWidth: 800,
    coverHeight: 427,
    date: "2026-02-26",
    excerpt: "Your eyes need food just as much as your body does. And what you eat every single day—at breakfast, lunch, and dinner—is either protecting your vision or slowly…",
    readMinutes: 15,
    topics: ["eye-health"],
  },
  {
    slug: "ai-in-eye-care-in-2026",
    reviewedBy: ["sachin", "meeta"],
    title: "AI in Eye Care: How Artificial Intelligence is Revolutionising Eye Disease Detection in 2026",
    url: "/blog/ai-in-eye-care-in-2026/",
    coverImage: "/images/blog-covers/blog-3.jpg",
    coverWidth: 800,
    coverHeight: 427,
    date: "2026-02-25",
    excerpt: "Imagine a machine scanning your retina in seconds and detecting a disease your doctor hasn’t noticed yet. This isn’t science fiction – it’s happening right now in…",
    readMinutes: 11,
    topics: ["eye-health"],
  },
  {
    slug: "new-year-eye-health-resolutions-2026",
    reviewedBy: "meeta",
    title: "7 Habit for New Year Eye Health Resolutions 2026",
    url: "/blog/new-year-eye-health-resolutions-2026/",
    coverImage: "/images/blog-covers/New-Year-resulation-2026.jpg",
    coverWidth: 800,
    coverHeight: 427,
    date: "2026-01-13",
    excerpt: "As we welcome 2026, many of us are setting resolutions for better health. But here’s a question: when was the last time you thought about your eye health ?",
    readMinutes: 11,
    topics: ["eye-health"],
  },
  {
    slug: "glaucoma-awareness-month-2026",
    reviewedBy: "sachin",
    title: "Glaucoma Awareness Month 2026: Early Detection Is Key to Stopping the Silent Thief of Sight",
    url: "/blog/glaucoma-awareness-month-2026/",
    coverImage: "/images/blog-covers/Glaucoma-Awareness-Month-2026.jpg",
    coverWidth: 1080,
    coverHeight: 576,
    date: "2026-01-08",
    excerpt: "January is Glaucoma Awareness Month 2026 , a critical time to spotlight one of India’s most devastating yet preventable causes of blindness.",
    readMinutes: 3,
    topics: ["glaucoma"],
  },
  {
    slug: "corneal-ulcer-treatment",
    reviewedBy: "meeta",
    title: "Corneal Ulcer Treatment: Causes, Early Warning Signs, and the Importance of Timely Cornea Evaluation at Mungale Eye Hospital",
    schemaHeadline: "Corneal Ulcer Treatment: Causes, Early Warning Signs and Timely Cornea Evaluation",
    url: "/blog/corneal-ulcer-treatment/",
    coverImage: "/images/blog-covers/blog-2.jpg",
    coverWidth: 1080,
    coverHeight: 576,
    date: "2025-12-16",
    excerpt: "Corneal Ulcer Treatment Starts With Early Awareness A corneal ulcer is an open wound on the cornea, the clear front layer of the eye that is essential for sharp vision.",
    readMinutes: 4,
    topics: ["cornea"],
  },
  {
    slug: "thinking-of-lasik-surgery",
    reviewedBy: "meeta",
    title: "Thinking of Laser-Assisted In Situ Keratomileusis (LASIK)? Read This Before You Book Your Surgery",
    url: "/blog/thinking-of-lasik-surgery/",
    coverImage: "/images/blog-covers/mungale.jpg",
    coverWidth: 800,
    coverHeight: 450,
    date: "2025-11-25",
    excerpt: "If you live in Vadodara you probably know at least one friend or colleague who has gone for Laser-Assisted In Situ Keratomileusis (LASIK) eye surgery. People from Ahmedabad and other parts of Gujarat also…",
    readMinutes: 6,
    topics: ["surgery"],
  },
  {
    slug: "when-should-you-see-an-eye-doctor",
    reviewedBy: ["sachin", "meeta"],
    title: "When Should You See an Eye Doctor? Let’s Talk About It Honestly",
    url: "/blog/when-should-you-see-an-eye-doctor/",
    coverImage: "/images/blog-covers/mungale-blog-image-1.jpg",
    coverWidth: 1920,
    coverHeight: 1080,
    date: "2025-11-12",
    excerpt: "We all do it. Ignore small eye problems. Rub them. Splash water. Move on. When Should You See an Eye Doctor? Then one fine day, the board at school looks hazy, or…",
    readMinutes: 4,
    topics: ["eye-health"],
  },
  {
    slug: "best-eye-hospital-near-me",
    reviewedBy: ["sachin", "meeta"],
    title: "Finding an Eye Hospital Near You: A Practical Checklist",
    url: "/blog/best-eye-hospital-near-me/",
    coverImage: "/images/blog-covers/2241257-e1726640314227.jpg",
    coverWidth: 1000,
    coverHeight: 443,
    date: "2025-10-28",
    excerpt: "Whether you live in Akota, Alkapuri, Manjalpur, or the old city areas of Vadodara, your eyes deserve regular care -just like your heart or teeth.",
    readMinutes: 10,
    topics: ["eye-health"],
  },
  {
    slug: "best-eye-hospital-for-corneal-transplant",
    reviewedBy: "meeta",
    title: "Corneal Transplant in Vadodara: What to Expect",
    url: "/blog/best-eye-hospital-for-corneal-transplant/",
    coverImage: "/images/blog-covers/Corneal-Health-Demystified.jpg",
    coverWidth: 1920,
    coverHeight: 1080,
    date: "2025-09-24",
    excerpt: "Imagine trying to look through a window that has slowly fogged up over time. You can still make out shapes, but the details are gone.",
    readMinutes: 4,
    topics: ["cornea", "surgery"],
  },
  {
    slug: "cataract-surgery-vadodara-gujarat",
    reviewedBy: ["sachin", "meeta"],
    title: "Cataract Surgery Vadodara Gujarat: From Subtle Symptoms to Clear Vision",
    url: "/blog/cataract-surgery-vadodara-gujarat/",
    coverImage: "/images/blog-covers/Cataract-Surgery.jpg",
    coverWidth: 1920,
    coverHeight: 1080,
    date: "2025-09-22",
    excerpt: "Introduction Cataract Surgery Vadodara Gujarat : You don’t wake up one morning and suddenly “have” cataracts. They creep in.",
    readMinutes: 4,
    topics: ["cataract", "surgery"],
  },
  {
    slug: "advanced-eye-care-treatment",
    reviewedBy: ["sachin", "meeta"],
    title: "Advanced Eye Care Treatment in Raopura Vadodara",
    url: "/blog/advanced-eye-care-treatment/",
    coverImage: "/images/blog-covers/blog-copy3.jpg",
    coverWidth: 1080,
    coverHeight: 576,
    date: "2025-09-19",
    excerpt: "Advanced Eye Care Treatment in Raopura Vadodara Access to timely and accurate eye care plays a crucial role in preserving vision and preventing long-term complications.",
    readMinutes: 4,
    topics: ["eye-health"],
  },
  {
    slug: "ahmed-glaucoma-valve-surgery",
    reviewedBy: "sachin",
    title: "Ahmed Glaucoma Valve Surgery: How This Drainage Device Can Save Your Vision",
    url: "/blog/ahmed-glaucoma-valve-surgery/",
    coverImage: "/images/blog-covers/Ahmed-Glaucoma-Valve-Surgery-How-This-Drainage-Device-Can-Save-Your-Vision.jpg",
    coverWidth: 1024,
    coverHeight: 494,
    date: "2025-08-07",
    excerpt: "Introduction In Vadodara and across Gujarat, glaucoma is an increasingly common concern, especially among adults over 40 and diabetic patients.",
    readMinutes: 4,
    topics: ["glaucoma", "surgery"],
  },
  {
    slug: "best-eye-hospital-in-vadodara",
    reviewedBy: ["sachin", "meeta"],
    title: "Choosing an Eye Hospital in Vadodara: What to Look For",
    url: "/blog/best-eye-hospital-in-vadodara/",
    coverImage: "/images/blog-covers/How-to-Choose-the-Right-Eye-Hospital-A-Complete-Guide-for-Vadodara-Residents.jpg",
    coverWidth: 1024,
    coverHeight: 494,
    date: "2025-07-30",
    excerpt: "Searching for an eye hospital near you? Blurry vision, a sudden change in eyesight, or eye pain are common starting points — here's what to look for.",
    readMinutes: 5,
    topics: ["eye-health"],
  },
  {
    slug: "advanced-eye-care-in-vadodara",
    reviewedBy: "meeta",
    title: "Breakthrough Treatments: How Specialists Are Advancing Eye Care in Vadodara, Gujarat",
    url: "/blog/advanced-eye-care-in-vadodara/",
    coverImage: "/images/blog-covers/Breakthrough-Treatments-How-Specialists-Are-Advancing-Eye-Care-in-Vadodara-Gujarat.jpg",
    coverWidth: 1024,
    coverHeight: 494,
    date: "2025-07-30",
    excerpt: "Eye Care in Vadodara, the centre of Gujarat, something is unfolding. Eye care is no longer restricted to old-fashioned surgeries or tedious waiting lists for donor…",
    readMinutes: 4,
    topics: ["eye-health"],
  },
  {
    slug: "5-easy-eye-care-tips-for-computer-geeks",
    reviewedBy: "meeta",
    title: "5 Easy Eye Care Tips For Computer Geeks",
    url: "/blog/5-easy-eye-care-tips-for-computer-geeks/",
    coverImage: "/images/blog-covers/232.jpg",
    coverWidth: 1480,
    coverHeight: 727,
    date: "2025-05-15",
    excerpt: "5 Easy Eye Care Tips- Spending long hours in front of computers, laptops, or televisions has become a part of modern man’s life today.",
    readMinutes: 2,
    topics: ["eye-health"],
  },
  {
    slug: "7-eye-care-tips-never-ignore",
    reviewedBy: "meeta",
    title: "7 Eye Care Helpful tips That You Need to Never Sacrifice On",
    url: "/blog/7-eye-care-tips-never-ignore/",
    coverImage: "/images/blog-covers/2-scaled-1.jpg",
    coverWidth: 2560,
    coverHeight: 1247,
    date: "2024-09-13",
    excerpt: "7 Eye Care tips-We are spending money for unnecessary things such as unnecessary shopping, having fast foods, movie and other needless things.",
    readMinutes: 3,
    topics: ["eye-health"],
  },
  {
    slug: "tips-for-choosing-an-eye-care-doctor",
    reviewedBy: "meeta",
    title: "Tips For Choosing an Eye Care Doctor",
    url: "/blog/tips-for-choosing-an-eye-care-doctor/",
    coverImage: "/images/blog-covers/Varun-Eye-Care-Slider-img.jpg",
    coverWidth: 1024,
    coverHeight: 494,
    date: "2024-09-13",
    excerpt: "Taking care of your eyes is good as giving importance to your overall health. Here are tips for choosing an eye care doctor is considered as an important health care…",
    readMinutes: 3,
    topics: ["eye-health"],
  },
  // Support articles (content/blog-support/) append LAST so the home
  // page selection — first four posts with covers — never shifts.
  ...supportMetas,
];

// SEO overrides (titles/descriptions) + the real content-edit date.
// Applied at module load so every consumer sees consistent metadata.
for (const p of blogPosts) {
  const o = blogSeoOverrides[p.slug];
  if (o?.seoTitle) p.seoTitle = o.seoTitle;
  if (o?.metaDescription) p.metaDescription = o.metaDescription;
  // Legacy + new posts were copy-edited together on CONTENT_EDIT_DATE.
  if (p.role !== "support") p.updatedAt = CONTENT_EDIT_DATE;
}

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
