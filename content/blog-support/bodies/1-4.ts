import type { BlogBlock } from "@/content/blog-bodies";

// Article 1.4 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "How long does cataract surgery recovery take? Vision often improves within the first few days, and light activities like reading or watching television are usually possible early. Healing carries on for roughly four to six weeks, after which a final glasses prescription is normally given. Swimming, heavy lifting and hard exercise are held back longer." },
      ],
    },
    { type: "para", text: "Most people notice clearer vision within a day or two of cataract surgery, but the eye needs about four to six weeks to heal completely. The pace varies from person to person, and your surgeon's instructions always come before any general guide, including this one." },
    { type: "para", text: "Patients tend to ask the same thing at the follow-up visit. \"Can I do this now?\" So here is a week-by-week picture of what is usually fine, what should wait and what deserves a phone call." },
    { type: "heading", text: "What Is Normal in the First 24 to 48 Hours?" },
    { type: "para", text: "Expect the eye to feel gritty, watery or a little sore. Daylight may seem harsh, and vision can be blurry or change from one hour to the next. None of this is unusual. You may go home with a shield or pad over the eye." },
    { type: "para", text: "Rest, wear the shield as advised (yes, for sleeping too) and begin your drops on time. They protect against infection and calm inflammation, so a missed dose matters more than it seems. A phone alarm or a written chart on the fridge helps, especially if a family member is managing the drops for you." },
    { type: "heading", text: "What Can You Do in Week 1?" },
    { type: "para", text: "Keep things gentle. Short walks, television, a little reading and light phone use are all generally fine, as long as the eye doesn't feel tired. Your first review usually happens within a day or two of surgery." },
    { type: "para", text: "The list of things to avoid is short but strict. Don't rub or press the eye. Don't lift anything heavy or strain. Keep soap, shampoo and tap water out of it, which makes the first head bath a two-person job in many homes. Stay away from dust, smoke and strong fumes, including incense and the sizzle of a hot tadka. Skip eye makeup, and don't drive until your surgeon says your vision is good enough." },
    { type: "heading", text: "What Changes in Week 2?" },
    { type: "para", text: "By now the redness and scratchy feeling have usually faded, and ordinary tasks feel easier. Some people return to desk work if their surgeon agrees." },
    { type: "para", text: "Vision can still be a bit unsettled. Glare, halos around lights or a slight change between morning and evening clarity are common while the eye adjusts. Keep using your drops. Surgeons often reduce them in steps, and stopping early because the eye feels fine is a common mistake. Hold off on ordering new glasses for now." },
    { type: "heading", text: "What Can You Do in Weeks 3 and 4?" },
    { type: "para", text: "Most people are close to their routine again. Driving can restart once your vision meets the legal standard and your ophthalmologist gives the go-ahead. Walking and other light exercise are normally allowed." },
    { type: "para", text: "Swimming, weight training and contact sports still need clearance from your surgeon. Dryness is a frequent complaint in this stretch. If the eye feels scratchy by evening, ask whether lubricating drops would suit you." },
    { type: "heading", text: "What Happens at Weeks 5 to 6 and Beyond?" },
    { type: "para", text: "At this stage the eye is generally stable, so your surgeon can measure your vision and write a glasses prescription. Even with a new intraocular lens, the artificial lens placed during surgery, some people still need glasses for certain tasks. That depends on the lens chosen and the health of the eye." },
    { type: "para", text: "Please keep your follow-up appointments even when vision feels excellent. If things turn hazy again months or years later, the cause may be posterior capsule opacification, a clouding of the membrane that holds the lens. A brief YAG laser procedure can often treat it. The cataract itself does not return." },
    { type: "heading", text: "Which Symptoms Need Urgent Attention at Any Stage?" },
    { type: "para", text: "Mild discomfort is part of healing. What matters is the direction. A symptom that keeps getting worse is the one to act on. Contact your surgeon or go to an emergency eye service if you notice any of these." },
    { type: "item", text: "Sudden loss or drop in vision" },
    { type: "item", text: "Severe or increasing eye pain" },
    { type: "item", text: "Redness that is spreading or deepening" },
    { type: "item", text: "A curtain or shadow across your vision" },
    { type: "item", text: "A sudden burst of flashes or floaters" },
    { type: "item", text: "Swelling or discharge from the eye" },
    { type: "para", text: "Don't wait for your next scheduled visit if any of these appear." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Vision often improves in days, while full healing takes about four to six weeks." },
    { type: "item", text: "Use every prescribed drop on schedule and keep your hands away from the eye." },
    { type: "item", text: "Light activity is fine early on. Swimming and hard exercise come later." },
    { type: "item", text: "Wait for your surgeon's approval before driving or buying new glasses." },
    { type: "item", text: "Worsening pain, redness or sudden vision change needs same-day attention." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Recovery after cataract surgery is mostly uneventful. It rewards routine, patience and turning up for follow-up visits. This article is general information and cannot replace an in-person examination, so lean on your ophthalmologist for advice that fits your eye. For the wider picture on symptoms, timing, lens options and the procedure itself, read our [complete guide to cataract surgery](/blog/cataract-surgery-guide/). If you have questions about your own recovery, the team at [Mungale Eye Hospital](/contact-us/) in Vadodara is happy to talk them through." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "When can I drive after cataract surgery?",
        a: [
          { type: "para", text: "There is no fixed number of days. What matters is how well you see. Your ophthalmologist checks your vision at a follow-up visit and tells you when driving is safe. Until then, stay off the road, especially at night, since glare and changing vision make distances harder to judge and slow your reactions." },
        ],
      },
      {
        q: "Can I watch TV or use my phone after cataract surgery?",
        a: [
          { type: "para", text: "Yes, in most cases. Screens do not harm a healing eye. Your vision may be blurry or tire quickly at first, so take breaks. If your eyes feel dry or strained, blink often and ask your surgeon whether lubricating drops are right for you." },
        ],
      },
      {
        q: "Why is my vision still blurry after cataract surgery?",
        a: [
          { type: "para", text: "Blurriness is common while mild swelling settles and the eye adjusts to the new lens. It usually eases over days to weeks. If it suddenly gets worse, or comes with pain or growing redness, call your ophthalmologist promptly instead of waiting to see what happens." },
        ],
      },
      {
        q: "When can I wash my hair or face after cataract surgery?",
        a: [
          { type: "para", text: "Most surgeons allow gentle washing soon after surgery, as long as water and soap stay out of the eye. Your surgeon will give exact timing and technique. Many people find it easier to wash their hair with the head tilted back, or to get a family member to help." },
        ],
      },
      {
        q: "How should I sleep after cataract surgery?",
        a: [
          { type: "para", text: "Sleep on your back or on the side opposite the operated eye, and wear the protective shield at night for as long as your surgeon says. This prevents accidental rubbing or pressure while you sleep, a common cause of irritation in the early days." },
        ],
      },
      {
        q: "When can I get new glasses after cataract surgery?",
        a: [
          { type: "para", text: "The eye needs a few weeks to settle before a reliable prescription can be measured. Many surgeons advise waiting around four to six weeks. Ordering sooner can leave you with glasses that no longer fit once healing is complete, so wait for your doctor's approval." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: Cataract surgery](https://www.aao.org/eye-health/diseases/what-is-cataract-surgery)" },
    { type: "item", text: "[NEI: Cataracts](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/cataracts)" },
    { type: "item", text: "[NHS: Cataract surgery](https://www.nhs.uk/conditions/cataract-surgery/)" },
  ];
