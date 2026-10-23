import type { SupportArticleSource } from "@/content/blog-support";

// Article 4.3 - Corneal Transplant cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleSource = {
  number: "4.3",
  slug: "corneal-transplant-recovery-first-6-months",
  title: "Corneal Transplant Recovery: The First 6 Months",
  seoTitle: "Corneal Transplant Recovery | Mungale Eye Hospital",
  metaDescription: "Recovery after corneal transplant takes weeks to months and depends on the type of surgery. Learn the timeline, eye drops, activity limits, follow-up and.",
  topics: ["cornea","surgery"],
  cluster: "corneal-transplant",
  pillarSlug: "corneal-transplant-surgery",
  order: 3,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-08",
  cover: {
    src: "/images/blog/corneal-transplant-recovery-first-6-months-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: patient wearing a protective eye shield resting.",
  },
  blocks: [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Vision may improve within weeks after endothelial transplants such as DMEK or DSEK, while full-thickness PK and DALK can take many months to a year or more, partly because stitches affect focus. During the first six months, patients use steroid and other drops as prescribed, protect the eye, avoid rubbing and heavy strain, and attend regular check-ups. Sudden redness, pain, light sensitivity or reduced vision need urgent review." },
      ],
    },
    { type: "para", text: "Recovery after a [corneal transplant](/blog/corneal-transplant-surgery/) is gradual. How quickly vision improves depends on the type of transplant, the condition being treated and how well the eye heals. Careful use of eye drops, protecting the eye and attending follow-up visits are essential for success." },
    { type: "heading", text: "What Happens in the First Week?" },
    { type: "item", text: "Eye shield or patch, especially at night" },
    { type: "item", text: "Mild discomfort, watering and blurred vision" },
    { type: "item", text: "For DMEK or DSEK, lying face up as advised to help the air bubble attach the graft" },
    { type: "item", text: "Starting antibiotic and steroid eye drops" },
    { type: "item", text: "Early check-up the next day and within the first week" },
    { type: "heading", text: "What Happens in Weeks 2 to 6?" },
    { type: "item", text: "Gradual reduction in discomfort" },
    { type: "item", text: "Vision slowly improves, faster with endothelial grafts" },
    { type: "item", text: "Continued eye drops on a strict schedule" },
    { type: "item", text: "Avoid swimming, dusty environments, heavy lifting and eye rubbing" },
    { type: "item", text: "Wear protective glasses outdoors and a shield at night" },
    { type: "heading", text: "What Happens in Months 2 to 6?" },
    { type: "item", text: "Steroid drops are usually tapered slowly but often continued at low dose" },
    { type: "item", text: "Stitches in PK or DALK may be adjusted or removed selectively to reduce astigmatism" },
    { type: "item", text: "Glasses or contact lenses may be prescribed once vision stabilises" },
    { type: "item", text: "Regular checks for graft clarity, eye pressure and rejection" },
    { type: "heading", text: "How Do Different Transplants Recover?" },
    { type: "h3", text: "DMEK" },
    { type: "para", text: "Often the fastest recovery, with useful vision within weeks for many patients." },
    { type: "h3", text: "DSEK" },
    { type: "para", text: "Recovery is usually quicker than PK, with vision improving over weeks to a few months." },
    { type: "h3", text: "DALK and PK" },
    { type: "para", text: "Stitches stay for months. Vision improves gradually and may take a year or more to stabilise." },
    { type: "heading", text: "Why Are Eye Drops So Important?" },
    { type: "para", text: "Steroid drops prevent rejection and inflammation. Stopping them early increases the risk of rejection. Steroids can raise eye pressure, so regular checks are needed." },
    { type: "heading", text: "What Activities Should You Avoid?" },
    { type: "item", text: "Rubbing or pressing on the eye" },
    { type: "item", text: "Swimming and hot tubs in the early weeks" },
    { type: "item", text: "Contact sports and activities with risk of eye injury" },
    { type: "item", text: "Dusty or smoky environments" },
    { type: "item", text: "Heavy lifting and bending in the first weeks as advised" },
    { type: "heading", text: "What Are Warning Signs?" },
    { type: "para", text: "Remember RSVP: Redness, Sensitivity to light, Vision decrease, Pain. Contact your eye surgeon urgently if any of these appear, as they may signal rejection or infection." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Recovery time depends on the type of transplant." },
    { type: "item", text: "DMEK and DSEK usually recover faster than PK and DALK." },
    { type: "item", text: "Eye drops are essential to prevent rejection." },
    { type: "item", text: "Protect the eye and avoid rubbing." },
    { type: "item", text: "Report redness, light sensitivity, vision drop or pain urgently." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Patience and careful follow-up help a new cornea settle and give the best vision possible. [Dr. Meeta Mungale](/doctors/meeta-mungale/) and the team at [Mungale Eye Hospital](/contact-us/) in Vadodara guide patients through every stage of transplant recovery." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "How long does it take to recover from a corneal transplant?",
        a: [
          { type: "para", text: "Endothelial transplants such as DMEK often allow useful vision within weeks, while PK and DALK may take many months to a year or more to stabilise. Follow-up continues long term." },
        ],
      },
      {
        q: "How long do I need eye drops after corneal transplant?",
        a: [
          { type: "para", text: "Steroid drops are usually continued for months and tapered slowly. Some patients use low-dose drops long term. Do not stop drops without your surgeon's advice." },
        ],
      },
      {
        q: "When can I return to work after corneal transplant?",
        a: [
          { type: "para", text: "Many people return to desk work within one to a few weeks, depending on the transplant type and job. Avoid dusty or physically demanding work until your surgeon agrees." },
        ],
      },
      {
        q: "What are signs of corneal graft rejection?",
        a: [
          { type: "para", text: "Warning signs include redness, light sensitivity, reduced vision and pain, remembered as RSVP. Contact your surgeon urgently if these occur." },
        ],
      },
      {
        q: "Can I watch screens after corneal transplant?",
        a: [
          { type: "para", text: "Light screen use is usually fine after the first few days if comfortable. Take breaks and use lubricating drops if advised. Follow your surgeon's guidance." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: About corneal transplantation](https://www.aao.org/eye-health/treatments/about-corneal-transplantation)" },
    { type: "item", text: "[NHS: Cornea transplant](https://www.nhs.uk/conditions/cornea-transplant/)" },
  ],
  keepReading: [
    { label: "Corneal Transplant Surgery: When It Is Needed, Types, Recovery & Risks", target: "/blog/corneal-transplant-surgery/" },
    { label: "DMEK vs DSEK vs DALK vs PK: What Is the Difference?", target: "link:4.2" },
    { label: "Corneal Graft Rejection: Warning Signs and What to Do", target: "link:4.4" },
    { label: "Can a Corneal Transplant Restore Vision Completely?", target: "link:4.5" },
    { label: "When Does a Patient Need a Corneal Transplant?", target: "link:4.1" },
  ],
};
