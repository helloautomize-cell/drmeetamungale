import type { SupportArticleSource } from "@/content/blog-support";

// Article 1.1 — cataract cluster. Body text is verbatim from the owner;
// [label](link:N) sibling links resolve in the registry compiler.
// Inline **bold** lead-ins in the seven signs render as plain text
// (the renderer has no inline bold).
export const article: SupportArticleSource = {
  number: "1.1",
  slug: "when-cataract-needs-surgery-signs",
  title: "When Does a Cataract Need Surgery? 7 Signs Not to Ignore",
  seoTitle: "When Does a Cataract Need Surgery? | Mungale Eye Hospital",
  metaDescription:
    "Wondering when a cataract needs surgery? Learn seven everyday signs that point to an eye check, and how ophthalmologists decide if surgery is the right step.",
  topics: ["cataract"],
  cluster: "cataract",
  pillarSlug: "cataract-surgery-guide",
  order: 1,
  treatmentPage: "cataract-surgery",
  reviewedBy: ["sachin", "meeta"],
  reviewConfirmed: false,
  date: "2026-10-17",
  cover: {
    src: "/images/blog/when-cataract-needs-surgery-signs-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: an older man having his eyes examined at a slit-lamp unit by a doctor in a white coat, with seven numbered insets showing everyday vision problems.",
  },
  blocks: [
    {
      type: "para",
      text: "A cataract needs surgery when [clouding of the eye's natural lens](/blog/cataract-surgery-guide/) begins to limit what you can do and stronger glasses no longer make up the difference. It is not decided by age, or by how dense the cataract looks. Cataracts build slowly, and the better eye often covers for the weaker one, so many people adapt for years without realising how much they have lost. These seven signs tend to show up in everyday routines.",
    },
    { type: "heading", text: "Quick Answer" },
    {
      type: "para",
      text: "Surgery is usually considered when blurred vision, glare or poor night vision interferes with your routine, when new glasses stop helping, or when the cataract blocks the view a doctor needs to manage another eye problem. A mild cataract can often be watched with regular reviews. Only an eye examination can confirm the cause.",
    },
    { type: "heading", text: "What Are the 7 Signs a Cataract May Need Surgery?" },
    {
      type: "para",
      text: "No single sign settles the matter. Two or three together are a good reason to book a visit.",
    },
    {
      type: "item",
      text: "**Your glasses never feel quite right.** The prescription keeps needing a change, and the new pair still does not sharpen things.",
    },
    {
      type: "item",
      text: "**Night driving has become stressful.** Headlights bloom or sit inside halos, which are rings of light. A cloudy lens scatters light this way, though dry eye and corneal problems can do the same, so a check beats guessing.",
    },
    {
      type: "item",
      text: "**Daylight feels harsh.** Sun on the road or a bright phone screen may make you squint or reach for sunglasses more often.",
    },
    {
      type: "item",
      text: "**Reading takes effort.** Print looks faded and you want a brighter lamp. Because the problem is lost contrast rather than size, a magnifier may not help as much as you expect.",
    },
    {
      type: "item",
      text: "**Colours have lost their punch.** Whites can look creamy or yellow. Cover one eye, then the other, and look at something white. If the two eyes disagree, mention it.",
    },
    {
      type: "item",
      text: "**You are working around your eyes.** You avoid evening drives, ask someone to read the menu, misjudge a step or recognise a neighbour only when they are close.",
    },
    {
      type: "item",
      text: "**A ghost image in one eye.** Seeing a double or shadowed image with just one eye open can happen with a cataract and should be reported.",
    },
    {
      type: "para",
      text: "One more point worth knowing. In some people, a developing cataract temporarily improves near vision, so reading glasses seem less necessary. It can feel like good news, but it often fades.",
    },
    { type: "heading", text: "How Does a Doctor Decide Whether It Is Time for Surgery?" },
    {
      type: "para",
      text: "The ophthalmologist (a medical doctor who specialises in eye care) is really asking two questions. Does the cataract explain your complaints, and would removing it help? To answer them, your sight is measured with the best possible glasses, and the lens, cornea, retina and optic nerve are examined, usually after drops widen the pupil. Conditions such as macular disease or glaucoma can limit the result, so they are checked first.",
    },
    {
      type: "para",
      text: "Surgery tends to come up when work, reading, driving or moving safely around the house has become difficult, or when a dense cataract hides the view of the retina in someone with diabetic eye disease or glaucoma. If you are seeing comfortably, regular reviews are a sound plan. Two people with similar-looking cataracts may be advised differently.",
    },
    { type: "heading", text: "When Is It an Emergency?" },
    {
      type: "para",
      text: "Cataracts creep up slowly. Sudden loss of vision, severe eye pain, a burst of new floaters or flashes of light, or a dark curtain across part of your sight do not fit that pattern. Get medical help straight away rather than waiting for a routine slot.",
    },
    { type: "heading", text: "Key Takeaways" },
    {
      type: "item",
      text: "Timing depends on how your vision affects what you do, not on a particular age.",
    },
    {
      type: "item",
      text: "Changing glasses, glare, poor night vision, dull colours and giving up usual activities are the common signs.",
    },
    {
      type: "item",
      text: "Other conditions can look similar, so only an examination can say what is going on.",
    },
    { type: "heading", text: "Final Thoughts" },
    {
      type: "para",
      text: "For most people, a cataract does not call for a hurried decision, so take your time and ask questions. At Mungale Eye Hospital in Kothi, Vadodara, [Dr. Sachin Mungale and Dr. Meeta Mungale](/doctors/) can examine your eyes and tell you whether surgery is needed now or can wait. This article is general information and no substitute for an examination by a qualified ophthalmologist. Our complete guide to cataract surgery covers [lens options](link:1.3), the procedure and [recovery](link:1.4).",
    },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
        {
          q: "What are the first signs that a cataract may need surgery?",
          a: [
            {
              type: "para",
              text: "Most people first notice haziness, glare from headlights or sunlight, poorer vision in dim light, or glasses that never feel quite right. When these start to affect reading, driving or getting around, an eye check will show whether a cataract is responsible and whether surgery should be discussed.",
            },
          ],
        },
        {
          q: "Is there a right age for cataract surgery?",
          a: [
            {
              type: "para",
              text: "There isn't one. Cataracts become more common with age, but doctors decide on timing by looking at how well you see, how much it bothers you and the health of the rest of the eye. Some people need surgery earlier, while others are monitored for years.",
            },
          ],
        },
        {
          q: "Can stronger glasses fix a cataract?",
          a: [
            {
              type: "para",
              text: "Not once the lens itself is cloudy. Glasses correct focusing errors, and a new prescription can sharpen things for a while in the early stages. They cannot clear a clouded lens, so when blurring continues, your ophthalmologist may talk to you about surgery.",
            },
          ],
        },
        {
          q: "Is it harmful to delay cataract surgery?",
          a: [
            {
              type: "para",
              text: "With a mild cataract and comfortable vision, waiting under regular review is often reasonable. A very advanced cataract can make surgery more complicated, which is why follow-up visits matter. Your doctor can tell you how often to return based on what they see in your eyes.",
            },
          ],
        },
        {
          q: "Why do I see halos around lights at night?",
          a: [
            {
              type: "para",
              text: "A cloudy lens scatters light, so halos around headlights are a common cataract complaint. Dry eye, corneal conditions and uncorrected glasses power can produce them as well. If halos are new or getting worse, get your eyes checked rather than assuming the cause.",
            },
          ],
        },
        {
          q: "How often should I get my eyes checked if I have a mild cataract?",
          a: [
            {
              type: "para",
              text: "It varies. Many people are reviewed once or twice a year, but your ophthalmologist will set the schedule based on how fast your vision is changing and whether you have other eye conditions. Come back sooner if things get noticeably worse.",
            },
          ],
        },
      ],
    },
  ],
  keepReading: [
    { label: "Cataract surgery cost in Vadodara: what sets the price", target: "link:1.2" },
    { label: "Cataract lens types: which IOL is right for you", target: "link:1.3" },
    { label: "Cataract surgery recovery: week by week guide", target: "link:1.4" },
    { label: "Cataract surgery at Mungale Eye Hospital", target: "/treatments/cataract-surgery/" },
    { label: "Eye check-up after 40: tests, frequency and warning signs", target: "/blog/eye-checkup-after-forty-tests-frequency-warning-signs/" },
  ],
};
