import type { SupportArticleSource } from "@/content/blog-support";

// Article 9.2 - LASIK & Refractive Surgery cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleSource = {
  number: "9.2",
  slug: "lasik-candidate-eligibility-criteria",
  title: "Am I a Good Candidate for LASIK?",
  seoTitle: "Am I a Good Candidate for LASIK? | Mungale Eye Hospital",
  metaDescription: "LASIK suits many people, but not everyone. Learn the age, power, corneal and health criteria surgeons check, what rules you out and what alternatives exist.",
  topics: ["surgery"],
  cluster: "lasik",
  pillarSlug: "lasik-eye-surgery-types-cost-benefits-candidacy",
  order: 2,
  treatmentPage: "optical-contact-lenses",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-18",
  cover: {
    src: "/images/blog/lasik-candidate-eligibility-criteria-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: young Indian man resting his chin on a corneal topography machine while a technician runs a scan in a bright Vadodara eye hospital.",
  },
  blocks: [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Good LASIK candidates usually have stable power within the treatable range, healthy corneas of adequate thickness and normal shape, no uncontrolled dry eye, and no conditions that affect healing. People with keratoconus or suspicious corneal shape, very thin corneas, unstable power or pregnancy are usually not suitable, but may have other options such as ICL." },
      ],
    },
    { type: "para", text: "You may be a good candidate for LASIK if you are at least 18 years old, your glasses power has been stable for about a year, your corneas are healthy and thick enough, and you have no active eye disease or certain health conditions. The final answer comes only after detailed eye tests, because corneal shape and thickness matter as much as your power." },
    { type: "heading", text: "What Do Surgeons Check?" },
    { type: "h3", text: "Age" },
    { type: "para", text: "Most surgeons advise LASIK from 18 years onward, once eye growth is complete. Many prefer patients in their early twenties or older." },
    { type: "h3", text: "Stable power" },
    { type: "para", text: "Your spectacle power should not have changed much for at least 12 months. Changing power suggests the eye is still developing." },
    { type: "h3", text: "Power range" },
    { type: "para", text: "LASIK treats myopia, hyperopia and astigmatism within certain limits. Very high powers may be better treated with other procedures." },
    { type: "h3", text: "Corneal thickness" },
    { type: "para", text: "The cornea must be thick enough to leave a safe amount of tissue after treatment. A pachymetry test measures this." },
    { type: "h3", text: "Corneal shape" },
    { type: "para", text: "Topography and tomography scans check for keratoconus or early irregular shapes. Doing LASIK on such corneas can weaken them further." },
    { type: "h3", text: "Dry eye" },
    { type: "para", text: "Existing dry eye should be treated first, because LASIK can make it temporarily worse." },
    { type: "h3", text: "Pupil size and night vision" },
    { type: "para", text: "Large pupils may raise the chance of glare or halos at night, which surgeons consider when planning." },
    { type: "h3", text: "General eye health" },
    { type: "para", text: "The retina, eye pressure and lens are checked to rule out other problems." },
    { type: "heading", text: "Who Is Usually Not Suitable?" },
    { type: "item", text: "People under 18 or with changing power" },
    { type: "item", text: "Those with keratoconus or suspicious corneal scans" },
    { type: "item", text: "People with very thin corneas" },
    { type: "item", text: "Pregnant or breastfeeding women, due to power changes" },
    { type: "item", text: "Those with uncontrolled diabetes or autoimmune disease" },
    { type: "item", text: "Patients with active eye infection or inflammation" },
    { type: "item", text: "People with advanced glaucoma or significant cataract" },
    { type: "heading", text: "What If You Are Not Suitable?" },
    { type: "para", text: "Not being a LASIK candidate does not mean you cannot be free of glasses. Options include:" },
    { type: "item", text: "SMILE or PRK, for some patients with thinner corneas" },
    { type: "item", text: "ICL (implantable contact lens), for high power or thin corneas" },
    { type: "item", text: "Refractive lens exchange, for some older patients" },
    { type: "heading", text: "How to Prepare for the Evaluation" },
    { type: "item", text: "Stop soft contact lenses for several days before testing, and rigid lenses for longer, as advised" },
    { type: "item", text: "Bring old glasses prescriptions" },
    { type: "item", text: "Share your medical history and medicines" },
    { type: "item", text: "Expect pupil-dilating drops, so bring sunglasses and avoid driving afterward" },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Age 18 or above with stable power is the starting point." },
    { type: "item", text: "Corneal thickness and shape are critical safety checks." },
    { type: "item", text: "Dry eye should be treated before surgery." },
    { type: "item", text: "Keratoconus and thin corneas usually rule out LASIK." },
    { type: "item", text: "Alternatives like ICL exist for many unsuitable patients." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "A careful candidacy check is the most important step in safe vision correction. An honest assessment protects your eyes for decades. For a full pre-[LASIK](/blog/lasik-eye-surgery-types-cost-benefits-candidacy/) evaluation, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/), an ophthalmologist at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "What is the minimum age for LASIK?",
        a: [
          { type: "para", text: "Most surgeons perform LASIK from age 18, once eye power has been stable for at least a year. Many prefer patients in their twenties because the eyes are more likely to have stopped changing." },
        ],
      },
      {
        q: "Can I get LASIK with high power?",
        a: [
          { type: "para", text: "It depends on your corneal thickness and shape. Moderate high power may be treatable. Very high power or thin corneas may be better suited to ICL. Your surgeon will decide after tests." },
        ],
      },
      {
        q: "Can I have LASIK if I have dry eye?",
        a: [
          { type: "para", text: "Mild dry eye can often be treated before LASIK so surgery can go ahead safely. Severe dry eye may make LASIK unsuitable. SMILE or other options may be considered in some cases." },
        ],
      },
      {
        q: "Why do I need to stop wearing contact lenses before testing?",
        a: [
          { type: "para", text: "Contact lenses can temporarily change the shape of the cornea. Stopping them for the advised period lets the cornea return to its natural shape, giving accurate measurements for planning." },
        ],
      },
      {
        q: "Can people with diabetes have LASIK?",
        a: [
          { type: "para", text: "People with well-controlled diabetes and no diabetic eye disease may be considered. Uncontrolled diabetes can affect healing and vision stability, so surgery is usually delayed until control improves." },
        ],
      },
      {
        q: "Is LASIK safe if I have keratoconus?",
        a: [
          { type: "para", text: "No. LASIK can weaken a cornea that is already thin and irregular. People with keratoconus may need cross-linking first, and may be offered other options such as ICL in selected cases." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: LASIK laser eye surgery](https://www.aao.org/eye-health/treatments/lasik)" },
    { type: "item", text: "[AAO: Facts about LASIK complications](https://www.aao.org/eye-health/treatments/facts-about-lasik-complications)" },
    { type: "item", text: "[AAO: Questions to ask when considering LASIK](https://www.aao.org/eye-health/treatments/lasik-questions-to-ask)" },
  ],
  keepReading: [
    { label: "LASIK vs Femto-LASIK vs Contoura vs SMILE", target: "link:9.1" },
    { label: "LASIK Risks, Side Effects and ICL as an Alternative", target: "link:9.5" },
    { label: "LASIK Cost in Vadodara: What Decides the Price?", target: "link:9.3" },
    { label: "Early Signs of Keratoconus and When to Get Topography", target: "link:3.1" },
    { label: "Laser-Assisted In Situ Keratomileusis (LASIK) Eye Surgery Types, Cost, Benefits and Who Qualifies", target: "/blog/lasik-eye-surgery-types-cost-benefits-candidacy/" },
  ],
};
