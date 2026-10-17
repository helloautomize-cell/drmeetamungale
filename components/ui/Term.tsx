import { GLOSSARY, termLabel, termNote, type GlossaryKey } from "@/content/glossary";

// <Term k="slt" /> renders "Full name (SHORT)". The plain-language
// explanation is exposed via the title attribute (tooltip) — the visible
// expansion itself carries the meaning, so nothing depends on hover.
// On treatment pages, <TermNote> renders the explanation as visible text
// (max ~two lines) under a procedure/test name; terms with no approved
// wording yet (IDRA, E-Eye) render nothing.

export function Term({ k }: { k: GlossaryKey }) {
  const t = GLOSSARY[k];
  return (
    <span title={t.explanation || undefined}>{termLabel(k)}</span>
  );
}

export function TermNote({ k }: { k: GlossaryKey }) {
  const note = termNote(k);
  if (!note) return null;
  return (
    <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
      {note}
    </p>
  );
}
