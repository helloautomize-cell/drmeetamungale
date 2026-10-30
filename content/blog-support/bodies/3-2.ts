import type { BlogBlock } from "@/content/blog-bodies";

// Article 3.2 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "CXL uses riboflavin (vitamin B2) eye drops activated by ultraviolet A light to stiffen the cornea. It is recommended for patients with progressive keratoconus, especially young people, and for some patients with corneal ectasia after refractive surgery. It aims to stabilise the cornea and prevent worsening. Glasses, contact lenses or other treatments are still usually needed for vision." },
      ],
    },
    { type: "para", text: "Corneal cross-linking, known as CXL or C3R (corneal collagen cross-linking with riboflavin), is a treatment for keratoconus. It strengthens the cornea by creating new bonds between collagen fibres. The main goal is to stop or slow the progression of keratoconus, not to restore perfect vision." },
    { type: "heading", text: "How Does Cross-Linking Work?" },
    { type: "para", text: "The cornea is made of collagen fibres. In keratoconus, these fibres are weak, allowing the cornea to thin and bulge. Riboflavin drops soak into the cornea and, when exposed to controlled ultraviolet A light, create additional bonds between collagen fibres, making the cornea stiffer and more resistant to further bulging." },
    { type: "heading", text: "Who Is a Good Candidate?" },
    { type: "item", text: "Patients with documented progression of keratoconus on serial topography or tomography" },
    { type: "item", text: "Young patients, especially teenagers, because keratoconus tends to progress faster at younger ages" },
    { type: "item", text: "Patients whose corneal thickness is adequate for safe treatment" },
    { type: "item", text: "Some patients with post-LASIK ectasia" },
    { type: "para", text: "Patients with very thin corneas, severe scarring, active infection or certain other eye conditions may not be suitable or may need modified techniques." },
    { type: "heading", text: "What Are the Types of CXL?" },
    { type: "h3", text: "Epithelium-off (standard)" },
    { type: "para", text: "The thin surface layer, the epithelium, is gently removed so riboflavin penetrates well. This is the most established method." },
    { type: "h3", text: "Epithelium-on (transepithelial)" },
    { type: "para", text: "The surface layer is left intact. Recovery is faster, but effectiveness may vary by technique." },
    { type: "h3", text: "Accelerated protocols" },
    { type: "para", text: "Higher-intensity light reduces treatment time. Your doctor chooses the method." },
    { type: "heading", text: "What Happens During the Procedure?" },
    { type: "para", text: "Numbing drops are applied. In epi-off CXL, the epithelium is removed. Riboflavin drops are applied for a period, then the eye is exposed to UVA light while drops continue. A bandage contact lens is placed at the end. The procedure usually takes about an hour." },
    { type: "heading", text: "What Is Recovery Like?" },
    { type: "para", text: "Discomfort, light sensitivity and watering are common for a few days after epi-off CXL. Vision may be blurry for weeks and gradually improve. Antibiotic and anti-inflammatory drops are used. Follow-up scans check stability. Final effect is assessed over months." },
    { type: "heading", text: "What Can CXL Not Do?" },
    { type: "para", text: "CXL does not cure keratoconus or reverse existing cone shape significantly. Some patients have mild flattening and small vision improvement, but most still need glasses, contact lenses or scleral lenses. In advanced cases, other procedures may be needed." },
    { type: "heading", text: "What Are the Risks?" },
    { type: "para", text: "Risks include infection, delayed healing, corneal haze, scarring and, rarely, failure to halt progression. Careful patient selection and follow-up reduce risks." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "CXL strengthens the cornea using riboflavin and UVA light." },
    { type: "item", text: "It is for progressive keratoconus, especially in young people." },
    { type: "item", text: "The goal is to stop or slow progression." },
    { type: "item", text: "Glasses or lenses are still usually needed." },
    { type: "item", text: "Recovery takes days for comfort and weeks for vision." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Cross-linking is one of the most important advances in [keratoconus](/blog/keratoconus-symptoms-causes-diagnosis-treatment/) care because it can preserve vision long term when done early. [Dr. Meeta Mungale](/doctors/meeta-mungale/) and the team at [Mungale Eye Hospital](/contact-us/) in Vadodara offer keratoconus assessment and cross-linking." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "What is C3R for keratoconus?",
        a: [
          { type: "para", text: "C3R or CXL is corneal collagen cross-linking with riboflavin. It uses riboflavin drops and ultraviolet light to strengthen the cornea and slow or stop keratoconus progression." },
        ],
      },
      {
        q: "Does cross-linking improve vision?",
        a: [
          { type: "para", text: "The main goal is to stabilise the cornea, not to improve vision. Some patients notice mild improvement, but most still need glasses, contact lenses or other treatment for clear vision." },
        ],
      },
      {
        q: "Who should get corneal cross-linking?",
        a: [
          { type: "para", text: "People with documented progressive keratoconus, especially teenagers and young adults with adequate corneal thickness, are typical candidates. Your eye doctor decides after serial scans." },
        ],
      },
      {
        q: "Is cross-linking painful?",
        a: [
          { type: "para", text: "The procedure is done with numbing drops. Afterward, discomfort, watering and light sensitivity are common for a few days after epithelium-off treatment, managed with drops and pain relief." },
        ],
      },
      {
        q: "Can keratoconus progress after cross-linking?",
        a: [
          { type: "para", text: "Cross-linking successfully stabilises keratoconus in most patients, but progression can occasionally continue. Regular follow-up scans monitor the cornea." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: What is keratoconus?](https://www.aao.org/eye-health/diseases/what-is-keratoconus)" },
    { type: "item", text: "[AAO: Corneal cross-linking](https://www.aao.org/eye-health/treatments/corneal-cross-linking-2)" },
  ];
