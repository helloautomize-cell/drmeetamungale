import Image from "next/image";
import type { Doctor } from "@/content/doctors";

// ─── Phase 5: DoctorCard ────────────────────────────────────────────────
// Single doctor card for grids and about pages. Data from content/doctors.ts.
// Shared warm grade overlay unifies differing photo color temperatures.
export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="bg-card-white rounded-2xl overflow-hidden shadow-sm hover:shadow-brand-md hover:-translate-y-1 transition-all duration-200 ring-1 ring-border-light/50">
      <div className="h-80 overflow-hidden relative">
        <Image
          src={doctor.imageUrl}
          alt={doctor.alt}
          width={512}
          height={512}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-primary-container/15 mix-blend-multiply pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-secondary/35 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>
      <div className="p-6">
        <h3 className="font-title-md text-title-md text-on-surface font-bold">{doctor.name}</h3>
        <p className="font-label-sm text-label-sm text-primary-fixed font-semibold mt-1">{doctor.title}</p>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">{doctor.description}</p>
      </div>
    </div>
  );
}
