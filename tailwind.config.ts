import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ── Flagship brand tokens (§2.1) — logo-derived: red arc, ink iris,
        //    grey under-stroke on warm porcelain. Red ~5% max, signature only.
        "porcelain": "#F7F5F1",
        "paper": "#FFFFFF",
        "mist": "#EEF1F4",
        "ink": "#0E1116",
        "ink-navy": "#101B2B",
        "ink-soft": "#5B5F66",
        "iris-grey": "#A7A9AC",
        "line": "#E4E1DB",
        "line-dark": "rgba(255,255,255,0.12)",
        "brand-red": "#E03A33",
        "brand-red-strong": "#C62F28",
        "brand-red-deep": "#9E231E",
        "red-wash": "#FBEDEB",
        "success": "#2F7D5B",
        // ── Semantic aliases (existing components) remapped onto the new
        //    tokens: primary is the interactive red (AA for small text),
        //    brand-red is reserved for display-size accents.
        "primary": "#C62F28",
        "primary-container": "#FBEDEB",
        "primary-fixed": "#9E231E",
        "on-primary": "#ffffff",
        "on-primary-fixed": "#00201d",
        "on-primary-fixed-variant": "#00504a",
        "primary-fixed-dim": "#59dace",
        // Ink (near-black) — medical authority, dark bands, outline CTAs
        "secondary": "#0E1116",
        "secondary-fixed": "#c2e8fa",
        "secondary-fixed-dim": "#a6ccdd",
        "on-secondary": "#ffffff",
        "on-secondary-fixed": "#001f29",
        "on-secondary-fixed-variant": "#264b5a",
        // Background / surfaces — warm porcelain, not cold gray
        "background": "#F7F5F1",
        "surface": "#F7F5F1",
        "surface-canvas": "#EFECE6",
        "surface-warm": "#EFECE6",
        "surface-tint": "#EFECE6",
        "surface-ice": "#EEF1F4",
        "surface-dim": "#cbdbf5",
        "surface-bright": "#F8F7F3",
        // Cards
        "card-white": "#FFFFFF",
        "surface-container": "#EFECE6",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#eff4ff",
        "surface-container-high": "#E4E1DB",
        "surface-container-highest": "#d3e4fe",
        // Borders
        "border-subtle": "#E4E1DB",
        "border-light": "#E4E1DB",
        "outline": "#6c7a77",
        "outline-variant": "#A9AAAC",
        // Text
        "on-background": "#0E1116",
        "on-surface": "#0E1116",
        "on-surface-variant": "#5B5F66",
        "inverse-surface": "#213145",
        "inverse-on-surface": "#eaf1ff",
        // Utility
        "star-gold": "#F59E0B",
        "success-emerald": "#10B981",
        "tertiary": "#565e74",
        "tertiary-fixed": "#dae2fd",
        "tertiary-container": "#8e95ae",
        "on-tertiary": "#ffffff",
        "on-tertiary-fixed": "#131b2e",
        "on-tertiary-fixed-variant": "#3f465c",
        "on-tertiary-container": "#262e42",
        "tertiary-fixed-dim": "#bec6e0",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans', sans-serif"],
        // Mirror the fontSize token names so `font-*` classes resolve:
        // display/headline → Fraunces (distinctive serif), rest → Jakarta.
        "display-hero": ["'Fraunces', Georgia, serif"],
        "display-xl": ["'Fraunces', Georgia, serif"],
        "fluid-h1": ["'Fraunces', Georgia, serif"],
        "fluid-h2": ["'Fraunces', Georgia, serif"],
        "fluid-h3": ["'Fraunces', Georgia, serif"],
        "headline-lg": ["'Fraunces', Georgia, serif"],
        "headline-md": ["'Fraunces', Georgia, serif"],
        "headline-sm": ["'Fraunces', Georgia, serif"],
        "title-md": ["'Plus Jakarta Sans', sans-serif"],
        "title-sm": ["'Plus Jakarta Sans', sans-serif"],
        "label-md": ["'Plus Jakarta Sans', sans-serif"],
        "label-sm": ["'Plus Jakarta Sans', sans-serif"],
        "body-lg": ["'Plus Jakarta Sans', sans-serif"],
        "body-md": ["'Plus Jakarta Sans', sans-serif"],
        "body-sm": ["'Plus Jakarta Sans', sans-serif"],
      },
      fontSize: {
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.5px" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.15px" }],
        "body-sm": ["14px", { lineHeight: "20px" }],
        "body-md": ["16px", { lineHeight: "24px" }],
        "body-lg": ["18px", { lineHeight: "28px" }],
        "title-sm": ["18px", { lineHeight: "28px", fontWeight: "600" }],
        "title-md": ["20px", { lineHeight: "30px", fontWeight: "600" }],
        "headline-sm": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "headline-md": ["28px", { lineHeight: "36px", fontWeight: "700" }],
        "headline-lg": ["36px", { lineHeight: "44px", fontWeight: "700" }],
        "display-hero": ["56px", { lineHeight: "64px", fontWeight: "700", letterSpacing: "-0.02em" }],
        // Fluid display scale (§2.2) — clamp() sizes, tight tracking.
        "display-xl": ["clamp(3.25rem, 7vw, 7.5rem)", { lineHeight: "1.02", fontWeight: "600", letterSpacing: "-0.02em" }],
        "fluid-h1": ["clamp(2.5rem, 5vw, 5rem)", { lineHeight: "1.05", fontWeight: "600", letterSpacing: "-0.02em" }],
        "fluid-h2": ["clamp(2rem, 3.6vw, 3.5rem)", { lineHeight: "1.08", fontWeight: "600", letterSpacing: "-0.015em" }],
        "fluid-h3": ["clamp(1.375rem, 2vw, 1.75rem)", { lineHeight: "1.28", fontWeight: "600" }],
      },
      spacing: {
        "space-xs": "4px",
        "space-sm": "16px",
        "space-md": "24px",
        "space-lg": "32px",
        "space-xl": "48px",
        "space-2xl": "80px",
        // Flagship layout rhythm (§2.3): fluid gutters + section padding.
        "gutter": "clamp(20px, 5vw, 80px)",
        "section-y": "clamp(96px, 12vw, 180px)",
      },
      maxWidth: {
        "site": "1320px",
      },
      borderRadius: {
        "rounded-xl": "1rem",
        "rounded-2xl": "1.5rem",
        // 28px for large media per spec (between 2xl and full).
        "rounded-media": "28px",
        "rounded-full": "9999px",
      },
      boxShadow: {
        sm: "0px 1px 3px rgba(11,28,48,0.05)",
        md: "0px 4px 12px rgba(11,28,48,0.08)",
        xl: "0px 12px 32px rgba(11,28,48,0.12)",
        // NOTE: brand-* shadows live as plain CSS in app/globals.css —
        // v4's legacy-config interop drops custom boxShadow keys.
      },
    },
  },
  plugins: [],
};

export default config;
