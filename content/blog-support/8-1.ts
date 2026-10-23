import type { SupportArticleSource } from "@/content/blog-support";

// Article 8.1 - Diabetic Eye Disease cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleSource = {
  number: "8.1",
  slug: "diabetes-eye-damage-without-symptoms",
  title: "Does Diabetes Affect Your Eyes Even If You See Clearly?",
  seoTitle: "Does Diabetes Affect Your Eyes? | Mungale Eye Hospital",
  metaDescription: "Diabetic eye disease can develop without any change in vision. Learn why clear eyesight does not mean healthy retinas and why screening matters.",
  topics: ["eye-health"],
  cluster: "diabetic-retinopathy",
  pillarSlug: "diabetic-retinopathy-symptoms-screening-stages-treatment",
  order: 1,
  treatmentPage: "",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-16",
  cover: {
    src: "/images/blog/diabetes-eye-damage-without-symptoms-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: Indian patient with diabetes looking into a retinal imaging machine while a technician adjusts it.",
  },
  blocks: [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Yes. High blood sugar can damage the tiny blood vessels in the retina long before vision changes. By the time symptoms appear, the damage may be advanced. People with diabetes should have a dilated retinal examination regularly, even if they see well." },
      ],
    },
    { type: "para", text: "Many people with diabetes assume their eyes are fine because their vision seems normal. Unfortunately, [diabetic eye](/blog/diabetic-retinopathy-symptoms-screening-stages-treatment/) disease often causes no symptoms in the early stages." },
    { type: "heading", text: "Why Early Damage Is Silent" },
    { type: "para", text: "The retina has no pain nerves, and early blood vessel changes do not affect the central vision. Leaks, swelling and abnormal vessels can build up quietly." },
    { type: "heading", text: "What Can Happen" },
    { type: "item", text: "Diabetic retinopathy, damage to retinal blood vessels" },
    { type: "item", text: "Diabetic macular oedema, swelling at the centre of the retina" },
    { type: "item", text: "Vitreous haemorrhage from fragile new vessels" },
    { type: "item", text: "Earlier cataracts and a higher risk of glaucoma" },
    { type: "heading", text: "Symptoms That May Appear Later" },
    { type: "item", text: "Blurred or fluctuating vision" },
    { type: "item", text: "Floaters or dark spots" },
    { type: "item", text: "Poor night vision" },
    { type: "item", text: "Dark patches in the field of vision" },
    { type: "heading", text: "What Screening Involves" },
    { type: "item", text: "Vision test" },
    { type: "item", text: "Dilated retinal examination" },
    { type: "item", text: "Retinal photographs" },
    { type: "item", text: "OCT scan when needed" },
    { type: "heading", text: "Who Is at Higher Risk" },
    { type: "item", text: "Long duration of diabetes" },
    { type: "item", text: "Poorly controlled sugar" },
    { type: "item", text: "High blood pressure or cholesterol" },
    { type: "item", text: "Pregnancy with diabetes" },
    { type: "item", text: "Smoking and kidney disease" },
    { type: "heading", text: "Protecting Your Eyes" },
    { type: "item", text: "Keep blood sugar in the target range" },
    { type: "item", text: "Control blood pressure and cholesterol" },
    { type: "item", text: "Do not smoke" },
    { type: "item", text: "Attend scheduled eye checks" },
    { type: "item", text: "Seek treatment early if changes are found" },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Early diabetic eye disease is often silent." },
    { type: "item", text: "Normal vision does not rule it out." },
    { type: "item", text: "Regular dilated exams are essential." },
    { type: "item", text: "Good control slows damage." },
    { type: "item", text: "Early treatment protects sight." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Do not wait for symptoms to check your eyes. For a retinal assessment, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/) at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Can I have diabetic retinopathy with perfect vision?",
        a: [
          { type: "para", text: "Yes. Early retinopathy often causes no symptoms." },
        ],
      },
      {
        q: "How often should I get my eyes checked?",
        a: [
          { type: "para", text: "Your doctor will set the interval, commonly at least once a year." },
        ],
      },
      {
        q: "Is dilation painful?",
        a: [
          { type: "para", text: "No. Drops widen the pupil, and you may be sensitive to light for a few hours." },
        ],
      },
      {
        q: "Can retinopathy be reversed?",
        a: [
          { type: "para", text: "Early changes may stabilise with good control, and treatment can prevent progression. Advanced damage may not fully reverse." },
        ],
      },
      {
        q: "Do people with type 2 diabetes need eye checks at diagnosis?",
        a: [
          { type: "para", text: "Yes. Type 2 diabetes may be present for years before diagnosis." },
        ],
      },
      {
        q: "Does tight sugar control protect the eyes?",
        a: [
          { type: "para", text: "It lowers the risk and slows progression." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: What is diabetic retinopathy?](https://www.aao.org/eye-health/diseases/what-is-diabetic-retinopathy)" },
    { type: "item", text: "[NHS: Diabetic retinopathy](https://www.nhs.uk/conditions/diabetic-retinopathy/)" },
  ],
  keepReading: [
    { label: "How Often Should Diabetics Get an Eye Check-Up?", target: "link:8.2" },
    { label: "How Often Should Adults Get an Eye Check-Up?", target: "link:10.1" },
    { label: "Diabetic Retinopathy Stages Explained", target: "link:8.3" },
    { label: "Diabetic Retinopathy Treatment: Laser, Injections, Surgery", target: "link:8.4" },
    { label: "Diabetic Retinopathy: Symptoms, Screening, Stages & Treatment", target: "/blog/diabetic-retinopathy-symptoms-screening-stages-treatment/" },
  ],
};
