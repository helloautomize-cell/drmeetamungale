import type { BlogBlock } from "@/content/blog-bodies";

// Article 8.3 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Mild and moderate stages show small vessel bulges and leaks, often with normal vision. Severe non-proliferative retinopathy shows widespread vessel blockage and a high risk of progression. Proliferative retinopathy means new, abnormal vessels have formed, which can bleed or cause retinal detachment. Diabetic macular edema can occur at any stage and blur central vision." },
      ],
    },
    { type: "para", text: "[Diabetic retinopathy](/blog/diabetic-retinopathy-symptoms-screening-stages-treatment/) develops in stages, from mild changes in tiny blood vessels to the growth of fragile new vessels that can bleed. The four main stages are mild, moderate, severe non-proliferative and proliferative diabetic retinopathy. Early stages usually have no symptoms, which is why regular retina checks are essential for everyone with diabetes." },
    { type: "heading", text: "Why Does Diabetes Affect the Retina?" },
    { type: "para", text: "High blood sugar over time damages the walls of tiny blood vessels in the retina, the light-sensing layer at the back of the eye. The vessels weaken, leak fluid or blood, and some close off. The retina then signals for new vessels to grow, but these are weak and cause more problems." },
    { type: "heading", text: "Stage 1: Mild Non-Proliferative Retinopathy" },
    { type: "item", text: "Small bulges in vessel walls called microaneurysms" },
    { type: "item", text: "Tiny dot-like bleeds may appear" },
    { type: "item", text: "Vision is usually normal" },
    { type: "item", text: "Management: good control of sugar, blood pressure and cholesterol, plus regular eye checks, often yearly" },
    { type: "heading", text: "Stage 2: Moderate Non-Proliferative Retinopathy" },
    { type: "item", text: "More microaneurysms and bleeds" },
    { type: "item", text: "Some vessels become blocked" },
    { type: "item", text: "Fluid or fat deposits may leak into the retina" },
    { type: "item", text: "Vision may still be normal unless the macula is affected" },
    { type: "item", text: "Management: closer monitoring, often every 6 months or as advised" },
    { type: "heading", text: "Stage 3: Severe Non-Proliferative Retinopathy" },
    { type: "item", text: "Many vessels are blocked" },
    { type: "item", text: "Large areas of the retina lack blood supply" },
    { type: "item", text: "Veins may look beaded or irregular" },
    { type: "item", text: "High risk of moving to the proliferative stage within a year" },
    { type: "item", text: "Management: frequent checks and sometimes early laser treatment" },
    { type: "heading", text: "Stage 4: Proliferative Diabetic Retinopathy" },
    { type: "item", text: "New, fragile blood vessels grow on the retina or optic nerve" },
    { type: "item", text: "These can bleed into the gel inside the eye (vitreous hemorrhage)" },
    { type: "item", text: "Scar tissue can pull the retina and cause detachment" },
    { type: "item", text: "Raised eye pressure from new vessels (neovascular glaucoma) may develop" },
    { type: "item", text: "Symptoms: floaters, sudden blur, dark patches or loss of vision" },
    { type: "item", text: "Management: laser, injections or surgery as needed, without delay" },
    { type: "heading", text: "What Is Diabetic Macular Edema?" },
    { type: "para", text: "The macula is the centre of the retina, used for reading and recognising faces. When leaking fluid collects here, it causes swelling and blurred central vision. It can happen at any stage of retinopathy and is a common cause of vision loss in diabetes. An OCT scan detects it early." },
    { type: "heading", text: "How Are the Stages Diagnosed?" },
    { type: "item", text: "Dilated retina examination" },
    { type: "item", text: "Retinal photographs" },
    { type: "item", text: "OCT scan to check macular swelling" },
    { type: "item", text: "Fluorescein angiography in selected cases to map blood flow" },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Diabetic retinopathy has four main stages." },
    { type: "item", text: "Early stages often cause no symptoms." },
    { type: "item", text: "Proliferative retinopathy can bleed or detach the retina." },
    { type: "item", text: "Macular edema can blur vision at any stage." },
    { type: "item", text: "Regular dilated eye checks catch changes early." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Knowing your stage helps you and your doctor plan the right follow-up and treatment. With good sugar control and timely care, many people keep useful vision for life. For a detailed retina assessment, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/), an ophthalmologist at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Can I have diabetic retinopathy with normal vision?",
        a: [
          { type: "para", text: "Yes. Early stages often cause no symptoms and vision may be perfectly clear. Damage can still be building up. This is why people with diabetes need regular dilated eye checks, even when they see well." },
        ],
      },
      {
        q: "How fast does diabetic retinopathy progress?",
        a: [
          { type: "para", text: "It varies. Good control of sugar, blood pressure and cholesterol can slow it greatly. Poor control, long duration of diabetes, pregnancy and kidney disease can speed it up. Your doctor will set follow-up based on your stage." },
        ],
      },
      {
        q: "Which stage of diabetic retinopathy needs treatment?",
        a: [
          { type: "para", text: "Treatment is usually needed for proliferative retinopathy and for diabetic macular edema affecting vision. Severe non-proliferative retinopathy may sometimes be treated early. Mild and moderate stages are mainly monitored with better diabetes control." },
        ],
      },
      {
        q: "What is the difference between retinopathy and macular edema?",
        a: [
          { type: "para", text: "Retinopathy refers to overall damage to retinal blood vessels. Macular edema is swelling in the central retina from leaking fluid. Edema can occur at any stage of retinopathy and is a major cause of blurred vision." },
        ],
      },
      {
        q: "How often should I get my eyes checked with diabetes?",
        a: [
          { type: "para", text: "Most people with diabetes should have a dilated eye exam at least once a year. Those with retinopathy may need checks every few months. Pregnant women with diabetes may need more frequent checks." },
        ],
      },
      {
        q: "Can diabetic retinopathy affect both eyes?",
        a: [
          { type: "para", text: "Yes. It usually affects both eyes, though one may be worse than the other. Both eyes are examined at every visit, and treatment is planned separately for each eye." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: What is diabetic retinopathy?](https://www.aao.org/eye-health/diseases/what-is-diabetic-retinopathy)" },
    { type: "item", text: "[NHS: Diabetic retinopathy](https://www.nhs.uk/conditions/diabetic-retinopathy/)" },
  ];
