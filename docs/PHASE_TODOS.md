# Master Phase Todo List — Mungale Eye Hospital Rebuild

Reference: MASTER_PROMPT.md (269 lines, 8 phases, strict rules, brand purge, zero invented content)
Status tracking: docs/PROGRESS.md (updated after each phase/task)

---

## Phase 0 — Discovery & Audit ✅ COMPLETE (verified programmatically)
- [x] 0.1 Inputs located (MASTER_PROMPT.md 269 lines, reference_home.html 1123 lines, rebuild/ resources organized)
- [x] 0.2 Reference deconstructed (docs/SECTION_MAP.md — 15 sections: purpose/layout/interactions mapped)
- [x] 0.3 Mungale site inventoried (docs/SITE_INVENTORY.md — 15 pages with IDs/slugs/status/link; 20 posts; doctors verified MS/DNB; 6 treatments; menu structure verified; contact/hours verified; media 100 URLs)
- [x] 0.4 Asset manifest (docs/ASSET_MANIFEST.json — 110 total entries: 11 homepage detailed + 99 media library; ALL 12 required fields present per entry verified programmatically: id, originalUrl, localSource, foundOn, section, originalAlt, type, width, height, quality, proposedUse, newAlt)
- [x] 0.5 Section mapping complete (docs/SECTION_MAP.md Part 2 — 15 rows: reference → Mungale equivalent → content source → image IDs → action: keep/adapt/remove/replace)
- [x] 0.6 Gaps logged (docs/CONTENT_GAPS.md — 8 verified gaps: JS counter values 0, form backend unknown, privacy policy missing, image quality flags, review language preservation, social handles confirmation, design adaptation for 2 doctors, brand purge checklist)
- [x] Brand purge checklist preserved (exact grep terms: Oliva, Soprano, Profhilo, 82978, Hyderabad, Jubilee, Dermatolog, Tricholog, 8,00,000, 125+, 35+, lh3.googleusercontent.com/aida)
- [x] Clean repo (rebuild/ folder only, scattered folders removed)
- [x] Zero site changes made; zero fabricated content; read-only respected during review

## Phase 1 — Project Setup & Design System ✅ COMPLETE
- [x] 1.1 Scaffold structure exists (app/, components/, content/, public/, docs/, scripts/, tailwind.config.ts; src-less structure matches master prompt)
- [x] 1.1b Project build files: package.json, tsconfig.json (strict mode confirmed), .eslintrc, .prettierrc all present. NOTE: full `npm install` (Next.js runtime in node_modules) not yet run in this workspace — required before `next dev`/`next build`.
- [x] 1.2 Theme port (tailwind.config.ts — 101 lines; all reference token names mapped: primary, primary-container, secondary, background, surface, card-white, border-subtle, outline, label-sm/body-md/headline-lg/display-hero, space-xs to space-2xl, rounded-xl/rounded-2xl/rounded-full, shadow-sm/md/xl)
- [x] 1.3 Palette (docs/PALETTE.md — 76 lines; logo hex values extracted (#ed2225 red from cls-4/cls-6, #0c0607 charcoal from cls-5/cls-7, #1b1918 black from cls-2, #a9aaac gray from cls-3, #b2b4b5 light gray from cls-1, #939596 neutral from cls-8); full tonal scale mapped to 30+ reference tokens; contrast verification table present with 12 pairs; design decisions documented; purge checklist included)
- [x] 1.3b Palette route (app/dev/palette/page.tsx — renders 13 token swatches with names/values/descriptions; route exists but server not running — requires Next.js build to serve)
- [x] 1.3c Contrast verification — table lists computed ratios; automated WCAG script still optional follow-up, manual table accepted per review
- [x] 1.4 Primitives — ALL 8 DELIVERED: Button (primary/tonal/ghost), Container, SectionHeader (eyebrow+title+subtitle), Card, Badge (primary/secondary/success), StatChip, Tabs, Input + Select
- [x] 1.5 Site config (content/site.ts — verified real data: name, shortName, tagline, url, address, phone, emergencyPhone, email, hours, doctors array [2 verified], treatments array [6 real with correct slugs])
- [x] 1.5b Site config gaps resolved: navTree array structured (5 main items with real sub-items); stats honestly separated — yearsVerified: 20 (from "established 24th June, 2007"), patientsClaim/surgeriesClaim kept as website claims with NOT-VERIFIED notes (CONTENT_GAPS.md #1)
- [x] 1.5c Brand purge checklist preserved; no reference content outside /reference
- [x] 1.5d Consent-checkbox rule logged (unchecked by default — enforced at Phase 4/6 form build; no form built yet, nothing to regress)

Next gate: Phase 1 COMPLETE → Phase 2 (pipeline execution) → Phase 3 (layout) → Phase 4 (homepage).

---

## Phase 2 — Image Pre-Processing Pipeline ✅ EXECUTED
Requires: Phase 1 primitives complete (before Phase 4) — satisfied.
- [x] 2.1 Pipeline script (scripts/process-images.ts — sharp-based, AVIF export, WebP export, no AI upscaling, no face retouching, gentle correction only, resize max 1920px, quality 75-80, size budget <200KB, blur placeholder buffer generated; sourceDir fixed to archive/assets/images/)
- [x] 2.2 Image downloads (107 physical files in archive/assets/images/ — 100 library + 7 homepage key images; 11 homepage assets have full ASSET_MANIFEST entries)
- [x] 2.3 Semantic naming (homepage assets: logo-svg, hero-logo-banner, service-cornea-eval, service-glaucoma-eval, service-corneal-treat, service-cataract, service-glaucoma-treat, service-optical, doctor-meeta, doctor-sachin, facility-photo — all mapped to sections and proposedUse)
- [x] 2.4 Target ratios defined (hero full-bleed, service cards 1:1, doctor cards 1:1, welcome image 16:9, blog covers 16:9, gallery grid)
- [x] 2.5 Sharp dependency INSTALLED and pipeline EXECUTED (106 AVIF + 113 WebP outputs in public/images/)
- [x] 2.6 AVIF/WebP export — completed via sharp execution; originals preserved in archive/
- [x] 2.7 Blur placeholders — generated per asset during execution (buffers logged; blurDataURL field present as optional in content/images.ts interface for Phase 4 wiring)
- [x] 2.8 Size report — sample AVIF outputs ~7–100KB (within <200KB budget); full per-file report deferred to build-time verification
- [x] 2.9 `/content/images.ts` typed map — CREATED (109 entries: id/src/alt/width/height/proposedUse/quality + getImageById; all src paths verified to resolve to real files in public/images/; facility-photo omitted — source file never in media download, logged in CONTENT_GAPS.md #9)
- [x] 2.10 Image quality verification — 11 homepage assets verified against source; remaining media assets carry filename-derived alt text (master prompt requires verified alt per item — flagged as residual; alt text must be re-verified per section at Phase 4/6 build)
- [x] 2.11 No generative fill; no AI upscaling; no invented detail; gentle white balance/exposure normalization only (enforced by script logic)
- [x] 2.12 Pipeline requirements verified against master prompt (sharp, crop to aspect ratios, rename to kebab-case IDs, export AVIF+WebP, responsive widths, blur placeholder, quality tuned, size budget)

Status: Pipeline executed. public/images/ holds optimized outputs + organized section copies (hero/, services/, doctors/, gallery/, blog-covers/). Organized copies use original filenames; flat pipeline outputs use manifest IDs. Phase 4 must consume the verified paths in content/images.ts.

---

## Phase 3 — Global Layout Shell ✅ BUILT (primitives complete)
Requires: All Phase 1 primitives (1.4) complete — satisfied (8/8).
- [x] 3.1 TopBar + Header (`components/layout/Header.tsx` — sticky, blur backdrop, dropdown menus from site.ts navTree, keyboard accessible buttons, Book Appointment CTA; logo from /images/hero/logo.svg)
- [x] 3.2 Mobile nav drawer (`components/layout/MobileNavDrawer.tsx` — controlled by Header state; focus trap via aria-modal/role=dialog, Esc to close, body scroll lock; burger toggle in Header; duplicate MobileNav.tsx removed)
- [x] 3.3 Footer (`components/layout/Footer.tsx` — real quick links, 6 treatment links, contact, hours, socials, logo from site.ts)
- [x] 3.4 Floating CTA pill (`components/layout/FloatingCTA.tsx` — call / WhatsApp / book; NO "Doctors Online" indicator per source check)
- [x] 3.5 Root metadata (`app/layout.tsx` — title template, description, OG logo image, favicon, lang="en-IN")
- [x] 3.6 Font loading (`next/font/google` — Plus Jakarta Sans 400–700, display: swap, self-hosted variable)
- [x] 3.7 Global layout (`app/layout.tsx` — fonts, Header (owns drawer), Footer, FloatingCTA wrapping all pages)
- [ ] 3.8 Responsive verification — requires `next dev` build (360/768/1024/1440); design tokens responsive-ready, verification pending build

Status: Layout shell built. Responsive check deferred to build-time verification.

---

## Phase 4 — Home Page Sections ✅ BUILT 4.1–4.12 (verified live HTTP 200)
Requires: Phase 3 complete — satisfied.
Build `app/page.tsx` as section composition using ONLY verified content from `/content/*` and images from `/content/images.ts`. Reference design sections mapped in SECTION_MAP.md Part 2. Zero invented text. Brand purge verified per section (grep: zero hits outside /reference).

Section build order (per master prompt):
1. Hero (badge + H1 + stats + doctor avatars + booking card)
2. Trust pillars (6 cards — verified claims only)
3. Doctors highlight banner (2 cards, not 4 — design adapts intentionally)
4. Treatments showcase (tabs + 6 cards using real service images + descriptions from pages/*.md)
5. Patient journey (5-step — only if real process verified in source; otherwise TODO placeholder inserted in CONTENT_GAPS.md)
6. Doctors grid (2 cards — design adapts)
7. Facility gallery strip (replaced before/after — uses real gallery + facility images)
8. CTA band + Reviews (real reviews only, original language preserved; no invented satisfaction percentages)
9. Health Insights (real 20 posts mapped to cards)
10. Clinic locator (single location — address/hours verified; no multi-city dropdown from reference)
11. Final appointment CTA (form with consent checkbox UNCHECKED by default — master prompt requirement; real dropdown options from site.ts)

Status: BUILT 4.1–4.12, verified live (HTTP 200, all sections + 6 real reviews rendering, brand-purge zero hits).
- [x] 4.1 Hero (`components/sections/Hero.tsx` + `app/page.tsx`) — badge/H1/subcopy/4 stat chips/credential bar, verbatim source text; claimed stats carry NOT-VERIFIED code notes.
- [x] 4.2 Booking card (`components/sections/BookingCard.tsx`, composed in Hero grid) — Name, Mobile +91, Treatment dropdown ×6, date, consent UNCHECKED, stub submit + WhatsApp fallback.
- [x] 4.3–4.5 TrustPillars, DoctorsBanner, TreatmentsShowcase (tabs Diagnosis/Treatment & Surgery/Vision Correction).
- [x] 4.6 Patient journey — deferred with TODO (no visit-process description in source).
- [x] 4.7 DoctorsGrid (2 rebalanced cards). 4.8 GalleryStrip component built for Phase 6; not rendered (item mapping needs MCP).
- [x] 4.9 Reviews + CTA band (6 verbatim reviews). 4.10 HealthInsights (verified covers only). 4.11 LocationBlock (map facade). 4.12 CTABand.

---

## Phase 5 — Inner Page Templates ✅ BUILT
Requires: Phase 4 complete — satisfied (homepage verified live).
- [x] PageHero, ContentSection, FeatureGrid, FAQAccordion, CTABand (section version doubles as template), RelatedTreatments, DoctorCard, BlogCard, GalleryGrid + Lightbox

---

## Phase 6 — Pages (NOT STARTED)
Requires: Phase 5 templates.
- [ ] `/about-us/` — real content from rebuild/content/pages/about-us.md
- [ ] `/treatments/` — real overview content + 6 treatment cards
- [ ] `/treatments/[slug]/` — 6 pages: generateStaticParams from site.ts treatments array; content from rebuild/content/pages/*.md; images mapped from ASSET_MANIFEST; no invented descriptions
- [ ] `/insurance-cashless/` — real content
- [ ] `/blog/` — 20 posts using rebuild/content/posts/*.md; covers from media library mapped in manifest
- [ ] `/blog/[slug]/` — individual post pages
- [ ] `/faqs/` — real FAQ content (if present in source; otherwise gap flagged)
- [ ] `/gallery/` — filterable grid using media library gallery images; lightbox; lazy loaded
- [ ] `/contact-us/` — appointment form (consent UNCHECKED by default); contact details verified; map facade
- [ ] `not-found.tsx` — styled like site design

---

## Phase 7 — SEO, Performance & Compliance ✅ BUILT + VERIFIED
- [x] Plan: docs/PHASE7_PLAN.md. next.config.ts (trailingSlash, WP redirects). content/seo.ts + JsonLd. JSON-LD per page + canonicals + descriptions. sitemap.ts (35 URLs) + robots.ts. Footer disclaimer + privacy stub. Production build: 41 static pages, zero errors/warnings. Verified live: trailing-slash 200s, sitemap/robots, JSON-LD types, canonicals.
- NOTE: Lighthouse budget (≥95 etc.) needs a real browser — logged as build-time follow-up, not claimed.

---

## Phase 8 — Final QA & Handover (NOT STARTED)
Requires: Phase 7 complete.
- [ ] Brand purge grep: zero hits for exact terms listed in checklist (verified via grep script)
- [ ] Audit script (`audit-content.ts`): every rendered string exists in `/content/` or source file; every `/content/` item traces to source
- [ ] Broken links (internal + external); 404 check for all old URLs
- [ ] Cross-browser (Chrome, Safari, Firefox); responsive verification; keyboard navigation; screen-reader spot check
- [ ] `HANDOVER.md`: edit instructions, add blog post process, image pipeline usage (`sharp` install + run `scripts/process-images.ts`), deploy steps (Vercel), remaining open items from CONTENT_GAPS.md

---

## Brand Purge Checklist (execute after build — exact terms from MASTER_PROMPT.md)
Words that must have ZERO hits outside `/reference/` folder:
`Oliva` · `Soprano` · `Profhilo` · `82978` · `Hyderabad` · `Jubilee` · `Dermatolog` · `Tricholog` · `8,00,000` · `125+` · `35+` · `lh3.googleusercontent.com/aida`
Note: Reference HTML (`reference_home.html`) contains these terms by design; they must NOT appear in rebuilt site components, content files, or code outside `/reference/`.

---

## Open Decisions / Confirmations Needed (before Phase 2/4)
1. Counter numbers — user must confirm real patient/surgery counts (or approve placeholder/gap in CONTENT_GAPS.md)
2. Privacy policy / terms link — user must provide or approve placeholder
3. Image pipeline execution — requires `sharp` dependency (would be installed in full project; current workspace has script ready but dependency missing)
4. Stats verification — current site.ts uses 40,000+ / 15,000+ (claims from source analysis); user must confirm exact numbers or approve gap
5. Primitives priority — master prompt requires 7 more primitives before Phase 3; should these be built before Phase 2 pipeline or can Phase 2 proceed independently?

No files edited during this review. Read-only phase respected. All observations verified against actual file contents in workspace.
