import { siteConfig } from "@/content/site";
import { doctors } from "@/content/doctors";
import { getTreatmentDetailSlugs, getTreatmentDetail } from "@/content/treatment-details";
import { blogPosts } from "@/content/blog";

// ─── llms.txt builder ────────────────────────────────────────────────────
// Single source for the /llms.txt and /llms-full.txt routes. Generated
// from the same content modules the site renders, so the AI-facing
// summary can never drift from the live pages.

const BASE = siteConfig.url.replace(/\/$/, "");

export function buildLlmsTxt(): string {
  const out: string[] = [];

  out.push("# " + siteConfig.name);
  out.push("");
  out.push(
    `> ${siteConfig.tagline}, Gujarat, India. Founded 2007.`
  );
  out.push(
    "> Led by ophthalmologists Dr. Sachin Mungale (MBBS, MS — Ophthalmology,"
  );
  out.push(
    "> Fellowship in Glaucoma, L V Prasad Eye Institute, Hyderabad) and"
  );
  out.push(
    "> Dr. Meeta Mungale (MBBS, MS — Ophthalmology, DNB, Fellowship in Cornea &"
  );
  out.push(
    "> Anterior Segment, L V Prasad Eye Institute, Hyderabad). Referral centre"
  );
  out.push("> for cornea and glaucoma care.");
  out.push("");

  out.push("## Contact");
  out.push("");
  out.push("- Address: " + siteConfig.address + ", India");
  out.push("- Appointments: " + siteConfig.phone);
  out.push("- Reception: " + siteConfig.landline);
  out.push("- Emergency contact numbers: " + siteConfig.emergencyPhone + " / " + siteConfig.emergencyPhone2);
  out.push("- WhatsApp: " + siteConfig.whatsapp);
  out.push("- Email: " + siteConfig.email);
  out.push(
    "- Hours: " + siteConfig.hours.weekdays.replace(" - ", "–") + " " + siteConfig.hours.time + "; Sunday " + siteConfig.hours.sunday
  );
  out.push("- Website: " + BASE);
  out.push("");

  out.push("## Doctors");
  out.push("");
  for (const d of doctors) {
    out.push(
      `- [${d.name}](${BASE}/doctors/${d.slug}/): ${d.title}. ${d.credentialShort}. ${d.registration}. ${d.experience}; ${d.description}`
    );
  }
  out.push(
    "- All medical content on this site is reviewed by the doctors. The reviewer of each page is listed in llms-full.txt."
  );
  out.push("");

  out.push("## Services");
  out.push("");
  for (const slug of getTreatmentDetailSlugs()) {
    const d = getTreatmentDetail(slug);
    if (!d) continue;
    out.push(`- [${d.title}](${BASE}/treatments/${d.slug}/): ${d.intro}`);
  }
  out.push("");

  out.push("## Key pages");
  out.push("");
  out.push(`- [Home](${BASE}/): hospital overview, specialties, doctors, reviews`);
  out.push(`- [About us](${BASE}/about-us/): the doctors and the hospital's approach`);
  out.push(`- [Our doctors](${BASE}/doctors/): profiles, credentials and verified CVs`);
  out.push(`- [Treatments](${BASE}/treatments/): cataract, cornea, glaucoma, optical services`);
  out.push(`- [Insurance & cashless](${BASE}/insurance-cashless/): cashless hospitalisation and claims support`);
  out.push(`- [FAQs](${BASE}/faqs/): common patient questions`);
  out.push(`- [Health articles](${BASE}/blog/): eye-health guidance from the doctors`);
  out.push(`- [Contact & directions](${BASE}/contact-us/): appointments, hours, location`);
  out.push("");

  out.push("## Patient guides");
  out.push("");
  const pillars = blogPosts.filter((p) => p.role === "pillar");
  const rest = blogPosts.filter((p) => p.role !== "pillar");
  for (const p of pillars) {
    out.push(`- [${p.title}](${BASE}${p.url}): ${p.excerpt}`);
  }
  for (const p of rest) {
    out.push(`- [${p.title}](${BASE}${p.url}): ${p.excerpt}`);
  }
  out.push("");

  out.push("## Legal");
  out.push("");
  out.push(`- [Privacy Policy](${BASE}/privacy-policy/)`);
  out.push(`- [Medical Disclaimer](${BASE}/medical-disclaimer/)`);
  out.push(`- [Editorial & Medical Review Policy](${BASE}/editorial-policy/)`);
  out.push(`- [Terms of Use](${BASE}/terms/)`);
  out.push("");

  out.push("Website built and marketed by Automize Media Labs (https://www.automizemedialabs.com/)");
  return out.join("\n");
}
