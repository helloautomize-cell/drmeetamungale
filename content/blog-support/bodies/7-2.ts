import type { BlogBlock } from "@/content/blog-bodies";

// Article 7.2 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Bacterial keratitis is often linked to contact lens misuse and usually progresses quickly. Fungal keratitis is common after injury with plant matter or soil, especially in farming areas of India, and tends to heal slowly. Viral keratitis, most often from the herpes simplex virus, can come back and may cause branching patterns on the cornea. A corneal scraping helps confirm the cause." },
      ],
    },
    { type: "para", text: "[Keratitis](/blog/corneal-ulcer-keratitis-symptoms-treatment/) means inflammation of the cornea, often caused by infection. Bacterial, fungal and viral keratitis can look similar at first, but they come from different germs and need different medicines. Using the wrong drop can make an infection worse, so finding the exact cause is a key part of treatment." },
    { type: "heading", text: "Why Does the Type Matter?" },
    { type: "item", text: "Antibiotics treat bacteria but not fungi or viruses" },
    { type: "item", text: "Antifungal drops are needed for fungal infection" },
    { type: "item", text: "Antiviral medicines are used for herpes keratitis" },
    { type: "item", text: "Steroid drops can worsen fungal and some viral infections" },
    { type: "para", text: "Choosing the right medicine early protects the cornea and vision." },
    { type: "heading", text: "Bacterial Keratitis" },
    { type: "h3", text: "Common causes" },
    { type: "para", text: "Contact lens overwear, sleeping in lenses, poor lens hygiene, eye injury and severe dry eye." },
    { type: "h3", text: "Typical features" },
    { type: "para", text: "Rapid onset of pain, redness, thick yellow or green discharge and a white or yellow spot on the cornea. It can worsen within a day or two." },
    { type: "h3", text: "Treatment" },
    { type: "para", text: "Intensive antibiotic drops, often every hour at first, then tapered as healing begins." },
    { type: "heading", text: "Fungal Keratitis" },
    { type: "h3", text: "Common causes" },
    { type: "para", text: "Injury from plant material, a twig, crop leaves, soil or vegetable matter. It is especially common in agricultural workers and in warm, humid climates. Overuse of steroid drops is another risk." },
    { type: "h3", text: "Typical features" },
    { type: "para", text: "Slower onset, a greyish-white spot with feathery or fluffy edges, and sometimes small satellite spots. Pain may seem less than the size of the ulcer suggests." },
    { type: "h3", text: "Treatment" },
    { type: "para", text: "Antifungal drops such as natamycin or voriconazole, often for several weeks. Some cases need oral medicines or surgery." },
    { type: "heading", text: "Viral Keratitis" },
    { type: "h3", text: "Common causes" },
    { type: "para", text: "Herpes simplex virus is the most common. Herpes zoster (shingles) can also affect the eye." },
    { type: "h3", text: "Typical features" },
    { type: "para", text: "Redness, watering, light sensitivity and blurred vision. On examination, the doctor may see a branching pattern called a dendritic ulcer. Episodes may recur, often with stress, fever or illness." },
    { type: "h3", text: "Treatment" },
    { type: "para", text: "Antiviral drops or tablets. Some patients need long-term preventive antiviral medicine to reduce recurrences." },
    { type: "heading", text: "How Do Doctors Tell Them Apart?" },
    { type: "para", text: "The doctor examines the eye with a slit lamp and dye. A corneal scraping may be sent for staining and culture to identify bacteria or fungi. In some cases, tests for viruses are added. History, such as contact lens use or plant injury, also gives important clues." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Keratitis can be bacterial, fungal or viral." },
    { type: "item", text: "Each type needs a specific medicine." },
    { type: "item", text: "Plant injuries often cause fungal keratitis." },
    { type: "item", text: "Contact lens misuse is a major cause of bacterial keratitis." },
    { type: "item", text: "Never use steroid drops without an eye doctor's advice." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Three different germs can cause very similar painful red eyes, which is why self-treatment is risky. Early diagnosis and targeted treatment give the cornea the best chance to heal clearly. For expert corneal care, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/), an ophthalmologist at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Which type of keratitis is most common in India?",
        a: [
          { type: "para", text: "Both bacterial and fungal keratitis are common in India. Fungal keratitis is seen more often in agricultural regions and after plant injuries. Bacterial keratitis is frequently linked to contact lens misuse in cities." },
        ],
      },
      {
        q: "Why is fungal keratitis harder to treat?",
        a: [
          { type: "para", text: "Fungi grow deeper into the cornea and respond more slowly to medicines. Treatment often takes several weeks and needs close follow-up. Some severe cases need surgery, such as a corneal transplant, to control infection." },
        ],
      },
      {
        q: "Can herpes keratitis come back?",
        a: [
          { type: "para", text: "Yes. The herpes virus can stay dormant in nerves and reactivate during stress, fever or illness. Some people need long-term antiviral tablets to reduce recurrences. Early treatment of each episode protects the cornea." },
        ],
      },
      {
        q: "Why should I avoid steroid drops for a red eye?",
        a: [
          { type: "para", text: "Steroids can reduce inflammation but may worsen fungal and viral infections by weakening the eye's defences. Using them without an eye exam can turn a treatable infection into a severe one." },
        ],
      },
      {
        q: "What is a corneal scraping?",
        a: [
          { type: "para", text: "It is a quick test where the doctor gently collects cells from the ulcer surface after numbing the eye. The sample is examined in the lab to identify the germ so the right medicine can be chosen." },
        ],
      },
      {
        q: "Can keratitis spread to the other eye?",
        a: [
          { type: "para", text: "Infectious keratitis usually affects one eye. However, poor hygiene, shared towels or touching both eyes can spread some infections. Wash hands often and avoid touching the healthy eye." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: What is a corneal ulcer (keratitis)?](https://www.aao.org/eye-health/diseases/what-is-keratitis)" },
    { type: "item", text: "[AAO: Contact lens-related eye infections](https://www.aao.org/eye-health/diseases/contact-lens-related-eye-infections)" },
  ];
