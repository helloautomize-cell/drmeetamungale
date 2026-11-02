// ─── Per-post SEO overrides (TITLE-021 / KW-021) ────────────────────────
// seoTitle is the absolute <title> and MUST include "| Mungale Eye
// Hospital" (23 chars) — keep total ≤60. metaDescription 120–160 chars.
// Cannibalizing clusters get deliberately distinct search intent.
// updatedAt is stamped only where body copy was actually edited.

export interface BlogSeoOverride {
  seoTitle?: string;
  metaDescription?: string;
  updatedAt?: string;
}

const B = " | Mungale Eye Hospital";

export const blogSeoOverrides: Record<string, BlogSeoOverride> = {
  // ── 10 hospital-authored posts (pillar + flagship) ──
  "lasik-eye-surgery-types-cost-benefits-candidacy": {
    seoTitle: "LASIK Surgery Types, Cost & Candidacy" + B,
    metaDescription:
      "Femto-LASIK, Contoura, SMILE, PRK and ICL explained plainly — indicative India costs per eye, who qualifies, and what recovery is actually like.",
  },
  "diabetic-retinopathy-symptoms-screening-stages-treatment": {
    seoTitle: "Diabetic Retinopathy: Symptoms & Care" + B,
    metaDescription:
      "Diabetic retinopathy can develop without symptoms. Stages, screening, diabetic macular edema, injections, laser and when to seek urgent care.",
  },
  "eye-checkup-after-forty-tests-frequency-warning-signs": {
    seoTitle: "Eye Check-Up After 40: Tests & Signs" + B,
    metaDescription:
      "What a complete eye check-up after 40 covers — eye pressure, optic nerve, retina — how often to go, and the warning signs not to wait on.",
  },
  "pterygium-causes-symptoms-stages-treatment-surgery": {
    seoTitle: "Pterygium: Symptoms & Surgery Guide" + B,
    metaDescription:
      "Pterygium is a non-cancerous growth on the white of the eye. Causes, stages, when surgery helps, recovery and how to prevent regrowth.",
  },
  "corneal-ulcer-keratitis-symptoms-treatment": {
    seoTitle: "Corneal Ulcer & Keratitis Guide" + B,
    metaDescription:
      "Corneal ulcers and keratitis cause pain, redness and blurred vision. Causes, diagnosis, treatment and when same-day care is needed.",
  },
  "cataract-surgery-guide": {
    seoTitle: "Cataract Surgery: Complete Guide" + B,
    metaDescription:
      "A practical guide to cataract symptoms, when surgery is considered, lens (IOL) choices, the procedure, recovery, risks and costs.",
  },
  "corneal-transplant-surgery": {
    seoTitle: "Corneal Transplant Surgery Guide" + B,
    metaDescription:
      "When a corneal transplant is needed, the difference between DALK, DSEK, DMEK and full-thickness grafts, recovery, risks and outcomes.",
  },
  "dry-eye-disease-causes-symptoms-treatment": {
    seoTitle: "Dry Eye Disease: Causes & Treatment" + B,
    metaDescription:
      "Burning, gritty or watery eyes? What causes dry eye disease, how it is diagnosed (tear film, meibomian glands) and the treatment options.",
  },
  "glaucoma-symptoms-causes-treatment": {
    seoTitle: "Glaucoma: Symptoms, Tests & Treatment" + B,
    metaDescription:
      "Glaucoma often has no warning signs. Symptoms, eye pressure and optic nerve tests, and treatment options — drops, laser and surgery.",
  },
  "keratoconus-symptoms-causes-diagnosis-treatment": {
    seoTitle: "Keratoconus: Symptoms & Treatment" + B,
    metaDescription:
      "Keratoconus thins and bulges the cornea, blurring vision. Symptoms, causes, topography diagnosis, cross-linking, lenses and transplants.",
  },
  // ── legacy posts — concise titles replacing verbatim WP titles ──
  "benchmarks-in-eye-care": {
    seoTitle: "Progression Benchmarks in Eye Care" + B,
    metaDescription:
      "Progression benchmarks are standardized metrics used to track a chronic eye condition over time — what they are and how doctors use them.",
  },
  "routine-eye-examination": {
    seoTitle: "Routine Eye Exam: What to Expect" + B,
    metaDescription:
      "A routine eye examination tests visual acuity and the eye's physical structures to catch problems early — what happens step by step.",
  },
  "disease-progression-velocity-in-eye-care": {
    seoTitle: "Measuring Eye Disease Progression" + B,
    metaDescription:
      "Disease progression velocity measures how fast an eye condition worsens over time, using visual field data and OCT measurements.",
  },
  "corneal-treatment-recovery-process": {
    seoTitle: "Corneal Treatment Recovery Timeline" + B,
    metaDescription:
      "What recovery after corneal treatment looks like week by week — aftercare, warning signs of graft rejection and follow-up visits.",
  },
  "how-is-glaucoma-diagnosed-evaluated": {
    seoTitle: "How Glaucoma Is Diagnosed" + B,
    metaDescription:
      "Glaucoma is diagnosed through eye pressure measurement, optic nerve evaluation and visual field testing — what each test shows.",
  },
  "risks-benefits-of-cataract-surgery": {
    seoTitle: "Cataract Surgery: Risks & Benefits" + B,
    metaDescription:
      "The benefits and potential risks of cataract surgery explained — clearer vision, what can go wrong, and how to weigh the decision.",
  },
  "the-benefits-of-regular-eye-check-ups": {
    seoTitle: "Benefits of Regular Eye Check-Ups" + B,
    metaDescription:
      "Regular eye check-ups catch glaucoma, cataract and retinal disease before symptoms appear — why they matter at every age.",
  },
  "glaucoma-treatment-options": {
    seoTitle: "Glaucoma Treatment Options Explained" + B,
    metaDescription:
      "Eye drops, laser therapy and surgery for glaucoma — how each lowers eye pressure and how doctors choose between them.",
  },
  "benefits-of-cataract-surgery": {
    seoTitle: "Benefits of Cataract Surgery" + B,
    metaDescription:
      "How cataract surgery changes daily life — clearer reading, safer night driving, truer colours — and when the difference shows.",
  },
  "best-foods-for-eye-health": {
    seoTitle: "15 Best Foods for Eye Health" + B,
    metaDescription:
      "Everyday Indian foods that protect your eyes — palak, gajar, amla, fish, eggs and more — and the nutrients that do the work.",
  },
  "ai-in-eye-care-in-2026": {
    seoTitle: "AI in Eye Care: What's Real in 2026" + B,
    metaDescription:
      "How artificial intelligence is being used to detect diabetic retinopathy, glaucoma and other eye diseases — and its honest limits.",
  },
  "new-year-eye-health-resolutions-2026": {
    seoTitle: "7 Eye Health Resolutions for 2026" + B,
    metaDescription:
      "Seven practical resolutions for healthier eyes this year — from the 20-20-20 rule to sunglasses, diet and timely check-ups.",
  },
  "glaucoma-awareness-month-2026": {
    seoTitle: "Glaucoma Awareness Month 2026" + B,
    metaDescription:
      "January is Glaucoma Awareness Month — why early detection is the only defence against the silent thief of sight in India.",
  },
  "corneal-ulcer-treatment": {
    seoTitle: "Corneal Ulcer Treatment in Vadodara" + B,
    metaDescription:
      "Corneal ulcer treatment in Vadodara — causes, early warning signs, and why timely cornea evaluation protects your vision.",
  },
  "thinking-of-lasik-surgery": {
    seoTitle: "Thinking of LASIK? Read This First" + B,
    metaDescription:
      "What to know before booking LASIK in Vadodara — candidacy, costs in India, real risks and the questions to ask your surgeon.",
  },
  "when-should-you-see-an-eye-doctor": {
    seoTitle: "When Should You See an Eye Doctor?" + B,
    metaDescription:
      "Blurred board at school, eye strain, sudden floaters — which symptoms need an eye doctor soon and which can wait.",
  },
  "best-eye-hospital-near-me": {
    seoTitle: "Eye Hospital Near You: A Checklist" + B,
    metaDescription:
      "How to choose an eye hospital near you — a practical checklist covering doctors, equipment, hygiene and honest pricing.",
  },
  "best-eye-hospital-for-corneal-transplant": {
    seoTitle: "Corneal Transplant in Vadodara" + B,
    metaDescription:
      "What getting a corneal transplant in Vadodara involves — donor tissue, the procedure, recovery and choosing where to have it.",
  },
  "cataract-surgery-vadodara-gujarat": {
    // Distinct from /treatments/cataract-surgery/ ("Cataract Surgery in
    // Vadodara") — identical <title>s split relevance; the article's
    // intent is the patient journey from symptoms to clear vision.
    seoTitle: "Planning Cataract Surgery in Vadodara" + B,
    metaDescription:
      "Cataract surgery in Vadodara — from the first subtle symptoms to clear vision, what the procedure and recovery involve.",
  },
  "advanced-eye-care-treatment": {
    seoTitle: "Advanced Eye Care in Vadodara" + B,
    metaDescription:
      "Advanced eye care in Raopura, Vadodara — timely, accurate eye treatment and modern diagnostics at Mungale Eye Hospital.",
  },
  "ahmed-glaucoma-valve-surgery": {
    seoTitle: "Ahmed Glaucoma Valve Surgery Guide" + B,
    metaDescription:
      "The Ahmed Glaucoma Valve is a drainage implant for complex or uncontrolled glaucoma — who needs it and how it protects vision.",
  },
  "best-eye-hospital-in-vadodara": {
    seoTitle: "Choosing an Eye Hospital in Vadodara" + B,
    metaDescription:
      "What to look for when choosing an eye hospital in Vadodara — specialists, diagnostics, transparency and follow-up care.",
  },
  "advanced-eye-care-in-vadodara": {
    seoTitle: "New Eye Treatments Now in Vadodara" + B,
    metaDescription:
      "Newer eye treatments now available in Vadodara — from lamellar transplants to premium lenses — and what they mean for patients.",
  },
  "5-easy-eye-care-tips-for-computer-geeks": {
    seoTitle: "5 Eye Care Tips for Screen Users" + B,
    metaDescription:
      "Five easy habits for people who spend long hours on computers — protect your eyes from strain, dryness and fatigue.",
  },
  "7-eye-care-tips-never-ignore": {
    seoTitle: "7 Eye Care Tips You Shouldn't Skip" + B,
    metaDescription:
      "Seven eye care habits worth keeping — simple, everyday practices that protect your vision over the long run.",
  },
  "tips-for-choosing-an-eye-care-doctor": {
    seoTitle: "How to Choose an Eye Care Doctor" + B,
    metaDescription:
      "Practical tips for choosing the right eye doctor — qualifications, specialization, communication and clinic standards.",
  },
};

// Every post's headings/FAQ copy was copy-edited on this date — honest
// dateModified for schema and the "Updated" byline.
export const CONTENT_EDIT_DATE = "2026-10-24";
