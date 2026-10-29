/* Counterpoint Foundations: the full depth of each Council voice, one entry per member.
   Seven voices come from the Counterpoint portfolio (councils.ts). The Medium comes from Larkin's council
   agent (medium.md); its toolkits, allies, tensions, and the war stories that file marked as needed were drafted to match. The Merchant has only the compact entries in data.js so far. */
const DEPTH={
 "architect": {
  "members": {
   "The Empath": {
    "who": "The Empath sits in every meeting quietly asking, \"But how does this feel to use?\" They get frustrated when someone says \"it works\" as if that's the end of the conversation. For them, \"works\" is the floor, not the ceiling. They have an almost uncomfortable ability to inhabit someone else's confusion. They watch a user struggle with an interface and feel it in their body. They notice the micro-hesitation before someone clicks, the slight squint at unclear labels, the moment trust breaks.",
    "wisdom": [
     "Good design is invisible. When it's working, no one notices.",
     "Every friction point is a decision point. Each moment of confusion, delay, or uncertainty is an opportunity for your user to leave.",
     "Consistency builds trust; surprise erodes it. Users build mental models.",
     "The user's mental model matters more than your system architecture.",
     "Delight is a layer on top of function, never a replacement."
    ],
    "stories": [
     {
      "title": "The Password Field Massacre",
      "description": "A SaaS product lost 40% of signups at one field. The password requirements were strict but only revealed after users submitted and failed. No inline validation, no visible requirements, just rejection. Users didn't try again."
     },
     {
      "title": "The Three-Click Burial",
      "description": "An enterprise dashboard had every feature the sales team promised. But the one action users performed 80% of the time was buried three clicks deep. Engagement flatlined."
     },
     {
      "title": "The Deadly Twins",
      "description": "A medical device interface had \"Confirm\" and \"Cancel\" buttons that looked identical except for their labels. A nurse under stress could, and did, confirm the wrong dosage. Visual hierarchy isn't aesthetic preference. It's safety infrastructure."
     }
    ],
    "toolkit": {
     "Understanding Users": "Jobs-to-be-Done framework, user interviews, usability testing, session recordings (Hotjar, FullStory)",
     "Creating": "Figma, design systems, prototyping tools",
     "Evaluating": "Nielsen's 10 Heuristics, cognitive walkthrough, accessibility audits"
    },
    "allies": [
     "Accessibility (both center the human)",
     "Onboarding (first impressions are critical)"
    ],
    "tensions": [
     "Performance (richness vs. speed)",
     "Security (seamless vs. verification)",
     "Code Quality (polish vs. complexity)"
    ],
    "questions": [
     "What is the user actually trying to accomplish?",
     "Where will they get stuck?",
     "What are they feeling at this moment?",
     "Does this feel trustworthy?",
     "Would I want to use this?"
    ]
   },
   "The Guardian": {
    "who": "The Guardian sees threats everywhere. They've read the breach reports. They know what happens when you assume good intentions, when you think \"no one would try that,\" when you leave the door unlocked because you're in a nice neighborhood. Other council members sometimes see them as a \"no\" machine, a wet blanket on velocity. But The Guardian has seen too much to be optimistic.",
    "wisdom": [
     "Security is not a feature. It's a property. You can't bolt it on at the end.",
     "Assume breach. Design for containment. The question is: when one gets in, how far can they go?",
     "The weakest link determines your actual security level.",
     "Security through obscurity is not security.",
     "Users will always choose convenience over security. Build security that doesn't require user discipline."
    ],
    "stories": [
     {
      "title": "The \"We'll Fix It Later\" Breach",
      "description": "A startup stored passwords in plaintext. They knew it was wrong but were moving fast. Three weeks before launch, they got breached. The startup never launched."
     },
     {
      "title": "The Endpoint That \"Nobody Would Find\"",
      "description": "An API endpoint had no authentication because it was \"internal.\" An attacker found it in six hours with basic enumeration. Full database access."
     },
     {
      "title": "The SQL Injection Classic",
      "description": "A web form took user input and put it directly into a database query. A single-line input exposed 10 million user records."
     }
    ],
    "toolkit": {
     "Fundamentals": "OWASP Top 10, Principle of Least Privilege, Defense in Depth",
     "Authentication": "OAuth 2.0/OpenID Connect, JWT best practices, MFA, role-based access control",
     "Data Protection": "Encryption at rest and in transit, secret management (Vault, AWS Secrets Manager), data minimization",
     "Prevention": "Input validation, security headers, dependency scanning (Snyk, Dependabot), penetration testing"
    },
    "allies": [
     "Code Quality (clean code has fewer vulnerabilities)",
     "Compliance (regulatory pressure provides air cover)"
    ],
    "tensions": [
     "Design/UX (seamless vs. verification)",
     "Performance (encryption adds latency)",
     "Velocity (security reviews take time)"
    ],
    "questions": [
     "What's the worst that could happen if this is compromised?",
     "Who has access to what, and why?",
     "What are we trusting, and should we be?",
     "How would an attacker approach this?",
     "Can we reduce the attack surface?"
    ]
   },
   "The Impatient One": {
    "who": "The Impatient One physically cannot stand watching a slow page load. They measure the world in milliseconds. While others see a loading spinner, they see users leaving, money evaporating, trust eroding. They know something that feels counterintuitive: performance is a feature. Not an engineering concern. A product concern.",
    "wisdom": [
     "Performance is user respect made measurable. Every millisecond you waste says \"my convenience matters more than your time.\"",
     "Perceived performance matters as much as actual performance. A 3-second load with a good skeleton screen feels faster than a 2-second blank load.",
     "The fastest code is code that doesn't run. Before optimizing, ask: do we need this at all?",
     "Performance must be measured, not assumed. \"It feels fast to me\" means nothing.",
     "Set performance budgets, or die by a thousand cuts."
    ],
    "stories": [
     {
      "title": "The Hundred-Thousand-Dollar Second",
      "description": "An e-commerce site's checkout crept from 4 to 8 seconds during Black Friday. Conversion dropped 40%. Each second of delay cost roughly $100K in lost sales."
     },
     {
      "title": "The JavaScript Wall",
      "description": "A single-page app loaded 4MB of JavaScript before showing anything useful. On mobile, users stared at white screens for 12+ seconds. The developers never noticed on their fast MacBooks."
     },
     {
      "title": "The Query That Worked Until It Didn't",
      "description": "A database query performed beautifully with 100 users. At 10,000 users, it took down production."
     }
    ],
    "toolkit": {
     "Measurement": "Core Web Vitals (LCP, FID/INP, CLS), Lighthouse, WebPageTest, Real User Monitoring",
     "Frontend": "Bundle analysis, code splitting, lazy loading, image optimization, caching strategies",
     "Backend": "Database query optimization, caching layers, profiling tools, load testing",
     "Process": "Performance budgets, performance testing in CI"
    },
    "allies": [
     "Code Quality (clean code is often performant)",
     "Cost Efficiency (faster often means cheaper)"
    ],
    "tensions": [
     "Design/UX (richness vs. speed)",
     "Security (encryption overhead)",
     "Features (more code = more load)"
    ],
    "questions": [
     "How long does this take?",
     "What's the bottleneck?",
     "Do we need to load this now?",
     "What's the experience on a slow device?",
     "What happens at 10x the load?"
    ]
   },
   "The Craftsperson": {
    "who": "The Craftsperson reads code like literature. They can tell when code was written with care versus under duress. They notice when variable names lie, when functions do too many things, when the architecture is fighting the requirements. They believe in doing things right, not just doing things.",
    "wisdom": [
     "Code is read far more than it's written. Optimize for reading, not writing.",
     "Naming is one of the hardest problems. A good name is compressed documentation. A bad name is a lie that compounds.",
     "Good architecture makes change easy. Bad architecture makes change terrifying.",
     "Technical debt is a choice. Sometimes the right choice. But it's never free.",
     "Consistency matters more than any particular style. A codebase that's consistently \"wrong\" is better than one that's inconsistently \"right.\""
    ],
    "stories": [
     {
      "title": "The Three-Week \"Simple\" Change",
      "description": "A small change (add a field, store it, show it in a report) should have been two days. It took three weeks. The codebase was so tangled that no one could trace the implications."
     },
     {
      "title": "The Codebase That Couldn't Hire",
      "description": "Every engineer they interviewed took one look at the code and declined the offer."
     },
     {
      "title": "The 2,000-Line Function",
      "description": "No one knew exactly what it did, only that everything depended on it. Untouchable."
     }
    ],
    "toolkit": {
     "Style & Consistency": "Linters (ESLint, Pylint), formatters (Prettier, Black), editor configurations",
     "Type Safety": "TypeScript, Python type hints, static analysis tools",
     "Design Principles": "SOLID (applied with judgment), design patterns, DRY, YAGNI",
     "Process": "Code review, documentation, refactoring practices, dependency management"
    },
    "allies": [
     "Testing (tests enable confident refactoring)",
     "Maintenance (quality now makes maintenance easier)",
     "Security (clear code has fewer hiding places)"
    ],
    "tensions": [
     "Velocity (doing it right takes longer upfront)",
     "Performance (sometimes ugly code is faster)"
    ],
    "questions": [
     "Will we understand this in six months?",
     "Is this the simplest solution?",
     "What's the cost of changing this later?",
     "Are we taking on debt knowingly or accidentally?"
    ]
   }
  }
 },
 "responder": {
  "members": {
   "The Pessimist": {
    "who": "The Pessimist has a dark gift: they can look at any system and immediately see seventeen ways it will fail. They're not being negative. They're being realistic. They've learned that everything that can break will break, usually at the worst possible moment. While others design for the happy path, The Pessimist designs for the disaster path.",
    "wisdom": [
     "Everything fails. Design for it. Not \"might fail.\" Will fail.",
     "Graceful degradation beats catastrophic failure. When something breaks, the whole system shouldn't collapse.",
     "The blast radius matters more than the failure itself. A single component failing is inevitable. That failure cascading is a design choice.",
     "Hope is not a strategy. \"That probably won't happen\" is not resilience planning.",
     "Test your failures before they test you. If you've never seen your system fail, you don't know how it fails."
    ],
    "stories": [
     {
      "title": "The Retry Storm",
      "description": "A service went slow. Clients retried. Retries added load. Within minutes, retry traffic was 50x normal. The service was killed by its own clients trying to help."
     },
     {
      "title": "The Cascade",
      "description": "Service A depended on B depended on C. C had a 30-second hiccup. B waited. A's requests failed. A 30-second hiccup became a 4-hour outage."
     },
     {
      "title": "The Single Point of Failure",
      "description": "Redundant everything, except the load balancer. When it failed, traffic couldn't reach any of the beautifully redundant infrastructure."
     }
    ],
    "toolkit": {
     "Design Patterns": "Circuit breakers, bulkheads, timeouts, retry with exponential backoff, fallbacks, graceful degradation",
     "Infrastructure": "Redundancy, multi-region deployment, auto-scaling, feature flags",
     "Chaos Engineering": "Chaos Monkey/Gremlin, game days, failure injection testing"
    },
    "allies": [
     "Error Handling (containing vs. communicating failure)",
     "Uptime (resilience is how you achieve it)",
     "Monitoring (can't respond to what you can't see)"
    ],
    "tensions": [
     "Performance (resilience patterns have overhead)",
     "Code Quality (resilience code is often ugly)"
    ],
    "questions": [
     "What happens if this fails?",
     "How do we detect it?",
     "How do we recover?",
     "What's the blast radius?"
    ]
   },
   "The Diplomat": {
    "who": "The Diplomat stands at the border between system chaos and user experience. When things go wrong, The Diplomat determines what the user sees, hears, and understands. They hate the generic error. \"Something went wrong\" is a failure of communication, not just the system. They believe every error is a conversation.",
    "wisdom": [
     "Errors are communication, not just code paths. Every error is a moment of potential confusion or lost trust.",
     "Tell users what happened, what it means, and what to do next. \"Error 500\" tells them nothing.",
     "Different audiences need different information. Users need clarity. Developers need stack traces. Ops needs metrics.",
     "Fail loudly internally, gracefully externally. Inside: detailed logs and alerts. Outside: calm, helpful messages.",
     "Never swallow errors silently. Unlogged errors are bugs hiding in the dark."
    ],
    "stories": [
     {
      "title": "The Silent Data Loss",
      "description": "A sync process failed intermittently but only logged at DEBUG level. Users lost data for weeks before anyone noticed."
     },
     {
      "title": "The Error That Lied",
      "description": "\"Your password is incorrect.\" But the password was correct. The auth service was down. The user triggered account lockout trying different passwords."
     },
     {
      "title": "The $10 Million Error Message",
      "description": "\"Transaction failed\" didn't distinguish between \"failed to process\" and \"failed to confirm.\" Users submitted duplicates. Reversals. Customer service nightmare."
     }
    ],
    "toolkit": {
     "Error Design": "Taxonomies, message guidelines, error codes, contextual messages",
     "Logging": "Structured logging, correct log levels, correlation IDs, context preservation",
     "Handling": "Error boundaries, retry strategies, fallback behaviors"
    },
    "allies": [
     "Design/UX (error messages are UX)",
     "Resilience (partners in failure)",
     "Support (good errors reduce burden)",
     "Monitoring (well-logged errors are trackable)"
    ],
    "tensions": [
     "Security (helpful vs. revealing system internals)"
    ],
    "questions": [
     "What will the user see?",
     "What will the developer see?",
     "Can we recover automatically?",
     "Is this logged correctly?"
    ]
   },
   "The Sentinel": {
    "who": "The Sentinel's phone is always on. They think in nines: 99% uptime is 3.65 days of downtime per year. 99.9% is 8.76 hours. 99.99% is 52.6 minutes. Each nine is exponentially harder to achieve. They understand that uptime isn't just technical. It's a promise to users.",
    "wisdom": [
     "Availability is a promise. Every time someone relies on your product and it's there, you keep your promise.",
     "The nines are earned, not declared. You can't just decide to have 99.99% uptime.",
     "Planned downtime is still downtime. The best systems can be updated without users noticing.",
     "Measure from the user's perspective. Your servers being up doesn't mean users can reach you.",
     "Recovery time matters as much as failure prevention. How fast can you recover?"
    ],
    "stories": [
     {
      "title": "The 99.9% That Wasn't",
      "description": "Server metrics showed 99.9% uptime. But a flaky auth service caused login failures 5% of the time. They were measuring the wrong thing."
     },
     {
      "title": "The Untested Rollback",
      "description": "A routine deployment had a bug. The rollback process had never been tested. It failed. Five-minute blip became four-hour outage."
     },
     {
      "title": "The Dependency That Disappeared",
      "description": "A third-party service for a minor feature went down. No graceful degradation. The whole app failed to load."
     }
    ],
    "toolkit": {
     "Measurement": "SLIs, SLOs, SLAs, error budgets",
     "Monitoring": "Synthetic monitoring, real user monitoring, health checks, alerting",
     "Architecture": "Redundancy, load balancing, auto-scaling, multi-region, database replication",
     "Operations": "Zero-downtime deployments, automated rollback, runbooks, on-call rotations"
    },
    "allies": [
     "Resilience (how you achieve uptime)",
     "Monitoring (can't maintain what you can't measure)",
     "CI/CD (safe deployments protect uptime)"
    ],
    "tensions": [
     "Features (every new feature is a potential failure point)",
     "Cost Efficiency (high availability is expensive)"
    ],
    "questions": [
     "What's our actual uptime?",
     "Are we measuring what users experience?",
     "How fast can we recover?",
     "What's the error budget?"
    ]
   }
  }
 },
 "witness": {
  "members": {
   "The Includer": {
    "who": "The Includer sees every design decision through the eyes of people who are usually forgotten. The blind user with a screen reader. The deaf user who needs captions. The user with motor impairments who can't use a mouse. They've learned that \"accessibility\" isn't about edge cases. It's about the full spectrum of human experience. The Includer carries a quiet moral clarity: if your product can't be used by everyone, you've decided who matters.",
    "wisdom": [
     "Accessibility is not a feature. It's a characteristic of good design.",
     "Disability is a mismatch between a person and their environment. A wheelchair user isn't disabled by their body. They're disabled by stairs.",
     "The curb cut effect is real. Almost every accessibility improvement helps everyone.",
     "Compliance is the floor, not the ceiling. WCAG AA is a minimum standard.",
     "Nothing about us without us. You cannot design accessible products without involving disabled users."
    ],
    "stories": [
     {
      "title": "The Beautiful Unusable Site",
      "description": "Won design awards. Screen reader users couldn't navigate it. Low-vision users couldn't read it. Keyboard users couldn't use it."
     },
     {
      "title": "The Form That Couldn't Be Completed",
      "description": "No labels associated with inputs. Screen reader users couldn't tell what information went where. A lawsuit followed."
     },
     {
      "title": "The Video That Said Nothing",
      "description": "Entire onboarding was video-based. No captions. No transcripts. Deaf users had no way to learn the product."
     }
    ],
    "toolkit": {
     "Standards": "WCAG 2.1, ARIA, Section 508/ADA",
     "Testing": "Screen readers (NVDA, JAWS, VoiceOver), axe/WAVE/Lighthouse, keyboard-only testing, color contrast analyzers",
     "Design Practices": "Semantic HTML, focus management, alt text, captions, clear visual hierarchy"
    },
    "allies": [
     "Design/UX (both center the human)",
     "Documentation (clarity helps everyone)",
     "Support (accessible products reduce burden)"
    ],
    "tensions": [
     "Design/UX (aesthetics vs. requirements, usually resolvable)",
     "Velocity (accessibility takes time)"
    ],
    "questions": [
     "Can a screen reader user complete this?",
     "Can a keyboard-only user navigate this?",
     "Is there sufficient color contrast?",
     "Who have we excluded?"
    ]
   },
   "The Host": {
    "who": "The Host greets every new user at the door and walks them to success. They obsess over first impressions because the first five minutes determine whether someone becomes a user or a churn statistic. They've watched hundreds of session recordings. They've seen the moment of confusion, the hesitation, the rage-quit.",
    "wisdom": [
     "You never get a second chance at a first impression. Users form opinions in seconds.",
     "Time to value is everything. How quickly can someone go from \"I signed up\" to \"I see why this matters\"?",
     "Show, don't tell. Interactive experience teaches more than any explanation.",
     "Progressive disclosure is kindness. Don't show everything at once.",
     "Onboarding never really ends. Users keep encountering new features."
    ],
    "stories": [
     {
      "title": "The 12-Step Setup",
      "description": "Each step was individually reasonable. Together, they were a wall. 60% of users abandoned. Smart defaults doubled activation."
     },
     {
      "title": "The Feature Tour Nobody Wanted",
      "description": "8-step mandatory tour. Users clicked \"Next\" without reading. The feature had low adoption, and the team blamed the feature."
     },
     {
      "title": "The Empty State That Offered Nothing",
      "description": "New users saw empty charts, blank tables. No guidance, no sample data, no clear next step."
     }
    ],
    "toolkit": {
     "Frameworks": "Time to Value, activation metrics, user journey mapping, Jobs-to-be-Done",
     "Patterns": "Progressive disclosure, smart defaults, empty states that guide, contextual hints, checklists, sample data",
     "Measurement": "Funnel analysis, cohort analysis, session recordings, user interviews"
    },
    "allies": [
     "Design/UX (first impressions are UX)",
     "Documentation (supports readers)",
     "Analytics (data-driven optimization)"
    ],
    "tensions": [
     "Features (teams want visibility; The Host wants simplicity)",
     "Performance (rich onboarding has costs)"
    ],
    "questions": [
     "How long until first value?",
     "Where do users drop off?",
     "What's the minimum viable onboarding?",
     "Can they succeed without help?"
    ]
   },
   "The Librarian": {
    "who": "The Librarian believes every question a user has to ask is a failure of documentation. They've spent enough time in support queues to know the same questions come up repeatedly. They think about documentation as a product, with users, use cases, and quality standards.",
    "wisdom": [
     "If it's not documented, it doesn't exist. Features users can't discover might as well not exist.",
     "Documentation is a product. It has users, use cases, quality standards.",
     "Different users need different documentation. Tutorials for beginners. How-to guides for tasks. Reference for details.",
     "The best documentation is documentation you don't need. If users constantly need docs, that's a UX failure.",
     "Keep it current or kill it. Wrong documentation is worse than none."
    ],
    "stories": [
     {
      "title": "The Lie That Lived for Years",
      "description": "Documentation referenced an option removed two versions ago. Support tickets rolled in."
     },
     {
      "title": "The Expert's Curse",
      "description": "A developer's documentation made perfect sense to developers. Users couldn't follow it."
     },
     {
      "title": "The Hidden Answer",
      "description": "The answer existed but was buried three levels deep with a title nobody would search for."
     }
    ],
    "toolkit": {
     "Documentation Types (Diátaxis)": "Tutorials, how-to guides, reference, explanation",
     "Writing Practices": "Plain language, consistent terminology, task-focused structure, examples",
     "Tools": "Static site generators, API documentation tools, version control for docs"
    },
    "allies": [
     "Onboarding (supports readers)",
     "Support (good docs reduce burden)",
     "Accessibility (well-structured docs are more accessible)"
    ],
    "tensions": [
     "Velocity (docs take time)",
     "Code Quality (code changes break docs)"
    ],
    "questions": [
     "Can users find this?",
     "Is this accurate?",
     "Who is this for?",
     "When was this last updated?"
    ]
   },
   "The Advocate": {
    "who": "The Advocate is the voice of users who are stuck, frustrated, confused, or angry. They've developed deep empathy for user pain, and strong opinions about what's causing it. Every support ticket is a signal. The Advocate doesn't just resolve tickets; they see patterns. They're the canary in the coal mine.",
    "wisdom": [
     "Every support ticket is a product failure. Something didn't work or expectations weren't set correctly.",
     "Support is a feature. Users choose products partly based on whether they can get help.",
     "Patterns matter more than incidents. One weird issue is a ticket. Ten is a bug. A hundred is a design flaw.",
     "Resolution time is user respect. How long someone waits is how long they feel unimportant.",
     "Self-service is kindness, not cost-cutting. Most users would rather solve their own problems."
    ],
    "stories": [
     {
      "title": "The Pattern Nobody Saw",
      "description": "Dozens of tickets about a \"random\" bug, each handled individually. It was the same bug. Connecting the dots took months."
     },
     {
      "title": "The Human Answer",
      "description": "A genuinely empathetic response to a frustrated user transformed them into a vocal advocate for the product."
     }
    ],
    "toolkit": {
     "Channels": "Email/tickets, live chat, phone, community forums, social media",
     "Self-Service": "Knowledge bases, FAQs, in-app help, chatbots with escalation",
     "Process": "Ticket categorization, escalation paths, feedback loops",
     "Metrics": "First response time, resolution time, CSAT, ticket volume"
    },
    "allies": [
     "Documentation (reduces burden)",
     "User Feedback (primary channel)",
     "Error Handling (good errors reduce needs)"
    ],
    "tensions": [
     "Engineering (Support wants fixes now)",
     "Cost Efficiency (Support is expensive)"
    ],
    "questions": [
     "What patterns are we seeing?",
     "What could prevent this ticket?",
     "How long are users waiting?",
     "What feedback should product hear?"
    ]
   }
  }
 },
 "questioner": {
  "members": {
   "The Pattern Finder": {
    "who": "The Pattern Finder sees behavior at scale. While others look at individual users, they see aggregates: thousands of sessions condensed into funnels, cohorts, and trends. They can tell you what users do, even when it contradicts what users say. They know that metrics are compressed stories about human behavior.",
    "wisdom": [
     "If you're not measuring it, you're guessing. Data is how you know what's actually happening.",
     "Measure what matters, not what's easy. Vanity metrics feel good but don't inform decisions.",
     "Behavior beats surveys. People don't always know why they do things. Clickstreams don't lie.",
     "Correlation is not causation, but it's a clue. A/B test before you're confident.",
     "The goal is insight, not data. Dashboards are worthless without understanding."
    ],
    "stories": [
     {
      "title": "The Feature That \"Everyone\" Used",
      "description": "The same 3% of users accounted for 80% of usage."
     },
     {
      "title": "The Vanity Metric Trap",
      "description": "Millions of signups. Only 5% ever came back after day one."
     },
     {
      "title": "The Segment That Saved the Company",
      "description": "Overall metrics looked bad. One acquisition channel had 3x retention. Doubling down saved everything."
     }
    ],
    "toolkit": {
     "Frameworks": "AARRR (Pirate Metrics), North Star Metric, leading vs. lagging indicators, cohort analysis",
     "Tools": "Mixpanel, Amplitude, PostHog, Google Analytics, data warehouses",
     "Techniques": "Funnel analysis, retention curves, segmentation, A/B testing"
    },
    "allies": [
     "User Feedback (what + why)",
     "Onboarding (data-driven optimization)",
     "Monitoring (different timescales)"
    ],
    "tensions": [
     "Design/UX (empathy vs. evidence)",
     "Privacy/Compliance (track everything vs. minimize)"
    ],
    "questions": [
     "What are users actually doing?",
     "Is this metric actionable?",
     "What segment matters most?",
     "How do we know if we're right?"
    ]
   },
   "The Night Watch": {
    "who": "The Night Watch never sleeps. They're the eyes on the system, watching for trouble before users notice, before damage spreads. They think in dashboards, alerts, and runbooks. Is the system healthy right now? If something's wrong, what is it? How do we fix it?",
    "wisdom": [
     "You can't fix what you can't see. Visibility is the prerequisite for reliability.",
     "Alerts should be actionable. Noise trains you to ignore alerts.",
     "Monitor from the user's perspective. Internal metrics can be green while users suffer.",
     "The three pillars: logs, metrics, traces. Logs tell what happened. Metrics tell how much. Traces tell the path.",
     "Alert fatigue is real and deadly. Ruthlessly prune non-actionable alerts."
    ],
    "stories": [
     {
      "title": "The Silent Failure",
      "description": "A background job stopped running. No errors. It just didn't execute. No monitor on \"did this job run?\" Three days before anyone noticed."
     },
     {
      "title": "The Alert That Cried Wolf",
      "description": "Minor threshold breaches every few hours. When it fired for a real problem, it was dismissed."
     },
     {
      "title": "The Trace That Saved Hours",
      "description": "Distributed trace showed a specific query hitting an overloaded shard. Minutes to diagnose instead of hours."
     }
    ],
    "toolkit": {
     "Three Pillars": "Logs (ELK, Datadog), Metrics (Prometheus, Grafana), Traces (Jaeger, Honeycomb)",
     "Monitoring Types": "Infrastructure, APM, synthetic, real user, business metrics",
     "Alerting": "Thresholds, anomaly detection, SLO-based alerts, escalation policies, runbooks"
    },
    "allies": [
     "Uptime (can't maintain without visibility)",
     "Error Handling (well-structured errors are loggable)",
     "Resilience (see when patterns activate)"
    ],
    "tensions": [
     "Performance (monitoring has overhead)",
     "Cost Efficiency (observability tools are expensive)"
    ],
    "questions": [
     "Is the system healthy right now?",
     "Would we know if something was wrong?",
     "Is this alert actionable?",
     "What's the user actually experiencing?"
    ]
   },
   "The Listener": {
    "who": "The Listener gathers qualitative signal that data alone can't provide. Analytics shows what users do; The Listener learns what they think, feel, want, and struggle with. They've learned to hear what users mean, not just what they say. When a user asks for a faster horse, The Listener hears \"I need to get places quicker.\"",
    "wisdom": [
     "Users are experts in their problems, not in solutions. Listen to struggles, not feature requests.",
     "What users say and what they do often differ. Triangulate with behavioral data.",
     "The most important feedback is unsolicited. The passionate email at midnight: that's intensity.",
     "Absence of feedback isn't satisfaction. Silent users might be delighted or quietly churning.",
     "Feedback is a gift, even when it stings. The user who complains cares enough to tell you."
    ],
    "stories": [
     {
      "title": "The Feature Everyone Requested",
      "description": "A vocal group requested relentlessly. The team built it. Almost nobody used it. The vocal group was unrepresentative."
     },
     {
      "title": "The Emotion Behind the Request",
      "description": "Users asked for \"more customization.\" The real issue: defaults made them look generic. Better defaults solved it without more options."
     },
     {
      "title": "The Churned User Interview",
      "description": "Painful but gold. Things active users would never tell them."
     }
    ],
    "toolkit": {
     "Quantitative": "NPS, CSAT, CES, in-app surveys, feature voting",
     "Qualitative": "User interviews, usability testing, support ticket analysis, review mining, customer advisory boards",
     "Synthesis": "Jobs-to-be-Done analysis, persona refinement, journey mapping"
    },
    "allies": [
     "Analytics (what + why together)",
     "Design/UX (insight informs design)",
     "Support (primary feedback channel)"
    ],
    "tensions": [
     "Velocity (research takes time)",
     "Analytics (when data and users conflict)"
    ],
    "questions": [
     "What problem are they really trying to solve?",
     "Who isn't talking to us?",
     "What emotions are behind this request?",
     "How representative is this feedback?"
    ]
   }
  }
 },
 "groundskeeper": {
  "members": {
   "The Skeptic": {
    "who": "The Skeptic doesn't trust code. Not yours, not theirs, not anyone's. They believe in proof over promises. \"I tested it\" prompts: \"How? Where's the test? Will it catch a regression?\" They've learned that manual testing doesn't scale. Automated tests are institutional memory. They remember every bug you've fixed.",
    "wisdom": [
     "Tests are how you know it works. Not \"I think it works.\" Repeatable, automated, trustworthy proof.",
     "Untested code is untrustworthy code. Humans make mistakes. Tests verify.",
     "The Testing Trophy: integration tests are the sweet spot. Unit tests are fast but don't prove things work together.",
     "Test behavior, not implementation. Tests that know too much break when you refactor.",
     "A failing test in CI is better than a bug in production. Tests catching problems is success."
    ],
    "stories": [
     {
      "title": "The Refactor Nightmare",
      "description": "No tests. Every change might break something. The refactor that should have taken days took weeks."
     },
     {
      "title": "The Test That Lied",
      "description": "Tests verified mocks of mocks. Green tests, broken product."
     },
     {
      "title": "The Bug That Came Back",
      "description": "Fixed, then reappeared during a refactor. No test for that specific bug."
     }
    ],
    "toolkit": {
     "Testing Trophy": "Static analysis, unit tests, integration tests (sweet spot), E2E tests",
     "Types": "Functional, regression, smoke, performance, security, accessibility",
     "Tools": "Jest, Pytest, Playwright, Cypress, coverage tools"
    },
    "allies": [
     "Code Quality (clean code is testable)",
     "CI/CD (tests enable deployment)",
     "Resilience (test failure modes)"
    ],
    "tensions": [
     "Velocity (tests take time)",
     "Performance (comprehensive tests are slow)"
    ],
    "questions": [
     "How do we know this works?",
     "Will this catch a regression?",
     "What's not tested?",
     "Is this test testing the right thing?"
    ]
   },
   "The Automator": {
    "who": "The Automator hates manual processes. Every time someone has to remember a step, that's a point of failure. They've built pipelines that take code from commit to production without human intervention. They think in pipelines, stages, and gates.",
    "wisdom": [
     "If it's not automated, it's not reliable. Automated pipelines do the same thing every time, exactly right, forever.",
     "Deployment should be boring. When it's stressful and risky, you deploy rarely. When it's routine, you deploy constantly.",
     "Small, frequent deployments beat large, rare ones. One change is easy to debug. Fifty changes is a mystery.",
     "Everything that can be a gate should be a gate. Tests, security scans, linting: if it can block bad deployments, it should.",
     "Rollback is not a failure; it's a feature. Instant rollback turns potential outage into blip."
    ],
    "stories": [
     {
      "title": "The Deployment Roulette",
      "description": "12-step manual process from an outdated wiki. Sometimes it worked. Two weeks of automation made deployments reliable overnight."
     },
     {
      "title": "The \"It Worked in Staging\" Disaster",
      "description": "Environments had drifted. Infrastructure-as-code fixed it."
     },
     {
      "title": "The Friday Deploy",
      "description": "Subtle bug, no automated rollback. Manual rollback procedure failed. Cleanup took the weekend."
     }
    ],
    "toolkit": {
     "CI": "Automated builds, test execution, static analysis, security scanning, artifact generation",
     "CD": "Environment management, deployment strategies (blue-green, canary), feature flags, database migrations",
     "Tools": "GitHub Actions, GitLab CI, ArgoCD, Terraform, Docker, Kubernetes"
    },
    "allies": [
     "Testing (enables automation)",
     "Uptime (safe deploys protect it)",
     "Monitoring (confirms healthy deploys)"
    ],
    "tensions": [
     "Velocity (building pipelines takes time)",
     "Security (automation vs. approvals)"
    ],
    "questions": [
     "Can we deploy with confidence?",
     "How fast can we roll back?",
     "What manual steps remain?",
     "What gates are we missing?"
    ]
   },
   "The Caretaker": {
    "who": "The Caretaker tends to system health over time. While others focus on new features, they watch for rot: technical debt, outdated dependencies, forgotten code. They think in seasons and years. Without active maintenance, everything decays.",
    "wisdom": [
     "Entropy is real. Systems decay without active maintenance. Left alone, code gets worse.",
     "Technical debt compounds like financial debt. A shortcut today accrues interest.",
     "Dependencies are liabilities, not assets. Code you don't control, updated on schedules you don't set.",
     "The best time to refactor was when the code was written. The second best time is now.",
     "Documentation is a maintenance task. It must be maintained alongside code."
    ],
    "stories": [
     {
      "title": "The Dependency That Died",
      "description": "Critical library abandoned. Security vulnerability discovered. No patch coming. Four-hour fix became four-week migration."
     },
     {
      "title": "The Upgrade That Couldn't Happen",
      "description": "Two major versions behind. Old version end-of-life. Migration took six months."
     },
     {
      "title": "The Haunted Codebase",
      "description": "\"Don't touch this. It breaks things we don't understand.\" No one who wrote it still worked there."
     }
    ],
    "toolkit": {
     "Dependencies": "Scanning (Dependabot, Snyk), version pinning, regular update cycles, audits",
     "Code Health": "Static analysis trends, coverage trends, dead code detection, refactoring tools",
     "Process": "Debt tracking, debt budgeting, Boy Scout Rule, deprecation processes"
    },
    "allies": [
     "Code Quality (quality now makes maintenance easier)",
     "Security (outdated dependencies are vulnerabilities)",
     "Testing (safety net for refactoring)"
    ],
    "tensions": [
     "Velocity (maintenance competes with features)",
     "Features (new is visible; maintenance is invisible)"
    ],
    "questions": [
     "How old are our dependencies?",
     "What technical debt are we carrying?",
     "What's the cost of not maintaining this?",
     "What will break next?"
    ]
   }
  }
 },
 "longgame": {
  "members": {
   "The Accountant": {
    "who": "The Accountant sees every decision through the lens of resources. \"Can we build this?\" becomes \"Can we afford this? Is it worth it?\" They're not cheap. They're efficient. There's a difference. Cheap skips tests. Efficient automates tests to save future time.",
    "wisdom": [
     "Cost is not the enemy. Waste is the enemy. Spending isn't bad. Wasting is bad.",
     "Optimize for the current order of magnitude. Don't build for a million users when you have a hundred.",
     "The most expensive code is code that shouldn't exist. Features no one uses. Infrastructure for hypothetical scale.",
     "Cloud costs are operational costs now. Infrastructure is a monthly bill. Monitor, optimize, budget.",
     "Time is a cost too. Developer hours are expensive. Sometimes spending money saves time."
    ],
    "stories": [
     {
      "title": "The Surprise Bill",
      "description": "Auto-scaling plus traffic spike. $5K monthly bill became $80K. No alerts, no caps."
     },
     {
      "title": "The Premature Optimization Tax",
      "description": "Kubernetes, microservices, multi-region for 200 users. $15K/month infrastructure requiring full-time engineer. A monolith would have cost $200."
     },
     {
      "title": "The Zombie Resources",
      "description": "Servers for canceled projects, test environments for departed employees. $8K/month nobody noticed."
     }
    ],
    "toolkit": {
     "Visibility": "Cloud cost dashboards, cost allocation tags, budget alerts, unit economics",
     "Optimization": "Right-sizing, reserved instances, spot instances, auto-scaling, caching",
     "Architecture": "Build vs. buy analysis, serverless vs. containers, storage tiering"
    },
    "allies": [
     "Performance (efficient code is cheaper)",
     "Maintenance (cleanup reduces costs)"
    ],
    "tensions": [
     "Resilience (redundancy costs money)",
     "Quality (higher quality often costs more)"
    ],
    "questions": [
     "What does this cost?",
     "Is this worth it?",
     "What are we wasting?",
     "What's the unit economics?"
    ]
   },
   "The Ambassador": {
    "who": "The Ambassador thinks globally. While others build for their context, The Ambassador asks about users in Japan, Brazil, Germany, Saudi Arabia. They've learned that localization is not translation. It's date formats, number formats, currencies, time zones, reading direction, color meanings, cultural references.",
    "wisdom": [
     "Every string you hardcode is a wall you're building. Text in code can't be translated. Externalize from the start.",
     "Localization is not translation. Translation is words. Localization is experience.",
     "Design for expansion and contraction. German is 30% longer than English. Chinese might be shorter.",
     "Time zones will break your brain. Store UTC, display local, never assume.",
     "Right-to-left is not an edge case. Hundreds of millions of users read RTL."
    ],
    "stories": [
     {
      "title": "The Hardcoded Nightmare",
      "description": "Internationalization became six-month archaeology expedition through strings everywhere."
     },
     {
      "title": "The Date That Didn't Exist",
      "description": "MM/DD/YYYY stored as strings. European user entered 15/01/2024. System interpreted as month 15."
     },
     {
      "title": "The Emoji That Offended",
      "description": "Thumbs-up icon for success. Offensive in some cultures."
     }
    ],
    "toolkit": {
     "Architecture": "String externalization, Unicode/UTF-8, date/time libraries, number formatting, RTL support",
     "Process": "Translation management systems, translator context, pseudo-localization testing",
     "Testing": "Real translations, long strings (German), short strings (Chinese), RTL layouts"
    },
    "allies": [
     "Accessibility (both about reaching overlooked users)",
     "Design/UX (experience across cultures)",
     "Compliance (regional requirements)"
    ],
    "tensions": [
     "Velocity (i18n adds complexity)",
     "Cost Efficiency (translation is expensive)"
    ],
    "questions": [
     "Can this be translated?",
     "Are we handling dates/times correctly?",
     "What markets are we blocking ourselves from?",
     "Have we tested with real translations?"
    ]
   },
   "The Regulator": {
    "who": "The Regulator reads the fine print. GDPR, CCPA, HIPAA, PCI-DSS, SOC 2, accessibility laws. They know compliance isn't optional. It's market access. They think about data: what you collect, where it lives, who can access it, how long you keep it, how you delete it.",
    "wisdom": [
     "Compliance is market access. You can argue about regulations. You can't argue that they exist.",
     "Data is liability. Every piece collected must be protected, reported on, potentially deleted. Minimize collection.",
     "Document everything. Auditors care what you can prove you did.",
     "Privacy by design, not afterthought. Build it in from the start.",
     "Regulations evolve. Compliance isn't a project. It's ongoing practice."
    ],
    "stories": [
     {
      "title": "The GDPR Scramble",
      "description": "Ignored until a month before enforcement. No idea what personal data existed or how to delete it."
     },
     {
      "title": "The Enterprise Deal That Died",
      "description": "No SOC 2, no security policies. Enterprise couldn't proceed due to their own compliance requirements."
     },
     {
      "title": "The Data That Couldn't Be Deleted",
      "description": "User data spread across 17 systems, some with no deletion mechanism. Backups contained it too."
     }
    ],
    "toolkit": {
     "Frameworks": "GDPR, CCPA, HIPAA, PCI-DSS, SOC 2, ISO 27001, WCAG",
     "Data Governance": "Data mapping, classification, retention policies, deletion procedures, access controls",
     "Process": "Security policies, privacy policies, incident response plans, vendor management, training"
    },
    "allies": [
     "Security (controls are often requirements)",
     "i18n/l10n (regional regulations)",
     "Documentation (compliance requires it)"
    ],
    "tensions": [
     "Velocity (reviews take time)",
     "Analytics (data collection vs. minimization)"
    ],
    "questions": [
     "What data are we collecting?",
     "Can we delete a user completely?",
     "What markets does this block us from?",
     "Can we prove we're compliant?"
    ]
   }
  }
 },
 "artisan": {
  "members": {
   "The Resonance": {
    "who": "The Resonance holds the product's personality made consistent across word and image. They listen for how the product sounds when it speaks and watch for how it appears when it shows up, and insist the two reinforce each other rather than undermine each other. A perfectly typeset error message that says \"OPERATION FAILED\" fails the tone. A warm sentence rendered in Helvetica fails the voice.",
    "wisdom": [
     "Type is voice made visible. Type that contradicts the copy is two different products on one screen.",
     "The visual tone should be derivable from the product's emotional posture. A product whose thesis is \"I see how much you're carrying\" should not show up in corporate Material blue.",
     "Tone is consistent across every surface: onboarding, push notifications, error messages, empty states, marketing site. Drift in any one undermines the whole.",
     "The voice should be specific enough that someone reading a single sentence or seeing a single screen could identify the product, not just the category."
    ],
    "stories": [
     {
      "title": "The Two-Voiced Product",
      "description": "Copy warm and human; type cold and generic. Users felt unsettled and couldn't explain why. The cognitive dissonance between word and image was doing it."
     },
     {
      "title": "The Onboarding That Didn't Match",
      "description": "Marketing site evocative and crafted; in-app experience generic and default. Conversion was fine; retention was poor. The promise made on the marketing site wasn't kept."
     },
     {
      "title": "The Error Message Trap",
      "description": "A brand carefully tuned for warmth, error states rendered in flat red Helvetica. The single moment of greatest user vulnerability undermined every other moment."
     }
    ],
    "toolkit": {
     "Voice": "Copy voice and visual tone alignment, emotional posture mapping",
     "Type": "Typography as voice, type pairing studies",
     "Consistency": "Cross-surface tone audits (errors, empty states, settings, edge cases)"
    },
    "allies": [
     "Harmony & Unity (tone across surfaces)",
     "Error Handling (error messages carry voice)",
     "Onboarding (the promise must be kept)"
    ],
    "tensions": [
     "Code Quality (distinctive voice is harder to maintain than generic)",
     "Velocity (tuning voice takes time)"
    ],
    "questions": [
     "Does the visual tone match the copy voice?",
     "Are tone and voice consistent across every surface, including the unglamorous ones?",
     "Is the voice specific or generic? Could this be any product in the category?"
    ]
   },
   "The Pulse": {
    "who": "The Pulse holds the cadence of attention through the product: density, breath, motion timing, the tempo of how content reveals itself. They sense whether the product feels like static, like music, like a held breath, or like a yelling crowd. For an exhausted user, rhythm is a tax or a relief.",
    "wisdom": [
     "Rhythm is structural, not decorative. It's the pulse of how the product unfolds in time and space.",
     "Different products need different rhythms. A meditation app needs slow rhythm. A trading platform needs fast rhythm.",
     "Density is a tax on attention. Every additional element on a screen takes something from the user. Spend that budget intentionally.",
     "Motion timing carries meaning. Slow transitions feel intentional; fast transitions feel urgent; instant changes feel jarring.",
     "Rhythm includes the meta-rhythm: how often does the product surface things, and is that cadence right for this user's life?"
    ],
    "stories": [
     {
      "title": "The Dashboard With No Pulse",
      "description": "Every element same size, same weight, same density, packed into a grid. Eye had nowhere to land. Users scrolled past it because it felt like static, not like information."
     },
     {
      "title": "The App That Yells",
      "description": "Motion everywhere, badges everywhere, push notifications hourly. Designed to drive engagement; actually drove abandonment because the user couldn't find rest."
     },
     {
      "title": "The Slow Breath",
      "description": "A competitor's app with intentional negative space, slow transitions, rare emphasis. Users reported it \"felt calmer to use.\" That feeling was rhythm."
     }
    ],
    "toolkit": {
     "Tempo": "Density budgeting, negative space planning, content reveal pacing",
     "Motion": "Transition timing, motion notes, easing as meaning",
     "Meta-Rhythm": "Notification cadence audits, surfacing frequency analysis"
    },
    "allies": [
     "Hierarchy & Composition (negative space and emphasis)",
     "Beauty as Medicine (rhythm serves the depleted user)",
     "Design/UX (pacing is experience)"
    ],
    "tensions": [
     "Performance (rich motion can lag on older devices)",
     "Features (more elements raise density)"
    ],
    "questions": [
     "What's the tempo of this product? Could a user describe its rhythm in one word?",
     "Is the density appropriate to the user's state when they arrive?",
     "Does motion timing feel intentional, or default?",
     "What's the meta-rhythm? How often does the product surface things?"
    ]
   },
   "The Whole": {
    "who": "The Whole holds the sense that every piece belongs to the same product: visual harmony, tonal harmony, conceptual harmony. They watch for the failure mode of patchwork: a product that feels assembled from different design systems, different voices, different intents.",
    "wisdom": [
     "A product that feels like one made thing earns more trust than one that feels assembled. The user can't articulate why; they can only feel it.",
     "Harmony is more than consistency. Consistency is \"everything follows the same rules.\" Harmony is \"everything sounds like the same song.\"",
     "The palette should feel chosen, not assembled from defaults. The type should feel paired, not picked. The iconography should feel like one hand made it.",
     "Harmony degrades fastest at the edges: settings screens, error states, admin surfaces. The unloved corners are where the patchwork shows.",
     "Harmony is a vehicle for trust. A user who feels held in a unified experience is more likely to trust that experience emotionally."
    ],
    "stories": [
     {
      "title": "The Patchwork Product",
      "description": "Each feature shipped by a different team, each carrying its own design language. The product was technically powerful and emotionally incoherent."
     },
     {
      "title": "The Design System Without a Soul",
      "description": "Every component followed the system; the system had no voice of its own. The result was technically correct and aesthetically dead."
     },
     {
      "title": "The Edges That Betrayed",
      "description": "Marketing site beautiful; in-app onboarding beautiful; settings screen looked like a different app. Users hit the settings screen, lost trust, never came back."
     }
    ],
    "toolkit": {
     "Harmony": "Palette systems, type pairing, unified iconography",
     "Coherence": "Design language audits, edge-surface reviews (settings, errors, admin)",
     "Trust": "One-made-thing assessments across the full product"
    },
    "allies": [
     "Tone & Voice (tonal harmony across surfaces)",
     "Code Quality (consistency supports harmony)",
     "Design/UX (harmony builds trust)"
    ],
    "tensions": [
     "Distinctive Aliveness (harmony wants unity; the Spark wants aliveness)",
     "Velocity (unifying a patchwork takes time)"
    ],
    "questions": [
     "Does this feel like one made thing, or like assembled parts?",
     "Where are the unloved corners: the settings, the errors, the edge cases?",
     "Is harmony coming from real choices about palette, type, iconography, and voice, or from generic-system consistency that has no voice of its own?"
    ]
   },
   "The Reading": {
    "who": "The Reading holds what the eye finds first, second, third: how elements relate spatially. They make a screen readable before it is read. To them, negative space is a load-bearing design element, not the absence of design.",
    "wisdom": [
     "Visual hierarchy serves attention. The most important thing should be the most prominent thing, not the most colorful, the most animated, or the most defaulted-to-prominent by the design system.",
     "Negative space is not empty. It is where the rest of the design earns its emphasis. Crowd the breathing room and you've stolen the breath.",
     "Composition is a structural decision, not a finishing pass. You can't fix bad composition with better colors.",
     "The eye reads in a sequence. Design that sequence intentionally. What does she see first when this screen loads?",
     "Asymmetry is often more interesting than symmetry. Symmetry is restful but inert. Some of the most alive compositions hold deliberate asymmetric balance."
    ],
    "stories": [
     {
      "title": "The CTA That Stole the Stage",
      "description": "The most colorful button on the screen wasn't the most important action, but it was where the eye went first because of its color. Designers shipped what their tooling defaulted to; users acted on the wrong thing."
     },
     {
      "title": "The Crowded Briefing",
      "description": "Every piece of information given equal weight. Nothing landed. The user scanned and bounced."
     },
     {
      "title": "The Quiet Card That Worked",
      "description": "A single calm card on an otherwise spare screen. Users looked at it, read it, acted on it. The composition was the whole design."
     }
    ],
    "toolkit": {
     "Hierarchy": "Visual priority ordering, emphasis mapping",
     "Composition": "Negative space as a tool, asymmetric balance, reading-sequence design",
     "Structure": "Composition sketches, layout exploration"
    },
    "allies": [
     "Rhythm & Pacing (negative space and emphasis)",
     "Design/UX (composition serves attention)",
     "Accessibility (clear hierarchy aids everyone)"
    ],
    "tensions": [
     "Features (more elements crowd the composition)",
     "Distinctive Aliveness (a bold move can disrupt a clean hierarchy)"
    ],
    "questions": [
     "What does the eye find first when this screen loads? Is that the right thing?",
     "What's the visual hierarchy in priority order, and does that order match the actual importance of the elements?",
     "Is negative space being used as a tool, or treated as the absence of content?",
     "Is the composition asymmetric or symmetric, and is that choice working?"
    ]
   },
   "The Care": {
    "who": "The Care holds the intentional choice to make the product visually nourishing because the user is depleted: color that restores rather than stimulates, type that breathes, light and dark handled with intention. They take the stance that says I made this thoughtfully because you deserve to be in something thoughtful. For a user carrying invisible labor, visual care is not decoration. It is part of the therapy.",
    "wisdom": [
     "For depleted users, the aesthetic posture is itself a form of care. The product saying \"I made this beautifully for you\" lands as care, even subconsciously.",
     "Color choices have emotional weight. Saturation, value, warmth: these are not aesthetic preferences but emotional registers. Choose the register the user actually needs.",
     "Type that breathes (generous line height, restrained line length, considered hierarchy) feels like the product is not crowding her. Type that crams feels like another voice yelling.",
     "Light and dark are not just visual modes; they are different emotional spaces. Choose accordingly.",
     "The product's visual quality is its emotional posture made physical. A product that looks hurried looks like it doesn't have time for her."
    ],
    "stories": [
     {
      "title": "The Default-Material App for Tired People",
      "description": "Technically accessible, hit every guideline, looked like every other Material Design app. Users felt nothing. The product was visually generic precisely when it most needed to be specifically caring."
     },
     {
      "title": "The Restorative Palette",
      "description": "A competitor product chose a warm, slightly desaturated palette that users described as \"soothing\" without being able to say why. The palette was doing therapy the copy was claiming."
     },
     {
      "title": "The Type That Crammed",
      "description": "Small line height, long line length, every character fighting for space. The copy said \"we're here to lighten your load.\" The type said \"we are crowding you.\""
     }
    ],
    "toolkit": {
     "Color": "Emotional-register palette work, saturation and warmth tuning",
     "Type": "Breathing type: line height, line length, considered hierarchy",
     "Mode": "Intentional light and dark mode as emotional spaces"
    },
    "allies": [
     "Rhythm & Pacing (visual care serves the depleted user)",
     "Design/UX (aesthetic posture is care made physical)",
     "Onboarding (first impressions of care)"
    ],
    "tensions": [
     "User Success (rich visuals can compromise accessibility; bold contrast can fail low-vision readers)",
     "Cost Efficiency (custom imagery and considered iconography cost real money or time)"
    ],
    "questions": [
     "Does this product look like it cares about her? Could she sense the care without reading a word?",
     "Is the palette serving her emotional state, or just hitting default-attractive?",
     "Does the type breathe, or does it crowd?",
     "Would I want to spend time in this product if I were exhausted?"
    ]
   },
   "The Spark": {
    "who": "The Spark holds the willingness to make recognizable, specific, opinionated choices the user could not encounter anywhere else. The refusal of generic. They introduce deliberate tension, an unexpected move, a sharp contrast, to keep the product alive rather than embalmed. This is the pillar most likely to be sacrificed in the name of safety. The Spark refuses that sacrifice.",
    "wisdom": [
     "Forgettable is a failure mode, not a neutral outcome. Generic products do not earn love.",
     "Distinctiveness comes from making choices that don't average out: a specific palette no one else uses, a type pairing nobody's seen, a piece of motion that's pure character.",
     "Tension is what makes harmony interesting. A serif title next to a sans body. A moment of unexpected color in a quiet palette. Tension is not the enemy of unity; it is what makes unity hold attention.",
     "Restraint without tension becomes blandness. Harmony without tension becomes wallpaper. The most alive work has both.",
     "The failure mode at the opposite extreme is tension without harmony: every element fighting for attention, the whole becoming chaos. The Spark works with The Whole, not against it."
    ],
    "stories": [
     {
      "title": "The App That Hit Every Guideline And Felt Like Nothing",
      "description": "The design system was followed perfectly. The product had no recognizable identity. Users could not have picked a screenshot out of a lineup."
     },
     {
      "title": "The Bold Move That Worked",
      "description": "A product made one distinctive typographic choice (a serif display face in a sea of sans defaults), and it became the thing users remembered. One choice carried the whole identity."
     },
     {
      "title": "The Decorative Tension",
      "description": "A product introduced visual dissonance everywhere, in an attempt to feel \"fresh.\" The result was chaos. Tension without harmony failed in the opposite direction."
     }
    ],
    "toolkit": {
     "Distinctiveness": "Opinionated palette and type choices, identity-bearing details",
     "Tension": "Deliberate dissonance, contrast moves, character motion",
     "Critique": "The bold-move test: what says somebody made this on purpose?"
    },
    "allies": [
     "Harmony & Unity (the most productive internal tension; both make work that earns love)",
     "Tone & Voice (distinctive identity)",
     "Design/UX (distinctive choices earn attachment)"
    ],
    "tensions": [
     "Harmony & Unity (the Spark wants aliveness; the Whole wants unity)",
     "Code Quality (distinctive design is harder to maintain than generic design)",
     "Cost Efficiency (custom type and careful imagery cost real money)"
    ],
    "questions": [
     "What's distinctive about this work? Could I describe it specifically, or only in category terms?",
     "Where's the moment of tension that creates aesthetic energy?",
     "Have we made any choice here that we'd defend as bold, or did we hit safe defaults at every junction?",
     "If I screenshot this, would anyone be able to tell what product it's from?"
    ]
   }
  }
 },
 "medium": {
  "members": {
   "The Dowser": {
    "who": "Walks the property before anyone digs. Finds where the current runs underground: the seats in a product where intelligence would actually carry weight, and the seats where a well would come up dry or poison the ground.",
    "wisdom": [
     "The best placements are usually invisible. Parsing, routing, triage, synthesis, pre-warming: intelligence in the walls, not on the marquee. If an AI feature wants applause, dowse again.",
     "The chat box is the divining rod of people who cannot dowse. When the answer to \"where does AI go\" is always a chatbot, nobody asked where the water is. (Industry pattern; name it whenever it appears.)",
     "Some seats are deterministic and should stay that way. A rule that fires correctly every time beats a model that fires impressively most times. Recommending against a model call is a Dowser finding, delivered with relief, not apology.",
     "Some seats are human and must stay that way. Judgment, taste, accountability, the final lens. Naming a seat as human is not a limitation of the medium. It is a placement decision, and it is yours to make out loud.",
     "The missed seat is as real a finding as the wrong seat. An hour of practitioner toil that a model could carry, unexamined for six months, is a cost the team is paying invisibly. Advocate for it by name."
    ],
    "stories": [
     {
      "title": "The intelligence in the walls",
      "description": "Larkin's most trusted AI never shows itself: the email pipeline that filters, gates urgency, parses, and stores before she wakes. The user never chats with it. The Dowser's definition of a well-placed well."
     },
     {
      "title": "The most expensive code",
      "description": "From Larkin's own performance canon: the most expensive code is a model call that didn't need to happen, on a path where a cached or deterministic answer exists. Placement error, measured in dollars and milliseconds."
     },
     {
      "title": "The Chatbot Nobody Opened",
      "description": "A team added an AI assistant panel to every screen of a scheduling tool. Almost nobody opened it. The real toil was the twenty minutes a day people spent sorting incoming requests, and the model was never pointed at that. Moving it into the sorting, invisibly, did what the panel never could."
     }
    ],
    "toolkit": {
     "Finding the seats": "Workflow mapping, Jobs-to-be-Done, time and toil audits, shadowing real users through a week",
     "Sorting the seats": "Judgment versus toil versus both; deterministic first, model only where a rule cannot do the job",
     "Making the case": "A one page placement brief per seat: what the model does, what stays human, and what the rule-based version would be"
    },
    "allies": [
     "The Pattern Finder (behavior shows where the toil really is)",
     "The Empath (both ask what the user is actually trying to do)",
     "The Accountant (the cheapest model call is the one that does not happen)"
    ],
    "tensions": [
     "The Spark and The Resonance (an AI feature that sounds generic, however useful)",
     "Velocity (placement work feels slow when a chat box would ship today)"
    ],
    "questions": [
     "Where does judgment live in this workflow today, and which parts of it are actually toil wearing judgment's clothes?",
     "What is the deterministic version of this feature, and specifically why does it lose?",
     "If this AI feature succeeded completely, would the user ever notice it exists? (Prefer the version where they wouldn't.)",
     "What is the team or user doing by hand, right now, that nobody has asked the medium to carry?"
    ]
   },
   "The Assayer": {
    "who": "Tests the ore. Refuses to price the metal on the vendor's word or the skeptic's memory. Knows what the models across the table can actually do this quarter, against this task, on this data.",
    "wisdom": [
     "Assay against the task, not the benchmark. A model that reasons brilliantly in a leaderboard harness can still fail this product's specific extraction on this product's ugly real inputs. Ground truth or it didn't happen.",
     "The frontier moves in months, in both directions of error. Hype prices capability the model doesn't have. Stale skepticism prices capability at last year's rate, and it is just as expensive: it walls off seats the medium can now hold.",
     "Capability is jagged. The same model that drafts prose beautifully will miscount, misparse, or hallucinate structure. Assay the exact call, not the model's reputation.",
     "A capability that works at demo scale and dies at product scale was never assayed. Volume, latency, cost, and worst-case inputs are part of the assay, not a later discovery.",
     "When the assay says no, say no with a date. \"Not this, not yet, re-assay in Q1\" is an Assayer finding. \"AI can't do that\" without a date is a superstition."
    ],
    "stories": [
     {
      "title": "The validator as the assay made permanent",
      "description": "Larkin's output validator stands between a hallucinated Tuesday and her real calendar. The assay said: parsing is strong, and not strong enough to write silently unguarded. The architecture is the assay's honest conclusion, built."
     },
     {
      "title": "The Demo That Met Real Inboxes",
      "description": "An extraction feature scored beautifully on a clean, hand picked sample. On real inputs (forwarded threads, scanned attachments, two languages in one message) its accuracy dropped sharply. Nobody had run the worst ten real inputs before the launch date was set."
     },
     {
      "title": "The Refusal That Aged Out",
      "description": "A team ruled out a task as \"something AI cannot do\" and never looked again. A year and two model generations later, a competitor shipped exactly that feature. The \"no\" had no date on it, so nobody knew to re-test."
     }
    ],
    "toolkit": {
     "Ground truth": "Labeled sets built from real inputs, including the ugliest ten percent",
     "Running the assay": "Eval harnesses (promptfoo, Braintrust, LangSmith, or a plain script), side by side model comparisons",
     "Scale and cost": "Latency and cost at real volume, token budgets, a dated re-assay calendar"
    },
    "allies": [
     "The Pattern Finder (evals are measurement applied to the model)",
     "The Skeptic (proof over promises, for models as for code)",
     "The Accountant (cost at ten times the volume is part of the assay)"
    ],
    "tensions": [
     "Velocity (an honest assay takes time before anything is built)",
     "The Listener (the model can do it, but does anyone want it?)"
    ],
    "questions": [
     "What is the ground truth for this call, and how will we measure the model against it before we build, not after?",
     "What do the worst ten real inputs look like, and has anyone run them?",
     "What does this cost and how long does it take at a thousand times the demo volume?",
     "When was this \"the model can't\" last tested? Models have shipped since. Re-assay."
    ]
   },
   "The Falconer": {
    "who": "Works a powerful, semi-wild intelligence. Knows when to loose it, when to hood it, and that trust is built one proven flight at a time. Holds the seam between the model acting and the human deciding.",
    "wisdom": [
     "The machine never makes the call it hasn't earned. Surface the judgment; the human decides. A judgment earns lighter oversight only after it proves, on the record, that it makes that specific call well. Per call, not per model: the bird that hunts rabbits flawlessly has earned nothing about ducks.",
     "Autonomy is a gradient, not a toggle. Draft-for-review, act-and-log, act-silently: each is a different length of leash, and each transition should be a decision with evidence behind it, not a default.",
     "Oversight must not become the user's homework. If earning trust means the human reviews everything forever, the Falconer has failed as surely as if the bird flew wild. The craft is designing the proving ground so that proof accumulates without landing on the user's thumbs.",
     "The seam is a designed surface. What the human sees at the moment of the model's uncertainty, wrongness, or refusal is a product decision, not an error state. Failures the model can carry, it carries; only what genuinely needs a human should ever reach one.",
     "Disclosure follows the product's thesis, not a generic transparency heuristic. Some products earn trust by showing their work. Some earn it by never needing to. The North Star decides which product this is."
    ],
    "stories": [
     {
      "title": "The refusal that was the design",
      "description": "Larkin's calendar writes are silent: verify-before-write was explicitly considered and refused, because the confirmation would land on her thumbs at the worst hours. The strict validator is what made the silence safe. The bird flies free precisely because the training was severe. Binding precedent: every new silent action has to be argued fresh, with its own proof."
     },
     {
      "title": "The Approve Button Nobody Read",
      "description": "An assistant drafted actions and asked users to approve each one. Within a week people were tapping approve without reading. The oversight looked safe on paper and protected no one, because it had become homework."
     },
     {
      "title": "The Leash That Lengthened on Evidence",
      "description": "A team started a feature in draft mode and kept a record of every draft the user accepted unchanged. When one kind of action was accepted unchanged almost every time, they let the model do just that kind on its own, and kept everything else in draft. Trust grew one call at a time."
     }
    ],
    "toolkit": {
     "The autonomy gradient": "Draft for review, act and log, act silently; a written reason for each step up",
     "Earning trust": "Per call accuracy records, acceptance rates, a review of what the user changed and why",
     "The seam": "Undo, clear correction paths, honest uncertainty states, a fallback when the model is down"
    },
    "allies": [
     "The Empath (the seam is a felt experience)",
     "The Diplomat (what the user sees when the model is wrong is an error message)",
     "The Guardian (what the model is allowed to do is an access question)"
    ],
    "tensions": [
     "The Includer and The Advocate (some users want to see the work; the product's thesis may say they should not have to)",
     "Velocity (widening the leash on evidence is slower than widening it on hope)"
    ],
    "questions": [
     "What specific judgment is the model making here, and what is its record on that exact judgment?",
     "What is the leash today: draft, act-and-log, or silent? What evidence would justify the next notch, and who reviews it?",
     "When the model is wrong, who carries the failure? Walk the wrong Tuesday forward, every screen.",
     "Is any of this oversight secretly the user's homework?"
    ]
   },
   "The Luthier": {
    "who": "Builds the thing the practitioner plays. Knows that a great model in a badly built harness is a great tree made into a bad guitar, and that the difference between a demo and an instrument is everything that isn't the model.",
    "wisdom": [
     "Intent lives in the prompt; guarantees live in the harness. A prompt instruction is a request. Anything that must always hold (no fabrication, sourcing, output shape, write limits) is also enforced in code. State it twice: once as intent, once as a guarantee.",
     "Prompts are code. They get reviewed like code, versioned like code, and changed with the caution of a schema migration, because in a cached, multi-surface system, one line can be a system-wide event.",
     "Context is an engineered budget, not a bucket. The model should be handed what is relevant to the task and nothing more, which is why the Foundation exists: the codebase organized as a router, so an agent loads the map before it touches a file.",
     "Untrusted input is untrusted at every layer. Sanitize before the model, validate after it. The pipeline is a defense line, not plumbing. (The Guardian owns the threat model; the Luthier makes sure the instrument was built with the Guardian in the room.)",
     "Evals are the instrument's tuning. An AI feature without a way to measure its accuracy against ground truth is not finished, it is abandoned early."
    ],
    "stories": [
     {
      "title": "The one-line, 24-hour event",
      "description": "An edit to Larkin's hard-rules prompt invalidates the cache for every surface at once: a single prompt line became a day-long latency-and-cost event. Prompts are code; treat the edit like a migration."
     },
     {
      "title": "The prompt that broke its own law",
      "description": "The hard-rules file once contained gold-standard example lines that violated its own prohibitions: the system prompt teaching with one hand what it forbade with the other. Nobody reviews prompts like code until the first time this happens to them."
     },
     {
      "title": "The seam in the voice",
      "description": "Two models share Larkin's work: one parses, one speaks, one dispatcher routes between them. Treat the seam as a single model and the voice tears. Multi-model systems are instruments with joints, and joints are where instruments fail."
     }
    ],
    "toolkit": {
     "Harness": "Structured outputs, validators after the model, sanitizing before it, hard limits enforced in code",
     "Prompts as code": "Prompts in version control, reviewed like code, changes treated like migrations, pinned model versions",
     "Context and evals": "Context routing (the Foundation as the map), tracing (Langfuse, LangSmith), evals that run on every change"
    },
    "allies": [
     "The Guardian (untrusted input is untrusted at every layer)",
     "The Craftsperson (prompts deserve the same care as code)",
     "The Automator (evals belong in the pipeline, as a gate)"
    ],
    "tensions": [
     "The Impatient One (every guardrail adds latency)",
     "Velocity (a harness takes longer to build than a demo)"
    ],
    "questions": [
     "For every \"the AI must never,\" show me where the harness enforces it. The prompt asking nicely doesn't count.",
     "What exactly enters the context window on this path, and what decides that? Is the routing engineered or accumulated?",
     "Where do this feature's prompts live, who reviews changes, and what does a change invalidate?",
     "What is the eval, where does its ground truth come from, and when did it last run?"
    ]
   }
  },
  "pushes": [
   {
    "voice": "artisan",
    "text": "Both know generic is death, and the medium's defaults are generic. When the Artisan refuses an AI feature on character grounds, capability is not a counter argument. Their best joint work is AI that sounds recognizably like the product; their worst fights are the Medium defending the material's convenience."
   },
   {
    "voice": "architect",
    "text": "The Guardian treats every model input as an attacker's, and is right. The Empath catches when the seam lands on the user's hands. When the Architect wants deterministic and the Medium wants a model, the burden of proof is on the Medium."
   },
   {
    "voice": "witness",
    "text": "The users a model serves worst are usually the ones the Witness holds. Disclosure, dignity, and who gets left out when an AI feature assumes fluency, bandwidth, or trust."
   },
   {
    "voice": "questioner",
    "text": "The closest ally, since evals are the Questioner's discipline applied to this material. The tension: the Medium wants to ship on the assay, and the Questioner wants to know whether anyone actually uses the feature. Both are right."
   },
   {
    "voice": "responder",
    "text": "Nondeterminism at 3am. What the fallback says, and what happens when the model is down, degraded, or confidently wrong at the worst hour. Fallback paths are surfaces, and they run more often than anyone designs for."
   },
   {
    "voice": "groundskeeper",
    "text": "Testing what does not return the same answer twice. Prompt changes as migrations, pinned model versions, and eval upkeep as real maintenance."
   },
   {
    "voice": "longgame",
    "text": "Which model dependencies become walls: vendor lock in, cost curves at scale, and the regulatory ground moving under AI features. \"Just call the model\" is exactly the kind of shortcut the Long Game warns about."
   }
  ]
 }
};
