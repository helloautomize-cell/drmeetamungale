# Phase 3 — Global Layout Shell Plan

Reference: MASTER_PROMPT.md Phase 3 (3.1–3.8). Blocked previously by missing primitives; Phase 1 primitives now complete (8/8 delivered).

Status: Ready to build. No site changes made. Read-only respected during planning.

---

## 3.1 TopBar + Header
**Components needed:** `components/layout/Header.tsx`, `components/layout/TopBar.tsx`
**Data source:** `content/site.ts` (logo path, navTree, brand name, tagline)
**Reference patterns (from reference_home.html):**
- Sticky header with `backdrop-blur-md` (glass effect)
- Logo (`httpsmungaleeyehospital-logo.svg` → `/images/hero/logo.svg`)
- Dropdown menus (`elementor-widget-nav-menu` structure): About Us (no sub-items), Treatments (6 sub-items mapped from `site.ts`), Insurance & Cashless (no sub-items), Resources (Blog, FAQs, Gallery sub-items), Book Appointment
- Mobile burger toggle (`elementor-menu-toggle` — burger icon with open/close SVGs)
- Active-link state (`elementor-nav-menu` active item styling: `bg-primary` on hover/active)
- Keyboard accessible (`tabindex`, focus states)
- Blur backdrop (`shadow-xl shadow-primary/5` pattern from reference hero card)

**Implementation notes:**
- Use `lucide-react` icons (`Menu`, `X`) mapped one-to-one from reference Material Symbols (`expand_more`, `chevron_right`, `calendar_today`, etc.)
- Navigation dropdown uses `components/ui/Tabs.tsx` or a custom dropdown component using the primitive `Button` for CTA
- Header must reference `site.ts` `navTree` array exactly (not hard-coded links)
- Sticky: `position: sticky; top: 0; z-index: 50`
- Blur: `backdrop-blur-md` class (Tailwind standard; matches reference `elementor-location-header` with backdrop blur)

---

## 3.2 Mobile Nav Drawer
**Component:** `components/layout/MobileNav.tsx`
**Requirements (master prompt):**
- Focus trap (only tab within drawer; Esc closes; body scroll lock)
- Burger toggle opens/closes (`Menu`/`X` icons from lucide-react)
- Same navigation links as desktop (`navTree` from `site.ts`)
- Must work at 360px and 768px (responsive verification required per 3.8)
- No fake "Doctors Online" indicator (master prompt: no online claim in source; floating pill must reflect real actions: Call, WhatsApp, Book)

**Implementation approach:**
- Use CSS `overflow-hidden` on `html/body` when drawer open (scroll lock)
- Focus trap via `useEffect` and `tabIndex` management
- Drawer slides from right (`transform: translateX(100%)` → `translateX(0)` with transition)
- Dark overlay behind drawer (`bg-on-surface/40` or similar semi-transparent layer)

---

## 3.3 Footer
**Component:** `components/layout/Footer.tsx`
**Data source:** `content/site.ts` (name, tagline, address, phones, email, hours, socials, navTree quick links, treatments list)
**Reference footer patterns:**
- Real quick links (About, Treatments dropdown [6 real slugs], Insurance, Resources dropdown [Blog, FAQs, Gallery], Contact = Book Appointment)
- Contact details block (address verified: Vinraj Plaza, Kothi Road, Vadodara; phone +91 8140250055; emergency +91 9723311209; email mungaleeyehospital@gmail.com)
- Hours block (Mon-Sat 9 AM-8 PM, Sunday Closed — verified from source)
- Logo (`logo.svg` from archive/assets/images/ mapped to `/images/hero/logo.svg`)
- Social links (Facebook, Instagram, YouTube URLs verified from source HTML/script tags)
- Legal links placeholder (privacy policy link flagged as gap in CONTENT_GAPS.md)
- Footer design: clean, spacious, clinical typography using `font-label-sm`, `font-body-sm`, `text-on-surface-variant` (matches reference footer style)

**Implementation notes:**
- Footer uses `SectionHeader` primitive style for section grouping (not the header component, but the typography scale)
- Uses `Card` component for any featured links (optional)
- No reference brand terms (`Oliva`, etc.) — purge verified before build

---

## 3.4 Floating CTA Pill
**Component:** `components/layout/FloatingCTA.tsx`
**Requirements (master prompt 3.4 + CONTENT_GAPS.md clarification):**
- Must include: Call (`tel:+918140250055`), WhatsApp, Book Appointment (`/contact-us/`)
- NO "Doctors Online" indicator (master prompt explicitly states source has no online doctor claim; reference has "Doctors Online / Request Callback" which must be removed for Mungale build)
- Floating pill styled like reference pill (`rounded-full`, `shadow-md`, `hover:bg-primary`, `hover:text-on-primary`, `backdrop-blur-md` optional)
- Hidden when overlapping appointment form (optional enhancement per master prompt; basic version: always visible or hidden on mobile based on viewport)
- Must use `lucide-react` icons (`Phone`, `MessageCircle`, `Calendar`) mapped from reference Material Symbols (`call`, `schedule`, `chat`)

---

## 3.5 Root Metadata (`layout.tsx`)
**File:** `app/layout.tsx` (currently missing)
**Data source:** `content/site.ts` + logo file (`archive/assets/images/httpsmungaleeyehospital-logo.svg` mapped to `/images/hero/logo.svg`)
**Requirements:**
- `lang="en-IN"` (verified from master prompt 3.5)
- Title template: `"{title} | Mungale Eye Hospital — Best Eye Hospital in Kothi, Vadodara"`
- Description: from `site.ts` tagline ("Best Eye Hospital in Kothi, Vadodara") or from site_info meta description
- OG image: `/images/hero/logo.svg` or `/images/hero/logo-banner.png` (logo-based, clinical premium look)
- Favicon: `/images/hero/logo.svg` or `cropped-logo-2.png` (verified from site HTML meta: `site-icon-url` points to `cropped-logo-2-300x300.png`)
- Font loading: `Plus Jakarta Sans` via `next/font/google` (self-hosted, `display: swap` — matches reference font link but self-hosted per master prompt 3.6)

---

## 3.6 Font Loading (`layout.tsx` + global CSS)
**Requirements:**
- Self-hosted `Plus Jakarta Sans` via `next/font/google` (no Google Fonts `<link>` tags per master prompt 3.6)
- Font weights loaded: 400, 500, 600, 700 (matches reference font weights from `font-family` definition)
- `display: swap` set (matches reference `font_display-swap` meta setting from HTML)
- Font applied globally through CSS variables (`--font-sans`) or Tailwind `fontFamily.sans` (already configured in `tailwind.config.ts`)

---

## 3.7 Global Layout Shell (`layout.tsx`)
**Requirements (master prompt 3.7 + 3.1–3.6):**
- Wraps all pages with `<Header />`, `<Footer />`, `<FloatingCTA />`
- Includes `<TopBar />` (optional — reference has announcement bar; Mungale adaptation: working hours or brief clinical announcement)
- Fonts loaded via `next/font/google`
- Metadata base from site config
- Responsive verification at 360px, 768px, 1024px, 1440px (3.8)
- Must not contain any `Oliva`, `Soprano`, `Profhilo`, reference brand terms (purge verified before build)
- Must use ONLY real Mungale content (`/content/*` modules), images (`/content/images.ts` manifest), design tokens (`tailwind.config.ts` palette)

---

## Component Architecture (Phase 3 + future Phase 4/5/6)

Based on master prompt structure:`/components/layout/` (4 new files):
- `Header.tsx` (sticky, dropdown menus, mobile toggle, active-link state, keyboard accessible, blur backdrop)
- `MobileNav.tsx` (focus trap, Esc close, scroll lock, same nav links as Header)
- `Footer.tsx` (real quick links from `site.ts`, contact, hours, socials, logo, legal placeholder)
- `FloatingCTA.tsx` (call button with `tel:` link, WhatsApp button, Book Appointment link — no online indicator)
- `TopBar.tsx` (optional announcement — real working hours or brief clinical badge; no Oliva text)

`/components/ui/` (8 files complete):
- `Button.tsx` (3 variants: primary/tonal/ghost — verified against reference button styles: rounded-lg, label-md, shadow-sm, hover transitions)
- `Container.tsx` (max-w-7xl, px-6 lg:px-12 — verified)
- `SectionHeader.tsx` (eyebrow + title + subtitle, text-center max-w-3xl mx-auto — verified against reference heading patterns)
- `Card.tsx` (rounded-2xl, shadow-sm, hover shadow-md, p-5 sm:p-6 — verified against reference service cards)
- `Badge.tsx` (rounded-md, label-sm, font-bold, 3 variants — verified against reference badges: US-FDA, Fractional RF, Q-Switch, Micro FUE, etc.)
- `StatChip.tsx` (rounded-xl shadow-sm, headline-md value, label-sm label — verified against reference stat chips: 8,00,000+, 95%, 125+, 35+ — Mungale adaptation: real verified claims only)
- `Tabs.tsx` (rounded-full buttons, primary active, card-white hover; content panels — verified against reference treatment tabs: Skin Care / Hair Care / Body Contouring)
- `Input.tsx` + `Select.tsx` (rounded-lg, bg-surface-canvas, focus:ring-2 focus:ring-primary/40 — verified against reference form inputs)

`/components/sections/` (NOT YET CREATED — Phase 4 requirement):
- `Hero.tsx` (badge, H1 with underline decoration, stats grid, doctor avatars, booking card — uses real `site.ts` content and `archive/assets/images/` for doctor photos)
- `TrustPillars.tsx` (6 cards — verified claims only from source; must not invent stats; must not include `125+ MD Dermatologists` unless user confirms or adjusts to `2 Senior Ophthalmologists` per CONTENT_GAPS.md note)
- `DoctorsBanner.tsx` (2 doctor cards with badges — design adapts intentionally from 4 to 2; badges must reflect reality — either `2 Senior Ophthalmologists` or badge removed)
- `TreatmentsShowcase.tsx` (tabs + 6 cards mapped to real service images from `archive/assets/images/`; descriptions from `archive/content/pages/*.md`)
- `GalleryStrip.tsx` (replaced before/after; uses real gallery + facility images)
- `ReviewsCarousel.tsx` (real Google reviews; original language preserved; optional translation toggle; `docs/CONTENT_GAPS.md` notes language preservation requirement)
- `HealthInsights.tsx` (blog grid — uses `archive/content/posts/*.md` titles/covers/excerpts; mapped to `public/images/blog-covers/` after Phase 2 pipeline execution)
- `ClinicLocator.tsx` (single location — address/hours verified from `site.ts`; Google Maps embed facade; no multi-city dropdown from reference)
- `CTABand.tsx` (appointment booking CTA + emergency call links — uses `phone` and `emergencyPhone` from `site.ts`; no fake online indicator)

`/content/` (expanded):
- `site.ts` (updated: navTree array verified, stats separated verified/unverified)
- `treatments.ts` (6 real treatments with descriptions mapped from page content — verified)
- `doctors.ts` (2 doctors with titles/slugs/descriptions — verified)
- `reviews.ts` (placeholder structure with real Google review sources noted; full review text requires source extraction — gap flagged)
- `gallery.ts` (gallery items structure — basic; requires full gallery image mapping from media_raw.json)
- `faqs.ts` (FAQ structure — basic; requires full FAQ content from source — gap noted)
- `blog/index.ts` (20 posts mapped — verified titles/slugs/dates; full body content in `archive/content/posts/*.md`)

Key design notes for Phase 3 (based on master prompt + reference HTML analysis):
- Header must include dropdown menus (`elementor-widget-nav-menu` pattern from reference) — `Tabs.tsx` component can be reused or adapted for dropdown behavior
- Mobile nav drawer (`elementor-menu-toggle` pattern) — `MobileNav.tsx` must implement burger icon toggle with `Menu`/`X` from lucide-react (mapped from Material Symbols `expand_more`/`close`)
- Floating pill must NOT include any "Doctors Online" text; must only show verified actions (Call, WhatsApp, Book Appointment) per `docs/CONTENT_GAPS.md`
- Footer quick links must reference `navTree` array from `site.ts`, not hard-coded links
- Font loading must use `next/font/google` (`Plus Jakarta Sans`, weights 400-700, `display: swap`) — configured in `tailwind.config.ts` but not loaded in any layout; `layout.tsx` must import it
- All components must import only from `/content/*` modules and use `/public/images/` for optimized assets (after Phase 2 pipeline execution)
- Brand purge: reference terms (`Oliva`, `Soprano`, etc.) must NOT appear in any built component or content file; checklist preserved in `docs/PALETTE.md`

Phase 3 status: BLOCKED by primitives (now complete) and layout file (`layout.tsx` missing). Once Phase 3 components built → Phase 4 homepage sections possible.

No edits made. Read-only phase respected. All observations verified against workspace files (`docs/`, `components/`, `content/`, `public/`, `archive/`, `app/`).
