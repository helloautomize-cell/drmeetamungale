// Self-check for lib/contact-links.ts — run: npx tsx scripts/check-contact-links.ts
// Exits non-zero on any mismatch; prints a single PASS line on success.
import { telHref, waHref, e164 } from "../lib/contact-links";
import { siteConfig } from "../content/site";

let failures = 0;
function check(label: string, got: string, want: string) {
  if (got !== want) {
    failures++;
    process.stderr.write(`FAIL ${label}: got ${got} want ${want}\n`);
  }
}

check("primary tel", telHref(siteConfig.phone), "tel:+918140050055");
check("primary wa", waHref(siteConfig.whatsapp), "https://wa.me/918140050055");
check("primary wa text", waHref(siteConfig.whatsapp, "Hi there"), "https://wa.me/918140050055?text=Hi%20there");
check("landline tel (trunk 0 dropped)", telHref(siteConfig.landline), "tel:+912652430101");
check("emergency 1", telHref(siteConfig.emergencyPhone), "tel:+919723311209");
check("emergency 2", telHref(siteConfig.emergencyPhone2), "tel:+918140250055");
check("insurance desk", telHref(siteConfig.insurancePhone), "tel:+918140250055");
check("schema telephone", e164(siteConfig.phone), "+918140050055");
check("whatsapp == primary", siteConfig.whatsapp, siteConfig.phone);

if (failures === 0) process.stdout.write("contact-links self-check: PASS (9 assertions)\n");
process.exit(failures === 0 ? 0 : 1);
