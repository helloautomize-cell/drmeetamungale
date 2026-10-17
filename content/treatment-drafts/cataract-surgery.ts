import type { TreatmentDraft } from "./index";

// DRAFT — unreviewed medical copy. Reviewer: both doctors (shared area).
// TODO(doctor): approve any fee statement in costAndInsurance.

export const cataractSurgeryDraft: TreatmentDraft = {
  whatIsIt: [
    "A cataract is a clouding of the eye's natural lens. The lens sits just behind the coloured part of the eye and focuses light onto the retina, like a camera lens. When it becomes cloudy, the world looks as if you are looking through a fogged window.",
    "Cataracts most often develop slowly with age, but they can also follow an eye injury, long-term medicine use, diabetes or, rarely, be present from birth. A cataract is not a film over the eye and it cannot spread from one eye to the other, though both eyes may develop one.",
  ],
  symptoms: [
    "Blurred, hazy or dim vision that glasses do not fully correct.",
    "Glare from lights, halos around lamps, or trouble driving at night.",
    "Colours looking faded or yellowish, and needing brighter light to read.",
    "Frequent changes in your spectacle number, or double vision in one eye.",
  ],
  whoNeedsIt: [
    "Not every cataract needs surgery straight away. Surgery is usually discussed when cloudy vision starts to interfere with everyday life — reading, watching television, recognising faces, working or driving.",
    "The timing is decided together with your doctor after an examination. In a few situations — such as a very dense cataract, or a cataract making another eye condition harder to manage — earlier surgery may be advised.",
  ],
  howDiagnosed: [
    "Your doctor examines the lens under the microscope-like slit lamp after dilating the pupil with drops. The visit also includes a vision check and an eye-pressure reading.",
    "Before surgery, the eye is measured carefully — the length of the eye and the curve of the cornea — so the power of the artificial lens can be calculated for your eye.",
  ],
  treatmentOptions: [
    "No eye drop or medicine can remove a cataract; the cloudy lens has to be removed surgically and replaced with a clear artificial lens, called an Intraocular Lens (IOL). At Mungale Eye Hospital, cataract is removed with phacoemulsification, in which ultrasound gently breaks the lens into fine particles through a small incision, and the artificial lens is placed inside.",
    "There are different types of intraocular lenses for different needs — for distance vision, near vision, or both — and your doctor will explain which type suits your eye and daily routine. The detailed descriptions of our surgical systems are in the sections below.",
  ],
  whatToExpect: [
    "Cataract surgery at Mungale Eye Hospital is a day-care procedure: you come in, have the operation, and go home the same day with a protective cover or glasses over the eye. It is usually done with numbing eye drops or a small injection near the eye, so you stay awake but should not feel pain.",
    "The operation itself takes only a short time, though you should plan to spend a few hours at the hospital for preparation and observation afterwards. Bring a family member or friend to take you home.",
  ],
  recovery: [
    "Most people notice brighter, clearer vision within a few days, though full settling can take a few weeks. Your doctor will prescribe eye drops to prevent infection and control inflammation — use them exactly as instructed and do not skip the follow-up visits.",
    "For the first days: do not rub or press the eye, keep soap and dirty water out of it, and avoid heavy lifting, bending and dusty surroundings until your doctor says otherwise.",
  ],
  risks: [
    "Cataract surgery is one of the most commonly performed operations in the world, but like any surgery it carries some risk. Uncommon problems include infection or inflammation inside the eye, a rise in eye pressure, or — rarely — retinal complications.",
    "Months or years after surgery, the thin membrane behind the artificial lens can sometimes cloud over. This is not the cataract returning; it can be treated with a short laser procedure at the hospital.",
  ],
  costAndInsurance: [
    "The cost of cataract surgery depends on your examination and on the type of intraocular lens and technique chosen for your eye. The team will explain the options after your check-up.",
    "Mungale Eye Hospital has an insurance and cashless desk — see /insurance-cashless/ for how cashless claims and reimbursement work before you plan the surgery.",
  ],
  urgentHelp:
    "After surgery, call the hospital or visit the nearest emergency facility if you get increasing pain, a red eye, new discharge, or a sudden drop in vision. These need prompt review, not a wait-and-watch.",
  faqs: [
    {
      question: "Is cataract surgery done with a laser?",
      answer:
        "The standard technique at Mungale Eye Hospital is phacoemulsification, which uses ultrasound through a small incision. Some steps of cataract surgery can also be done with laser assistance where available; your doctor will tell you what is suitable for your eye.",
    },
    {
      question: "Will I be awake during the operation?",
      answer:
        "Yes, most cataract surgery is done under local anaesthesia — numbing drops or a small injection. You will be awake but should not feel pain, and the team will talk you through it.",
    },
    {
      question: "Will I still need glasses after surgery?",
      answer:
        "That depends on the intraocular lens chosen and your eye. Many people need reading glasses and some need a small distance correction. Your doctor will explain what to expect before you choose the lens.",
    },
    {
      question: "Can a cataract come back after surgery?",
      answer:
        "No. Once the cloudy lens is removed it cannot regrow. The membrane behind the artificial lens can occasionally become cloudy later, and that is corrected with a brief laser treatment.",
    },
    {
      question: "How long should I rest after surgery?",
      answer:
        "Light activity is usually fine within a day or two, but follow your doctor's advice on drops, eye protection and follow-up visits, and avoid rubbing the eye or heavy exertion until cleared.",
    },
    {
      question: "Is cataract surgery covered by insurance?",
      answer:
        "Cataract surgery is covered under many health-insurance policies in India. Our insurance desk can check your policy and explain cashless or reimbursement options — see /insurance-cashless/.",
    },
  ],
};
