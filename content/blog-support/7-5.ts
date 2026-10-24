import type { SupportArticleSource } from "@/content/blog-support";

// Article 7.5 - Corneal Ulcer & Keratitis cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleSource = {
  number: "7.5",
  slug: "corneal-ulcer-left-untreated",
  title: "What Happens If a Corneal Ulcer Is Left Untreated?",
  seoTitle: "Untreated Corneal Ulcer Risks | Mungale Eye Hospital",
  metaDescription: "An untreated corneal ulcer can spread, scar the cornea and threaten vision. Learn the possible complications and why quick treatment matters.",
  topics: ["cornea"],
  cluster: "corneal-ulcer",
  pillarSlug: "corneal-ulcer-keratitis-symptoms-treatment",
  order: 5,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-15",
  cover: {
    src: "/images/blog/corneal-ulcer-left-untreated-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: Indian adult holding a hand near a red, watering eye while sitting in a clinic waiting area.",
  },
  blocks: [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "An untreated corneal ulcer can grow deeper and wider, scar the cornea, perforate the eye wall, spread infection inside the eye and cause permanent vision loss. Early treatment greatly improves the chance of saving vision, so a painful red eye with a white spot should be seen the same day." },
      ],
    },
    { type: "para", text: "A red, painful eye that is ignored can turn into a vision-threatening problem. [Corneal ulcer](/blog/corneal-ulcer-keratitis-symptoms-treatment/)s can worsen over days." },
    { type: "heading", text: "Possible Complications" },
    { type: "h3", text: "Scarring" },
    { type: "para", text: "The cornea heals with a cloudy scar that blurs vision." },
    { type: "h3", text: "Perforation" },
    { type: "para", text: "A deep ulcer can break through the cornea, which is an emergency." },
    { type: "h3", text: "Spread of infection" },
    { type: "para", text: "Infection may reach deeper eye structures, a serious condition called endophthalmitis." },
    { type: "h3", text: "Vision loss" },
    { type: "para", text: "Severe cases can lead to permanent loss of vision in that eye." },
    { type: "h3", text: "Need for surgery" },
    { type: "para", text: "Advanced damage may need a corneal transplant." },
    { type: "heading", text: "Why Speed Matters" },
    { type: "para", text: "Bacteria and fungi multiply quickly. The right drops, started early, can limit damage." },
    { type: "heading", text: "Symptoms Not to Ignore" },
    { type: "item", text: "Eye pain and redness" },
    { type: "item", text: "Watering or discharge" },
    { type: "item", text: "White or grey spot on the cornea" },
    { type: "item", text: "Blurred vision" },
    { type: "item", text: "Sensitivity to light" },
    { type: "item", text: "Feeling of something in the eye" },
    { type: "heading", text: "Who Is at Higher Risk" },
    { type: "item", text: "Contact lens wearers" },
    { type: "item", text: "People with eye injuries, especially from plants or soil" },
    { type: "item", text: "Those with dry eye or diabetes" },
    { type: "item", text: "People using steroid eye drops without supervision" },
    { type: "heading", text: "What to Do" },
    { type: "item", text: "See an eye doctor the same day" },
    { type: "item", text: "Do not use leftover drops or home remedies" },
    { type: "item", text: "Remove contact lenses and do not wear them again until cleared" },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Untreated ulcers can scar or perforate." },
    { type: "item", text: "Vision loss can be permanent." },
    { type: "item", text: "Quick treatment protects the eye." },
    { type: "item", text: "Avoid self-medication." },
    { type: "item", text: "Pain with a white spot is an emergency." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "When in doubt, get it checked early. For urgent eye care, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/) at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Can a corneal ulcer go away without medicine?",
        a: [
          { type: "para", text: "It is unsafe to wait. Infection can progress quickly." },
        ],
      },
      {
        q: "Is it painful?",
        a: [
          { type: "para", text: "Usually yes, though some ulcers cause less pain." },
        ],
      },
      {
        q: "Can an ulcer cause blindness?",
        a: [
          { type: "para", text: "Severe, untreated ulcers can cause permanent vision loss in the affected eye." },
        ],
      },
      {
        q: "Are steroid drops safe to use?",
        a: [
          { type: "para", text: "Not without an eye doctor's advice, as they can worsen some infections." },
        ],
      },
      {
        q: "Is a corneal transplant always needed after an ulcer?",
        a: [
          { type: "para", text: "No. It is needed only when scarring or damage is severe." },
        ],
      },
      {
        q: "How can I prevent an ulcer?",
        a: [
          { type: "para", text: "Practise good lens hygiene, protect your eyes from injury and treat eye problems early." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: What is a corneal ulcer (keratitis)?](https://www.aao.org/eye-health/diseases/what-is-keratitis)" },
    { type: "item", text: "[AAO: Contact lens-related eye infections](https://www.aao.org/eye-health/diseases/contact-lens-related-eye-infections)" },
  ],
  keepReading: [
    { label: "Corneal Ulcer Symptoms: When a Red Eye Is an Emergency", target: "link:7.1" },
    { label: "How Long Does a Corneal Ulcer Take to Heal?", target: "link:7.4" },
    { label: "Can Contact Lenses Cause a Corneal Ulcer?", target: "link:7.3" },
    { label: "Bacterial vs Fungal vs Viral Keratitis Explained", target: "link:7.2" },
    { label: "Corneal Ulcer & Keratitis: Symptoms & Treatment", target: "/blog/corneal-ulcer-keratitis-symptoms-treatment/" },
  ],
};
