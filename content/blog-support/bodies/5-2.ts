import type { BlogBlock } from "@/content/blog-bodies";

// Article 5.2 body blocks — kept in a separate module so meta-only
// consumers (post lists, related picks) never bundle article text.
export const blocks: BlogBlock[] = [
    {
      type: "callout",
      text: "Quick Answer",
      blocks: [
        { type: "para", text: "Screens do not damage the eyes directly, but long, unbroken screen use reduces blinking and dries the tear film. The 20-20-20 rule means every 20 minutes, look at something about 20 feet away for at least 20 seconds. Combined with full blinks, good lighting and proper screen position, it eases dryness and eye strain for many people." },
      ],
    },
    { type: "para", text: "There is no single number of screen hours that causes dry eyes for everyone. What matters is how long you look without breaks and how little you blink. Studies show blinking can drop sharply while focusing on a screen, which lets tears evaporate faster. Regular breaks, such as the 20-20-20 rule, help protect the eye surface." },
    { type: "heading", text: "How Do Screens Dry the Eyes?" },
    { type: "para", text: "When you concentrate on a screen, you blink less often, and many blinks are incomplete. The lids do not fully spread tears across the eye. Air conditioning and fans then speed up evaporation. Over hours, the surface becomes dry and irritated." },
    { type: "para", text: "Screens are also usually viewed with eyes wide open and looking straight ahead or up, which exposes more of the eye surface." },
    { type: "heading", text: "What Symptoms Should You Notice?" },
    { type: "item", text: "Burning, stinging or gritty eyes" },
    { type: "item", text: "Blurry vision that clears with blinking" },
    { type: "item", text: "Tired eyes by the end of the day" },
    { type: "item", text: "Headache around the brow" },
    { type: "item", text: "Watering or redness" },
    { type: "item", text: "Difficulty focusing after screen work" },
    { type: "para", text: "These symptoms together are often called digital eye strain." },
    { type: "heading", text: "What Is the 20-20-20 Rule?" },
    { type: "para", text: "It is a simple break habit:" },
    { type: "item", text: "Every 20 minutes," },
    { type: "item", text: "look at something about 20 feet away," },
    { type: "item", text: "for at least 20 seconds." },
    { type: "para", text: "Looking far away relaxes the focusing muscles. Pausing also reminds you to blink fully. Setting a timer or app reminder helps build the habit." },
    { type: "heading", text: "Other Desk Habits That Help" },
    { type: "h3", text: "Blink fully" },
    { type: "para", text: "Close your eyes gently and completely a few times every few minutes. Half blinks do not spread tears well." },
    { type: "h3", text: "Set the screen right" },
    { type: "para", text: "Keep the screen about an arm's length away and slightly below eye level. A lower gaze exposes less of the eye surface." },
    { type: "h3", text: "Manage the air" },
    { type: "para", text: "Avoid AC vents or fans blowing on your face. A desk humidifier can help in dry seasons." },
    { type: "h3", text: "Use proper lighting" },
    { type: "para", text: "Reduce glare from windows and overhead lights. Match screen brightness to the room." },
    { type: "h3", text: "Use lubricating drops if advised" },
    { type: "para", text: "Preservative-free drops can help during long workdays. Ask your eye doctor which type suits you." },
    { type: "heading", text: "Does Blue Light Cause Dry Eye?" },
    { type: "para", text: "Current evidence does not show that blue light from screens causes [dry eye](/blog/dry-eye-disease-causes-symptoms-treatment/) or eye damage. Reduced blinking and long focus are the main problems. Blue light glasses are optional and not a substitute for breaks." },
    { type: "heading", text: "Key Takeaways" },
    { type: "item", text: "There is no universal safe screen-time limit." },
    { type: "item", text: "Less blinking is the main cause of screen-related dryness." },
    { type: "item", text: "Follow the 20-20-20 rule through the day." },
    { type: "item", text: "Position screens slightly below eye level." },
    { type: "item", text: "Persistent symptoms deserve an eye check." },
    { type: "heading", text: "Final Thoughts" },
    { type: "para", text: "Screens are part of daily life for work and study, so the goal is smarter use, not avoidance. Small habits repeated every day can make a big difference to eye comfort. If dryness continues despite these steps, you can consult [Dr. Meeta Mungale](/doctors/meeta-mungale/), an ophthalmologist at [Mungale Eye Hospital](/contact-us/) in Vadodara." },
    {
      type: "faq",
      text: "Frequently Asked Questions",
      items: [
      {
        q: "How many hours of screen time is safe for the eyes?",
        a: [
          { type: "para", text: "There is no fixed safe limit that applies to everyone. Comfort depends on breaks, blinking, lighting and existing eye health. Taking regular breaks and following the 20-20-20 rule matters more than a specific number of hours." },
        ],
      },
      {
        q: "Does the 20-20-20 rule really work?",
        a: [
          { type: "para", text: "It helps many people by relaxing focusing muscles and reminding them to blink. It works best alongside good screen position, proper lighting and enough hydration. If symptoms persist, an eye check can find other causes." },
        ],
      },
      {
        q: "Are blue light glasses needed for screen use?",
        a: [
          { type: "para", text: "They are not required. Research has not shown blue light from screens causes dry eye. Some people like how they feel, but regular breaks and full blinking are more important for comfort." },
        ],
      },
      {
        q: "Can children get dry eyes from screens?",
        a: [
          { type: "para", text: "Yes. Children also blink less while gaming or studying on devices. Limit continuous screen time, encourage outdoor play, and get an eye check if they complain of tired, red or itchy eyes." },
        ],
      },
      {
        q: "Can screen use cause permanent eye damage?",
        a: [
          { type: "para", text: "Screens do not usually cause permanent damage. They mainly cause temporary strain and dryness. However, long near work in children is linked with myopia progression, so outdoor time and breaks are important." },
        ],
      },
      {
        q: "Should I use eye drops while working on a computer?",
        a: [
          { type: "para", text: "Lubricating drops can help if your eyes feel dry during long screen sessions. Choose preservative-free drops if you need them often. Ask your eye doctor to suggest the right type for you." },
        ],
      },
      ],
    },
    { type: "heading", text: "Sources and further reading" },
    { type: "item", text: "[NEI: Dry eye](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/dry-eye)" },
    { type: "item", text: "[NHS: Dry eyes](https://www.nhs.uk/conditions/dry-eyes/)" },
  ];
