import type { TreatmentDraft } from "./index";

// DRAFT — unreviewed medical copy. Reviewer: Dr. Sachin Mungale (glaucoma).
// TODO(doctor): approve any fee statement in costAndInsurance.

export const glaucomaEvaluationDraft: TreatmentDraft = {
  whatIsIt: [
    "Glaucoma is a group of eye diseases that slowly damage the optic nerve — the cable that carries pictures from the eye to the brain. It is usually linked to a rise in the pressure inside the eye, called Intraocular Pressure (IOP), though glaucoma can also occur with normal pressure.",
    "The worrying part is that most glaucoma begins silently. There is often no pain and no early warning sign, and the side (peripheral) vision is lost so gradually that people notice only after real damage is done. Vision lost to glaucoma cannot be brought back — which is why testing matters more than symptoms.",
  ],
  symptoms: [
    "Most people with early glaucoma notice nothing at all.",
    "As it advances: missing objects at the side, bumping into things, or needing more light to see well.",
    "One uncommon type can strike suddenly — severe eye pain, headache, halos around lights, a red eye and nausea. That is an emergency (see the urgent-help note below).",
  ],
  whoNeedsIt: [
    "A glaucoma evaluation is worth considering if you are over 40, have a close relative with glaucoma, have diabetes or high blood pressure, use steroid medicines for a long time (drops, tablets or inhalers), have a high spectacle number, or have had an eye injury in the past.",
    "It is also done when a routine eye check finds a suspicious-looking optic nerve or a pressure reading that needs watching.",
  ],
  howDiagnosed: [
    "Glaucoma is not diagnosed by one number. At Mungale Eye Hospital the work-up brings several tests together:",
    "Eye pressure is measured with a tonometer — several instruments are used so the reading can be checked comfortably for every patient, including children and patients who find it hard to sit at the machine.",
    "Gonioscopy uses a special contact lens to look at the eye's drainage angle and tells the open-angle and narrow-angle types apart. The thickness of the cornea is measured with pachymetry, since a thicker or thinner cornea changes what a pressure reading really means.",
    "The optic nerve is examined directly, mapped with a visual-field (perimetry) test that records where you can and cannot see, and scanned with Optical Coherence Tomography (OCT), which images the nerve-fibre layer in fine detail. Fundus photography may record the nerve's appearance for future comparison.",
  ],
  treatmentOptions: [
    "The evaluation itself is the first step: its results decide whether you need observation, medicines, laser or surgery. The treatment options — from eye drops to laser and surgical procedures — are described in the sections below and on the glaucoma-treatments page.",
  ],
  whatToExpect: [
    "The tests are done in the clinic and most take only a few minutes each. Some visits include dilating drops, which can blur near vision for a few hours, so it is wise not to drive yourself home and to bring your current glasses and medicine list.",
    "Nothing about the tests is painful for most people. At the end, your doctor explains what each result means for your eye.",
  ],
  recovery: [
    "These are clinic tests, not surgery — there is no recovery period. If dilating drops were used, the blurring fades on its own over a few hours.",
  ],
  risks: [
    "The tests themselves carry little risk. Dilating drops can briefly raise pressure in eyes with very narrow drainage angles, so tell the team if you have ever had sudden eye pain or been told your angles are narrow.",
    "The bigger risk lies in skipping the evaluation: glaucoma can progress quietly between check-ups, which is why follow-up visits matter even when you feel fine.",
  ],
  costAndInsurance: [
    "The cost of a glaucoma work-up depends on which tests your eyes need. Long-term glaucoma care may be covered under some health-insurance policies — our team or the insurance desk can advise.",
    "See /insurance-cashless/ for how cashless and reimbursement claims work at Mungale Eye Hospital.",
  ],
  urgentHelp:
    "Sudden severe eye pain with headache, blurred vision, halos around lights, nausea or vomiting — especially in one eye — can be an acute rise in eye pressure. Call Mungale Eye Hospital or visit the nearest emergency facility right away.",
  faqs: [
    {
      question: "I have no symptoms. Why do I need a glaucoma test?",
      answer:
        "Because early glaucoma usually causes no symptoms at all. The aim of testing is to find it — or rule it out — before vision is affected, especially if you are over 40 or have a family history.",
    },
    {
      question: "Is glaucoma just about eye pressure?",
      answer:
        "Pressure matters, but it is not the whole story. The diagnosis weighs the pressure reading together with the optic nerve's appearance, the visual field and the OCT scan. Some people have glaucoma with normal pressure, and some have raised pressure without glaucoma.",
    },
    {
      question: "Will the tests hurt?",
      answer:
        "No. Tonometry, the field test, OCT and fundus photography are all quick and non-invasive. Dilating drops can sting for a few seconds and blur near vision for a few hours.",
    },
    {
      question: "Can vision lost to glaucoma be recovered?",
      answer:
        "Unfortunately, no — optic-nerve damage is permanent. What treatment can do is help prevent or slow further loss, which is why early detection and regular follow-up are so important.",
    },
    {
      question: "How often should a glaucoma evaluation be repeated?",
      answer:
        "That depends on your results. Some people need review every few months, others once a year or less. Your doctor will set the schedule — keeping those visits matters even when you feel well.",
    },
    {
      question: "Does glaucoma run in families?",
      answer:
        "It can. If a parent, brother or sister has glaucoma, your own risk is higher, and regular eye-pressure and nerve checks are a sensible precaution.",
    },
  ],
};
