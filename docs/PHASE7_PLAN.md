# Phase 7 — SEO, Performance & Compliance Plan

Reference: MASTER_PROMPT.md Phase 7. Status at planning time: Phase 6 complete
(all 9 routes + not-found, verified live). No next.config exists yet; no
canonicals, no JSON-LD, no sitemap/robots. Per-page `generateMetadata`
exists with titles only (no descriptions/canonicals).

---

## 7.1 Metadata (per page: title + description + canonical)

Current: every route exports `generateMetadata` with `title` only.
Work: add `description` (verbatim short lines from each page's own source
text — never invented) + `alternates.canonical` (siteConfig.url + route
path with trailing slash) to all 9 routes + treatment/blog detail templates.
Root `layout.tsx` keeps title template, OG logo, favicon, lang="en-IN".

## 7.2 JSON-LD structured data

New shared renderer: `components/seo/JsonLd.tsx` (`<script
type="application/ld+json">`, serialized payload, no invented fields).
New data module: `content/seo.ts` with builders using verified values only:
- Hospital (`MedicalClinic`): name, address (site.ts), geo 22.304108 /
  73.193533 (verbatim from live homepage JSON-LD block), phones, hours
  (Mo–Sa 09:00–20:00), sameAs (FB/IG/YT). Rendered in root layout (all pages).
- Physician ×2: Dr. Sachin (MS Ophthalmology), Dr. Meeta (MS, DNB).
  Rendered on /about-us/ (+ homepage doctors sections link to it).
- MedicalProcedure: one per treatment detail page (name + procedure
  description from the verbatim page intro). Rendered in
  app/treatments/[slug]/page.tsx.
- FAQPage: /faqs/ (8 Q&As) + /insurance-cashless/ (9 Q&As), verbatim.
- BlogPosting: /blog/[slug]/ (headline + url; no dates — REST exposes none,
  so datePublished is OMITTED, never invented).
- BreadcrumbList: Home → section → page on inner pages.

## 7.3 URLs, sitemap, robots, redirects

- New `next.config.ts`: `trailingSlash: true` (old WP URLs end with `/`;
  currently /about-us/ 308-redirects to /about-us — this flips it so the
  canonical trailing-slash URL renders directly).
- New `app/sitemap.ts`: static routes (/, /about-us/, /treatments/,
  /insurance-cashless/, /blog/, /faqs/, /gallery/, /contact-us/) + 6
  treatment slugs + 20 blog slugs from content modules.
- New `app/robots.ts`: allow all, sitemap reference.
- Redirect map (conservative, in next.config.ts): /category/:path* → /blog/,
  /tag/:path* → /blog/, /author/:path* → /blog/, /page/:path* → /blog/.
  (WP `?p=`/`?page_id=` query URLs cannot redirect-match statically; logged
  for server-level handling at deploy.)

## 7.4 Performance budget

- Hero: no LCP image (headline-first hero); avatars tiny + eager by default.
- Blog/post covers: `priority` on post-page cover; `loading="lazy"` elsewhere
  (already in place). Maps: click-to-load facade (already in place).
- Fonts: Plus Jakarta Sans self-hosted, display:swap (already in place).
- Verification available here: full `npm run build` (type-check, static
  params, metadata validation). Lighthouse needs a real browser — logged as
  build-time follow-up, not claimed as done.

## 7.5 Medical-site hygiene

- "Best Eye Hospital" wording: kept because it is the site's own published
  H1/tagline (verbatim), flagged for owner decision (CONTENT_GAPS + code
  comment in Hero). No NEW superlatives added anywhere.
- Medical disclaimer: one boilerplate line in the footer bottom bar
  (compliance boilerplate, not a factual claim).
- Privacy policy: footer gains a Privacy Policy link → new
  /privacy-policy/ stub page clearly marked "content pending owner input"
  (no invented policy text) + CONTENT_GAPS entry.
- Consent checkboxes: verified unchecked by default on both forms
  (BookingCard, ContactForm) — re-verified in served HTML during Phase 6.
- No satisfaction percentages, awards, certifications, or equipment brand
  claims beyond what source pages publish (equipment names on treatment
  pages are verbatim from source).

## Build order
7.1 next.config.ts → 7.2 content/seo.ts + JsonLd → 7.3 wire JSON-LD per
page → 7.4 metadata descriptions+canonicals → 7.5 sitemap/robots/redirects →
7.6 footer disclaimer + privacy stub → 7.7 `npm run build` verification →
docs update → report.
