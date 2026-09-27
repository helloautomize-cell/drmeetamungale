# Section Map — Phase 0 Discovery

Reference design: Oliva Clinic (premium medical/clinic skin & hair) → adapted for Mungale Eye Hospital (premium eye care).

## Reference Sections (in order)
1. TopBar / Announcement
2. Header (logo + nav dropdowns + Book Appointment)
3. Hero (badge + H1 + subcopy + stat chips + doctor avatars + booking card)
4. Trust Pillars (6 cards: clinical excellence claims)
5. Doctors Highlight Banner (doctor team image + text + badges)
6. Treatments Showcase (tabs: Skin/Hair/Body + cards + filter)
7. Patient Journey / Protocol (5-step scientific protocol)
8. Senior Doctors Spotlight (4 doctor cards)
9. Before & After Gallery → REPLACED with Facility/Gallery strip
10. CTA Band + Reviews (metrics + Google reviews carousel)
11. Health Insights (blog post grid)
12. Clinic Locator (map + address + hours)
13. Final Appointment CTA
14. Footer (links, contact, hours, socials, logo)
15. Floating CTA (Call / WhatsApp / Book pill)

## Mungale Adaptation
- Brand: Mungale Eye Hospital (not Oliva)
- Specialty: Ophthalmology / Eye Care (not skin/hair)
- Doctors: Dr. Sachin Mungale (MS Ophthalmology), Dr. Meeta Mungale (MS Ophthalmology, DNB)
- Treatments: 6 real treatments (Cornea Evaluation, Corneal Treatments, Glaucoma Evaluation, Glaucoma Treatments, Cataract Surgery, Optical & Contact Lenses)
- Stats: 20+ years expertise, certified surgeons, 24/7 facilities (real numbers from source: years=20+, patients/surgeries counters shown as JS counter, verified via HTML)
- Contact: Kothi, Vadodara · +91 8140250055 · Mon-Sat 9 AM-8 PM
- Social: Facebook, Instagram, YouTube

---

## Part 2 — Full Section Mapping (Reference → Mungale → Source → Images → Action)

| Reference Section | Mungale Equivalent | Content Source | Image IDs Used | Action |
|---|---|---|---|---|
| TopBar / Announcement | Real working hours + emergency numbers | docs/SITE_INVENTORY.md (hours, phones) | — | Keep (adapt text) |
| Header / Nav | Real menu: About, Treatments (dropdown), Insurance, Resources (dropdown), Book Appointment | docs/pages_list.md (slugs verified) | logo-svg, hero-logo-banner | Keep (adapt links) |
| Hero Badge | "Since 2007 · Kothi, Vadodara" real badge text | docs/SITE_INVENTORY.md (established date, address) | — | Adapt (real claim, remove fake stats) |
| Hero H1 / Subcopy | Welcome text from homepage content (`home.md`: "Welcome to Mungale Eye Hospital — Best Eye Hospital in Kothi, Vadodara") | rebuild/content/pages/home.md | — | Keep (adapt only design) |
| Hero Stats (4 chips) | Real highlights: 20+ Years Expertise, Certified Surgeons, 24/7 Service, Full-range Equipment (NOT invented numbers) | docs/CONTENT_GAPS.md (counter values need real confirmation) | — | Adapt (use verified claims; log numbers as gap) |
| Doctor Credential Bar | Real doctors: Dr. Sachin & Dr. Meeta Mungale (MS Ophthalmology) | docs/SITE_INVENTORY.md + rebuild/assets/images/DrMeeta-2.webp + DrSachin.webp | doctor-meeta, doctor-sachin | Keep (2 cards, not 4 — design adapts) |
| Booking Card (Hero right) | Real appointment form: Name, Mobile (+91), Treatment dropdown (6 real options), preferred date, consent checkbox (unchecked by default) | docs/pages_list.md (contact-us slug) + content/site.ts (treatments list) | — | Adapt (real dropdown options from site) |
| 6 Trust Pillars | Real claims: 20+ Years Expertise, Certified Surgeons, 24/7 Facilities, Full-range Diagnostic & Surgical Equipment, Cashless Insurance, Real Patient Numbers (only verified claims from source) | docs/CONTENT_GAPS.md (counter values gap flagged) | — | Adapt (remove unverified stats; keep verified highlights only) |
| Doctors Highlight Banner | "Meet the Doctors" section with real doctor team photo, badges (+120 certified doctors — but verified: only 2 doctors exist; badge text must reflect reality: "2 Senior Ophthalmologists" or remove badge if unverified) | rebuild/assets/images/doctor-*.webp + docs/SITE_INVENTORY.md | doctor-meeta, doctor-sachin, facility-photo | Adapt (2 doctors, not 4; adjust badges to real numbers or mark as TODO in CONTENT_GAPS) |
| Treatments Showcase (Tabs) | Real 6 treatments: Cornea Evaluation, Corneal Treatments, Glaucoma Evaluation, Glaucoma Treatments, Cataract Surgery, Optical & Contact Lenses (tabs: Diagnosis / Treatment / Vision Correction grouped; cards use service images with real descriptions from pages) | docs/pages_list.md (treatment slugs) + rebuild/content/pages/*.md | service-cornea-eval, service-glaucoma-eval, service-corneal-treat, service-cataract, service-glaucoma-treat, service-optical | Adapt (cards mapped to real service images; descriptions from real page content) |
| Patient Journey (5-Step Protocol) | Adapted to real Mungale services: Consultation, Diagnosis, Treatment Plan, Procedure, Post-Care Tracking (only if real process described; otherwise mark gap) | docs/pages_list.md + site_info (WPVibe plugin version 1.19.0 confirms real WP site) | — | Adapt or mark gap (check source for process description — if missing, insert `{/* TODO */}`) |
| Before & After Gallery | REMOVED (reference section). Replaced with Facility/Gallery strip from real gallery images (`gallery.md`, media library images, facility photo) | docs/pages_list.md (gallery page) + rebuild/assets/images/*.webp (gallery media) | facility-photo, media library gallery images | Replace (gallery strip, not before/after) |
| Reviews / CTA Band | Real Google reviews from source (some in Gujarati/Marathi — keep original language; optional translation toggle only if translation exists in source). CTA band: Book / Call / WhatsApp (no fake online doctor indicator). | docs/CONTENT_GAPS.md (reviews verified from source; must not invent names/counts) | — | Adapt (real reviews; no invented satisfaction percentages) |
| Health Insights (Blog Grid) | Latest real blog posts from posts.json (titles, covers, excerpts) mapped to cards with real URLs (`/blog/[slug]/`) | rebuild/content/posts/*.md + docs/posts.md inventory | media library blog covers (e.g. What-Are-Progression-Measurement-Benchmarks-in-Eye-Care.jpg etc.) | Keep (adapt to real posts; no fabricated blog titles) |
| Clinic Locator / Map | Real single-location block: address (Vinraj Plaza, Kothi), hours (Mon-Sat 9-8, Sun closed), phone (+91 8140250055), email, embedded Google Maps (lazy-loaded facade) | docs/SITE_INVENTORY.md (verified address/hours) | — | Keep (single location; no multi-city dropdown from reference) |
| Footer | Real links: About, Treatments (6 real sub-items), Insurance, Resources (Blog, FAQs, Gallery), Contact (Book Appointment), Hours, Social links, Logo (SVG), Legal links (placeholders if missing) | docs/pages_list.md + docs/CONTENT_GAPS.md (privacy policy missing) | logo-svg | Keep (adapt links; add privacy placeholder flagged) |
| Floating CTA Pill | Real floating pill: Call / WhatsApp / Book Appointment (phone links verified; no fake "Doctors Online" indicator — reference shows "Doctors Online / Request Callback" but Mungale source has no online doctor indicator; must be removed) | docs/CONTENT_GAPS.md (no "online doctor" claim in source) | — | Adapt (remove online indicator; keep phone/book actions) |

Brand Purge Verification: Zero hits allowed for `Oliva`, `Soprano`, `Profhilo`, `82978`, `Hyderabad`, `Jubilee`, `Dermatolog`, `Tricholog`, `8,00,000`, `125+`, `35+`, `lh3.googleusercontent.com/aida` outside `/reference` folder.
