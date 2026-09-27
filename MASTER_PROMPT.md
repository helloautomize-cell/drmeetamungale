# MASTER PROMPT — Mungale Eye Hospital: Next.js Rebuild

> Paste this whole file into your VS Code AI agent (or save it at the repo root as `MASTER_PROMPT.md` and tell the agent: "Read MASTER_PROMPT.md and start Phase 0").

---

## 0. Your role and the mission

You are a senior front-end architect and UI engineer. You are rebuilding **Mungale Eye Hospital** (https://mungaleeyehospital.com/ — a WordPress + Elementor site with a basic flat design) as a **world-class, production-grade Next.js website**.

You have three inputs, all already available to you in this workspace:

| Input | What it is | How you use it |
|---|---|---|
| **A. Reference design** | A complete home page HTML file (Tailwind CDN, "Oliva Clinic" skin & hair clinic). Find it in the repo (search for `Oliva Clinic` / `tailwind-config`). | This is the **design system and layout blueprint**: structure, spacing, typography scale, card styles, radii, shadows, section rhythm, interactions. You copy its *design*, never its *content*. |
| **B. Captured Mungale content & media** | Text, images and resources pulled from the old WordPress site via MCP, stored in this workspace. Locate the folder(s) first. | This is the **only source of truth for content and images**. |
| **C. Live MCP access to the old WordPress site** | You can still query pages, media library, posts, menus. | Use it to **verify** which image belongs to which page/section, fill gaps, and confirm anything unclear. |

**The core idea:** take the reference home page, understand each section's *purpose*, and intelligently re-skin it with Mungale's real content and real images — keeping the reference's premium look and UX — then extend that same design system to every other page.

---

## 1. Non-negotiable rules (read before every phase)

1. **Zero invented content.** Every heading, paragraph, number, doctor credential, review, phone number, address, timing and claim must come from input B or C. If a reference section needs content that Mungale does not have, you either (a) adapt the section to content that does exist, or (b) insert a clearly marked placeholder `{/* TODO(content): ... */}` and log it in `docs/CONTENT_GAPS.md`. Never fill gaps with plausible-sounding copy.
2. **No fabricated medical proof.** No made-up statistics, satisfaction percentages, review counts, "verified" badges, before/after photos, awards, certifications or equipment brand names. Reviews must be real Google reviews from the source, with the reviewer's name as published.
3. **Purge the reference brand completely.** At the end of every phase, grep the codebase for: `Oliva`, `Soprano`, `Profhilo`, `82978`, `Hyderabad`, `Jubilee`, `Dermatolog`, `Trichol`, `8,00,000`, `125+`, `35+`, `lh3.googleusercontent.com/aida`. Result must be zero hits outside `/reference`.
4. **One task at a time.** Work strictly in the phase/task order below. Finish a task, verify it against its Definition of Done, update `docs/PROGRESS.md`, then move on. Do not jump ahead or build multiple pages in one go.
5. **Stop gates.** Where a phase says **⛔ STOP**, present your output and wait for my approval before continuing.
6. **When unsure, check the source, don't guess.** Use MCP to confirm. If still unclear, ask me.
7. **Keep original URLs.** New routes must match old WordPress slugs (with trailing slash) so SEO is preserved.

---

## 2. Tech stack (fixed)

- **Next.js (latest stable, App Router) + TypeScript (strict) + shadcn if needed**
- **Tailwind CSS** — port the reference's inline `tailwind.config` (colors, spacing, font sizes, radii) into the project's Tailwind config / `@theme` so the reference class names keep working. Replace only the color *values* (see Phase 1.3).
- **Font:** Plus Jakarta Sans via `next/font/google` (self-hosted, `display: swap`). No Google Fonts `<link>` tags.
- **Icons:** `lucide-react` (tree-shaken), mapped one-to-one from the reference's Material Symbols. No icon webfont.
- **Images:** `next/image` everywhere, with pre-processed assets (Phase 2).
- **Motion:** light, purposeful (`framer-motion` or CSS only) — fade/slide-in on scroll, hover lifts. Must respect `prefers-reduced-motion`.
- **Content layer:** typed TS data files in `/content` (site config, treatments, doctors, reviews, FAQs, gallery) + MDX (or typed data) for blog posts. Components never hard-code content.
- **Forms:** appointment form built as a proper component with validation (`zod`). Backend is unknown → implement submission via a pluggable handler (server action stub) plus WhatsApp/phone fallback, and log it in `CONTENT_GAPS.md` as "needs backend decision". Consent checkbox must be **unchecked by default**.

---

## 3. Target folder structure

```
/reference                 ← original reference HTML (read-only, never imported)
/source-content            ← MCP-captured Mungale content & media (read-only originals)
/app
  layout.tsx               ← fonts, metadata base, Header, Footer, floating CTA
  page.tsx                 ← Home
  about-us/page.tsx
  treatments/page.tsx
  treatments/[slug]/page.tsx
  insurance-cashless/page.tsx
  blog/page.tsx
  blog/[slug]/page.tsx
  faqs/page.tsx
  gallery/page.tsx
  contact-us/page.tsx
  sitemap.ts  robots.ts  not-found.tsx
/components
  layout/     Header, TopBar, MobileNav, Footer, FloatingCTA
  sections/   one file per section (Hero, TrustPillars, DoctorsHighlight, TreatmentsShowcase, PatientJourney, DoctorsGrid, GalleryStrip, Reviews, HealthInsights, LocationBlock, CTABand …)
  ui/         Button, Card, Badge, SectionHeader, Tabs, StatChip, Container …
/content      site.ts, treatments.ts, doctors.ts, reviews.ts, faqs.ts, gallery.ts, blog/
/public/images  optimized output only, organized by page/section
/scripts      process-images.ts (sharp pipeline), audit-content.ts
/docs         SITE_INVENTORY.md, ASSET_MANIFEST.json, SECTION_MAP.md, PALETTE.md, CONTENT_GAPS.md, PROGRESS.md
```

---

## 4. What we already know about Mungale (verify all of it against inputs B/C)

- **Name:** Mungale Eye Hospital (MEH), Kothi (Anandpura), Vadodara, Gujarat. Established 24 June 2007.
- **Doctors:** Dr. Sachin Mungale (MS – Ophthalmology); Dr. Meeta Mungale (MS – Ophthalmology, DNB).
- **Treatments (6):** Cornea Evaluation, Corneal Treatments, Glaucoma Evaluation, Glaucoma Treatments, Cataract Surgery, Optical & Contact Lenses.
- **Highlights on current site:** 24/7 Service Facilities, 20+ Years Expertise, Certified Eye Surgeons. Counters: Years of Service / Patients Treated / Eye Surgeries (**real numbers must be pulled from source — the scraped HTML shows "0" because they are JS counters**).
- **Contact:** 2nd Floor Vinraj Plaza, opp. Govt Press, Kothi, Vadodara · +91 8140250055 · +91 9723311209 (emergency) · mungaleeyehospital@gmail.com · Mon–Sat 9 AM–8 PM, Sunday closed. (Note: the source shows two different hour formats — confirm and log.)
- **Social:** Facebook, Instagram, YouTube (links in source).
- **Pages/menu:** About Us · Treatments (+6 sub-pages) · Insurance & Cashless · Resources (Blog, FAQs, Gallery) · Book an Appointment (= /contact-us/).
- **Reviews:** real Google reviews via Trustindex, some in Gujarati and Marathi — keep them in the original language (optionally with a small "Translated from Gujarati" toggle only if a translation exists in the source; do not machine-translate silently).
- **Logo:** `httpsmungaleeyehospital-logo.svg` (+ `cropped-logo-2.png` favicon). Use the SVG.

---

## 5. The build, phase by phase

### PHASE 0 — Discovery & audit (read-only, no app code)

**0.1 Locate and read inputs.** Find the reference HTML, the captured content folder, and confirm MCP access to the old site. Move/copy them into `/reference` and `/source-content` (do not edit originals).

**0.2 Deconstruct the reference.** Write `docs/SECTION_MAP.md` part 1: list every reference section in order with its *purpose* (e.g. "Hero: headline + trust stats + inline booking form"), layout (grid columns at each breakpoint), components used, and interactions (tabs, city switcher, hover states, floating CTA).

**0.3 Inventory the Mungale site.** Using captured files + MCP, write `docs/SITE_INVENTORY.md`: every page, every section on each page, all text content (verbatim), all CTAs, all forms, all links, menus, footer, meta titles/descriptions.

**0.4 Build the asset manifest.** Create `docs/ASSET_MANIFEST.json`, one entry per image:
```json
{ "id": "doctor-sachin-mungale", "originalUrl": "...", "localSource": "source-content/...",
  "foundOn": ["/", "/about-us/"], "section": "Meet Our Expert Ophthalmologists",
  "originalAlt": "...", "type": "photo | icon | logo | illustration | blog-cover | gallery",
  "width": 0, "height": 0, "quality": "good | low-res | watermarked | duplicate",
  "proposedUse": "home/DoctorsGrid card 1", "newAlt": "Dr. Sachin Mungale, MS Ophthalmology" }
```
Rules for mapping:
- Determine where each image lives **by checking the page and section it appears in via MCP**, not by guessing from the filename. (Filenames are misleading — e.g. `DrSachin.webp` has alt text about "kids and family eye care".)
- Classify type correctly. The six treatment images on the current homepage (`focus_…webp`, `checkup_…webp`, `laser_…webp`, etc.) are **flat icons, not photos** — they must be used as icon badges, never stretched into the reference's full-bleed photo cards.
- Flag duplicates, low-resolution and irrelevant stock images.
- Every image gets fresh, accurate, descriptive alt text (describe what is actually in it; add local-SEO context only when truthful).

**0.5 Map reference sections → Mungale content.** Complete `docs/SECTION_MAP.md` part 2 as a table: reference section → Mungale equivalent → content source → images → action (keep / adapt / replace / remove). Use this as the starting proposal and correct it against the real inventory:

| Reference section | Mungale adaptation |
|---|---|
| Top bar (care line + utility links) | Working hours · emergency numbers · email · social icons |
| Header nav + "Book Appointment" | Real menu (About, Treatments ▾, Insurance & Cashless, Resources ▾, Book an Appointment). Treatments & Resources as dropdowns, full mobile drawer |
| Hero: badge, H1, subcopy, stat chips, doctor avatars, booking card | "Since 2007 · Kothi, Vadodara" badge; H1 from real welcome copy; real counters (years, patients, surgeries); avatars of the 2 doctors ("Led by Dr. Sachin & Dr. Meeta Mungale"); booking card with Name, Mobile, Treatment (6 real options), preferred date |
| 6 trust pillars | Built from real highlights (24/7 facilities, 20+ years, certified surgeons, full-range diagnostic & surgical equipment, cashless/insurance, …) — only claims present in the source |
| Leadership highlight banner | "Meet the doctors" husband-wife ophthalmologist duo, real hospital/doctor photo |
| Treatments showcase with tabs | Tabs e.g. **Diagnosis / Treatment & Surgery / Vision Correction** covering the 6 real treatments; icon-badge cards using the real icons, real one-line descriptions, link to `/treatments/[slug]/` |
| 5-step protocol | "Your visit at MEH" patient journey — **only if** the source describes the process; otherwise mark as gap and propose to me, don't write it |
| Senior doctors spotlight (4 cards) | 2 doctor cards, layout rebalanced for 2 (larger cards, not a 4-col grid with holes) |
| Before & after gallery | **Remove.** Replace with a hospital/facility gallery strip from real Gallery images |
| 95% satisfaction band + reviews | CTA band (book / call emergency) without invented metrics; then real Google reviews carousel with Google attribution and a "Read all reviews on Google" link |
| Video education hub | "Health Insights" — latest real blog posts (cover, title, excerpt, read more). If YouTube videos exist in source, add them |
| Clinic locator | Single-location block: address, hours, phones, Google Maps embed (lazy-loaded facade), "Get directions" |
| Newsletter | Replace with Insurance & Cashless teaser or final appointment CTA (whichever the source supports) |
| Footer | Real quick links, treatments, contact, hours, social, logo, legal links |
| Floating "Doctors Online / Request Callback" | Floating "Call / WhatsApp / Book" pill (no fake "online" indicator) |

**0.6 Log gaps.** Create `docs/CONTENT_GAPS.md` with everything missing or inconsistent (counter values, hours mismatch, form backend, privacy policy page, missing images, etc.) and `docs/PROGRESS.md`.

**⛔ STOP — present SECTION_MAP, ASSET_MANIFEST summary and CONTENT_GAPS for my approval.**

---

### PHASE 1 — Project setup & design system

**1.1** Scaffold Next.js (App Router, TS strict, ESLint, Tailwind, `src`-less as per structure above). Add Prettier.

**1.2** Port the reference Tailwind theme (spacing tokens, font-size tokens like `display-hero`, `headline-lg`, `label-sm`, radii, shadows) exactly, so reference markup translates 1:1.

**1.3 Palette from the logo.** Open the logo SVG, extract its exact fill/stroke hex values, and write `docs/PALETTE.md`:
- Identify brand primary / secondary from the logo.
- Generate a full tonal scale for each and **map them onto the reference's existing token names** (`primary`, `primary-container`, `on-primary`, `surface-tint`, `surface-ice`, `border-subtle`, `secondary`, etc.) so the reference's visual hierarchy is preserved but in Mungale colors.
- Keep neutrals clean and clinical (near-white surfaces, deep navy/charcoal text). Eye-care should feel calm, trustworthy, clear.
- Verify **WCAG 2.2 AA** contrast for every text/background pair used (≥4.5:1 body, ≥3:1 large text/UI). Adjust shades, not the brand hue, if something fails. Include the contrast table in PALETTE.md.
- Show me swatches (a `/dev/palette` route that renders every token).

**1.4** Base UI primitives in `/components/ui` matching reference styles: Container, SectionHeader (eyebrow + title + subtitle), Button (primary / tonal / ghost, with icon), Card, Badge/Chip, StatChip, Tabs, Input/Select.

**1.5** `/content/site.ts` with all global data (name, address, phones, email, hours, socials, nav tree) — sourced verbatim.

**⛔ STOP — show palette page and primitives.**

---

### PHASE 2 — Image pre-processing pipeline ("pre-treat" every image)

Write `/scripts/process-images.ts` using `sharp`, driven by `ASSET_MANIFEST.json`:
1. Read originals from `/source-content` (never modify originals).
2. Rename to semantic kebab-case ids (e.g. `doctor-meeta-mungale.webp`).
3. Auto-orient, strip EXIF/metadata, trim unnecessary borders.
4. Crop to the aspect ratio the target section needs (hero, 4:3 cards, 1:1 avatars, 16:9 blog covers), using attention/entropy cropping and a manual focal point override field in the manifest (faces must never be cropped).
5. Gentle correction only: normalize exposure/white balance and light sharpening. **No** AI upscaling that invents detail, no face retouching, no generative fill. Low-res images get flagged instead.
6. Export AVIF + WebP, responsive widths (e.g. 640/960/1280/1920), quality tuned (~70–80), and generate a tiny blur placeholder (`blurDataURL`).
7. Icons/logos: keep SVG where available; optimize with SVGO. Recolor treatment icons to the brand palette only if they are single-color vectors.
8. Output to `/public/images/<page>/<section>/` and write `/content/images.ts` (typed map: id → src, width, height, blurDataURL, alt).
9. Print a report: sizes before/after, flagged images.

**Definition of done:** every image used in the site comes from `/content/images.ts`; nothing loads from the old WordPress domain or Google CDN; no image over ~200 KB at its largest rendered size (hero excepted, still optimized).

---

### PHASE 3 — Global layout shell

**3.1** TopBar + Header (sticky, blur backdrop like reference, dropdown menus, keyboard accessible, active-link state).
**3.2** Mobile nav drawer (focus trap, Esc to close, body scroll lock).
**3.3** Footer (all real data).
**3.4** Floating CTA (call / WhatsApp / book), hidden when it would overlap the form.
**3.5** Root metadata: title template, description, OG image, favicon from logo, `lang="en-IN"`.

Verify at 360 px, 768 px, 1024 px, 1440 px.

---

### PHASE 4 — Home page (one section per task)

Build `app/page.tsx` as a composition of section components, **one section at a time, in reference order**, following the approved SECTION_MAP. For each section:
1. Re-read the reference markup for that section.
2. Pull content only from `/content/*` (add to content files from the inventory first).
3. Pull images only from `/content/images.ts`, using the manifest mapping.
4. Reproduce the reference layout, spacing, type scale and interactions faithfully; adapt only where content count differs (e.g. 2 doctors instead of 4) — and make the adaptation look intentional.
5. Check responsiveness and accessibility (semantic HTML, one H1 on the page, logical heading order, alt text, focus states, aria on tabs/carousels).
6. Mark the task done in PROGRESS.md.

Order: Hero → Trust pillars → Doctors highlight banner → Treatments showcase (tabs) → Patient journey (if approved) → Doctors grid → Facility gallery strip → CTA band + Reviews → Health Insights → Location block → Final CTA.

**⛔ STOP — full home page review (desktop + mobile screenshots) before any other page is built.** The home page defines the theme for everything else; get it right first.

---

### PHASE 5 — Inner page templates (reuse the home page design system)

Create reusable page-level patterns before building pages:
- **PageHero** (breadcrumb, eyebrow, title, subtitle, optional image) — styled like the reference hero, smaller.
- **ContentSection** (rich text with the reference's typography), **FeatureGrid**, **FAQAccordion**, **CTABand**, **RelatedTreatments**, **DoctorCard**, **BlogCard**, **GalleryGrid + Lightbox**.

---

### PHASE 6 — Pages (one page per task, same process as Phase 4)

1. `/about-us/` — story since 2007, doctors, facilities, real content only.
2. `/treatments/` — overview of all 6 treatments.
3. `/treatments/[slug]/` — the 6 treatment pages from real page content (what it is, who needs it, procedure, recovery, FAQs if present), with related treatments and appointment CTA. `generateStaticParams`.
4. `/insurance-cashless/`
5. `/blog/` + `/blog/[slug]/` — migrate every real post (title, date, cover, body, author) with correct in-content images.
6. `/faqs/` — accordion, grouped if the source groups them.
7. `/gallery/` — filterable grid + lightbox, lazy loaded.
8. `/contact-us/` — appointment form, contact details, map, hours.
9. `not-found.tsx` in the site's style.

After each page: map-check that every image on it was on the corresponding old page (or approved in the manifest), grep-purge check, update PROGRESS.md.

---

### PHASE 7 — SEO, performance & compliance

- Per-page `generateMetadata` reusing the old titles/descriptions (improve only with my approval).
- JSON-LD: `MedicalClinic`/`Hospital` (name, address, geo, phone, hours, sameAs), `Physician` for each doctor, `MedicalProcedure` on treatment pages, `FAQPage`, `BlogPosting`, `BreadcrumbList`.
- `sitemap.ts`, `robots.ts`, canonical URLs, `trailingSlash: true`, and a redirect map for any old URL that changes (including WordPress artifacts like `/?p=`, `/category/`, `/wp-content/uploads/…` images where sensible).
- Performance budget: Lighthouse ≥ 95 on Performance, Accessibility, Best Practices, SEO (mobile). LCP < 2.5 s, CLS < 0.1, INP < 200 ms. Hero image `priority`, everything else lazy; Google Maps via click-to-load facade; no layout shift from fonts.
- Medical-site hygiene: no superlative claims beyond what the hospital already publishes (flag "Best Eye Hospital" wording for my decision), a medical disclaimer, privacy policy placeholder flagged in gaps, form consent unchecked by default.

---

### PHASE 8 — Final QA

- Run the brand-purge grep (Rule 3) — zero hits.
- Run `scripts/audit-content.ts`: every string rendered on a page exists in `/content` and every `/content` entry traces to a source file or MCP page (store `source` field on each item).
- Broken-link check (internal + external), 404 check for every old URL.
- Cross-browser (Chrome, Safari, Firefox) and real device widths.
- Keyboard-only walkthrough and screen-reader spot check.
- Deliver a final `docs/HANDOVER.md`: how to edit content, add a blog post, add images (run the pipeline), deploy (Vercel), and the remaining open items from CONTENT_GAPS.

---

## 6. Quality bar

The result should feel like a top-tier international eye hospital website: calm, spacious, confident typography, consistent 8-pt spacing rhythm, soft shadows and generous radii (as in the reference), crisp imagery, fast, fully responsive, and accessible — while every word and image is genuinely Mungale's.

## 7. How to report back after each task

```
✅ Task: <phase.task name>
Files changed: …
Content used from: <source files / MCP pages>
Images used: <manifest ids>
Deviations from reference and why: …
New gaps logged: …
Next task: …
```

Start now with **PHASE 0, Task 0.1**.
