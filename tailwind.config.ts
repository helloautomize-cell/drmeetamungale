import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette from Mungale logo + clinical clean reference
        "primary": "#c41e1e",
        "primary-container": "#ffe5e3",
        "primary-fixed": "#ed2225",
        "on-primary": "#ffffff",
        "on-primary-fixed": "#00201d",
        "on-primary-fixed-variant": "#00504a",
        "primary-fixed-dim": "#59dace",
        // Secondary (deep navy/charcoal from logo #0c0607)
        "secondary": "#0b1c30",
        "secondary-fixed": "#c2e8fa",
        "secondary-fixed-dim": "#a6ccdd",
        "on-secondary": "#ffffff",
        "on-secondary-fixed": "#001f29",
        "on-secondary-fixed-variant": "#264b5a",
        // Background / surfaces
        "background": "#f8f9ff",
        "surface": "#f8f9ff",
        "surface-canvas": "#F8FAFC",
        "surface-warm": "#FAF7F1",
        "surface-tint": "#E2F5F6",
        "surface-ice": "#F0FDFA",
        "surface-dim": "#cbdbf5",
        "surface-bright": "#f8f9ff",
        // Cards
        "card-white": "#FFFFFF",
        "surface-container": "#e5eeff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#eff4ff",
        "surface-container-high": "#dce9ff",
        "surface-container-highest": "#d3e4fe",
        // Borders
        "border-subtle": "#CCFBF1",
        "border-light": "#E2E8F0",
        "outline": "#6c7a77",
        "outline-variant": "#bbc9c7",
        // Text
        "on-background": "#0b1c30",
        "on-surface": "#0b1c30",
        "on-surface-variant": "#4a5a6a",
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
      },
      spacing: {
        "space-xs": "4px",
        "space-sm": "16px",
        "space-md": "24px",
        "space-lg": "32px",
        "space-xl": "48px",
        "space-2xl": "80px",
      },
      borderRadius: {
        "rounded-xl": "1rem",
        "rounded-2xl": "1.5rem",
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
