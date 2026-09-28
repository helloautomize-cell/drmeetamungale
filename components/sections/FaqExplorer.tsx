"use client";

import React from "react";
import Link from "next/link";
import { faqCategories, type Faq, type FaqCategory } from "@/content/faqs";
import { Reveal } from "@/components/ui/motion";

// ─── FaqExplorer ───────────────────────────────────────────────────────────
// Refined FAQ discovery: search + category tabs + live count; desktop 35/65
// explorer (numbered list left, selected answer right, subtle transition);
// mobile accordion (one open at a time). Answers are VERBATIM source text —
// only presentation is structured (micro-headings over the source's own
// themes; linkified contact actions in the appointment answer).
type Filter = FaqCategory | "all";

function linkifyAppointment(text: string): React.ReactNode[] {
  // Exact source tokens → actions. Everything else renders untouched.
  const tokens: { match: string; node: (key: number) => React.ReactNode }[] = [
    {
      match: "Book an Appointment",
      node: (key) => (
        <Link
          key={key}
          href="/contact-us/#book"
          className="font-bold text-on-surface underline decoration-primary-fixed/60 underline-offset-4 hover:decoration-primary-fixed"
        >
          Book an Appointment
        </Link>
      ),
    },
    {
      match: "+91 8140250055",
      node: (key) => (
        <a key={key} href="tel:+918140250055" className="font-bold text-on-surface underline decoration-primary-fixed/60 underline-offset-4 hover:decoration-primary-fixed">
          +91 8140250055
        </a>
      ),
    },
    {
      match: "+91 9723311209",
      node: (key) => (
        <a key={key} href="tel:+919723311209" className="font-bold text-on-surface underline decoration-primary-fixed/60 underline-offset-4 hover:decoration-primary-fixed">
          +91 9723311209
        </a>
      ),
    },
  ];
  const out: React.ReactNode[] = [];
  let rest = text;
  let key = 0;
  while (rest.length > 0) {
    let earliest = -1;
    let hit: (typeof tokens)[number] | null = null;
    for (const t of tokens) {
      const i = rest.indexOf(t.match);
      if (i >= 0 && (earliest < 0 || i < earliest)) {
        earliest = i;
        hit = t;
      }
    }
    if (!hit || earliest < 0) {
      out.push(rest);
      break;
    }
    if (earliest > 0) out.push(rest.slice(0, earliest));
    out.push(hit.node(key++));
    rest = rest.slice(earliest + hit.match.length);
  }
  return out;
}

function StructuredAnswer({ index, answer }: { index: number; answer: string }) {
  // "What can be done to protect the eyes?" — the source's own four themes
  // as micro-headings; sentences unchanged.
  if (index === 3) {
    const parts = answer.split(/(?<=[.!])\s+(?=[A-Z])/);
    const heads = ["Bright light", "Smoking", "Diet", "Supplements"];
    let hi = 0;
    const blocks: React.ReactNode[] = [];
    let buf: string[] = [];
    const flush = () => {
      if (buf.length === 0) return;
      blocks.push(
        <div key={blocks.length}>
          {hi < heads.length && (
            <p className="font-bold text-on-surface text-[15px]">{heads[hi]}</p>
          )}
          <p className="mt-1 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {buf.join(" ")}
          </p>
        </div>
      );
      buf = [];
      hi += 1;
    };
    for (const s of parts) {
      buf.push(s.trim());
      // Source sentences: 1 light, 1 smoking, 2 diet, 1+ supplements.
      if (buf.length >= 1 && (hi === 0 || hi === 1)) flush();
      else if (hi === 2 && buf.length >= 2) flush();
    }
    flush();
    return <div className="space-y-4">{blocks}</div>;
  }
  // "Who can donate eyes?" — eligible vs excluded, straight from the source
  // sentences; list items are the source's own comma-separated groups.
  if (index === 5) {
    const eligible =
      "Eye donors could be of any age group or sex. People who use spectacles, diabetics, patients with high blood pressure, asthma patients and those without communicable diseases can donate eyes.";
    const excluded =
      "Persons with AIDS, Hepatitis B and C, Rabies, Septicaemia, Acute leukemia (Blood cancer), Tetanus, Cholera, and infectious diseases like Meningitis and Encephalitis cannot donate eyes.";
    if (answer.includes("cannot donate eyes")) {
      return (
        <div className="space-y-4">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{eligible}</p>
          <div>
            <p className="font-bold text-on-surface text-[15px]">Who cannot donate</p>
            <p className="mt-1 font-body-md text-body-md text-on-surface-variant leading-relaxed">{excluded}</p>
          </div>
        </div>
      );
    }
  }
  if (index === 0) {
    return (
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
        {linkifyAppointment(answer)}
      </p>
    );
  }
  return (
    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{answer}</p>
  );
}

export function FaqExplorer({
  faqs,
  categories,
}: {
  faqs: (Faq & { index: number })[];
  categories: Record<number, FaqCategory>;
}) {
  const [filter, setFilter] = React.useState<Filter>("all");
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState(0);
  const [shown, setShown] = React.useState(true);

  const visible = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      if (filter !== "all" && categories[f.index] !== filter) return false;
      if (q && !(f.question + " " + f.answer).toLowerCase().includes(q)) return false;
      return true;
    });
  }, [faqs, filter, query, categories]);

  React.useEffect(() => {
    setActive(0);
  }, [filter, query]);

  const current = visible[active] ?? visible[0];

  React.useEffect(() => {
    setShown(false);
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setShown(true))
    );
    return () => cancelAnimationFrame(raf);
  }, [current?.question]);

  const select = (i: number) => setActive(i);
  const showStartHere = filter === "all" && query.trim() === "";

  return (
    <div>
      {/* ── Search + categories + count ── */}
      <Reveal>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-end">
          <div>
            <label
              htmlFor="faq-search"
              className="text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface-variant"
            >
              Search questions
            </label>
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What are you looking for?"
              autoComplete="off"
              className="mt-2 w-full bg-surface-canvas text-on-surface font-body-md text-body-md rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-outline-variant"
            />
          </div>
          <div
            role="group"
            aria-label="Filter questions by category"
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {faqCategories.map((c) => {
              const selected = filter === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFilter(c.id)}
                  className={
                    "min-h-[44px] text-[13px] font-bold uppercase tracking-[0.12em] border-b-2 pb-1 transition-colors motion-reduce:transition-none " +
                    (selected
                      ? "border-primary text-primary-fixed"
                      : "border-transparent text-on-surface-variant hover:text-on-surface")
                  }
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>
        <p aria-live="polite" className="mt-4 text-[14px] text-on-surface-variant">
          {visible.length} question{visible.length === 1 ? "" : "s"}
          {filter !== "all" &&
            " in " + faqCategories.find((c) => c.id === filter)?.label}
          {query.trim() && ' matching "' + query.trim() + '"'}
        </p>
      </Reveal>

      {visible.length === 0 ? (
        <div className="mt-8 border-t border-secondary/10 pt-8 max-w-2xl">
          <p className="font-display-hero text-[24px] tracking-tight text-on-surface">
            No matching question found.
          </p>
          <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
            Try another search or contact the Mungale team.{" "}
            <Link
              href="/contact-us/"
              className="font-bold text-on-surface underline decoration-primary-fixed/60 underline-offset-4 hover:decoration-primary-fixed"
            >
              Contact us
            </Link>
          </p>
        </div>
      ) : (
        <>
          {/* ── Desktop explorer ── */}
          <div className="hidden lg:grid lg:grid-cols-[35%_65%] lg:gap-14 mt-8">
            <ol className="border-t border-secondary/10 self-start">
              {visible.map((f, i) => {
                const selected = current?.question === f.question;
                const isStart = showStartHere && f.index === 0;
                return (
                  <li key={f.question} className="border-b border-secondary/10">
                    <button
                      type="button"
                      aria-pressed={selected}
                      onClick={() => select(i)}
                      className="group flex w-full items-baseline gap-4 py-4 text-left min-h-[44px]"
                    >
                      <span
                        aria-hidden="true"
                        className={
                          "font-display-hero text-[14px] w-7 shrink-0 transition-colors motion-reduce:transition-none " +
                          (selected ? "text-primary-fixed" : "text-on-surface-variant")
                        }
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        {isStart && (
                          <span className="mb-1 inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-primary-fixed">
                            Start here
                          </span>
                        )}
                        <span
                          className={
                            "block font-body-md text-body-md font-semibold leading-snug transition-colors motion-reduce:transition-none " +
                            (selected ? "text-on-surface" : "text-on-surface-variant group-hover:text-on-surface")
                          }
                        >
                          {f.question}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className={
                          "h-[2px] w-6 shrink-0 self-center rounded-full transition-colors motion-reduce:transition-none " +
                          (selected ? "bg-primary" : "bg-transparent group-hover:bg-secondary/20")
                        }
                      />
                    </button>
                  </li>
                );
              })}
            </ol>
            <div className="self-start lg:sticky lg:top-32">
              {current && (
                <div
                  key={current.question}
                  className={
                    "border-t-2 border-secondary/70 pt-5 transition-all duration-300 motion-reduce:transition-none " +
                    (shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2")
                  }
                >
                  <h3 className="font-display-hero text-on-surface tracking-tight text-[26px] lg:text-[30px] leading-[1.15]">
                    {current.question}
                  </h3>
                  <div className="mt-4 max-w-[62ch]">
                    <StructuredAnswer index={current.index} answer={current.answer} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── Mobile accordion ── */}
          <div className="lg:hidden border-t border-secondary/10 mt-8">
            {visible.map((f, i) => {
              const open = current?.question === f.question;
              const isStart = showStartHere && f.index === 0;
              return (
                <div
                  key={f.question}
                  className={
                    "border-b border-secondary/10 rounded-[12px] transition-colors motion-reduce:transition-none " +
                    (open ? "bg-primary-container/40 ring-1 ring-secondary/10 mt-3 first:mt-0 px-4" : "px-0")
                  }
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => select(i)}
                    className="flex w-full items-baseline gap-3 py-4 text-left min-h-[44px]"
                  >
                    <span
                      aria-hidden="true"
                      className={
                        "font-display-hero text-[13px] w-6 shrink-0 " +
                        (open ? "text-primary-fixed" : "text-on-surface-variant")
                      }
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      {isStart && (
                        <span className="mb-1 inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-primary-fixed">
                          Start here
                        </span>
                      )}
                      <span className="block font-body-md text-body-md font-semibold text-on-surface leading-snug">
                        {f.question}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={
                        "shrink-0 text-[20px] leading-none transition-transform duration-300 motion-reduce:transition-none " +
                        (open ? "rotate-45 text-primary-fixed" : "text-on-surface-variant")
                      }
                    >
                      +
                    </span>
                  </button>
                  <div
                    style={{ maxHeight: open ? "1200px" : "0px" }}
                    className="overflow-hidden transition-[max-height] duration-300 ease-in-out motion-reduce:transition-none"
                  >
                    <div className="pb-5 pr-2 max-w-[62ch]">
                      <StructuredAnswer index={f.index} answer={f.answer} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
