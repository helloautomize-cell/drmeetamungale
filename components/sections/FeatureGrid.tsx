import React from "react";

// ─── Phase 5: FeatureGrid ───────────────────────────────────────────────
// Generic responsive card grid (2–3 columns). Cards passed as children
// (use Card primitive or custom markup per page).
export function FeatureGrid({
  children,
  columns = 3,
}: {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "md:grid-cols-2 lg:grid-cols-3";
  return <div className={"grid grid-cols-1 gap-6 " + cols}>{children}</div>;
}
