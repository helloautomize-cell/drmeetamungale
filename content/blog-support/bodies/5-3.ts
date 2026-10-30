import type { BlogBlock } from "@/content/blog-bodies";

// Article 5.3 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Temporary dry eye often resolves fully when the cause is fixed. Chronic dry eye is a long-term condition, similar to high blood pressure, that needs ongoing care. With proper diagnosis and regular treatment, most people stay comfortable and protect their eye surface." },
      ],
    },
    { type: "para", text: "It depends on the cause. Dry eye caused by a short-term trigger, such as a medicine, a long flight or recent eye surgery, can clear completely once that trigger is removed or healed. Chronic dry eye linked to age, hormones, oil gland problems or autoimmune disease usually cannot be cured, but it can be controlled very well with the right long-term plan." },
    { type: "heading", text: "Why Is Dry Eye Often Long-Term?" },
    { type: "para", text: "Dry eye is not just a lack of tears. It is a cycle of tear instability, surface stress and inflammation. Once this cycle starts, it tends to continue unless it is managed. Causes such as meibomian gland dysfunction, ageing and hormone changes do not go away on their own." },
    { type: "heading", text: "Which Types Can Clear Completely?" },
    { type: "item", text: "Dry eye from a temporary medicine, such as some antihistamines" },
    { type: "item", text: "Dryness after LASIK or cataract surgery, which often improves over months" },
    { type: "item", text: "Dry eye linked to poor screen habits that are corrected" },
    { type: "item", text: "Dry eye from an incomplete blink or lid issue that is treated" },
    { type: "heading", text: "Which Types Usually Need Ongoing Care?" },
    { type: "item", text: "Meibomian gland dysfunction, the most common type" },
    { type: "item", text: "Age-related dry eye, especially after menopause" },
    { type: "item", text: "Dry eye with Sjogren's syndrome, rheumatoid arthritis or thyroid disease" },
    { type: "item", text: "Dry eye in long-term contact lens users" },
    { type: "item", text: "Dry eye with diabetes" },
    { type: "heading", text: "What Does Long-Term Treatment Involve?" },
    { type: "h3", text: "Daily care" },
    { type: "para", text: "Lubricating drops, warm compresses and lid cleaning are often the base of treatment." },
    { type: "h3", text: "Treating inflammation" },
    { type: "para", text: "Some patients need anti-inflammatory drops for a period, under doctor supervision." },
    { type: "h3", text: "Protecting tears" },
    { type: "para", text: "Punctal plugs may help keep natural tears on the eye for longer in selected cases." },
    { type: "h3", text: "Lifestyle steps" },
    { type: "para", text: "Screen breaks, avoiding direct AC airflow, drinking enough water and protecting eyes from dust all help." },
    { type: "h3", text: "Treating linked conditions" },
    { type: "para", text: "Managing diabetes, thyroid disease or autoimmune disorders improves eye comfort too." },
    { type: "heading", text: "Why Do Symptoms Come Back?" },
    { type: "para", text: "Dry eye often flares with seasons, stress, travel or long work hours. Stopping treatment too early is a common reason symptoms return. Regular review helps adjust treatment before the surface is affected." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Dry eye from a temporary cause can clear completely." },
    { type: "item", text: "Chronic dry eye is controlled, not cured." },
    { type: "item", text: "Oil gland dysfunction is the most common cause." },
    { type: "item", text: "Consistent daily care prevents flare-ups." },
    { type: "item", text: "Regular eye reviews keep treatment on track." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Hearing that [dry eye](/blog/dry-eye-disease-causes-symptoms-treatment/) may be long-term can be disappointing, but control is very achievable. Most patients feel much better once the type of dry eye is identified and treated properly. For a structured dry eye assessment and plan, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/), an ophthalmologist at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Is dry eye a lifelong condition?",
        a: [
          { type: "para", text: "Not always. Short-term dry eye from a clear trigger can go away completely. Chronic dry eye linked to ageing, hormones or oil gland problems is usually long-term, but symptoms can be kept under good control." },
        ],
      },
      {
        q: "Can I stop eye drops once my eyes feel better?",
        a: [
          { type: "para", text: "Ask your doctor first. Lubricating drops can sometimes be reduced. Anti-inflammatory drops must be tapered as advised. Stopping all care suddenly often leads to symptoms returning within weeks." },
        ],
      },
      {
        q: "Does drinking more water cure dry eye?",
        a: [
          { type: "para", text: "Staying hydrated supports overall health and may help mild dryness, but it does not cure dry eye. Most cases involve the oil layer of tears or inflammation, which need targeted eye treatment." },
        ],
      },
      {
        q: "Do omega-3 supplements help dry eye?",
        a: [
          { type: "para", text: "Some people feel better with omega-3, but research results are mixed. They are not a replacement for eye treatment. Discuss with your doctor before starting supplements, especially if you take blood thinners." },
        ],
      },
      {
        q: "Can dry eye get worse with age?",
        a: [
          { type: "para", text: "Yes. Tear production and oil gland function usually decline with age, especially after menopause. Early treatment and regular care help slow this and keep the eyes comfortable." },
        ],
      },
      {
        q: "Is dry eye after LASIK permanent?",
        a: [
          { type: "para", text: "Usually not. Most people find dryness improves over a few months as corneal nerves heal. A few may have longer symptoms, especially if they had dry eye before surgery. Pre-surgery evaluation helps lower this risk." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[NEI: Dry eye](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/dry-eye)" },
    { type: "item", text: "[NHS: Dry eyes](https://www.nhs.uk/conditions/dry-eyes/)" },
  ];
