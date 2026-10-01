// ─── Treatment Atlas data model (/treatments/) ─────────────────────────────
// SOURCE OF TRUTH: live WordPress child pages, read via WPVibe/REST Sep 2026
// (/treatments/cornea-evaluation/, corneal-treatments/, glaucoma-evaluation/,
// glaucoma-treatments/, cataract-surgery/, optical-contact-lenses/).
//
// CONTENT RULES (medical site):
// - `details[].body` is VERBATIM source text (HTML entities decoded only).
//   One fix: source heading "Visual Felid" [sic] → "Visual Field" (typo).
// - `summary` + `topics` are DRAFT-COPY condensations of source facts —
//   owner sign-off required before treating them as published claims.
//   See docs/CONTENT_GAPS.md.
// - Source superlatives ("gold standard", "very safe", "90% success rate")
//   stay inside detail bodies only — never as badges or summaries.
// - Images are the actual live media-library files, mirrored locally under
//   /images/treatments/. Alts describe what is visibly verifiable.

export type AtlasCategory =
  | "Diagnosis"
  | "Treatment & Surgery"
  | "Vision Correction";

export interface AtlasImage {
  src: string;
  alt: string;
  caption: string;
}

export interface AtlasDetail {
  title: string;
  body: string;
}

export interface AtlasTreatment {
  id: string;
  slug: string;
  category: AtlasCategory;
  title: string;
  /** DRAFT-COPY: condensation of source facts, needs owner sign-off. */
  summary: string;
  /** DRAFT-COPY: short labels drawn from source headings. */
  topics: string[];
  heroImage: AtlasImage;
  gallery: AtlasImage[];
  details: AtlasDetail[];
  fullLabel: string;
}

export const atlasCategories: { id: AtlasCategory; blurb: string }[] = [
  { id: "Diagnosis", blurb: "Finding out exactly what the eye needs" },
  { id: "Treatment & Surgery", blurb: "Lasers, medication and surgery" },
  { id: "Vision Correction", blurb: "Spectacles and contact lenses" },
];

export const atlasTreatments: AtlasTreatment[] = [
  {
    id: "01",
    slug: "cornea-evaluation",
    category: "Diagnosis",
    title: "Cornea Evaluation",
    summary:
      "Seven specialist instruments map the cornea in depth — its shape, thickness, tear film and cell health — before any treatment is planned.",
    topics: [
      "Slit-lamp imaging",
      "Pachymetry",
      "Dry-eye analysis (IDRA)",
      "Specular microscopy",
      "Specialty lenses",
      "ANTERION tomography",
    ],
    heroImage: {
      src: "/images/treatments/c2.jpg",
      alt: "Tomey SP-100 handy pachymeter used to measure corneal thickness",
      caption: "Handy pachymeter — corneal thickness measurement",
    },
    gallery: [
      {
        src: "/images/treatments/c3.jpg",
        alt: "LED CSO slit lamp with imaging, showing an eye on the monitor",
        caption: "Slit lamp with imaging",
      },
      {
        src: "/images/treatments/c2.jpg",
        alt: "Tomey SP-100 handy pachymeter used to measure corneal thickness",
        caption: "Handy pachymeter",
      },
      {
        src: "/images/treatments/c1.png",
        alt: "Cornea evaluation equipment at Mungale Eye Hospital",
        caption: "Cornea evaluation",
      },
      {
        src: "/images/treatments/c6.jpg",
        alt: "Cornea evaluation equipment at Mungale Eye Hospital",
        caption: "Cornea evaluation",
      },
      {
        src: "/images/treatments/c7.jpg",
        alt: "Rose K keratoconus lens information graphic",
        caption: "Rose K lens",
      },
      {
        src: "/images/treatments/c5.jpg",
        alt: "Cornea evaluation equipment at Mungale Eye Hospital",
        caption: "Cornea evaluation",
      },
      {
        src: "/images/treatments/c4.jpg",
        alt: "Cornea evaluation equipment at Mungale Eye Hospital",
        caption: "Cornea evaluation",
      },
    ],
    details: [
      {
        title: "LED CSO Slit Lamp With Imaging",
        body: "Slit lamp with brilliant LED illumination which allows simultaneous visualisation by both doctors and relatives of the patient. It has imaging systems that will capture photos and real time videos of the eye. It helps the Doctors to see the minutest details of the patient\u2019s eye, which includes all the parts of the eye. It is the gold standard for eye examination.",
      },
      {
        title: "Corneal Handy Pachymeter SP-100",
        body: "Pachymetry is a procedure to measure the corneal thickness of our eyes. This can be done in two ways: Optical and Ultrasonic of which the ultrasonic measurement is slightly more accurate. This is required in conditions of glaucoma and cornea.",
      },
      {
        title: "IDRA",
        body: "The IDRA is a non-invasive, user-friendly ophthalmic device that analyzes tear film layers, diagnoses dry eye disease, offers automated lipid analysis, and provides 3D demonstrations with documented results and treatment options.",
      },
      {
        title: "EM-3000 TOMEY Specular Microscope",
        body: "Specular microscopy is a photographic technique that allows you to visualize and analyze the corneal endothelium\u2019s size, shape and population of the endothelial cells. It is useful in conditions like Fuch\u2019s endothelial dystrophy, pseudophakic bullous keratopathy.",
      },
      {
        title: "Rose K Contact Lens",
        body: "These are specialized contact lenses which provide excellent visual acuity in cases of Keratoconus.",
      },
      {
        title: "Scleral Contact Lens",
        body: "Scleral contact lenses are large-diameter, gas-permeable lenses designed for individuals with keratoconus, dry eyes, Stevens-Johnson syndrome, or irregular corneas.",
      },
      {
        title: "Anterion",
        body: "The ANTERION is an advanced, OCT-based device specifically designed for anterior segment imaging, including corneal tomography. It provides high-resolution cross-sectional images of the cornea, as well as detailed measurements of corneal thickness, curvature, and elevation. This helps in diagnosing and managing corneal diseases like keratoconus and planning procedures such as refractive surgeries. The device\u2019s precision allows for a comprehensive evaluation of the cornea, ensuring accurate and reliable assessments.",
      },
    ],
    fullLabel: "View full Cornea Evaluation",
  },
  {
    id: "02",
    slug: "glaucoma-evaluation",
    category: "Diagnosis",
    title: "Glaucoma Evaluation",
    summary:
      "Eye pressure, drainage angles, visual fields and optic-nerve imaging combine into one complete glaucoma work-up.",
    topics: [
      "Tonometry",
      "Gonioscopy",
      "Visual-field analysis",
      "Fundus photography",
      "Pachymetry",
      "OCT",
    ],
    heroImage: {
      src: "/images/treatments/g1.jpg",
      alt: "Handheld fundus camera displaying a retinal image",
      caption: "Fundus imaging — the retina, photographed",
    },
    gallery: [
      {
        src: "/images/treatments/g6.jpg",
        alt: "Slit-lamp examination at Mungale Eye Hospital",
        caption: "Slit-lamp examination",
      },
      {
        src: "/images/treatments/g5.jpg",
        alt: "Handheld tonometer examination details at Mungale Eye Hospital",
        caption: "Tonometry — clinical photograph",
      },
      {
        src: "/images/treatments/g4.jpg",
        alt: "Reichert Tono-Pen AVIA handheld tonometer",
        caption: "Tono-Pen — clinical photograph",
      },
      {
        src: "/images/treatments/g3.jpg",
        alt: "Gonioscopy lens used to examine the eye's drainage angle",
        caption: "Gonioscopy lens — clinical photograph",
      },
      {
        src: "/images/treatments/g2.jpg",
        alt: "ZEISS Humphrey Field Analyzer 3 for visual-field mapping",
        caption: "Visual-field analyzer — clinical photograph",
      },
      {
        src: "/images/treatments/g1.jpg",
        alt: "Handheld fundus camera displaying a retinal image",
        caption: "Fundus imaging",
      },
      {
        src: "/images/treatments/g7.jpg",
        alt: "iCare IC100 tonometer for eye-pressure measurement",
        caption: "iCare tonometer — clinical photograph",
      },
    ],
    details: [
      {
        title: "Tonometry",
        body: "At MEH we have tonometers as shown below, which measures the eye pressure.",
      },
      {
        title: "Goldmanns Applanation Tonometer",
        body: "The most ideal way to measure intra-ocular pressure gives accurate readings always.",
      },
      {
        title: "Perkins Hand Held Tonometer",
        body: "Ideal tonometer for immobile pts/old patients/pediatric pts to be examined under general anesthesia.",
      },
      {
        title: "Tono-pen AVIA",
        body: "For scarred corneas, edematous corneas, and irregular astigmatism following keratoplasty.",
      },
      {
        title: "Gonioscopy Lenses",
        body: "Gonioscopy is performed during the eye exam to evaluate the internal drainage system of the eye, also referred to as the anterior chamber angle. Gonioscopy lenses help us to differentiate different types of glaucomas which in turn helps us to treat glaucomas appropriately.",
      },
      {
        title: "ZEISS Humphrey Field Analyzer 3",
        body: "The ZEISS Humphrey Field Analyzer 3 (HFA3) maps visual fields, detects early vision loss, and aids in treatment planning for conditions like glaucoma.",
      },
      {
        title: "Fundus Camera",
        body: "Fundus photography is taking the image of the retina of the eye with a fundus camera. Fundus photography is important for diagnosing and treating various posterior segments and other ocular diseases. The illumination and reflectance of the retina occur through the common optical path, i.e., the pupil.",
      },
      {
        title: "iCare IC100 Tonometer",
        body: "iCare IC100 is a reliable choice for all eye care professionals. With this tonometer, you can measure the intraocular pressure of patients in a sitting or standing position. Optometrists and ophthalmologists have successfully used IC100 for routine IOP measurement and glaucoma screenings, as measuring has never been more accessible \u2013 just load, align and measure.",
      },
      {
        title: "Pachymetry",
        body: "It measures corneal thickness. Corneal thickness affects glaucoma management; hence, measurement of corneal thickness is very important.",
      },
      {
        // Source heading reads "Visual Felid" [sic] — corrected here.
        title: "Perimetry / Visual Field (Humphrey\u2019s Visual Field Analyzer)",
        body: "Peripheral vision is affected in glaucoma. Hence in the initial part of the disease the patient is unaware of this and is symptom free. Measurement of peripheral vision helps us in quantifying the disease which helps in further management of the disease. The test assesses the functional damage to the eye. The visual field exam takes about half an hour. Each eye is tested separately. The visual field needs to be repeated at least every year.",
      },
      {
        title: "OCT",
        body: "OCT is very useful in assessing the structural damage to the eye. It helps in identifying early glaucoma cases.",
      },
    ],
    fullLabel: "View full Glaucoma Evaluation",
  },
  {
    id: "03",
    slug: "corneal-treatments",
    category: "Treatment & Surgery",
    title: "Corneal Treatments",
    summary:
      "Medical and surgical care for keratoconus, infection, injury and surface disease — including partial and full corneal transplantation.",
    topics: [
      "Keratoconus",
      "Corneal infection",
      "Transplantation",
      "Chemical burns",
      "Dry eye & allergy",
      "Stevens\u2013Johnson syndrome",
    ],
    heroImage: {
      src: "/images/treatments/cornea-transplant.webp",
      alt: "Corneal transplantation surgery diagram used at Mungale Eye Hospital",
      caption: "Transplantation — clinical illustration",
    },
    gallery: [
      {
        src: "/images/treatments/cornea-transplant.webp",
        alt: "Corneal transplantation surgery diagram used at Mungale Eye Hospital",
        caption: "Transplantation — clinical illustration",
      },
      {
        src: "/images/treatments/q1.jpg",
        alt: "Healthy versus keratoconus cornea illustration",
        caption: "Keratoconus — clinical illustration",
      },
      {
        src: "/images/treatments/infection.jpg",
        alt: "Corneal infection clinical photograph at Mungale Eye Hospital",
        caption: "Corneal infection — clinical photograph",
      },
      {
        src: "/images/treatments/cb2.jpg",
        alt: "Chemical burn clinical photograph at Mungale Eye Hospital",
        caption: "Chemical burns — clinical photograph",
      },
      {
        src: "/images/treatments/cb1.jpg",
        alt: "Chemical burn clinical photograph at Mungale Eye Hospital",
        caption: "Chemical burns — clinical photograph",
      },
      {
        src: "/images/treatments/de1.jpg",
        alt: "Dry eye clinical photograph at Mungale Eye Hospital",
        caption: "Dry eye — clinical photograph",
      },
      {
        src: "/images/treatments/de2.jpg",
        alt: "Dry eye clinical photograph at Mungale Eye Hospital",
        caption: "Dry eye — clinical photograph",
      },
      {
        src: "/images/treatments/de3.jpg",
        alt: "Dry eye clinical photograph at Mungale Eye Hospital",
        caption: "Dry eye — clinical photograph",
      },
      {
        src: "/images/treatments/de4.jpg",
        alt: "Dry eye clinical photograph at Mungale Eye Hospital",
        caption: "Dry eye — clinical photograph",
      },
      {
        src: "/images/treatments/de5.jpg",
        alt: "Dry eye clinical photograph at Mungale Eye Hospital",
        caption: "Dry eye — clinical photograph",
      },
      {
        src: "/images/treatments/de6.jpg",
        alt: "Dry eye clinical photograph at Mungale Eye Hospital",
        caption: "Dry eye — clinical photograph",
      },
      {
        src: "/images/treatments/allergy.jpg",
        alt: "Eye allergy clinical photograph at Mungale Eye Hospital",
        caption: "Eye allergy — clinical photograph",
      },
      {
        src: "/images/treatments/sjs2.jpg",
        alt: "Stevens-Johnson syndrome clinical photograph at Mungale Eye Hospital",
        caption: "Stevens\u2013Johnson syndrome — clinical photograph",
      },
      {
        src: "/images/treatments/sjs1.jpg",
        alt: "Stevens-Johnson syndrome clinical photograph at Mungale Eye Hospital",
        caption: "Stevens\u2013Johnson syndrome — clinical photograph",
      },
      {
        src: "/images/treatments/sjs3.jpg",
        alt: "Stevens-Johnson syndrome clinical photograph at Mungale Eye Hospital",
        caption: "Stevens\u2013Johnson syndrome — clinical photograph",
      },
    ],
    details: [
      {
        title: "Keratoconus Treatment",
        body: "Keratoconus is a progressive eye disease where the cornea thins and bulges into a cone shape, distorting vision. Treatments for progressive keratoconus include: corneal collagen cross-linking (C3R); scleral and semi-scleral lenses; corneal transplant.",
      },
      {
        title: "Corneal Infection",
        body: "Eye infections can be caused by viruses, bacteria, or fungi. A microbiology test (scraping) helps determine whether it\u2019s bacterial or fungal, guiding treatment.",
      },
      {
        title: "Transplantation",
        body: "Corneal transplantation involves replacing a diseased cornea with a healthy donor cornea. Indications include infection, keratoconus, or post-surgery complications. Newer techniques allow for partial corneal replacement: Deep anterior lamellar keratoplasty (DALK) replaces anterior layers of the cornea; Descemet\u2019s stripping endothelial keratoplasty (DSEK) replaces Descemet\u2019s layer; Penetrating keratoplasty (PK) replaces all five layers of the cornea.",
      },
      {
        title: "Chemical Burns",
        body: "Patients with chemical eye injuries require emergency medical care. Treatment may involve amniotic membrane transplantation, tenonplasty, or tarsorrhaphy. Further treatment could include conjunctival autografts, Simple limbal epithelial transplant (SLET), penetrating keratoplasty, keratoprosthesis for vision restoration.",
      },
      {
        title: "Dry Eye Treatments",
        body: "Evaluation of dry eye involves assessing tear production and evaporation.",
      },
      {
        title: "Eye Allergy Treatments",
        body: "Allergic eye symptoms can be easily identified and may contribute to vision loss if untreated.",
      },
      {
        title: "Steven Johnson Syndrome",
        body: "A rare disorder affecting the skin and mucous membranes, often triggered by medications or infections. Treatment involves ocular lubrication and surveillance of infections. In the acute stage, amniotic membrane transplantation is performed, while in the chronic stage, mucous membrane grafts and scleral lenses are offered.",
      },
    ],
    fullLabel: "View full Corneal Treatments",
  },
  {
    id: "04",
    slug: "glaucoma-treatments",
    category: "Treatment & Surgery",
    title: "Glaucoma Treatments",
    summary:
      "Laser procedures and surgery that lower eye pressure — from SLT and YAG iridotomy to micro-invasive and valve techniques.",
    topics: [
      "SLT laser",
      "YAG iridotomy",
      "Conventional surgery",
      "MIGS",
      "Valve implants",
      "Congenital glaucoma",
    ],
    heroImage: {
      src: "/images/treatments/gt1.jpg",
      alt: "YAG laser machine used for peripheral iridotomy",
      caption: "YAG laser — peripheral iridotomy",
    },
    gallery: [
      {
        src: "/images/treatments/gt1.jpg",
        alt: "YAG laser machine used for peripheral iridotomy",
        caption: "YAG laser",
      },
      {
        src: "/images/treatments/gt2.jpg",
        alt: "SLT laser workstation in the treatment room at Mungale Eye Hospital",
        caption: "Laser workstation — clinical photograph",
      },
    ],
    details: [
      {
        title: "SLT (Selective Laser Trabeculoplasty)",
        body: "SLT is useful for reducing intra-ocular pressure and helping patients maintain a life on minimum intraocular drops. This procedure is very safe and can be repeated. Success rate of this procedure is 90%.",
      },
      {
        title: "YAG Laser Machine (Peripheral Iridotomy)",
        body: "We use a laser beam (the YAG laser) to make a microscopic hole in the iris (the colored part of the eye) so that the fluid in the eye flows through the hole and the eye pressure remains under control. It is a very safe and effective procedure to treat angle-closure glaucoma.",
      },
      {
        title: "Anti Glaucoma Surgeries",
        body: "1) Conventional Surgery \u2014 Trabeculectomy with MMC (Mitomycin-C): a filtration surgery to lower intraocular pressure (IOP) by creating a drainage flap. 2) MIGS (Minimal Invasive Glaucoma Surgery) \u2014 GATT (Gonioscopy-Assisted Transluminal Trabeculotomy), where the trabecular meshwork is opened to improve outflow of fluid; KDB (Kahook Dual Blade), a surgical tool used to excise part of the trabecular meshwork; iStent, a tiny device implanted to create a pathway for fluid drainage and lower IOP. 3) Valve Surgeries \u2014 AGV (Ahmed Glaucoma Valve), a valve implanted to control IOP by regulating fluid drainage; ACP (Ahmed ClearPath), a variation of AGV with a tube designed for improved positioning; AADI (Aurolab Aqueous Drainage Implant), a cost-effective implant designed to regulate IOP. 4) Surgery for Congenital Glaucoma \u2014 Trabeculotomy + Trabeculectomy, a combined approach for more effective IOP control; Goniotomy, a surgical procedure to open the angle structures of the eye for better fluid outflow; Valve Surgeries, similar to adult procedures, designed for severe cases; GATT, also utilized for congenital cases to enhance outflow from the anterior chamber.",
      },
    ],
    fullLabel: "View full Glaucoma Treatments",
  },
  {
    id: "05",
    slug: "cataract-surgery",
    category: "Treatment & Surgery",
    title: "Cataract Surgery",
    summary:
      "Cataract removal by phacoemulsification on two specialist platforms, with intraocular lens options to suit each eye.",
    topics: [
      "Ellips FXO phaco system",
      "Oertli CataRhex 3",
      "Intraocular lenses",
    ],
    heroImage: {
      src: "/images/treatments/ct2.jpg",
      alt: "Oertli CataRhex 3 surgical platform for cataract surgery",
      caption: "Oertli CataRhex 3 — phaco platform",
    },
    gallery: [
      {
        src: "/images/treatments/ct2.jpg",
        alt: "Oertli CataRhex 3 surgical platform for cataract surgery",
        caption: "Oertli CataRhex 3",
      },
      {
        src: "/images/treatments/ct1.jpg",
        alt: "Ellips FXO phacoemulsification system information panel",
        caption: "Ellips FXO system",
      },
    ],
    details: [
      {
        title: "Ellips FXO",
        body: "Ellips FXO AMO Phaco Machine (Sovereign Compact System With Advanced Ellips FXO Technology): MEH boasts of one of the advanced systems for phacoemulsification which helps remove cataract with high efficiency in matter of minutes. Additionally all types of intraocular lenses are offered at very reasonable prices.",
      },
      {
        title: "OERTLI CataRhex 3",
        body: "The Oertli CataRhex 3 is a surgical platform used for cataract and glaucoma surgery. A compact and lightweight phaco machine with an integrated compressor for anterior vitrectomy. It has a control panel with bright displays, logical button arrangement, and a pivotable display panel. The CataRhex 3 can be used for both cataract and glaucoma surgery.",
      },
    ],
    fullLabel: "View full Cataract Surgery information",
  },
  {
    id: "06",
    slug: "optical-contact-lenses",
    category: "Vision Correction",
    title: "Optical & Contact Lenses",
    summary:
      "Spectacles and custom-fit contact lenses for everyday and complex vision needs, verified on the in-house lensometer.",
    topics: [
      "Spectacles & contact lenses",
      "Specialty keratoconus lenses",
      "Custom fitting",
      "GL7000 verification",
    ],
    heroImage: {
      src: "/images/treatments/op1.jpg",
      alt: "Spectacle frames on display at the Mungale optical",
      caption: "The Mungale optical — frames on display",
    },
    gallery: [
      {
        src: "/images/treatments/op1.jpg",
        alt: "Spectacle frames on display at the Mungale optical",
        caption: "The Mungale optical",
      },
      {
        src: "/images/treatments/op2.jpg",
        alt: "Lens verification unit at the Mungale optical",
        caption: "Lens verification",
      },
    ],
    details: [
      {
        title: "Optical & Contact Lenses",
        body: "We offer our eye patients various types of spectacles and contact lenses. This includes rigid lenses, soft lenses, and cosmetic lenses to change eye color. In addition, specialty contact lenses for keratoconus which includes Rose K lenses, mini scleral lenses, and Boston scleral lenses (PROSE) are also provided. Our contact lenses are custom-fit for your eyes and vision.",
      },
      {
        title: "GL7000 Auto Lensometer",
        body: "The GL7000 also has a full-graphic LCD monitor that displays the measured values for both eyes at once. It comes with a high-speed thermal printer to quickly print out the measured data. It has the capability to verify the prescription of your Glasses Lens as well as your hard/soft Contact Lens.",
      },
    ],
    fullLabel: "View full Optical & Contact Lenses",
  },
];

// ─── Supporting facilities (live /treatments/ hub, VERBATIM) ────────────────
export const atlasFacilities = [
  {
    title: "In-house pharmacy",
    body: "At MEH we have an in-house pharmacy, where our eye patients easily buy medicines according to their treatment. Our staff is fully trained to explain and instill medicines in your eyes.",
  },
  {
    title: "Well-equipped operation theatre",
    body: "MEH has one of the largest eye operation theatres in Baroda city. It has two OT tables and 2 LED microscopes. Eye surgeries can be performed under General anesthesia which makes us equipped to perform pediatric eye surgeries, corneal tears, and emergency cases. We also have the class B sterilizer which allows us to autoclave all hollow tubings required for eye surgeries under strict safety and quality controls. In addition, an ETO sealing machine for ethylene oxide sterilization is also available. No compromise in ensuring sterility and safety for eye surgeries!",
  },
];

export function getAtlasTreatmentSlugs(): string[] {
  return atlasTreatments.map((t) => t.slug);
}
