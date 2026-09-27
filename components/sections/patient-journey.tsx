import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/motion";

// ─── Patient-journey sections (design.md wireframe) ─────────────────────
// DRAFT-COPY THROUGHOUT: every heading, label, step and question below was
// drafted for layout purposes at the owner's explicit permission — NONE of
// it is hospital-approved copy. Do not present these words as the
// hospital's. Owner sign-off required (docs/CONTENT_GAPS.md).
// Safety rules observed: no medical claims, no diagnoses, no doctor quotes,
// no invented facts; concern pills are NAVIGATION to existing pages (not
// triage); questions have NO answers (answers must come from the doctors).

// ── "Your first visit" — service flow, zero clinical claims ─────────────
const steps = [
  {
    n: "01",
    title: "Arrive",
    text: "Walk in during visiting hours — our front desk registers you and notes your concern.",
  },
  {
    n: "02",
    title: "Examine",
    text: "The doctors examine your eyes with our in-house diagnostic equipment.",
  },
  {
    n: "03",
    title: "Understand",
    text: "Your condition is explained to you in plain language, with time for questions.",
  },
  {
    n: "04",
    title: "Plan",
    text: "You leave with a clear treatment plan, costs explained upfront.",
  },
];

export function FirstVisit() {
  return (
    <section className="py-space-2xl bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <SectionHeader
            eyebrow="First Visit"
            title="Your First Visit"
            subtitle="Know exactly what happens, before you walk in."
          />
        </Reveal>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={0.06 * i} className="h-full">
                <div className="h-full bg-card-white rounded-3xl p-7 ring-1 ring-secondary/10 hover:ring-primary/30 hover:shadow-brand-md hover:-translate-y-1 transition-all duration-200">
                  <p className="font-display-hero text-display-hero text-primary leading-none">
                    {s.n}
                  </p>
                  <span
                    className="block h-0.5 w-8 bg-primary my-4"
                    aria-hidden="true"
                  />
                  <h3 className="font-title-md text-title-md text-on-surface font-bold">
                    {s.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ── "Questions for your doctor" — questions only, answers blocked ───────
const questions = [
  "What is causing my vision problem?",
  "What are my treatment options?",
  "Will I need surgery, or can this wait?",
  "What will recovery look like?",
  "What will it cost — is cashless available?",
];

export function DoctorQuestions() {
  return (
    <section className="py-space-2xl bg-surface-canvas">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Reveal>
          <SectionHeader
            eyebrow="Come Prepared"
            title="Questions For Your Doctor"
            subtitle="Bring these along — good questions lead to clear answers."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="bg-card-white rounded-3xl ring-1 ring-secondary/10 shadow-brand-sm divide-y divide-secondary/10">
            {questions.map((q, i) => (
              <li
                key={q}
                className="flex items-baseline gap-4 px-7 py-5 hover:bg-background transition-colors first:rounded-t-3xl last:rounded-b-3xl"
              >
                <span
                  className="font-label-md text-label-md font-bold text-primary shrink-0"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-title-md text-title-md text-on-surface font-medium">
                  {q}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="text-center mt-8">
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-secondary text-white font-label-md text-label-md font-semibold hover:bg-primary transition-colors"
            >
              <span>Ask us in person — book a consultation</span>
              <ArrowRight className="w-[18px] h-[18px]" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
