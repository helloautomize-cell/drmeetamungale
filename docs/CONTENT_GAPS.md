# Content Gaps & Open Items

## Verified / Confirmed (from source B + MCP)
- Site name: Mungale Eye Hospital (MEH)
- Doctors: Dr. Sachin Mungale (MS Ophthalmology), Dr. Meeta Mungale (MS Ophthalmology, DNB)
- Address, phone, email, hours verified
- 6 treatments verified with descriptions
- All 20 blog posts verified with full text
- Logo SVG and favicon PNG located
- Menu structure verified

## Gaps / Needs Decision
1. **Counter values:** HTML shows "0" (JS counters). Real numbers: 20+ years expertise confirmed; patient/surgery counts must come from source or user confirmation. Flagged for user.
2. **Reference design:** Reference is Oliva Clinic (skin/hair aesthetic clinic). Mungale is eye hospital. Design system (colors, typography, spacing, cards, shadows) will be ported; content will be 100% Mungale's (no Oliva content). Brand purge required after build.
3. **Form backend:** Appointment form needs backend decision (Next.js server action or external endpoint). Marked as pluggable stub.
4. **Privacy policy / Terms:** Not present in source. Placeholder page created at /privacy-policy/ (honest stub, no invented terms) + footer link. Replace with owner-provided text when available.
5. **Reviews:** Real Google reviews present (some in Gujarati/Marathi). Must be kept in original language with optional translation toggle.
6. **Reference brand purge checklist:** Must run grep for `Oliva`, `Soprano`, `Profhilo`, `82978`, `Hyderabad`, `Jubilee`, `Dermatolog`, `Tricholog`, `8,00,000`, `125+`, `35+`, `lh3.googleusercontent.com/aida` after build.
7. **Image quality:** Some media library images are low resolution. Pipeline will flag and not upscale artificially.
8. **Social links:** Facebook, Instagram, YouTube URLs verified but exact handle names should be confirmed by user.
9. **Welcome-section facility photo:** The homepage welcome image (`IMG_1146-1024x768.jpg`) was referenced in the old homepage markup but the file was never present in the media-library download. It is omitted from `content/images.ts` (no invented substitute). Retrieve via MCP before the Phase 4 welcome section, or approve an alternate verified hospital photo.
10. **Gallery item mapping:** Gallery page categories verified verbatim (Hospital, Events, See the Results, Keracon 2018, Vision 2020). Item-level photo-to-category mapping needs per-category MCP verification before the Phase 6 gallery build — no photos assigned by filename guess.
11. **Blog dates:** The REST API exposes no publish dates for the 20 posts, so `content/blog/index.ts` carries no dates. Do not invent dates; order posts only when a verified order exists.
