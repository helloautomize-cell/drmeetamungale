import type { BlogBlock } from "@/content/blog-bodies";

// Article 8.4 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "There is no single treatment for all patients. Injections mainly reduce swelling and abnormal vessel growth. Laser helps stabilise the retina and lowers the risk of bleeding. Surgery removes blood or scar tissue and repairs detachment. Your retina findings decide which option, or combination, is right." },
      ],
    },
    { type: "para", text: "Diabetic retinopathy is treated based on what the eye examination and scans show. Anti-VEGF injections are often used for macular edema and sometimes for proliferative disease. Laser treatment seals leaks or shrinks abnormal vessels. Vitrectomy surgery is used for bleeding that does not clear or retinal detachment. Controlling diabetes remains the foundation at every stage." },
    { type: "heading", text: "Who Needs Treatment?" },
    { type: "para", text: "Treatment is usually advised for:" },
    { type: "item", text: "Diabetic macular edema that affects or threatens central vision" },
    { type: "item", text: "Proliferative diabetic retinopathy" },
    { type: "item", text: "Some cases of severe non-proliferative retinopathy" },
    { type: "item", text: "Vitreous hemorrhage or tractional retinal detachment" },
    { type: "para", text: "Mild and moderate stages without macular swelling are usually monitored, with a focus on sugar, blood pressure and cholesterol control." },
    { type: "heading", text: "Anti-VEGF Injections" },
    { type: "h3", text: "What they do" },
    { type: "para", text: "VEGF is a substance that causes leaky, abnormal vessels. Anti-VEGF medicines block it, reducing swelling and new vessel growth." },
    { type: "h3", text: "How they are given" },
    { type: "para", text: "The eye is numbed and cleaned, and a tiny amount of medicine is injected into the eye with a very fine needle. It takes only a few minutes." },
    { type: "h3", text: "What to expect" },
    { type: "para", text: "Several injections are usually needed, often monthly at first, then spaced out. Vision may improve in many patients with macular edema." },
    { type: "h3", text: "Steroid implants" },
    { type: "para", text: "In some patients, especially those not responding well to anti-VEGF, steroid injections or implants may be used." },
    { type: "heading", text: "Laser Treatment" },
    { type: "h3", text: "Pan-retinal photocoagulation (PRP)" },
    { type: "para", text: "Used for proliferative retinopathy. Many small laser spots are applied to the outer retina, reducing the signal for new vessels to grow and lowering the risk of bleeding." },
    { type: "h3", text: "Focal or grid laser" },
    { type: "para", text: "Used in selected cases of macular edema to seal specific leaks." },
    { type: "h3", text: "What to expect" },
    { type: "para", text: "Laser is usually done in the clinic, sometimes in more than one session. Some side vision or night vision may be reduced after PRP, but it protects central vision." },
    { type: "heading", text: "Vitrectomy Surgery" },
    { type: "h3", text: "When it is needed" },
    { type: "item", text: "Bleeding inside the eye that does not clear" },
    { type: "item", text: "Scar tissue pulling on the retina" },
    { type: "item", text: "Tractional retinal detachment" },
    { type: "h3", text: "What it involves" },
    { type: "para", text: "The surgeon removes the vitreous gel, blood and scar tissue, and may apply laser during the surgery. Recovery takes several weeks." },
    { type: "heading", text: "Why Diabetes Control Still Matters" },
    { type: "para", text: "Treatment helps the eye, but sugar, blood pressure, cholesterol and kidney health decide how the disease behaves over time. Stopping smoking and regular follow-up are equally important." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Treatment depends on retina findings, not on diabetes alone." },
    { type: "item", text: "Anti-VEGF injections are often first choice for macular edema." },
    { type: "item", text: "PRP laser protects against bleeding in proliferative disease." },
    { type: "item", text: "Vitrectomy treats bleeding and retinal detachment." },
    { type: "item", text: "Diabetes control supports every treatment." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Modern treatment can save sight for many people with [diabetic retinopathy](/blog/diabetic-retinopathy-symptoms-screening-stages-treatment/), especially when started early. Missing follow-ups is one of the main reasons vision is lost. For diabetic retina evaluation and treatment, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/), an ophthalmologist at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Are eye injections painful?",
        a: [
          { type: "para", text: "Most people feel only mild pressure. The eye is numbed with drops before the injection, and the procedure takes a few minutes. Some may notice mild irritation or a small red spot on the eye afterward, which settles." },
        ],
      },
      {
        q: "How many injections will I need?",
        a: [
          { type: "para", text: "It varies. Many patients need monthly injections at first, then less frequent ones as the eye stabilises. Your doctor will use OCT scans to decide when to repeat or space out treatment." },
        ],
      },
      {
        q: "Does laser treatment improve vision?",
        a: [
          { type: "para", text: "Laser mainly prevents further damage and protects remaining vision. It does not usually restore lost vision. For macular edema, injections are more likely to improve sight, sometimes combined with laser." },
        ],
      },
      {
        q: "Is vitrectomy surgery safe?",
        a: [
          { type: "para", text: "Vitrectomy is a well-established surgery with good results in suitable patients. Like any surgery, it has risks such as infection, raised eye pressure or cataract. Your surgeon will explain these based on your eye." },
        ],
      },
      {
        q: "Can I stop treatment once my vision improves?",
        a: [
          { type: "para", text: "Do not stop on your own. Diabetic eye disease can return or worsen without warning. Regular reviews help your doctor decide when to pause, continue or restart treatment safely." },
        ],
      },
      {
        q: "Will controlling sugar alone fix retinopathy?",
        a: [
          { type: "para", text: "Good sugar control slows progression and helps treatment work, but it cannot reverse advanced damage on its own. People with macular edema or proliferative disease usually need eye treatment as well." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: What is diabetic retinopathy?](https://www.aao.org/eye-health/diseases/what-is-diabetic-retinopathy)" },
    { type: "item", text: "[NHS: Diabetic retinopathy](https://www.nhs.uk/conditions/diabetic-retinopathy/)" },
  ];
