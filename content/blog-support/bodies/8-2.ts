import type { BlogBlock } from "@/content/blog-bodies";

// Article 8.2 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Most people with diabetes should have a dilated retinal examination at least once a year. Your eye doctor may suggest more frequent visits if retinopathy is present, if sugar control is poor, or during pregnancy. People newly diagnosed with type 2 diabetes should be examined soon after diagnosis." },
      ],
    },
    { type: "para", text: "Regular eye checks catch diabetic eye disease early, when treatment works best." },
    { type: "heading", text: "General Schedule" },
    { type: "item", text: "Type 2 diabetes: at diagnosis, then usually yearly" },
    { type: "item", text: "Type 1 diabetes: usually starting a few years after diagnosis, then yearly, as advised" },
    { type: "item", text: "Pregnancy with pre-existing diabetes: early in pregnancy and as advised" },
    { type: "item", text: "Existing retinopathy: every few months, as advised" },
    { type: "heading", text: "What Is Checked" },
    { type: "item", text: "Visual acuity" },
    { type: "item", text: "Eye pressure" },
    { type: "item", text: "Dilated examination of the retina" },
    { type: "item", text: "Retinal photographs or OCT when needed" },
    { type: "heading", text: "See an Eye Doctor Sooner If" },
    { type: "item", text: "Vision becomes blurred or fluctuates" },
    { type: "item", text: "You notice floaters or flashes" },
    { type: "item", text: "Part of your vision is dark" },
    { type: "item", text: "Blood sugar swings widely" },
    { type: "item", text: "You start a new, intensive treatment plan" },
    { type: "heading", text: "Prepare for the Visit" },
    { type: "item", text: "Bring your medicines list and recent HbA1c" },
    { type: "item", text: "Arrange for someone to accompany you, as dilation can blur near vision for a few hours" },
    { type: "item", text: "Carry sunglasses" },
    { type: "heading", text: "Other Habits That Help" },
    { type: "item", text: "Control blood sugar, blood pressure and cholesterol" },
    { type: "item", text: "Stop smoking" },
    { type: "item", text: "Do not skip appointments" },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Yearly dilated exams are the usual minimum." },
    { type: "item", text: "More frequent checks may be needed." },
    { type: "item", text: "Do not wait for symptoms." },
    { type: "item", text: "Pregnancy needs extra monitoring." },
    { type: "item", text: "Good control protects the eyes." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "A yearly visit can protect your eyesight for decades. For [diabetic eye](/blog/diabetic-retinopathy-symptoms-screening-stages-treatment/) screening, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/) at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Is a yearly check enough?",
        a: [
          { type: "para", text: "For many people yes. Your doctor will adjust it to your situation." },
        ],
      },
      {
        q: "Can an optometrist's check replace a retinal exam?",
        a: [
          { type: "para", text: "A dilated retinal examination or retinal imaging is needed for screening." },
        ],
      },
      {
        q: "Do I need checks if my sugar is well controlled?",
        a: [
          { type: "para", text: "Yes. Good control lowers risk but does not remove it." },
        ],
      },
      {
        q: "What if I miss a year?",
        a: [
          { type: "para", text: "Book as soon as you can. Do not wait for symptoms." },
        ],
      },
      {
        q: "Is pregnancy a special case?",
        a: [
          { type: "para", text: "Yes. Retinopathy can progress faster in pregnancy, so closer monitoring is advised." },
        ],
      },
      {
        q: "Will I need treatment at every visit?",
        a: [
          { type: "para", text: "No. Many visits are just monitoring." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: What is diabetic retinopathy?](https://www.aao.org/eye-health/diseases/what-is-diabetic-retinopathy)" },
    { type: "item", text: "[NHS: Diabetic retinopathy](https://www.nhs.uk/conditions/diabetic-retinopathy/)" },
  ];
