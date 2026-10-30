import type { BlogBlock } from "@/content/blog-bodies";

// Article 2.4 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "The eye makes fluid all the time and drains it through a narrow channel called the drainage angle. In an attack, the iris (the coloured ring around the pupil) swings forward and covers that channel. Fluid gets trapped, pressure climbs quickly, and the optic nerve, which carries images to the brain, is put under strain. The sooner the pressure is brought down, the better the chance of protecting vision." },
      ],
    },
    { type: "para", text: "An acute glaucoma attack, medically known as acute angle-closure glaucoma, is a sudden rise in eye pressure that can damage the optic nerve within hours. It typically begins with severe pain in one eye, blurred vision, halos around lights and a red eye, often with nausea or vomiting. If that sounds like what you or a family member is feeling right now, go to an eye emergency department today. This is one of the few eye problems where hours matter." },
    { type: "heading", text: "When Should I Go to Emergency Eye Care?" },
    { type: "para", text: "Sudden pain in one eye, together with any of the following, needs urgent attention." },
    { type: "item", text: "Vision that has turned blurred or hazy within a short time" },
    { type: "item", text: "Rainbow-coloured rings around lights" },
    { type: "item", text: "A red eye that feels hard to the touch" },
    { type: "item", text: "Pain spreading to the brow or temple" },
    { type: "item", text: "Nausea or vomiting alongside the eye pain" },
    { type: "para", text: "Ask someone to take you to the hospital instead of driving yourself. Waiting for the morning, or trying home remedies, only costs time, because nothing at home can lower eye pressure." },
    { type: "heading", text: "Why Does an Acute Glaucoma Attack Happen?" },
    { type: "para", text: "Some eyes are simply built with a tight gap between the iris and the cornea, the clear window at the front. In dim light the pupil widens and the iris bunches up, and in a narrow eye that can be enough to fold it over the drainage angle. Many patients tell us it started in the evening, or in a dark room such as a cinema." },
    { type: "para", text: "Narrow angles are more common after 40, in farsighted people, and in families where a relative has had angle-closure glaucoma. Most people with narrow angles feel completely well. They only find out during an eye exam, or during an attack." },
    { type: "para", text: "Certain medicines can tip a susceptible eye over the edge. Some dilating eye drops and some cold, allergy and antidepressant tablets are examples. For most people they are perfectly safe, so do not stop a prescribed medicine on your own. Simply tell your doctor and pharmacist if you have ever been told your angles are narrow." },
    { type: "heading", text: "Is It a Migraine, Pink Eye or a Glaucoma Attack?" },
    { type: "para", text: "This is the confusion we hear most. People often put it down to a migraine, a sinus problem or a bad night's sleep and wait it out." },
    { type: "para", text: "A migraine causes headache and light sensitivity, sometimes with zigzag lines in vision, but the eye itself looks and feels normal. Pink eye (conjunctivitis) leaves the eye red, gritty and watery, though vision usually stays clear. In an acute attack the pain is severe, the cornea can look cloudy, lights have halos, the pupil stays at a middle size, and the eye feels firm." },
    { type: "para", text: "Only an examination can separate them. If you cannot tell, treat it as urgent. A check that turns out to be a migraine costs you an afternoon." },
    { type: "heading", text: "Can There Be Milder Episodes Before a Full Attack?" },
    { type: "para", text: "Yes, and they are easy to miss. Some people notice halos around lights in the evening, a dull ache behind one eye, or blurring that clears after sleep or in bright light. It gets blamed on tiredness or too much screen time." },
    { type: "para", text: "These brief episodes are worth an eye examination soon. If the drainage angle is narrow, a simple laser can often prevent a full attack. If the symptoms turn severe, treat it as an emergency." },
    { type: "heading", text: "What Happens at the Hospital?" },
    { type: "para", text: "Your eye pressure is measured first (tonometry), and the front of the eye is examined under a slit lamp, a microscope with a bright light. Once the cornea is clear enough, a special lens lets the doctor look directly at the drainage angle." },
    { type: "para", text: "Treatment usually follows two steps. Pressure is brought down with eye drops, tablets and sometimes an intravenous medicine. Then a laser peripheral iridotomy makes a tiny opening in the iris, giving fluid a way around the blocked angle. It is generally a short procedure and needs no incision." },
    { type: "para", text: "The other eye is checked as well, because it usually has the same narrow build. Many ophthalmologists recommend a preventive laser there too. After that, follow-up visits look at the optic nerve and visual field, and some people need long-term drops or further treatment. The plan depends on the individual eye." },
    { type: "heading", text: "Will My Vision Recover?" },
    { type: "para", text: "It depends on how high the pressure rose and how long it stayed high. Many people keep useful vision when treated quickly. Nerve damage that has already happened cannot be reversed, and no doctor can promise an outcome in advance. That is the real reason we stress speed." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "An acute attack is a sudden pressure rise caused by a blocked drainage angle." },
    { type: "item", text: "Severe eye pain with blurred vision, halos, redness and nausea is an emergency." },
    { type: "item", text: "Home remedies and waiting overnight are not safe substitutes for treatment." },
    { type: "item", text: "Brief episodes of halos or aching deserve an eye examination soon." },
    { type: "item", text: "Treatment lowers the pressure first, then a laser iridotomy reduces the chance of a repeat attack." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "An acute attack is frightening, but it is treatable, and quick action makes a real difference to what can be saved. If you are over 40 and farsighted, or glaucoma runs in your family, ask for a drainage angle check at your next eye exam. The ophthalmologists at [Mungale Eye Hospital](/contact-us/) in Vadodara evaluate narrow angles and treat angle-closure glaucoma. To understand how glaucoma develops more broadly, read our [complete guide to glaucoma symptoms](/blog/glaucoma-symptoms-causes-treatment/), causes, tests and treatment." },
    { type: "para", text: "This article is general information and cannot replace an in-person examination by a qualified ophthalmologist. If you have severe eye pain or a sudden change in vision, seek emergency care now." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "How long can I wait before treating an acute glaucoma attack?",
        a: [
          { type: "para", text: "You should not wait at all. High pressure can begin damaging the optic nerve within hours, and every extra hour adds to the risk. Go to an eye emergency department as soon as severe pain, blurred vision and halos appear together, and take someone with you if you can." },
        ],
      },
      {
        q: "Can an acute glaucoma attack go away on its own?",
        a: [
          { type: "para", text: "The pain may ease for a while, for instance when the pupil narrows in bright light, but the blockage is still there. Another attack is likely, and damage can continue quietly in between. Any suspected attack needs an eye examination, even if you feel better." },
        ],
      },
      {
        q: "Is an acute glaucoma attack the same as chronic glaucoma?",
        a: [
          { type: "para", text: "No. Chronic open-angle glaucoma develops slowly and usually causes no pain at all. An acute attack arrives suddenly and hurts because the drainage angle closes quickly. Both can injure the optic nerve, but they feel very different and call for different levels of urgency." },
        ],
      },
      {
        q: "Does a laser iridotomy hurt?",
        a: [
          { type: "para", text: "Numbing drops are used beforehand, and most people notice only mild pressure or flashes of light. Some have slight blurring or discomfort for a few hours afterwards. Your ophthalmologist will explain what to expect and prescribe drops if you need them." },
        ],
      },
      {
        q: "Can an acute glaucoma attack be prevented?",
        a: [
          { type: "para", text: "When an eye examination shows narrow angles, a preventive laser iridotomy can lower the risk considerably. Regular eye exams after 40, including a check of the drainage angle, help find narrow angles early. Mention any family history before you have dilating drops." },
        ],
      },
      {
        q: "Which medicines can trigger an attack?",
        a: [
          { type: "para", text: "In people with narrow angles, some dilating eye drops and certain cold, allergy and antidepressant medicines may bring one on. That does not make them unsafe for everyone. Keep taking prescribed medicines and discuss your eye history with your doctor." },
        ],
      },
      {
        q: "Does the other eye need treatment too?",
        a: [
          { type: "para", text: "Often it does. The second eye usually has a similar narrow structure and carries a similar risk. Your ophthalmologist will examine it and may suggest a preventive laser iridotomy." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: What is glaucoma?](https://www.aao.org/eye-health/diseases/what-is-glaucoma)" },
    { type: "item", text: "[NEI: Glaucoma](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/glaucoma)" },
  ];
