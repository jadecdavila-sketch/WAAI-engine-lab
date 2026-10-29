/* Counterpoint Foundations: Counterpoint's own Product North Star, the worked example in Module 2.
   Woven on 2026-10-28 from the plugin's Discovery North Star (north-star.md) and Jade's Movement draft.
   Larkin's North Star (NS_EXAMPLE, in data.js) stays as the source of the Journey's gate exercises. */
const NS_COUNTERPOINT = {
  project: "Counterpoint",
  source: "discovery",
  note: "Woven from the plugin's Discovery North Star and the Lab's Movement draft. Orange marks what is still proposed.",
  who: "A founder who is expert in one field but not in software. She builds with Claude Code on her own computer, often alone, often late, on a tight usage budget. She knows what she wants to make. She does not know the questions a product team would ask, and she cannot read the code to check what the AI wrote.\n\nMore and more, she is one of the women from all over the world who want to join the Lab: Ghana, Morocco, all over the US. Women in countries where financial independence is still just a dream. Women in this country who are tired of making 82 cents on the dollar and never having had a president of their own gender. Women being laid off in droves as AI takes the jobs women held. She comes with an idea that is not a toy: a product that could make money, and that fixes something she has lived through, whether that is the maternal health system, a child's education, or the year a spouse died and the money made no sense.\n\nSometimes she is not alone. She is a small WAAI pod of two to four volunteers building something for the community, where one member can probably read code and the rest cannot. This document is written for the solo founder. If it works for her, it works for the pod.",
  thesis: "AI writes code fast, but it builds whatever you describe, gaps and all. Counterpoint fills the gaps first, with the seven circles of Discovery, a council of nine expert voices plus one seat for the product's own user, and a Foundation of plain files that every agent builds from. Then it keeps the build honest by making the docs change with the code.\n\nThe point is not the plugin. The point is that a woman who came to the Lab with an idea leaves with a real, durable product that works for the people it is for and pays the woman who built it. This is a Movement with a capital M. Counterpoint is how we teach these women to turn ideas into products that create wealth and abundance for themselves and their families. It is not a magic button. Building is still the slow, satisfying craft of polishing the dorodango. Counterpoint makes sure every pass makes it cleaner, and that someone is holding the other end.",
  principles: [
    { title: "Nothing lands without a yes", body: "The AI drafts, the builder decides, and a voice's approval never counts as hers.", test: "Is there anything here marked decided that she did not confirm herself?", by: "Discovery", status: "accepted" },
    { title: "Her words are never lost", body: "What she typed is quoted back exactly, marked as hers, and never polished without asking.", test: "Can she find her own sentence, unchanged, in what came back?", by: "Discovery", status: "accepted" },
    { title: "Plain speech, every time", body: "On the page and from every voice. When a voice is guessing, it says so.", test: "Could a tired founder read this once, at 11pm, and know what happened and what to do next?", by: "Discovery", status: "accepted" },
    { title: "Money wins", body: "Who pays, how much, and what she signed are design decisions. And nothing spends her money or her usage without her consent.", test: "Can she say today who pays and how they find it, and did anything run that she did not ask for?", by: "Discovery", status: "accepted" },
    { title: "She is the builder, and she stays the builder", body: "Counterpoint never makes her learn git, the terminal, or code to get her work done, and it leaves her more capable than it found her.", test: "After this, can she explain what was made and why, in her own words, to an investor or the next woman?", by: "the Lab", status: "proposed" },
    { title: "Durable beats impressive", body: "A prototype is a sketch she is allowed to throw away. A build holds at scale, is secure, and gets every check without fail.", test: "Would this still be standing in a year, with her as the only maintainer, and did every security check actually run?", by: "the Lab", status: "proposed" },
    { title: "Her hours are the scarce resource", body: "She has a job, a family, a business, or all three. Three to five hours a week has to be enough.", test: "Does this fit in the week she actually has, or the week we wish she had?", by: "the Lab", status: "proposed" }
  ],
  pairs: [
    { generic: "Learn to code with AI.", specific: "You finished Discovery, and you can explain your product in your own words.", note: "The promise" },
    { generic: "Here is your generated codebase.", specific: "An agent starting a build session reads one short page and knows what to do.", note: "The handoff" },
    { generic: "Invite your team.", specific: "A volunteer who joins the pod midway catches up by reading the Foundation.", note: "The pod" },
    { generic: "Deployment successful.", specific: "The docs match the code today. Every flow you changed came back to your map.", note: "The build" },
    { generic: "Great job!", specific: "Your Council met Tuesday. The Merchant wants to know who pays.", note: "The review" },
    { generic: "Congratulations on completing the course.", specific: "Your code is CP-XXXX. Session two is where you write your own North Star.", note: "This course" }
  ],
  antipatterns: [
    { text: "Marking something as decided that she never confirmed.", from: "Discovery" },
    { text: "Losing what she typed, or polishing it without asking.", from: "Discovery" },
    { text: "Drowning her in nine opinions on everything. Each voice gets one sharp line, then back to the point.", from: "Discovery" },
    { text: "Sounding confident when guessing.", from: "Discovery" },
    { text: "Making her learn git, the terminal, or code to get her work done.", from: "Discovery" },
    { text: "Spending her usage or her money on work she did not ask for.", from: "Discovery" },
    { text: "Docs that quietly drift from the code. A flow changed in prototyping that never makes it back upstream.", from: "Discovery" },
    { text: "A prototype that quietly becomes the real product. A build that drifts from what she decided. A build session where a security check or review gets skipped.", from: "Discovery" },
    { text: "Anything that makes her a spectator: lectures with no exercise, demos she cannot repeat, AI that does the work while she watches.", from: "the Lab, proposed" },
    { text: "Hero hours. A process that only works for women with no job and no children is not a process for her.", from: "the Lab, proposed" },
    { text: "Competition where there should be a showcase. Gates are held, not won.", from: "the Lab, proposed" }
  ],
  test: [
    "Did she say yes to this, in her own words, or did something decide for her?",
    "Does it leave her more capable, or more dependent?",
    "Would it survive a year with her as the only one maintaining it, with every check run?",
    "Who pays for it, and did anyone spend her money or her hours without asking?"
  ],
  felt: "The quiet of a well-kept notebook on a linen desk: warm, unhurried, a little crafted. Like sitting at a round table with people who want your thing to succeed, and leaving with fewer, sharper questions instead of more noise. In the build, she feels held.",
  sme: {
    name: "The Builder",
    seat: "Lived experience",
    speaks: "First person, present tense, from the middle of a week with a job in it. She does not use product words.",
    carries: "An idea she has carried for years, the fear that she is not technical enough, a tight usage budget, and the arithmetic of a paycheck that was never equal.",
    asks: "Did I actually say yes to that? Can I do this myself after you leave? Will it pay me? How many hours is this really?",
    limits: "She speaks only from the who section above. Outside it she says she does not know, and asks the Witness to go find out from real members.",
    quotes: [
      "I have been told I am not technical my whole life. I have run a business on a phone.",
      "I rebuilt the same screen four times at midnight. Nobody told me the question I was supposed to ask first."
    ]
  },
  critique: {
    artisan: {
      read: "The who is the best writing in the file. The thesis has two voices in it, and only one of them is hers.",
      concerns: [
        { section: "thesis", text: "\"A Movement with a capital M\" and \"polishing the dorodango\" are the Lab's words, not hers. Beautiful in the talk. In the thesis they sound like the room describing itself. Keep the dorodango where it earns its place, in the felt quality, and let the thesis stay in what it does for her." },
        { section: "who", text: "Ghana, Morocco, Ohio is specific and alive. \"Expert in one field but not in software\" is a category. Which field? Pick one woman and let the others recognize themselves in her." }
      ],
      ask: "Cut the thesis to the sentences she would say back to you."
    },
    witness: {
      read: "She cannot read the code to check what the AI wrote. That one line is the whole product, and the document is not yet sure it can keep it.",
      concerns: [
        { section: "who", text: "The pod paragraph says one member can probably read code. The solo founder has nobody. Every principle about checks and reviews is tested against her, not the pod, and the document should say out loud whether the build is safe for her today or only in the long game." },
        { section: "thesis", text: "\"Pays the woman who built it\" is a claim about an outcome the Lab cannot yet show. Has any member been paid by a product built this way? If not, the thesis is a hope, and hopes should say so." }
      ],
      ask: "Add one sentence from a real member about the moment she could not check the AI's work."
    },
    merchant: {
      read: "There are two money principles wearing one coat, and they want different things.",
      concerns: [
        { section: "thesis", text: "\"Pays the woman who built it\" is the business. \"Money wins, nothing spends her usage without consent\" is a guardrail. One is about her revenue, the other about her costs. Fold them together and the Council will argue about the wrong one. Split them." },
        { section: "who", text: "A tight usage budget is named, and nothing says who pays for Counterpoint itself. The Lab? The member? WAAI? That default decides whether the plugin is a gift, a membership, or a product, and the landing page cannot be written until it is picked." }
      ],
      ask: "State in one line who pays for Counterpoint, by default."
    }
  }
};
