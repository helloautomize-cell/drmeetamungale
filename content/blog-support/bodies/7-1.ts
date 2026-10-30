import type { BlogBlock } from "@/content/blog-bodies";

// Article 7.1 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Seek urgent eye care if a red eye comes with moderate to severe pain, reduced vision, strong light sensitivity, discharge, a feeling that something is stuck in the eye, or a white or grey spot on the cornea. These signs are not typical of simple conjunctivitis and may point to a corneal ulcer." },
      ],
    },
    { type: "para", text: "A [corneal ulcer](/blog/corneal-ulcer-keratitis-symptoms-treatment/) is an open sore on the cornea, the clear front window of the eye. It is usually caused by infection and is an eye emergency. A red eye with pain, blurred vision, light sensitivity or a white spot on the cornea needs same-day assessment by an eye specialist, because delay can lead to scarring or permanent vision loss." },
    { type: "heading", text: "What Is a Corneal Ulcer?" },
    { type: "para", text: "The cornea has several layers. When the outer layer is damaged and infection enters, an ulcer forms. Bacteria, fungi, viruses and a parasite called Acanthamoeba can all cause it. The infection can spread deeper quickly and may even create a hole in the cornea if untreated." },
    { type: "heading", text: "What Are the Symptoms?" },
    { type: "item", text: "Red eye that is getting worse" },
    { type: "item", text: "Eye pain, often severe" },
    { type: "item", text: "Blurred or reduced vision" },
    { type: "item", text: "Sensitivity to light" },
    { type: "item", text: "Watering or thick discharge" },
    { type: "item", text: "Feeling of sand or a foreign body" },
    { type: "item", text: "Swollen eyelids" },
    { type: "item", text: "A white, grey or cream-coloured spot on the cornea" },
    { type: "heading", text: "Common Causes and Risk Factors" },
    { type: "item", text: "Contact lens misuse, such as sleeping in lenses or poor hygiene" },
    { type: "item", text: "Eye injury from plant matter, dust, wood or metal, common in farming and construction" },
    { type: "item", text: "Using steroid drops without supervision" },
    { type: "item", text: "Severe dry eye or eyelid problems" },
    { type: "item", text: "Diabetes or weak immunity" },
    { type: "item", text: "Previous eye surgery" },
    { type: "item", text: "Using home remedies or unclean water in the eye" },
    { type: "heading", text: "How Is a Red Eye Emergency Different From Conjunctivitis?" },
    { type: "para", text: "Conjunctivitis usually causes redness, itching, mild discomfort and sticky discharge, with normal or near-normal vision. A corneal ulcer causes real pain, blurred vision and light sensitivity. If you are unsure, it is safer to get checked the same day." },
    { type: "heading", text: "How Is It Diagnosed?" },
    { type: "para", text: "The eye doctor examines the cornea with a slit lamp and a special dye that highlights the sore. A small sample, called a corneal scraping, may be sent to the lab to find the exact germ. This helps choose the right medicine." },
    { type: "heading", text: "How Is It Treated?" },
    { type: "para", text: "Treatment usually starts immediately with intensive antibiotic, antifungal or antiviral drops, often every hour at first. Follow-up visits are frequent. Severe cases may need hospital care or surgery, such as a corneal transplant, if the cornea becomes very thin or perforates." },
    { type: "heading", text: "What Should You Avoid?" },
    { type: "item", text: "Do not wear contact lenses until cleared by your doctor" },
    { type: "item", text: "Do not use leftover or steroid drops without advice" },
    { type: "item", text: "Do not use home remedies, breast milk or herbal liquids" },
    { type: "item", text: "Do not patch the eye unless advised" },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "A corneal ulcer is an emergency, not a simple red eye." },
    { type: "item", text: "Pain, blur and light sensitivity are key warning signs." },
    { type: "item", text: "Contact lens misuse and plant injuries are common causes." },
    { type: "item", text: "Early treatment reduces scarring and vision loss." },
    { type: "item", text: "Avoid self-medication, especially steroid drops." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "When it comes to a painful red eye, acting early can save your sight. Do not wait for it to clear on its own. For urgent corneal assessment and treatment, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/), an ophthalmologist at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "How do I know if my red eye is serious?",
        a: [
          { type: "para", text: "A red eye is more serious if it comes with pain, blurred vision, light sensitivity, a white spot on the cornea or follows an injury or contact lens use. These signs need same-day attention from an eye specialist." },
        ],
      },
      {
        q: "Can a corneal ulcer heal on its own?",
        a: [
          { type: "para", text: "No. A corneal ulcer needs medical treatment. Without proper drops, the infection can spread, scar the cornea or cause a hole. Early, targeted treatment gives the best chance of healing with good vision." },
        ],
      },
      {
        q: "Can I use antibiotic drops at home for a red eye?",
        a: [
          { type: "para", text: "Do not self-treat a painful red eye. The wrong drop, especially a steroid, can make some infections much worse. An eye doctor should examine the eye and choose the right medicine." },
        ],
      },
      {
        q: "Are contact lens users at higher risk?",
        a: [
          { type: "para", text: "Yes. Sleeping in lenses, swimming with them, poor cleaning and using tap water increase the risk of corneal ulcers. Remove lenses and see a doctor at the first sign of pain or redness." },
        ],
      },
      {
        q: "Can a corneal ulcer cause blindness?",
        a: [
          { type: "para", text: "Severe or untreated ulcers can lead to dense scarring or perforation, which may cause serious vision loss. Most people recover well with early treatment. Some may need a corneal transplant to restore vision." },
        ],
      },
      {
        q: "How long does it take for a corneal ulcer to heal?",
        a: [
          { type: "para", text: "Healing time depends on the cause, size and how early treatment starts. Small bacterial ulcers may heal in a couple of weeks. Fungal ulcers often take longer. Regular follow-up is needed until it fully heals." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: What is a corneal ulcer (keratitis)?](https://www.aao.org/eye-health/diseases/what-is-keratitis)" },
    { type: "item", text: "[AAO: Contact lens-related eye infections](https://www.aao.org/eye-health/diseases/contact-lens-related-eye-infections)" },
  ];
