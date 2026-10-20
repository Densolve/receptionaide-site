/* ReceptionAide public pricing. The one home for public prices (business/facts.md points here).
   Source of the structure: research/pricing/2026-10-13-pricing-design-final.md in the private ReceptionAide folder.
   The "-draft" suffix comes off the version when Jaron and Blake sign off. Prices are in US dollars and identical in every industry. */
window.RA_PRICING = {
  version: "2026-10-15",
  booking: "https://api.leadconnectorhq.com/widget/booking/zF5lnnLqKPt5QJeqKkJN",
  annualLabel: "Founding client offer, first five clients",
  minutesPerCall: 3,
  overagePerMinute: 0.25,
  overagePerText: 0.05,
  trustLine: "It says it is an AI receptionist on every call, and every call starts with a recording notice.",
  usage: "A minute is the whole call from answer to hang-up, rounded up per call. A text is one message of up to 320 characters, sent or received. Talk-in-browser minutes count inside your plan's minutes. Bookings, records, recordings, the weekly report, team alerts and logins are not metered. Beyond your allowance: $0.25 a minute and $0.05 a text, itemized on your next ReceptionAide invoice. One invoice, no separate carrier bill. Above 10,000 texts a month, texting is priced in your agreement at a stated per-text rate instead of the per-text overage. We tell you when a month passes 80 percent of your allowance; if you pass it two months in a row we call, and you choose what changes.",
  annualNote: "The Founding client offer, for our first five clients, who keep it for as long as they stay: Book and Track, Team and Review and Connect can be paid yearly, pay for 11 months and get 12, and on Book and Track and Team and Review the yearly plan also waives the build fee. Answer is billed monthly. Options are billed monthly, except the annual fair housing review.",
  buildCovers: {
    shared: ["Your number, identity and texting verification", "Your information loaded into the receptionist", "Greeting, routing, urgent-call and transfer rules, in English and Spanish (other languages as an option)", "Test calls against our checklist", "Go-live on a written date"],
    note: "Email goes out from your own domain once you approve one DNS record; until then it sends from a ReceptionAide address. Texting is live within days on a toll-free line; a local texting number registers under your business in one to three weeks, started on day one."
  },
  enterprise: { title: "Larger builds", text: "Centers and offices with more than one department or specialist receptionist behind a triage receptionist, outbound calling campaigns, a membership program, or more than 10,000 texts a month are quoted as an enterprise agreement after a scoping visit: builds from $9,997, priced line by line from a written scope; service from $1,997 a month on a twelve-month term. Each system is demonstrated live against a written acceptance checklist before go-live. Outbound calling campaigns are scoped per client and need consent captured at intake." },
  tiers: [
    { id: 1, key: "answer", name: "Answer", tagline: "Your phone answered.", monthly: 297, build: 497, annualMonths: null, minutes: 500, texts: 300,
      who: "An office that mainly needs calls answered, sorted and passed on.",
      features: ["Answers and routes your calls, 24/7 or when your team cannot pick up", "Answers only from information you approve", "Urgent calls reach a person", "Each call summarized to your inbox"],
      more: ["Takes messages and texts callers your links (directions, forms, portal) instead of reading them out", "Transfers anyone who asks for a person; anything outside your information goes to a person", "A weekly summary email of what the receptionist handled", "Each call summarized to your inbox with a link to the recording in your account", "Multilingual: English and Spanish are included on every plan on one line; other languages are added as an option", "Call monitoring is automatic: recordings, per-call summaries and the weekly report"],
      buildAdds: ["Property management builds: the fair housing answer library and a 40-call test set"], goLive: "Target go-live about two weeks after we receive your information, confirmed as a written date on your call." },
    { id: 2, key: "book", name: "Book and Track", tagline: "Booked and on record.", monthly: 497, build: 1247, annualMonths: 11, buildWaivedOnAnnual: true, minutes: 1000, texts: 1000, recommended: true, badge: "Recommended",
      who: "An office that wants appointments booked and callers kept in one searchable record, without adding staff to do it.",
      features: ["Books into your calendar and confirms by text", "Keeps callers in one record, with your own login", "Takes repair, quote or intake requests", "The same receptionist by text and on your website"],
      more: ["Reschedule links in every confirmation", "Lists your team works from: who called, why, what happened, the recording", "Requests taken one item at a time and read back before filing", "A secure payment link or a document for e-signature by text, filled from the call, through your own payment account (card numbers are not taken by voice)", "Talk to it on your website in chat or by voice; talk-in-browser minutes count inside your plan's minutes", "Your own login: inbox, records, calendar, recordings and transcripts, with a 30-minute walkthrough at go-live"],
      buildAdds: ["Calendars and booking rules", "The caller record and lists, with your logins and a walkthrough", "The text and website assistant", "Your request scripts, payment link and e-signature templates"], goLive: "Target go-live about three weeks after we receive your information, confirmed as a written date on your call." },
    { id: 3, key: "team", name: "Team and Review", tagline: "Your crew texted, a person reviewing calls.", monthly: 747, build: 1997, annualMonths: 11, buildWaivedOnAnnual: true, minutes: 2000, texts: 2000,
      who: "An office with a crew in the field, more than one line, and a manager who wants a person checking the calls.",
      features: ["Texts your team when a caller confirms a request", "Texts callers back: reminders, missed-call text-back", "A person reviews calls each month and tunes it", "A second line on the same account"],
      more: ["A second line on the same account (a location with its own staff, calendars and records is an additional location, priced under Advanced)", "Consent and quiet hours built into every text", "Human call review is about an hour a month against our checklist, with notes to you", "The receptionist itself stays managed by us"],
      buildAdds: ["Team-alert and text-back workflows with consent and quiet hours", "The second line", "The review checklist tuned to your line, and a first review"], goLive: "Target go-live about four weeks after we receive your information, with carrier verification running alongside." },
    { id: 4, key: "connect", name: "Connect", tagline: "Built to work inside the software you already run.", monthly: 997, build: 4997, buildFrom: true, scoped: true, annualMonths: 11, minutes: 3000, texts: 3000,
      who: "An office that wants the receptionist working inside the software it already runs, with no per-minute worry on incoming calls and a named person on its account.",
      features: ["A connection to your software, scoped and built per client", "High-volume inbound included: up to 3,000 minutes", "A named contact for your account", "A quarterly review of what the receptionist handles"],
      more: ["What scoping produces: which system and which direction (for example a repair request becoming a work order, or live listings read during the call)", "What your software's plan allows: we check whether it lets outside tools connect and tell you before you sign", "The price of the connection, in writing, before you sign; any fee your software vendor charges for access is yours to approve first", "A live-call proof of the connection before go-live", "Invoiced by bank transfer; card accepted"],
      scopedNote: "The build is quoted after a scoping call, from $4,997, in writing before you sign. What the step buys: a scoping session with a written connection spec, a live-call proof before go-live, and a named contact for your account.",
      buildAdds: ["A scoping session and a written connection spec", "The connection, built and proven on a live call"], goLive: "Go-live date set at scoping." }
  ],
  addonGroups: [
    { key: "reach", label: "Reach", addons: [
      { key: "outbound_texting", name: "Outbound text messaging", desc: "Texts we start without a caller asking: reminders, missed-call text-back, follow-ups and review requests, with consent and quiet hours built in. Adds 1,000 texts to your allowance. Not a marketing blast tool.", monthly: 67, oneTime: 0, minTier: 1, includedFrom: 3 },
      { key: "team_texting", name: "Text your team", desc: "Job details, repair requests or room issues texted and emailed to your own staff as soon as a caller confirms, with what they need to act.", monthly: 47, oneTime: 0, minTier: 1, includedFrom: 3 },
      { key: "whatsapp", name: "WhatsApp chat", desc: "Customers message your business number on WhatsApp and get the same receptionist. Includes 1,000 service and reply messages a month; beyond that, and for any marketing template, Meta's per-message fee is added at Meta's rate. You need a Meta Business account in your name; Meta's review can take several weeks and nothing else waits on it.", monthly: 47, oneTime: 0, minTier: 2, industries: ["property_management", "hotels", "other"] }
    ]},
    { key: "insight", label: "Insight", addons: [
      { key: "call_monitoring", name: "Human call review", desc: "A named person at ReceptionAide reviews the calls the receptionist marks plus a sample each month, about an hour against our checklist, tunes the receptionist and sends you the notes. Automatic call monitoring (recordings, summaries, the weekly report) is on every plan.", monthly: 197, oneTime: 0, minTier: 1, includedFrom: 3 },
      { key: "fair_housing_review", name: "Annual fair housing review", desc: "Once a year we review your fair housing answer library, re-run the 40-call test, update what changed, and your broker signs off again.", monthly: 0, oneTime: 0, yearly: 747, minTier: 1, industries: ["property_management"] }
    ]},
    { key: "volume", label: "Volume", addons: [
      { key: "high_volume_inbound", name: "High-volume inbound", desc: "No per-minute charge on incoming calls to your line, up to 3,000 minutes a month (about 1,000 calls). Pays for itself above about 1,500 minutes a month on Answer and about 2,000 on Book and Track. Above 3,000 minutes, $0.25 a minute, and we call to see whether a different plan fits better. For normal incoming calls from the public to one business location, no automated or bulk traffic. Offered on Answer and Book and Track; Team and Review includes 2,000 minutes and Connect includes this option.", monthly: 247, oneTime: 0, minTier: 1, maxTier: 2, includedFrom: 4 }
    ]},
    {
       "key": "compliance",
       "label": "Compliance",
       "addons": [
        {
         "key": "hipaa",
         "name": "HIPAA package",
         "desc": "Encrypted handling of patient information, logging of recording access, two-step sign-in on every login, staff alerts that carry no patient details, and a documented retention purge to the window you choose. HIPAA compliance requires review by a HIPAA attorney. Every business associate agreement is reviewed and signed off by a HIPAA attorney before the first patient call, at an additional cost, estimated at $2,500 to $7,500. 12-month term.",
         "monthly": 447,
         "oneTime": 747,
         "minTier": 1,
         "industries": [
          "medical"
         ],
         "term": "12-month term"
        }
       ]
      },
    { key: "advanced", label: "Advanced", advanced: true, addons: [
      { key: "custom_voice", name: "Custom voice", desc: "A voice recorded by a speaker you choose, or an imported professional voice, with the speaker's signed consent, tuned for your line. A voice from our standard library is included in every plan. The one-time fee covers the recording session and consent paperwork; the monthly fee keeps the voice licensed for your line. Available on every plan.", monthly: 27, oneTime: 497, minTier: 1 },
      { key: "second_language", name: "Other languages", desc: "The receptionist is multilingual. English and Spanish are included on every plan on one line, switching mid-call. Each other language is added as a dedicated receptionist callers reach on the same number, built and tested with you on live calls before it goes live. Per additional language.", monthly: 97, oneTime: 497, minTier: 1, qty: true, max: 4 },
      { key: "additional_line", name: "Additional line", desc: "Another number on the same account and team, with its own greeting, hours and routing: a second office line, a property line, a provider line or an after-hours line, sharing your plan's minutes and records. One additional line is included from Team and Review; more are priced here.", monthly: 47, oneTime: 197, minTier: 1, qty: true, max: 10, includedQtyFrom: 3, includedQty: 1 },
      { key: "additional_location", name: "Additional location", desc: "A separate property, office or shop location with its own staff, calendars, number and records, built as a copy of your first setup. Half your plan's monthly price, with a $247 minimum, and half its minutes and texts. Its calls are part of the same monthly review.", monthly: 0, monthlyByTier: { 1: 247, 2: 247, 3: 377, 4: 497 }, oneTime: 747, minTier: 1, qty: true, max: 10 },
      { key: "web_widget", name: "Website chat and talk-in-browser voice", desc: "The same receptionist on your website as a chat window and a talk button, answering from the same information. Included from Book and Track; priced here only for Answer.", monthly: 47, oneTime: 0, minTier: 1, includedFrom: 2 }
    ]}
  ],
  industries: [
    { key: "property_management", label: "Property management", intro: "Built first for property managers: emergencies routed, tours booked, repair requests filed and texted to your crew, resident, renter and owner calls in one record. Fair housing rules are built into every answer library and tested before go-live.",
      demoLine: { label: "Hear it before you choose. Call the property management demo line:", number: "(855) 825-0564", site: "/property/" },
      recommendedReason: "for offices that book tours and file repair requests",
      requiredAddons: [],
      tierFeatures: {
        1: ["Answers resident, renter and owner calls around the clock", "Emergencies go to your on-call line first", "Answers only from your approved policies and listings", "Each call summarized to your inbox, links texted"],
        2: ["Books tours or sends your showing link", "Files repair requests, read back before filing", "Residents, renters and owners in one record, with your own login", "The same receptionist by text and on your website"],
        3: ["Texts your maintenance crew when a resident confirms", "Texts missed callers back, sends tour reminders", "A person reviews calls each month and tunes it", "A second office line on the same account"],
        4: ["Repair requests into your property management software (built to order after a scoping call)", "Listings read from your software (built to order; today we re-sync your listings page on a set schedule)", "High-volume inbound included: up to 3,000 minutes", "A named contact and a quarterly review"]
      },
      questions: [
        { q: "What should the receptionist do with a repair request or a tour inquiry?", answers: [
          { label: "Take a message, text the caller our portal and listing links, and my team follows up", minTier: 1 },
          { label: "Book the tour on a calendar, file the repair request properly, and keep callers in one record", minTier: 2 },
          { label: "All of that, and text my maintenance crew or leasing agent as soon as the caller confirms", minTier: 3 },
          { label: "All of that, and create the work order in my property management software", minTier: 3, note: "Connecting to your software is scoped on the call. Most offices start on Team and Review and add the connection once it is scoped." } ] },
        { type: "usage", q: "Roughly how many calls and texts a month?", hint: "Drag the sliders. The estimate counts three minutes a call and shows what each plan would bill at that volume, overage included." },
        { q: "Do your offices share one team and one set of records?", answers: [
          { label: "One office", minTier: 1 },
          { label: "Yes, more than one line on the same team and records", minTier: 1, addons: ["additional_line"] },
          { label: "No, separate offices with their own staff", minTier: 1, note: "A second location is set up as its own account; we quote it on the call." } ] },
        { q: "Who needs to see what the receptionist handled?", answers: [
          { label: "Me, by email summary and the weekly report", minTier: 1 },
          { label: "My office staff should log in and see calls, requests and tours", minTier: 2 },
          { label: "I want a person reviewing the calls and tuning it, not only a report", minTier: 1, addons: ["call_monitoring"] },
          { label: "Both: a login for staff and a person reviewing calls", minTier: 2, addons: ["call_monitoring"] } ] }
      ],
      integration: "Works alongside AppFolio, Buildium, Rent Manager, DoorLoop and others. Residents and renters are sent to your portals, listings and showing service today. We check whether your software lets outside tools connect (some plans allow it, some charge for it, some do not offer it) and tell you before you sign; every connection is scoped with you before it is promised.",
      compliance: "We supply the fair housing answer library and run a 40-call test set before go-live; your counsel reviews the library and you sign it off. Calls are recorded with a notice at the start of each call. Rent, fees and deposits are paid through your portal link; the receptionist does not take card or bank details and does not discuss balances, lease terms or who lives where. Resident texts respect quiet hours; staff alerts are exempt." },
    { key: "hotels", label: "Hotels and inns", intro: "For hotels, inns and small resorts: rates and policies answered when the desk is closed or busy, guests sent to your own booking engine by text, room issues to housekeeping as soon as they are reported, English and Spanish on one line.",
      demoLine: { label: "Hear it before you choose. Call the hotel demo line:", number: "(855) 696-4712", site: "/hotel/" },
      recommendedReason: "for properties that send booking links and take shuttle or spa bookings",
      requiredAddons: [],
      tierFeatures: {
        1: ["Answers the reservations line when the desk cannot", "Quotes nightly rates from the rate card you approve", "Transfers to the desk when a caller asks", "Texts your booking link and directions, each call summarized"],
        2: ["Sends guests to your own booking engine by text", "Books shuttle, spa or activity slots on a calendar", "Secure deposit links and photos by text", "Guest calls in one record, with your own login"],
        3: ["Pre-arrival texts and post-stay review requests", "Room issues texted to housekeeping when a guest confirms", "A person reviews calls each month and tunes it", "A second line on the same account"],
        4: ["Live availability from your reservation system (built to order per property after a scoping call)", "Reservations made or changed in your system (built to order)", "High-volume inbound included: up to 3,000 minutes", "A named contact and a quarterly review"]
      },
      questions: [
        { q: "What should happen when a guest calls to book or to ask?", answers: [
          { label: "Answer rates, policies and directions, take a message, transfer to the desk when asked", minTier: 1 },
          { label: "Text the guest our booking link to finish in our own engine, book shuttle or spa slots, send photos and payment links", minTier: 2 },
          { label: "All of that, and let guests text the same number, with room issues sent to housekeeping", minTier: 3, suggest: ["whatsapp"], note: "Add WhatsApp if you host international guests." },
          { label: "All of that, and read live availability from our reservation system or make the reservation there", minTier: 3, note: "Connecting to your reservation system is scoped on the call. Most properties start on Team and Review and add the connection once it is scoped." } ] },
        { type: "usage", q: "Roughly how many calls and texts a month?", hint: "Drag the sliders. The estimate counts three minutes a call and shows what each plan would bill at that volume, overage included." },
        { q: "Do your properties share one team and one set of records?", answers: [
          { label: "One property", minTier: 1 },
          { label: "Yes, two or three run by one team", minTier: 1, addons: ["additional_line"] },
          { label: "No, each with its own staff and system", minTier: 1, note: "A second property is set up as its own account; we quote it on the call." } ] },
        { q: "Who needs to see what the receptionist handled?", answers: [
          { label: "Me, by email summary and the weekly report", minTier: 1 },
          { label: "The GM and front desk should log in and see calls, guests and bookings", minTier: 2 },
          { label: "I want a person reviewing the calls and tuning it, not only a report", minTier: 1, addons: ["call_monitoring"] },
          { label: "Both: a login for the team and a person reviewing calls", minTier: 2, addons: ["call_monitoring"] } ] }
      ],
      integration: "Works alongside Cloudbeds, Apaleo, OPERA Cloud and others. Guests complete reservations in your own booking engine today, so there is no second calendar. We check whether your reservation system lets outside tools connect and tell you before you sign; a connection is scoped per property before it is promised. Our hotel demo checks live room availability from reservation software in a test environment.",
      compliance: "Calls are recorded with a notice at the start of each call. Card numbers are not taken by voice; deposits go through a secure payment link by text or room charge. Rooms are booked in your own engine. Rates, policies and availability come from information you approve. Service animals are not pets and carry no fee. English and Spanish are verified on one line; other languages are added as a dedicated receptionist after a live test." },
    {
       "key": "medical",
       "label": "Medical and telehealth",
       "minTier": 2,
       "intro": "For practices and telehealth providers: patient calls answered with the HIPAA package in place, emergencies first, new patients booked and intake captured for your team to review, consent signed on the patient's phone. The HIPAA package is required and is added to your quote automatically.",
       "demoLine": {
        "label": "Hear it before you choose. Call the Meridian Health demo line (a fictional practice; it takes no real patient calls):",
        "number": "(855) 842-2436",
        "site": "/medical/"
       },
       "recommendedReason": "for practices that book new patients and capture intake",
       "requiredAddons": [
        "hipaa"
       ],
       "noEmailQuote": true,
       "tierFeatures": {
        "1": [
         "Answers patient calls on a recorded line, 24/7",
         "Emergencies first: 911, then your on-call line",
         "Answers from your approved information; symptoms go to staff",
         "Each call summarized inside your HIPAA-enabled account"
        ],
        "2": [
         "Books new patients into a provider calendar",
         "Captures intake for your team to review, with your own login",
         "Consent forms signed on the patient's phone",
         "The same intake assistant by text and on your website"
        ],
        "3": [
         "Reminders and missed-call texts, with consent",
         "Minimal-detail alerts to your team for urgent calls",
         "A person reviews calls each month and tunes it",
         "A second line for a second location or provider"
        ],
        "4": [
         "Identity check before anything personal (built to order; until then the receptionist takes a message for anything personal)",
         "A connection to your practice system (built to order per practice; the agreements that cover your data must cover the connection and its hosting)",
         "High-volume inbound included: up to 3,000 minutes",
         "A named contact and a quarterly review"
        ]
       },
       "questions": [
        {
         "q": "What should happen when a patient calls?",
         "answers": [
          {
           "label": "Answer from our approved information, handle emergencies first, take a message, send clinical questions to staff",
           "minTier": 1
          },
          {
           "label": "Book new patients into a provider calendar, capture intake for our review, send consent forms for e-signature",
           "minTier": 2
          },
          {
           "label": "All of that, and send reminders and missed-call texts with consent, alert our team",
           "minTier": 3
          },
          {
           "label": "All of that, and verify identity and read from or write to our practice system",
           "minTier": 3,
           "note": "Connecting to your practice system is scoped on the call, and the agreements that cover your data must cover the connection first."
          }
         ]
        },
        { type: "usage", q: "Roughly how many calls and texts a month?", hint: "Drag the sliders. The estimate counts three minutes a call and shows what each plan would bill at that volume, overage included." },
        {
         "q": "How many providers and locations?",
         "answers": [
          {
           "label": "One provider, one location",
           "minTier": 1
          },
          {
           "label": "Several providers, one location",
           "minTier": 2,
           "note": "A calendar per provider."
          },
          {
           "label": "More than one location sharing one team and records",
           "minTier": 1,
           "addons": [
            "additional_line"
           ]
          },
          {
           "label": "Separate locations with their own staff",
           "minTier": 1,
           "note": "A second location is set up as its own account; we quote it on the call."
          },
          {
           "label": "Several departments, a membership program, or outbound calls to members",
           "minTier": 1,
           "scoping": true,
           "note": "That is a larger build. It is quoted after a scoping visit, line by line from a written scope."
          }
         ]
        },
        {
         "q": "Who needs to see what the receptionist handled?",
         "answers": [
          {
           "label": "Me, by summary inside the HIPAA-enabled account and the weekly report",
           "minTier": 1
          },
          {
           "label": "My practice manager and staff should log in, with two-step sign-in",
           "minTier": 2
          },
          {
           "label": "I want a person reviewing the calls and tuning it",
           "minTier": 1,
           "addons": [
            "call_monitoring"
           ]
          },
          {
           "label": "Both: a login with two-step sign-in and a person reviewing calls",
           "minTier": 2,
           "addons": [
            "call_monitoring"
           ]
          }
         ]
        }
       ],
       "integration": "Works alongside athenahealth, Tebra, DrChrono, Healthie and others. Today the receptionist books into its own calendar and sends your team structured intake for review; it does not read or write your chart. We check whether your practice system lets outside tools connect and tell you before you sign; a connection is scoped per practice, and the agreements that cover your data must cover the connection and its hosting before it is built.",
       "compliance": "HIPAA compliance requires review by a HIPAA attorney. Every business associate agreement is reviewed and signed off by a HIPAA attorney before the first patient call, at an additional cost, estimated at $2,500 to $7,500. The receptionist gives no medical advice, says it is an AI receptionist on a recorded line at the start of each call, and puts 911 first on emergency language. Staff alerts carry no patient details. Reminders and callbacks go out only with written consent captured at intake. WhatsApp is not offered for patient conversations. Demo lines do not take real patient calls."
      },
    { key: "other", label: "Other small business", intro: "For contractors, home services, salons, shops and professional offices: your line answered while you work, jobs and appointments booked, new callers qualified, your crew texted the details.",
      demoLine: { label: "Hear it before you choose. The demo answers as a property management office; your build answers as your business:", number: "(855) 825-0564", site: "/property/" },
      recommendedReason: "for businesses that book jobs and want every lead on record",
      requiredAddons: [],
      tierFeatures: {
        1: ["Answers your line while you work, 24/7", "Answers only from information you approve", "Urgent calls reach you at any hour", "Each call summarized to your inbox, links texted"],
        2: ["Books jobs or appointments into your calendar", "Qualifies new callers, in one record with your own login", "Takes quote requests with photos by text", "The same receptionist by text and on your website"],
        3: ["Texts your tech or crew the job details", "Texts missed callers back, reminders, review requests", "A person reviews calls each month and tunes it", "A second line on the same account"],
        4: ["Jobs created in your scheduling software (built to order after a scoping call; we check your software's access first)", "Returning customers recognized and routed (built to order)", "High-volume inbound included: up to 3,000 minutes", "A named contact and a quarterly review"]
      },
      questions: [
        { q: "What should happen when someone calls while you are working?", answers: [
          { label: "Answer common questions, send urgent calls to me, take a message", minTier: 1 },
          { label: "Book the job or appointment, qualify the lead, keep callers in one record", minTier: 2 },
          { label: "All of that, and text me or my crew the job details, text missed callers back, send reminders and review requests", minTier: 3 },
          { label: "All of that, and create the job in the scheduling or field-service software I already use", minTier: 3, note: "Connecting to your software is scoped on the call. Most businesses start on Team and Review and add the connection once it is scoped." } ] },
        { type: "usage", q: "Roughly how many calls and texts a month?", hint: "Drag the sliders. The estimate counts three minutes a call and shows what each plan would bill at that volume, overage included." },
        { q: "Do your locations share one team and one set of records?", answers: [
          { label: "One location", minTier: 1 },
          { label: "Yes, two or three, same team", minTier: 1, addons: ["additional_line"] },
          { label: "No, separate locations with their own staff", minTier: 1, note: "A second location is set up as its own account; we quote it on the call." } ] },
        { q: "Who needs to see what the receptionist handled?", answers: [
          { label: "Me, by email summary and the weekly report", minTier: 1 },
          { label: "My office or a partner should log in and see calls, leads and bookings", minTier: 2 },
          { label: "I want a person reviewing the calls and tuning it, not only a report", minTier: 1, addons: ["call_monitoring"] },
          { label: "Both: a login and a person reviewing calls", minTier: 2, addons: ["call_monitoring"] } ] }
      ],
      integration: "We check whether your scheduling or field-service software lets outside tools connect (some plans allow it, some charge for it, some do not offer it) and tell you before you sign; every connection is scoped with you before it is promised. Until then, bookings land in the calendar we set up and callers land in your record.",
      compliance: "Calls are recorded with a notice at the start of each call. Customer texts respect quiet hours; crew alerts are exempt. Review requests go once to everyone eligible after a completed job. Prices are quoted only from a flat-rate list you approve; licensing and insurance are stated only in the wording you verify. Deposits go through a payment link, not by voice." }
  ],
  compare: [
    { label: "Answers and routes calls, 24/7", tiers: [true, true, true, true] },
    { label: "Books into a calendar and keeps one record", tiers: [false, true, true, true] },
    { label: "Website chat and talk-in-browser voice", tiers: ["Add-on $47", true, true, true] },
    { label: "Texts your team and texts callers back", tiers: ["Add-on $114", "Add-on $114", true, true] },
    { label: "Your own dashboard", tiers: [false, true, true, true] },
    { label: "Call monitoring", tiers: ["Automatic", "Automatic", "Plus human review", "Plus human review"] },
    { label: "Connection to your software", tiers: [false, false, false, "Scoped per client"] },
    { label: "Included minutes and texts a month", tiers: ["500 and 300", "1,000 and 1,000", "2,000 and 2,000", "3,000 and 3,000"] }
  ],
  faq: [
    { q: "What does the build fee cover, and why charge one?", a: "The build fee pays for the work before the first call: your number and texting verification, your information loaded into the receptionist, the greeting and routing rules, test calls against our checklist, and go-live on a written date. Higher plans add calendars, records, workflows and logins to that list. It is paid once." },
    { q: "What do I pay beyond the monthly price?", a: "Only the per-minute and per-text rates if you pass your allowance ($0.25 a minute, $0.05 a text, on your next ReceptionAide invoice), Meta's WhatsApp fees past 1,000 messages, card processing on your own payment account, and your software vendor's own fee if you choose a connection. A minute is the whole call, rounded up per call; a text is one message of up to 320 characters, sent or received. We tell you when a month passes 80 percent of your allowance. If you pass it two months in a row we call, and you choose: keep paying the per-minute rate, add High-volume inbound, or move up a plan." },
    { q: "Can I cancel, and what happens to my data?", a: "Monthly plans are month to month with 30 days' notice. Yearly plans run twelve months and renew unless cancelled 30 days before the renewal date. When you leave, you receive your contacts and call summaries as an export within 30 days, and recordings on request." },
    { q: "How long until it is live?", a: "Answer about two weeks after we receive your information, Book and Track about three, Team and Review about four, each confirmed as a written date on your call. Connect is scheduled at scoping. Texting is live within days on a toll-free line; a local texting number registers under your business in one to three weeks, started on day one." },
    { q: "What happens when the receptionist cannot answer a caller?", a: "It transfers to a person when one is available, and otherwise takes a message, texts the caller the right link, and summarizes the call to your inbox. Anything outside the information you approved goes to a person rather than a guess." },
    { q: "Is it a person?", a: "No. It is an AI receptionist, and it says so at the start of every call, along with the recording notice." },
    { q: "What if I want something changed?", a: "Small changes are included on every plan: wording, hours, routing, a new team member, a new listing. Anything over about an hour is quoted first, at $125 an hour or as a fixed mini build, and nothing starts until you say yes." },
    { q: "Why would my quote be larger than the page?", a: "The plans cover one receptionist on one line with a stated allowance of minutes and texts. A center with several departments is built as several receptionists behind one triage receptionist, each with its own calendars, plus any outbound campaigns and the texting volume that goes with them, so the build is priced line by line from a written scope and the agreement prices the usage. That is the Larger builds line under the plans: builds from $9,997 and service from $1,997 a month." },
    {"q":"Do you handle HIPAA?","a":"Yes, for medical and telehealth clients, with the HIPAA package, which is required on every medical quote. HIPAA compliance requires review by a HIPAA attorney. Every business associate agreement is reviewed and signed off by a HIPAA attorney before the first patient call, at an additional cost, estimated at $2,500 to $7,500."},
    { q: "Who sees the recordings and reports?", a: "You, through the weekly report and the summaries in your inbox, and your team through your own dashboard if your plan includes it or you add it. ReceptionAide staff review calls to tune the receptionist. The receptionist itself stays managed by us; your logins are set up to view and work with it." }
  ]
};
