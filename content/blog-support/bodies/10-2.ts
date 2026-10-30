import type { BlogBlock } from "@/content/blog-bodies";

// Article 10.2 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "A complete eye exam usually includes a history, vision testing, eye pressure measurement, a check of eye movements, a slit-lamp examination of the front of the eye and, in most cases, dilation to examine the retina and optic nerve. Extra tests such as OCT or visual fields are added only when needed." },
      ],
    },
    { type: "para", text: "A complete eye examination checks both how well you see and how healthy your eyes are. Knowing the steps can make the visit easier." },
    { type: "heading", text: "Step by Step" },
    { type: "h3", text: "History" },
    { type: "para", text: "Your doctor asks about symptoms, medicines, general health and family eye history." },
    { type: "h3", text: "Vision test" },
    { type: "para", text: "You read letters from a chart, one eye at a time." },
    { type: "h3", text: "Refraction" },
    { type: "para", text: "Lenses are used to find your glasses power." },
    { type: "h3", text: "Eye movements and alignment" },
    { type: "para", text: "Checks for squint or muscle problems." },
    { type: "h3", text: "Eye pressure" },
    { type: "para", text: "A quick puff of air or a gentle probe measures pressure, important for glaucoma." },
    { type: "h3", text: "Slit-lamp examination" },
    { type: "para", text: "A microscope with a bright light examines the eyelids, cornea, lens and more." },
    { type: "h3", text: "Dilated examination" },
    { type: "para", text: "Drops widen the pupil so the retina and optic nerve can be seen." },
    { type: "heading", text: "Extra Tests When Needed" },
    { type: "item", text: "OCT scan of the retina or optic nerve" },
    { type: "item", text: "Visual field test" },
    { type: "item", text: "Corneal topography" },
    { type: "item", text: "Retinal photographs" },
    { type: "heading", text: "What to Bring" },
    { type: "item", text: "Current glasses and lenses" },
    { type: "item", text: "List of medicines" },
    { type: "item", text: "Previous eye reports" },
    { type: "item", text: "Sunglasses for after dilation" },
    { type: "heading", text: "After the Exam" },
    { type: "para", text: "Dilation can blur near vision and cause light sensitivity for a few hours. Avoid driving until it settles." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "A full exam checks vision and eye health." },
    { type: "item", text: "Dilation allows the retina to be examined." },
    { type: "item", text: "Extra tests are used when needed." },
    { type: "item", text: "Bring your records." },
    { type: "item", text: "Plan for blurry vision afterwards." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "A thorough exam gives a clear picture of your eye health. For a complete [eye examination](/blog/eye-checkup-after-forty-tests-frequency-warning-signs/), you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/) at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Is the eye exam painful?",
        a: [
          { type: "para", text: "No. Tests are usually painless, though bright lights can be uncomfortable." },
        ],
      },
      {
        q: "Is dilation necessary?",
        a: [
          { type: "para", text: "It is recommended for a complete check of the retina, particularly in adults with risk factors." },
        ],
      },
      {
        q: "Can I drive after dilation?",
        a: [
          { type: "para", text: "It is safer to avoid driving until your vision settles." },
        ],
      },
      {
        q: "Do I need to stop wearing contact lenses before the test?",
        a: [
          { type: "para", text: "Your clinic may ask you to remove them. Ask when you book." },
        ],
      },
      {
        q: "How long does it take?",
        a: [
          { type: "para", text: "Usually 30 to 60 minutes." },
        ],
      },
      {
        q: "Will I get a glasses prescription?",
        a: [
          { type: "para", text: "Yes, if you need one." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: Eye exams 101](https://www.aao.org/eye-health/tips-prevention/eye-exams-101)" },
    { type: "item", text: "[NEI: Get a dilated eye exam](https://www.nei.nih.gov/learn-about-eye-health/healthy-vision/get-dilated-eye-exam)" },
  ];
