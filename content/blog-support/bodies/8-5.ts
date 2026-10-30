import type { BlogBlock } from "@/content/blog-bodies";

// Article 8.5 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Early diabetic retinopathy may stay stable or even improve slightly with better sugar, blood pressure and cholesterol control. Macular edema often improves with anti-VEGF injections, sometimes with better vision. Advanced damage, scarring or long-standing swelling usually leaves permanent changes. The goal of treatment is to stop progression and save the vision you have." },
      ],
    },
    { type: "para", text: "[Diabetic retinopathy](/blog/diabetic-retinopathy-symptoms-screening-stages-treatment/) cannot usually be fully reversed, but it can often be controlled, and some changes can improve. Macular swelling may reduce with injections, bleeding can clear and early signs can stabilise with good diabetes control. However, retinal cells that have been permanently damaged cannot be repaired, so early treatment is the best way to protect vision." },
    { type: "heading", text: "What Can Improve?" },
    { type: "h3", text: "Macular edema" },
    { type: "para", text: "Swelling in the central retina often reduces with injections or laser. Many patients see clearer vision after treatment, especially when it starts early." },
    { type: "h3", text: "Bleeding in the eye" },
    { type: "para", text: "A vitreous hemorrhage may clear on its own over weeks, or be removed with vitrectomy surgery." },
    { type: "h3", text: "Early vessel changes" },
    { type: "para", text: "Some microaneurysms and small bleeds may lessen when diabetes is better controlled." },
    { type: "h3", text: "Abnormal new vessels" },
    { type: "para", text: "Laser and injections can make new vessels shrink or stop growing." },
    { type: "heading", text: "What Usually Cannot Be Reversed?" },
    { type: "item", text: "Areas of retina that have lost blood supply for a long time" },
    { type: "item", text: "Scar tissue and long-standing retinal damage" },
    { type: "item", text: "Vision loss from long-standing macular swelling" },
    { type: "item", text: "Damage from retinal detachment that was not treated in time" },
    { type: "item", text: "Optic nerve damage from neovascular glaucoma" },
    { type: "heading", text: "Why Does Early Treatment Matter?" },
    { type: "para", text: "The retina is nerve tissue, similar to brain tissue. Once its cells die, they do not grow back. Treating swelling and abnormal vessels before they cause lasting damage gives the best chance of keeping good vision. Many people who are treated on time keep useful vision for life." },
    { type: "heading", text: "What Can You Do to Protect Your Eyes?" },
    { type: "item", text: "Keep blood sugar in the target range advised by your doctor" },
    { type: "item", text: "Control blood pressure and cholesterol" },
    { type: "item", text: "Stop smoking" },
    { type: "item", text: "Take prescribed medicines regularly" },
    { type: "item", text: "Stay active and eat balanced meals" },
    { type: "item", text: "Get dilated eye checks at least once a year, or as advised" },
    { type: "item", text: "Report sudden blur, floaters or dark patches immediately" },
    { type: "heading", text: "A Note on Rapid Sugar Changes" },
    { type: "para", text: "In some people, a very fast drop in blood sugar after starting intensive treatment can temporarily worsen retinopathy. This is not a reason to avoid good control. It is a reason to have your eyes checked when diabetes treatment changes significantly." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Diabetic retinopathy is usually controlled, not cured." },
    { type: "item", text: "Macular swelling and bleeding can often improve." },
    { type: "item", text: "Permanent retinal damage cannot be reversed." },
    { type: "item", text: "Early treatment saves the most vision." },
    { type: "item", text: "Diabetes control and regular eye checks are essential." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Hearing that damage cannot be fully reversed can feel discouraging, but it also shows why acting now matters. With timely care, most people with diabetes avoid serious vision loss. For a retina review and treatment plan, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/), an ophthalmologist at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Can good sugar control reverse diabetic retinopathy?",
        a: [
          { type: "para", text: "Good sugar control can slow progression and may help some early changes settle. It cannot reverse advanced damage. Combining diabetes control with regular eye checks and timely treatment gives the best long-term outcome." },
        ],
      },
      {
        q: "Will my vision improve after injections?",
        a: [
          { type: "para", text: "Many people with diabetic macular edema see some improvement after injections, especially if treated early. Results depend on how long the swelling was present and how healthy the retina is. Your doctor will track progress with scans." },
        ],
      },
      {
        q: "Is vision loss from diabetes permanent?",
        a: [
          { type: "para", text: "It can be, if retinal cells or the optic nerve are permanently damaged. Some vision loss, such as from bleeding or swelling, may improve with treatment. Early care gives the best chance of recovery." },
        ],
      },
      {
        q: "Can diabetic retinopathy come back after treatment?",
        a: [
          { type: "para", text: "Yes. Diabetes is a lifelong condition, so retinopathy can worsen again. Regular follow-ups help catch new swelling or vessel growth early, before it affects vision." },
        ],
      },
      {
        q: "Do Ayurvedic or herbal remedies cure diabetic retinopathy?",
        a: [
          { type: "para", text: "There is no scientific evidence that herbal remedies cure diabetic retinopathy. Relying on them alone can delay effective treatment. Always discuss supplements with your doctor and keep up with proven eye care." },
        ],
      },
      {
        q: "Can diabetic retinopathy be prevented?",
        a: [
          { type: "para", text: "The risk can be greatly reduced with good control of sugar, blood pressure and cholesterol, healthy habits and regular eye checks. Early detection allows treatment before vision is affected." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: What is diabetic retinopathy?](https://www.aao.org/eye-health/diseases/what-is-diabetic-retinopathy)" },
    { type: "item", text: "[NHS: Diabetic retinopathy](https://www.nhs.uk/conditions/diabetic-retinopathy/)" },
  ];
