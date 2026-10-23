import type { SupportArticleSource } from "@/content/blog-support";

// Article 5.5 - Dry Eye cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleSource = {
  number: "5.5",
  slug: "punctal-plugs-dry-eye",
  title: "Punctal Plugs for Dry Eye: Who Needs Them?",
  seoTitle: "Punctal Plugs for Dry Eye | Mungale Eye Hospital",
  metaDescription: "Punctal plugs keep natural tears on the eye longer by blocking tear drainage. Learn how they work, who may benefit, what the procedure is like and possible side",
  topics: ["cornea"],
  cluster: "dry-eye",
  pillarSlug: "dry-eye-disease-causes-symptoms-treatment",
  order: 5,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-11",
  cover: {
    src: "/images/blog/punctal-plugs-dry-eye-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: ophthalmologist in a Vadodara eye clinic gently examining the lower eyelid of a relaxed senior Indian patient seated at a slit lamp.",
  },
  blocks: [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Punctal plugs are usually considered when dry eye from low tear volume continues despite regular lubricating drops and other basic treatment. The procedure is quick, done in the clinic and usually painless. They are less suitable when dry eye is mainly due to oil gland problems or active eye surface inflammation, which should be treated first." },
      ],
    },
    { type: "para", text: "Punctal plugs are tiny devices placed in the small drainage openings of the eyelids, called puncta. They slow the drainage of tears so your own tears stay on the eye surface longer. They may help some people with dry eye caused by low tear production, but they are not the right choice for everyone." },
    { type: "heading", text: "How Do Tears Normally Drain?" },
    { type: "para", text: "Each eyelid has a tiny opening near the inner corner. Tears flow through these puncta into a small channel that drains into the nose. That is why your nose runs when you cry. Plugs partly block this drainage so tears remain on the eye." },
    { type: "heading", text: "What Types of Plugs Are There?" },
    { type: "h3", text: "Temporary plugs" },
    { type: "para", text: "Made of dissolvable material, they last from a few days to a few months. Doctors sometimes use them first to see if blocking drainage helps." },
    { type: "h3", text: "Long-lasting plugs" },
    { type: "para", text: "Usually made of silicone, they stay in place until removed. They sit at the opening of the punctum and can be taken out easily if needed." },
    { type: "h3", text: "Intracanalicular plugs" },
    { type: "para", text: "These sit deeper inside the drainage channel and are not visible. They are used in selected cases." },
    { type: "heading", text: "Who May Benefit?" },
    { type: "para", text: "Plugs may be considered for people with:" },
    { type: "item", text: "Aqueous-deficient dry eye, where the eyes make too few tears" },
    { type: "item", text: "Symptoms that continue despite regular drops" },
    { type: "item", text: "Dry eye with conditions such as Sjogren's syndrome" },
    { type: "item", text: "Dry eye after eye surgery that is slow to improve" },
    { type: "item", text: "Difficulty using drops many times a day" },
    { type: "heading", text: "Who May Not Be Suitable?" },
    { type: "item", text: "People with active eye infections or lid inflammation" },
    { type: "item", text: "Those whose dry eye is mainly from blocked oil glands" },
    { type: "item", text: "People with allergy to plug material" },
    { type: "item", text: "Those with already watery eyes or blocked tear ducts" },
    { type: "heading", text: "What Happens During the Procedure?" },
    { type: "para", text: "The doctor examines the eye at a slit lamp, may place numbing drops and measures the punctum size. The plug is then gently inserted with a fine instrument. The process takes a few minutes, and most people return to normal activities the same day." },
    { type: "heading", text: "What Are the Possible Side Effects?" },
    { type: "item", text: "Mild irritation or feeling of something in the corner of the eye" },
    { type: "item", text: "Excess watering if drainage is blocked too much" },
    { type: "item", text: "Plug falling out, which is not harmful" },
    { type: "item", text: "Rarely, infection or inflammation of the tear channel" },
    { type: "para", text: "Plugs can be removed if they cause problems." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Punctal plugs keep natural tears on the eye longer." },
    { type: "item", text: "They suit selected patients with low tear production." },
    { type: "item", text: "Oil gland problems and inflammation are treated first." },
    { type: "item", text: "Insertion is quick and done in the clinic." },
    { type: "item", text: "Plugs can be removed if needed." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Punctal plugs are one useful tool in [dry eye](/blog/dry-eye-disease-causes-symptoms-treatment/) care, not a universal fix. The best results come when they are chosen after proper testing. To find out whether plugs suit your type of dry eye, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/), an ophthalmologist at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Do punctal plugs hurt?",
        a: [
          { type: "para", text: "Insertion is usually painless or only mildly uncomfortable. Numbing drops may be used. Some people notice a slight feeling in the inner corner of the eye for a few days, which usually settles as they get used to it." },
        ],
      },
      {
        q: "How long do punctal plugs last?",
        a: [
          { type: "para", text: "Dissolvable plugs last from days to months. Silicone plugs can last for years if they stay in place. Some plugs fall out on their own, and they can be replaced if they were helping." },
        ],
      },
      {
        q: "Can I still use eye drops with punctal plugs?",
        a: [
          { type: "para", text: "Yes. Plugs help your tears and drops stay on the eye longer, so many people need drops less often. Your doctor may still advise lubricants or other treatments alongside the plugs." },
        ],
      },
      {
        q: "Can punctal plugs be removed?",
        a: [
          { type: "para", text: "Yes. Most surface plugs can be removed easily in the clinic. Deeper plugs may need flushing of the tear channel. Removal is considered if the eye waters too much or becomes irritated." },
        ],
      },
      {
        q: "Are punctal plugs a cure for dry eye?",
        a: [
          { type: "para", text: "No. They are a management tool that helps keep tears on the eye. They do not fix oil gland problems or inflammation, which may need separate treatment. Many patients use plugs as part of a combined plan." },
        ],
      },
      {
        q: "What if my eyes water too much after plugs?",
        a: [
          { type: "para", text: "Excess watering means drainage is blocked more than needed. The doctor may remove one plug or switch types. Tell your eye doctor if watering bothers you, as it is easy to adjust." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[NEI: Dry eye](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/dry-eye)" },
    { type: "item", text: "[NHS: Dry eyes](https://www.nhs.uk/conditions/dry-eyes/)" },
  ],
  keepReading: [
    { label: "Dry Eye Disease: Causes, Symptoms, Diagnosis & Treatment", target: "/blog/dry-eye-disease-causes-symptoms-treatment/" },
    { label: "Dry Eye Tests: Tear Film, Meibomian Glands and More", target: "link:5.4" },
    { label: "Can Dry Eye Be Cured Permanently?", target: "link:5.3" },
    { label: "Can Dry Eyes Cause Blurry Vision? When to Worry", target: "link:5.1" },
    { label: "Screen Time and Dry Eyes: The 20-20-20 Rule Explained", target: "link:5.2" },
  ],
};
