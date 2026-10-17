import type { TreatmentDraft } from "./index";

// DRAFT — unreviewed medical copy. Reviewer: Dr. Sachin Mungale (glaucoma).
// TODO(doctor): approve any fee statement in costAndInsurance.

export const glaucomaTreatmentsDraft: TreatmentDraft = {
  whatIsIt: [
    "Glaucoma cannot be cured, but it can usually be controlled. Every glaucoma treatment has the same single goal: lower the Intraocular Pressure (IOP) to a level your optic nerve can live with, so that further damage is slowed or stopped.",
    "The level that is safe differs from eye to eye, so treatment is individual. What works is decided by the type of glaucoma you have, how far it has progressed, and how your eye responds over time.",
  ],
  symptoms: [
    "Most glaucoma gives no warning signs, so treatment usually begins from what the evaluation shows rather than what you feel. That is also why continuing treatment matters even when the eyes seem normal.",
    "If pressure rises suddenly — in the uncommon acute form — the eye becomes painful and red with halos and nausea. See the urgent-help note below.",
  ],
  whoNeedsIt: [
    "Anyone diagnosed with glaucoma needs some form of pressure-lowering care. People whose drainage angles are narrow may need a laser procedure even before nerve damage begins, to prevent a sudden pressure rise.",
    "The choice among drops, laser and surgery depends on the evaluation results, not on age alone.",
  ],
  howDiagnosed: [
    "Treatment choices follow the evaluation described on our glaucoma-evaluation page: eye pressure, the drainage angle on gonioscopy, the optic nerve, the visual field and the Optical Coherence Tomography (OCT) scan, plus how these change over follow-up.",
  ],
  treatmentOptions: [
    "The usual first step is prescription eye drops that lower pressure; your doctor will prescribe the ones suited to you and check how well they work at follow-up visits. Two kinds of laser are also used at Mungale Eye Hospital: Selective Laser Trabeculoplasty (SLT), which gently treats the drainage tissue to help fluid leave the eye, and Nd:YAG Laser Peripheral Iridotomy, a tiny opening made at the edge of the iris for narrow-angle eyes.",
    "When drops and lasers are not enough, surgery creates a new route for fluid to leave the eye. Conventional surgery such as trabeculectomy, Minimally Invasive Glaucoma Surgery (MIGS), and glaucoma drainage implants are all performed here, and children born with congenital glaucoma have their own surgical options. The full procedure-by-procedure details are in the sections below.",
  ],
  whatToExpect: [
    "Drops are used at home, every day — the follow-up visit is where your doctor checks pressure and decides whether to continue, change or add a step. Laser procedures are short outpatient procedures done with numbing drops, and most people go home the same day.",
    "Glaucoma surgery involves more preparation and more follow-up visits, since the operated eye needs watching while it settles. Your doctor will explain what your specific procedure involves.",
  ],
  recovery: [
    "After laser procedures, most people are back to routine quickly with prescribed drops for a short while. After surgery, expect a protected eye, regular drops and several review visits; avoid rubbing the eye and heavy exertion until cleared.",
    "Vision can fluctuate for a while after surgery while the new drainage settles — this is expected and is why the follow-up schedule matters.",
  ],
  risks: [
    "Each option has its own balance. Drops can irritate the eye or lose effect over time. Lasers can fail to lower pressure enough or wear off. Surgery carries the usual surgical risks — infection, bleeding, pressure that ends up too low or still too high — and sometimes needs a further procedure later.",
    "None of this replaces a discussion of your own eye; the section-by-section details below carry the specifics.",
  ],
  costAndInsurance: [
    "The cost depends on which treatment your glaucoma needs — drops, laser or a particular surgery — and on your examination findings.",
    "Glaucoma procedures are covered under many health-insurance policies. See /insurance-cashless/ for how claims work at Mungale Eye Hospital, or call the team before planning surgery.",
  ],
  urgentHelp:
    "Sudden severe eye pain with headache, blurred vision, halos, a red eye or nausea can mean an acute pressure rise. Call Mungale Eye Hospital or visit the nearest emergency facility immediately — do not wait for the next appointment.",
  faqs: [
    {
      question: "Will eye drops cure my glaucoma?",
      answer:
        "No. Glaucoma is controlled, not cured — drops keep the pressure down while you use them. If they are stopped without asking your doctor, the pressure usually rises again.",
    },
    {
      question: "What is SLT and is it an operation?",
      answer:
        "Selective Laser Trabeculoplasty (SLT) is a clinic laser procedure, not an operation in the theatre. It treats the eye's drainage tissue so fluid leaves the eye more easily and pressure comes down.",
    },
    {
      question: "What is the YAG laser procedure for?",
      answer:
        "The Nd:YAG Laser Peripheral Iridotomy makes a tiny opening at the edge of the iris. It is used in narrow-angle eyes to improve fluid flow and prevent a sudden pressure rise.",
    },
    {
      question: "If I have surgery, can I stop my drops?",
      answer:
        "Sometimes the number of drops can be reduced, and sometimes drops are still needed. That is decided at follow-up visits by checking your pressure — do not stop or restart drops on your own.",
    },
    {
      question: "What is a glaucoma drainage implant?",
      answer:
        "It is a small device placed in the eye to carry fluid out and lower pressure, used when other routes are not enough. Different implants are used for different situations — the sections below list the ones used here.",
    },
    {
      question: "My child has congenital glaucoma — is that treated the same way?",
      answer:
        "Childhood glaucoma is different and usually needs surgery early; several of the procedures in the sections below are designed for children. Dr. Sachin Mungale will explain the approach for your child.",
    },
    {
      question: "How do I know the treatment is working?",
      answer:
        "By the follow-up tests — pressure, visual field and OCT — not by how the eye feels, since glaucoma rarely causes symptoms. Keeping your review appointments is part of the treatment.",
    },
  ],
};
