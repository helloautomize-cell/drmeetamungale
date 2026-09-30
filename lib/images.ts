import { PATIENT_PHOTO_CONSENT_CONFIRMED } from "@/lib/site-config";

export type Img = {
  name: string;
  w: number;
  h: number;
  /** Folder under /images/mungale/. Omitted = generated artwork root. */
  base?: "real";
  /** Set on photos that show an identifiable patient — see lib/site-config.ts */
  consent?: "patient";
};
const i = (name: string, w: number, h: number): Img => ({ name, w, h });
const r = (name: string, w: number, h: number, consent?: "patient"): Img =>
  consent ? { name, w, h, base: "real", consent } : { name, w, h, base: "real" };

export type ImgSet = { readonly d: Img; readonly m?: Img };

// ─── Generated artwork (quiet-luxury still-lifes) ───────────────────────
export const IMG = {
  heroIris:   { d: i('hero-iris-desktop', 2560, 1440),     m: i('hero-iris-mobile', 1080, 1920) },
  whyLens:    { d: i('why-lens-bg-desktop', 2560, 1440),   m: i('why-lens-bg-mobile', 1080, 1920) },
  arc:        { d: i('porcelain-arc-desktop', 2560, 1097), m: i('porcelain-arc-mobile', 1080, 1350) },
  ctaRed:     { d: i('cta-red-desktop', 2560, 1097),       m: i('cta-red-mobile', 1080, 1350) },
  cataract:   { d: i('specialty-cataract', 1600, 2000) },
  cornea:     { d: i('specialty-cornea', 1600, 2000) },
  glaucoma:   { d: i('specialty-glaucoma', 1600, 2000) },
  optical:    { d: i('specialty-optical', 1600, 2000) },
  j1: { d: i('journey-1-consultation-desktop', 1600, 1200), m: i('journey-1-consultation-mobile', 1080, 1350) },
  j2: { d: i('journey-2-diagnostics-desktop', 1600, 1200),  m: i('journey-2-diagnostics-mobile', 1080, 1350) },
  j3: { d: i('journey-3-plan-desktop', 1600, 1200),         m: i('journey-3-plan-mobile', 1080, 1350) },
  j4: { d: i('journey-4-recovery-desktop', 1600, 1200),     m: i('journey-4-recovery-mobile', 1080, 1350) },
  dryEye:     { d: i('blog-dry-eye-desktop', 1600, 900),   m: i('blog-dry-eye-square', 1080, 1080) },
} as const;

// ─── Real photographs (/images/mungale/real/) ──────────────────────────
// Colour-graded, cropped and compressed upstream. Never display wider
// than the native pixel width (cap containers / use `sizes`).
// TODO(photos wanted from hospital): proper Dr. Meeta portrait matching
// Dr. Sachin's; building exterior/signage + reception (Visit); doctor in
// conversation with a patient's family; clean OT + phaco wide shot;
// clean optical-store shot.
export const REAL = {
  /** Dr. Sachin at the slit lamp — clean portrait. */
  sachin:      { d: r('doctor-sachin-portrait', 1200, 1500) },
  /** Dr. Meeta at her desk — INTERIM portrait. Swap this one line when
      the proper portrait arrives. */
  meeta:       { d: r('doctor-meeta-desk', 872, 1090) },
  consultDesk: { d: r('consultation-desk-wide', 1280, 960) },
  /** Dr. Sachin examining an elderly patient at the YAG laser. */
  careYag:     { d: r('care-yag-wide', 1600, 900, 'patient'),  m: r('care-yag-tall', 1200, 1273, 'patient') },
  /** Slit-lamp exam with assistant, patient visible. */
  examSlit:    { d: r('exam-slitlamp-wide', 1280, 960, 'patient'), m: r('exam-slitlamp-tall', 1280, 1500, 'patient') },
  /** Laser suite — masked, capped patient, eye visible. */
  theatre:     { d: r('theatre-laser-wide', 1280, 720, 'patient'), m: r('theatre-laser-tall', 1280, 1600, 'patient') },
  team:        { d: r('team-wide', 1920, 1200),  m: r('team-mobile', 1200, 900) },
} as const;

/** True when this image set may be rendered right now. */
export function canShow(set: ImgSet): boolean {
  const needsConsent = set.d.consent === "patient" || set.m?.consent === "patient";
  return !needsConsent || PATIENT_PHOTO_CONSENT_CONFIRMED;
}

/**
 * Consent gate. Returns `preferred` when it is publishable, otherwise
 * `fallback`. Components pass both so the fallback is declared next to
 * the intent and nothing identifiable can slip through.
 */
export function gated<P extends ImgSet, F extends ImgSet>(preferred: P, fallback: F): P | F {
  return canShow(preferred) ? preferred : fallback;
}
