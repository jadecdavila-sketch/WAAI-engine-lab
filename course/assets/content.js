/* Counterpoint Foundations: exercise content. Counterpoint's North Star is in north-star.js; Larkin's (NS_EXAMPLE) is in data.js. */
const CONTENT = {

  /* North Star: read it like the Council does. Judged against Counterpoint's own North Star (north-star.js). */
  drift: {
    title: "Read it like the Council does",
    intro: "Seven proposed Counterpoint features. For each one, decide whether the North Star above allows it, refuses it, or does not actually say. The third answer matters as much as the other two.",
    options: ["Allowed", "Refused", "The North Star does not say"],
    items: [
      { name: "Quiet yes", desc: "If she has not responded to a voice's draft in 24 hours, the page marks it decided so the build can keep moving.", answer: 1, why: "The first principle, nothing lands without a yes, and the first anti pattern name this exactly. Silence is not a yes. The test: is anything marked decided that she did not confirm herself?" },
      { name: "Tidy up", desc: "The page rewrites her note for clarity before a voice reads it, so the voices get a cleaner brief.", answer: 1, why: "Her words are never lost. What she typed is quoted back exactly, marked as hers, and never polished without asking. A cleaner brief is not worth a sentence she can no longer find." },
      { name: "One page to start", desc: "Every build session opens with a single short page that says what the product is and what to do next.", answer: 0, why: "This is the second contrast pair, word for word: an agent starting a build session reads one short page and knows what to do. It is what good looks like." },
      { name: "Overnight build", desc: "While she sleeps, an agent keeps building from her flows and uses her usage budget to save her time in the morning.", answer: 1, why: "Money wins: nothing spends her money or her usage without her consent. The sixth anti pattern says it plainly. Saving her time with her money, unasked, is the thing refused." },
      { name: "Pod approver", desc: "A pod can name the member who reads code as the one who approves builds on the founder's behalf.", answer: 2, why: "The who says a pod probably has one member who can read code, and the principle says a voice's approval never counts as hers. It says nothing about another human approving for her. Two reasonable people will answer differently, which is the signal to write the principle." },
      { name: "One sharp line", desc: "Each voice is limited to one line of edge per reading, then back to the point.", answer: 0, why: "The third anti pattern refuses nine opinions on everything and says in the same breath that each voice gets one sharp line. This is the allowed shape of a voice's personality." },
      { name: "Revenue page", desc: "A dashboard inside Counterpoint that shows her what her product earned this month.", answer: 2, why: "The thesis says the product should pay her, and the Builder asks will it pay me. But the North Star never says Counterpoint tracks her revenue, and the Merchant's open ask is about who pays for Counterpoint itself. A gap, not a refusal." }
    ],
    close: "When the North Star gives two readers two answers, it has a gap. The catalog's check for a North Star draft is this exact test: two people pick a real decision and the North Star gives both of them the same answer."
  },

  /* North Star: the worksheet */
  sheet: {
    minutes: 15,
    seeds: [
      { name: "Volunteer matching", who: "A WAAI member who wants to give two hours a month and has no idea where they would be useful.", hint: "Luma, the channels, and a spreadsheet exist today. What would seeing her look like?" },
      { name: "Hub lead's month", who: "A hub lead planning next month's events for her city while running her own business.", hint: "She is the host, the marketer, and the one who answers the DMs." },
      { name: "The Lab's problem board", who: "A Lab member picking her first project on a Tuesday night with forty minutes to spare.", hint: "The board is for her, and for the leadership team that keeps it honest." }
    ]
  },

  /* Council: whose voice is this */
  whose: {
    title: "Whose voice is this?",
    intro: "Twelve lines from a Council review of Larkin, a product for mothers of young children built by a Lab member. You will read its North Star in the next module. Pick the voice that said each line. By the end you will hear the lenses before you can name them, and you will see which ones you hear easily.",
    items: [
      { line: "So it is Sunday night, the school portal changed its login page, and Larkin has quietly stopped reading anything. Who finds out first, her or us?", voice: "responder" },
      { line: "Have you watched her at pickup, phone in one hand, trying to read this? Where does she squint? Where does she give up?", voice: "witness" },
      { line: "The riskiest assumption is that she will trust Larkin to file things without checking. Have we watched anyone actually not check?", voice: "questioner" },
      { line: "It parses every email and never drops one. Now, does it feel like anything? When she opens it, does she feel seen, or managed?", voice: "architect" },
      { line: "Tests, a pipeline, a hook that keeps the docs honest. It feels like overhead until the day it saves you, and it will.", voice: "groundskeeper" },
      { line: "If every family's data lives in one bucket, what happens when the first school district asks what we hold? What door are we closing by storing it this way?", voice: "longgame" },
      { line: "Every word on this screen could belong to any app. 'Three emails processed.' Where is the choice in it? If I screenshotted this, could anyone tell it was hers?", voice: "artisan" },
      { line: "Put the model on the filing, where it earns trust. Keep it off the tone of the Friday note, where it spends trust.", voice: "medium" },
      { line: "Who pays, her or the household? That one default decides pricing, sharing, and what we say on the landing page.", voice: "merchant" },
      { line: "The rollback was never tested and the error message lied. We are not pessimists. We have just been here before.", voice: "responder" },
      { line: "Gut feeling is fine for starting. Show me the data that says she opened the Friday note.", voice: "questioner" },
      { line: "A product nobody can find is a hobby. How does a mother at pickup even hear that Larkin exists?", voice: "merchant" }
    ],
    close: "The voices you missed are usually the lens you do not bring by default. That is worth knowing about yourself before you name your primary Council in the intake."
  },

  /* Council: a five question check on each voice, asked at the bottom of its page.
     Options are shuffled at render time; the first option is the correct one. */
  voiceQuiz: {
  architect: [
    { q: "A teammate demos a new sign up flow and says, \"It works, every field saves.\" What does the Empath say next?",
      a: ["Works is the floor, not the ceiling. How does it feel to use, and where will someone get stuck?", "Ship it. Function is what matters at MVP.", "Run a load test before anyone looks at it.", "Add a delightful animation to make it feel finished."],
      why: "For the Empath, \"it works\" is never the end of the conversation. Delight is a layer on top of function, never a replacement, and the real question is how it feels and where people stall." },
    { q: "An API endpoint has no login because it is \"internal, nobody will find it.\" Which Guardian principle does this break?",
      a: ["Security through obscurity is not security.", "Performance must be measured, not assumed.", "Consistency matters more than any particular style.", "Delight is a layer on top of function."],
      why: "In the Guardian's war story, an \"internal\" endpoint was found in six hours with basic enumeration. Hiding something is not the same as protecting it." },
    { q: "The product feels fast on the team's laptops. What would the Impatient One want first?",
      a: ["Measure it, on a slow device and at ten times the load, against a performance budget.", "Trust the team's sense of speed.", "Add more features, then optimize later.", "Remove the loading spinner."],
      why: "\"It feels fast to me\" means nothing. In the JavaScript Wall story, developers never noticed 12 second white screens because they only tested on fast machines." },
    { q: "A small change, adding one field to a report, is quoted at three weeks because nobody can trace what it touches. Which voice inside the Architect owns this problem?",
      a: ["The Craftsperson, because good architecture makes change easy and bad architecture makes it terrifying.", "The Guardian, because it is a security risk.", "The Empath, because the report is hard to read.", "The Impatient One, because the report loads slowly."],
      why: "This is the Craftsperson's Three Week Simple Change. Code quality shows up as the cost of change, and technical debt is never free." },
    { q: "The Empath wants a rich, animated interface and the Impatient One wants it to load instantly. What does the Architect do with that?",
      a: ["Holds the tension and records it. The best products come from holding these tensions, not picking a winner.", "Lets the more senior voice decide.", "Picks speed, because performance always wins.", "Picks richness, because emotion always wins."],
      why: "The Architect asks for bones and soul. Its four members disagree on purpose, and the Council's job is to hear all of them rather than flatten the disagreement." }
  ],
  responder: [
    { q: "A teammate says, \"That service probably won't go down.\" How does the Pessimist answer?",
      a: ["Hope is not a strategy. Assume it will fail, and design what happens when it does.", "Agree, and move on to the next feature.", "Ask for a faster server.", "Add a generic \"Something went wrong\" message just in case."],
      why: "The Pessimist designs for the disaster path. Not \"might fail.\" Will fail. \"That probably won't happen\" is not resilience planning." },
    { q: "A 30 second hiccup in one small service became a four hour outage across the product. What does the Pessimist call the real problem?",
      a: ["The blast radius. One part failing is inevitable; the failure cascading was a design choice.", "The service should never have hiccupped.", "Users should have retried more.", "The error message was unclear."],
      why: "This is the Cascade war story. The Pessimist cares more about how far a failure spreads than about the failure itself." },
    { q: "The login service is down, and the screen tells users \"Your password is incorrect.\" What happens, and whose problem is it?",
      a: ["Users try other passwords and lock themselves out. It is the Diplomat's problem: the error lied.", "Nothing serious. It is the Sentinel's problem only.", "Users wait patiently. It is a performance problem.", "It is fine, because the logs show the real cause."],
      why: "The Error That Lied. The Diplomat believes every error is a conversation: tell people what happened, what it means, and what to do next." },
    { q: "The servers report 99.9% uptime, but one in twenty logins fails. What would the Sentinel say?",
      a: ["We are measuring the wrong thing. Uptime is measured from the user's side.", "99.9% is excellent. Nothing to do.", "Add more servers.", "Log the login failures at a lower level so they stop showing up."],
      why: "The 99.9% That Wasn't. Your servers being up does not mean users can reach you. Availability is a promise kept to people, not to dashboards." },
    { q: "A release has a bug and the team reaches for the rollback for the first time ever. Which question should have been asked weeks earlier?",
      a: ["Has the rollback ever been tested?", "Is the release notes page up to date?", "Did the design team approve the colors?", "Is the bug a user error?"],
      why: "In the Untested Rollback story, a five minute blip became a four hour outage because the rollback failed. \"Test your failures before they test you.\"" }
  ],
  witness: [
    { q: "A sign up form looks clean, but its inputs have no labels a screen reader can announce. What does the Includer say?",
      a: ["We have decided who matters. A blind user cannot complete this, and that is a design failure, not an edge case.", "Fix it after launch, since few users use screen readers.", "It passes visually, so it passes.", "Add a tooltip that explains each field."],
      why: "The Includer treats accessibility as a characteristic of good design. In The Form That Couldn't Be Completed, missing labels locked people out and a lawsuit followed." },
    { q: "New users land on empty charts and blank tables with no next step. Which member owns this, and what do they want?",
      a: ["The Host, who wants a guided empty state, sample data, and a short path to first value.", "The Librarian, who wants a longer help article.", "The Advocate, who wants a support ticket form.", "The Includer, who wants higher color contrast."],
      why: "The Host greets users at the door. Time to value is everything, and an empty state that offers nothing is a door with no one behind it." },
    { q: "Help docs still describe a setting that was removed two versions ago. What is the Librarian's rule?",
      a: ["Keep it current or kill it. Wrong documentation is worse than none.", "Any documentation is better than none.", "Add a note that some pages may be out of date.", "Move the page deeper so fewer people see it."],
      why: "The Lie That Lived for Years. Out of date docs send people down dead ends and fill the support queue." },
    { q: "Support has closed forty separate tickets about a \"random\" glitch. What does the Advocate see?",
      a: ["A pattern. One weird issue is a ticket, ten is a bug, a hundred is a design flaw.", "Forty unrelated user mistakes.", "Proof that support is working well.", "A reason to hire more support staff."],
      why: "The Advocate looks for patterns rather than incidents. In The Pattern Nobody Saw, connecting the dots on one bug took months." },
    { q: "What does the Witness ask you to do before launch?",
      a: ["Watch one person who has never seen the product try to use it, without helping, and note where they hesitate.", "Send a survey to the waitlist.", "Run a launch day load test.", "Have the team use it for a week."],
      why: "The Witness watches more than it talks. Where someone squints, hesitates, or reaches for a button that is not there is your priority. Then ask who cannot use it at all." }
  ],
  questioner: [
    { q: "The team celebrates a million sign ups. What does the Pattern Finder ask first?",
      a: ["How many came back after day one? Sign ups alone may be a vanity metric.", "Can we get two million?", "Which color was the sign up button?", "Nothing. A million is a clear win."],
      why: "In the Vanity Metric Trap, millions signed up and only 5% returned. Measure what matters, not what is easy." },
    { q: "Every dashboard is green, yet a nightly background job has quietly not run for three days. Which member's lesson is this?",
      a: ["The Night Watch: you cannot fix what you cannot see, so watch whether the job ran, not just whether errors appeared.", "The Listener: ask users how they feel about the job.", "The Pattern Finder: run an A/B test on the job.", "The Accountant: the job was too expensive anyway."],
      why: "The Silent Failure. No errors, it just did not execute. Monitoring has to watch from the outcome's side, not only for crashes." },
    { q: "An alert fires every few hours for small, harmless blips. What is the danger?",
      a: ["People learn to ignore it, so when a real problem fires, it gets dismissed too.", "It costs too much to send alerts.", "There is no danger. More alerts mean more safety.", "Users will see the alerts."],
      why: "The Alert That Cried Wolf. Alerts should be actionable, and alert fatigue is real. Prune what nobody acts on." },
    { q: "A loud group of users keeps requesting the same feature. What does the Listener want to know before anyone builds it?",
      a: ["What problem they are really trying to solve, and how representative this group is.", "How fast it can ship.", "Whether competitors already have it.", "Nothing. Loud demand is enough evidence."],
      why: "In The Feature Everyone Requested, the vocal group was unrepresentative and almost nobody used what was built. Listen to struggles, not feature requests." },
    { q: "Users ask for \"more customization.\" What did the Listener find was really going on in the war story?",
      a: ["The defaults made them look generic. Better defaults fixed it without more options.", "They wanted a settings page with fifty toggles.", "They were confused by the menu.", "They wanted a dark mode."],
      why: "The Emotion Behind the Request. People are experts in their problems, not in solutions, so the Listener hears what they mean." }
  ],
  groundskeeper: [
    { q: "A developer says, \"I tested it, it works.\" What does the Skeptic ask?",
      a: ["How? Where is the test, and will it catch a regression?", "Great, ship it.", "Did you test it on your phone too?", "Who else saw it work?"],
      why: "The Skeptic trusts proof over promises. Automated tests are institutional memory: they remember every bug you have fixed." },
    { q: "The test suite is green, but the product is broken. In the Skeptic's war story, what went wrong?",
      a: ["The tests checked mocks of mocks, not real behavior working together.", "There were too many tests.", "The tests ran too slowly.", "Nobody read the test names."],
      why: "The Test That Lied. Test behavior, not implementation, and favor integration tests, which prove the pieces work together." },
    { q: "Deploying takes a twelve step checklist from an old wiki, so the team deploys rarely and nervously. What does the Automator want?",
      a: ["Make deployment boring: automate it, ship small changes often, and make rollback instant.", "Deploy only on Fridays when it is quiet.", "Add more steps to the checklist.", "Assign one expert to do every deploy by hand."],
      why: "Deployment Roulette. If it is not automated it is not reliable, and small frequent deploys beat large rare ones." },
    { q: "A library the product depends on has been abandoned, and a security hole was just found in it. Which Caretaker belief does this prove?",
      a: ["Dependencies are liabilities, not assets.", "Delight is a layer on top of function.", "Behavior beats surveys.", "Localization is not translation."],
      why: "The Dependency That Died turned a four hour fix into a four week migration. Code you do not control, on schedules you do not set, needs tending." },
    { q: "What does the Groundskeeper mean by \"be kind to future you\"?",
      a: ["Move fast without breaking your ability to keep moving: tests, pipelines, and maintenance now save an all nighter later.", "Skip tests now so you have more time later.", "Write long comments on every line.", "Never change working code."],
      why: "MVP does not mean move fast and break things. It means do not break your ability to keep moving. Future you is a real person." }
  ],
  longgame: [
    { q: "A team of three, with 200 users, wants multiple regions and a cluster of microservices. What does the Accountant say?",
      a: ["Optimize for the current order of magnitude. A simple setup costs a fraction of this.", "Great, plan for a million users from day one.", "Add a fourth region to be safe.", "Cost does not matter at this stage."],
      why: "The Premature Optimization Tax: $15K a month and a full time engineer for 200 users, where a monolith would have cost $200." },
    { q: "Every piece of on screen text is typed directly into the code. Why does the Ambassador worry now, at MVP?",
      a: ["Every hardcoded string is a wall. Translating later becomes an archaeology project.", "Hardcoded text loads slowly.", "It breaks the screen reader.", "It is a security risk."],
      why: "The Hardcoded Nightmare. Externalize text from the start; it is a seed now and a wall later." },
    { q: "A date entered as 15/01/2024 was read as month fifteen. What principle would have prevented it?",
      a: ["Do not assume formats: store dates in a standard form and display them in the user's local style.", "Ask users to type dates the American way.", "Hide the date field.", "Add a longer error message."],
      why: "The Date That Didn't Exist. The Ambassador knows localization is not translation: it is dates, numbers, time zones, and reading direction too." },
    { q: "A big enterprise customer is ready to sign, then asks for your security policies and you have none. What does the Regulator call compliance?",
      a: ["Market access. The deal dies on their requirements, not yours.", "Paperwork you can do after the contract.", "An engineering concern only.", "Optional for small teams."],
      why: "The Enterprise Deal That Died. You can argue about regulations, but you cannot argue that they exist." },
    { q: "A user asks you to delete all their data. Their records live in many systems, some with no way to delete. What Regulator rule applies?",
      a: ["Data is liability. Minimize what you collect and design deletion in from the start.", "Keep everything, since data is an asset.", "Tell the user it is not possible.", "Delete only what is easy to find."],
      why: "The Data That Couldn't Be Deleted. Every piece collected must be protected and possibly deleted, so privacy is by design, not an afterthought." }
  ],
  artisan: [
    { q: "A screen follows the design system perfectly and passes every guideline, but nobody could pick it out of a lineup. What does the Artisan call it?",
      a: ["A failure. Forgettable is a failure mode, not a neutral outcome.", "A success. Following the system is the goal.", "Finished, as long as it is accessible.", "A performance problem."],
      why: "The App That Hit Every Guideline And Felt Like Nothing. Tasteful is not the goal; alive is. Generic products do not earn love." },
    { q: "The copy is warm and human, but the error screens show \"OPERATION FAILED\" in flat red system type. Which member flags this?",
      a: ["The Resonance, because word and image have to sound like the same product on every surface.", "The Reading, because the button is in the wrong place.", "The Pulse, because the animation is too fast.", "The Spark, because the screen needs a bold color."],
      why: "The Error Message Trap. The moment a user is most vulnerable is where a mismatched tone does the most damage." },
    { q: "A home screen gives every card the same size, weight, and spacing. What does the Reading ask?",
      a: ["What does the eye find first, and is that the most important thing?", "Can we add more cards?", "Can we make every card a brighter color?", "Is the code for the cards clean?"],
      why: "The Reading designs the sequence the eye follows. In The Crowded Briefing, everything had equal weight, so nothing landed." },
    { q: "Larkin's user is exhausted. The palette is a default, high energy blue and the type is cramped. What does the Care say?",
      a: ["For a depleted user, visual quality is care made physical. Choose color and type that let her breathe.", "Colors are personal taste, so it does not matter.", "Add more content so the screen feels full.", "Make everything bigger and louder so she notices."],
      why: "Beauty as medicine. In The Type That Crammed, the copy promised to lighten her load while the type crowded her." },
    { q: "The Spark wants one bold, unexpected move. The Whole wants every surface to feel like one made thing. What is the right read?",
      a: ["It is a productive tension. The most alive work has both; tension without harmony is chaos, and harmony without tension is wallpaper.", "The Spark is wrong. Unity always wins.", "The Whole is wrong. Boldness always wins.", "Pick whichever ships faster."],
      why: "The Spark works with the Whole, not against it. The Artisan holds tension as a virtue, and the Council records it rather than picking a winner." }
  ],
  medium: [
    { q: "A team asks, \"Where can we add AI to this product?\" How does the Medium reframe the question?",
      a: ["Where does intelligence already live here? Some belongs with the user's judgment, some is toil a model could carry.", "Add a chat box to every screen.", "Wherever a competitor already has AI.", "Nowhere, since AI is risky."],
      why: "The Medium is fierce about one thing: intelligence in the wrong seat. A model holding a human's judgment and a human grinding through a model's toil are the same error in two directions." },
    { q: "A rule that is right every time would do the job, but the team wants a model call because it is more impressive. What does the Dowser say?",
      a: ["Keep the seat deterministic. Recommending against a model call is a real finding, delivered with relief.", "Use the model, because it is more modern.", "Use both and let users choose.", "Ask the model to write the rule."],
      why: "A rule that fires correctly every time beats a model that fires impressively most times. The most expensive code is a model call that did not need to happen." },
    { q: "A model shines in the demo. What does the Assayer want before anyone designs around it?",
      a: ["A test against ground truth on the worst real inputs, at real volume and cost.", "A second demo for the leadership team.", "A higher benchmark score.", "Nothing. The demo proved it."],
      why: "Assay against the task, not the benchmark. A capability that works at demo scale and dies at product scale was never assayed." },
    { q: "To be safe, the team has the user approve every action the AI takes, forever. What does the Falconer see?",
      a: ["Oversight that has become the user's homework. Trust should be earned per call, on the record, so the leash can lengthen.", "The ideal design. More approvals mean more safety.", "A reason to remove the AI.", "A performance problem."],
      why: "Autonomy is a gradient, not a toggle. In Larkin, a strict validator is what made silent calendar writes safe, so the confirmation never lands on her thumbs." },
    { q: "The prompt says \"never invent a date.\" Is that enough, according to the Luthier?",
      a: ["No. Intent lives in the prompt; guarantees live in the harness. Anything that must always hold is also enforced in code.", "Yes. A clear prompt is a guarantee.", "Yes, if the instruction is in capital letters.", "No. Remove the AI instead."],
      why: "A prompt instruction is a request. Larkin's output validator is the guarantee standing between a hallucinated Tuesday and her real calendar." }
  ],
  merchant: [
    { q: "The team has a polished product and no idea who will pay for it. What does the Merchant want to hear first?",
      a: ["One person who handed you money, and why.", "A five year business plan.", "A bigger marketing budget.", "A list of every possible feature."],
      why: "The Merchant does not need a business plan. Who pays, how much, and where were they standing when they first heard of you." },
    { q: "Which question belongs to the Herald?",
      a: ["How would a user describe this to a friend, in one sentence?", "How many months of runway are left?", "Who owns the IP?", "What does one user cost to serve?"],
      why: "The Herald holds positioning: the difference between what a product is and what it is for, in a sentence a stranger will repeat." },
    { q: "The team plans to find its first customers through ads. What does the Closer believe?",
      a: ["The first ten customers are found by hand, by name.", "Ads are the only way to find early users.", "Wait until launch to ask anyone to pay.", "Customers will find a good product on their own."],
      why: "The Closer has asked for the sale a thousand times. A product nobody can find is a hobby." },
    { q: "The price was picked because it \"felt right.\" What would the Treasurer ask?",
      a: ["What does one user cost to serve, and did you test what they will pay?", "Can it be lower?", "What do competitors charge?", "Can we add a free tier?"],
      why: "The Treasurer treats a price as a decision made on purpose, and watches cash the way the Sentinel watches uptime. Pricing is a design decision." },
    { q: "Friends helped build the product with no written agreement. What does the Counsel flag?",
      a: ["Who owns the IP, and what was agreed in writing? The paperwork is part of the product's skeleton.", "Nothing. Friends do not need contracts.", "Only the logo needs a trademark.", "It is the Guardian's problem."],
      why: "The Counsel reads the fine print so nobody learns it the hard way: less a no machine than a here is how machine." }
  ]
  },

  /* Journey: pick the mode. Activity records come from the catalog in data.js. */
  modes: {
    title: "Pick the mode",
    intro: "Eight activities straight from the catalog. Choose the mode you think the catalog gives each one, then compare. Watch what the human still owns when AI drives.",
    picks: ["User interviews","Writing tests","Prototype creation","Draft the Product North Star","Competitive landscape analysis","Pivot or persevere","AI red teaming","User beta"],
    close: "Even when AI leads, the human owns what gets covered, what the output has to prove, and the decision to accept it. The check is where that ownership lives."
  },

  /* Journey: hold the gate */
  gates: {
    title: "Hold the gate",
    intro: "Four gate reviews for Larkin. Read the stage's definition of done, read what the team brought, and decide. Some of these are close calls, which is what real gates feel like.",
    options: ["Holds", "Holds, with a tension recorded", "Does not hold"],
    items: [
      { stage: 2, evidence: [
          "Fourteen interviews with mothers of young children. Twelve said they would hand off the school email tomorrow.",
          "A waitlist page collected 212 sign ups from one Facebook group in nine days.",
          "The team assumed the model can tell a school email that matters from one that does not. It has not been run on a real inbox yet."
        ], answer: 2, why: "The definition of done asks for the riskiest assumptions to be killed or validated, including any assumption about what the model can reliably do. Filing accuracy is the assumption the whole product rests on, and it is untested. The sign ups are real evidence about the problem. They say nothing about the approach." },
      { stage: 5, evidence: [
          "Every feature in the build spec works as designed.",
          "The test suite passes. The agent wrote all 140 tests. When asked, nobody on the team could say what three of them prove.",
          "Code was reviewed. Accessibility is built in. The Foundation is current and the hook has never been bypassed. Analytics are instrumented."
        ], answer: 2, why: "Tests pass is on the definition of done, and the catalog's check for Writing tests says what passing has to mean: you can say what each test proves, and nothing is hard coded to pass. Three tests nobody can explain fail that check. The gate waits until someone can." },
      { stage: 6, evidence: [
          "Load tested at five times the expected traffic. The team can say what degrades first and what it costs per month at that load.",
          "Security findings fixed. AI red teaming done, with a written list of attacks tried and the fix for each.",
          "Accessibility audit complete. A screen reader user completed the core task one handed on a phone.",
          "Privacy review signed by the person who holds that responsibility. Monitoring, alerts, and a runbook exist, and a named person receives the alerts.",
          "A twelve family beta ran for two weeks. One thing the team was sure about turned out to be wrong, and it was fixed."
        ], answer: 0, why: "Every clause in the definition of done has evidence behind it, and the evidence matches the catalog's checks rather than restating the clause. This is what a clean gate looks like." },
      { stage: 1, evidence: [
          "The team can say who Larkin is for, what she carries, why a shared calendar and her own head fall short, and what the riskiest assumptions are.",
          "A first draft of the North Star exists. The designer wrote it last week, after she had already designed the first screens, and the principles describe those screens closely."
        ], answer: 1, why: "The definition of done is met: the team can articulate the user, the problem, and the assumptions, and a North Star draft exists. But the catalog names writing it after the design, to justify the design, as a pitfall. The gate holds and the Council records the tension, so Validation reads the North Star with suspicion and checks it against real mothers rather than against the screens." }
    ]
  },

  /* The quiz. 15 questions, 5 per module. Options are shuffled at render time; the first option is the correct one. */
  quiz: {
    pass: 12,
    questions: [
      { m: 2, q: "A teammate proposes a feature that is technically clean and tests well, but one of the North Star's anti patterns refuses it. What does Counterpoint say happens?",
        a: ["The North Star wins. The feature is dropped, or the team rewrites the North Star on purpose.", "Technical correctness wins.", "The Council votes.", "Ship it and watch the analytics."],
        why: "When technical correctness and the North Star disagree, the North Star wins. The only other honest move is to change the North Star knowingly." },
      { m: 2, q: "Which of these belongs in the who section of a North Star?",
        a: ["She builds with Claude Code on her own computer, often alone, often late, on a tight usage budget.", "We delight our users with intuitive experiences.", "Our brand is bold and warm.", "Grow to 10,000 users by the third quarter."],
        why: "One person, in one season of her life, and what she is carrying. The others are a slogan, a brand statement, and a goal." },
      { m: 2, q: "When is the first draft of the North Star written?",
        a: ["During Discovery, as its first artifact, and refined through Validation.", "After the design, so it reflects what was built.", "At Launch, for the announcement.", "Only for products with AI features."],
        why: "No project opens a code editor without one. Writing it after the design, to justify the design, is a named pitfall." },
      { m: 2, q: "A principle with no test attached is:",
        a: ["A slogan.", "Fine, as long as the thesis is strong.", "An anti pattern.", "The tenth voice."],
        why: "Each principle carries a test a reviewer can run in one breath. Without the test, nobody can tell whether a decision honors it." },
      { m: 2, q: "Where do new anti patterns come from after the first draft?",
        a: ["From Council runs. When a tension is called, the losing side can be added with the run it came from.", "From the competitor list.", "From the Lab Lead's style guide.", "They are fixed at Discovery and never change."],
        why: "Anti patterns are earned. Counterpoint's list started in Discovery, and it grows as Council runs record what was refused and why." },
      { m: 1, q: "In a review, the Council's job is to:",
        a: ["Surface the tensions between voices and record them as decisions the team faces.", "Vote on the best option.", "Approve or reject the work.", "Decide who was at fault."],
        why: "The Council does not vote. It surfaces tensions. Where voices disagree, the disagreement is the artifact." },
      { m: 1, q: "'When this breaks at 2am, what happens?' is the question of:",
        a: ["The Midnight Responder", "The Groundskeeper", "The Architect", "The Long Game"],
        why: "The Midnight Responder leads the Reliability Council and cares about what happens when things go wrong, because they will." },
      { m: 1, q: "Which voice asks where intelligence belongs in the product, and where it would corrode trust?",
        a: ["The Medium", "The Questioner", "The Artisan", "The Merchant"],
        why: "The Medium leads the Intelligence Council and is as quick to say 'not here' as 'here.'" },
      { m: 1, q: "A review ends with every voice agreeing quickly and no tensions recorded. The framework calls this:",
        a: ["The classic failure mode. Consensus that feels strong and may be silent about what nobody in the room can see.", "The ideal outcome.", "Proof the North Star is good.", "A reason to skip the next gate."],
        why: "Fast agreement is the thing the Council exists to interrupt. A review with no tensions usually means a lens was missing." },
      { m: 1, q: "Who is the tenth voice on a Counterpoint Council run?",
        a: ["The Builder, written from the who section, speaking first person.", "The Lab Lead.", "A second Architect.", "The member who built the feature."],
        why: "The nine voices are the same on every project. The tenth is the person the product is for, seated from the who section and allowed to speak only from her own words." },
      { m: 3, q: "An activity is marked ai-leads. What is still true?",
        a: ["The human writes the spec, reviews the output, and confirms the check before accepting it.", "No human needs to look at it.", "It can skip its gate.", "The AI signs the release checklist."],
        why: "A human is responsible for every activity in every mode. Whoever drives, the human confirms the work passed its check." },
      { m: 3, q: "Which of these is human-only in the catalog?",
        a: ["User interviews", "Writing tests", "Competitive landscape analysis", "CI/CD setup"],
        why: "Humans connect with humans. AI can draft the guide and transcribe the recording, and it takes no part in the conversation itself." },
      { m: 3, q: "The agent's test suite passes. Which fact would make the Writing tests check fail?",
        a: ["Nobody on the team can say what three of the tests prove.", "The tests use Vitest.", "The suite takes four minutes.", "The agent also wrote the README."],
        why: "The check says you can say what each test proves, the tests test behavior, and nothing is hard coded to pass. Passing is where the check starts." },
      { m: 3, q: "What is a gate?",
        a: ["A Council review at the end of a stage, held to the stage's definition of done and the North Star.", "A demo day with judges.", "A code freeze.", "The weekly standup."],
        why: "Each stage ends with a gate. Gates are the unit of progress in the Lab, and every gate ends with a showcase." },
      { m: 3, q: "Which item is on the release checklist?",
        a: ["A deliberately broken release was blocked at least once.", "The product has a pricing page.", "The team held a launch party.", "The agent reports full test coverage."],
        why: "Nothing ships to members until every item on the checklist is true, including proof that the safeguards actually catch a bad release." }
    ]
  }
};
