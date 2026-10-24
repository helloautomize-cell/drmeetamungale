# SEO Fix Changelog — 2026-10-24

Mode: fixes applied per audit issue IDs. NOTE: per project rules, no git
branch or commits were created — all changes are uncommitted in the
working tree; the user handles version control.

Verification: `npx tsc --noEmit` clean · `next build` clean (70 static
pages) · `next start` + curl spot checks below.

## P0
- **TRUST-001** — Real privacy policy written (`app/privacy-policy/page.tsx`),
  describing only actual behavior: booking form → Gmail to clinic, no
  cookies/analytics/tracking, no patient database. Flagged for client review.

## P1
- **TECH-012** — `app/sitemap.ts`: real lastmod (post `updatedAt`/`date`,
  `MEDICAL_REVIEW_DATE` for doctors/treatments/static). Verified: three
  distinct dates in sitemap.xml.
- **SCH-011** — FAQPage now emitted for every post with FAQ blocks (was
  gated on `role==="support"`). Verified on `/blog/glaucoma-treatment-options/`.
- **SCH-012** — `procedureJsonLd` now rendered on the six custom treatment
  pages. Verified `MedicalProcedure` in raw HTML.
- **CLAIM-021** — Homepage stat chips now verified figures only:
  19+ years, 500+ corneal transplants (CV-published), 2 fellowship-trained
  specialists. 40,000+/15,000+ retained in `site.ts` marked "do not render".
- **TRUST-002** — New pages: `/medical-disclaimer/`, `/editorial-policy/`
  (real review process + reviewers + review date), `/terms/`; all linked in
  the footer legal bar + sitemap.
- **EAT-021** — "Written by the Mungale Eye Hospital team" + separate
  medically-reviewed byline; `updatedAt` field added; `dateModified` uses it;
  schema `author` is now the clinic (was conflated with reviewer).
- **CITE-021** — FDA 404 link → `fda.gov/medical-devices/surgery-devices/lasik`
  (live); NEI legacy `/index.php/` path → canonical URL.
- **TITLE-021** — `content/blog-seo-overrides.ts`: concise ≤60-char absolute
  titles + fresh meta descriptions for all 36 non-support posts.
- **KW-021** — Cannibalizing pairs differentiated by intent via new titles/
  descriptions (e.g. corneal-ulcer local vs keratitis guide; the four
  check-up/local-intent clusters).
- **LINK-021** — 42 contextual in-body links added to the 10 hospital-authored
  posts via `content/blog-links.ts` overlays (one per block, verified at
  build time).
- **CONTENT-021** — 68 phrase-level fixes in `content/blog-bodies.ts`:
  deleted 5 leaked "content plan / pillar brief" paragraphs, removed literal
  "Introduction"/"Conclusion" label blocks, replaced all banned-phrase hits
  (crucial/vital/journey/embark/world-class/game-changer/cutting-edge/
  holistic/The Bottom Line/A Comprehensive Guide etc.), sentence-cased 483
  Title Case headings/FAQ questions, fixed broken sentences
  ("…something is unfolding", "Vadodara ," spacing, "7 Habit" title via
  seoTitle). Banned-phrase rescan: 1 hit — "read the bottom line" referring
  to an eye chart, legitimate usage, kept.
- **LINK-022** (partial) — Pillar↔support wiring: cataract pillar now links
  to its published support article; the three empty clusters' missing topics
  listed in the weekly report (new content is a client/doctor step).

## P2
- **TECH-013** — robots.txt: current UA names (Claude-SearchBot/User,
  Perplexity-User, Applebot, CCBot, Meta-ExternalAgent, Bingbot…);
  `/api/` and `/dev/` disallowed (also covers DEV-021).
- **TECH-014** — `X-Robots-Tag: noindex,nofollow` on all routes when
  `VERCEL_ENV !== "production"`.
- **TECH-015** — `app/manifest.ts` added (serves `/manifest.webmanifest`).
- **SCH-013** — Physician `sameAs` → Practo profiles (already cited on site);
  clinic `sameAs` adds Justdial + both Practo profiles.
- **OG-021** — 1200×630 OG crops generated (`scripts/build-og-treatments.ts`)
  for all 6 treatment pages; metadata dims corrected.
- **CONTENT-022** — "Sources" section now renders a numbered list of each
  post's external citations (new posts that cite nothing get none — flagged).
- **FAQ-021** — `/faqs` expanded 8 → 14 with real patient questions
  (Sundays, cashless/TPA, what to bring, location, insurance cover,
  emergencies) drawn only from existing site facts.
- **AEO-021** — `/llms.txt` now generated from the content registry
  (`content/llms.ts` + `app/llms.txt/route.ts`); lists all 37 guides, all
  services, doctors and legal pages; `llms-full.txt` uses the same builder.
- **IMG-021** — Featured story image gets real alt (`coverAlt ?? title`).

## P3
- **DEV-021** — `/dev/` disallowed in robots (route kept, still noindexed).
- **CONTENT-023** — unchanged: AI-generated covers need client's real photos.
- **SCH-014** — deferred: split JSON-LD works; a unified @graph is optional.
- **PERF-021** — not run (no Lighthouse here); first-load JS 103–178 kB.

## Not fixable in code — needs client
- Privacy/Disclaimer/Editorial/Terms wording — drafted from actual site
  behavior, needs owner sign-off.
- 40,000+/15,000+ figures — confirm real numbers or they stay removed.
- GBP/Practo/Justdial canonical URLs for sameAs completeness.
- Support articles for glaucoma/keratoconus/corneal-transplant clusters.
- Real clinic photos to replace the two AI covers.

## Merge with upstream (2026-10-24)
- Pulled `11ccefa` — "Publish 50 doctor-written support blog articles" (PR #1):
  10 clusters × 5 support articles + 49 new covers; new block types
  (h3, callout, numlist) in the blog renderer; new cluster ids.
- Conflicts resolved: `app/sitemap.ts` (kept real-date version — superset
  of upstream's post-date-only fix), `content/blog/index.ts` (kept
  ClusterId type + overrides import). Other 3 files auto-merged clean.
- Re-verified: `tsc --noEmit` clean, `next build` clean (119 pages),
  sitemap 107 URLs with real dates, support article emits FAQPage +
  cluster nav + doctor byline + seoTitle.
- Audit impact: LINK-022 now substantially resolved upstream (all 10
  clusters have support articles — was listed as "needs client"). Score
  for cluster linking improves further on next audit pass.
