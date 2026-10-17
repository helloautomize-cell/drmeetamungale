import type { TreatmentDraft } from "./index";

// DRAFT — unreviewed medical copy. Reviewer: Dr. Meeta Mungale (cornea).
// TODO(doctor): approve any fee statement in costAndInsurance.

export const cornealTreatmentsDraft: TreatmentDraft = {
  whatIsIt: [
    "Corneal treatment covers a wide range: infections and injuries that must be controlled quickly, surface disorders, keratoconus, scars that need transplantation, and dry eye. What they share is that the right treatment depends on which layer and which part of the cornea is affected — the evaluation described on the cornea-evaluation page is what maps that.",
  ],
  symptoms: [
    "Corneal problems typically announce themselves: redness, pain or a gritty feeling, watering, sensitivity to light, blurred or distorted vision, or a visible white or grey spot on the eye.",
    "Any of these — especially pain with falling vision — deserves a cornea review rather than home remedies or over-the-counter drops.",
  ],
  whoNeedsIt: [
    "People with a corneal infection, a chemical or physical injury, keratoconus, a corneal scar or swelling that spectacles cannot overcome, a persistent surface problem such as pterygium, or troublesome dry eye.",
    "Children with corneal injuries and patients whose corneas have been damaged by past infection or surgery also come under corneal care.",
  ],
  howDiagnosed: [
    "Diagnosis starts at the slit lamp, supported by the instruments described on the cornea-evaluation page — topography for shape, pachymetry for thickness, specular microscopy for the inner cell layer, Dry Eye Analysis (IDRA) for the tear film, and a microbiology scraping when infection is suspected.",
  ],
  treatmentOptions: [
    "Corneal infections — including bacterial, fungal and Acanthamoeba keratitis — come first, because they are the primary focus of our cornea specialist and because they can threaten sight quickly. Treatment is directed at the identified cause, after the scraping tells us what it is.",
    "Keratoconus may be managed with specialty contact lenses or with Corneal Collagen Cross-linking, a treatment that strengthens a thinning cornea to slow its progression. When a cornea is scarred or swollen beyond useful vision, part or all of it can be replaced — keratoplasty — with newer techniques such as Deep Anterior Lamellar Keratoplasty (DALK), Descemet's Stripping Endothelial Keratoplasty (DSEK) and Descemet Membrane Endothelial Keratoplasty (DMEK) replacing only the diseased layers, and Penetrating Keratoplasty (PK) replacing the full thickness.",
    "Surface problems — chemical burns, pterygium, damaged surface cells — may need ocular-surface procedures such as amniotic membrane grafting or Simple Limbal Epithelial Transplantation (SLET). Dry eye and Meibomian Gland Dysfunction are assessed with Dry Eye Analysis (IDRA), and treatments such as E-Eye are used where suitable. The detailed list for each condition is in the sections below.",
  ],
  whatToExpect: [
    "Many corneal treatments are clinic visits with prescribed drops and reviews; surgery — transplant, cross-linking or surface surgery — is planned after measurements and counselling, and is usually a day-care procedure.",
    "Your doctor will tell you what preparation, anaesthesia and visit schedule your particular procedure involves.",
  ],
  recovery: [
    "Recovery varies widely: a treated infection may settle over weeks of drops and reviews, while a transplant needs months of follow-up and, often, stitch adjustments or removal later. Use every drop exactly as prescribed and keep every review appointment — the healing cornea needs watching.",
    "Protect the eye from dust, dirty water and rubbing throughout recovery.",
  ],
  risks: [
    "Infections can leave a scar even after the germ is cleared, which is why they are treated urgently. Surgery carries the usual possibilities — infection, inflammation, graft rejection after transplant, or the need for a further procedure — all of which your doctor will discuss beforehand.",
    "Cross-linking aims to slow keratoconus rather than reverse it, and a transplanted cornea needs lifelong follow-up.",
  ],
  costAndInsurance: [
    "Costs depend on the diagnosis and on which option your cornea needs — the range runs from clinic care to surgery. The team will explain the choices after your evaluation, and our insurance desk can check your policy cover. See /insurance-cashless/ for how claims work at Mungale Eye Hospital.",
  ],
  urgentHelp:
    "A red, painful eye with discharge and worsening vision can be a corneal ulcer — get it seen the same day. A chemical splash in the eye needs immediate washing with clean water and urgent review; call the hospital or visit the nearest emergency facility.",
  faqs: [
    {
      question: "How do I know if my red eye is a corneal infection?",
      answer:
        "You cannot reliably tell at home — pain, light sensitivity, discharge and falling vision are warning signs, and some infections look similar early on. A cornea specialist examines and, if needed, takes a scraping to identify the cause.",
    },
    {
      question: "What is cross-linking for keratoconus?",
      answer:
        "Corneal Collagen Cross-linking strengthens a thinning, weakening cornea using riboflavin drops and ultraviolet light. Its purpose is to slow the progression of keratoconus, not to reverse the existing change.",
    },
    {
      question: "What is a corneal transplant (keratoplasty)?",
      answer:
        "It replaces diseased or scarred cornea with healthy donor tissue. Depending on which layers are diseased, the transplant may replace only part of the cornea — as in DALK, DSEK or DMEK — or the full thickness (penetrating keratoplasty).",
    },
    {
      question: "Are transplanted corneas from donors safe?",
      answer:
        "Donor tissue comes from eye banks where it is collected and tested. Your surgeon will explain how tissue is selected and what follow-up a transplant needs.",
    },
    {
      question: "Can dry eye be treated or only managed?",
      answer:
        "Dry eye is usually managed over time rather than cured, and the plan follows what your tear-film analysis shows — including options such as E-Eye where suitable. Dr. Meeta Mungale will explain what applies to your eyes.",
    },
    {
      question: "What is ocular surface surgery?",
      answer:
        "It covers procedures that rebuild the eye's surface — for example amniotic membrane grafting or Simple Limbal Epithelial Transplantation (SLET) — after chemical burns, pterygium or surface-cell damage.",
    },
    {
      question: "Will my vision be normal after a corneal transplant?",
      answer:
        "Vision after transplant improves gradually over months and often needs spectacles or a contact lens for a good result. The outcome depends on why the cornea failed and how the eye heals.",
    },
  ],
};
