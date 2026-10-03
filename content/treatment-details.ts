import type { ReviewerKey } from "@/content/doctors";

export interface TreatmentDetailSection {
  heading: string;
  body: string;
}

export interface TreatmentDetail {
  slug: string;
  title: string;
  intro: string;
  sections: TreatmentDetailSection[];
  // Reviewer mapping confirmed by both doctors (Oct 2026).
  reviewedBy?: ReviewerKey | ReviewerKey[];
  reviewedOn?: string;
}

// ─── 6.3 treatment detail bodies ────────────────────────────────────────
// ALL body copy VERBATIM from archive/content/pages/<slug>.md.
// Equipment names kept exactly as published (Ellips FXO, Oertli CataRhex 3,
// ANTERION, ZEISS HFA3, SLT, YAG, GATT, Rose K…). No invented text.
export const treatmentDetails: TreatmentDetail[] = [
  {
    slug: "cataract-surgery",
    reviewedBy: ["sachin", "meeta"],
    title: "Cataract Surgery",
    intro:
      "MEH boasts of one of the advanced systems for phacoemulsification which helps remove cataract with high efficiency in matter of minutes. Additionally all types of intraocular lenses are offered at very reasonable prices.",
    sections: [
      {
        heading: "Ellips FXO",
        body: "Ellips FXO AMO Phaco Machine (Sovereign Compact System With Advanced Ellips FXO Technology): MEH boasts of one of the advanced systems for phacoemulsification which helps remove cataract with high efficiency in matter of minutes. Additionally all types of intraocular lenses are offered at very reasonable prices.",
      },
      {
        heading: "OERTLI CataRhex 3",
        body: "The Oertli CataRhex 3 is a surgical platform used for cataract and glaucoma surgery. A compact and lightweight phaco machine with an integrated compressor for anterior vitrectomy. It has a control panel with bright displays, logical button arrangement, and a pivotable display panel. The CataRhex 3 can be used for both cataract and glaucoma surgery.",
      },
    ],
  },
  {
    slug: "cornea-evaluation",
    reviewedBy: "meeta",
    title: "Cornea Evaluation",
    intro:
      "Slit lamp with brilliant LED illumination which allows simultaneous visualisation by both doctors and relatives of the patient. It is the gold standard for eye examination.",
    sections: [
      {
        heading: "LED CSO Slit Lamp With Imaging",
        body: "Slit lamp with brilliant LED illumination which allows simultaneous visualisation by both doctors and relatives of the patient. It has imaging systems that will capture photos and real time videos of the eye. It helps the Doctors to see the minutest details of the patient’s eye, which includes all the parts of the eye. It is the gold standard for eye examination.",
      },
      {
        heading: "Corneal Handy Pachymeter SP-100",
        body: "Pachymetry is a procedure to measure the corneal thickness of our eyes. This can be done in two ways: Optical and Ultrasonic of which the ultrasonic measurement is slightly more accurate. This is required in conditions of glaucoma and cornea.",
      },
      {
        heading: "IDRA",
        body: "The IDRA is a non-invasive, user-friendly ophthalmic device that analyzes tear film layers, diagnoses dry eye disease, offers automated lipid analysis, and provides 3D demonstrations with documented results and treatment options.",
      },
      {
        heading: "EM-3000 TOMEY Specular Microscope",
        body: "Specular microscopy is a photographic technique that allows you to visualize and analyze the corneal endothelium’s size, shape and population of the endothelial cells. It is useful in conditions like Fuch’s endothelial dystrophy, pseudophakic bullous keratopathy.",
      },
      {
        heading: "Rose K Contact Lens",
        body: "These are specialized contact lenses which provide excellent visual acuity in cases of Keratoconus.",
      },
      {
        heading: "Scleral Contact Lens",
        body: "Scleral contact lenses are large-diameter, gas-permeable lenses designed for individuals with keratoconus, dry eyes, Stevens-Johnson syndrome, or irregular corneas.",
      },
      {
        heading: "Anterion",
        body: "The ANTERION is an advanced, OCT-based device specifically designed for anterior segment imaging, including corneal tomography. It provides high-resolution cross-sectional images of the cornea, as well as detailed measurements of corneal thickness, curvature, and elevation. This helps in diagnosing and managing corneal diseases like keratoconus and planning procedures such as refractive surgeries. The device’s precision allows for a comprehensive evaluation of the cornea, ensuring accurate and reliable assessments.",
      },
    ],
  },
  {
    slug: "corneal-treatments",
    reviewedBy: "meeta",
    title: "Corneal Treatments",
    intro:
      "Corneal treatments address infections, injuries, or conditions through medication, surgeries, or specialized therapies.",
    sections: [
      {
        heading: "Keratoconus Treatment",
        body: "Keratoconus is a progressive eye disease where the cornea thins and bulges into a cone shape, distorting vision. Treatments for progressive keratoconus include: Corneal collagen cross-linking (C3R), Scleral and semi-scleral lenses, Corneal transplant.",
      },
      {
        heading: "Corneal Infection",
        body: "Eye infections can be caused by viruses, bacteria, or fungi. A microbiology test (scraping) helps determine whether it’s bacterial or fungal, guiding treatment.",
      },
      {
        heading: "Transplantation",
        body: "Corneal transplantation involves replacing a diseased cornea with a healthy donor cornea. Indications include infection, keratoconus, or post-surgery complications. Newer techniques allow for partial corneal replacement: Deep anterior lamellar keratoplasty (DALK) replaces anterior layers of the cornea. Descemet’s stripping endothelial keratoplasty (DSEK) replaces Descemet’s layer. Penetrating keratoplasty (PK) replaces all five layers of the cornea.",
      },
      {
        heading: "Chemical Burns",
        body: "Patients with chemical eye injuries require emergency medical care. Treatment may involve amniotic membrane transplantation, tenonplasty, or tarsorrhaphy. Further treatment could include conjunctival autografts, Simple limbal epithelial transplant (SLET), penetrating keratoplasty, keratoprosthesis for vision restoration.",
      },
      {
        heading: "Dry Eye Treatments",
        body: "Evaluation of dry eye involves assessing tear production and evaporation.",
      },
      {
        heading: "Eye Allergy Treatments",
        body: "Allergic eye symptoms can be easily identified and may contribute to vision loss if untreated.",
      },
      {
        heading: "Steven Johnson Syndrome",
        body: "A rare disorder affecting the skin and mucous membranes, often triggered by medications or infections. Treatment involves ocular lubrication and surveillance of infections. In the acute stage, amniotic membrane transplantation is performed, while in the chronic stage, mucous membrane grafts and scleral lenses are offered.",
      },
    ],
  },
  {
    slug: "glaucoma-evaluation",
    reviewedBy: "sachin",
    title: "Glaucoma Evaluation",
    intro:
      "Glaucoma evaluation measures eye pressure, optic nerve health, and visual field to detect vision loss.",
    sections: [
      {
        heading: "Tonometry",
        body: "At MEH we have tonometers as shown below, which measures the eye pressure.",
      },
      {
        heading: "Goldmanns Applanation Tonometer",
        body: "The most ideal way to measure intra-ocular pressure gives accurate readings always.",
      },
      {
        heading: "Perkins Hand Held Tonometer",
        body: "Ideal tonometer for immobile pts/old patients/pediatric pts to be examined under general anesthesia.",
      },
      {
        heading: "Tono-pen AVIA",
        body: "For scarred corneas, edematous corneas, and irregular astigmatism following keratoplasty.",
      },
      {
        heading: "Gonioscopy Lenses",
        body: "Gonioscopy is performed during the eye exam to evaluate the internal drainage system of the eye, also referred to as the anterior chamber angle. Gonioscopy lenses help us to differentiate different types of glaucomas which in turn helps us to treat glaucomas appropriately.",
      },
      {
        heading: "ZEISS Humphrey Field Analyzer 3",
        body: "The ZEISS Humphrey Field Analyzer 3 (HFA3) maps visual fields, detects early vision loss, and aids in treatment planning for conditions like glaucoma.",
      },
      {
        heading: "Fundus Camera",
        body: "Fundus photography is taking the image of the retina of the eye with a fundus camera. Fundus photography is important for diagnosing and treating various posterior segments and other ocular diseases.",
      },
      {
        heading: "iCare IC100 Tonometer",
        body: "iCare IC100 is a reliable choice for all eye care professionals. With this tonometer, you can measure the intraocular pressure of patients in a sitting or standing position.",
      },
      {
        heading: "Pachymetry",
        body: "It measures corneal thickness. Corneal thickness affects glaucoma management; hence, measurement of corneal thickness is very important.",
      },
      {
        heading: "Perimetry / Visual Field",
        body: "Peripheral vision is affected in glaucoma. Hence in the initial part of the disease the patient is unaware of this and is symptom free. Measurement of peripheral vision helps us in quantifying the disease which helps in further management of the disease. The visual field needs to be repeated at least every year.",
      },
      {
        heading: "OCT",
        body: "OCT is very useful in assessing the structural damage to the eye. It helps in identifying early glaucoma cases.",
      },
    ],
  },
  {
    slug: "glaucoma-treatments",
    reviewedBy: "sachin",
    title: "Glaucoma Treatments",
    intro:
      "Glaucoma treatments include eye drops, oral medications, laser therapy, and surgical options to lower eye pressure.",
    sections: [
      {
        heading: "SLT (Selective Laser Trabeculoplasty)",
        body: "SLT is useful for reducing intra-ocular pressure and helping patients maintain a life on minimum intraocular drops. This procedure is very safe and can be repeated. Success rate of this procedure is 90%.",
      },
      {
        heading: "YAG Laser Machine (Peripheral Iridotomy)",
        body: "We use a laser beam (the YAG laser) to make a microscopic hole in the iris (the colored part of the eye) so that the fluid in the eye flows through the hole and the eye pressure remains under control. It is a very safe and effective procedure to treat angle-closure glaucoma.",
      },
      {
        heading: "Anti Glaucoma Surgeries — Conventional & MIGS",
        body: "Trabeculectomy with MMC (Mitomycin-C): A filtration surgery to lower intraocular pressure (IOP) by creating a drainage flap. MIGS (Minimal Invasive Glaucoma Surgery): GATT (Gonioscopy-Assisted Transluminal Trabeculotomy) opens the trabecular meshwork to improve outflow of fluid. KDB (Kahook Dual Blade) excises part of the trabecular meshwork. iStent: A tiny device implanted to create a pathway for fluid drainage and lower IOP.",
      },
      {
        heading: "Anti Glaucoma Surgeries — Valves & Congenital",
        body: "Valve surgeries: AGV (Ahmed Glaucoma Valve), ACP (Ahmed ClearPath), AADI (Aurolab Aqueous Drainage Implant). Surgery for congenital glaucoma: Trabeculotomy + Trabeculectomy, Goniotomy, valve surgeries for severe cases, and GATT to enhance outflow from the anterior chamber.",
      },
    ],
  },
  {
    slug: "optical-contact-lenses",
    reviewedBy: "meeta",
    title: "Optical & Contact Lenses",
    intro:
      "Optical and contact lenses correct vision by refracting light, providing options for myopia, hyperopia, and astigmatism.",
    sections: [
      {
        heading: "Optical & Contact Lenses",
        body: "We offer our eye patients various types of spectacles and contact lenses. This includes rigid lenses, soft lenses, and cosmetic lenses to change eye color. In addition, specialty contact lenses for keratoconus which includes Rose K lenses, mini scleral lenses, and Boston scleral lenses (PROSE) are also provided. Our contact lenses are custom-fit for your eyes and vision.",
      },
      {
        heading: "GL7000 Auto Lensometer",
        body: "The GL7000 also has a full-graphic LCD monitor that displays the measured values for both eyes at once. It comes with a high-speed thermal printer to quickly print out the measured data. It has the capability to verify the prescription of your Glasses Lens as well as your hard/soft Contact Lens.",
      },
    ],
  },
];

export function getTreatmentDetail(slug: string): TreatmentDetail | undefined {
  return treatmentDetails.find((t) => t.slug === slug);
}

export function getTreatmentDetailSlugs(): string[] {
  return treatmentDetails.map((t) => t.slug);
}
