import type { BlogBlock } from "@/content/blog-bodies";

// Article 6.5 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "A pinguecula is a small yellowish bump on the white of the eye, usually beside the cornea, that does not cross onto it. A pterygium is a fleshy, triangular growth that grows across onto the cornea. Pinguecula rarely needs surgery. Pterygium may need surgery if it grows toward the centre of vision." },
      ],
    },
    { type: "para", text: "Pinguecula and [pterygium](/blog/pterygium-causes-symptoms-stages-treatment-surgery/) are both growths on the white of the eye linked to sun exposure. The key difference is location. A pinguecula stays on the white of the eye and does not grow onto the cornea. A pterygium is a wedge-shaped growth that extends onto the cornea and can affect vision." },
    { type: "heading", text: "What Is a Pinguecula?" },
    { type: "para", text: "A pinguecula is a yellowish, slightly raised patch on the conjunctiva. It is made of protein, fat or calcium deposits caused by long-term UV exposure, dust and wind. It is very common in adults who spend time outdoors and usually appears on the side nearer the nose." },
    { type: "heading", text: "What Is a Pterygium?" },
    { type: "para", text: "A pterygium is a pink or white, fleshy growth with visible blood vessels. It starts on the white of the eye and grows in a wedge or wing shape onto the clear cornea. As it grows, it can pull on the cornea, cause astigmatism and eventually block vision." },
    { type: "heading", text: "How Do They Compare?" },
    { type: "h3", text: "Location" },
    { type: "item", text: "Pinguecula: stays on the white of the eye" },
    { type: "item", text: "Pterygium: crosses onto the cornea" },
    { type: "h3", text: "Appearance" },
    { type: "item", text: "Pinguecula: yellowish, small, round or oval bump" },
    { type: "item", text: "Pterygium: pink, fleshy, triangular with blood vessels" },
    { type: "h3", text: "Effect on vision" },
    { type: "item", text: "Pinguecula: usually none" },
    { type: "item", text: "Pterygium: can cause blur and astigmatism if large" },
    { type: "h3", text: "Symptoms" },
    { type: "para", text: "Both can cause redness, dryness, irritation and a gritty feeling, especially after sun or dust exposure. An inflamed pinguecula is called pingueculitis." },
    { type: "h3", text: "Treatment" },
    { type: "item", text: "Pinguecula: lubricating drops, short courses of anti-inflammatory drops and UV protection. Surgery is rarely needed." },
    { type: "item", text: "Pterygium: drops for symptoms, and surgery when it grows, affects vision or causes ongoing discomfort." },
    { type: "heading", text: "Can a Pinguecula Turn Into a Pterygium?" },
    { type: "para", text: "Some experts believe a pinguecula may sometimes progress to a pterygium, but this is not certain and does not happen in most people. Both share the same risk factors, so protecting your eyes from UV light helps prevent both." },
    { type: "heading", text: "When Should You See an Eye Doctor?" },
    { type: "item", text: "A growth that seems to be getting larger" },
    { type: "item", text: "Tissue moving onto the clear part of the eye" },
    { type: "item", text: "Blurry vision or new astigmatism" },
    { type: "item", text: "Frequent redness or irritation" },
    { type: "item", text: "Any change in colour or shape" },
    { type: "para", text: "Your doctor can confirm what the growth is and rule out other rare conditions." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Both are linked to sun, dust and wind exposure." },
    { type: "item", text: "Pinguecula stays on the white of the eye." },
    { type: "item", text: "Pterygium grows onto the cornea." },
    { type: "item", text: "Pinguecula rarely needs surgery." },
    { type: "item", text: "UV-blocking sunglasses help prevent both." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Seeing a bump on your eye can be worrying, but most of these growths are harmless and manageable. A quick eye exam tells you which one you have and what to watch for. For an assessment, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/), an ophthalmologist at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Is a pinguecula dangerous?",
        a: [
          { type: "para", text: "No. A pinguecula is a harmless, non-cancerous growth. It may become red and irritated sometimes, but it does not grow onto the cornea or affect vision. Drops and UV protection usually keep it comfortable." },
        ],
      },
      {
        q: "How can I tell if I have pterygium or pinguecula?",
        a: [
          { type: "para", text: "A pinguecula stays on the white of the eye and looks yellowish. A pterygium is pinkish, has blood vessels and extends onto the clear cornea. An eye doctor can confirm the diagnosis with a slit lamp exam." },
        ],
      },
      {
        q: "Does a pinguecula need surgery?",
        a: [
          { type: "para", text: "Rarely. Surgery may be considered if it is constantly inflamed, interferes with contact lenses or is a strong cosmetic concern. Most people manage it well with lubricating drops and sun protection." },
        ],
      },
      {
        q: "Can both conditions happen in the same eye?",
        a: [
          { type: "para", text: "Yes. Because they share the same risk factors, some people have a pinguecula on one side and a pterygium on the other, or both in different eyes. Regular checks help monitor them." },
        ],
      },
      {
        q: "What eye drops help pinguecula or pterygium?",
        a: [
          { type: "para", text: "Lubricating drops ease dryness and irritation. During flare-ups, a doctor may prescribe short courses of anti-inflammatory drops. Avoid using steroid drops without supervision because of possible side effects." },
        ],
      },
      {
        q: "Can sunglasses stop them from getting worse?",
        a: [
          { type: "para", text: "UV-blocking, wraparound sunglasses reduce sun exposure and may slow growth or reduce flare-ups. A hat adds extra protection. These habits are important for anyone with either condition." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[Better Health Channel: Pterygium](https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/pterygium)" },
    { type: "item", text: "[College of Optometrists: Pterygium](https://www.college-optometrists.org/clinical-guidance/clinical-management-guidelines/pterygium)" },
  ];
