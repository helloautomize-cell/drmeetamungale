export interface Review {
  reviewerName: string;
  source: string;
  rating: number;
  language: "English" | "Marathi" | "Gujarati";
  text: string;
}

// VERBATIM Google reviews from the live site
// (archive/content/pages/about-us.md — Trustindex/Google widget, R-CONTENT blocks).
// Original language preserved exactly as published (master prompt rule 2).
// Reviewer names as published. No invented reviews.
export const reviews: Review[] = [
  {
    reviewerName: "Pankaj Makhijani",
    source: "Google (via Trustindex)",
    rating: 5,
    language: "English",
    text: "We had a great experience at Mungale Eye Hospital for my father’s surgery. The procedure was successful and handled with great care. The doctors explained everything clearly and the staff was very supportive. We are very happy with the results.",
  },
  {
    reviewerName: "Kishor Kini",
    source: "Google (via Trustindex)",
    rating: 5,
    language: "English",
    text: "Health does not allways come from medicine most of the time it comes from peace of mind , peace of heart, peace in the soul, it comes from laughter and love What a golden quote in mungle eye hospital It opened my inner eye Extremely beautiful way of handling the patient well disciplined staff and especially doctors couple both are expert opthomologist nice experience comfort moreover perfect treatment and advise shri swami samarth",
  },
  {
    reviewerName: "Priti Pandit",
    source: "Google (via Trustindex)",
    rating: 5,
    language: "Marathi",
    text: "मी माझा आत्ता चां 👁️ मोतिया ऑपरेशन साठी आले होते आणि ta संपूर्ण पण खूप छान झाले आहे आणि अमला dr. मीता मॅडम आणि त्यांच्या संपूर्ण स्टाफ खूप छान रिस्पॉन्स दिला आहे आमची खूप काळजी घेतली आहे खूप छान समजावले आहे आणि त्यांच्या सांगणं ने आम्ही दोन्ही 👁️ चे ऑपरेशन करून घेतल खूप छान झाले आहे आम्ही खूप आनंदी आहोत आम्ही dr. मीता मॅडम dr. सचिन सर आणि सर्व स्टाफ मेंबर आभारी आहोत आमही त्यांना five hun जास्त ⭐ देतोय",
  },
  {
    reviewerName: "Sjju Warrior",
    source: "Google (via Trustindex)",
    rating: 5,
    language: "Gujarati",
    text: "Hu hanifbhai lambawala. Mari mother ne ankh ni tklif hati j dr meeta madam na sahyog thi ankh ni taklif dur thai hati e pachhi me mara banne ankh ma zankhu dekhvani laklif laine ahiya avyo hato...ahiya dr meeta mungale madam e banne ankh na motiya na operation ni salah api.. Operation kravya pachhi Have mane banne ankhe dur ane najik nu vision saru chhe.. Bahu j saru dekhay chhe... Madam no khub khub aabhar... Ane ahiya no staff pn khub sari rite care kare che.. Jene ankh ni taklif hoy temne ahiya mungale hospital ni mulakat levi joiye.. Dhanyavaad",
  },
  {
    reviewerName: "Odhavji Vasoya",
    source: "Google (via Trustindex)",
    rating: 5,
    language: "Gujarati",
    text: "Dr mungale bahu saras dr chhe, glaucoma ni koi taklif hoy ene ahiya visit kri sake chhe ahiya yogya margdarshan made chhe, glaucoma mate na pts ne ahiya khas mulakat levi joiye.. Staff pn ahiya saras chhe... thank you dr Sachin mungale and team",
  },
  {
    reviewerName: "Kadia Dhruv",
    source: "Google (via Trustindex)",
    rating: 5,
    language: "English",
    text: "I am Dhruv Kadia from Dahod. I was diagnosed with Bilateral SJS and Keratoconus. I visited Munagle Eye Hospital, where Dr. Meeta examined me thoroughly and guided me step by step. Ma’am advised MMG surgery and punctal plug insertion, followed by C3R (Corneal Collagen Cross-Linking) for keratoconus. After completing the C3R procedure, she prescribed scleral lenses. Now my vision is stable, and I am very comfortable and confident. I am extremely happy with the treatment and care I received. I highly recommend Munagle Eye Hospital to anyone who needs better eye care. Thank you so much, Dr. Meeta Ma’am and the entire Munagle Eye Hospital team, for your excellent support and treatment.",
  },
];
