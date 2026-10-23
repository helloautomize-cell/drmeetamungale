import type { SupportArticleSource } from "@/content/blog-support";

// Article 6.2 - Pterygium cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleSource = {
  number: "6.2",
  slug: "pterygium-surgery-or-eye-drops",
  title: "Pterygium: Surgery or Eye Drops?",
  seoTitle: "Pterygium: Surgery or Eye Drops? | Mungale Eye Hospital",
  metaDescription: "Eye drops can calm pterygium redness, but only surgery removes the growth. Learn when drops are enough, when surgery is advised and how modern surgery lowers.",
  topics: ["cornea"],
  cluster: "pterygium",
  pillarSlug: "pterygium-causes-symptoms-stages-treatment-surgery",
  order: 2,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-12",
  cover: {
    src: "/images/blog/pterygium-surgery-or-eye-drops-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: ophthalmologist in Vadodara holding a small eye drop bottle while explaining options to a middle-aged Indian patient in a bright consultation room.",
  },
  blocks: [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Use drops for symptom control when the pterygium is small and stable. Consider surgery when it grows toward the centre of the cornea, causes astigmatism or blurred vision, is constantly irritated despite drops, limits eye movement or is a cosmetic concern. Modern surgery with a tissue graft lowers the chance of it coming back." },
      ],
    },
    { type: "para", text: "Eye drops can relieve the redness, dryness and irritation of a pterygium, but they cannot remove it or stop it from growing. Surgery is the only way to remove the growth. Many small, stable pterygia need only drops and monitoring, while those that affect vision, grow steadily or cause constant discomfort are usually advised surgery." },
    { type: "heading", text: "What Can Eye Drops Do?" },
    { type: "h3", text: "Lubricating drops" },
    { type: "para", text: "Artificial tears soothe dryness and the gritty feeling, especially in hot, dusty weather." },
    { type: "h3", text: "Short-term anti-inflammatory drops" },
    { type: "para", text: "A doctor may prescribe mild steroid or other anti-inflammatory drops for a short period when the pterygium becomes very red and swollen. These must be used only under supervision." },
    { type: "h3", text: "What drops cannot do" },
    { type: "item", text: "They cannot shrink or dissolve the tissue" },
    { type: "item", text: "They cannot stop long-term growth" },
    { type: "item", text: "They cannot correct astigmatism caused by the growth" },
    { type: "heading", text: "When Is Surgery Advised?" },
    { type: "para", text: "Surgery is usually considered when:" },
    { type: "item", text: "The pterygium is growing toward the pupil" },
    { type: "item", text: "It causes blurred vision or rising astigmatism" },
    { type: "item", text: "It stays red and irritated despite drops" },
    { type: "item", text: "It interferes with contact lens wear" },
    { type: "item", text: "It limits eye movement or causes double vision in rare cases" },
    { type: "item", text: "It is a strong cosmetic concern for the patient" },
    { type: "item", text: "It needs removal before cataract or refractive surgery" },
    { type: "heading", text: "What Does Modern Surgery Involve?" },
    { type: "para", text: "The surgery is usually done under local anaesthesia and takes about 30 to 45 minutes. The surgeon removes the growth and covers the bare area with a thin graft of healthy conjunctiva, usually taken from under the upper eyelid of the same eye. The graft is held in place with tissue glue or fine stitches." },
    { type: "para", text: "Using a graft lowers recurrence compared with simple removal alone. In some cases, extra treatment such as mitomycin C or an amniotic membrane graft may be used." },
    { type: "heading", text: "Is Waiting Safe?" },
    { type: "para", text: "For small pterygia that are not changing, waiting with regular checks is often safe. Your doctor may measure the size and corneal shape at each visit. The key is not to wait so long that the growth affects the central vision." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Drops relieve symptoms but do not remove pterygium." },
    { type: "item", text: "Small, stable growths can be monitored." },
    { type: "item", text: "Surgery is the only way to remove the growth." },
    { type: "item", text: "Conjunctival grafting reduces recurrence." },
    { type: "item", text: "UV protection helps before and after surgery." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Choosing between drops and surgery depends on size, growth and how much the [pterygium](/blog/pterygium-causes-symptoms-stages-treatment-surgery/) affects your life and vision. A careful eye exam makes the decision clear. For personalised advice, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/), an ophthalmologist at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Can eye drops shrink a pterygium?",
        a: [
          { type: "para", text: "No. Eye drops can reduce redness, swelling and dryness, which may make the growth look less obvious for a while, but they do not shrink or remove the tissue. Only surgery can remove a pterygium." },
        ],
      },
      {
        q: "Is pterygium surgery painful?",
        a: [
          { type: "para", text: "The surgery is done under local anaesthesia, so you should not feel pain during it. Some discomfort, watering and a gritty feeling are common for a few days afterward. Prescribed drops and pain relief help." },
        ],
      },
      {
        q: "When is the best time to remove a pterygium?",
        a: [
          { type: "para", text: "The best time is before it reaches the central cornea or causes significant astigmatism. Your doctor may advise surgery when it is growing steadily. Removing it at the right stage protects vision and gives better results." },
        ],
      },
      {
        q: "Can I use steroid drops for pterygium long-term?",
        a: [
          { type: "para", text: "No. Steroid drops are for short-term control of flare-ups only. Long-term use can raise eye pressure and cause cataract. Always use them under an eye doctor's guidance." },
        ],
      },
      {
        q: "Does pterygium surgery leave a scar?",
        a: [
          { type: "para", text: "Modern grafting techniques usually leave the eye looking natural after healing. Some redness may remain for a few weeks. Over time, most patients find the eye looks much better than before." },
        ],
      },
      {
        q: "Can pterygium come back after surgery?",
        a: [
          { type: "para", text: "Yes, it can recur, especially without a graft. Grafting and UV protection after surgery lower this risk. Regular follow-up visits help detect any early regrowth." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[Better Health Channel: Pterygium](https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/pterygium)" },
    { type: "item", text: "[College of Optometrists: Pterygium](https://www.college-optometrists.org/clinical-guidance/clinical-management-guidelines/pterygium)" },
  ],
  keepReading: [
    { label: "Pterygium: Causes, Symptoms, Stages, Treatment & Surgery", target: "/blog/pterygium-causes-symptoms-stages-treatment-surgery/" },
    { label: "What Causes Pterygium? Sun, Dust and Wind Explained", target: "link:6.1" },
    { label: "Can Pterygium Come Back After Surgery?", target: "link:6.4" },
    { label: "Pterygium vs Pinguecula: What Is the Difference?", target: "link:6.5" },
    { label: "Pterygium care at Mungale Eye Hospital", target: "/treatments/corneal-treatments/" },
  ],
};
