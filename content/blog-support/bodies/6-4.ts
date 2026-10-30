import type { BlogBlock } from "@/content/blog-bodies";

// Article 6.4 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Recurrence is possible after pterygium surgery, but the risk depends on the surgical method, your age, how inflamed the eye is and how well you protect it from sun and dust afterward. Covering the area with a graft, using drops as prescribed and wearing UV protection all lower the risk. Regular follow-up catches regrowth early." },
      ],
    },
    { type: "para", text: "Yes, a [pterygium](/blog/pterygium-causes-symptoms-stages-treatment-surgery/) can come back after surgery. This is called recurrence. It usually happens within the first year, when the healing tissue becomes overactive and grows back toward the cornea. Modern techniques, especially using a conjunctival graft, have made recurrence much less common than with simple removal alone." },
    { type: "heading", text: "Why Does Pterygium Come Back?" },
    { type: "para", text: "After removal, the eye heals by forming new tissue. In some people, this healing response becomes too strong. Fibrous tissue and blood vessels grow back over the area and move toward the cornea again. Continued sun exposure and inflammation can encourage this." },
    { type: "heading", text: "What Increases the Risk?" },
    { type: "item", text: "Simple removal without a graft (bare sclera technique)" },
    { type: "item", text: "Younger age at surgery" },
    { type: "item", text: "A large, fleshy or very red pterygium" },
    { type: "item", text: "A pterygium that has already come back before" },
    { type: "item", text: "Continued heavy sun and dust exposure without protection" },
    { type: "item", text: "Stopping post-operative drops too early" },
    { type: "item", text: "Ongoing dry eye or eye surface inflammation" },
    { type: "heading", text: "How Do Surgeons Lower Recurrence?" },
    { type: "h3", text: "Conjunctival autograft" },
    { type: "para", text: "Healthy tissue from under the upper lid is placed over the bare area. This acts as a barrier and is now a standard approach." },
    { type: "h3", text: "Tissue glue" },
    { type: "para", text: "Fibrin glue holds the graft in place with less irritation than stitches, which may help healing." },
    { type: "h3", text: "Additional treatments" },
    { type: "para", text: "In selected or recurrent cases, surgeons may use medicines like mitomycin C or an amniotic membrane graft to control healing." },
    { type: "heading", text: "What Are the Early Signs of Recurrence?" },
    { type: "item", text: "New redness at the surgery site after it had settled" },
    { type: "item", text: "Thickened, raised tissue near the edge of the cornea" },
    { type: "item", text: "Blood vessels growing toward the centre" },
    { type: "item", text: "Return of a gritty feeling or irritation" },
    { type: "para", text: "Early recurrence may be managed with drops. Larger regrowth may need repeat surgery, ideally by an experienced surgeon." },
    { type: "heading", text: "How Can You Protect Your Eye?" },
    { type: "item", text: "Use all drops exactly as prescribed and taper only when advised" },
    { type: "item", text: "Wear UV-blocking sunglasses every day outdoors" },
    { type: "item", text: "Use a hat or cap in strong sunlight" },
    { type: "item", text: "Protect eyes while riding a two-wheeler" },
    { type: "item", text: "Treat dry eye if present" },
    { type: "item", text: "Keep every follow-up appointment, especially in the first year" },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Pterygium can recur, usually within the first year." },
    { type: "item", text: "Grafting lowers the chance of recurrence." },
    { type: "item", text: "Sun protection after surgery is essential." },
    { type: "item", text: "Early signs include new redness and thickened tissue." },
    { type: "item", text: "Follow-up visits help catch regrowth early." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "The possibility of recurrence should not stop you from having needed surgery. With modern techniques and good aftercare, most patients have lasting results. For surgery planning and follow-up care, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/), an ophthalmologist at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "How soon can a pterygium come back?",
        a: [
          { type: "para", text: "Recurrence usually appears within the first 6 to 12 months after surgery, while the eye is still healing. It can occasionally appear later. This is why regular follow-up visits during the first year are important." },
        ],
      },
      {
        q: "Does a graft stop recurrence completely?",
        a: [
          { type: "para", text: "A conjunctival graft greatly lowers the risk, but no method can promise zero recurrence. Good surgical technique, proper drop use and sun protection together give the best long-term results." },
        ],
      },
      {
        q: "Can a recurrent pterygium be removed again?",
        a: [
          { type: "para", text: "Yes. A recurrent pterygium can be removed again, often with extra techniques such as grafts, amniotic membrane or medicines that reduce scarring. Repeat surgery is usually more complex and should be done by an experienced surgeon." },
        ],
      },
      {
        q: "Are younger people more likely to have recurrence?",
        a: [
          { type: "para", text: "Yes. Younger patients tend to have a stronger healing response, which can raise the chance of regrowth. Surgeons may use additional measures in younger people to lower this risk." },
        ],
      },
      {
        q: "Does sun exposure after surgery cause recurrence?",
        a: [
          { type: "para", text: "UV exposure can encourage inflammation and regrowth. Wearing UV-blocking sunglasses and a hat outdoors is one of the simplest ways to protect the operated eye in the long term." },
        ],
      },
      {
        q: "Will drops stop a recurrence?",
        a: [
          { type: "para", text: "Anti-inflammatory drops can calm early redness and may slow mild regrowth. They cannot remove established tissue. Your doctor will decide whether drops, monitoring or repeat surgery is best." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[Better Health Channel: Pterygium](https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/pterygium)" },
    { type: "item", text: "[College of Optometrists: Pterygium](https://www.college-optometrists.org/clinical-guidance/clinical-management-guidelines/pterygium)" },
  ];
