import type { BlogBlock } from "@/content/blog-bodies";

// Article 4.2 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "PK (penetrating keratoplasty) replaces the full thickness of the cornea. DALK (deep anterior lamellar keratoplasty) replaces the front layers while keeping the patient's own inner endothelium. DSEK and DMEK replace the inner endothelial layer, with DMEK transplanting the thinnest layer and often giving the best visual recovery. The choice depends on which layer is diseased." },
      ],
    },
    { type: "para", text: "The cornea has several layers. Older [transplant surgery](/blog/corneal-transplant-surgery/) replaced the whole cornea. Modern lamellar keratoplasty replaces only the layer that is diseased, which can mean faster recovery and lower rejection risk. Understanding the four main types helps patients follow their surgeon's recommendation." },
    { type: "heading", text: "What Are the Layers of the Cornea?" },
    { type: "item", text: "Epithelium: the thin outer surface" },
    { type: "item", text: "Stroma: the thick middle layer, which gives strength and clarity" },
    { type: "item", text: "Descemet's membrane: a thin membrane at the back" },
    { type: "item", text: "Endothelium: a single layer of cells that pumps fluid out to keep the cornea clear" },
    { type: "heading", text: "What Is PK?" },
    { type: "para", text: "Penetrating keratoplasty removes a full-thickness circle of the cornea and replaces it with donor tissue, held with stitches." },
    { type: "item", text: "Used for: diseases affecting all layers, deep scars with endothelial damage, perforation or failed grafts" },
    { type: "item", text: "Recovery: slower, with stitches for months and astigmatism common" },
    { type: "item", text: "Rejection risk: higher than lamellar procedures because donor endothelium is transplanted" },
    { type: "heading", text: "What Is DALK?" },
    { type: "para", text: "Deep anterior lamellar keratoplasty replaces the epithelium and stroma down to Descemet's membrane, keeping the patient's healthy endothelium." },
    { type: "item", text: "Used for: keratoconus and scars that do not involve the endothelium" },
    { type: "item", text: "Recovery: stitches still needed, but the eye is stronger and endothelial rejection does not occur" },
    { type: "item", text: "Rejection risk: lower, since the patient keeps their own endothelium" },
    { type: "heading", text: "What Is DSEK?" },
    { type: "para", text: "Descemet's stripping endothelial keratoplasty replaces the diseased endothelium and Descemet's membrane with a thin donor layer that includes some stroma, inserted through a small incision and held with an air bubble." },
    { type: "item", text: "Used for: Fuchs' dystrophy and corneal swelling from endothelial failure" },
    { type: "item", text: "Recovery: faster than PK, few or no stitches" },
    { type: "item", text: "Rejection risk: lower than PK" },
    { type: "heading", text: "What Is DMEK?" },
    { type: "para", text: "Descemet's membrane endothelial keratoplasty transplants only Descemet's membrane and endothelium, without stroma." },
    { type: "item", text: "Used for: Fuchs' dystrophy and endothelial failure" },
    { type: "item", text: "Recovery: often the fastest and best visual recovery" },
    { type: "item", text: "Rejection risk: lowest among endothelial transplants" },
    { type: "item", text: "Considerations: technically demanding, and some patients need a repeat air bubble injection" },
    { type: "heading", text: "How Do They Compare?" },
    {
      type: "table",
      text: "",
      head: ["Procedure", "Layer replaced", "Typical use", "Recovery", "Rejection risk"],
      rows: [
        ["PK", "Full thickness", "All layers diseased", "Slowest", "Highest"],
        ["DALK", "Front layers", "Keratoconus, front scars", "Moderate", "Low"],
        ["DSEK", "Inner layer with some stroma", "Endothelial disease", "Faster", "Lower"],
        ["DMEK", "Thinnest inner layer", "Endothelial disease", "Fastest", "Lowest"],
      ],
    },
    { type: "heading", text: "How Does the Surgeon Choose?" },
    { type: "para", text: "The choice depends on which layers are diseased, the health of the rest of the eye, previous surgery, surgeon experience and patient factors. Positioning after DSEK and DMEK, often lying face up, helps the graft attach." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Modern transplants replace only the diseased layer when possible." },
    { type: "item", text: "PK replaces the full cornea." },
    { type: "item", text: "DALK replaces front layers, useful for keratoconus." },
    { type: "item", text: "DSEK and DMEK replace the inner layer for endothelial disease." },
    { type: "item", text: "DMEK often offers the fastest recovery and lowest rejection risk." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Matching the transplant type to the diseased layer gives the best chance of clear vision and a durable graft. [Dr. Meeta Mungale](/doctors/meeta-mungale/) and the team at [Mungale Eye Hospital](/contact-us/) in Vadodara perform PK, DALK, DSEK and DMEK and help patients understand which suits them." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "What is the difference between DMEK and DSEK?",
        a: [
          { type: "para", text: "Both replace the inner endothelial layer. DSEK includes a thin layer of donor stroma, while DMEK transplants only Descemet's membrane and endothelium. DMEK often gives faster and better visual recovery and lower rejection risk." },
        ],
      },
      {
        q: "Which corneal transplant is best for keratoconus?",
        a: [
          { type: "para", text: "DALK is often preferred for keratoconus because it replaces the front layers while keeping the patient's healthy endothelium, reducing rejection risk. PK may be used if DALK is not possible." },
        ],
      },
      {
        q: "Which transplant is used for Fuchs' dystrophy?",
        a: [
          { type: "para", text: "Endothelial transplants such as DMEK or DSEK are commonly used for Fuchs' dystrophy because the disease mainly affects the inner endothelial layer." },
        ],
      },
      {
        q: "Why is PK still performed?",
        a: [
          { type: "para", text: "PK is needed when all corneal layers are diseased, in deep scars with endothelial damage, perforations or some failed grafts. It remains an important procedure." },
        ],
      },
      {
        q: "Do partial transplants need stitches?",
        a: [
          { type: "para", text: "DALK usually requires stitches. DSEK and DMEK are performed through small incisions and need few or no stitches, using an air bubble to hold the graft in place." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: About corneal transplantation](https://www.aao.org/eye-health/treatments/about-corneal-transplantation)" },
    { type: "item", text: "[NHS: Cornea transplant](https://www.nhs.uk/conditions/cornea-transplant/)" },
  ];
