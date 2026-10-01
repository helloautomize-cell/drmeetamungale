// ─── Blog in-article links (Fix B) ─────────────────────────────────────────
// Live <a> runs re-attached to verbatim stored bodies WITHOUT rewriting them.
// {block} = index into the post's stored blocks array (including tables),
// {nth} = nth occurrence of {text} within that block. Renderer allow-listed
// these destinations at build time: existing local routes + external
// authority URLs. Legacy /eye-care/* and /eye-hospital/* URLs stay plain
// text (routes do not exist) — see dropped report in PROGRESS.
export interface BlogLink {
  block: number;
  nth: number;
  text: string;
  href: string;
  external: boolean;
}

export const blogLinks: Record<string, BlogLink[]> = {
  "benchmarks-in-eye-care": [
    {
      "block": 2,
      "nth": 0,
      "text": "glaucoma",
      "href": "https://my.clevelandclinic.org/health/diagnostics/eye-exam",
      "external": true
    },
    {
      "block": 11,
      "nth": 0,
      "text": "benchmark for glaucoma",
      "href": "/blog/glaucoma-treatment-options/",
      "external": false
    },
    {
      "block": 12,
      "nth": 0,
      "text": "treatment for a glaucoma",
      "href": "/treatments/glaucoma-evaluation/",
      "external": false
    },
    {
      "block": 24,
      "nth": 0,
      "text": "Mungale Eye Hospital in Vadodara",
      "href": "/contact-us/",
      "external": false
    }
  ],
  "routine-eye-examination": [
    {
      "block": 12,
      "nth": 0,
      "text": "examining",
      "href": "https://www.nei.nih.gov/index.php/learn-about-eye-health/healthy-vision/get-dilated-eye-exam",
      "external": true
    },
    {
      "block": 19,
      "nth": 0,
      "text": "booking your next appointment",
      "href": "/treatments/",
      "external": false
    }
  ],
  "disease-progression-velocity-in-eye-care": [
    {
      "block": 4,
      "nth": 0,
      "text": "Optical Coherence Tomography (OCT)",
      "href": "/treatments/glaucoma-evaluation/",
      "external": false
    },
    {
      "block": 12,
      "nth": 0,
      "text": "surgical glaucoma treatment",
      "href": "/treatments/glaucoma-treatments/",
      "external": false
    },
    {
      "block": 15,
      "nth": 0,
      "text": "glaucoma",
      "href": "https://glaucoma.org/articles/how-glaucoma-progresses-and-what-you-can-do-to-protect-your-vision",
      "external": true
    },
    {
      "block": 19,
      "nth": 0,
      "text": "Developing cataracts",
      "href": "/treatments/cataract-surgery/",
      "external": false
    }
  ],
  "corneal-treatment-recovery-process": [
    {
      "block": 10,
      "nth": 0,
      "text": "uncontrolled intraocular pressure (glaucoma)",
      "href": "/treatments/glaucoma-treatments/",
      "external": false
    },
    {
      "block": 12,
      "nth": 0,
      "text": "corneal treatment",
      "href": "https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/corneal-conditions/corneal-transplants",
      "external": true
    },
    {
      "block": 17,
      "nth": 0,
      "text": "intraocular pressure (IOP) check",
      "href": "/treatments/glaucoma-evaluation/",
      "external": false
    },
    {
      "block": 21,
      "nth": 0,
      "text": "comprehensive diagnostic topography and endothelial cell count",
      "href": "/treatments/cornea-evaluation/",
      "external": false
    }
  ],
  "how-is-glaucoma-diagnosed-evaluated": [
    {
      "block": 2,
      "nth": 0,
      "text": "comprehensive glaucoma evaluation",
      "href": "/treatments/glaucoma-evaluation/",
      "external": false
    },
    {
      "block": 4,
      "nth": 0,
      "text": "measures corneal thickness",
      "href": "/treatments/cornea-evaluation/",
      "external": false
    },
    {
      "block": 0,
      "nth": 0,
      "text": "glaucoma",
      "href": "https://medlineplus.gov/lab-tests/glaucoma-tests/",
      "external": true
    },
    {
      "block": 19,
      "nth": 0,
      "text": "baseline testing",
      "href": "/treatments/glaucoma-evaluation/",
      "external": false
    },
    {
      "block": 21,
      "nth": 0,
      "text": "surgical interventions",
      "href": "/treatments/glaucoma-treatments/",
      "external": false
    },
    {
      "block": 33,
      "nth": 0,
      "text": "immediate laser or surgical intervention",
      "href": "/treatments/",
      "external": false
    }
  ],
  "risks-benefits-of-cataract-surgery": [
    {
      "block": 7,
      "nth": 0,
      "text": "Cataracts",
      "href": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/cataracts",
      "external": true
    },
    {
      "block": 1,
      "nth": 0,
      "text": "Mungale Eye Hospital",
      "href": "/",
      "external": false
    },
    {
      "block": 34,
      "nth": 0,
      "text": "Cataract surgery",
      "href": "/",
      "external": false
    }
  ],
  "the-benefits-of-regular-eye-check-ups": [
    {
      "block": 5,
      "nth": 0,
      "text": "Regular eye check-ups",
      "href": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/age-related-macular-degeneration",
      "external": true
    },
    {
      "block": 12,
      "nth": 0,
      "text": "Mungale Eye Hospital",
      "href": "/",
      "external": false
    }
  ],
  "glaucoma-treatment-options": [
    {
      "block": 1,
      "nth": 0,
      "text": "Mungale Eye Hospital",
      "href": "/",
      "external": false
    },
    {
      "block": 5,
      "nth": 0,
      "text": "optic nerve.",
      "href": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/glaucoma",
      "external": true
    },
    {
      "block": 23,
      "nth": 0,
      "text": "cataract surgery",
      "href": "/treatments/cataract-surgery/",
      "external": false
    },
    {
      "block": 29,
      "nth": 0,
      "text": "schedule a consultation",
      "href": "/contact-us/",
      "external": false
    }
  ],
  "benefits-of-cataract-surgery": [
    {
      "block": 2,
      "nth": 0,
      "text": "cataract surgery",
      "href": "/",
      "external": false
    },
    {
      "block": 9,
      "nth": 0,
      "text": "cataracts",
      "href": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/cataracts",
      "external": true
    }
  ],
  "best-foods-for-eye-health": [
    {
      "block": 1,
      "nth": 0,
      "text": "National Eye Institute",
      "href": "https://www.nei.nih.gov/",
      "external": true
    },
    {
      "block": 3,
      "nth": 0,
      "text": "eye health",
      "href": "/",
      "external": false
    },
    {
      "block": 99,
      "nth": 0,
      "text": "Mungale Eye Hospital",
      "href": "/",
      "external": false
    }
  ],
  "ai-in-eye-care-in-2026": [
    {
      "block": 1,
      "nth": 0,
      "text": "78% of ophthalmologists",
      "href": "https://www.ophthalmologytimes.com/view/how-ai-is-reshaping-ophthalmology-in-2025-and-beyond#:~:text=The%20survey%20found%20AI%20to%20be%20the%20clear%20frontrunner%20among%20available%20technologies%2C%20cited%20by%2078%25%20of%20respondents.%20The%20next%20cited%20trend%2C%20at%20a%20distance%2011%25%2C%20was%20age%2Drelated%20macular%20degeneration/geographic%20atrophy%20treatments%20in%20the%20pipeline.",
      "external": true
    },
    {
      "block": 2,
      "nth": 0,
      "text": "AI in eye care",
      "href": "/",
      "external": false
    },
    {
      "block": 1,
      "nth": 0,
      "text": "ophthalmology",
      "href": "/",
      "external": false
    },
    {
      "block": 1,
      "nth": 0,
      "text": "eye care",
      "href": "/",
      "external": false
    }
  ],
  "new-year-eye-health-resolutions-2026": [
    {
      "block": 0,
      "nth": 0,
      "text": "eye health",
      "href": "/",
      "external": false
    },
    {
      "block": 1,
      "nth": 0,
      "text": "eye health",
      "href": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions",
      "external": true
    },
    {
      "block": 27,
      "nth": 0,
      "text": "eye health",
      "href": "/",
      "external": false
    }
  ],
  "glaucoma-awareness-month-2026": [
    {
      "block": 57,
      "nth": 0,
      "text": "Glaucoma Surgery",
      "href": "https://my.clevelandclinic.org/health/treatments/24873-glaucoma-surgery",
      "external": true
    },
    {
      "block": 53,
      "nth": 0,
      "text": "treatment",
      "href": "/treatments/glaucoma-treatments/",
      "external": false
    }
  ],
  "corneal-ulcer-treatment": [
    {
      "block": 1,
      "nth": 0,
      "text": "Ulcer Treatment",
      "href": "https://www.mayoclinic.org/",
      "external": true
    }
  ],
  "thinking-of-lasik-surgery": [
    {
      "block": 3,
      "nth": 0,
      "text": "FDA",
      "href": "https://www.fda.gov/medical-devices/contact-lenses/everyday-eye-care",
      "external": true
    },
    {
      "block": 13,
      "nth": 0,
      "text": "AAO",
      "href": "https://www.aao.org/",
      "external": true
    },
    {
      "block": 28,
      "nth": 0,
      "text": "LASIK Surgery",
      "href": "/",
      "external": false
    },
    {
      "block": 1,
      "nth": 0,
      "text": "Mungale Eye Hospita",
      "href": "/",
      "external": false
    }
  ],
  "when-should-you-see-an-eye-doctor": [
    {
      "block": 24,
      "nth": 0,
      "text": "eye specialist near you",
      "href": "/",
      "external": false
    },
    {
      "block": 26,
      "nth": 0,
      "text": "Dr. Sachin",
      "href": "https://www.practo.com/vadodara/doctor/dr-sachin-mungale-ophthalmologist",
      "external": true
    },
    {
      "block": 26,
      "nth": 0,
      "text": "Dr. Meeta",
      "href": "https://www.practo.com/vadodara/doctor/dr-meeta-mungale-ophthalmologist",
      "external": true
    }
  ],
  "best-eye-hospital-near-me": [
    {
      "block": 2,
      "nth": 0,
      "text": "Eye Hospital Near Me",
      "href": "/",
      "external": false
    },
    {
      "block": 21,
      "nth": 0,
      "text": "Mungale Eye Hospital",
      "href": "/",
      "external": false
    },
    {
      "block": 47,
      "nth": 0,
      "text": "eye specialist near me",
      "href": "https://www.justdial.com/Vadodara/Dr-Sachin-Mungale-Mungale-Eye-Hospital-Opposite-Government-Press-Kothi/0265PX265-X265-170614070649-D5F7_BZDET",
      "external": true
    },
    {
      "block": 0,
      "nth": 0,
      "text": "eye hospital near me",
      "href": "/",
      "external": false
    }
  ],
  "best-eye-hospital-for-corneal-transplant": [
    {
      "block": 4,
      "nth": 0,
      "text": "Corneal problems",
      "href": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions",
      "external": true
    },
    {
      "block": 2,
      "nth": 0,
      "text": "Eye Hospital",
      "href": "/",
      "external": false
    },
    {
      "block": 1,
      "nth": 0,
      "text": "corneal transplant",
      "href": "https://www.aao.org/eye-health/treatments/about-corneal-transplantation",
      "external": true
    }
  ],
  "cataract-surgery-vadodara-gujarat": [
    {
      "block": 0,
      "nth": 0,
      "text": "Cataract Surgery Vadodara Gujarat",
      "href": "/treatments/cataract-surgery/",
      "external": false
    },
    {
      "block": 16,
      "nth": 0,
      "text": "Cataract Surgery",
      "href": "https://www.aao.org/eye-health/diseases/what-is-cataract-surgery",
      "external": true
    },
    {
      "block": 39,
      "nth": 0,
      "text": "Cataract treatment",
      "href": "/",
      "external": false
    }
  ],
  "advanced-eye-care-treatment": [
    {
      "block": 15,
      "nth": 0,
      "text": "ophthalmology",
      "href": "https://www.sciencedirect.com/journal/ophthalmology",
      "external": true
    },
    {
      "block": 3,
      "nth": 0,
      "text": "Mungale Eye Hospital",
      "href": "/",
      "external": false
    }
  ],
  "ahmed-glaucoma-valve-surgery": [
    {
      "block": 3,
      "nth": 0,
      "text": "Mungale Eye Hospital",
      "href": "/",
      "external": false
    },
    {
      "block": 26,
      "nth": 0,
      "text": "Ahmed Glaucoma Valve Surgery",
      "href": "/",
      "external": false
    },
    {
      "block": 2,
      "nth": 0,
      "text": "Ahmed Glaucoma Valve",
      "href": "https://eyewiki.org/Ahmed_ClearPath_Glaucoma_Drainage_Device",
      "external": true
    }
  ],
  "advanced-eye-care-in-vadodara": [
    {
      "block": 1,
      "nth": 0,
      "text": "Mungale Eye Hospital",
      "href": "/",
      "external": false
    },
    {
      "block": 9,
      "nth": 0,
      "text": "sophisticated surgery",
      "href": "https://pubmed.ncbi.nlm.nih.gov/8224952/",
      "external": true
    },
    {
      "block": 36,
      "nth": 0,
      "text": "Mungale Eye Hospital",
      "href": "/",
      "external": false
    }
  ],
  "best-eye-hospital-in-vadodara": [
    {
      "block": 0,
      "nth": 0,
      "text": "Choosing an eye hospital in Vadodara",
      "href": "/",
      "external": false
    },
    {
      "block": 11,
      "nth": 0,
      "text": "Choosing an Eye Hospital in Vadodara",
      "href": "/",
      "external": false
    }
  ],
  "5-easy-eye-care-tips-for-computer-geeks": [
    {
      "block": 1,
      "nth": 0,
      "text": "Eye Care Tips",
      "href": "https://www.aao.org/eye-health/tips-prevention/tips-to-keep-perfect-vision-2020",
      "external": true
    },
    {
      "block": 3,
      "nth": 0,
      "text": "eye care",
      "href": "/",
      "external": false
    }
  ],
  "tips-for-choosing-an-eye-care-doctor": [
    {
      "block": 0,
      "nth": 0,
      "text": "right eye doctor in Vadodara",
      "href": "/",
      "external": false
    },
    {
      "block": 5,
      "nth": 0,
      "text": "eye care professionals",
      "href": "https://www.nei.nih.gov/eye-health-information/healthy-vision/finding-eye-doctor",
      "external": true
    },
    {
      "block": 0,
      "nth": 0,
      "text": "eye care",
      "href": "/",
      "external": false
    }
  ],
  "7-eye-care-tips-never-ignore": [
    {
      "block": 1,
      "nth": 0,
      "text": "7 eye care tips",
      "href": "/",
      "external": false
    },
    {
      "block": 29,
      "nth": 0,
      "text": "common eye problems",
      "href": "https://www.aao.org/eye-health/tips-prevention/eye-exams-101",
      "external": true
    }
  ]
};
