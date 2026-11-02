import { siteConfig } from "@/content/site";

export interface Faq {
  question: string;
  answer: string;
}

export type FaqCategory = "appointments" | "eye-health" | "records" | "donation";

export const faqCategories: { id: FaqCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "appointments", label: "Appointments" },
  { id: "eye-health", label: "Eye health" },
  { id: "records", label: "Your records" },
  { id: "donation", label: "Eye donation" },
];

// Category metadata only — questions/answers untouched (verbatim source).
// Indices 8+ are additions written from live site facts (hours, insurance
// desk, emergency numbers, address) — no invented medical claims.
export const faqCategoryMap: Record<number, FaqCategory> = {
  0: "appointments",
  1: "eye-health",
  2: "records",
  3: "eye-health",
  4: "donation",
  5: "donation",
  6: "donation",
  7: "eye-health",
  8: "appointments",
  9: "appointments",
  10: "appointments",
  11: "appointments",
  12: "eye-health",
  13: "appointments",
};

// VERBATIM FAQs from the live site
// (archive/content/pages/faqs.md — page ID 4356, including FAQPage JSON-LD).
// Wording preserved exactly as published.
export const faqs: Faq[] = [
  {
    question: "How do I schedule an appointment with Mungale Eye Hospital",
    // TODO(doctor): confirm role of 8140250055 — it also serves as the
    // insurance-desk line; bookings route to the confirmed main number.
    answer:
      `To schedule an Appointment at Mungale Eye Hospital, you can fill the form here Book an Appointment or call on ${siteConfig.phone} between 9am to 8 pm on week days. The hospital is closed on Sundays`,
  },
  {
    question: "What are the causes of corneal blindness?",
    answer:
      "Injuries to the eye, birth defects, malnutrition, infections, chemical burns, congenital disorders and complications of eye surgery.",
  },
  {
    question: "How do I get a copy of my medical record(s)?",
    answer: "Visit the Mungale Eye Hospital to obtain copy of your Medical Records.",
  },
  {
    question: "What can be done to protect the eyes?",
    answer:
      "The eye needs light in order to work, but too much bright sunlight may be associated with damage to the retina (age related macular degeneration). It is sensible therefore always to wear a hat/cap with a brim or dark glasses when out in bright light. The most important environmental factor associated with eye disease is smoking – smoking is bad for retinas. Yet another reason to give up the habit! Diet is also important – dark green leafy vegetables (spinach, kale, and broccoli) contain micronutrients that are important for the health of the retina. A balanced diet is sensible for all sorts of reasons. Vitamin and mineral supplements in the form of pills or powders have a limited role in protecting the eyes in someone eating a balanced diet. There are some forms of age related macular degeneration that can be helped by these pills – consult your doctor if in doubt. Remember that too many supplements can also be harmful so always only take the recommended dosage.",
  },
  {
    question: "What is an eye bank?",
    answer:
      "The eye bank is a nonprofit organization and obtains, medically evaluates and distributes eyes which are donated by humanitarian citizens for use in cornea transplants, scleral reconstruction, research and education. To ensure patient safety the donated eyes and the donor’s medical history are evaluated by the eye bank staff in accordance with the Eye Bank association of America’s (EBAA) strict medical standards.",
  },
  {
    question: "Who can donate eyes?",
    answer:
      "Eye donors could be of any age group or sex. People who use spectacles, diabetics, patients with high blood pressure, asthma patients and those without communicable diseases can donate eyes. Persons with AIDS, Hepatitis B and C, Rabies, Septicaemia, Acute leukemia (Blood cancer), Tetanus, Cholera, and infectious diseases like Meningitis and Encephalitis cannot donate eyes.",
  },
  {
    question: "How can I become a donor?",
    answer:
      "The most important action you can take is to tell your family and legal representative. Most states now require that families be offered the option of donation when a loved one dies. Families may give consent for donation. It is most helpful if they know how you feel in advance. A donor card can serve as an indication to your family, your legal representative and hospitals of your intention to be an eye donor.",
  },
  {
    question: "What is corneal blindness?",
    answer:
      "Cornea, the main focusing part, is the clear front surface of the eye. Like a window, it allows light to enter the eye. Vision could be markedly reduced or lost if the cornea becomes cloudy or scarred. This condition is known as corneal blindness.",
  },
  {
    question: "Is Mungale Eye Hospital open on Sundays?",
    answer:
      `No. The hospital is open Monday to Saturday, ${siteConfig.hours.time}, and is closed on Sundays. For urgent eye problems, call the emergency numbers listed on the Contact Us page.`,
  },
  {
    question: "Do you offer cashless insurance or TPA support?",
    answer:
      "Yes. Mungale Eye Hospital has an insurance desk that supports cashless hospitalisation for eligible policies and helps with TPA paperwork. Carry your insurance card and ID to your visit, and call ahead to confirm your insurer is covered.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Bring your current glasses or contact-lens prescription if you have one, a list of medicines you take, any previous eye reports or scans, and your insurance card if you plan to use it. If your pupils are dilated, arrange for someone to accompany you.",
  },
  {
    question: "Where is Mungale Eye Hospital located?",
    answer:
      `The hospital is at ${siteConfig.address}. It is a short distance from Raopura, Fatehgunj and the old city areas of Vadodara. Directions and a map are on the Contact Us page.`,
  },
  {
    question: "Does health insurance cover LASIK or cataract surgery?",
    answer:
      "Most Indian health insurance policies treat LASIK as elective and do not cover it. Cataract surgery is a medically necessary procedure and is covered by most policies. Check your specific plan or ask the hospital's insurance desk before booking.",
  },
  {
    question: "What should I do in an eye emergency?",
    answer:
      `Sudden vision loss, a curtain across your vision, severe eye pain, or a chemical or physical eye injury needs same-day care. Call ${siteConfig.emergencyPhone} or ${siteConfig.emergencyPhone2}. Outside hospital hours, go to the nearest emergency department.`,
  },
];
