import React from "react";

// ─── Mungale duotone icon set ───────────────────────────────────────────
// Single consistent style across the whole site: continuous-line strokes
// echoing the logo's eyebrow-arc motif. Navy line work (currentColor) +
// soft red accents (#CE0200 fills at low opacity, solid micro-details).
// Uniform 1.8px stroke, round caps/joins, 24×24 viewBox.
const RED = "#CE0200";

function Base({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

// Eyebrow-arc motif shared by the eye-family icons.
function Brow() {
  return <path d="M4 8.5Q12 3.5 20 8.5" />;
}

// ——— Eye-care family (treatments showcase) ———

export function EyeExamIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <Brow />
      <path d="M4 13.5Q12 18.5 20 13.5Q12 9.5 4 13.5Z" />
      <circle cx="12" cy="13.5" r="2.4" />
      <circle cx="12" cy="13.5" r="0.9" fill={RED} stroke="none" />
    </Base>
  );
}

export function LaserBeamIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M3 17 13 7" />
      <path d="M13 7h4v4" />
      <path d="M5 8.5 8.5 5M4 12.5h3.5M8.5 19 5 15.5" opacity={0.55} />
      <circle cx="17.5" cy="17.5" r="2.6" />
      <circle cx="17.5" cy="17.5" r="0.9" fill={RED} stroke="none" />
    </Base>
  );
}

export function EyeDropsIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M12 3.5c3.2 4 5.5 7 5.5 10.2a5.5 5.5 0 0 1-11 0C6.5 10.5 8.8 7.5 12 3.5Z" />
      <path d="M9.5 14.2a2.6 2.6 0 0 0 2.5 2.7" stroke={RED} />
      <circle cx="12" cy="17.4" r="0.9" fill={RED} stroke="none" />
    </Base>
  );
}

export function LensIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M5 6.5Q12 11 19 6.5" />
      <path d="M5 6.5v5a7 7 0 0 0 14 0v-5" />
      <path d="M9 13.8a3.2 3.2 0 0 0 6 0" />
      <circle cx="12" cy="17.8" r="0.9" fill={RED} stroke="none" />
    </Base>
  );
}

export function SurgeryIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M4 20 14.5 9.5" />
      <path d="M14.5 9.5 18 4l2 2-4.5 5.5" />
      <path d="M16.8 5.2l2 2" stroke={RED} />
      <path d="M4 20l1.8-4.2L9 19z" fill={RED} fillOpacity={0.16} />
    </Base>
  );
}

export function OpticsIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <circle cx="7.5" cy="14" r="3.4" />
      <circle cx="16.5" cy="14" r="3.4" />
      <path d="M10.9 14h2.2M4.1 14H2.5M19.9 14h1.6M17.8 11V8.5" />
      <path d="M17.8 8.5h2.4" stroke={RED} />
    </Base>
  );
}

// ——— Trust pillar family ———

export function AwardIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <circle cx="12" cy="9" r="5" />
      <circle cx="12" cy="9" r="1.1" fill={RED} stroke="none" />
      <path d="M9.5 13.2 8 20l4-2.2L16 20l-1.5-6.8" />
    </Base>
  );
}

export function StethoscopeIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M6 3.5v5a4 4 0 0 0 8 0v-2" />
      <path d="M10 12.5v3a5 5 0 0 0 10 0v-4" />
      <circle cx="20" cy="7.5" r="2.2" />
      <circle cx="20" cy="7.5" r="0.9" fill={RED} stroke="none" />
    </Base>
  );
}

export function CareBellIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M6 16v-5a6 6 0 0 1 12 0v5l1.2 2.2H4.8L6 16Z" />
      <path d="M10 20a2.2 2.2 0 0 0 4 0" />
      <circle cx="19" cy="5" r="1" fill={RED} stroke="none" />
    </Base>
  );
}

export function MicroscopeIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M7 20h10M9 20v-3h6v3" />
      <path d="M12 17V9M9 13.5h6" />
      <path d="M9.5 9 14 4.5l2.5 2.5L12 12" />
      <circle cx="17.5" cy="5.5" r="1" fill={RED} stroke="none" />
    </Base>
  );
}

export function ReferralIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M9.5 13.5 13.5 9.5" opacity={0.55} />
      <path d="M11 6.5 13.5 4a3.2 3.2 0 0 1 4.5 4.5L15.5 11" />
      <path d="M13 17.5 10.5 20a3.2 3.2 0 0 1-4.5-4.5L8.5 13" stroke={RED} />
    </Base>
  );
}

export function ReceiptIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M6 3.5h12V20l-2-1.5-2 1.5-2-1.5L10 20l-2-1.5L6 20V3.5Z" />
      <path d="M9 12.5l2 2 4-4.5" stroke={RED} />
      <path d="M9 7.5h6" opacity={0.55} />
    </Base>
  );
}

// ——— Form + contact family ———

export function CalendarIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <rect x="4" y="5.5" width="16" height="15" rx="2.5" />
      <path d="M4 10h16" />
      <path d="M8.5 3.5v4M15.5 3.5v4" />
      <rect x="4" y="5.5" width="16" height="4.5" rx="2.5" fill={RED} fillOpacity={0.14} stroke="none" />
    </Base>
  );
}

export function LockIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <rect x="5.5" y="10.5" width="13" height="9.5" rx="2.5" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
      <circle cx="12" cy="15.2" r="1" fill={RED} stroke="none" />
    </Base>
  );
}

export function BoltIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M13 3 5.5 13.5H11L10 21l7.5-10.5H12L13 3Z" />
      <path d="M13 3 5.5 13.5H11L10 21l7.5-10.5H12L13 3Z" fill={RED} fillOpacity={0.12} stroke="none" />
    </Base>
  );
}

export function PinIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M12 21s6.5-5.6 6.5-10.5A6.5 6.5 0 0 0 5.5 10.5C5.5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.2" />
      <circle cx="12" cy="10.5" r="0.9" fill={RED} stroke="none" />
    </Base>
  );
}

export function ClockIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5V12l3 2" />
      <circle cx="12" cy="12" r="0.9" fill={RED} stroke="none" />
    </Base>
  );
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M5.5 4h3.6l1.5 4-2.3 1.7a12 12 0 0 0 5 5L15 12.4l4 1.5v3.6a1.5 1.5 0 0 1-1.6 1.5C10.7 19 5 13.3 5 6.6A1.5 1.5 0 0 1 5.5 4Z" />
      <path d="M17.5 4.5a4 4 0 0 1 2.5 2.5" stroke={RED} />
    </Base>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="M4.5 8 12 13.5 19.5 8" />
      <circle cx="17.5" cy="16" r="1" fill={RED} stroke="none" />
    </Base>
  );
}

export function CompassIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5 15.5 8.5Z" />
      <path d="M15.5 8.5 13.5 13.5 10.5 10.5" fill={RED} fillOpacity={0.2} stroke="none" />
    </Base>
  );
}

// ——— Social proof family ———

export function QuoteIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path
        d="M10 7C6.8 8.2 5 10.6 5 14v4h5v-5H7.5C7.7 11 8.7 9.6 10.5 8.8L10 7ZM19 7c-3.2 1.2-5 3.6-5 7v4h5v-5h-2.5c.2-2 1.2-3.4 3-4.2L19 7Z"
        fill={RED}
        fillOpacity={0.14}
      />
      <path d="M10 7C6.8 8.2 5 10.6 5 14v4h5v-5H7.5M19 7c-3.2 1.2-5 3.6-5 7v4h5v-5h-2.5" />
    </Base>
  );
}

export function GoogleBadge({ className }: { className?: string }) {
  return (
    <span
      className={
        "inline-flex items-center justify-center w-6 h-6 rounded-full bg-card-white shadow-sm ring-1 ring-border-light " +
        (className || "")
      }
      aria-hidden="true"
    >
      <span className="font-bold text-[15px] leading-none" style={{ color: "#4285F4" }}>
        G
      </span>
    </span>
  );
}

export function BadgeCheckIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M12 3.5 14.5 5l2.8-.4.7 2.8 2.4 1.5-1.2 2.6 1.2 2.6-2.4 1.5-.7 2.8-2.8-.4-2.5 1.5L9.5 20l-2.8.4-.7-2.8-2.4-1.5L4.8 13.5 3.6 10.9l2.4-1.5.7-2.8 2.8.4L12 3.5Z" />
      <path d="M9.3 12.2l1.9 1.9 3.6-4" stroke={RED} />
    </Base>
  );
}

export function BuildingIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M4.5 20V8.5L12 4l7.5 4.5V20" />
      <path d="M4.5 20h15" />
      <path d="M12 9v6M9 12h6" stroke={RED} />
    </Base>
  );
}
