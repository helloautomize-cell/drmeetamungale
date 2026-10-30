import type { BlogBlock } from "@/content/blog-bodies";

// Article 3.4 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Keratoconus cannot usually be cured in the sense of fully reversing the cone. Corneal cross-linking can stop or slow progression. Vision can be improved with glasses in early stages, rigid or scleral contact lenses in moderate stages, and procedures such as intracorneal ring segments, topography-guided treatments or corneal transplant in selected or advanced cases. Early diagnosis gives the best outcome." },
      ],
    },
    { type: "para", text: "Keratoconus is a progressive thinning and bulging of the cornea that distorts vision. Many patients ask whether it can be cured. The honest answer is that there is no simple cure that returns the cornea to a completely normal shape, but keratoconus can be controlled very effectively, and most people keep useful vision." },
    { type: "heading", text: "What Does Control Mean?" },
    { type: "para", text: "Control has two parts:" },
    { type: "item", text: "Stopping progression so the cornea does not become thinner and steeper" },
    { type: "item", text: "Providing the best possible vision with the right correction" },
    { type: "heading", text: "How Is Progression Stopped?" },
    { type: "para", text: "Corneal cross-linking (CXL or C3R) strengthens the collagen in the cornea using riboflavin and ultraviolet light. It is effective at halting progression in most patients, especially when done early. Avoiding eye rubbing and treating allergies also help." },
    { type: "heading", text: "How Is Vision Improved?" },
    { type: "h3", text: "Glasses" },
    { type: "para", text: "Useful in early keratoconus when astigmatism is mild." },
    { type: "h3", text: "Contact lenses" },
    { type: "para", text: "Rigid gas-permeable lenses, hybrid lenses and scleral lenses create a smooth optical surface and often give much clearer vision." },
    { type: "h3", text: "Intracorneal ring segments" },
    { type: "para", text: "Small implants placed in the cornea can flatten the cone and improve lens tolerance in selected patients." },
    { type: "h3", text: "Topography-guided laser with cross-linking" },
    { type: "para", text: "In some centres and selected patients, a limited laser treatment is combined with cross-linking to smooth the surface." },
    { type: "h3", text: "Phakic intraocular lenses" },
    { type: "para", text: "Some stable patients may benefit from lenses implanted inside the eye to correct refractive error." },
    { type: "h3", text: "Corneal transplant" },
    { type: "para", text: "For advanced keratoconus with scarring or very thin corneas, a transplant such as DALK or penetrating keratoplasty may be needed." },
    { type: "heading", text: "Why Is LASIK Not Suitable?" },
    { type: "para", text: "LASIK removes corneal tissue and can weaken the cornea further, so it is not recommended for keratoconus. Patients considering refractive surgery should have corneal topography first." },
    { type: "heading", text: "What Is the Long-Term Outlook?" },
    { type: "para", text: "With early diagnosis and cross-linking, many patients avoid significant progression and transplant. Regular follow-up is needed, especially in younger patients. Keratoconus often stabilises with age, typically by the thirties or forties." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Keratoconus has no simple cure but can be controlled." },
    { type: "item", text: "Cross-linking stops progression in most patients." },
    { type: "item", text: "Lenses and procedures improve vision." },
    { type: "item", text: "Transplant is reserved for advanced cases." },
    { type: "item", text: "Early diagnosis gives the best outcome." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "A [keratoconus](/blog/keratoconus-symptoms-causes-diagnosis-treatment/) diagnosis is manageable with modern treatment. Early action protects your cornea and vision for the long term. [Dr. Meeta Mungale](/doctors/meeta-mungale/) and the team at [Mungale Eye Hospital](/contact-us/) in Vadodara provide complete keratoconus care, from diagnostics to cross-linking and transplant." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Is keratoconus curable?",
        a: [
          { type: "para", text: "There is no simple cure that makes the cornea completely normal, but keratoconus can be controlled. Cross-linking stops progression in most cases, and lenses or procedures improve vision." },
        ],
      },
      {
        q: "Can keratoconus go away on its own?",
        a: [
          { type: "para", text: "Keratoconus does not go away, but it often slows or stabilises with age, usually by the thirties or forties. Younger patients may progress faster, so monitoring is important." },
        ],
      },
      {
        q: "Does cross-linking cure keratoconus?",
        a: [
          { type: "para", text: "Cross-linking does not cure it but strengthens the cornea to stop or slow progression. Vision correction with glasses or lenses is usually still needed." },
        ],
      },
      {
        q: "Will I need a corneal transplant for keratoconus?",
        a: [
          { type: "para", text: "Most people with early diagnosis and treatment do not need a transplant. Transplant is considered for advanced cases with scarring or when lenses no longer provide good vision." },
        ],
      },
      {
        q: "Can I have LASIK with keratoconus?",
        a: [
          { type: "para", text: "No. LASIK can weaken the cornea and worsen keratoconus. Other options, such as phakic lenses in selected stable patients, may be considered. Your eye doctor will advise." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: What is keratoconus?](https://www.aao.org/eye-health/diseases/what-is-keratoconus)" },
    { type: "item", text: "[AAO: Corneal cross-linking](https://www.aao.org/eye-health/treatments/corneal-cross-linking-2)" },
  ];
