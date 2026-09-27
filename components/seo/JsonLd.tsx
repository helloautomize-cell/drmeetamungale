import React from "react";

// ─── JSON-LD script renderer ────────────────────────────────────────────
// Serializes verified structured data (content/seo.ts) into a script tag.
// Payloads only — no invented fields (see content/seo.ts notes).
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
