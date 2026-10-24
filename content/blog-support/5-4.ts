import type { SupportArticleSource } from "@/content/blog-support";

// Article 5.4 - Dry Eye cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleSource = {
  number: "5.4",
  slug: "dry-eye-tests-tear-film-meibomian-glands",
  title: "Dry Eye Tests: Tear Film, Meibomian Glands and More",
  seoTitle: "Dry Eye Tests | Mungale Eye Hospital",
  metaDescription: "Dry eye has different types, and tests show which one you have. Learn about tear film, Schirmer, staining and meibomian gland checks, and what each result.",
  topics: ["cornea"],
  cluster: "dry-eye",
  pillarSlug: "dry-eye-disease-causes-symptoms-treatment",
  order: 4,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-10",
  cover: {
    src: "/images/blog/dry-eye-tests-tear-film-meibomian-glands-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: ophthalmologist examining a patient's eye at a slit lamp in a clean, modern eye hospital in Vadodara, with soft blue diagnostic light.",
  },
  blocks: [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Common dry eye tests include a symptom questionnaire, slit lamp examination, tear breakup time, Schirmer test, surface staining with dye and meibomian gland evaluation. Together they show whether the problem is low tear production, fast evaporation, inflammation or a mix. Most tests take only a few minutes." },
      ],
    },
    { type: "para", text: "Dry eye is diagnosed with a few simple, painless tests that check how many tears you make, how stable they are and how healthy your oil glands and eye surface look. These tests help the specialist find which type of dry eye you have, because treatment for low tear volume is different from treatment for blocked oil glands." },
    { type: "heading", text: "Why Are Tests Needed?" },
    { type: "para", text: "Many people use lubricating drops for months without relief. Often the real cause, such as oil gland blockage or lid inflammation, has not been treated. Testing points to the right treatment, saves time and prevents damage to the eye surface." },
    { type: "para", text: "Tests are also important before LASIK or cataract surgery, because dry eye can affect measurements and healing." },
    { type: "heading", text: "Which Tests Are Done?" },
    { type: "h3", text: "Symptom questionnaire" },
    { type: "para", text: "You answer simple questions about burning, grittiness, blur and how symptoms affect daily life. This helps track progress over time." },
    { type: "h3", text: "Slit lamp examination" },
    { type: "para", text: "The doctor uses a microscope with a bright light to examine the lids, lashes, tear film and cornea. Signs of blepharitis, redness or debris are noted." },
    { type: "h3", text: "Tear breakup time (TBUT)" },
    { type: "para", text: "A small amount of fluorescein dye is placed on the eye. The doctor checks how many seconds the tear film stays stable after a blink. A short time suggests an unstable tear film, often from oil gland problems." },
    { type: "h3", text: "Schirmer test" },
    { type: "para", text: "A thin strip of paper is placed at the edge of the lower lid for five minutes. The wet length shows how many tears you produce. It can feel a little odd but is not painful." },
    { type: "h3", text: "Ocular surface staining" },
    { type: "para", text: "Dyes such as fluorescein or lissamine green highlight dry or damaged spots on the cornea and conjunctiva." },
    { type: "h3", text: "Meibomian gland evaluation" },
    { type: "para", text: "The doctor gently presses the lid margin to see how oil flows from the glands. Some centres use imaging to view gland structure and loss." },
    { type: "h3", text: "Other tests when needed" },
    { type: "para", text: "Tear osmolarity, tear meniscus height or blood tests for autoimmune disease may be added in selected cases." },
    { type: "heading", text: "What Do the Results Mean?" },
    { type: "item", text: "Low Schirmer reading: reduced tear production" },
    { type: "item", text: "Short breakup time: evaporative dry eye, often linked to oil glands" },
    { type: "item", text: "Staining: surface stress needing more active treatment" },
    { type: "item", text: "Blocked glands: warm compresses, lid care and gland-focused treatment help" },
    { type: "para", text: "Most patients have a mix of findings. The treatment plan reflects all of them together." },
    { type: "heading", text: "How to Prepare" },
    { type: "item", text: "Avoid eye drops for a few hours before the test unless advised otherwise" },
    { type: "item", text: "Do not wear contact lenses on the day if possible" },
    { type: "item", text: "Bring a list of medicines you take" },
    { type: "item", text: "Note when symptoms are worst" },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Dry eye tests are quick and painless." },
    { type: "item", text: "They show the type of dry eye you have." },
    { type: "item", text: "Oil gland problems are very common." },
    { type: "item", text: "Results guide targeted treatment." },
    { type: "item", text: "Testing is important before eye surgery." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "If drops alone have not helped, the next step is understanding why. A proper [dry eye](/blog/dry-eye-disease-causes-symptoms-treatment/) work-up turns guesswork into a clear plan. For detailed tear film and meibomian gland testing, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/), an ophthalmologist at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Are dry eye tests painful?",
        a: [
          { type: "para", text: "No. Most tests involve a bright light, a drop of harmless dye or a small paper strip. The Schirmer strip may feel slightly scratchy but is not painful. Results are usually available during the same visit." },
        ],
      },
      {
        q: "How long does a dry eye evaluation take?",
        a: [
          { type: "para", text: "A complete evaluation usually takes about 20 to 40 minutes, depending on which tests are needed. Some centres add imaging of the oil glands, which takes a few extra minutes." },
        ],
      },
      {
        q: "What is meibomian gland dysfunction?",
        a: [
          { type: "para", text: "It is a condition where the oil glands along the eyelid edges become blocked or produce poor-quality oil. Tears then evaporate too quickly. It is one of the most common causes of dry eye." },
        ],
      },
      {
        q: "Should I stop eye drops before a dry eye test?",
        a: [
          { type: "para", text: "Usually it helps to avoid drops for a few hours before testing so results are accurate. Do not stop prescribed medicines like glaucoma drops without asking your doctor. The clinic will guide you." },
        ],
      },
      {
        q: "Why do I need dry eye tests before LASIK?",
        a: [
          { type: "para", text: "Dry eye can affect corneal measurements and can worsen temporarily after LASIK. Testing helps the surgeon treat dryness first and choose the safest procedure for you." },
        ],
      },
      {
        q: "How often should dry eye tests be repeated?",
        a: [
          { type: "para", text: "Doctors often repeat key tests after a few weeks or months of treatment to see improvement. Long-term patients may be reviewed once or twice a year, or sooner if symptoms change." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[NEI: Dry eye](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/dry-eye)" },
    { type: "item", text: "[NHS: Dry eyes](https://www.nhs.uk/conditions/dry-eyes/)" },
  ],
  keepReading: [
    { label: "Dry Eye Disease: Causes, Symptoms, Diagnosis & Treatment", target: "/blog/dry-eye-disease-causes-symptoms-treatment/" },
    { label: "Can Dry Eyes Cause Blurry Vision? When to Worry", target: "link:5.1" },
    { label: "Can Dry Eye Be Cured Permanently?", target: "link:5.3" },
    { label: "Punctal Plugs for Dry Eye: Who Needs Them?", target: "link:5.5" },
    { label: "Am I a Good Candidate for LASIK?", target: "link:9.2" },
  ],
};
