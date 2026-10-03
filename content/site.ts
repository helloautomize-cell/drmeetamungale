export const siteConfig = {
  name: "Mungale Eye Hospital",
  shortName: "MEH",
  tagline: "Specialist eye hospital in Kothi, Vadodara",
  url: "https://mungaleeyehospital.com",
  address: "2nd Floor, Vinraj Plaza, opp. Government Press, Kothi Road, Anandpura, Vadodara, Gujarat 390001",
  // Contact numbers per owner decision.
// Normal contact: +91 8140050055, +91 0265-2430101.
// Emergency: +91 8140250055, +91 9723311209. WhatsApp: +91 8140250055.
// (+91 8140050055 is CONFIRMED as the main number — it is printed on
// Dr. Meeta Mungale's letterhead.)
  phone: "+91 8140050055",
  landline: "+91 0265-2430101",
  emergencyPhone: "+91 9723311209",
  emergencyPhone2: "+91 8140250055",
  whatsapp: "+91 8140250055",
  email: "mungaleeyehospital@gmail.com",
  hours: { weekdays: "Mon - Sat", time: "09:00 AM - 08:00 PM", sunday: "Closed" },
  social: {
    facebook: "https://www.facebook.com/eyehospitalvadodara/",
    instagram: "https://www.instagram.com/mungaleeyehospital/",
    youtube: "https://www.youtube.com/@mungaleeyehospital",
  },
  doctors: [
    { name: "Dr. Sachin Mungale", title: "MS (Ophthalmology) · Glaucoma Fellowship, LVPEI", slug: "sachin-mungale" },
    { name: "Dr. Meeta Mungale", title: "MS (Ophthalmology), DNB · Cornea Fellowship, LVPEI", slug: "meeta-mungale" },
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
    yearsVerified: 20, // VERIFIED: source content and homepage confirm "established on 24th June, 2007" and "20+ Years Expertise"
    yearsClaim: "20+", // As shown on site: "20+ Years Expertise"
    patientsClaim: "40,000+", // CLAIMED ON WEBSITE (homepage stat chip / reference design) — must verify exact database/MCP count before final build. Currently unverified; HTML JS counter shows "0" only as dynamic placeholder.
    patientsVerifiedNote: "NOT VERIFIED — needs user confirmation or exact source data retrieval",
    surgeriesClaim: "15,000+", // CLAIMED ON WEBSITE (homepage stat chip / reference design) — must verify exact database/MCP count before final build.
    surgeriesVerifiedNote: "NOT VERIFIED — needs user confirmation or exact source data retrieval",
  },
  navTree: [
    { label: "About Us", href: "/about-us/", subItems: [] },
    { label: "Our Doctors", href: "/doctors/", subItems: [] },
    { label: "Treatments", href: "/treatments/", subItems: [
      { label: "Cornea Evaluation", href: "/treatments/cornea-evaluation/" },
      { label: "Corneal Treatments", href: "/treatments/corneal-treatments/" },
      { label: "Glaucoma Evaluation", href: "/treatments/glaucoma-evaluation/" },
      { label: "Glaucoma Treatments", href: "/treatments/glaucoma-treatments/" },
      { label: "Cataract Surgery", href: "/treatments/cataract-surgery/" },
      { label: "Optical & Contact Lenses", href: "/treatments/optical-contact-lenses/" },
    ]},
    { label: "Insurance & Cashless", href: "/insurance-cashless/", subItems: [] },
    { label: "Resources", href: "#", subItems: [
      { label: "Blog", href: "/blog/" },
      { label: "FAQs", href: "/faqs/" },
      { label: "Gallery", href: "/gallery/" },
    ]},
    { label: "Book an Appointment", href: "/contact-us/", subItems: [] },
  ],
};
