import type { SupportArticleSource } from "@/content/blog-support";

// Article 7.3 - Corneal Ulcer & Keratitis cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleSource = {
  number: "7.3",
  slug: "contact-lenses-corneal-ulcer-risk",
  title: "Can Contact Lenses Cause a Corneal Ulcer?",
  seoTitle: "Can Contacts Cause Corneal Ulcers? | Mungale Eye Hospital",
  metaDescription: "Contact lenses are safe when used correctly, but misuse is a leading cause of corneal ulcers. Learn the risky habits, warning signs and safe lens care rules.",
  topics: ["cornea"],
  cluster: "corneal-ulcer",
  pillarSlug: "corneal-ulcer-keratitis-symptoms-treatment",
  order: 3,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-14",
  cover: {
    src: "/images/blog/contact-lenses-corneal-ulcer-risk-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: young Indian woman carefully placing a soft contact lens into a clean lens case beside a bottle of solution at a tidy bathroom counter in Vadodara.",
  },
  blocks: [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Contact lenses can cause corneal ulcers when germs get trapped between the lens and the cornea, especially if lenses are worn overnight, overused or cleaned poorly. Remove your lenses and see an eye doctor the same day if you develop pain, redness, blurred vision or light sensitivity while wearing them." },
      ],
    },
    { type: "para", text: "Yes. Contact lenses are one of the most common causes of [corneal ulcer](/blog/corneal-ulcer-keratitis-symptoms-treatment/)s in healthy people, but the risk comes mainly from how lenses are used, not from the lenses themselves. Sleeping in lenses, poor cleaning and contact with water greatly increase the risk. With good habits, most people wear lenses safely for years." },
    { type: "heading", text: "Why Do Lenses Raise the Risk?" },
    { type: "para", text: "A contact lens sits directly on the cornea. It reduces oxygen supply and can cause tiny scratches. If bacteria, fungi or Acanthamoeba are present on the lens or in the case, they can enter through these weak spots and cause infection." },
    { type: "heading", text: "Which Habits Are Most Risky?" },
    { type: "item", text: "Sleeping or napping in lenses not approved for overnight wear" },
    { type: "item", text: "Wearing lenses longer than advised, such as reusing daily lenses" },
    { type: "item", text: "Rinsing lenses or cases with tap water" },
    { type: "item", text: "Swimming, showering or using hot tubs with lenses on" },
    { type: "item", text: "Topping up old solution instead of using fresh solution" },
    { type: "item", text: "Not replacing the lens case every 1 to 3 months" },
    { type: "item", text: "Touching lenses with unwashed hands" },
    { type: "item", text: "Buying cosmetic or coloured lenses without a prescription" },
    { type: "heading", text: "What Are the Warning Signs?" },
    { type: "item", text: "Eye pain that does not ease after removing the lens" },
    { type: "item", text: "Redness that keeps getting worse" },
    { type: "item", text: "Blurred or hazy vision" },
    { type: "item", text: "Light sensitivity" },
    { type: "item", text: "Watering or discharge" },
    { type: "item", text: "A white spot on the cornea" },
    { type: "para", text: "Do not wait. Remove the lenses, keep them and the case, and [see an eye doctor](/contact-us/#book). The lens and case can be tested to find the germ." },
    { type: "heading", text: "Safe Contact Lens Rules" },
    { type: "h3", text: "Hygiene" },
    { type: "para", text: "Wash and dry your hands before touching lenses. Keep nails short and clean." },
    { type: "h3", text: "Solution and case" },
    { type: "para", text: "Use fresh multipurpose solution every time. Rub and rinse lenses as advised. Air-dry the case upside down and replace it regularly." },
    { type: "h3", text: "Wear time" },
    { type: "para", text: "Follow the replacement schedule: daily, two-weekly or monthly. Do not sleep in lenses unless your doctor approves a specific type." },
    { type: "h3", text: "Water" },
    { type: "para", text: "Keep all water away from lenses, including tap water, swimming pools and showers." },
    { type: "h3", text: "Check-ups" },
    { type: "para", text: "Have a yearly eye exam even if your eyes feel fine. Your doctor can spot early problems." },
    { type: "heading", text: "Are Daily Disposable Lenses Safer?" },
    { type: "para", text: "Daily disposables reduce the risks from lens cases and cleaning, so many eye doctors prefer them for occasional wearers. They are safe only when used as intended, meaning one pair per day, never reused." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Contact lens misuse is a major cause of corneal ulcers." },
    { type: "item", text: "Sleeping in lenses raises the risk sharply." },
    { type: "item", text: "Keep water away from lenses and cases." },
    { type: "item", text: "Replace lenses and cases on schedule." },
    { type: "item", text: "Remove lenses and see a doctor if pain or redness appears." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Contact lenses offer freedom and comfort, but they need respect and routine. A few simple rules can prevent a painful, sight-threatening infection. For lens fitting advice or an urgent check, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/), an ophthalmologist at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Is it safe to sleep in contact lenses?",
        a: [
          { type: "para", text: "Most lenses are not designed for overnight wear. Sleeping in them reduces oxygen and greatly raises infection risk. Even with lenses approved for extended wear, ask your eye doctor before sleeping in them." },
        ],
      },
      {
        q: "Can I clean my lenses with tap water?",
        a: [
          { type: "para", text: "No. Tap water can contain Acanthamoeba and other germs that cause serious corneal infections. Always use fresh contact lens solution to clean, rinse and store lenses and the case." },
        ],
      },
      {
        q: "What should I do if my eye hurts while wearing lenses?",
        a: [
          { type: "para", text: "Remove the lenses at once. If pain, redness or blurred vision continue, see an eye doctor the same day. Bring your lenses and case, as they may help identify the cause of infection." },
        ],
      },
      {
        q: "Are coloured contact lenses safe?",
        a: [
          { type: "para", text: "They can be safe if prescribed and fitted by an eye doctor and cared for properly. Lenses bought without a prescription, from markets or online sellers, carry a higher risk of injury and infection." },
        ],
      },
      {
        q: "How often should I replace my lens case?",
        a: [
          { type: "para", text: "Replace the case at least every 1 to 3 months, or as advised. Clean it with solution, never water, and let it air-dry upside down. An old case can collect germs even if it looks clean." },
        ],
      },
      {
        q: "Can I wear lenses if I have dry eye?",
        a: [
          { type: "para", text: "Some people with mild dry eye can wear lenses with the right type and care plan. Others may find them uncomfortable. An eye exam helps decide whether lenses suit you." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: What is a corneal ulcer (keratitis)?](https://www.aao.org/eye-health/diseases/what-is-keratitis)" },
    { type: "item", text: "[AAO: Contact lens-related eye infections](https://www.aao.org/eye-health/diseases/contact-lens-related-eye-infections)" },
  ],
  keepReading: [
    { label: "Corneal Ulcer & Keratitis: Symptoms & Treatment", target: "/blog/corneal-ulcer-keratitis-symptoms-treatment/" },
    { label: "Corneal Ulcer Symptoms: When a Red Eye Is an Emergency", target: "link:7.1" },
    { label: "Bacterial vs Fungal vs Viral Keratitis Explained", target: "link:7.2" },
    { label: "Can Dry Eyes Cause Blurry Vision? When to Worry", target: "link:5.1" },
    { label: "Am I a Good Candidate for LASIK?", target: "link:9.2" },
  ],
};
