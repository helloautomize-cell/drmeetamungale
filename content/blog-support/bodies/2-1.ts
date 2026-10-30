import type { BlogBlock } from "@/content/blog-bodies";

// Article 2.1 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "In its early stage, open-angle glaucoma rarely produces symptoms you would notice. A few people recall subtle changes, like knocking into things on one side or needing more light to read. Acute angle-closure glaucoma behaves differently. It starts suddenly with eye pain, headache, redness, blurred vision and halos around lights, and it needs emergency treatment." },
      ],
    },
    { type: "para", text: "Yes, and that's the case for most people in the early stage. Open-angle glaucoma, the most common form, causes no pain, no redness and no blurring at first. What it does is slowly narrow your field of vision from the outside in, a change so gradual that very few people pick it up themselves. A large share of glaucoma is first spotted during a routine eye test, often one booked for nothing more than new spectacles." },
    { type: "heading", text: "Why can glaucoma stay hidden for years?" },
    { type: "para", text: "Glaucoma damages the optic nerve, the connection between the eye and the brain. In the open-angle type, fluid inside the eye drains a little less freely over time, and intraocular pressure (the pressure of that fluid) creeps upward. The rise is slow enough that the eye never hurts." },
    { type: "para", text: "Your eyes also work as a team. Their fields of view overlap, so a blind patch in one eye is filled in by the other, and the brain presents you with a picture that looks whole." },
    { type: "para", text: "On top of that, glaucoma tends to spare central vision until quite late. You can read a newspaper, thread a needle and pass the letter chart while the nerve is already losing fibres at the edges." },
    { type: "para", text: "Eye pressure isn't a perfect guide either. Some patients have normal-tension glaucoma, where the nerve is damaged even though pressure readings sit within the normal range. A pressure check alone can't give you the all-clear." },
    { type: "heading", text: "Do patients notice anything early on?" },
    { type: "para", text: "Some do, though usually in hindsight. Patients describe catching a shoulder on the same door frame, losing confidence on stairs, or taking longer to see properly after stepping indoors from bright sunlight. Others mention reaching for an extra lamp in the evening. Most had put it down to getting older." },
    { type: "para", text: "Any of these can have ordinary explanations. One check is worth trying, though. Cover one eye, then the other, and compare how much each takes in around the edges. If one side feels noticeably narrower, arrange an eye examination soon rather than waiting to see what happens." },
    { type: "heading", text: "Which eye symptoms need emergency care?" },
    { type: "para", text: "Acute angle-closure glaucoma happens when the drainage angle inside the eye closes off suddenly. Pressure can climb sharply within hours. Go to an eye hospital straight away if you have:" },
    { type: "item", text: "Severe pain in one eye, often with a headache on that side" },
    { type: "item", text: "A red eye along with blurred vision" },
    { type: "item", text: "Rainbow-coloured rings around lights" },
    { type: "item", text: "Nausea or vomiting with the eye pain" },
    { type: "para", text: "Don't reach for old eye drops or wait it out overnight. Quick treatment gives the optic nerve its best protection." },
    { type: "heading", text: "Who should be screened even without symptoms?" },
    { type: "para", text: "With a condition this quiet, your risk profile is a better trigger for testing than any symptom. Speak to an ophthalmologist about screening if you're over 40, have a parent or sibling with glaucoma, or have diabetes, high blood pressure or high myopia (strong short-sightedness). A past eye injury and long-term steroid use, in drop, tablet or inhaler form, add to the risk as well." },
    { type: "para", text: "The assessment itself is painless. Tonometry measures eye pressure, and the doctor examines the optic nerve directly, often adding an OCT scan to measure the nerve fibre layer in fine detail. Gonioscopy checks whether the drainage angle is open or narrow, while a visual field test maps the full reach of your side vision. The diagnosis comes from putting these findings together. At [Mungale Eye Hospital](/contact-us/) in Vadodara, [Dr. Sachin Mungale and Dr. Meeta Mungale](/doctors/) review each patient's results before discussing any treatment." },
    { type: "para", text: "This article is general information. Only an in-person eye examination can confirm or rule out glaucoma." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Early open-angle glaucoma is painless and rarely noticed." },
    { type: "item", text: "The two eyes overlap, so one can mask early loss in the other." },
    { type: "item", text: "Normal eye pressure doesn't exclude glaucoma." },
    { type: "item", text: "Eye pain with redness, halos or nausea is an emergency." },
    { type: "item", text: "Base screening on age, family history and health conditions." },
    { type: "para", text: "For a closer look at causes, tests and treatment, read our [complete guide](/blog/glaucoma-symptoms-causes-treatment/), Glaucoma: Symptoms, Causes, [Eye Pressure Tests & Treatment](/blog/glaucoma-symptoms-causes-treatment/)." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Does blurry vision mean I have glaucoma?",
        a: [
          { type: "para", text: "Usually not. Blurring is much more often due to a change in glasses power, cataract or dry eye. Open-angle glaucoma affects side vision first and leaves central vision sharp until late. Sudden blurring that comes with eye pain and redness is a different matter and may point to angle-closure glaucoma, which needs urgent attention." },
        ],
      },
      {
        q: "Can glaucoma affect just one eye?",
        a: [
          { type: "para", text: "It often begins unevenly, with one eye further along than the other. That imbalance is part of why it goes unnoticed, because the healthier eye quietly makes up for the weaker one. During an assessment, each eye is tested and recorded separately so any difference can be tracked over time." },
        ],
      },
      {
        q: "Can younger people get glaucoma?",
        a: [
          { type: "para", text: "They can, although it's seen less often than in older adults. A strong family history, high myopia, a previous eye injury or long-term steroid use can all raise the risk at a younger age. Some forms also appear in infants and children. If any of these apply, regular eye checks make sense whatever your age." },
        ],
      },
      {
        q: "Does glaucoma cause headaches?",
        a: [
          { type: "para", text: "The open-angle type generally doesn't. A sudden angle-closure attack can bring a severe headache alongside pain in one eye, redness, blurred vision and coloured halos, sometimes with nausea. That combination needs prompt eye care. An everyday headache without any eye symptoms is rarely connected to glaucoma." },
        ],
      },
      {
        q: "How often should I get checked for glaucoma?",
        a: [
          { type: "para", text: "Your ophthalmologist will decide the interval after your first assessment, based on age, family history, general health and earlier results. People over 40 and those with risk factors such as diabetes or strong short-sightedness are usually reviewed regularly. If early changes show up, follow-up visits are often scheduled closer together." },
        ],
      },
      {
        q: "Can vision lost to glaucoma come back?",
        a: [
          { type: "para", text: "Not at present. Optic nerve damage can't be repaired, so vision that has gone generally stays gone. Eye drops, laser procedures and surgery lower eye pressure to protect the sight you still have. Picking glaucoma up early leaves more healthy vision to protect, which is why routine checks matter so much." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: What is glaucoma?](https://www.aao.org/eye-health/diseases/what-is-glaucoma)" },
    { type: "item", text: "[NEI: Glaucoma](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/glaucoma)" },
  ];
