import type { BlogBlock } from "@/content/blog-bodies";

// Article 10.5 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "See an eye doctor promptly for sudden vision loss, flashes of light, a shower of new floaters, a curtain over vision, eye pain with redness, double vision, halos with headache, eye injury, a white spot on the cornea or persistent blurring. Some of these are emergencies that need same-day care." },
      ],
    },
    { type: "para", text: "Your eyes often give early warnings. Knowing which symptoms matter can help protect your sight." },
    { type: "heading", text: "The Ten Warning Signs" },
    { type: "h3", text: "1. Sudden loss or blurring of vision" },
    { type: "para", text: "Needs emergency care." },
    { type: "h3", text: "2. Flashes of light" },
    { type: "para", text: "May signal a retinal problem." },
    { type: "h3", text: "3. New floaters, especially many at once" },
    { type: "para", text: "Can indicate a retinal tear." },
    { type: "h3", text: "4. A shadow or curtain over part of your vision" },
    { type: "para", text: "A sign of possible retinal detachment." },
    { type: "h3", text: "5. Severe eye pain with redness" },
    { type: "para", text: "May point to infection, glaucoma or inflammation." },
    { type: "h3", text: "6. Halos around lights with headache or nausea" },
    { type: "para", text: "Can be acute angle-closure glaucoma." },
    { type: "h3", text: "7. Double vision" },
    { type: "para", text: "Needs evaluation, especially if sudden." },
    { type: "h3", text: "8. Eye injury or chemical splash" },
    { type: "para", text: "Rinse immediately and seek care." },
    { type: "h3", text: "9. White or grey spot on the clear front of the eye" },
    { type: "para", text: "Could be a corneal ulcer." },
    { type: "h3", text: "10. Persistent blur, glare or gradual vision change" },
    { type: "para", text: "Often cataract, refractive change or retinal disease." },
    { type: "heading", text: "Emergency vs Soon" },
    { type: "item", text: "Same day: signs 1 to 6, 8 and 9" },
    { type: "item", text: "Within days: signs 7 and 10 if gradual" },
    { type: "heading", text: "What to Do" },
    { type: "item", text: "Do not rub the eye" },
    { type: "item", text: "Do not use leftover drops" },
    { type: "item", text: "Remove contact lenses" },
    { type: "item", text: "Go to an eye hospital promptly" },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Sudden changes need urgent care." },
    { type: "item", text: "Flashes, floaters and curtains can signal retinal problems." },
    { type: "item", text: "Pain with a white spot may be an ulcer." },
    { type: "item", text: "Avoid self-treatment." },
    { type: "item", text: "Early care protects vision." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "When in doubt, get it checked. For prompt [eye care](/blog/eye-checkup-after-forty-tests-frequency-warning-signs/), you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/) at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Are floaters always dangerous?",
        a: [
          { type: "para", text: "Occasional floaters are common, but a sudden increase needs examination." },
        ],
      },
      {
        q: "What if the problem goes away?",
        a: [
          { type: "para", text: "Still get checked, as some serious conditions can come and go." },
        ],
      },
      {
        q: "Can I wait until morning?",
        a: [
          { type: "para", text: "Not for sudden vision loss, a curtain over vision or severe pain." },
        ],
      },
      {
        q: "Is red eye an emergency?",
        a: [
          { type: "para", text: "Mild redness is usually not, but redness with pain or vision change needs urgent review." },
        ],
      },
      {
        q: "Should I use drops from the pharmacy?",
        a: [
          { type: "para", text: "Avoid it. Wrong drops can worsen some conditions." },
        ],
      },
      {
        q: "How should I rinse a chemical splash?",
        a: [
          { type: "para", text: "Rinse with clean water for several minutes and go to hospital." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: Eye exams 101](https://www.aao.org/eye-health/tips-prevention/eye-exams-101)" },
    { type: "item", text: "[NEI: Get a dilated eye exam](https://www.nei.nih.gov/learn-about-eye-health/healthy-vision/get-dilated-eye-exam)" },
  ];
