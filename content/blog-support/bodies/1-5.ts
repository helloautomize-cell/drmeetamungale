import type { BlogBlock } from "@/content/blog-bodies";

// Article 1.5 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "A phaco incision measures about 2 to 3 mm. An MSICS tunnel is usually in the range of 5 to 7 mm and is cut into the sclera, the white of the eye. MSICS needs no ultrasound at all. Both techniques are well established, and your surgeon picks the one that is safer for your eye after examining it." },
      ],
    },
    { type: "para", text: "Phacoemulsification (phaco) and manual small incision cataract surgery (MSICS) are two ways of doing the same job. Each removes the cloudy lens and puts an artificial intraocular lens (IOL) in its place. The difference lies in how the cataract is taken out. Phaco breaks it up with ultrasound and suctions it out through a tiny opening, while MSICS lifts it out whole through a somewhat wider tunnel." },
    { type: "heading", text: "What Happens in Phaco Surgery?" },
    { type: "para", text: "Phaco is the technique most patients have heard of, and it is the one most people mean when they ask for \"small incision\" or \"stitchless\" surgery. A fine probe is passed through the opening. It vibrates at ultrasound speed, softens the cataract and breaks it into fragments that are removed by suction. A foldable IOL is then slipped in through the same entry point." },
    { type: "para", text: "The wound is small enough that it frequently closes without a stitch, which is one reason vision often settles quickly. How quickly still varies from one person to the next." },
    { type: "heading", text: "What Happens in MSICS?" },
    { type: "para", text: "MSICS reaches the same end by hand. The surgeon fashions a self-sealing tunnel in the sclera, loosens the hard centre of the lens (the nucleus) and guides it out in one piece. Because there is no ultrasound, the machine does none of the work, and the surgeon's technique does all of it." },
    { type: "para", text: "The tunnel is bigger than a phaco incision, yet it is built to seal itself, so stitches are often avoidable here too. The name says \"small incision\" because the wound is a fraction of what older cataract operations required." },
    { type: "heading", text: "How Do the Two Compare at a Glance?" },
    {
      type: "table",
      text: "",
      head: ["", "Phaco", "MSICS"],
      rows: [
        ["Incision", "About 2 to 3 mm", "Often around 5 to 7 mm"],
        ["How the lens leaves", "Broken up, then suctioned", "Delivered whole by hand"],
        ["Ultrasound energy", "Used", "Not used"],
        ["Usual setting", "Routine cataracts, specialty lens plans", "Very dense cataracts, selected eyes"],
      ],
    },
    { type: "heading", text: "Why Would a Surgeon Choose MSICS Over Phaco?" },
    { type: "para", text: "Mostly for dense cataracts. A very hard, brownish cataract takes more ultrasound energy to dismantle, and that energy can strain the endothelium, the thin inner layer of the cornea that keeps it clear. If the cornea is already thin on reserves, avoiding ultrasound can be the gentler path." },
    { type: "para", text: "That said, a dense cataract does not automatically rule out phaco. Skilled phaco surgeons adjust their method for hard lenses regularly. Density starts the discussion rather than ending it." },
    { type: "heading", text: "What Does the Surgeon Look at Before Deciding?" },
    { type: "para", text: "The decision is built from the examination. Cataract density comes first, followed by the state of the cornea (sometimes confirmed with an endothelial cell count), how widely the pupil dilates, and whether the fibres holding the lens are strong. Other conditions such as glaucoma, or surgery you have had before, can shift the plan." },
    { type: "para", text: "Your choice of IOL also feeds in. Toric lenses for astigmatism, along with multifocal and EDOF lenses, are generally planned around phaco because they depend on precise, predictable wound behaviour." },
    { type: "para", text: "At [Mungale Eye Hospital](/contact-us/), cataract surgery is offered as phacoemulsification with IOL replacement. The technique for each eye is confirmed after assessment by [Dr. Sachin Mungale and Dr. Meeta Mungale](/doctors/)." },
    { type: "heading", text: "Can the Plan Change During Surgery?" },
    { type: "para", text: "Occasionally. If the eye reveals something unexpected, a surgeon may enlarge the incision or change method to protect it. This is ordinary surgical judgement, and it is worth asking your surgeon to explain it beforehand so there are no surprises on the day." },
    { type: "heading", text: "What Should You Ask Your Surgeon?" },
    { type: "para", text: "Start with which technique they recommend for your eye and what led them there. Ask how dense your cataract is and whether your cornea is healthy enough for the plan. If you are hoping for a toric or multifocal lens, check that your technique allows it. Finally, ask what recovery will look like and what the estimate includes, including cashless support if you are using insurance." },
    { type: "para", text: "After any cataract operation, contact the hospital without delay if vision suddenly drops, pain builds, or the eye becomes increasingly red." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Phaco uses ultrasound and a very small incision. MSICS uses a larger self-sealing tunnel and no ultrasound." },
    { type: "item", text: "Both finish with an IOL placed inside the eye." },
    { type: "item", text: "MSICS is sometimes favoured for very dense cataracts. Phaco is the usual route for routine cases and for specialty lenses." },
    { type: "item", text: "Neither technique is the best one for everybody, and your examination decides." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Most people reading about this are really asking whether their eye, or a parent's eye, will be in safe hands. The technique matters, but the quality of the assessment behind it matters just as much. Ask for the reasoning in plain words and expect a clear answer. This article offers general information and does not replace an in-person examination by a qualified ophthalmologist. For the wider picture, from symptoms to lens options and recovery, read our [complete guide to cataract surgery](/blog/cataract-surgery-guide/)." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Which is better, phaco or MSICS?",
        a: [
          { type: "para", text: "Neither is better across the board. Phaco is the usual choice for routine cataracts and for specialty lenses, thanks to its smaller incision. MSICS can suit very dense cataracts or delicate corneas. Your surgeon weighs the examination findings and recommends whichever is safer for your eye." },
        ],
      },
      {
        q: "Does MSICS need stitches?",
        a: [
          { type: "para", text: "Often it does not. The tunnel is designed to seal itself, so many MSICS operations end without a stitch. Some eyes still benefit from one, and the surgeon decides that during the procedure. It is a fair question to raise before the day of surgery." },
        ],
      },
      {
        q: "Is recovery faster after phaco?",
        a: [
          { type: "para", text: "The smaller incision in phaco often lets vision settle sooner, though healing is personal. After either technique you will use prescribed eye drops, avoid rubbing the eye, keep water out of it for a while and return for follow-up checks. Your surgeon will give timelines suited to your eye." },
        ],
      },
      {
        q: "Can I request a particular technique?",
        a: [
          { type: "para", text: "You can share your preference, and a good surgeon will hear it out. The final choice rests on clinical findings such as cataract density, corneal health and the lens you plan to use. Asking why a technique suits you is reasonable and often reassuring." },
        ],
      },
      {
        q: "Is an artificial lens placed in both?",
        a: [
          { type: "para", text: "Yes. Both techniques remove the cloudy natural lens and place an IOL. Which IOL you receive, whether monofocal, toric, multifocal or EDOF, is a separate decision based on your eye, your daily routine and your conversation with the ophthalmologist." },
        ],
      },
      {
        q: "Will I feel pain during cataract surgery?",
        a: [
          { type: "para", text: "Anaesthesia is used, so most people feel pressure or light touch rather than pain. A gritty or watery feeling afterwards is common and usually eases. Severe pain, sudden loss of vision or spreading redness calls for a prompt call to your eye hospital." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: Cataract surgery](https://www.aao.org/eye-health/diseases/what-is-cataract-surgery)" },
    { type: "item", text: "[NEI: Cataracts](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/cataracts)" },
    { type: "item", text: "[NHS: Cataract surgery](https://www.nhs.uk/conditions/cataract-surgery/)" },
  ];
