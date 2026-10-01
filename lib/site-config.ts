// ─── Site-level feature flags ──────────────────────────────────────────

/**
 * PATIENT PHOTO CONSENT GATE
 *
 * Three real photographs on the site show identifiable patients
 * (care-yag-*, exam-slitlamp-*, theatre-laser-*). Under Indian
 * medical-advertising norms and basic patient-privacy ethics, these must
 * not be published until the hospital has written, signed consent from
 * each patient on file.
 *
 * While this is `false`, every component that would show one of those
 * images renders its declared fallback instead (see `gated()` in
 * lib/images.ts). Flip to `true` ONLY once the owner confirms the
 * consents are archived. Nothing else needs to change.
 */
export const PATIENT_PHOTO_CONSENT_CONFIRMED = false;

/**
 * BEFORE/AFTER RESULTS GATE
 *
 * The five before-and-after result photographs in /gallery/ (ocular
 * tattooing, DSEK, pterygium, DALK, PK) stay hidden while `false`,
 * pending the doctors' approval to publish outcome imagery.
 * Flip to `true` once they approve; nothing else needs to change.
 */
export const SHOW_BEFORE_AFTER = false;
