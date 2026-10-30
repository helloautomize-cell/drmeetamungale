import type { BlogBlock } from "@/content/blog-bodies";

// Article 9.3 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "LASIK pricing is shaped by the procedure (standard LASIK, Femto-LASIK, Contoura or SMILE), pre-operative testing, laser platform, surgeon expertise, hospital facilities and post-operative care. One eye or both eyes, and whether enhancements are covered, also affect the final price. Ask what is included before deciding." },
      ],
    },
    { type: "para", text: "The cost of [LASIK](/blog/lasik-eye-surgery-types-cost-benefits-candidacy/) in Vadodara varies because it depends on the type of laser procedure, the diagnostic tests needed, the technology used, the surgeon's experience and what follow-up care is included. Bladeless and customised procedures like Femto-LASIK, Contoura Vision and SMILE usually cost more than standard LASIK. The safest way to compare is to ask for a clear, itemised quote after your evaluation." },
    { type: "heading", text: "What Affects the Price?" },
    { type: "h3", text: "Type of procedure" },
    { type: "item", text: "Standard LASIK: uses a blade for the flap and is often the most affordable option" },
    { type: "item", text: "Femto-LASIK: uses a laser to make the flap, which adds technology cost" },
    { type: "item", text: "Contoura Vision: adds detailed corneal mapping and customised treatment" },
    { type: "item", text: "SMILE: uses advanced femtosecond technology with a small incision" },
    { type: "h3", text: "Diagnostic tests" },
    { type: "para", text: "A full pre-LASIK work-up may include topography, tomography, pachymetry, dry eye tests, pupil size and retina examination. These tests are essential for safety." },
    { type: "h3", text: "Laser platform and technology" },
    { type: "para", text: "Newer or more advanced laser systems involve higher equipment and maintenance costs." },
    { type: "h3", text: "Surgeon experience" },
    { type: "para", text: "Experienced refractive surgeons and teams may charge more, reflecting skill and outcomes." },
    { type: "h3", text: "Facility and safety standards" },
    { type: "para", text: "Sterile operating areas, trained staff and emergency readiness add to the cost but also to safety." },
    { type: "h3", text: "Follow-up and medicines" },
    { type: "para", text: "Some packages include post-operative drops and several follow-up visits. Others charge separately." },
    { type: "h3", text: "Enhancements" },
    { type: "para", text: "Some patients need a small touch-up later. Ask whether this is included." },
    { type: "heading", text: "Is the Cheapest Option the Best?" },
    { type: "para", text: "Choosing only on price can be risky. A lower price may leave out key tests or follow-up care. Eye safety depends on proper screening, the right procedure for your cornea and good aftercare. Value comes from a complete, safe plan." },
    { type: "heading", text: "Is LASIK Covered by Insurance?" },
    { type: "para", text: "LASIK is often considered a cosmetic or elective procedure, so many health insurance policies do not cover it. Some policies cover it above a certain power. Check your policy and ask the hospital for documents if needed." },
    { type: "heading", text: "Questions to Ask Before You Book" },
    { type: "item", text: "Which procedure do you recommend for my eyes, and why?" },
    { type: "item", text: "What tests are included in the price?" },
    { type: "item", text: "Are post-operative medicines and visits included?" },
    { type: "item", text: "Is an enhancement covered if needed?" },
    { type: "item", text: "Are there EMI or payment options?" },
    { type: "item", text: "What happens if I am found unsuitable?" },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "LASIK cost depends on technique, tests and technology." },
    { type: "item", text: "Customised and bladeless options usually cost more." },
    { type: "item", text: "Proper screening is essential, not optional." },
    { type: "item", text: "Ask for an itemised quote after evaluation." },
    { type: "item", text: "Check insurance coverage early." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "A clear quote helps you plan without surprises. Safety, the right procedure and good follow-up matter more than a low headline price. For an evaluation and transparent cost discussion, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/), an ophthalmologist at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Why does LASIK cost vary between hospitals?",
        a: [
          { type: "para", text: "Hospitals use different lasers, testing methods, surgeon expertise and aftercare packages. Some include all tests and visits in one price, while others charge separately. Comparing what is included gives a fairer picture than comparing totals alone." },
        ],
      },
      {
        q: "Is Contoura Vision more expensive than LASIK?",
        a: [
          { type: "para", text: "Usually yes, because it uses detailed corneal mapping and customised treatment. Whether it is worth it depends on your corneal shape and visual needs. Your surgeon can explain if it offers a real benefit for you." },
        ],
      },
      {
        q: "Does health insurance cover LASIK?",
        a: [
          { type: "para", text: "Many policies treat LASIK as elective and do not cover it. Some may cover it when the power is above a certain level. Check your policy terms and speak to your insurer before planning surgery." },
        ],
      },
      {
        q: "Are EMI options available for LASIK?",
        a: [
          { type: "para", text: "Many eye hospitals offer EMI or financing options. Ask the hospital counsellor about available plans, interest and documents required, so you can choose a comfortable payment method." },
        ],
      },
      {
        q: "Is the pre-LASIK evaluation charged separately?",
        a: [
          { type: "para", text: "At some centres it is, while at others it is included in the package. The evaluation is important because it decides whether LASIK is safe for you. Ask about this when booking." },
        ],
      },
      {
        q: "What if I need an enhancement later?",
        a: [
          { type: "para", text: "A small number of patients need a touch-up. Some packages include enhancements within a set period. Confirm this in advance so you know whether extra cost may apply." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: LASIK laser eye surgery](https://www.aao.org/eye-health/treatments/lasik)" },
    { type: "item", text: "[AAO: Facts about LASIK complications](https://www.aao.org/eye-health/treatments/facts-about-lasik-complications)" },
    { type: "item", text: "[AAO: Questions to ask when considering LASIK](https://www.aao.org/eye-health/treatments/lasik-questions-to-ask)" },
  ];
