import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tabs } from "@/components/ui/Tabs";
import { Reveal } from "@/components/ui/motion";
import { treatments, type Treatment } from "@/content/treatments";
import {
  EyeExamIcon,
  EyeDropsIcon,
  LaserBeamIcon,
  SurgeryIcon,
  LensIcon,
  OpticsIcon,
} from "@/components/icons/duotone";

// ─── 4.5 Treatments showcase ────────────────────────────────────────────
// Reference tabs (Skin/Hair/Body) remapped to eye-care groups. All copy uses
// verbatim homepage descriptions (content/treatments.ts).
// Visual: icon-led editorial cards in the single duotone brand line — the
// generic flat service PNGs are retired from card art (source files untouched
// in archive/) so treatments no longer clash with real photography elsewhere.
// Tab switches animate (animate-tab-in, reduced-motion safe); cards stagger
// in with lift + brand-tinted hover shadows.
const groups: { id: string; label: string; slugs: string[] }[] = [
  { id: "diagnosis", label: "Diagnosis", slugs: ["cornea-evaluation", "glaucoma-evaluation"] },
  {
    id: "treatment",
    label: "Treatment & Surgery",
    slugs: ["corneal-treatments", "glaucoma-treatments", "cataract-surgery"],
  },
  { id: "vision", label: "Vision Correction", slugs: ["optical-contact-lenses"] },
];

const treatmentIcons: Record<string, ComponentType<{ className?: string }>> = {
  "cornea-evaluation": EyeExamIcon,
  "glaucoma-evaluation": EyeDropsIcon,
  "corneal-treatments": LaserBeamIcon,
  "glaucoma-treatments": SurgeryIcon,
  "cataract-surgery": LensIcon,
  "optical-contact-lenses": OpticsIcon,
};

function TreatmentCard({ t, index }: { t: Treatment; index: number }) {
  const Icon = treatmentIcons[t.slug] ?? EyeExamIcon;
  return (
    <Reveal delay={0.06 * index} className="h-full">
      <div className="h-full bg-card-white rounded-3xl p-7 shadow-sm ring-1 ring-border-light/50 hover:shadow-brand-md hover:-translate-y-1 hover:ring-primary/20 transition-all duration-200 flex flex-col group">
        <span className="w-14 h-14 rounded-2xl bg-surface-tint flex items-center justify-center text-primary mb-5 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-fixed group-hover:text-white group-hover:shadow-brand-sm transition-all duration-200">
          <Icon className="w-8 h-8" />
        </span>
        <h3 className="font-title-md text-title-md text-on-surface font-bold">{t.title}</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed flex-1">
          {t.description}
        </p>
        <div className="mt-6 pt-4 border-t border-border-light flex items-center justify-between">
          <Link
            href={"/treatments/" + t.slug + "/"}
            className="font-label-sm text-label-sm text-primary font-bold inline-flex items-center gap-1 hover:gap-2 transition-all"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact-us/"
            className="w-9 h-9 rounded-full bg-surface-tint text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary hover:shadow-brand-sm transition-all"
            aria-label={"Book appointment for " + t.title}
          >
            <ArrowUpRight className="w-[18px] h-[18px]" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

export function TreatmentsShowcase() {
  const tabs = groups.map((g) => ({
    id: g.id,
    label: g.label,
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {g.slugs.map((slug, i) => {
          const t = treatments.find((x) => x.slug === slug)!;
          return <TreatmentCard key={slug} t={t} index={i} />;
        })}
      </div>
    ),
  }));

  return (
    <section className="py-space-2xl bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <SectionHeader
            eyebrow="Our Specialities"
            title="Signature Eye Care Treatments"
            subtitle="Specialized eye care in subspecialties such as cornea, retina, glaucoma and cataract — with a full range of state-of-the-art diagnostic, curative, and surgical equipment."
          />
        </Reveal>
        <Tabs tabs={tabs} defaultTab="diagnosis" />
        <div className="mt-10 text-center">
          <Link
            href="/treatments/"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-card-white ring-1 ring-border-light hover:ring-primary/40 hover:shadow-brand-sm hover:-translate-y-px text-primary font-label-md text-label-md transition-all"
          >
            <span>Explore All 6 Treatments</span>
            <ArrowRight className="w-[18px] h-[18px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
