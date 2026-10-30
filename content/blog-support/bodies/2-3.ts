import type { BlogBlock } from "@/content/blog-bodies";

// Article 2.3 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Most people with open-angle glaucoma start with eye drops. Laser may be offered early, or later if drops aren't enough or are difficult to keep up with. Surgery usually comes into the conversation when pressure stays high, or the nerve keeps changing, despite the other two. The decision is made after a full eye examination, never from a diagnosis label alone." },
      ],
    },
    { type: "para", text: "There isn't one best treatment for glaucoma. Your ophthalmologist chooses between eye drops, laser and surgery by looking at the type of glaucoma you have, how much damage the optic nerve has already taken, and how far your eye pressure sits from a safe level for you. Whichever route is chosen, the goal is the same. Bring down intraocular pressure (the pressure of fluid inside the eye) and give the nerve the best chance of staying as healthy as it is today." },
    { type: "heading", text: "What Does the Doctor Actually Weigh?" },
    { type: "para", text: "Two patients can both be told they have glaucoma and still be treated quite differently. The type matters first, because open-angle and angle-closure glaucoma behave differently and respond to different treatment. Then comes the stage. OCT scans (which image the optic nerve) and visual field tests (which map your side vision) show how much has been affected." },
    { type: "para", text: "From there, the doctor sets a target pressure for you. Someone with early changes may do well with a modest drop in pressure. Someone with advanced damage usually needs to go lower. Age, other medicines, a cataract that's starting to form and your ability to attend regular reviews all enter the decision as well." },
    { type: "heading", text: "Why Do Most People Begin With Eye Drops?" },
    { type: "para", text: "Because they work, they're reversible and they need no procedure. Some drops slow the eye's fluid production, others help the fluid drain. If one doesn't suit you, it can be swapped for another." },
    { type: "para", text: "The catch is daily habit. Glaucoma rarely hurts, so it's easy to skip an evening dose and feel exactly the same the next morning. Pressure, however, can drift up without any sign. Drops can also sting, redden the eye or make eyelashes grow longer, and the cost adds up month after month. If any of this is getting in the way, say so at your visit. A treatment that looks like it's failing is sometimes just one that isn't being used as written." },
    { type: "heading", text: "When Does Laser Make Sense?" },
    { type: "para", text: "Laser is often a good fit when someone finds drops hard to manage, or when drops alone aren't enough. Selective laser trabeculoplasty (SLT) helps the eye's drainage channels work better in open-angle glaucoma. Laser peripheral iridotomy makes a tiny opening in the iris (the coloured part of the eye) for people with narrow drainage angles." },
    { type: "para", text: "Both are done in the clinic under numbing drops, and most people go home the same day. Some patients end up needing fewer drops afterwards. The benefit can wear off over the years, though, and plenty of people continue with medication alongside it." },
    { type: "heading", text: "When Is Surgery Discussed?" },
    { type: "para", text: "Usually when drops and laser haven't brought the pressure to target, or repeat scans show the nerve is still changing. In more advanced glaucoma, the conversation can happen sooner." },
    { type: "para", text: "The options include MIGS (minimally invasive glaucoma surgery), trabeculectomy, drainage implants and GATT. Which one is suggested depends on your glaucoma type and the anatomy of your eye. Most are done under local anaesthesia, so you're awake and comfortable. The risks are real and worth discussing openly, including a temporary pressure spike, inflammation, infection, or pressure that still needs further treatment. What surgery can't do is restore vision that's already been lost. Its job is to protect what remains." },
    { type: "heading", text: "How Do They Compare Side by Side?" },
    {
      type: "table",
      text: "",
      head: ["", "Eye drops", "Laser", "Surgery"],
      rows: [
        ["Usually considered", "Often the first step", "Early on, or when drops are hard to manage", "When pressure or nerve damage isn't controlled"],
        ["Where it happens", "At home, every day", "In the clinic, same day", "Operating theatre, local anaesthesia"],
        ["Main drawback", "Needs a steady daily habit", "Effect may fade", "Procedure-specific risks"],
      ],
    },
    { type: "heading", text: "Will the Plan Change Over Time?" },
    { type: "para", text: "It often does, and that's expected. Glaucoma is monitored for life, and each visit's pressure reading, OCT and visual field results tell your doctor whether the current approach is holding. Moving from drops to laser, or from laser to surgery, simply follows what the tests show. It isn't a verdict on anything you did or didn't do." },
    { type: "heading", text: "When to Seek Urgent Care" },
    { type: "para", text: "Sudden severe eye pain, a hard red eye, headache, nausea, halos around lights or abrupt blurring can point to acute angle-closure glaucoma. Please get emergency eye care straight away instead of waiting for a routine appointment." },
    { type: "para", text: "This article is general information and doesn't replace an in-person examination by a qualified ophthalmologist." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "Drops, laser and surgery are different routes to the same goal, protecting the optic nerve." },
    { type: "item", text: "Drops usually come first, laser can sit alongside or ahead of them, and surgery is for cases the other two don't control." },
    { type: "item", text: "The type of glaucoma, the stage of damage and your own target pressure shape the choice." },
    { type: "item", text: "Test results, not the calendar, decide when the plan changes." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Choosing a [glaucoma](/blog/glaucoma-symptoms-causes-treatment/) treatment is less about which option is stronger and more about which one suits your eye right now. That can change, and changing it is a normal part of keeping glaucoma in check. At [Mungale Eye Hospital](/contact-us/) in Vadodara, [Dr. Sachin Mungale and Dr. Meeta Mungale](/doctors/) can examine your eyes and take you through what makes sense for you. If you've recently been diagnosed, or you're not sure your current plan is working, a glaucoma consultation is a good next step." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "Does everyone with glaucoma start with eye drops?",
        a: [
          { type: "para", text: "Not everyone. Drops are the usual first step for many people with open-angle glaucoma, but some are offered laser first, and angle-closure glaucoma often needs laser early. Your glaucoma type, eye pressure, optic nerve findings and ability to use drops daily all shape that choice." },
        ],
      },
      {
        q: "Can laser treatment replace glaucoma eye drops?",
        a: [
          { type: "para", text: "Sometimes it reduces how many drops are needed, and occasionally it removes the need for them. For many people, though, drops continue, and the effect of laser can wear off with time. Your doctor will recheck your pressure after the procedure and adjust the plan as needed." },
        ],
      },
      {
        q: "Is glaucoma surgery always a last resort?",
        a: [
          { type: "para", text: "No. It's usually considered after drops and laser, but in advanced disease, or when other treatments aren't suitable, it may be raised earlier. The timing depends on your test results and how your optic nerve is responding." },
        ],
      },
      {
        q: "How will I know my glaucoma treatment is working?",
        a: [
          { type: "para", text: "Your doctor compares repeat pressure readings with your target and follows the optic nerve through OCT scans and visual field tests. Stable results suggest the plan is holding. Changes may lead to a different drop, a laser session or a discussion about surgery." },
        ],
      },
      {
        q: "Will glaucoma surgery bring my vision back?",
        a: [
          { type: "para", text: "No. Surgery aims to lower pressure and slow or stop further damage. Vision already lost to nerve damage generally can't be recovered, which is why regular check-ups and steady treatment matter so much." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[AAO: What is glaucoma?](https://www.aao.org/eye-health/diseases/what-is-glaucoma)" },
    { type: "item", text: "[NEI: Glaucoma](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/glaucoma)" },
  ];
