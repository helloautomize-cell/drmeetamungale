import type { SupportArticleSource } from "@/content/blog-support";

// Article 1.3 - Cataract cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleSource = {
  number: "1.3",
  slug: "cataract-lens-types-monofocal-toric-multifocal-edof",
  title: "Cataract Lens Types: Which IOL Is Right for You?",
  seoTitle: "Cataract Lens Types | Mungale Eye Hospital",
  metaDescription: "Compare monofocal, toric, multifocal and EDOF cataract lenses, who each may suit, and the questions to ask your ophthalmologist before choosing an IOL.",
  topics: ["cataract"],
  cluster: "cataract",
  pillarSlug: "cataract-surgery-guide",
  order: 3,
  treatmentPage: "cataract-surgery",
  reviewedBy: ["sachin","meeta"],
  reviewConfirmed: true,
  date: "2026-10-01",
  cover: {
    src: "/images/blog/cataract-lens-types-monofocal-toric-multifocal-edof-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: ophthalmologist, seen from behind and unidentifiable, explains an eye model to an elderly patient seated at a slit-lamp examination station..",
  },
  blocks: [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Monofocal lenses are the standard choice and work well if you are comfortable wearing glasses for reading. Toric lenses are used when astigmatism is significant. Multifocal and EDOF lenses can reduce your need for glasses, but they suit only certain eyes and may cause night-time glare or halos. None of them can promise a life without glasses." },
      ],
    },
    { type: "para", text: "There is no single best cataract lens. The right one depends on how healthy your eye is and what you want to do comfortably after surgery. A monofocal lens gives sharp vision at one distance, a toric lens does that while also correcting astigmatism, and multifocal and EDOF lenses are designed to give you useful vision at more than one distance. Your ophthalmologist can tell you which of these your eye can support once it has been examined." },
    { type: "para", text: "When a cataract is removed, the cloudy natural lens is replaced with an artificial intraocular lens (IOL). The IOL is permanent, so it is worth understanding your options before the day of surgery rather than on it." },
    { type: "heading", text: "What Is the Difference Between the Four Lens Types?" },
    { type: "h3", text: "Monofocal lens" },
    { type: "para", text: "This is the most widely used IOL. It is usually set for distance, so driving, television and recognising faces across a room are clear. Reading and phone use then need glasses. Its simple optics mean fewer visual side effects, which is why many surgeons recommend it as the dependable starting point." },
    { type: "h3", text: "Toric lens" },
    { type: "para", text: "Astigmatism means the cornea (the clear front surface of the eye) is shaped more like a rugby ball than a football, so light focuses unevenly and things look smudged at every distance. A toric lens carries a built-in correction and has to be placed at a precise angle. It still focuses at one distance, so reading glasses are often still part of the picture." },
    { type: "h3", text: "Multifocal lens" },
    { type: "para", text: "A multifocal lens has rings or zones that bring near, middle and far objects into focus. Many people find they reach for glasses far less. The cost is that some see halos around headlights, or find contrast a little softer, particularly in dim light. Most people need a few weeks for the brain to adjust." },
    { type: "h3", text: "EDOF lens" },
    { type: "para", text: "EDOF means extended depth of focus. Rather than splitting light into zones, it stretches one smooth range of clear vision, typically from distance to about arm's length, which suits computer work and cooking. Halos tend to be milder than with a multifocal, but fine print up close may still need glasses." },
    {
      type: "table",
      text: "",
      head: ["Lens", "What it offers", "What to weigh"],
      rows: [
        ["Monofocal", "Sharp at one distance", "Glasses for other distances"],
        ["Toric", "Corrects astigmatism", "Reading glasses often still needed"],
        ["Multifocal", "Near, middle and far", "Glare, halos, softer contrast"],
        ["EDOF", "Smooth far to middle range", "Close reading may need help"],
      ],
    },
    { type: "heading", text: "Who May Not Be a Good Candidate for Multifocal or EDOF Lenses?" },
    { type: "para", text: "These lenses work best in an eye that is otherwise in good order. If light is already being disturbed by another problem, a lens that splits or stretches that light can make things worse. Surgeons are generally cautious with glaucoma, macular degeneration, diabetic eye changes, corneal scarring, keratoconus, marked dry eye and eyes that have had laser vision correction." },
    { type: "para", text: "Your daily routine matters as well. Someone who drives long distances after dark may be happier with a monofocal lens than with one that produces halos. Cost is a practical point too. Premium lenses are usually priced above standard ones, and insurance cover varies, so it helps to ask the hospital's insurance desk early." },
    { type: "heading", text: "How Do You Decide?" },
    { type: "para", text: "Think about a normal day. A retired teacher who reads the newspaper every morning and a bus driver who works night shifts will want very different things from the same operation. Tell your surgeon what you do, not just what you see." },
    { type: "para", text: "Before surgery, a few painless scans measure the length of your eye, the curve of your cornea and the health of your macula, the central part of the retina. These results often narrow the options more than preference does." },
    { type: "para", text: "At your consultation, it helps to ask which lens your tests point towards and why, how likely you are to still need glasses, which side effects to expect and for how long, and what the total cost will be." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Monofocal is the standard lens and gives clear focus at one distance." },
    { type: "item", text: "Toric lenses correct astigmatism and need precise positioning." },
    { type: "item", text: "Multifocal and EDOF lenses can cut down glasses use, though glare or halos are possible." },
    { type: "item", text: "The condition of your cornea and retina often decides which lenses are an option." },
    { type: "item", text: "The final choice should follow a full eye examination." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "A well-chosen monofocal lens can leave one person happier than a multifocal leaves another, so the costlier option is not automatically the better one. Our complete [cataract surgery](/blog/cataract-surgery-guide/) guide covers the rest of the process, from early symptoms through recovery." },
    { type: "para", text: "If you would like to talk through lens options for your eyes, you can [book a consultation](/contact-us/#book) with the ophthalmologists at [Mungale Eye Hospital](/contact-us/), Vadodara. Lens availability and suitability are confirmed after examination. This article is general information and cannot replace an in-person evaluation. Sudden loss of vision, severe eye pain or a sudden shower of floaters needs immediate medical attention." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Which cataract lens is best for most people?",
        a: [
          { type: "para", text: "A monofocal lens is the most commonly used and works reliably for many people, especially those comfortable wearing glasses for reading. The best lens for you depends on your eye health, any astigmatism, your daily activities and what you hope to achieve. Your ophthalmologist can guide you after a detailed examination." },
        ],
      },
      {
        q: "Will I still need glasses after cataract surgery?",
        a: [
          { type: "para", text: "That depends on the lens and on your eye. With a monofocal lens, glasses are usually needed for at least one distance. Multifocal and EDOF lenses may reduce how often you wear them, but they cannot promise complete independence. Your surgeon can describe what is realistic for your eyes." },
        ],
      },
      {
        q: "What is the difference between a multifocal and an EDOF lens?",
        a: [
          { type: "para", text: "A multifocal lens divides light into separate focus points for near, middle and far vision. An EDOF lens stretches a single range of focus, usually from far to middle distance. Multifocals may help more with close reading, while EDOF lenses often cause milder halos at night." },
        ],
      },
      {
        q: "Can astigmatism be corrected during cataract surgery?",
        a: [
          { type: "para", text: "Often it can. A toric lens is built to correct astigmatism, and in some cases the surgeon also makes small adjustments to the cornea. Whether this is right for you depends on how much astigmatism you have and how regular it is, which is measured before surgery." },
        ],
      },
      {
        q: "Are multifocal or EDOF lenses safe if I have glaucoma or diabetes?",
        a: [
          { type: "para", text: "They may be less suitable, because these conditions can affect the optic nerve or retina and lower contrast sensitivity. Some people are still considered after careful assessment. The decision rests with your ophthalmologist and depends on how stable and advanced the condition is." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: Cataract surgery](https://www.aao.org/eye-health/diseases/what-is-cataract-surgery)" },
    { type: "item", text: "[NEI: Cataracts](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/cataracts)" },
    { type: "item", text: "[NHS: Cataract surgery](https://www.nhs.uk/conditions/cataract-surgery/)" },
  ],
  keepReading: [
    { label: "Cataract Surgery: Symptoms, When Surgery Is Needed, Lens Options, Procedure & Recovery", target: "/blog/cataract-surgery-guide/" },
    { label: "Phaco vs MSICS Cataract Surgery: What Is the Difference?", target: "link:1.5" },
    { label: "Cataract Surgery Cost in Vadodara: What Sets the Price?", target: "link:1.2" },
    { label: "Cataract Surgery Recovery: Week by Week Guide", target: "link:1.4" },
    { label: "Cataract care at Mungale Eye Hospital", target: "/treatments/cataract-surgery/" },
  ],
};
