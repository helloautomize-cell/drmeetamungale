import type { SupportArticleSource } from "@/content/blog-support";

// Article 10.4 - Eye Check-Up & Vision Across Life cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleSource = {
  number: "10.4",
  slug: "blurry-vision-after-40-causes",
  title: "Blurry Vision After 40: Cataract, Presbyopia or Something Else?",
  seoTitle: "Blurry Vision After 40 | Mungale Eye Hospital",
  metaDescription: "Blurry vision after 40 can be presbyopia, early cataract, dry eye or something more serious. Learn how to tell the causes apart and when to see an eye doctor.",
  topics: ["eye-health"],
  cluster: "eye-checkup",
  pillarSlug: "eye-checkup-after-forty-tests-frequency-warning-signs",
  order: 4,
  treatmentPage: "",
  reviewedBy: ["sachin","meeta"],
  reviewConfirmed: true,
  date: "2026-10-21",
  cover: {
    src: "/images/blog/blurry-vision-after-40-causes-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: middle-aged Indian woman holding a book at arm's length, squinting slightly in a bright living room.",
  },
  blocks: [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "The most common cause after 40 is presbyopia, when near vision becomes harder because the lens loses flexibility. Other causes include early cataract, dry eye, a change in glasses power, diabetes, glaucoma or retinal conditions. A comprehensive eye exam is the only way to tell which one it is." },
      ],
    },
    { type: "para", text: "Many people notice blurry vision in their forties. Often it is a normal change, but sometimes it signals a condition that needs treatment." },
    { type: "heading", text: "Common Causes" },
    { type: "h3", text: "Presbyopia" },
    { type: "item", text: "Trouble reading small print" },
    { type: "item", text: "Holding things farther away" },
    { type: "item", text: "Eye strain after near work" },
    { type: "h3", text: "Early cataract" },
    { type: "item", text: "Cloudy, hazy or dull vision" },
    { type: "item", text: "Glare, especially at night" },
    { type: "item", text: "Colours looking faded" },
    { type: "h3", text: "Dry eye" },
    { type: "item", text: "Vision that blurs and clears with blinking" },
    { type: "item", text: "Burning, grittiness or watering" },
    { type: "h3", text: "Diabetes or high sugar" },
    { type: "item", text: "Fluctuating vision" },
    { type: "h3", text: "Retinal or macular problems" },
    { type: "item", text: "Distorted lines or a dark spot in the centre" },
    { type: "h3", text: "Glaucoma" },
    { type: "item", text: "Usually no blur early on, which is why pressure checks matter" },
    { type: "heading", text: "Clues to Tell Them Apart" },
    { type: "item", text: "Only near vision blurred: likely presbyopia" },
    { type: "item", text: "Hazy overall vision with glare: possible cataract" },
    { type: "item", text: "Blur that improves with blinking: possibly dry eye" },
    { type: "item", text: "Wavy or missing central vision: see a doctor soon" },
    { type: "heading", text: "When to See a Doctor Quickly" },
    { type: "item", text: "Sudden blur or vision loss" },
    { type: "item", text: "Flashes or new floaters" },
    { type: "item", text: "Eye pain or redness" },
    { type: "item", text: "Double vision" },
    { type: "heading", text: "What Helps" },
    { type: "item", text: "Updated glasses for presbyopia" },
    { type: "item", text: "Treatment for dry eye" },
    { type: "item", text: "Surgery for cataract when it affects daily life" },
    { type: "item", text: "Control of diabetes and blood pressure" },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Presbyopia is the most common cause." },
    { type: "item", text: "Cataract, dry eye and retinal disease also cause blur." },
    { type: "item", text: "Only an exam can tell the cause." },
    { type: "item", text: "Sudden changes are urgent." },
    { type: "item", text: "Most causes are treatable." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Do not assume blur is just age. For [a clear diagnosis](/blog/eye-checkup-after-forty-tests-frequency-warning-signs/), you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/) at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Is blurry near vision after 40 normal?",
        a: [
          { type: "para", text: "It is very common, but still worth checking." },
        ],
      },
      {
        q: "Can reading glasses worsen my eyes?",
        a: [
          { type: "para", text: "No. They do not damage vision." },
        ],
      },
      {
        q: "How do I know if it is a cataract?",
        a: [
          { type: "para", text: "An eye examination can confirm it." },
        ],
      },
      {
        q: "Can dry eye cause blurred vision?",
        a: [
          { type: "para", text: "Yes, an unstable tear film can blur vision." },
        ],
      },
      {
        q: "Can diabetes cause blurry vision?",
        a: [
          { type: "para", text: "Yes. Blood sugar swings and diabetic eye disease can both affect it." },
        ],
      },
      {
        q: "Will I need surgery?",
        a: [
          { type: "para", text: "Not for presbyopia. Cataract surgery is considered when it affects your daily life." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: Eye exams 101](https://www.aao.org/eye-health/tips-prevention/eye-exams-101)" },
    { type: "item", text: "[NEI: Get a dilated eye exam](https://www.nei.nih.gov/learn-about-eye-health/healthy-vision/get-dilated-eye-exam)" },
  ],
  keepReading: [
    { label: "Eye Tests After 40: OCT, Eye Pressure and Retina Checks", target: "link:10.3" },
    { label: "How Often Should Adults Get an Eye Check-Up?", target: "link:10.1" },
    { label: "Can Dry Eyes Cause Blurry Vision? When to Worry", target: "link:5.1" },
    { label: "What Happens During a Complete Eye Examination?", target: "link:10.2" },
    { label: "Eye Check-Up After 40: Tests, Frequency & Warning Signs", target: "/blog/eye-checkup-after-forty-tests-frequency-warning-signs/" },
  ],
};
