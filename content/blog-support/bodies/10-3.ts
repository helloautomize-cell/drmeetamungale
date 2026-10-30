import type { BlogBlock } from "@/content/blog-bodies";

// Article 10.3 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "After 40, a comprehensive exam should include vision and glasses testing for presbyopia, eye pressure measurement for glaucoma, and a dilated retina and optic nerve examination. An OCT scan, visual field test or retinal photographs may be added if your doctor sees a reason. How often you need them depends on your risk." },
      ],
    },
    { type: "para", text: "[After 40](/blog/eye-checkup-after-forty-tests-frequency-warning-signs/), the risk of several eye conditions rises. Some are silent, so the right tests matter even when vision seems fine." },
    { type: "heading", text: "Why Tests Change After 40" },
    { type: "item", text: "Reading vision starts to decline (presbyopia)" },
    { type: "item", text: "Glaucoma risk rises with age" },
    { type: "item", text: "Cataract can begin to form" },
    { type: "item", text: "Diabetes and high blood pressure affect the retina" },
    { type: "item", text: "Macular changes become more common later in life" },
    { type: "heading", text: "Key Tests" },
    { type: "h3", text: "Eye pressure check" },
    { type: "para", text: "High pressure is a risk factor for glaucoma, which can damage the optic nerve without symptoms." },
    { type: "h3", text: "Dilated retina examination" },
    { type: "para", text: "Lets the doctor check the retina, macula and optic nerve for disease." },
    { type: "h3", text: "OCT scan" },
    { type: "para", text: "A painless scan that makes detailed cross-sections of the retina and optic nerve." },
    { type: "h3", text: "Visual field test" },
    { type: "para", text: "Detects loss of side vision, often an early sign of glaucoma." },
    { type: "h3", text: "Refraction" },
    { type: "para", text: "Finds the right reading and distance glasses." },
    { type: "heading", text: "How Often?" },
    { type: "para", text: "Every one to two years is a common guide, and yearly with diabetes, glaucoma family history or other risks. Your doctor will advise." },
    { type: "heading", text: "Symptoms to Report" },
    { type: "item", text: "Difficulty reading at close range" },
    { type: "item", text: "Glare, halos or poor night vision" },
    { type: "item", text: "Flashes or new floaters" },
    { type: "item", text: "Patchy vision" },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Risks rise after 40." },
    { type: "item", text: "Eye pressure and retina checks are key." },
    { type: "item", text: "OCT adds detail when needed." },
    { type: "item", text: "Many conditions are silent early." },
    { type: "item", text: "Regular visits protect vision." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "A few simple tests can protect your eyesight for the years ahead. For a thorough evaluation, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/) at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Is OCT safe?",
        a: [
          { type: "para", text: "Yes. It uses light, not radiation, and is painless." },
        ],
      },
      {
        q: "Can glaucoma be detected by glasses tests?",
        a: [
          { type: "para", text: "No. It needs eye pressure and optic nerve checks." },
        ],
      },
      {
        q: "Do I need dilation every time?",
        a: [
          { type: "para", text: "Not always. Your doctor decides based on your risk." },
        ],
      },
      {
        q: "What if my pressure is normal?",
        a: [
          { type: "para", text: "Glaucoma can still occur with normal pressure, so the nerve is also examined." },
        ],
      },
      {
        q: "Can tests detect macular degeneration early?",
        a: [
          { type: "para", text: "OCT and retina examination can pick up early changes." },
        ],
      },
      {
        q: "Should I get tested if I have no symptoms?",
        a: [
          { type: "para", text: "Yes. Many problems begin silently." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: Eye exams 101](https://www.aao.org/eye-health/tips-prevention/eye-exams-101)" },
    { type: "item", text: "[NEI: Get a dilated eye exam](https://www.nei.nih.gov/learn-about-eye-health/healthy-vision/get-dilated-eye-exam)" },
  ];
