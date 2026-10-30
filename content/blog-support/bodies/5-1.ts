import type { BlogBlock } from "@/content/blog-bodies";

// Article 5.1 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Yes, dry eye commonly causes blurry or fluctuating vision because an unstable tear film creates an uneven surface on the cornea. The blur often improves after blinking and worsens with screen use, reading, air conditioning or wind. Blurry vision that does not clear with blinking, affects one eye suddenly, or comes with pain, redness or light sensitivity needs prompt eye examination." },
      ],
    },
    { type: "para", text: "Dry eye disease happens when the eyes do not make enough tears or the tears evaporate too quickly, leaving the surface of the eye poorly protected. Besides grittiness and burning, many people notice blurry vision that comes and goes. Understanding why helps you know when it is simply dry eye and when to seek an eye examination." },
    { type: "heading", text: "Why Does Dry Eye Blur Vision?" },
    { type: "para", text: "The tear film is the first surface light passes through. When it breaks up quickly or is too thin, light scatters unevenly, causing blurry or fluctuating vision. Blinking spreads tears again, so vision often clears briefly." },
    { type: "heading", text: "How Is Dry Eye Different From Screen Strain?" },
    { type: "para", text: "Screen strain, or digital eye strain, comes from focusing effort and reduced blinking during screen use. It causes tired eyes, headaches and blur that settle with breaks. Dry eye can occur with or without screens and often causes burning, grittiness, watering and redness. The two frequently overlap." },
    { type: "heading", text: "What Other Symptoms Point to Dry Eye?" },
    { type: "item", text: "Burning, stinging or gritty feeling" },
    { type: "item", text: "Redness" },
    { type: "item", text: "Watery eyes, as a reflex to irritation" },
    { type: "item", text: "Light sensitivity" },
    { type: "item", text: "Difficulty wearing contact lenses" },
    { type: "item", text: "Tired eyes, especially later in the day" },
    { type: "heading", text: "What Causes Dry Eye?" },
    { type: "item", text: "Prolonged screen use and reduced blinking" },
    { type: "item", text: "Air conditioning, fans, wind and dust" },
    { type: "item", text: "Ageing and hormonal changes, especially after menopause" },
    { type: "item", text: "Meibomian gland dysfunction, where oil glands in the eyelids do not work well" },
    { type: "item", text: "Contact lens wear" },
    { type: "item", text: "Medicines such as antihistamines, some blood pressure medicines and antidepressants" },
    { type: "item", text: "Autoimmune conditions such as Sjogren's syndrome and rheumatoid arthritis" },
    { type: "item", text: "Previous eye surgery, including LASIK" },
    { type: "heading", text: "When Is Blurry Vision More Than Dry Eye?" },
    { type: "para", text: "Seek prompt eye care if:" },
    { type: "item", text: "Blur does not improve with blinking or lubricating drops" },
    { type: "item", text: "Vision drops suddenly, especially in one eye" },
    { type: "item", text: "There is eye pain, significant redness or light sensitivity" },
    { type: "item", text: "You see flashes, floaters or a shadow" },
    { type: "item", text: "You wear contact lenses and develop a painful red eye" },
    { type: "para", text: "These can signal infection, inflammation, glaucoma, retinal problems or other conditions." },
    { type: "heading", text: "How Is Dry Eye Treated?" },
    { type: "item", text: "Preservative-free lubricating drops" },
    { type: "item", text: "Warm compresses and lid hygiene for meibomian gland dysfunction" },
    { type: "item", text: "Screen breaks using the 20-20-20 rule" },
    { type: "item", text: "Humidifying the room and avoiding direct airflow" },
    { type: "item", text: "Adequate hydration" },
    { type: "item", text: "Prescription treatments for inflammation, punctal plugs or other therapies in persistent cases" },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Dry eye can cause blurry vision that clears with blinking." },
    { type: "item", text: "It often overlaps with screen strain." },
    { type: "item", text: "Burning, grittiness and redness suggest dry eye." },
    { type: "item", text: "Blur that does not clear needs an eye exam." },
    { type: "item", text: "Lubricants, lid care and habit changes help." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Fluctuating blurry vision is often a sign of [dry eye](/blog/dry-eye-disease-causes-symptoms-treatment/), but persistent or sudden blur deserves a proper check. [Dr. Meeta Mungale](/doctors/meeta-mungale/) and the team at [Mungale Eye Hospital](/contact-us/) in Vadodara offer detailed dry eye evaluation and treatment." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Can dry eye cause blurry vision?",
        a: [
          { type: "para", text: "Yes. An unstable tear film makes the eye's surface uneven, causing blurry or fluctuating vision that often improves after blinking. It is a common symptom of dry eye." },
        ],
      },
      {
        q: "Why does my vision get blurry after using the computer?",
        a: [
          { type: "para", text: "Screen use reduces blinking and increases focusing effort, which can dry the eyes and cause blur. Regular breaks, blinking exercises and lubricating drops can help." },
        ],
      },
      {
        q: "When should I worry about blurry vision?",
        a: [
          { type: "para", text: "See an eye doctor promptly if blur does not clear with blinking, appears suddenly in one eye, or comes with pain, redness, light sensitivity, flashes or floaters." },
        ],
      },
      {
        q: "Can dry eye damage my vision permanently?",
        a: [
          { type: "para", text: "Most dry eye does not cause permanent vision loss, but severe untreated dry eye can damage the cornea. Treatment protects the eye surface and comfort." },
        ],
      },
      {
        q: "What eye drops are best for dry eye?",
        a: [
          { type: "para", text: "Preservative-free lubricating drops are often recommended for frequent use. Your eye doctor may suggest specific drops or treatments based on the type and severity of your dry eye." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[NEI: Dry eye](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/dry-eye)" },
    { type: "item", text: "[NHS: Dry eyes](https://www.nhs.uk/conditions/dry-eyes/)" },
  ];
