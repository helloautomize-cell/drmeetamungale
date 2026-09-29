import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/motion";

// SectionHeading (§2.4): eyebrow + serif heading + optional lede with the
// house reveal built in. Heading uses the fluid H2 scale and Fraunces;
// consumers pass plain strings or JSX for accent spans.
export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "light",
  align = "left",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <Tag
        className={cn(
          "mt-4 font-fluid-h2 text-fluid-h2 tracking-[-0.015em] leading-[1.08]",
          dark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </Tag>
      {lede ? (
        <p
          className={cn(
            "mt-5 text-[17px] lg:text-[18px] leading-relaxed",
            dark ? "text-white/65" : "text-ink-soft",
            align === "center" && "mx-auto max-w-xl"
          )}
        >
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
