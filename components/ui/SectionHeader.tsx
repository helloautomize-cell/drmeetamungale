import React from "react";

// tone="dark" renders the header for navy/contrast bands (white title,
// tinted subtitle, red eyebrow kept — AA on #0b1c30). Default unchanged.
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
}) {
  const dark = tone === "dark";
  return (
    <div className={(align === "center" ? "text-center max-w-3xl mx-auto " : "text-left max-w-2xl ") + "mb-8"}>
      {eyebrow && <span className={"font-label-sm text-label-sm uppercase tracking-widest font-semibold " + (dark ? "text-[#ff8080]" : "text-primary")}>{eyebrow}</span>}
      <h2 className={"font-headline-lg text-headline-lg font-bold mt-1 " + (dark ? "text-white" : "text-on-surface")}>{title}</h2>
      {subtitle && <p className={"font-body-md text-body-md mt-2 " + (dark ? "text-white/70" : "text-on-surface-variant")}>{subtitle}</p>}
    </div>
  );
}
