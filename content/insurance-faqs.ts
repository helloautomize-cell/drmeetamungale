export interface InsuranceFaq {
  question: string;
  answer: string;
}

// VERBATIM insurance FAQs from archive/content/pages/insurance-cashless.md
// (page ID 5409) + its FAQPage JSON-LD block. Shared by the page render and
// the FAQPage JSON-LD payload so both stay identical.
export const insuranceFaqs: InsuranceFaq[] = [
  {
    question: "Which eye hospital in Vadodara provides cashless treatment?",
    answer:
      "Mungale Eye Hospital provides cashless treatment for eligible eye surgeries through selected insurance providers, subject to approval and policy terms.",
  },
  {
    question: "Is cashless eye surgery available in Vadodara?",
    answer:
      "Yes, cashless eye surgery is available in Vadodara for eligible procedures like cataract surgery, depending on insurer or TPA approval and policy coverage.",
  },
  {
    question: "Which insurance companies are accepted for cashless eye treatment in Vadodara?",
    answer:
      "Mungale Eye Hospital is currently empanelled with selected insurers including HDFC ERGO, IFFCO Tokio, Navi General Insurance, and Tata AIG for eligible cashless eye treatment. If your insurer is not on this list, you may still be eligible for reimbursement after treatment. Please call us to check the current empanelment status.",
  },
  {
    question: "Does Mungale Eye Hospital offer cashless cataract surgery in Vadodara?",
    answer:
      "Yes, eligible patients undergoing cataract surgery at Mungale Eye Hospital in Vadodara may be able to use cashless insurance support, subject to insurer or TPA approval and policy coverage.",
  },
  {
    question: "Is cataract surgery covered by health insurance?",
    answer:
      "In many cases, medically necessary cataract surgery is covered under health insurance and may be eligible for cashless treatment. Final approval depends on your policy terms, waiting period, exclusions, diagnosis, and insurer or TPA approval.",
  },
  {
    question: "What procedures are covered under cashless treatment?",
    answer:
      "Most planned eye surgeries and procedures, including cataract surgery, glaucoma procedures, retina treatments, and corneal treatments, may be considered under health insurance. Coverage depends on your diagnosis, policy terms, exclusions, waiting periods, and insurer or TPA approval.",
  },
  {
    question: "Do I need to pay anything upfront for cashless eye surgery?",
    answer:
      "In many approved cashless cases, you do not have to pay the covered amount upfront. However, some policies include co-payment, deductibles, exclusions, or non-covered items, and our team will explain any out-of-pocket costs before your procedure begins.",
  },
  {
    question: "What documents are required for cashless hospitalization?",
    answer:
      "Please carry your health insurance card or policy number, a valid photo ID, referral papers if required, and any previous consultation papers, reports, or investigation records related to your eye condition.",
  },
  {
    question: "What if my cashless request is not approved?",
    answer:
      "If pre-authorization is not granted, you can still proceed with treatment and file for reimbursement with your insurer directly, depending on your policy terms. We will provide all necessary medical records, bills, and supporting documents.",
  },
];
