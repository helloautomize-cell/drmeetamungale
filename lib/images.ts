export type Img = { name: string; w: number; h: number };
const i = (name: string, w: number, h: number): Img => ({ name, w, h });

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
