import type { SupportArticleSource } from "@/content/blog-support";

// Article 2.2 - Glaucoma cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleSource = {
  number: "2.2",
  slug: "glaucoma-eye-tests-tonometry-oct-visual-field",
  title: "Glaucoma Eye Tests Explained: Tonometry, OCT, Visual Field",
  seoTitle: "Glaucoma Eye Tests Explained | Mungale Eye Hospital",
  metaDescription: "Wondering why glaucoma needs so many tests? Here is what tonometry, OCT, visual field testing and gonioscopy each show, and how doctors read them together.",
  topics: ["glaucoma"],
  cluster: "glaucoma",
  pillarSlug: "glaucoma-symptoms-causes-treatment",
  order: 2,
  treatmentPage: "glaucoma-evaluation",
  reviewedBy: "sachin",
  reviewConfirmed: true,
  date: "2026-10-03",
  cover: {
    src: "/images/blog/glaucoma-eye-tests-tonometry-oct-visual-field-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: ophthalmology consultation room with soft daylight from a side window.  An OCT scanner and a slit lamp sit on a clean white desk in the foreground..",
  },
  blocks: [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "The main glaucoma tests are tonometry (eye pressure), a dilated optic nerve examination, OCT (a scan of the nerve), visual field testing (side vision), gonioscopy (the drainage angle) and pachymetry (corneal thickness). Most take a few minutes and none is painful. Your doctor compares them, and repeats some over the years to see whether anything is changing." },
      ],
    },
    { type: "para", text: "If your ophthalmologist has asked for several tests to check for glaucoma, it can feel like a lot for one condition. There is a good reason. Glaucoma is diagnosed from a combination of findings: eye pressure, the look of the optic nerve, scan results and side vision. No single number can confirm or rule it out on its own." },
    { type: "heading", text: "Why isn't a pressure reading enough?" },
    { type: "para", text: "The optic nerve carries what your eye sees to your brain, and glaucoma is damage to that nerve. High pressure inside the eye raises the risk, but it is only one piece. Some people with high readings never develop nerve damage. Others do, even with readings in the normal range, which is called normal-tension glaucoma." },
    { type: "para", text: "That is why a clean pressure check can't settle the question, and why the nerve and your actual field of vision get examined too." },
    { type: "heading", text: "What does each glaucoma test show?" },
    {
      type: "table",
      text: "",
      head: ["Test", "What it checks", "What you will notice"],
      rows: [
        ["Tonometry", "Intraocular pressure, the fluid pressure inside the eye", "A puff of air, or a light touch after numbing drops"],
        ["Dilated optic nerve exam", "Shape and colour of the optic nerve head", "Bright light, then blurred near vision for a few hours"],
        ["OCT scan", "Thickness of the nerve fibre layer", "You look at a target for a few seconds, nothing touches the eye"],
        ["Visual field test", "Blind spots in side vision", "You press a button each time a small light appears"],
        ["Gonioscopy", "Whether the drainage angle is open or narrow", "A small lens rests briefly on the numbed eye"],
        ["Pachymetry", "Corneal thickness", "A quick probe or scan"],
      ],
    },
    { type: "h3", text: "How is eye pressure measured?" },
    { type: "para", text: "Tonometry gives a reading in millimetres of mercury (mmHg). The air-puff version is common for screening. Goldmann applanation tonometry, done at the slit lamp after numbing drops, is generally regarded as more precise. Pressure also shifts during the day, so one reading is a snapshot rather than the full picture." },
    { type: "h3", text: "Can an OCT scan find glaucoma early?" },
    { type: "para", text: "It can sometimes pick up changes before you notice them. OCT (optical coherence tomography) uses light to create cross-section images of the optic nerve and retina, and it can show thinning in the nerve fibre layer. Scans taken months apart are especially useful, because slow change is hard to spot in a single visit." },
    { type: "h3", text: "Why is the visual field test repeated?" },
    { type: "para", text: "Glaucoma usually affects side vision first, and the visual field test maps exactly that. It also asks for steady concentration, which most people find tiring the first time. A weak first result may partly reflect unfamiliarity, so doctors tend to confirm a finding on a repeat test before acting on it." },
    { type: "h3", text: "What do gonioscopy and pachymetry add?" },
    { type: "para", text: "Gonioscopy shows whether fluid can leave the eye freely or the drainage angle is narrow. That helps separate open-angle from angle-closure glaucoma, which are managed differently. Pachymetry measures corneal thickness, which can nudge pressure readings up or down, so it helps your doctor interpret the number correctly." },
    { type: "heading", text: "How can I prepare for a glaucoma check-up?" },
    { type: "para", text: "A few small things make the visit easier." },
    { type: "item", text: "Carry your current glasses and any earlier eye reports or scans." },
    { type: "item", text: "Bring a list of your regular medicines, including eye drops and steroids." },
    { type: "item", text: "Wear sunglasses for the trip home, as dilation makes light uncomfortable." },
    { type: "item", text: "Arrange for someone to accompany you, since near vision stays blurry for a few hours." },
    { type: "heading", text: "How often will I need these tests?" },
    { type: "para", text: "It depends on your diagnosis, your risk factors and how steady your results have been. Someone being watched as a glaucoma suspect is usually reviewed less often than a person whose readings are changing. Your ophthalmologist sets the schedule. At [Mungale Eye Hospital](/contact-us/) in Vadodara, glaucoma evaluation includes pressure testing, optic nerve assessment and visual field testing, so each visit can be compared against the last." },
    { type: "para", text: "Seek same-day eye care for sudden eye pain with redness, blurred vision, coloured haloes around lights, headache or nausea. These can indicate an acute angle-closure attack and should not wait for a routine appointment." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Glaucoma is diagnosed from several tests read together." },
    { type: "item", text: "Normal eye pressure does not rule it out." },
    { type: "item", text: "OCT may show nerve changes before vision is affected." },
    { type: "item", text: "A repeated visual field test is routine and helps confirm results." },
    { type: "item", text: "Regular follow-up testing shows whether treatment is working." },
    { type: "para", text: "This article is general information and does not replace an in-person examination by a qualified ophthalmologist. For the wider picture on causes, symptoms and treatment, read our [complete guide to glaucoma](/blog/glaucoma-symptoms-causes-treatment/)." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Are glaucoma eye tests painful?",
        a: [
          { type: "para", text: "Most people feel little or no discomfort. Numbing drops are used before tests that touch the eye, such as Goldmann tonometry and gonioscopy. Dilating drops blur near vision and increase light sensitivity for a few hours, so it is sensible to bring sunglasses and avoid driving yourself home." },
        ],
      },
      {
        q: "Can I have glaucoma with normal eye pressure?",
        a: [
          { type: "para", text: "Yes. In normal-tension glaucoma, the optic nerve is damaged even though pressure stays within the usual range. This is why ophthalmologists examine the nerve directly, order an OCT scan and test side vision rather than relying on the pressure number alone." },
        ],
      },
      {
        q: "What is the difference between an OCT scan and a visual field test?",
        a: [
          { type: "para", text: "OCT shows structure, meaning how thick the nerve fibre layer is around the optic nerve. The visual field test shows function, meaning how much you can actually see to the sides. Doctors use both so that physical changes can be matched with real effects on vision." },
        ],
      },
      {
        q: "How long does a full glaucoma evaluation take?",
        a: [
          { type: "para", text: "Plan on roughly one to two hours. The tests are quick, but dilating drops take time to work, and a visual field test can take several minutes per eye. The clinic can give you a better estimate when you book, depending on which tests you need." },
        ],
      },
      {
        q: "Why does my visual field result differ from visit to visit?",
        a: [
          { type: "para", text: "Some variation is normal. Tiredness, concentration and familiarity with the test all affect the result, especially early on. Ophthalmologists look for a consistent pattern across several tests rather than reacting to one report, which is how they judge whether glaucoma is stable." },
        ],
      },
      {
        q: "Who should be screened for glaucoma?",
        a: [
          { type: "para", text: "Regular screening makes sense for adults over 40, people with a close relative who has glaucoma, people with diabetes or high myopia, and anyone using steroid medicines long term. Early glaucoma usually causes no symptoms, so a routine eye examination is often how it is found." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: What is glaucoma?](https://www.aao.org/eye-health/diseases/what-is-glaucoma)" },
    { type: "item", text: "[NEI: Glaucoma](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/glaucoma)" },
  ],
  keepReading: [
    { label: "Glaucoma: Symptoms, Causes, Eye Pressure Tests & Treatment", target: "/blog/glaucoma-symptoms-causes-treatment/" },
    { label: "Glaucoma Treatment Options: Drops, Laser or Surgery?", target: "link:2.3" },
    { label: "What Is an Acute Glaucoma Attack? Emergency Symptoms", target: "link:2.4" },
    { label: "Can Glaucoma Be Cured? What Treatment Can and Cannot Restore", target: "link:2.5" },
    { label: "Eye Tests After 40: OCT, Eye Pressure and Retina Checks", target: "link:10.3" },
  ],
};
