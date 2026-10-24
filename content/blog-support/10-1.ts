import type { SupportArticleSource } from "@/content/blog-support";

// Article 10.1 - Eye Check-Up & Vision Across Life cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleSource = {
  number: "10.1",
  slug: "how-often-adults-eye-checkup",
  title: "How Often Should Adults Get an Eye Check-Up?",
  seoTitle: "How Often to Get an Eye Check-Up | Mungale Eye Hospital",
  metaDescription: "How often you need an eye test depends on age, health and risk factors. Here is a simple guide for adults, plus signs that mean you should not wait.",
  topics: ["eye-health"],
  cluster: "eye-checkup",
  pillarSlug: "eye-checkup-after-forty-tests-frequency-warning-signs",
  order: 1,
  treatmentPage: "",
  reviewedBy: ["sachin","meeta"],
  reviewConfirmed: true,
  date: "2026-10-20",
  cover: {
    src: "/images/blog/how-often-adults-eye-checkup-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: Indian adult reading an eye chart in a bright optical clinic while an eye doctor looks.",
  },
  blocks: [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Healthy adults with no eye problems are commonly advised to have a comprehensive eye examination every one to two years, and more often after 40 or if they have risk factors. People with diabetes, high blood pressure, a family history of glaucoma, or who wear glasses or contact lenses may need yearly or more frequent checks." },
      ],
    },
    { type: "para", text: "Many eye diseases develop slowly and cause no symptoms at first. Regular checks help find them early." },
    { type: "heading", text: "A General Guide" },
    { type: "item", text: "Ages 18 to 39 without problems: every one to two years, or as advised" },
    { type: "item", text: "Ages 40 to 64: every one to two years, with checks for glaucoma and presbyopia" },
    { type: "item", text: "Age 65 and above: yearly" },
    { type: "item", text: "Any age with diabetes or other risk factors: at least yearly, or as your doctor says" },
    { type: "heading", text: "Higher-Risk Groups" },
    { type: "item", text: "Diabetes or high blood pressure" },
    { type: "item", text: "Family history of glaucoma, retinal disease or early cataract" },
    { type: "item", text: "High myopia" },
    { type: "item", text: "Contact lens wearers" },
    { type: "item", text: "Long-term steroid use" },
    { type: "item", text: "Previous eye injury or surgery" },
    { type: "heading", text: "Signs You Should Not Wait" },
    { type: "item", text: "Sudden change in vision" },
    { type: "item", text: "Flashes or new floaters" },
    { type: "item", text: "Eye pain or persistent redness" },
    { type: "item", text: "Halos around lights" },
    { type: "item", text: "Double vision" },
    { type: "heading", text: "What a Check-Up Includes" },
    { type: "item", text: "Vision test and glasses power" },
    { type: "item", text: "Eye pressure measurement" },
    { type: "item", text: "Examination of the front and back of the eye" },
    { type: "item", text: "Additional tests when needed" },
    { type: "heading", text: "Tips for Healthy Eyes" },
    { type: "item", text: "Take screen breaks" },
    { type: "item", text: "Protect eyes from sun and dust" },
    { type: "item", text: "Do not use eye drops without advice" },
    { type: "item", text: "Eat a balanced diet" },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Most adults need a check every one to two years." },
    { type: "item", text: "Risk factors mean more frequent visits." },
    { type: "item", text: "Many eye diseases are silent early." },
    { type: "item", text: "Sudden changes need urgent review." },
    { type: "item", text: "Prevention protects long-term vision." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Make [eye checks](/blog/eye-checkup-after-forty-tests-frequency-warning-signs/) part of your routine health care. For a full evaluation, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/) at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "If I see well, do I still need a check?",
        a: [
          { type: "para", text: "Yes. Conditions such as glaucoma often cause no early symptoms." },
        ],
      },
      {
        q: "Does using a phone damage my eyes?",
        a: [
          { type: "para", text: "Screens can cause strain and dryness but are not known to cause permanent damage. Breaks help." },
        ],
      },
      {
        q: "When should I start annual checks?",
        a: [
          { type: "para", text: "Often from the mid-60s, or earlier with risk factors." },
        ],
      },
      {
        q: "Do children need checks too?",
        a: [
          { type: "para", text: "Yes. See the pillar guide on vision across life." },
        ],
      },
      {
        q: "Are online vision tests reliable?",
        a: [
          { type: "para", text: "They cannot replace a full examination by an eye doctor." },
        ],
      },
      {
        q: "How long does a check take?",
        a: [
          { type: "para", text: "Often 30 to 60 minutes if dilation is needed." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: Eye exams 101](https://www.aao.org/eye-health/tips-prevention/eye-exams-101)" },
    { type: "item", text: "[NEI: Get a dilated eye exam](https://www.nei.nih.gov/learn-about-eye-health/healthy-vision/get-dilated-eye-exam)" },
  ],
  keepReading: [
    { label: "What Happens During a Complete Eye Examination?", target: "link:10.2" },
    { label: "Eye Tests After 40: OCT, Eye Pressure and Retina Checks", target: "link:10.3" },
    { label: "Blurry Vision After 40: Cataract, Presbyopia or Something Else?", target: "link:10.4" },
    { label: "10 Warning Signs to See an Eye Doctor", target: "link:10.5" },
    { label: "Eye Check-Up After 40: Tests, Frequency & Warning Signs", target: "/blog/eye-checkup-after-forty-tests-frequency-warning-signs/" },
  ],
};
