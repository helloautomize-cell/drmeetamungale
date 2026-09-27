import React from "react";

export function StatChip({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="p-3.5 bg-card-white rounded-xl shadow-sm flex flex-col justify-center">
      <span className="font-headline-md text-headline-md text-primary font-bold">{value}</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">{label}</span>
    </div>
  );
}
