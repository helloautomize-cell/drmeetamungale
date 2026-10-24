// The single experience figure everywhere on the site. Hospital
// established 2007 — the doctors' combined track record reads
// "Over 19 years" until a deliberate update.
// Update to "Over 20 years" in 2027. Not auto-computed on purpose,
// because "over" claims should be changed deliberately.
export const EXPERIENCE_CLAIM = "Over 19 years";
export const ESTABLISHED_YEAR = 2007;

export const siteConfig = {
  name: "Mungale Eye Hospital",
  shortName: "Mungale Eye Hospital", // full name — never abbreviate in visible copy
  tagline: "Specialist eye hospital in Kothi, Vadodara",
  url: "https://mungaleeyehospital.com",
  address: "2nd Floor, Vinraj Plaza, opp. Government Press, Kothi Road, Anandpura, Vadodara, Gujarat 390001",
  // Contact numbers per owner decision.
  // Primary = appointments. Landline = reception. Emergency numbers are
  // for emergencies only. Display strings only — every tel:/wa.me href is
  // built by lib/contact-links.ts (drops the trunk 0 after +91).
  // TODO(doctor): confirm emergency hours — the site must not claim 24h.
  // TODO(doctor): confirm role of 8140250055 — it serves both as an
  // emergency number (emergencyPhone2) and as the insurance-desk /
  // appointment line (insurancePhone).
  phone: "+91 81400 50055", // CONFIRMED main number — printed on Dr. Meeta Mungale's letterhead.
  landline: "+91 0265 2430101",
  emergencyPhone: "+91 97233 11209",
  emergencyPhone2: "+91 81402 50055",
  whatsapp: "+91 81400 50055",
  insurancePhone: "+91 81402 50055",
  email: "mungaleeyehospital@gmail.com",
  hours: { weekdays: "Mon - Sat", time: "09:00 AM - 08:00 PM", sunday: "Closed" },
  social: {
    facebook: "https://www.facebook.com/eyehospitalvadodara/",
    instagram: "https://www.instagram.com/mungaleeyehospital/",
    youtube: "https://www.youtube.com/@mungaleeyehospital",
  },
  doctors: [
    { name: "Dr. Sachin Mungale", title: "MBBS, MS (Ophthalmology) · Fellowship in Glaucoma, L V Prasad Eye Institute, Hyderabad", slug: "sachin-mungale" },
    { name: "Dr. Meeta Mungale", title: "MBBS, MS (Ophthalmology), DNB · Fellowship in Cornea & Anterior Segment, L V Prasad Eye Institute, Hyderabad", slug: "meeta-mungale" },
  ],
  treatments: [
    { title: "Cornea Evaluation", slug: "cornea-evaluation" },
    { title: "Corneal Treatments", slug: "corneal-treatments" },
    { title: "Glaucoma Evaluation", slug: "glaucoma-evaluation" },
    { title: "Glaucoma Treatments", slug: "glaucoma-treatments" },
    { title: "Cataract Surgery", slug: "cataract-surgery" },
    { title: "Optical & Contact Lenses", slug: "optical-contact-lenses" },
  ],
  stats: {
    yearsVerified: 19, // Established 24th June, 2007 — "Over 19 years" is the single approved figure (see EXPERIENCE_CLAIM).
    yearsClaim: "Over 19 years", // Single source: EXPERIENCE_CLAIM. Update deliberately in 2027.
    // NOTE: patient/surgery counts are NOT rendered anywhere on the site —
    // unverified claims stay out of view until the client confirms exact
    // figures (seo-audit issue CLAIM-021). Homepage chips now show only
    // verified numbers (19+ years, 500+ corneal transplants, 2 specialists).
    patientsClaim: "40,000+",
    patientsVerifiedNote: "NOT VERIFIED — needs client confirmation; do not render until confirmed",
    surgeriesClaim: "15,000+",
    surgeriesVerifiedNote: "NOT VERIFIED — needs client confirmation; do not render until confirmed",
  },
  navTree: [
    { label: "About", href: "/about-us/", subItems: [] },
    { label: "Doctors", href: "/doctors/", subItems: [] },
    { label: "Treatments", href: "/treatments/", subItems: [
      { label: "Cornea Evaluation", href: "/treatments/cornea-evaluation/" },
      { label: "Corneal Treatments", href: "/treatments/corneal-treatments/" },
      { label: "Glaucoma Evaluation", href: "/treatments/glaucoma-evaluation/" },
      { label: "Glaucoma Treatments", href: "/treatments/glaucoma-treatments/" },
      { label: "Cataract Surgery", href: "/treatments/cataract-surgery/" },
      { label: "Optical & Contact Lenses", href: "/treatments/optical-contact-lenses/" },
    ]},
    { label: "Insurance", href: "/insurance-cashless/", subItems: [] },
    { label: "Resources", href: "#", subItems: [
      { label: "Blog", href: "/blog/" },
      { label: "FAQs", href: "/faqs/" },
      { label: "Gallery", href: "/gallery/" },
    ]},
    { label: "Book an Appointment", href: "/contact-us/#book", subItems: [] },
  ],
};
