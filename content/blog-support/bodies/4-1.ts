import type { BlogBlock } from "@/content/blog-bodies";

// Article 4.1 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "A corneal transplant may be needed when the cornea is scarred, swollen, thinned or distorted enough to cause poor vision, pain or risk of perforation, and when glasses, contact lenses or other treatments cannot provide adequate vision. Common reasons include advanced keratoconus, corneal scarring after infection or injury, Fuchs' endothelial dystrophy, corneal swelling after cataract surgery and failed previous grafts." },
      ],
    },
    { type: "para", text: "A corneal transplant, also called keratoplasty, is surgery that replaces all or part of a damaged or diseased cornea with healthy donor tissue. The cornea is the clear front window of the eye. When it becomes cloudy, scarred, swollen or misshapen, vision can be severely affected, and a transplant may be needed." },
    { type: "heading", text: "Which Conditions May Need a Transplant?" },
    { type: "h3", text: "Advanced keratoconus" },
    { type: "para", text: "When the cornea is very thin or scarred and lenses no longer give useful vision." },
    { type: "h3", text: "Corneal scarring" },
    { type: "para", text: "Scars from infections such as corneal ulcers, trauma, chemical injury or inflammation." },
    { type: "h3", text: "Fuchs' endothelial dystrophy" },
    { type: "para", text: "An inherited condition in which the inner layer of cells that pump fluid out of the cornea fails, causing swelling and cloudy vision." },
    { type: "h3", text: "Corneal swelling after eye surgery" },
    { type: "para", text: "Some patients develop corneal oedema after cataract or other eye surgery." },
    { type: "h3", text: "Corneal thinning or perforation" },
    { type: "para", text: "Severe infection or inflammation can thin the cornea, risking or causing a perforation that needs urgent surgery." },
    { type: "h3", text: "Failed previous graft" },
    { type: "para", text: "A graft that has failed may need replacement." },
    { type: "h3", text: "Corneal dystrophies and degenerations" },
    { type: "para", text: "Other inherited or age-related conditions that cloud the cornea." },
    { type: "heading", text: "When Is a Transplant Considered?" },
    { type: "para", text: "Doctors consider transplant when:" },
    { type: "item", text: "Vision is significantly reduced and cannot be corrected with glasses or lenses" },
    { type: "item", text: "Pain from corneal swelling is persistent" },
    { type: "item", text: "There is risk of perforation or infection that does not respond to treatment" },
    { type: "item", text: "Daily activities and quality of life are affected" },
    { type: "heading", text: "Are There Alternatives?" },
    { type: "para", text: "Depending on the condition, alternatives may include cross-linking for keratoconus, scleral lenses, intracorneal rings, medicines and hypertonic drops for mild swelling, or laser treatments for surface scars. Your surgeon will discuss options before recommending a transplant." },
    { type: "heading", text: "What Are the Types of Transplant?" },
    { type: "para", text: "Modern surgery often replaces only the diseased layer:" },
    { type: "item", text: "DALK replaces the front layers and keeps the patient's own inner layer" },
    { type: "item", text: "DSEK and DMEK replace the inner endothelial layer" },
    { type: "item", text: "Penetrating keratoplasty (PK) replaces the full thickness of the cornea" },
    { type: "heading", text: "What Assessment Happens Before Surgery?" },
    { type: "para", text: "The surgeon examines the eye, measures corneal thickness and shape, checks eye pressure and retina, and discusses expectations, risks and follow-up. Corneal tissue comes from eye banks." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "A corneal transplant replaces damaged corneal tissue." },
    { type: "item", text: "Common reasons include keratoconus, scarring and Fuchs' dystrophy." },
    { type: "item", text: "It is considered when other treatments cannot restore useful vision." },
    { type: "item", text: "Partial thickness transplants are often used today." },
    { type: "item", text: "Alternatives should be explored first where suitable." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "A [corneal transplant](/blog/corneal-transplant-surgery/) can restore sight and relieve pain for many people. Careful assessment determines whether it is the right option and which type suits you. [Dr. Meeta Mungale](/doctors/meeta-mungale/) and the team at [Mungale Eye Hospital](/contact-us/) in Vadodara offer advanced corneal transplant procedures." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Who needs a corneal transplant?",
        a: [
          { type: "para", text: "People with a cornea that is scarred, swollen, very thin or misshapen enough to cause poor vision or pain, and who cannot be helped by glasses, lenses or other treatments, may need a transplant." },
        ],
      },
      {
        q: "What diseases need corneal transplant?",
        a: [
          { type: "para", text: "Common reasons include advanced keratoconus, corneal scarring after infection or injury, Fuchs' endothelial dystrophy, corneal swelling after eye surgery and failed previous grafts." },
        ],
      },
      {
        q: "Is corneal transplant the only option for keratoconus?",
        a: [
          { type: "para", text: "No. Most keratoconus patients are managed with cross-linking, glasses or special lenses. Transplant is reserved for advanced cases with scarring or poor vision despite lenses." },
        ],
      },
      {
        q: "Where does the donor cornea come from?",
        a: [
          { type: "para", text: "Donor corneas come from eye banks, which collect and screen tissue donated after death. Eye donation is vital for transplant surgery." },
        ],
      },
      {
        q: "Is corneal transplant successful?",
        a: [
          { type: "para", text: "Many corneal transplants succeed, especially partial thickness procedures in low-risk eyes. Success depends on the underlying condition, transplant type and careful follow-up." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: About corneal transplantation](https://www.aao.org/eye-health/treatments/about-corneal-transplantation)" },
    { type: "item", text: "[NHS: Cornea transplant](https://www.nhs.uk/conditions/cornea-transplant/)" },
  ];
