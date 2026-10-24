import type { SupportArticleSource } from "@/content/blog-support";

// Article 2.5 - Glaucoma cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleSource = {
  number: "2.5",
  slug: "can-glaucoma-be-cured",
  title: "Can Glaucoma Be Cured? What Treatment Can and Cannot Restore",
  seoTitle: "Can Glaucoma Be Cured? | Mungale Eye Hospital",
  metaDescription: "Can glaucoma be cured? Not yet, but it can be controlled. Learn what treatment protects, what it cannot restore, and how to keep your remaining vision stable.",
  topics: ["glaucoma"],
  cluster: "glaucoma",
  pillarSlug: "glaucoma-symptoms-causes-treatment",
  order: 5,
  treatmentPage: "glaucoma-treatments",
  reviewedBy: "sachin",
  reviewConfirmed: true,
  date: "2026-10-04",
  cover: {
    src: "/images/blog/can-glaucoma-be-cured-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: ophthalmologist, seen from behind and not identifiable, explains an optic nerve scan on a monitor to an older patient seated comfortably beside.",
  },
  blocks: [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "There is no cure for glaucoma and no way to reverse the damage it has already caused. Eye drops, laser treatment and surgery all work by lowering pressure inside the eye, which slows or stops further nerve damage. The goal is to protect the vision you have today, which is why an early diagnosis matters so much." },
      ],
    },
    { type: "para", text: "Glaucoma cannot be cured at present. The optic nerve fibres it damages do not grow back, and no drop, laser or operation can return vision that has already been lost. What treatment can do is hold the disease where it is, and in most patients that is enough to keep useful sight for life." },
    { type: "heading", text: "Why Can't Glaucoma Damage Be Reversed?" },
    { type: "para", text: "The optic nerve is a bundle of about a million fibres that carry signals from the retina, the light-sensing layer at the back of the eye, to the brain. Glaucoma injures these fibres, usually because the pressure inside the eye is more than that particular nerve can tolerate." },
    { type: "para", text: "Once a fibre dies, the body doesn't replace it. Nerve tissue in the eye has very little capacity to regenerate. This is also the reason glaucoma so often goes unnoticed. The brain smooths over small gaps in vision, and the first areas to fade are at the outer edges, where few people think to check. By the time a patient senses something is off, a good portion of the nerve may already be affected." },
    { type: "heading", text: "What Can Glaucoma Treatment Actually Do?" },
    { type: "para", text: "It controls the one factor doctors can change, which is eye pressure. The lower and steadier that pressure stays, the less strain the remaining fibres are under." },
    { type: "para", text: "For most patients, treatment begins with prescription eye drops that either reduce the fluid the eye produces or help it drain. Laser treatment can improve drainage or open a narrow drainage angle. When those aren't enough, surgery such as minimally invasive glaucoma surgery (MIGS), trabeculectomy or a drainage implant may be discussed. Which one suits you depends on the type of glaucoma and how far it has progressed." },
    { type: "para", text: "Success tends to look uneventful. If your visual field tests and optic nerve scans come back the same at each visit, the treatment is working, even though you feel no difference." },
    { type: "heading", text: "Can Any Vision Come Back After Treatment?" },
    { type: "para", text: "Rarely, and only in specific situations." },
    { type: "para", text: "If pressure rises suddenly, as in acute angle-closure glaucoma, part of the blur comes from swelling of the cornea. Once pressure is brought down quickly, some of that clarity can return. How much depends on how long the pressure stayed high." },
    { type: "para", text: "Cataract is another common companion of glaucoma, particularly in older patients. Removing a cataract can make everything look brighter and sharper, but the optic nerve stays as it was. Your doctor can tell you how much of your blur is due to each problem." },
    { type: "para", text: "Researchers are studying ways to protect or repair the optic nerve, but nothing has reached routine care yet. If a supplement, device or clinic promises to reverse glaucoma, treat that with caution." },
    { type: "heading", text: "What Helps Treatment Work in Daily Life?" },
    { type: "para", text: "In clinic, the same few things come up again and again." },
    { type: "para", text: "Patients often stop their drops once they feel fine, or once the pressure reading looks good at a check-up. A good reading usually means the drops are doing their job. Stopping them lets pressure drift back up, quietly and without symptoms." },
    { type: "para", text: "If you use more than one type of drop, leave a gap of about five minutes between them so the second doesn't wash out the first, and close your eyes gently for a minute after each. Bring your bottles to appointments so your doctor can see exactly what you're using. If a drop stings or leaves your eyes dry, say so. There is often another option, and a drop you can tolerate is one you'll actually use." },
    { type: "para", text: "Please also tell your close relatives. Glaucoma runs in families, so siblings and grown children should have their eyes examined, especially after the age of 40." },
    { type: "para", text: "Sudden severe eye pain, sudden blurred vision, halos around lights, or a red, hard eye with nausea needs emergency eye care immediately. These can be signs of acute angle-closure glaucoma." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Glaucoma has no cure, but it can usually be controlled." },
    { type: "item", text: "Lost optic nerve fibres do not regenerate, and no treatment restores vision already lost." },
    { type: "item", text: "Lowering eye pressure is the proven way to slow or stop further damage." },
    { type: "item", text: "Steady test results mean treatment is working, even if you notice nothing." },
    { type: "item", text: "Never stop or change your drops without speaking to your ophthalmologist." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Hearing that a condition has no cure is difficult, especially when it concerns your eyes. A glaucoma diagnosis does not mean you will lose your sight, though. With early detection and steady follow-up, most people keep useful vision throughout their lives. For a fuller picture of the condition, read our [complete guide](/blog/glaucoma-symptoms-causes-treatment/), Glaucoma: Symptoms, Causes, [Eye Pressure Tests & Treatment](/blog/glaucoma-symptoms-causes-treatment/)." },
    { type: "para", text: "This article is general information and cannot replace an in-person examination. At [Mungale Eye Hospital](/contact-us/) in Vadodara, our ophthalmologists can assess your optic nerve, eye pressure and visual field, and plan a monitoring schedule that suits you. You are welcome to [book a consultation](/contact-us/#book)." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Can glaucoma be cured completely?",
        a: [
          { type: "para", text: "No. There is currently no treatment that reverses glaucoma or restores lost vision. Doctors can lower eye pressure to slow or stop further optic nerve damage. When glaucoma is found early and followed up regularly, most people keep useful vision for life." },
        ],
      },
      {
        q: "Can lost vision from glaucoma be restored?",
        a: [
          { type: "para", text: "Generally not, because optic nerve fibres that have died do not regenerate. Some temporary blur, such as corneal swelling after a sudden pressure spike, may clear once pressure comes down. Treatment is meant to preserve the sight you still have." },
        ],
      },
      {
        q: "If glaucoma cannot be cured, why bother with treatment?",
        a: [
          { type: "para", text: "Left alone, glaucoma usually keeps progressing, and every bit of lost vision is permanent. Lowering eye pressure slows that damage or halts it. Because the condition is often painless, you can't feel the benefit, but it is real and measurable at follow-up visits." },
        ],
      },
      {
        q: "Does glaucoma surgery cure the disease?",
        a: [
          { type: "para", text: "No. Surgery improves how fluid drains from the eye and so lowers pressure, but it doesn't repair existing damage or remove the condition. Many patients still need regular monitoring afterwards, and some continue with drops. Your ophthalmologist will explain what to expect in your case." },
        ],
      },
      {
        q: "Will I go blind if I have glaucoma?",
        a: [
          { type: "para", text: "Most people with glaucoma do not go blind, particularly when it is caught early and treated consistently. The risk is higher when diagnosis is late or follow-up visits are missed. Regular pressure checks, optic nerve scans and visual field tests keep the disease closely watched." },
        ],
      },
      {
        q: "Can I stop my eye drops once my pressure is normal?",
        a: [
          { type: "para", text: "No. A normal reading usually means the drops are working, not that glaucoma has gone away. Stopping them can let pressure climb again and harm the nerve without any warning symptoms. Any change should be made together with your ophthalmologist." },
        ],
      },
      {
        q: "How do I know my glaucoma treatment is working?",
        a: [
          { type: "para", text: "Glaucoma is usually painless, so how your eyes feel won't tell you. Your doctor looks for steady eye pressure and unchanged results on visual field tests and OCT scans over time. Results that stay the same across visits are the clearest sign that treatment is working." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: What is glaucoma?](https://www.aao.org/eye-health/diseases/what-is-glaucoma)" },
    { type: "item", text: "[NEI: Glaucoma](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/glaucoma)" },
  ],
  keepReading: [
    { label: "Glaucoma: Symptoms, Causes, Eye Pressure Tests & Treatment", target: "/blog/glaucoma-symptoms-causes-treatment/" },
    { label: "Glaucoma Eye Tests Explained: Tonometry, OCT, Visual Field", target: "link:2.2" },
    { label: "Glaucoma Treatment Options: Drops, Laser or Surgery?", target: "link:2.3" },
    { label: "Glaucoma care at Mungale Eye Hospital", target: "/treatments/glaucoma-treatments/" },
  ],
};
