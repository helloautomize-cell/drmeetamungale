import type { TreatmentDraft } from "./index";

// DRAFT — unreviewed medical copy. Reviewer: Dr. Meeta Mungale
// TODO(doctor): confirm reviewer mapping (optical/contact lenses).
// TODO(doctor): approve any fee statement in costAndInsurance.

export const opticalContactLensesDraft: TreatmentDraft = {
  whatIsIt: [
    "Clear vision needs light to land exactly on the retina at the back of the eye. When it does not, the error is called a refractive error, and it is corrected with spectacles or contact lenses.",
    "The common types, in plain words: short-sightedness (myopia) — near objects are clear, distant ones blur; long-sightedness (hyperopia) — distance is easier than near, and near work strains the eye; astigmatism — an unevenly curved cornea distorts vision at every distance; and presbyopia — the age-related loss of near focus that brings reading glasses, usually in the forties.",
  ],
  symptoms: [
    "Blurred distance or near vision, squinting, or headaches and eye-strain after reading or screen work.",
    "In children: sitting close to the television, holding books very near, or a drop in school performance — signs worth an eye check.",
  ],
  whoNeedsIt: [
    "Anyone whose day-to-day vision blurs — adults at work, students, children — needs an eye examination to measure the error and correct it. Growing children should be re-checked as their number changes, and adults over forty need periodic checks as presbyopia develops. A routine check also matters for people with diabetes, since a shifting spectacle number can be an early sign of other eye problems.",
    "Contact lenses suit people who prefer not to wear spectacles: for sport, for appearance, or where the prescription works better in a lens. Specialty lenses at Mungale Eye Hospital are also used for eyes that ordinary spectacles cannot correct well, such as keratoconus or other irregular corneas.",
  ],
  howDiagnosed: [
    "A refraction test measures your exact spectacle number — usually starting with an automated reading and then refined with the test lenses you look through.",
    "For contact lenses, the cornea's curve is measured too, and the tear film and eye surface are checked to see which type of lens your eye can tolerate safely.",
  ],
  treatmentOptions: [
    "Spectacles are the simplest correction — nothing touches the eye, and they suit nearly everyone including children. Contact lenses sit on the eye itself and give a wider, more natural field of view, but they demand hygiene and discipline.",
    "The lenses themselves range from soft daily and monthly lenses to rigid lenses and specialty designs for irregular corneas; the sections below describe what the clinic fits. There is no single right choice — it is the one that matches your eyes, your routine and how carefully you will follow the care rules. Neither spectacles nor contact lenses change the eye's underlying condition — they correct how it sees.",
  ],
  whatToExpect: [
    "The spectacle prescription visit is short — a number is measured and lenses are made to it. A contact-lens fitting takes longer: trial lenses, a check of fit and movement on the eye, and instruction on putting lenses in, taking them out and caring for them before you wear them home.",
    "New lens wearers are usually reviewed after a short trial period to confirm the eyes are comfortable.",
  ],
  recovery: [
    "There is no recovery as such — vision is corrected as soon as the spectacles or lenses are worn. Eyes may take a few days to adjust to a new prescription or to wearing lenses.",
    "What does need a routine is the review schedule: contact-lens wearers are checked periodically for fit and corneal health, and spectacle numbers are re-measured when vision changes.",
  ],
  risks: [
    "Poorly fitted or poorly cared-for contact lenses can injure or infect the cornea. The basics protect you: wash and dry hands before touching lenses, follow the wearing schedule your doctor gives, never sleep or swim in lenses unless specifically prescribed, and never top up old solution.",
    "If a lens-wearing eye turns red or painful, remove the lens and call the hospital. Spectacles themselves carry essentially no risk.",
  ],
  costAndInsurance: [
    "The cost depends on the examination and on whether you choose spectacles or a particular type of contact lens. Optical correction is generally not an insured procedure; if any related care is, the insurance desk can advise — see /insurance-cashless/.",
  ],
  urgentHelp:
    "A red, painful eye — especially in a contact-lens wearer — should not wait, because a corneal infection can progress quickly. Remove the lens and call Mungale Eye Hospital or visit the nearest emergency facility.",
  faqs: [
    {
      question: "What is the difference between short-sightedness and long-sightedness?",
      answer:
        "In short-sightedness (myopia) near vision is clear and distance blurs; in long-sightedness (hyperopia) near tasks strain the eye. Both are corrected by lenses that refocus light onto the retina.",
    },
    {
      question: "What is astigmatism?",
      answer:
        "Astigmatism means the cornea is curved unevenly — more like a rugby ball than a football — so vision is distorted at all distances. Spectacle or contact lenses are shaped to cancel that unevenness.",
    },
    {
      question: "What is presbyopia and is it a disease?",
      answer:
        "No — it is the normal age-related loss of near focus, usually noticed in the forties when reading becomes difficult. Reading, bifocal or progressive lenses correct it.",
    },
    {
      question: "Should I choose spectacles or contact lenses?",
      answer:
        "Spectacles are simplest and suit almost everyone; contact lenses suit people who prefer no frame — for sport or appearance — or whose corneas need a specialty lens. Your lifestyle and how carefully you will follow lens hygiene are the deciding factors.",
    },
    {
      question: "Are contact lenses safe?",
      answer:
        "They are safe when fitted properly and cared for properly. The rules that matter most: clean hands, the wearing schedule your doctor sets, and removing the lens and calling the hospital if the eye turns red or painful.",
    },
    {
      question: "Can children wear contact lenses?",
      answer:
        "They can in selected situations — especially for medical reasons or specialty fittings — but handling and hygiene must be reliable. The cornea specialist will advise whether lenses are right for your child.",
    },
  ],
};
