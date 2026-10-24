# Client Inputs Needed — Mungale Eye Hospital

Everything below is something only the client/doctors can supply or confirm. The audit did not invent any of it. Grouped so this file can be emailed as-is.

## 1. Verification of published numbers (site currently shows these — confirm or we remove)

- **"40,000+ patients"** and **"15,000+ surgeries"** — displayed on the homepage (trust chips) and About page. Code comments mark them NOT VERIFIED. Please confirm exact figures from hospital records, or approve removal.
- **"Over 19 years"** — consistent with establishment in 2007; confirmed internally, no action needed unless the wording should change.
- **"More than 500 corneal transplants"** on Dr. Meeta Mungale's profile — flagged in code TODO; please confirm approval to publish.
- **Emergency hours** — the site must not imply 24h emergency cover. Please confirm actual emergency availability for the two emergency numbers.
- **Role of +91 81402 50055** — currently used both as an emergency number and as the insurance-desk/appointment line. Please confirm its intended role.

## 2. Privacy policy & legal pages (currently missing or empty)

- **Privacy policy text** — /privacy-policy/ is an empty stub linked in the footer of every page. The booking form emails patient details via Gmail; the policy must describe what is collected, where it goes, retention, and a grievance contact (India IT Rules). Please provide/approve wording.
- **Medical disclaimer** — standard text for medical-information pages; please approve.
- **Editorial & medical-review policy** — the site claims every page is doctor-reviewed (3 October 2026). A public page describing that process (who reviews, how often, sources policy) materially strengthens E-E-A-T. Please describe the real process.
- **Terms of use** — optional but recommended.

## 3. Doctor & entity profiles

- **Google Business Profile URL** for the clinic's sameAs schema.
- Confirm the **Practo profile URLs** work in a browser (they return 403 to crawlers — likely bot-blocking, but please confirm the URLs are correct):
  - https://www.practo.com/vadodara/doctor/dr-sachin-mungale-ophthalmologist
  - https://www.practo.com/vadodara/doctor/dr-meeta-mungale-ophthalmologist
- Justdial listing URL for the clinic (one is linked from a blog post — confirm it's the canonical listing).
- Any **LinkedIn profiles** for either doctor.
- **Dr. Sachin: society memberships** — none listed (not in CV); supply if applicable.
- **Dr. Meeta experience entry** — CV says "Cornea Clinic, Kothi, Baroda (private practice)" for Nov 2009–present; the site says Mungale Eye Hospital. Please confirm correct wording.
- **New Vision Laser Centre (Jun–Oct 2009)** — in CV but flagged TODO; confirm include/exclude.
- **Conference photos** — two OphthaQuest photos are withheld pending confirmation that (a) Dr. Sachin is the pictured person in the award photo and (b) other people shown agree to publication.

## 4. Photos

- Real photos to replace the **two AI-generated blog covers** (cataract guide, glaucoma guide) — the cataract cover shows a before/after eye inset and the glaucoma cover shows a third-party brand logo.
- **Patient photo consent** — three site photos show identifiable patients (care-yag-*, exam-slitlamp-*, theatre-laser-*); confirm signed consent is on file before they can be enabled (currently gated off).
- **Before/after results gallery** — five outcome photos are gated off pending doctor approval (ocular tattooing, DSEK, pterygium, DALK, PK).

## 5. Content review queue

- **Sign off support article 1.1** ("When Does a Cataract Need Surgery? 7 Signs Not to Ignore") — currently renders "Published by Mungale Eye Hospital" with no reviewer name because `reviewConfirmed: false`. Once the doctors approve, names appear and reviewer schema activates.
- **Approve the rewritten legacy articles** once the fix phase produces them (~15 posts flagged for rewrite; nothing merges without sign-off).
- **Booking form callback promise** — the form says "Our team will call you"; confirm the real response window (e.g. within 2 working hours) if you want it stated.
- **Preferred-time slots** on the booking form (Morning/Evening) — confirm slot times.

## 6. Recommended new supporting articles (per cluster — doctors to write/approve)

Each pillar should have 5 supports. Currently only 1.1 exists.

- **Cataract** (pillar: /blog/cataract-surgery-guide/) — 1.2 Cataract surgery cost in Vadodara; 1.3 Cataract lens types: which IOL is right for you; 1.4 Cataract surgery recovery week by week; 1.5 (topic to confirm — e.g. preparing for cataract surgery / risks).
- **Glaucoma** (pillar: /blog/glaucoma-symptoms-causes-treatment/) — 5 supports needed; queue slots 2.1–2.5 exist in code (2.1/2.2/2.4 attach to glaucoma-evaluation, 2.3/2.5 to glaucoma-treatments). Suggested: eye-pressure test costs, drops vs laser, SLT, living with glaucoma, glaucoma + cataract combined surgery.
- **Keratoconus** (pillar: /blog/keratoconus-symptoms-causes-diagnosis-treatment/) — 5 supports (queue 3.1–3.5). Suggested: cross-linking, scleral lenses, keratoconus progression, transplant for keratoconus.
- **Corneal transplant** (pillar: /blog/corneal-transplant-surgery/) — 5 supports (queue 4.1–4.5). Suggested: DALK vs DSEK vs DMEK, rejection signs, recovery timeline, eye donation process, cost in India.
