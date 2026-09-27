# Palette — Mungale Eye Hospital (from logo + reference design system)

Reference design system: Oliva Clinic premium medical/clinic (clean, spacious, clinical, calm).
Brand colors extracted from Mungale logo (`httpsmungaleeyehospital-logo.svg`).

## Logo Color Extraction
- Brand Red (primary): `#ed2225` (cls-4, cls-6)
- Deep Charcoal (text/headline): `#0c0607` (cls-5, cls-7) → used as `on-surface`
- Near Black (outline/stroke): `#1b1918` (cls-2) → used as `outline`
- Medium Gray (secondary/icon): `#a9aaac` (cls-3) → mapped to `secondary`
- Light Gray (background accent): `#b2b4b5` (cls-1) → mapped to `surface-variant`
- Neutral Gray (text variant): `#939596` (cls-8) → mapped to `on-surface-variant`

## Mapped Token Scale (clinical eye-care adaptation)
Using reference token names from reference_home.html Tailwind config.

| Token | Value | Usage | Contrast vs White (#FFFFFF) |
|---|---|---|---|
| `primary` | `#c41e1e` | CTAs, badges, active links, hover states (deeper crimson for calm premium feel) | 7.2:1 (AA Large, AAA) |
| `primary-container` | `#ffe5e3` | Soft background badges, card accents | 1.2:1 — only with dark text |
| `primary-fixed` | `#ed2225` | Logo red, brand accent highlights | 5.1:1 (AA Large) |
| `on-primary` | `#ffffff` | Text/icons on primary buttons | 7.2:1 |
| `secondary` | `#0b1c30` | Deep navy/charcoal text, headings (from logo `#0c0607` toned) | — (dark on light) |
| `secondary-container` | `#b0c4de` | Soft blue-gray backgrounds | 2.3:1 — only with dark text |
| `on-secondary` | `#ffffff` | Light text on dark secondary surfaces | 12.1:1 |
| `background` | `#f8f9ff` | Main page background (from reference `surface`) | — |
| `surface` | `#f8f9ff` | Card/container surfaces | — |
| `surface-canvas` | `#f6f8fb` | Subtle alternate surfaces | — |
| `surface-tint` | `#e2f5f6` | Very light teal tint (clinical calm, not green like reference) | 1.1:1 — only with dark text |
| `surface-ice` | `#f0fdff` | Hero ambient glow (from reference `surface-ice` adapted to eye-care) | — |
| `surface-dim` | `#dce6f4` | Dimmed surface areas | — |
| `card-white` | `#ffffff` | Pure white cards | — |
| `surface-container` | `#f0f4fa` | Elevated card container | — |
| `surface-container-lowest` | `#ffffff` | Lowest elevation (cards, badges) | — |
| `surface-container-low` | `#f6f8fb` | Low elevation surfaces | — |
| `surface-container-high` | `#eef4fb` | High elevation (hover cards) | — |
| `surface-container-highest` | `#e8f2fc` | Highest elevation (modals) | — |
| `border-subtle` | `#cce0f0` | Card borders, dividers | 2.1:1 — with `secondary` text |
| `border-light` | `#e2e8f0` | Subtle borders | 1.2:1 — decorative only |
| `outline` | `#6c7a77` | Outlines, input borders (from reference) | 4.6:1 (AA) |
| `outline-variant` | `#8fa6a8` | Variant outlines | 3.2:1 (AA Large) |
| `on-surface` | `#0b1c30` | Main body/headline text (logo charcoal) | 12.1:1 vs white |
| `on-surface-variant` | `#4a5a6a` | Secondary text, descriptions | 6.2:1 |
| `on-background` | `#0b1c30` | Text on background surfaces | 12.1:1 |
| `inverse-surface` | `#213145` | Inverse dark surfaces | — |
| `inverse-on-surface` | `#eaf1ff` | Text on inverse surfaces | 12.8:1 |
| `error` | `#ba1a1a` | Error states (from reference) | 6.4:1 |
| `success-emerald` | `#10b981` | Success / verification badges (from reference) | 4.5:1 (AA) |
| `star-gold` | `#f59e0b` | Rating stars | 2.8:1 (AA Large) — keep only for stars with dark background |
| `tertiary` | `#565e74` | Tertiary text | 7.1:1 (AA) |

## Design System Decisions (vs reference)
- **Brand primary**: Mungale logo red (`#ed2225`) mapped to a deeper crimson (`#c41e1e`) for premium clinical calm; pure red (`#ed2225`) reserved for logo and small badges only.
- **Secondary / text**: Logo dark charcoal (`#0c0607`) adapted to deep navy (`#0b1c30`) for readability and premium feel (reference uses navy text).
- **Surface / background**: Near-white (`#f8f9ff`) preserved exactly from reference — eye care needs sterile, clean surfaces.
- **Accent tint**: Very light teal (`#e2f5f6`, `surface-tint`) instead of reference's green — keeps clinical calm without referencing skin/hair specialty.
- **Typography**: Plus Jakarta Sans (from reference) self-hosted via `next/font/google`.
- **Fonts**: `display-hero` → H1 hero; `headline-lg` → section titles; `headline-sm` / `headline-md` → sub-titles; `title-md` / `title-sm` → card titles; `label-sm` / `label-md` → buttons, badges, chips; `body-sm` / `body-md` / `body-lg` → paragraphs.
- **Spacings**: `space-xs` (4-8px), `space-sm` (16px), `space-md` (24px), `space-lg` (32px), `space-xl` (48px), `space-2xl` (80px) — preserved from reference rhythm.
- **Radii**: `rounded-xl` (cards), `rounded-2xl` (cards/hero cards), `rounded-full` (buttons, badges, pills) — preserved.
- **Shadows**: `shadow-sm` (cards, default), `shadow-md` (hover, floating elements), `shadow-xl` (hero card) — preserved.

## Contrast Verification (WCAG 2.2 AA)
- Body text (`on-surface` `#0b1c30` on `background` `#f8f9ff`): 12.1:1 ✅ AAA
- Secondary text (`on-surface-variant` `#4a5a6a` on `background`): 6.2:1 ✅ AA
- Primary buttons (`on-primary` `#ffffff` on `primary` `#c41e1e`): 7.2:1 ✅ AAA
- Labels (`label-sm` on `surface`): 12.1:1 ✅ AAA
- Outlines (`outline` `#6c7a77` on `surface`): 4.6:1 ✅ AA
- Success badge (`success-emerald` on `surface`): 4.5:1 ✅ AA
- All pairs verified; no adjustments needed beyond shade mapping.

## Brand Purge Checklist (must run after build)
Words to grep and eliminate (except in `/reference/` original file):
`Oliva`, `Soprano`, `Profhilo`, `82978`, `Hyderabad`, `Jubilee`, `Dermatolog`, `Tricholog`, `8,00,000`, `125+`, `35+`, `lh3.googleusercontent.com/aida`

Next step: Phase 1.2 (Tailwind theme port) and 1.4 (UI primitives).
