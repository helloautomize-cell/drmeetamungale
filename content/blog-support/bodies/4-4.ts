import type { BlogBlock } from "@/content/blog-bodies";

// Article 4.4 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "The warning signs of corneal graft rejection are remembered by RSVP: Redness, Sensitivity to light, Vision decrease and Pain. If any of these appear, contact your eye surgeon the same day. Treatment usually involves intensive steroid eye drops and sometimes additional medicines. Early treatment greatly improves the chance of saving the graft." },
      ],
    },
    { type: "para", text: "Corneal graft rejection happens when the body's immune system recognises donor corneal tissue as foreign and attacks it. It can occur weeks, months or even years after a transplant. The good news is that many rejection episodes can be reversed when treated promptly." },
    { type: "heading", text: "Why Does Rejection Happen?" },
    { type: "para", text: "The immune system normally protects the body from foreign tissue. The cornea has some natural protection because it lacks blood vessels, but rejection can still occur. Rejection of the endothelium, the inner layer, is most serious because these cells are essential for keeping the cornea clear." },
    { type: "heading", text: "What Are the Warning Signs?" },
    { type: "item", text: "Redness of the eye that is new or increasing" },
    { type: "item", text: "Sensitivity to light" },
    { type: "item", text: "Vision that becomes blurred or cloudy" },
    { type: "item", text: "Pain or discomfort" },
    { type: "para", text: "Some people notice only one sign, so any change should be reported." },
    { type: "heading", text: "Who Is at Higher Risk?" },
    { type: "item", text: "Full-thickness PK transplants compared with DALK or DMEK" },
    { type: "item", text: "Previous graft rejection or failure" },
    { type: "item", text: "Blood vessels growing into the cornea" },
    { type: "item", text: "Inflammation or infection in the eye" },
    { type: "item", text: "Large graft size" },
    { type: "item", text: "Stopping steroid drops too early or missing doses" },
    { type: "item", text: "Loose or broken stitches" },
    { type: "heading", text: "How Is Rejection Diagnosed?" },
    { type: "para", text: "Your eye surgeon examines the graft with a slit lamp, looking for inflammation, rejection lines, keratic precipitates and corneal swelling. Corneal thickness measurements may help." },
    { type: "heading", text: "How Is Rejection Treated?" },
    { type: "item", text: "Frequent steroid eye drops, sometimes every hour at first" },
    { type: "item", text: "Steroid ointment at night" },
    { type: "item", text: "Sometimes oral or injected steroids for severe cases" },
    { type: "item", text: "Treatment of any loose stitches or infection" },
    { type: "item", text: "Close follow-up until the episode settles" },
    { type: "heading", text: "What Happens If the Graft Fails?" },
    { type: "para", text: "If rejection cannot be reversed and the graft becomes permanently cloudy, a repeat transplant may be considered after inflammation settles." },
    { type: "heading", text: "How Can You Lower the Risk?" },
    { type: "item", text: "Use eye drops exactly as prescribed and do not stop them on your own" },
    { type: "item", text: "Attend all follow-up appointments" },
    { type: "item", text: "Protect the eye from injury" },
    { type: "item", text: "Report any RSVP signs immediately" },
    { type: "item", text: "Tell other doctors that you have a corneal transplant" },
    { type: "item", text: "Treat eye infections and inflammation promptly" },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Rejection can occur at any time after a transplant." },
    { type: "item", text: "RSVP signs mean urgent assessment." },
    { type: "item", text: "Early treatment often reverses rejection." },
    { type: "item", text: "Steroid drops are the main treatment and prevention." },
    { type: "item", text: "Lamellar transplants carry lower rejection risk than PK." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Knowing the warning signs and acting quickly can save a corneal graft. Keep your drops, appointments and emergency contacts close at hand. [Dr. Meeta Mungale](/doctors/meeta-mungale/) and the team at [Mungale Eye Hospital](/contact-us/) in Vadodara provide long-term care for [corneal transplant](/blog/corneal-transplant-surgery/) patients." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "What are the signs of corneal transplant rejection?",
        a: [
          { type: "para", text: "The main signs are redness, sensitivity to light, decreased vision and pain, remembered as RSVP. Any of these should prompt same-day contact with your eye surgeon." },
        ],
      },
      {
        q: "Can corneal graft rejection be reversed?",
        a: [
          { type: "para", text: "Yes, many rejection episodes can be reversed if treated early with intensive steroid drops and close monitoring. Delayed treatment increases the risk of graft failure." },
        ],
      },
      {
        q: "How long after a corneal transplant can rejection happen?",
        a: [
          { type: "para", text: "Rejection can happen at any time, from weeks to many years after surgery, though risk is highest in the first year or two." },
        ],
      },
      {
        q: "Which corneal transplant has the lowest rejection risk?",
        a: [
          { type: "para", text: "Lamellar procedures such as DMEK and DALK generally have lower rejection risk than full-thickness PK." },
        ],
      },
      {
        q: "What should I do if I miss my steroid drops?",
        a: [
          { type: "para", text: "Restart as soon as you remember and follow your surgeon's schedule. Missing drops can increase rejection risk. Contact your surgeon if you have missed several doses." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: About corneal transplantation](https://www.aao.org/eye-health/treatments/about-corneal-transplantation)" },
    { type: "item", text: "[NHS: Cornea transplant](https://www.nhs.uk/conditions/cornea-transplant/)" },
  ];
