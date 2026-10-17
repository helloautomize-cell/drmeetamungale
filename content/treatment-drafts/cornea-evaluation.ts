import type { TreatmentDraft } from "./index";

// DRAFT — unreviewed medical copy. Reviewer: Dr. Meeta Mungale (cornea).
// TODO(doctor): approve any fee statement in costAndInsurance.

export const corneaEvaluationDraft: TreatmentDraft = {
  whatIsIt: [
    "The cornea is the clear dome at the front of the eye — its 'window'. It does most of the eye's focusing work, so even a small change in its clarity or shape can disturb vision a great deal.",
    "A cornea evaluation maps that window in detail: how clear it is, how thick, how curved, how healthy its innermost cell layer is, and how stable the tear film on its surface is.",
  ],
  symptoms: [
    "Blurred or distorted vision that spectacles do not fully correct.",
    "Redness, pain, watering, a gritty foreign-body feeling, or discomfort in bright light.",
    "A white spot or haze on the cornea, or vision that worsens over days.",
    "Increasing glare or distorted, irregular vision — a pattern seen in keratoconus, a condition where the cornea slowly thins and bulges forward.",
  ],
  whoNeedsIt: [
    "A cornea evaluation is recommended for anyone with the symptoms above, for people told they may have keratoconus or a corneal scar, before refractive (glasses-removal) surgery, after a chemical or physical eye injury, and for contact-lens wearers whose vision is no longer clear.",
    "It is also the first step before most corneal surgery, since the measurements guide which treatment is possible. If you have a family history of keratoconus, or a child keeps rubbing itchy eyes and their spectacle number keeps changing, a cornea check is a sensible precaution — early keratoconus is easier to manage than advanced disease.",
  ],
  howDiagnosed: [
    "The evaluation begins at the slit lamp, the microscope with a bright light that lets the doctor inspect the cornea's surface and layers closely.",
    "Specialist instruments then do the mapping at Mungale Eye Hospital. Pachymetry measures corneal thickness. Corneal topography maps the front surface's curve and is central to detecting keratoconus. Specular microscopy photographs and counts the cells lining the inside of the cornea — important before transplantation or when that cell layer is suspected to be weak. Dry Eye Analysis (IDRA) assesses the tear film, and the ANTERION images the whole front segment of the eye in fine detail.",
    "If infection is suspected, a small, gentle scraping may be taken so a microbiology test can identify the cause — this guides which treatment will work.",
  ],
  treatmentOptions: [
    "The evaluation does not treat anything by itself; it tells your cornea specialist exactly what the cornea needs — from drops or a contact lens to a procedure. The conditions and treatments themselves are described on the corneal-treatments page and in the sections below.",
  ],
  whatToExpect: [
    "These are quick, non-contact or near-contact tests done in the clinic, most taking a few minutes. Some drops may be used for certain measurements, and a scraping — only if infection is suspected — is done after numbing the eye.",
    "A full evaluation may span more than one visit if several measurements are needed. At the end your cornea specialist puts the findings together and explains in plain words what the cornea needs next.",
    "Bring your current spectacles and any contact lenses you wear; you may be asked to leave lenses out for a period before the visit so the measurements are accurate.",
  ],
  recovery: [
    "There is no recovery needed after an evaluation — you can return to normal activity straight away. If drops were used to widen the pupil, near vision may blur for a few hours.",
    "What does need follow-up is what the evaluation finds: conditions such as keratoconus or a weak inner cell layer are monitored over time, and keeping review visits is how progression is caught early.",
  ],
  risks: [
    "The evaluation itself is low risk. The real risk is delay: a corneal infection can damage the eye within days, so a red, painful eye with falling vision should never wait for a routine slot.",
  ],
  costAndInsurance: [
    "The cost depends on which measurements your eyes need. If a procedure is advised afterwards, the team will explain the options, and our insurance desk can check whether your policy covers it — see /insurance-cashless/.",
  ],
  urgentHelp:
    "A red, painful eye with discharge and vision getting worse can be a corneal infection (ulcer) — call Mungale Eye Hospital or visit the nearest emergency facility the same day. Chemical splashes in the eye need immediate washing with clean water and urgent review.",
  faqs: [
    {
      question: "What is the cornea and why does it matter so much?",
      answer:
        "The cornea is the clear front window of the eye and its strongest focusing surface. If it turns cloudy, scarred or misshapen, vision blurs — sometimes even with well-fitted spectacles.",
    },
    {
      question: "What is keratoconus?",
      answer:
        "Keratoconus is a condition in which the cornea gradually thins and bulges forward, making vision distorted and irregular. Topography and pachymetry detect and track it, and the cornea specialist will discuss how to manage it.",
    },
    {
      question: "I wear contact lenses — should I stop before the evaluation?",
      answer:
        "You may be asked to leave contact lenses out for a short time before the visit so the cornea's true shape is measured. If your eye becomes red or painful, remove the lens and call the hospital.",
    },
    {
      question: "What is specular microscopy?",
      answer:
        "It is a scan that photographs and counts the cells lining the inside of the cornea. That cell layer keeps the cornea clear, so the count matters before transplant surgery or when the layer is suspected to be weak.",
    },
    {
      question: "Is a corneal scraping painful?",
      answer:
        "The eye is numbed first with drops, so most people feel only gentle pressure. The sample is tiny and is what allows treatment to target the exact germ causing an infection.",
    },
    {
      question: "When should I see a cornea specialist rather than wait?",
      answer:
        "A red, painful eye with falling vision, a white spot on the cornea, a chemical injury, or vision that spectacles no longer correct — these warrant a cornea review, and an infected eye should not wait.",
    },
  ],
};
