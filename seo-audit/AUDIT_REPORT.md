# SEO / AEO / GEO Audit — Mungale Eye Hospital

Domain: https://mungaleeyehospital.com · Specialist eye hospital, Kothi, Vadodara, Gujarat · Next.js 15 App Router, fully static (65 pages prerendered)
Audited: 2026-10-24 · Mode: investigation only (no source files modified) · Verified against `next build` + `next start`, raw HTML fetched per crawler UA

## Executive summary

The site's technical foundation is unusually strong: every page is static server-rendered HTML, all 11 tested AI/search crawlers receive full content, canonicals/redirects/404s are correct, and the structured-data + doctor-credential layer is well engineered (Physician entities with GMC registration numbers, verified CV data, review bylines). The three material problems are: (1) an empty privacy policy linked sitewide plus missing disclaimer/editorial-policy pages and unverified "40,000+/15,000+" claims live on a YMYL site; (2) the pillar-cluster architecture exists but is unbuilt — 4 pillars have a combined total of one support article, and the 10 newest flagship posts carry zero in-body links; (3) the 26 legacy WordPress posts read as content-mill copy with over-length, sometimes ungrammatical titles and several cannibalizing pairs. None of this blocks indexing; it caps trust and authority.

## Scores

| Area | Score /100 |
|---|---|
| Technical | 84 |
| Crawl & AI-bot access | 95 |
| Schema | 76 |
| E-E-A-T / YMYL | 60 |
| Entities & semantics | 72 |
| Keywords | 58 |
| Cluster linking | 38 |
| FAQs | 68 |
| Content humanness | 55 |
| AEO/GEO readiness | 74 |
| **Overall** | **68** |

## Top 10 most damaging issues

1. **TRUST-001 (P0)** — /privacy-policy/ is an empty stub ("content is pending") linked in the footer of every page while the booking form collects patient details.
2. **CLAIM-021 (P1)** — "40,000+ patients" / "15,000+ surgeries" are live on home + about while the codebase marks them NOT VERIFIED.
3. **LINK-022 (P1)** — Cluster model unbuilt: 4 pillars, 1 published support article; glaucoma/keratoconus/corneal-transplant pillars have none.
4. **LINK-021 (P1)** — All 10 new posts (incl. all 4 pillars) have zero contextual in-body internal links.
5. **SCH-011 (P1)** — ~30 posts render visible FAQ accordions but emit no FAQPage schema (emission gated on `role==="support"`).
6. **CONTENT-021 (P1)** — 26 legacy posts carry content-mill fingerprints (banned phrases, "Introduction" literal openers, keyword-stuffed titles, generic closers).
7. **KW-021 (P1)** — Cannibalization: two corneal-ulcer posts; four overlapping eye-checkup posts; four local-intent "eye hospital Vadodara" posts; LASIK pair; cataract trio overlapping the pillar.
8. **TITLE-021 (P1)** — 30/37 post titles exceed ~65 chars after brand append (up to ~168); verbatim WP titles include typos ("7 Habit…", "…Never Sacrifice On").
9. **TRUST-002 (P1)** — No Terms, Medical Disclaimer, Editorial Policy, or Medical Review Policy pages anywhere.
10. **TECH-012 (P1)** — sitemap.xml stamps `new Date()` as lastmod on all 55 URLs — untruthful freshness signal.

## 45-point checklist

| # | Item | Status | Evidence |
|---|---|---|---|
| 1 | robots.txt exists, 200, doesn't block assets | PASS | app/robots.ts → `/robots.txt`; allows all; references sitemap; no public/robots.txt duplicate |
| 2 | AI crawlers allowed | PARTIAL | All allow `/`, but list uses retired "Claude-Web" and omits Claude-SearchBot/Claude-User/Perplexity-User/CCBot/Meta-ExternalAgent/plain Applebot; wildcard still allows them (verified 200 ×11 agents) |
| 3 | No WAF/middleware bot blocks | PASS | No middleware; all UAs → 200 with full HTML |
| 4 | sitemap.xml correct | PARTIAL | 55 URLs, absolute, indexable-only; but lastmod = build time for all (TECH-012); no image sitemap |
| 5 | /llms.txt present | PARTIAL | Present + /llms-full.txt generated; but llms.txt is static and lists only 1 of 37 guides (AEO-021) |
| 6 | No stray noindex | PASS | Only /dev/palette (deliberate, noindex) |
| 7 | Preview/staging noindex | PARTIAL | Can't verify env-gating — no VERCEL_ENV X-Robots-Tag logic exists (TECH-014); production not noindexed |
| 8 | metadataBase + canonicals | PASS | metadataBase = production; all canonicals absolute, self-referencing, match sitemap, https + trailing slash |
| 9 | One host / slash policy | PASS (local) | trailingSlash:true; /blog → 308 → /blog/; www vs non-www lives in DNS/Vercel — verify outside repo |
| 10 | Redirects clean | PASS | 4 WP artifact redirects (category/tag/author/page), single hop, permanent |
| 11 | Real 404s | PASS | /nonexistent → 404, styled not-found links home/contact |
| 12 | No duplicate routes/params | PASS | No param pages; /BLOG/ 404s |
| 13 | Content in raw HTML | PASS | Full main content, FAQs (all answers in DOM), bylines, dates, links and JSON-LD in server HTML for every sampled template |
| 14 | Internal links are real `<a href>` | PASS | next/link throughout; filter buttons are for filtering only |
| 15 | No iframe/canvas-only content | PASS | Google Maps is click-to-load facade (correct) |
| 16 | Unique titles/meta | PARTIAL | All unique; ~30 posts over-length or defective (TITLE-021) |
| 17 | One H1, clean hierarchy | PASS | 1×h1 every page; h2/h3 order clean on sampled pages |
| 18 | Clean URLs | PASS | lowercase, hyphenated, trailing slash |
| 19 | Images: next/image, alt, formats | PARTIAL | next/image + sizes + priority on LCP; blog card covers alt="" (decorative, defensible — IMG-021); specialty OG images portrait |
| 20 | OG/Twitter absolute images | PARTIAL | Present everywhere; treatment pages declare 1600×2000 portrait instead of 1200×630 (OG-021) |
| 21 | Breadcrumbs UI + schema | PASS | PageHero breadcrumb + BreadcrumbList on all inner pages |
| 22 | lang/hreflang | PASS | `lang="en-IN"`; single-language, no hreflang needed |
| 23 | Icons/manifest | PARTIAL | icon.png + apple-icon.png via conventions; no manifest (TECH-015) |
| 24 | CWV | N/A | Lighthouse not run here; 103–178 kB first-load JS is small; measure in fix phase |
| 25 | JS bundle hygiene | PASS | Small bundles; next/font; no third-party scripts; "use client" only on interactive leaves |
| 26 | Mobile basics | PASS | viewport export, 44px tap targets, no horizontal scroll observed in markup |
| 27 | Accessibility basics | PASS | skip link, aria on accordions, form labels, focus rings |
| 28 | No broken links | PARTIAL | FDA citation 404 (CITE-021); Practo 403-to-bots (verify); internal links resolve |
| 29 | Crawl depth ≤3 | PASS | Home → blog → post = 2 clicks; treatments 1 click |
| 30 | No orphans | PASS | All posts linked from /blog (all 37 in raw HTML) + related widgets; contextual in-body inbound links are near-zero though (LINK-021) |
| 31 | External link rel attrs | PASS | Authoritative sources, noopener noreferrer; no sponsored/ugc content |
| 32 | HTTPS/HSTS/no mixed content | PASS | HSTS preload, CSP, no mixed content (all same-origin) |
| 33 | Trust pages linked & indexable | FAIL | Privacy policy exists but EMPTY (TRUST-001); terms/disclaimer/editorial policies absent (TRUST-002) |
| 34 | Contact page real NAP + map | PASS | Full NAP, hours, click-to-load map, QR, multiple numbers; NAP matches schema |
| 35 | Site-wide entity schema | PASS | MedicalClinic+MedicalOrganization w/ geo, hours, specialty, areaServed, sameAs; WebSite on home; stable @ids |
| 36 | Per-template schema | PARTIAL | BlogPosting ✓, Physician+ProfilePage ✓, MedicalWebPage ✓, BreadcrumbList ✓, FAQPage where emitted; MedicalProcedure never emitted (SCH-012); FAQPage missing on 30 posts (SCH-011) |
| 37 | Schema matches visible content | PASS | FAQ text generated from same arrays; no hidden/rating schema; no self-serving AggregateRating |
| 38 | No duplicate/invalid schema | PASS | All blocks parse; no conflicting Organizations; ISO dates; absolute URLs |
| 39 | Schema from real data | PASS | Built from verified CV/site data, no placeholders |
| 40 | Author/doctor pages complete | PASS | Photos, qualifications, GMC reg nos., experience, affiliations, publications, memberships, reviewed-pages lists; missing sameAs (SCH-013) |
| 41 | Byline above fold w/ reviewer+dates | PARTIAL | "Medically reviewed by + GMC + Reviewed on" and "Published" render; no "Written by"; "Updated" can never differ from Published (EAT-021) |
| 42 | Trust pages exist site-wide | FAIL | About ✓, Contact ✓; Editorial/Review policy, Disclaimer, Terms absent; Privacy empty |
| 43 | Citations authoritative & resolving | PARTIAL | NEI/AAO/Cleveland/MedlinePlus/Mayo/PubMed/EyeWiki/glaucoma.org links resolve; FDA 404 (CITE-021); no "Sources" sections; 10 new posts have no citations (CONTENT-022) |
| 44 | Claims compliance | PARTIAL | No "cure/guarantee/best doctor" claims; but unverified patient/surgery counts live (CLAIM-021); "world-class care" once; AI-generated covers flagged internally (CONTENT-023) |
| 45 | Experience signals | PARTIAL | Real local context (Vadodara areas, INR costs, TPA/insurance page), real reviews verbatim; limited first-hand clinical voice on legacy posts; doctor quotes absent |

## Issues by category

- **P0:** TRUST-001 privacy policy stub.
- **P1:** TECH-012 sitemap lastmod · SCH-011 FAQPage missing on 30 posts · SCH-012 MedicalProcedure absent · LINK-021 zero body links on new posts · LINK-022 clusters unbuilt · CLAIM-021 unverified stats · TRUST-002 missing trust pages · KW-021 cannibalization · TITLE-021 over-length/defective titles · EAT-021 author attribution + dateModified · CITE-021 broken FDA citation · CONTENT-021 legacy mill copy.
- **P2:** TECH-013 outdated robot UA names · TECH-014 no preview noindex · SCH-013 missing sameAs (Physician/clinic) · OG-021 portrait OG images · CONTENT-022 no Sources sections · FAQ-021 thin /faqs page · AEO-021 drifting static llms.txt · CONTENT-023 AI-generated covers pending decision.
- **P3:** TECH-015 no manifest · IMG-021 decorative alts · DEV-021 dev route shipped (noindexed) · SCH-014 split JSON-LD vs @graph · PERF-021 record CWV baseline.

Full detail with file paths and fixes: `audit.json`.

## Entity & semantic notes (Phase 4)

The 4 pillars and 6 newest posts are answer-first and cover the expected entity rings well (symptoms, tests, treatments, cost, recovery, when-to-see-a-doctor). Gaps observed:

- **Cost entities**: no "cost in Vadodara/INR" coverage on condition pages — a top PAA theme; several queued support articles target it.
- **Specialist entity** is well-covered via Physician schema; **drug entities** (drop names, e.g. prostaglandin analogues) appear in glaucoma posts but not in schema `about`.
- **Terminology**: medical + lay terms paired well in new content ("Laser-Assisted In Situ Keratomileusis (LASIK)"); legacy posts inconsistent ("motiya" appears only in reviews).
- **Site-level gaps**: no pages for diabetic retinopathy service, pediatric ophthalmology, dry eye clinic service, or retina services — worth confirming the hospital's actual service list before recommending pages.

## AEO/GEO readiness (Phase 9)

- New posts + support article open with quotable answer paragraphs and standalone H2 sections — good lift-out readiness.
- Citations: inline authoritative links on ~16 posts; no posts have a numbered Sources section; the 10 new posts cite nothing — biggest AEO gap after linking.
- Brand/doctor entity consistency is strong (single source of truth in content/doctors.ts); sameAs links to Practo/Justdial/GBP would close the loop for AI engines cross-checking entities.
- For priority queries ("cataract surgery cost vadodara", "glaucoma test", "corneal transplant india", "eye hospital near me", "lasik cost"), AI engines currently get: full HTML, clean entities, review signals — but no INR cost data anywhere, which is the most-cited fact type for those queries.

## Quick wins (high impact, small effort)

1. Emit FAQPage on all posts with faq blocks (one-line gate change).
2. Emit procedureJsonLd on custom treatment pages (one line).
3. Fix sitemap lastmod to real dates.
4. Replace the 404 FDA link; fix NEI legacy path.
5. Add seoTitle fields to the ~10 worst titles.
6. Decide on the 40,000+/15,000+ stats (confirm or pull).
7. Publish the privacy policy (client wording) — biggest single trust fix.
8. Update robots.txt UA list to current names.
9. Regenerate llms.txt from content source.
10. Wire body links into the 4 pillars toward treatments + doctors + the published support.

## What was NOT verified (out of environment)

- Live production responses from mungaleeyehospital.com (local build used instead — config identical).
- www/non-www and http→https canonicalization (DNS/host level).
- Lighthouse CWV numbers; social profile URLs' correctness (client input).
