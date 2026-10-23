import type { SupportArticleSource } from "@/content/blog-support";

// Article 3.1 - Keratoconus cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleSource = {
  number: "3.1",
  slug: "early-signs-keratoconus-corneal-topography",
  title: "Early Signs of Keratoconus and When to Get Topography",
  seoTitle: "Early Signs of Keratoconus | Mungale Eye Hospital",
  metaDescription: "Keratoconus often starts with blurry vision and frequent glasses changes. Learn the early signs, who is at risk and when corneal topography is needed to detect.",
  topics: ["cornea"],
  cluster: "keratoconus",
  pillarSlug: "keratoconus-symptoms-causes-diagnosis-treatment",
  order: 1,
  treatmentPage: "cornea-evaluation",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-05",
  cover: {
    src: "/images/blog/early-signs-keratoconus-corneal-topography-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: young adult resting their chin on a corneal topography machine while an optometrist operates it.",
  },
  blocks: [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Early keratoconus signs include blurred or distorted vision, frequent changes in glasses power, rising astigmatism, glare and halos at night, light sensitivity, ghosting of images and difficulty getting clear vision even with new glasses. Corneal topography or tomography, which maps the shape and thickness of the cornea, is the key test. Get it done if you have these signs, eye allergy with frequent rubbing or a family history of keratoconus." },
      ],
    },
    { type: "para", text: "Keratoconus is a condition in which the cornea, the clear front window of the eye, gradually thins and bulges into a cone shape. This distorts vision. It usually starts in the teens or early twenties and can progress over years. Detecting it early matters because treatments such as corneal cross-linking can slow or stop progression." },
    { type: "heading", text: "What Are the Early Signs?" },
    { type: "item", text: "Blurry or distorted vision in one or both eyes" },
    { type: "item", text: "Frequent glasses prescription changes, especially increasing cylinder power (astigmatism)" },
    { type: "item", text: "Glasses that never seem to give fully clear vision" },
    { type: "item", text: "Ghosting or double images in one eye" },
    { type: "item", text: "Glare, halos and starbursts around lights at night" },
    { type: "item", text: "Increased sensitivity to light" },
    { type: "item", text: "Eye strain and headaches when reading" },
    { type: "para", text: "Early stages may look like normal short-sightedness or astigmatism, so special tests are needed." },
    { type: "heading", text: "Who Is at Higher Risk?" },
    { type: "item", text: "Teenagers and young adults" },
    { type: "item", text: "People who rub their eyes often" },
    { type: "item", text: "People with eye allergies or vernal keratoconjunctivitis" },
    { type: "item", text: "A family history of keratoconus" },
    { type: "item", text: "Certain conditions such as Down syndrome and some connective tissue disorders" },
    { type: "heading", text: "What Is Corneal Topography?" },
    { type: "para", text: "Corneal topography is a quick, painless scan that maps the curvature of the corneal surface. Tomography systems, such as Scheimpflug imaging, also map the front and back surfaces and the thickness of the cornea, called pachymetry. These scans can detect subtle changes long before they are obvious on a routine eye exam." },
    { type: "heading", text: "When Should You Get Topography?" },
    { type: "item", text: "Glasses power, especially astigmatism, keeps increasing" },
    { type: "item", text: "Vision is not fully correctable with glasses" },
    { type: "item", text: "You have frequent eye rubbing or allergy with blurred vision" },
    { type: "item", text: "A family member has keratoconus" },
    { type: "item", text: "Before LASIK or other refractive surgery" },
    { type: "item", text: "If your eye doctor suspects corneal irregularity" },
    { type: "heading", text: "Why Does Early Detection Matter?" },
    { type: "para", text: "Early detection allows monitoring for progression and timely cross-linking, which can stabilise the cornea. It also helps patients avoid LASIK, which is unsuitable for keratoconus and could worsen it." },
    { type: "heading", text: "How Can You Protect Your Eyes?" },
    { type: "para", text: "Avoid rubbing your eyes, treat allergies, use lubricating drops if your eyes feel itchy or dry, and attend regular follow-up scans if keratoconus is suspected." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Keratoconus often begins in teens and young adults." },
    { type: "item", text: "Rising astigmatism and blurry vision are early clues." },
    { type: "item", text: "Topography or tomography detects early changes." },
    { type: "item", text: "Eye rubbing and allergy raise risk." },
    { type: "item", text: "Early detection allows treatment to slow progression." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "If your glasses keep changing or vision is never quite clear, ask about a corneal scan. Detecting [keratoconus](/blog/keratoconus-symptoms-causes-diagnosis-treatment/) early protects long-term vision. [Dr. Meeta Mungale](/doctors/meeta-mungale/) and the team at [Mungale Eye Hospital](/contact-us/) in Vadodara offer advanced corneal diagnostics and keratoconus care." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "What are the first signs of keratoconus?",
        a: [
          { type: "para", text: "Early signs include blurred or distorted vision, frequent changes in glasses power with increasing astigmatism, glare and halos at night, light sensitivity and ghost images. Corneal topography confirms the diagnosis." },
        ],
      },
      {
        q: "At what age does keratoconus start?",
        a: [
          { type: "para", text: "Keratoconus usually starts in the teenage years or early twenties and may progress into the thirties. It can be detected earlier in children with risk factors." },
        ],
      },
      {
        q: "What is the test for keratoconus?",
        a: [
          { type: "para", text: "Corneal topography or tomography is the main test. It maps the shape and thickness of the cornea and can detect early changes that are not visible on a routine exam." },
        ],
      },
      {
        q: "Does eye rubbing cause keratoconus?",
        a: [
          { type: "para", text: "Frequent, forceful eye rubbing is strongly associated with keratoconus and may contribute to its development and progression, especially in people with allergies. Avoid rubbing your eyes." },
        ],
      },
      {
        q: "Can keratoconus be detected before symptoms?",
        a: [
          { type: "para", text: "Yes. Topography can find subtle changes before symptoms appear, which is why it is used for people with risk factors and before refractive surgery." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: What is keratoconus?](https://www.aao.org/eye-health/diseases/what-is-keratoconus)" },
    { type: "item", text: "[AAO: Corneal cross-linking](https://www.aao.org/eye-health/treatments/corneal-cross-linking-2)" },
  ],
  keepReading: [
    { label: "Keratoconus: Symptoms, Causes, Diagnosis & Treatment", target: "/blog/keratoconus-symptoms-causes-diagnosis-treatment/" },
    { label: "C3R or CXL for Keratoconus: Who Needs Cross-Linking?", target: "link:3.2" },
    { label: "Scleral Lenses for Keratoconus: Who Can Benefit?", target: "link:3.3" },
    { label: "Can Keratoconus Be Cured or Only Controlled?", target: "link:3.4" },
    { label: "Keratoconus care at Mungale Eye Hospital", target: "/treatments/cornea-evaluation/" },
  ],
};
