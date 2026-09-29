import { cn } from "@/lib/utils";

// Eyebrow (§2.2): sans, 12–13px, uppercase, 0.18em tracking.
// "light" surfaces get --brand-red-strong (AA); "dark" sections get a
// lifted red tint that stays legible on ink-navy.
export function Eyebrow({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={cn(
        "text-[12.5px] font-semibold uppercase tracking-[0.18em]",
        tone === "light" ? "text-brand-red-strong" : "text-[#ff8f8f]",
        className
      )}
    >
      {children}
    </p>
  );
}
