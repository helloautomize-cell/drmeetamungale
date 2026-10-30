import type { BlogBlock } from "@/content/blog-bodies";

// Article 7.4 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Small, early bacterial ulcers may begin improving within days of the right treatment and heal over a couple of weeks. Larger, deeper or fungal ulcers can take several weeks or longer, and may leave a scar. Your eye doctor will track progress at frequent visits." },
      ],
    },
    { type: "para", text: "A corneal ulcer is an open sore on the clear front surface of the eye. Healing time varies, and close follow-up matters more than any fixed number of days." },
    { type: "heading", text: "What Influences Healing Time" },
    { type: "item", text: "Cause: bacteria, fungus, virus or injury" },
    { type: "item", text: "Size and depth of the ulcer" },
    { type: "item", text: "How early treatment begins" },
    { type: "item", text: "Whether eye drops are used exactly as prescribed" },
    { type: "item", text: "Contact lens use and eye hygiene" },
    { type: "item", text: "Conditions like diabetes or dry eye" },
    { type: "heading", text: "What Treatment Involves" },
    { type: "item", text: "Frequent antimicrobial eye drops, often every hour at first" },
    { type: "item", text: "Pain relief and drops that ease inflammation, as advised" },
    { type: "item", text: "Regular checks, sometimes daily at the start" },
    { type: "item", text: "Admission or procedures in severe cases" },
    { type: "heading", text: "Signs It Is Getting Better" },
    { type: "item", text: "Less pain and redness" },
    { type: "item", text: "Reducing discharge" },
    { type: "item", text: "Smaller ulcer on examination" },
    { type: "item", text: "Gradual clearing of vision" },
    { type: "heading", text: "Warning Signs" },
    { type: "item", text: "Pain, redness or discharge that worsens" },
    { type: "item", text: "Sudden drop in vision" },
    { type: "item", text: "White spot on the cornea getting bigger" },
    { type: "item", text: "Light sensitivity increasing" },
    { type: "para", text: "Contact your doctor urgently if any of these happen." },
    { type: "heading", text: "Scarring and Vision" },
    { type: "para", text: "A scar may remain after healing. It can blur vision if it lies over the pupil. Options for this are discussed once the eye has settled." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Healing time depends on cause and size." },
    { type: "item", text: "Early treatment improves outcomes." },
    { type: "item", text: "Use drops exactly as told." },
    { type: "item", text: "Attend every follow-up." },
    { type: "item", text: "Worsening symptoms need urgent review." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Patience and strict follow-up protect your vision. For care of a [corneal ulcer](/blog/corneal-ulcer-keratitis-symptoms-treatment/), you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/) at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Can a corneal ulcer heal on its own?",
        a: [
          { type: "para", text: "Not safely. Infection can progress quickly, so medical treatment is needed." },
        ],
      },
      {
        q: "Can I wear contact lenses during healing?",
        a: [
          { type: "para", text: "No. Avoid lenses until your doctor clears you." },
        ],
      },
      {
        q: "Why are drops needed so often?",
        a: [
          { type: "para", text: "Frequent dosing keeps the medicine at effective levels in the early phase." },
        ],
      },
      {
        q: "Will I lose vision?",
        a: [
          { type: "para", text: "Many people recover well, but deep ulcers can scar. Early treatment lowers the risk." },
        ],
      },
      {
        q: "When can I return to normal activities?",
        a: [
          { type: "para", text: "Your doctor will advise based on healing. Avoid rubbing, swimming and dusty places until cleared." },
        ],
      },
      {
        q: "Can it come back?",
        a: [
          { type: "para", text: "It can, especially if the cause is not addressed. Good lens hygiene and eye care help." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: What is a corneal ulcer (keratitis)?](https://www.aao.org/eye-health/diseases/what-is-keratitis)" },
    { type: "item", text: "[AAO: Contact lens-related eye infections](https://www.aao.org/eye-health/diseases/contact-lens-related-eye-infections)" },
  ];
