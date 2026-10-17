// ─── Treatment page patient guides ────────────────────────────────────────
// Patient-education copy for the six treatment pages — approved by the
// doctors on 2026-10-17 (review checklist in REVIEW.md). Live by default;
// NEXT_PUBLIC_SHOW_TREATMENT_DRAFTS=false hides it (lib/site-config.ts).
// General patient-education phrasing only — no statistics, success rates,
// drug names or prices.

export interface TreatmentDraft {
  whatIsIt: string[];
  symptoms: string[];
  whoNeedsIt: string[];
  howDiagnosed: string[];
  /** Overview only — procedure details already live in the page accordions. */
  treatmentOptions: string[];
  whatToExpect: string[];
  recovery: string[];
  risks: string[];
  costAndInsurance: string[];
  urgentHelp: string;
  faqs: { question: string; answer: string }[];
}

import { cataractSurgeryDraft } from "./cataract-surgery";
import { corneaEvaluationDraft } from "./cornea-evaluation";
import { cornealTreatmentsDraft } from "./corneal-treatments";
import { glaucomaEvaluationDraft } from "./glaucoma-evaluation";
import { glaucomaTreatmentsDraft } from "./glaucoma-treatments";
import { opticalContactLensesDraft } from "./optical-contact-lenses";

export const treatmentDrafts: Record<string, TreatmentDraft> = {
  "cataract-surgery": cataractSurgeryDraft,
  "cornea-evaluation": corneaEvaluationDraft,
  "corneal-treatments": cornealTreatmentsDraft,
  "glaucoma-evaluation": glaucomaEvaluationDraft,
  "glaucoma-treatments": glaucomaTreatmentsDraft,
  "optical-contact-lenses": opticalContactLensesDraft,
};
