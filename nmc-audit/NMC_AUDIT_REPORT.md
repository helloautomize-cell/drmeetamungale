# NMC Advertising-Compliance Audit — Mungale Eye Hospital

**Audit date:** 26 October 2026
**Scope:** this repository (Next.js site, `mungaleeyehospital.com`). Live-site check performed against the built/rendered output described by the code; all findings cite repo file:line evidence. No code or content was changed.
**Rule set:** NMC "Guidelines on Ethical Advertising and Public Communication by Hospitals/Medical Institutions and Registered Medical Practitioners" (No. R-13014/01/2024-Ethics, dated 06/10/2026), IMC Regulations 2002, DMR Act 1954, DPDP Act 2023 / Rules 2025.

---

## Step 1 — Practice profile

| Item | Evidence-based answer |
|---|---|
| Practice type | **P4 — Hospital / medical institution.** "Mungale Eye Hospital": two RMPs, operation theatre, in-house pharmacy, optical store. `content/site.ts:10`, `content/treatments-atlas.ts:539-548` |
| State / council | **Vadodara, Gujarat → Gujarat Medical Council.** `content/site.ts:14` |
| Doctors named | **Dr. Sachin Mungale** — MBBS, MS (Ophthalmology), Fellowship in Glaucoma (LVPEI). GMC Reg. No. **G-12281** shown. **Dr. Meeta Mungale** — MBBS, MS (Ophthalmology), DNB, Fellowship in Cornea & Anterior Segment (LVPEI). GMC Reg. No. **G-39262** shown. `content/doctors.ts:109-110,194-195` |
| Procedures described | **Yes** — corneal transplant (DALK/DSEK/DMEK/PK), SLT, Nd:YAG PI, trabeculectomy/valves/MIGS, cataract surgery, specialty lenses. `content/treatments-atlas.ts`, `content/treatment-drafts/` |

## Step 2 — Feature inventory

| # | Feature | Present? | Evidence |
|---|---|---|---|
| F1 | Testimonials / reviews / star ratings | **Yes** | `components/sections/Reviews.tsx:155-207` (6 verbatim Google reviews, 5-star icons, "Patient stories"); `components/sections/TrustPillars.tsx:31-34` (embedded Google quote); `components/layout/Footer.tsx:34` ("Patient Stories" link → Google reviews search) |
| F2 | Review / rating schema | **No** | No `AggregateRating`/`Review` type in any JSON-LD (`content/seo.ts`, `content/doctor-schema.ts`) |
| F3 | Case studies / patient stories | **Yes** | Reviews are presented as "Patient stories" (`Reviews.tsx:165-171`); the Kadia Dhruv review narrates a full treatment journey (`content/reviews.ts:50-55`) |
| F4 | Patient photos / before-after / scans | **Yes** | Identifiable patients rendered on `/gallery/` (IMG_2179, IMG_2130, IMG_2207, IMG_2219, IMG_2193; EMR screens IMG_2197, IMG_2116) and `/about-us/` (IMG_0887, 11-jpg, 30-jpg). Clinical eye close-ups on `/treatments/corneal-treatments/` (`treatments-atlas.ts:296-358`). Before/after images exist but are gated off (`lib/site-config.ts:27` `SHOW_BEFORE_AFTER=false`) — not rendered, though publicly reachable by URL |
| F5 | Patient / surgery videos | **No** | No `<video>`, no YouTube embeds; YouTube profile link only |
| F6 | Doctor photographs | **Yes** | Profile pages (`doctors/[slug]/page.tsx:124`), homepage cards (`DoctorsStory.tsx`), About teaser, hero avatars (`Hero.tsx:123-138`), doctor OG share image (`doctors/[slug]/page.tsx:62`), gallery `Dr-Sachin.jpg` |
| F7 | Numbers: patients / surgeries / years | **Yes** | "500+ corneal transplants" (`TrustPillars.tsx:28-30`; `doctors.ts:198,284`), "19+ years", "2 specialists". The 40,000+/15,000+ figures are marked NOT VERIFIED and are not rendered (`site.ts:55-58`) |
| F8 | Awards / rankings / media logos | **No** | None rendered; conference photos are `approved:false` and filtered out (`doctors.ts:318-332`, `gallery.ts:88-103`) |
| F9 | Equipment / facility descriptions | **Yes** | Treatment-atlas device entries (`treatments-atlas.ts:124-260,481-534`), facilities block (`:539-548`), Pristine 5.0 section (`PristineDevice.tsx`) |
| F10 | Fees / packages / cost pages | **No** | No fee list; the LASIK guide quotes general India-wide ranges as education (`blog-bodies.ts:12366,12858`) |
| F11 | Offers / discounts / camps / coupons | **No** | No offers found |
| F12 | Educational content | **Yes** | 36 blog posts, FAQs, glossary, 6 treatment patient-guides, `/medical-disclaimer/` |
| F13 | Appointment / contact forms, WhatsApp | **Yes** | `ContactBookingForm.tsx` (unticked required consent + optional updates opt-in + privacy link); WhatsApp link in `StickyMobileBar.tsx`; Google Maps click-to-load facade. No pop-ups, countdowns or auto-open widgets found |
| F14 | AI content | **Yes** | Site-wide generated artwork (`lib/images.ts:18-33` "Generated artwork"); AI-generated blog covers flagged in comments (`blog/index.ts:130-133,184-190`), alts say "Illustration:" but nothing discloses AI |
| F15 | Analytics / pixels / cookies | **No** | Privacy policy states none (`privacy-policy/page.tsx:33`); grep confirms zero trackers |
| F16 | Third-party credits / links | **Yes** | "Built & Marketed by Automize Media Labs" (`Footer.tsx:324-334`, `humans.txt:2`, `llms.ts:103`); insurer partner logos (`insurance.ts:29-50`); Practo + Justdial URLs in JSON-LD `sameAs` (`seo.ts:66-68`); Google review links |
| F17 | Announcements / events | **Yes** | Gallery "Teaching & events" history list incl. "Camp & Conference Organized At Navsari 2015" (`gallery.ts:107-117`) — factual, non-promotional |
| F18 | Doctor directory | **Yes** | `/doctors/` index + two profile pages with qualifications and GMC numbers |
| F19 | Social media links | **Yes** | Facebook, Instagram, YouTube (`site.ts:31-35`, footer); Practo/Justdial in schema |

## Step 3 — Applicability

| Check | Applies? | Reason |
|---|---|---|
| M1 Registration disclosure | **Met (partial)** | GMC number + council name shown on doctor profiles, medical-review bylines, editorial policy, Physician JSON-LD `identifier`, llms.txt. Not present in the site-wide footer (see NMC-14) |
| M2 Privacy notice & consent | **Met** | Unticked required consent checkbox + optional updates opt-in + linked privacy policy; no trackers (`ContactBookingForm.tsx:252-275`) |
| M3 Risks & limitations | **Met** | Every treatment page renders a "Risks" section (`TreatmentDraftContent.tsx:86`; `risks[]` in all 6 drafts) |
| M4 AI disclosure | **MISSING** | AI-generated artwork/covers in use; editorial policy has no AI-assistance disclosure; no "AI-generated" labels (NMC-10) |
| M5 Medical disclaimer | **Met** | `/medical-disclaimer/` page + site-wide footer disclaimer sentence (`Footer.tsx:335-339`) |
| C1 Claims & wording | Applies | Text audited |
| C2 Testimonials & reviews | Applies | F1 |
| C3 Cases & patient stories | Applies | F3 |
| C4 Patient images & video | Applies | F4 |
| C5 Doctor photos | Applies | F6 |
| C6 Numbers, awards, media | Applies | F7 (F8 N/A — nothing rendered) |
| C7 Equipment & facilities | Applies | F9 |
| C8 Fees & offers | N/A | F10/F11 absent |
| C9 Educational content | Applies | F12 |
| C10 Solicitation & CTAs | Applies (clean) | F13 — factual contact/CTAs only; no pop-ups or urgency mechanics |
| C11 AI | Applies | F14 |
| C12 Data protection | Applies | F13 — consent + privacy policy in place; no ad-platform data flows |
| C13 Third parties & agency | Applies | F16 |
| C14 Announcements | Applies (clean) | F17 — factual events history only |
| C15 Institution rules | Applies | P4 + F18 — directory compliant; facility claims covered by NMC-05 |
| C16 Off-site checklist | Applies | F19 — listed at end |

## Executive summary

**Risk level: Severe.** The site is structurally well-governed (registration numbers, review bylines, risk sections, consent flow, no trackers) but carries one critical exposure and several clear guideline breaches left over from legacy copy and marketing patterns. **Counts: 1 CRITICAL · 7 HIGH · 5 MEDIUM · 2 LOW (15 findings).** The single most urgent item: identifiable patient photographs — including an EMR screen showing a named patient's ID and date of birth — are published on `/gallery/` and `/about-us/`. Top fixes: (1) remove/consent-gate all patient photos and any image containing EMR screens; (2) remove the "Patient stories" testimonial section and embedded Google-review quote; (3) remove the "500+ transplants" and "90% success rate" numbers; (4) remove superlatives ("state-of-the-art", "gold standard", "first installation in Vadodara", "one of the largest…", "cutting-edge"); (5) remove the "Built & Marketed by" agency credit.

---

## Findings

### CRITICAL

**NMC-01 — Identifiable patient photographs and patient record data published without documented consent**
- **Severity:** CRITICAL
- **Clause:** 6.1–6.4, 7.4, 7.5, 8.1(v); DPDP Act 2023 (health data); IMC 2002 confidentiality
- **Location:** `https://mungaleeyehospital.com/gallery/` and `/about-us/` — `content/gallery.ts:36-103`, `app/gallery/page.tsx:64-67` (`MasonryGallery`), `components/sections/about.tsx:343,363,381`
- **Evidence (verified visually):**
  - `/gallery/` — `IMG_2179-scaled.jpg`: woman patient at the fundus camera, full face; tablet in frame shows an exam screen. `IMG_2130.jpg`: male patient's full face at the slit lamp (staff badge legible). `IMG_2207.jpg`: elderly man's full face during Tono-Pen exam **plus monitor showing "Vaidya, Dr. Chhotalal · 025/1360 · Birthdate: 01/05/1953"**. `IMG_2219-scaled.jpg`, `IMG_2193-scaled.jpg`: women patients' faces at the slit lamp. `IMG_2197-scaled.jpg`: close-up of the EMR monitor — patient name, record ID `S0001669813` / `025/1360`, birthdate, visit dates. `IMG_2116-scaled.jpg`: EMR screen visible behind the doctor. `IMG_2131`, `IMG_2188`, `IMG_2217`: partially identifiable patients.
  - `/about-us/` — `30-jpg.webp` ("Computerised eye testing"): male patient's face clearly visible. `IMG_0887-jpg.webp` ("Nd:YAG laser procedure"): female patient at the laser, facial profile visible. `11-jpg.webp` ("Eye examination underway"): patient at the slit lamp, partially identifiable.
  - These files bypass the `PATIENT_PHOTO_CONSENT_CONFIRMED=false` gate (`lib/site-config.ts:17`), which only covers `care-yag-*`, `exam-slitlamp-*`, `theatre-laser-*` via `lib/images.ts`.
- **Why it breaches:** The guidelines permit patient images only as strictly educational, anonymised content with documented consent; publishing recognisable patients — and worse, an on-screen patient record with name, ID and DOB — is an identifiable-patient-data exposure (top of the 10.1 penalty ladder).
- **Compliant alternative:** Remove every image that contains a patient or a clinical screen from `/gallery/` and `/about-us/` until the hospital holds a signed, dated consent form per patient on file. EMR screens must never be photographed/published — crop or delete unconditionally. If consent is later confirmed, keep only anonymised shots (no face, name, badge-readable identifiers) with clinical captions. Replace About-page figures with the existing doctor-only / equipment / building photos (e.g. `why-consultation.webp`, `IMG_2223-jpg.webp`, entrance shot).
- **SEO/AEO note:** Removing images slightly thins the gallery; alt-rich doctor/staff/facility photos carry the same E-E-A-T and image-SEO value without the risk.
- **Client input needed:** Whether any written consent exists for these specific patients; confirmation no patient records were knowingly photographed.
- **Effort:** M (content flag per image + replacement picks; remove files from `public/`)

### HIGH

**NMC-02 — Patient testimonials and star ratings rendered for promotion**
- **Severity:** HIGH
- **Clause:** 8.1(ii), 8.1(xi), 8.1(xii), Explanation V; 6.2
- **Location:** homepage `/` — `components/sections/Reviews.tsx:155-207` ("Patient stories", 6 verbatim Google reviews, 5-star icons, "6 verified patient reviews, all five-star", "Read on Google", "More patient stories"); `components/sections/TrustPillars.tsx:31-34` (embedded Google quote); `components/layout/Footer.tsx:34` ("Patient Stories" nav link → Google reviews results); data `content/reviews.ts:13-56`
- **Quoted text:** "What it feels like to be cared for here." / "Real experiences shared by Mungale patients." / "The doctors explained everything clearly and the staff was very supportive. We are very happy with the results." — Pankaj Makhijani · Google review
- **Why it breaches:** Patient testimonials in any form are prohibited for promotion; consent does not make them allowed (6.2), and star-rating displays are review promotion.
- **Compliant alternative:** Delete the `Reviews` section and the TrustPillars quote block; remove `content/reviews.ts`; relabel the footer link "Find us on Google" (plain GBP link is acceptable). Do not paraphrase the praise in the hospital's voice. If any case has real teaching value, convert one into an anonymised clinical case (age band, problem, findings, procedure, typical recovery, risks, "outcomes vary") with documented consent — otherwise drop it.
- **SEO/AEO note:** The section currently supplies review-signal text; the trust signal survives through verifiable credentials (registration numbers, fellowships, publications) which carry E-E-A-T without testimonials.
- **Client input needed:** Whether they want one anonymised clinical case drafted from a documented-consent case, or none.
- **Effort:** S

**NMC-03 — Surgery-volume number "500+ corneal transplants"**
- **Severity:** HIGH
- **Clause:** 8.1(iii), 8.1(ix) (patient/surgery counts prohibited); C6
- **Location:** homepage `/` — `TrustPillars.tsx:28-30` ("500+ Corneal transplants by Dr. Meeta Mungale"); `/doctors/meeta-mungale/` — `doctors.ts:198` (bio: "She has performed more than 500 corneal transplants"), `doctors.ts:284` (`clinicalWork`), rendered via `llms.ts:54` into llms-full.txt
- **Quoted text:** "500+ / Corneal transplants by Dr. Meeta Mungale / Depth you can count."
- **Why it breaches:** Publishing the number of surgeries performed is a prohibited promotional metric, verified or not.
- **Compliant alternative:** Replace the stat with verifiable facts: "Fellowship-trained cornea surgeon — DALK, DSEK, DMEK, PK" and keep bio wording to "lamellar keratoplasty techniques" without the count; drop `clinicalWork` or change to a credentials line (publications, LVP faculty tenure).
- **SEO/AEO note:** "500+" is a strong E-E-A-T hook; replace with the equally factual LVPEI fellowship + publication list, which engines reconcile via `sameAs`.
- **Client input needed:** None (numbers must go regardless).
- **Effort:** S

**NMC-04 — Outcome claims: "Success rate of this procedure is 90%", "very safe"**
- **Severity:** HIGH
- **Clause:** 8.1(vi) (outcome/guarantee claims), 8.1(ix); C1/C6
- **Location:** `/treatments/` and `/treatments/glaucoma-treatments/` — `content/treatments-atlas.ts:430` ("This procedure is very safe and can be repeated. Success rate of this procedure is 90%."), `:435` ("It is a very safe and effective procedure to treat angle-closure glaucoma."); mirrored in `content/treatment-details.ts:192,197`
- **Why it breaches:** A stated success percentage and blanket safety claims are prohibited outcome/guarantee statements.
- **Compliant alternative:** "SLT lowers eye pressure for many patients and can be repeated; its effect can lessen over time and drops may still be needed. Your doctor will explain the likely benefit for your eyes." / "Nd:YAG iridotomy creates a small opening in the iris so fluid can drain; it is a short clinic procedure, and your doctor will explain its risks and benefits for your eyes."
- **SEO/AEO note:** Keeps procedure descriptions (the keywords) while removing the claim; the draft guides already carry balanced risk copy that ranks well.
- **Client input needed:** None.
- **Effort:** S

**NMC-05 — Superlatives and comparison claims on treatment/facility pages**
- **Severity:** HIGH
- **Clause:** 8.1(iii), Explanation II; C1/C7 (no superiority/accuracy guarantees)
- **Location:** `/treatments/` + treatment child pages — `treatments-atlas.ts:127` ("It is the gold standard for eye examination"), `:220` ("The most ideal way to measure intra-ocular pressure gives accurate readings always"), `:143` ("provide excellent visual acuity"), `:485` ("removes cataract with high efficiency in a matter of minutes"), `:546` ("one of the largest eye operation theatres in Vadodara city… No compromise in ensuring sterility and safety for eye surgeries!"); mirrored in `treatment-details.ts:77,142`
- **Why it breaches:** "Gold standard", "most ideal", "one of the largest", accuracy guarantees ("always") and outcome-speed claims ("in a matter of minutes") are unverifiable comparisons/outcome claims.
- **Compliant alternatives:** "An imaging slit lamp used for detailed eye examination." / "Goldmann applanation tonometry — the standard clinical method for measuring eye pressure." / "Rose K lenses improve visual acuity in keratoconus; fit and result vary by eye." / "Phacoemulsification is a short day-care procedure." / "A dedicated eye operation theatre with two tables, two LED microscopes, general-anaesthesia capability and class-B/ETO sterilisation." (Factual inventory is allowed under 8.3.)
- **SEO/AEO note:** Model names and factual specs preserve the equipment keywords; "gold standard" adds no ranking value.
- **Client input needed:** None.
- **Effort:** S–M (copy edits in two mirrored content files)

**NMC-06 — "First installation in Vadodara" badge**
- **Severity:** HIGH
- **Clause:** 8.1(iii) ("first in the city" claims need independent verifiable proof); C1
- **Location:** homepage `/` — `components/sections/PristineDevice.tsx:19` (`PRISTINE_BADGE = "First installation in Vadodara"`), rendered at `:78-82` (image `pristine-fundus-camera.webp` present in `public/images/home/`)
- **Why it breaches:** A "first in the city" claim is a superlative allowed only with independent, transparent verification, which is not cited.
- **Compliant alternative:** Remove the badge; the factual line "Mungale Eye Hospital now offers the Pristine 5.0 widefield fundus camera by Remidio" already carries the news. If Remidio issues written confirmation of first installation, the claim could be re-added citing that basis — low-risk option is removal.
- **SEO/AEO note:** The device name keeps the novelty keyword; the badge contributes nothing indexable.
- **Client input needed:** Whether Remidio documents the "first installation" claim (optional; recommend removal regardless).
- **Effort:** S

**NMC-07 — Agency marketing credit: "Built & Marketed by Automize Media Labs"**
- **Severity:** HIGH
- **Clause:** 8.1(ii) (RMP shall not engage a third party for marketing medical services), 4.4, 8.1(viii); C13
- **Location:** every page — `components/layout/Footer.tsx:324-334`; `public/humans.txt:2-3`; `content/llms.ts:103` (llms.txt/llms-full.txt)
- **Quoted text:** "Built & Marketed by Automize Media Labs" / "Website built and marketed by Automize Media Labs"
- **Why it breaches:** A public "marketed by" credit openly states that a third party markets the practice — an indirect route to a prohibited act.
- **Compliant alternative:** Remove the line, or reduce to a neutral credit "Website: Automize Media Labs" (development only). Delete the same line from `humans.txt` and `llms.ts:103`.
- **SEO/AEO note:** `rel=nofollow` already limits link value; removal has zero ranking impact.
- **Client input needed:** Whether the contract permits removing the credit line.
- **Effort:** S

**NMC-08 — About-page superlatives**
- **Severity:** HIGH
- **Clause:** 8.1(iii); C1
- **Location:** `/about-us/` — `components/sections/about.tsx:124` ("Relocated to a new, state-of-the-art facility in Kothi"), `:232-234` ("committed to the highest standard of eye care — advanced diagnostics, expert intervention and cutting-edge surgery, at affordable prices")
- **Why it breaches:** "State-of-the-art", "highest standard" and "cutting-edge" are prohibited comparative/superlative claims.
- **Compliant alternatives:** "Relocated to a new facility in Kothi, the heart of Baroda city." / "Mungale Eye Hospital provides specialist diagnostics and surgery for cornea, glaucoma and cataract care." (Drop "cutting-edge"; "affordable prices" → factual "the team explains costs before treatment" — cost framing belongs on the insurance page.)
- **SEO/AEO note:** None — these phrases carry no query value.
- **Client input needed:** None.
- **Effort:** S

### MEDIUM

**NMC-09 — Promotional passages inside educational blog articles**
- **Severity:** MEDIUM
- **Clause:** 5.1, Explanation I, 8.1(iii), 8.1(vi); C9 (articles that turn into promotion lose educational protection)
- **Location:** `/blog/*` — `content/blog-bodies.ts:1042` ("our ophthalmologists are highly skilled and experienced in performing state-of-the-art cataract surgery… premium intraocular lenses"), `:1221` ("Mungale Eye Hospital is your premier choice"), `:5768` ("Dr. Meeta Mungale is renowned throughout Vadodara for her cornea care work"), `:5828` ("the staff guarantees complete transparency and affordability—no hidden costs"), `:2119` ("With advanced diagnostic technology and experienced eye specialists, we offer complete vision care…"), `:4107,4333` (self-promo asides)
- **Why it breaches:** Educational content is protected only while genuinely educational; superlatives, "premier choice", "renowned" and guarantee language inside articles convert them into promotion.
- **Compliant alternative:** Delete or neutralise each promo sentence (the articles stand without them). Keep self-references only where factual ("If you need evaluation, the cornea team at Mungale Eye Hospital can assess…" linked once to the treatment page).
- **SEO/AEO note:** Removing fluff generally improves the articles' answer-quality signals; slugs like `/blog/best-eye-hospital-in-vadodara/` already carry neutral titles — no redirect needed.
- **Client input needed:** None.
- **Effort:** M (a dozen targeted sentence edits across legacy posts)

**NMC-10 — AI-generated imagery used site-wide without disclosure (must-have M4 missing)**
- **Severity:** MEDIUM
- **Clause:** 7.2(c); C11
- **Location:** site-wide — generated artwork registry `lib/images.ts:18-33` (hero iris, CTA band, specialty still-lifes, journey art, blog art); AI-generated blog covers `content/blog/index.ts:130-133` ("AI-generated cover — the before/after eye inset could be read as a promised surgical result"), `:184-190`; editorial policy `app/editorial-policy/page.tsx` (no AI mention); Footer comment "generated red artwork" (`Footer.tsx:42-44`)
- **Why it breaches:** The guideline requires editorial-policy disclosure of AI assistance and "AI-generated" labels on AI images; the policy is silent and labels say only "Illustration:". The cataract cover's before/after inset is additionally a misleading AI image implying a surgical result (7.2).
- **Compliant alternative:** Add an "AI use" paragraph to `/editorial-policy/`: "Some decorative illustrations and article covers on this site are AI-generated; they depict no real patient or procedure, and all medical content is written and reviewed by our doctors." Change affected `coverAlt`/captions from "Illustration:" to "AI-generated illustration:". Replace the cataract cover's before/after-inset artwork (real photo or neutral illustration). Never generate AI images of patients/doctors.
- **SEO/AEO note:** Honest labelling preserves the visual system and adds a transparency signal AI/answer engines increasingly reward.
- **Client input needed:** Confirm which assets are AI-generated so the disclosure wording is accurate.
- **Effort:** S–M

**NMC-11 — Doctor photographs in promotional placements (JUDGEMENT)**
- **Severity:** MEDIUM (judgement — low-risk option recommended)
- **Clause:** 9.2; C5
- **Location:** `Hero.tsx:118-151` (doctor avatars beside "Book a consultation" in the homepage hero); `doctors/[slug]/page.tsx:62` (doctor portrait used as the page's OG share image); `DoctorsStory.tsx` (large portraits beside "Book with this doctor")
- **Why it breaches:** 9.2 permits a plain identification photo on the profile/directory page; photos used inside hero/booking-CTA and share-card contexts function as promotional publicity. The directory/profile and about-page portraits are fine.
- **Compliant alternative:** Keep the profile-page and directory portraits (compliant). Remove the two hero avatars (keep the text "Led by Dr. Sachin & Dr. Meeta Mungale") and switch doctor-page `openGraph.images` to the site `og-default.jpg`. Optionally keep the homepage cards but detach the "Book with this doctor" link from the portrait block — lowest-risk option is text-only cards.
- **SEO/AEO note:** OG images with brand artwork look cleaner in shares; no ranking impact.
- **Client input needed:** Whether the doctors want portraits retained on the homepage cards (keep = judgement call).
- **Effort:** S

**NMC-12 — Clinical close-up photographs in the corneal-treatments gallery — consent unconfirmed**
- **Severity:** MEDIUM
- **Clause:** 6.1–6.4; C4
- **Location:** `/treatments/corneal-treatments/` gallery — `treatments-atlas.ts:296-358` (`infection.jpg`, `cb1/cb2`, `de1–de6`, `allergy.jpg`, `sjs1–sjs3` — eye close-ups, no faces)
- **Why it breaches:** Anonymised clinical images are allowed only as strictly educational content with documented consent; consent status is unverified.
- **Compliant alternative:** If the hospital holds signed consents, keep them and add a standard caption line "Shared for patient education with consent." If no consent exists, remove the clinical-photograph tiles (the illustrations `cornea-transplant.webp`, `q1.jpg` can stay).
- **SEO/AEO note:** Image-SEO value is modest; removing them costs little visibility.
- **Client input needed:** Whether signed patient-consent records exist for these photographs.
- **Effort:** S

**NMC-13 — Unlinked but publicly reachable patient files**
- **Severity:** MEDIUM
- **Clause:** 6.1–6.4 (publication = accessibility, not just linking); DPDP
- **Location:** `public/images/gallery/Before-After-*.jpg` (5 before/after files), `public/images/*Before-After*-jpg.webp` (5 files referenced by the orphaned `content/images.ts` manifest), `public/images/mungale/real/care-yag-*`, `exam-slitlamp-*`, `theatre-laser-*` (identifiable-patient photos that are code-gated but URL-reachable)
- **Why it breaches:** `SHOW_BEFORE_AFTER=false` and `PATIENT_PHOTO_CONSENT_CONFIRMED=false` stop rendering, but the files are still served publicly — anyone with the URL can fetch identifiable patient images, and crawlers can index them.
- **Compliant alternative:** Move all unapproved patient files out of `public/` (e.g. `archive/assets/`) until the matching consent/approval flags are legitimately flipped. This makes the existing gates real rather than cosmetic.
- **SEO/AEO note:** Removes the risk of before/after images surfacing in image search under the hospital's name.
- **Client input needed:** None.
- **Effort:** S

### LOW

**NMC-14 — Registration numbers absent from the site-wide footer**
- **Severity:** LOW
- **Clause:** Explanation III/IV (M1 — met elsewhere; strengthen for consistency)
- **Location:** `components/layout/Footer.tsx:304-334` (legal bar shows policies but no registration line)
- **Why:** M1 is satisfied on profiles/bylines/schema; adding a footer line makes the disclosure unmissable and uniform with the guideline's preferred placement.
- **Alternative:** Add "Dr. Sachin Mungale, MBBS, MS (Ophthalmology) — Gujarat Medical Council Reg. No. G-12281 · Dr. Meeta Mungale, MBBS, MS (Ophthalmology), DNB — Gujarat Medical Council Reg. No. G-39262" beside the legal bar.
- **Client input:** None. **Effort:** S

**NMC-15 — Free-text health details emailed to Gmail via the booking form**
- **Severity:** LOW
- **Clause:** 7.6, DPDP (data minimisation); C12
- **Location:** `/contact-us/#book` — `ContactBookingForm.tsx:240-248` ("Briefly describe your concern"), mailed by `app/api/booking/route.ts` → `lib/booking-mailer.ts` to the hospital Gmail
- **Why:** Compliant under the disclosed notice, but a free-text field invites patients to send clinical detail into consumer email; the rate limit and no-logging are already good.
- **Alternative:** Change placeholder to "Preferred day or general query — please do not include medical details or reports" and add one line in the privacy policy that clinical details should be shared at the visit, not by form/email.
- **Client input:** Doctor sign-off on wording. **Effort:** S

---

## Off-site checklist (C16) — same rules apply on every linked profile

- **Google Business Profile** (footer links to it): check that the practice is not soliciting reviews ("leave us a review" posts, WhatsApp broadcast requests), that no offer/discount posts exist, no before/after uploads, and the GMC numbers appear in the description.
- **Practo** — both doctor profiles (`seo.ts:67-68`): check displayed "experience years" vs. counts of patients, patient-story features, and that Practo's own rating widgets aren't promoted back onto the site. Practo badges must not be embedded on the site.
- **Justdial listing** (`seo.ts:66`): verify no paid "top doctor" badge is cited on-site; keep listing factual (address, hours, registration).
- **Instagram / Facebook / YouTube** (`site.ts:31-35`): check posts for testimonials/review screenshots, before/afters, offers/camps framed as promotions, festival greetings used to promote services, AI-generated people, and missing GMC numbers on promotional posts.
- **WhatsApp Business** (number linked site-wide): no broadcast promotions, review-request messages, or offer messages.

---

## Not found / correctly absent (per audit-only-what-exists rule)

No offers/discounts/coupons; no pop-ups, countdowns or chat widgets; no surgery videos; no review schema; no analytics, ad pixels or cookies; no awards/rankings rendered; no "as seen on" logo wall; no sponsored/pharma endorsements. Must-haves M1, M2, M3, M5 are met; M4 is the only missing must-have.
