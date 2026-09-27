import React from "react";

// ─── Phase 5: ContentSection ────────────────────────────────────────────
// Rich-text wrapper with the reference typography scale. Pages pass
// verified body content as children.
export function ContentSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={"py-space-xl bg-surface " + className}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl font-body-md text-body-md text-on-surface-variant leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </section>
  );
}
