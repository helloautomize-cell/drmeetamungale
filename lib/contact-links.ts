// ─── Contact link builders — the ONLY place tel:/wa.me hrefs are made ──
// Every phone/WhatsApp action on the site goes through telHref()/waHref()
// so the dialled number always matches the displayed number in
// content/site.ts, including the India trunk-"0" rule.

// "+91 81400 50055" → "918140050055"
// "+91 0265 2430101" → "912652430101" (trunk 0 after +91 is dropped —
// dialling +910265… reaches nothing)
function toE164Digits(display: string): string {
  let digits = display.replace(/\D/g, "");
  if (digits.startsWith("91") && digits[2] === "0") {
    digits = "91" + digits.slice(3);
  }
  return digits;
}

// E.164 form for structured data: "+91 81400 50055" → "+918140050055"
export function e164(display: string): string {
  return "+" + toE164Digits(display);
}

export function telHref(display: string): string {
  return "tel:+" + toE164Digits(display);
}

export function waHref(display: string, text?: string): string {
  const base = "https://wa.me/" + toE164Digits(display);
  return text ? base + "?text=" + encodeURIComponent(text) : base;
}
