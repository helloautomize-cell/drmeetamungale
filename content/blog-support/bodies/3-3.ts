import type { BlogBlock } from "@/content/blog-bodies";

// Article 3.3 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Scleral lenses create a smooth new optical surface over an irregular keratoconic cornea, correcting distortion that glasses cannot. They suit people with moderate to advanced keratoconus, those who cannot tolerate smaller rigid lenses, and some patients after corneal transplant or with severe dry eye. They need professional fitting and daily cleaning and handling." },
      ],
    },
    { type: "para", text: "Scleral lenses are large-diameter rigid gas-permeable contact lenses that rest on the white part of the eye, the sclera, and vault over the cornea without touching it. The space between the lens and the cornea is filled with saline. For people with keratoconus, scleral lenses can provide much clearer and more comfortable vision than glasses or standard contact lenses." },
    { type: "heading", text: "Why Do Glasses Not Work Well in Keratoconus?" },
    { type: "para", text: "Glasses correct regular astigmatism but cannot fix the irregular shape of a keratoconic cornea. As keratoconus progresses, glasses give less clear vision. Rigid lenses help by creating a regular surface over the cornea." },
    { type: "heading", text: "How Are Scleral Lenses Different From Other Lenses?" },
    { type: "h3", text: "Soft lenses" },
    { type: "para", text: "Soft lenses mould to the cornea and do not correct irregularity well." },
    { type: "h3", text: "Corneal rigid gas-permeable (RGP) lenses" },
    { type: "para", text: "These sit on the cornea and can provide good vision but may be uncomfortable or unstable on steep cones." },
    { type: "h3", text: "Scleral lenses" },
    { type: "para", text: "These are larger, rest on the sclera, avoid pressure on the cone and keep the cornea bathed in saline, which often improves comfort and stability." },
    { type: "heading", text: "Who Can Benefit?" },
    { type: "item", text: "Moderate to advanced keratoconus" },
    { type: "item", text: "People who find corneal RGP lenses uncomfortable or unstable" },
    { type: "item", text: "Patients after corneal cross-linking needing visual correction" },
    { type: "item", text: "Some patients after corneal transplant with irregular astigmatism" },
    { type: "item", text: "People with severe dry eye or ocular surface disease" },
    { type: "para", text: "Scleral lenses can help some patients delay or avoid corneal transplant when vision becomes poor with other corrections." },
    { type: "heading", text: "What Is the Fitting Process?" },
    { type: "para", text: "Fitting is done by a trained specialist using corneal scans and trial lenses. Several visits may be needed to achieve the right vault, landing on the sclera and vision. Custom lenses are then ordered." },
    { type: "heading", text: "How Do You Insert and Remove Them?" },
    { type: "para", text: "Lenses are filled with preservative-free saline and inserted with the head facing down, often using a small plunger. Removal uses a small suction tool or fingers. Training is provided, and most people learn within a few sessions." },
    { type: "heading", text: "How Do You Care for Scleral Lenses?" },
    { type: "item", text: "Wash hands before handling" },
    { type: "item", text: "Clean and disinfect lenses daily using recommended solutions" },
    { type: "item", text: "Use fresh preservative-free saline for filling each time" },
    { type: "item", text: "Store lenses in a clean case and replace cases regularly" },
    { type: "item", text: "Never use tap water" },
    { type: "item", text: "Remove lenses as advised, usually not worn overnight" },
    { type: "heading", text: "What Are Possible Problems?" },
    { type: "para", text: "Fogging of vision, discomfort, redness or difficulty inserting lenses can happen. Contact your eye care team for persistent redness, pain, light sensitivity or reduced vision, as these may signal infection or poor fit." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Scleral lenses vault over the cornea and rest on the sclera." },
    { type: "item", text: "They give clearer vision in moderate to advanced keratoconus." },
    { type: "item", text: "They are often more comfortable than smaller rigid lenses." },
    { type: "item", text: "Professional fitting and daily care are essential." },
    { type: "item", text: "They may help delay corneal transplant." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Scleral lenses can transform vision and comfort for many people with [keratoconus](/blog/keratoconus-symptoms-causes-diagnosis-treatment/). Expert fitting and good care make them safe and effective. [Dr. Meeta Mungale](/doctors/meeta-mungale/) and the team at [Mungale Eye Hospital](/contact-us/) in Vadodara provide keratoconus care, including specialty contact lens fitting." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "What are scleral lenses?",
        a: [
          { type: "para", text: "Scleral lenses are large rigid contact lenses that rest on the white part of the eye and vault over the cornea. A saline-filled space under the lens creates a smooth optical surface for clearer vision." },
        ],
      },
      {
        q: "Are scleral lenses good for keratoconus?",
        a: [
          { type: "para", text: "Yes. They are especially helpful for moderate to advanced keratoconus and for people who cannot tolerate smaller rigid lenses. Many patients achieve much clearer vision." },
        ],
      },
      {
        q: "Are scleral lenses comfortable?",
        a: [
          { type: "para", text: "Many people find them more comfortable than corneal rigid lenses because they do not touch the cone and keep the eye moist. Comfort improves with proper fitting and practice." },
        ],
      },
      {
        q: "How long can I wear scleral lenses each day?",
        a: [
          { type: "para", text: "Many people wear them for most of the day, but wear time depends on the fit and your eyes. They are not usually worn overnight. Follow your specialist's advice." },
        ],
      },
      {
        q: "Can scleral lenses avoid corneal transplant?",
        a: [
          { type: "para", text: "They can help many people achieve good vision without surgery and may delay or avoid transplant in some cases. Severe scarring may still need surgery." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: What is keratoconus?](https://www.aao.org/eye-health/diseases/what-is-keratoconus)" },
    { type: "item", text: "[AAO: Corneal cross-linking](https://www.aao.org/eye-health/treatments/corneal-cross-linking-2)" },
    { type: "item", text: "[AAO: Contact lenses for vision correction](https://www.aao.org/eye-health/glasses-contacts/contact-lens-102)" },
  ];
