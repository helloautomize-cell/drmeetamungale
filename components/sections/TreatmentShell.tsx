import Link from "next/link";

// ─── TreatmentShell ────────────────────────────────────────────────────────
// Shared child-page frame: warm paper, 1280px container, quiet breadcrumb
// (Home / Treatments / Current). Sections compose inside.
export function TreatmentShell({
  current,
  children,
}: {
  current: string;
  children: React.ReactNode;
}) {
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
      </div>
      {children}
    </div>
  );
}
