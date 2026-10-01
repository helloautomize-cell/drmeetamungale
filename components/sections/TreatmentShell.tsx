import Link from "next/link";
import { getTreatmentDetail } from "@/content/treatment-details";
import { MedicalReviewByline } from "@/components/seo/MedicalReviewByline";

// ─── TreatmentShell ────────────────────────────────────────────────────────
// Shared child-page frame: warm paper, 1280px container, quiet breadcrumb
// (Home / Treatments / Current). Sections compose inside.
export function TreatmentShell({
  current,
  slug,
  children,
}: {
  current: string;
  slug?: string;
  children: React.ReactNode;
}) {
  const detail = slug ? getTreatmentDetail(slug) : undefined;
  return (
    <div className="bg-background">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-2 lg:pt-4">
        <nav aria-label="Breadcrumb">
          <p className="font-body-md text-body-md text-on-surface-variant">
            <Link href="/" className="hover:text-on-surface transition-colors">
              Home
            </Link>
            <span aria-hidden="true" className="mx-2 text-secondary/30">/</span>
            <Link href="/treatments/" className="hover:text-on-surface transition-colors">
              Treatments
            </Link>
            <span aria-hidden="true" className="mx-2 text-secondary/30">/</span>
            <span aria-current="page" className="text-on-surface">{current}</span>
          </p>
        </nav>
        <MedicalReviewByline reviewedBy={detail?.reviewedBy} reviewedOn={detail?.reviewedOn} />
      </div>
      {children}
    </div>
  );
}
