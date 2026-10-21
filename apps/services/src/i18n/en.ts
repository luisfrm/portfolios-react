import type { es } from "./es";

export const en: typeof es = {
  seo: {
    home: {
      title: "Luis Rivas — Web design and development for businesses",
      description:
        "I design and build landing pages, sites and web products for businesses that need a website that works. Five real projects, four for clients, direct communication and one person accountable.",
    },
    services: {
      title: "Services — Luis Rivas",
      description:
        "Landing pages, full sites and web products. Clear scope, deliverables and timelines, with one person accountable end to end.",
    },
    work: {
      title: "Work — Luis Rivas",
      description:
        "Five real projects: an editorial landing page, a site with a CMS, a SaaS platform, a streaming app and a food ordering platform.",
    },
    process: {
      title: "Process — Luis Rivas",
      description:
        "How I work: a call, a fixed proposal, design and build in weeks, and a handoff with code and accounts.",
    },
    about: {
      title: "About — Luis Rivas",
      description:
        "Software engineer with more than six years building web products. Design, code and deployment in the same person.",
    },
    contact: {
      title: "Contact — Luis Rivas",
      description:
        "Tell me what you need. I usually reply within 24 business hours.",
    },
    privacy: {
      title: "Privacy — Luis Rivas",
      description:
        "What data this site receives, who processes it and how to have it deleted. No tracking cookies.",
    },
    thanks: {
      title: "Message received — Luis Rivas",
      description: "Thanks for writing. I'll reply within 24 business hours.",
    },
    notFound: {
      title: "Page not found — Luis Rivas",
      description: "The page you're looking for doesn't exist or has moved.",
    },
  },
  nav: {
    skip: "Skip to content",
    home: "Home",
    services: "Services",
    work: "Work",
    process: "Process",
    about: "About",
    contact: "Contact",
    privacy: "Privacy",
    menu: "Index",
    close: "Close",
    language: "Language",
    languageShort: "ES",
    languageName: "Español",
    footer: "Footer",
    cta: "Let's talk",
    menuMeta: {
      services: "3 formats",
      work: "5 cases",
      process: "How I work",
      about: "Who's behind it",
      contact: "Let's talk",
    },
  },
  ui: {
    talk: "Tell me about the project",
    seeWork: "See the work",
    seeServices: "See services",
    readCase: "Read the case",
    allWork: "See all work",
    backToWork: "Back to work",
    backToHome: "Back to home",
    startProject: "Start a project",
    email: "Email me",
    nextCase: "Next case",
    live: "View live",
    repo: "View code",
    status: "In production",
    statusLabel: "Status",
    statusLive: "Live",
    statusCode: "Code available",
    service: "Format",
    role: "Role",
    stack: "Stack",
    links: "Links",
    overview: "Overview",
    view: "Open",
    client: "Client",
    ownProduct: "Own product",
    outcome: "What changed",
    viewCase: "View case",
    viewService: "View service",
    filterAll: "All",
    filterLanding: "Landing",
    filterSite: "Site",
    filterProduct: "Product",
    price: "Price",
    consult: "On request",
    availability: "Available for new projects",
    whatsapp: "WhatsApp",
    relatedCases: "Related cases",
  },
  home: {
    title: "A website that works overtime.",
    lede: "I design and build landing pages, sites and web products for businesses that need more than a presence. One person, from strategy to deployment.",
    meta: "Design, code and deployment · One person · ES / EN",
    status: "Available for new projects",
    statusShort: "Available for projects",
    kicker: "Design + code · Independent studio",
    titleMark: "works",
    proof: [
      { value: "5", label: "real projects" },
      { value: "3", label: "ways to work together" },
      { value: "ES / EN", label: "bilingual sites" },
      { value: "< 24 h", label: "response time" },
    ],
    servicesTitle: "Pick the size of the problem.",
    servicesLede:
      "Three formats. The same person in all of them: me. No account manager, no handoff to a team you never spoke to.",
    workTitle: "Real work. No mockups.",
    workLede:
      "Five real projects: four for clients and one of my own. Open the live ones or read the code for the rest.",
    workNote: "Filter by format or open them all.",
    processTitle: "What working together looks like.",
    processLede:
      "A short process with dates and decisions in writing. You approve; I build.",
    processNote:
      "If the project doesn't fit any of these formats, I'll tell you on the first call.",
    guaranteesTitle: "What you can count on.",
    guaranteesLede:
      "These aren't marketing promises. They're the rules I work by.",
    guarantees: [
      {
        title: "One accountable person",
        body: "The person who replies is the same one who designs and writes the code. No middlemen.",
      },
      {
        title: "Scope and price in writing",
        body: "Before we start you know what's included, what isn't and when it ships. Surprise hours aren't part of the process.",
      },
      {
        title: "Code and accounts in your name",
        body: "You get the project, not a dependency. Everything is documented so you can keep going without me.",
      },
    ],
    testimonialsTitle: "What the people who own it say.",
    testimonialsLede: "Three projects, three different ways of working.",
    // PLACEHOLDER — replace with real client quotes before publishing.
    testimonialsNote:
      "Sample testimonials, pending replacement with real ones.",
    testimonialFlag: "Sample",
    testimonials: [
      {
        quote:
          "I publish new sessions myself now. I no longer have to ask anyone to touch the code.",
        name: "María R.",
        role: "Photographer · D'Nova Gallery",
        placeholder: true,
      },
      {
        quote:
          "The menu and the orders are managed from the dashboard. The team stopped depending on me for every change.",
        name: "Javier M.",
        role: "Manager · Delivery Los Latinos",
        placeholder: true,
      },
      {
        quote:
          "Operations, billing and access live in the same system. The console lets us see every gym without spreadsheets.",
        name: "Daniel S.",
        role: "Operations · FIT Stack",
        placeholder: true,
      },
    ],
    faqTitle: "Before you write.",
    faqLede: "The questions that usually come up on the first call.",
    faq: [
      {
        question: "What does it cost?",
        answer:
          "Every project is quoted after a call. You get a proposal with a fixed price, deliverables and a timeline. For landing pages, the price depends on scope and what you need to build.",
      },
      {
        question: "How long does it take?",
        answer:
          "A landing page usually takes 2–3 weeks; a full site, 4–6; a product, from 6–10 depending on scope. Dates are agreed in the proposal.",
      },
      {
        question: "Who writes the content?",
        answer:
          "You bring the knowledge; I bring the structure and the copy. If there are no texts, I write them from an interview. I never fill a page with placeholder copy.",
      },
      {
        question: "What happens after delivery?",
        answer:
          "You get the code, the accounts and a handoff session. If you need maintenance or another phase, we agree on it separately.",
      },
    ],
    aboutTitle: "One person, the whole process.",
    aboutLede:
      "The person who replies is the same one who designs and writes the code. Fewer meetings, faster decisions and one owner.",
    aboutLink: "See how I work",
    closingLine: "Have a project in mind?",
    closingText:
      "Tell me the problem in one paragraph. If I can solve it, I'll tell you how and when. If not, I'll still point you in the right direction.",
  },
  services: {
    pageTitle: "Three ways in, one owner.",
    pageLede:
      "I can build a landing page, a full site or a web product. The difference isn't the page count: it's the size of the problem behind it.",
    faqTitle: "Questions that come up.",
    faqLede: "If yours is missing, write to me. No obligation.",
    faq: [
      {
        question: "What does it cost?",
        answer:
          "It depends on scope. After a call I send a proposal with a fixed price, deliverables and a timeline. I don't publish rates because two projects of the same size can ask for very different things.",
      },
      {
        question: "How does payment work?",
        answer:
          "Half to book the date and half on delivery. Product work is paid in stages agreed in the proposal. Everything is in writing before we start.",
      },
      {
        question: "Can you work with what I already have?",
        answer:
          "Yes. I can start from a design, an existing site or a document with the idea. If what exists won't hold, I'll tell you before charging to improve it.",
      },
      {
        question: "Who writes the content?",
        answer:
          "You bring the knowledge; I bring the structure and the copy. If there are no texts, I write them from an interview. I never fill a page with placeholder copy.",
      },
      {
        question: "Do you work in English?",
        answer:
          "Yes. I work in Spanish and English, and sites can ship bilingual from day one, with separate routes and metadata for each language.",
      },
      {
        question: "What happens after delivery?",
        answer:
          "You get the code, the accounts and a handoff session. If you need maintenance or another phase, we agree on it separately; it isn't tied to the delivery.",
      },
    ],
    ctaTitle: "Not sure which format you need.",
    ctaText:
      "Tell me the problem and I'll tell you which one fits. If none does, that too.",
    ctaAction: "Tell me the problem",
    ctaSecondary: "See the work",
    priceLabel: "Price",
    priceValue: "On request",
    priceNote:
      "You get a fixed proposal after the call. No surprise hours.",
    compareTitle: "Compare the three formats.",
    compareLede:
      "If you're not sure which one you need, start with the problem, not the page count.",
    compareHead: ["Landing", "Site", "Product"],
    compare: [
      {
        label: "Best for",
        values: [
          "Launch, validate or capture",
          "Explain several services",
          "Operate, automate or scale",
        ],
      },
      {
        label: "Estimated delivery",
        values: ["2–3 weeks", "4–6 weeks", "6–10 weeks"],
      },
      {
        label: "Includes",
        values: [
          "Design, copy, build and measurement",
          "Design system, SEO and content",
          "Data, permissions, integrations and deployment",
        ],
      },
      {
        label: "Price",
        values: ["On request", "On request", "On request"],
      },
    ],
    relatedTitle: "Related cases.",
  },
  serviceList: {
    landing: {
      label: "Landing",
      title: "One page. One job.",
      summary: "Launch, validate, capture. One decision per page.",
      outcomeLine: "One page with one decision: get them to contact you.",
      metaTitle: "Landing pages — Luis Rivas",
      metaDescription:
        "A page with one clear decision: leave details, book or buy. Design, copy and build in 2–3 weeks.",
      intro:
        "A landing page isn't a short website. It's a page with a decision: leave details, book, buy or write to you. Everything that doesn't help that decision is out.",
      bestForLabel: "What it's for",
      bestFor:
        "Launches, campaigns, a single offer, or an idea that still needs validation. Also for testing a market before investing in a full site.",
      includesTitle: "What's included",
      includes: [
        "Page structure and hierarchy",
        "Copy built around the action",
        "Original design, no template",
        "Responsive build in Astro or Next.js",
        "Form wired to your inbox or CRM",
        "Conversion tracking and deployment",
      ],
      outcomeTitle: "What you get",
      outcome: [
        "The page live on your domain",
        "The code and accounts in your name",
        "A handoff session so you know your way around",
      ],
      timelineLabel: "Estimated delivery",
      timeline: "2–3 weeks",
      note: "If the copy isn't ready, I write it with you. I don't ship a page full of placeholder text.",
      cta: "I need a landing",
      faqTitle: "Before you ask for a landing",
      faq: [
        {
          question: "Does it work if I don't have a product yet?",
          answer:
            "Yes, if the page has something to show or a waitlist to capture. If there's neither, we start with the value proposition, not the design.",
        },
        {
          question: "Can I edit the copy later?",
          answer:
            "Yes. If you want to change copy without touching code, I'll connect it to a simple CMS. If not, the project is ready to edit and redeploy.",
        },
        {
          question: "Do you run ads or campaigns?",
          answer:
            "No. I build the page and the measurement. Media spend and campaign management stay with you or whoever runs them.",
        },
      ],
    },
    sitio: {
      label: "Site",
      title: "The whole business, not a brochure.",
      summary: "Four to eight pages that explain, organize and sell.",
      outcomeLine: "A site that organizes the offer and sells without friction.",
      metaTitle: "Full websites — Luis Rivas",
      metaDescription:
        "Sites of four to eight pages with a design system, content, technical SEO and deployment. Estimated delivery: 4–6 weeks.",
      intro:
        "A full site solves what a landing page can't: explain several services, organize information and give every visit a clear path. I design the system, not just the screens.",
      bestForLabel: "What it's for",
      bestFor:
        "Businesses with several services, brands that need a site built to last, and teams that want to edit content without calling a developer every week.",
      includesTitle: "What's included",
      includes: [
        "Information architecture and navigation",
        "Design system: type, color and components",
        "Copy and hierarchy for every page",
        "Responsive, accessible build",
        "Technical SEO and structured data",
        "Editable content where it earns its keep",
        "Deployment and measurement",
      ],
      outcomeTitle: "What you get",
      outcome: [
        "A live, documented site",
        "A component system you can extend",
        "Accounts and a handoff session",
      ],
      timelineLabel: "Estimated delivery",
      timeline: "4–6 weeks",
      note: "One round of revisions per stage. No surprise approvals at the end.",
      cta: "I need a full site",
      faqTitle: "Before you ask for a site",
      faq: [
        {
          question: "Can I add pages later?",
          answer:
            "Yes. The site ships as a system: new pages reuse the same components and rules. If you want me to add them, that's quoted separately.",
        },
        {
          question: "Do I need a CMS?",
          answer:
            "Depends on who edits. If you publish news or case studies often, yes. If content changes twice a year, a CMS adds more maintenance than it saves.",
        },
        {
          question: "Will you migrate the current content?",
          answer:
            "Yes, if it's accessible and organized. If it has to be rebuilt from screenshots or PDFs, we'll price that in instead of hiding the work.",
        },
      ],
    },
    producto: {
      label: "Product",
      title: "From idea to production.",
      summary: "Web applications with data, users and business rules.",
      outcomeLine: "A tool that holds up the real operation.",
      metaTitle: "Custom web products — Luis Rivas",
      metaDescription:
        "Web applications with a database, authentication, payments and integrations. Architecture, design and development end to end.",
      intro:
        "For when the website stops being a shop window and becomes the tool. I design the data model, the interface and the infrastructure; I build and deploy it.",
      bestForLabel: "What it's for",
      bestFor:
        "SaaS platforms, portals with accounts, internal dashboards, marketplaces or any product that needs data, roles and real flows.",
      includesTitle: "What's included",
      includes: [
        "Scope and data modeling",
        "Flow and screen design",
        "API and frontend",
        "Authentication and permissions",
        "Payments or integrations where needed",
        "Automated tests and CI/CD",
        "Infrastructure and deployment",
      ],
      outcomeTitle: "What you get",
      outcome: [
        "A working product in production",
        "Documented code, infrastructure and accounts",
        "A foundation you can keep building on",
      ],
      timelineLabel: "Estimated delivery",
      timeline: "6–10 weeks, depending on scope",
      note: "We agree the scope in writing before any code. What falls outside gets decided, not improvised.",
      cta: "I want to build a product",
      faqTitle: "Before you ask for a product",
      faq: [
        {
          question: "Will you work with my team?",
          answer:
            "Yes. I can own design and development, or join an existing team for one part of it. In that case, code review and documentation are part of the work.",
        },
        {
          question: "What about maintenance?",
          answer:
            "It isn't included in the delivery. If you want me to stay on, we agree a monthly block with a clear limit of hours and priorities. If not, everything is documented so someone else can take it.",
        },
        {
          question: "Can we start with one part?",
          answer:
            "Yes, if that part makes sense on its own. I'd rather ship a useful first phase than a prototype nobody can use. We define it in the proposal.",
        },
      ],
    },
  },
  work: {
    pageTitle: "Five projects. Five different problems.",
    pageLede:
      "Five real projects. You can open the live ones and read the code for the rest. No mockups on this list.",
    proof: "5 projects · 3 formats · 4 live",
    filtersLabel: "Filter work",
    gridTitle: "The cases.",
    empty: "No cases match this filter.",
    ctaTitle: "The next one could be yours.",
    ctaText: "Tell me what you have in mind and I'll tell you whether I can help.",
  },
  cases: {
    dnova: {
      title: "D'Nova Gallery",
      subtitle: "Portfolio and CMS for a photography studio.",
      cardSummary:
        "The photographer needed to publish new sessions without depending on anyone. I built the public site and a dashboard where she uploads photos, orders galleries and updates packages.",
      metaTitle: "D'Nova Gallery — case study | Luis Rivas",
      metaDescription:
        "Site and CMS for a photographer: self-managed galleries, images on Cloudflare R2 and publishing without touching code.",
      serviceLabel: "Site + CMS",
      role: "Design and development",
      challenge:
        "The previous site was a static gallery: every new session meant editing code and redeploying. The problem wasn't the design, it was the dependency.",
      challengeTitle: "The problem",
      approachTitle: "What I built",
      approach:
        "I separated content from code. Galleries, covers and packages live in a database; the dashboard uploads images to Cloudflare R2 and publishes them in minutes. The public site keeps its weight down even with dozens of photos.",
      resultTitle: "What changed",
      result:
        "The photographer publishes on her own and the site remains in production. New sessions no longer go through a developer.",
      galleryCaption: "Public gallery, admin dashboard and session packages.",
      outcomeLine: "The photographer publishes on her own.",
      outcomes: [
        "Publishes new sessions without touching code.",
        "Galleries, covers and packages live in a database.",
        "Images upload to Cloudflare R2 from the dashboard.",
      ],
    },
    "el-poaig": {
      title: "El Mil del Poaig",
      subtitle: "An editorial landing page for olive oil from millenary trees.",
      cardSummary:
        "One page for a product that can't be explained with a spec sheet. The story, the landscape and the harvest do the work.",
      metaTitle: "El Mil del Poaig — case study | Luis Rivas",
      metaDescription:
        "Editorial landing page for organic olive oil from trees between 1,000 and 3,000 years old. Design, narrative and a bilingual build.",
      serviceLabel: "Landing",
      role: "Design and development",
      challenge:
        "The product is exceptional and hard to sum up: organic olive oil from trees between 1,000 and 3,000 years old. The site had to convey rarity without falling into generic luxury.",
      challengeTitle: "The problem",
      approachTitle: "What I built",
      approach:
        "I built a cinematic narrative: full-bleed photography, editorial typography, a press marquee and a gallery that reads like a catalogue. Fully self-contained and bilingual.",
      resultTitle: "What changed",
      result:
        "The landing page is live on its own domain. One page was enough because the message was clear.",
      galleryCaption: "Cover, gallery and harvest narrative.",
      outcomeLine: "One page was enough.",
      outcomes: [
        "Bilingual editorial narrative on a single page.",
        "Landing page live on its own domain.",
        "Press, gallery and harvest inside the same experience.",
      ],
    },
    "fit-stack": {
      title: "FIT Stack",
      subtitle:
        "Multi-tenant SaaS platform for gyms: ERP, CMS, member portal and AI.",
      cardSummary:
        "ERP, CMS, blog, notifications, coach-member relationships and AI assistants. A complete product to run a gym end to end.",
      metaTitle: "FIT Stack — case study | Luis Rivas",
      metaDescription:
        "Multi-tenant SaaS platform for gyms: ERP, CMS, blog, notifications, member portal, coach-member management and AI with RAG and tool calling.",
      serviceLabel: "Product",
      role: "Architecture, design and development",
      challenge:
        "Gyms were running memberships, renewals, access, content and coach relationships in separate tools. The challenge was unifying the operation without turning the product into an unreadable ERP.",
      challengeTitle: "The problem",
      approachTitle: "What I built",
      approach:
        "I modeled a monorepo with an API on Cloudflare Workers and Hono, Neon Postgres with Drizzle, Upstash caching and queues for async work. The admin panel, SaaS console and member portal share types and rules. I added a CMS for the commercial page, blog, notifications, coach and member management, and a space for independent clients. The AI assistants use RAG and tool calling to generate routines and reports against each gym's real data. A Python desktop bridge connects the software to the gym's turnstile.",
      resultTitle: "What changed",
      result:
        "The product covers the full cycle: signup, renewal, billing, access, content, notifications and follow-up. AI generates routines and reports from each gym's real data.",
      galleryCaption: "Panel, SaaS console, member portal and AI assistant.",
      outcomeLine: "Operations, content and follow-up in one system.",
      outcomes: [
        "ERP, CMS, blog and notifications in the same platform.",
        "Coach-member relationships and a space for independent clients.",
        "AI with RAG and tool calling for routines and reports.",
      ],
    },
    "delivery-los-latinos": {
      title: "Delivery Los Latinos",
      subtitle: "Food ordering and restaurant management in Orihuela.",
      cardSummary:
        "An ordering platform with an admin dashboard, a drag-and-drop menu editor and roles plus RLS in Supabase.",
      metaTitle: "Delivery Los Latinos — case study | Luis Rivas",
      metaDescription:
        "Food ordering platform for a restaurant in Orihuela: admin dashboard, editable menu, roles and row-level security.",
      serviceLabel: "Product",
      role: "Design and development",
      challenge:
        "The restaurant needed to manage its menu and orders without depending on a developer for every change.",
      challengeTitle: "The problem",
      approachTitle: "What I built",
      approach:
        "I built the public platform and a dashboard with roles, a drag-and-drop menu editor and RLS security in Supabase. The experience is mobile-first.",
      resultTitle: "What changed",
      result:
        "The platform is live at deliveryloslatinos.es and the team can manage its catalogue and orders from the dashboard.",
      galleryCaption: "Public platform, admin dashboard and menu editor.",
      outcomeLine: "The restaurant manages its menu without a developer.",
      outcomes: [
        "Drag-and-drop menu editor.",
        "Roles and RLS to separate access.",
        "Mobile-first ordering experience.",
      ],
    },
    "pulse-stream": {
      title: "Pulse Stream",
      subtitle: "Music streaming with a persistent player and offline mode.",
      cardSummary:
        "Python backend, Next.js frontend and audio served from R2. The player keeps playing across pages and downloads work without a connection.",
      metaTitle: "Pulse Stream — case study | Luis Rivas",
      metaDescription:
        "Music streaming platform: FastAPI, Neon Postgres, Cloudflare R2, a persistent player and a PWA with offline playback.",
      serviceLabel: "Product",
      role: "Architecture, design and development",
      challenge:
        "A web player breaks the moment you change screens or lose signal. The goal was to keep the music going without packaging a native app.",
      challengeTitle: "The problem",
      approachTitle: "What I built",
      approach:
        "I separated audio from the frontend: presigned R2 URLs, ID3 metadata processed on the backend and a global player mounted once. I added a PWA with the Cache API for downloads and the Media Session API for OS-level playback controls.",
      resultTitle: "What changed",
      result:
        "The platform includes an editable catalogue, ZIP album imports and offline playback.",
      galleryCaption: "Global player, library and catalogue dashboard.",
      outcomeLine: "The music doesn't stop.",
      outcomes: [
        "Persistent global player across pages.",
        "Offline downloads with PWA and Cache API.",
        "ZIP album imports and an editable catalogue.",
      ],
    },
  },
  process: {
    pageTitle: "A short process, with decisions in writing.",
    pageLede:
      "There's no three-month discovery phase. There's a call, a proposal and weekly deliveries.",
    stepsTitle: "From the call to the handoff.",
    steps: [
      {
        title: "Call",
        body: "Thirty minutes to understand the business, the goal and the date. If I'm not the right person, I'll say so right there.",
      },
      {
        title: "Proposal",
        body: "Scope, deliverables, fixed price and timeline on one page. No fine print, no surprise hours.",
      },
      {
        title: "Structure and direction",
        body: "I organize the content and propose a visual direction. You approve before a single screen exists.",
      },
      {
        title: "Build",
        body: "Design and code move together. Every week you see something working in a real environment, not a presentation.",
      },
      {
        title: "Handoff",
        body: "Domain, measurement, accounts and a handoff session. Later revisions are agreed before we start.",
      },
    ],
    needTitle: "What I need from you.",
    need: [
      "One person who decides. Not a committee.",
      "Access to the knowledge: what you sell, to whom and why.",
      "Brand, photos and copy if they exist. If not, we build them.",
      "A realistic date. If it changes, we talk.",
    ],
    noTitle: "What I don't do.",
    no: [
      "I don't sell templates or marketplace themes.",
      "I don't promise Google rankings or campaign results.",
      "I don't subcontract the design or the code.",
      "I don't offer 24/7 support. If your operation needs it, I'll help you set it up with the right people.",
    ],
    toolsTitle: "What I work with.",
    toolsText:
      "I choose the tool for the problem, not the trend. This site is Astro and Cloudflare; products are usually Next.js, TypeScript and Postgres.",
    tools: [
      "TypeScript",
      "React",
      "Next.js",
      "Astro",
      "Node.js",
      "Python / FastAPI",
      "PostgreSQL",
      "Cloudflare",
      "Tailwind CSS",
      "Supabase",
      "Drizzle",
      "Hono",
    ],
    remote: "Working remotely, in Spanish and English.",
  },
  about: {
    pageTitle: "One person, the whole process.",
    pageLede:
      "There's no agency behind this. The person who replies is the same one who designs and writes the code.",
    paragraphs: [
      "I work alone because the project benefits: fewer meetings, faster decisions and one person accountable for the thing working.",
      "I've built SaaS platforms, streaming apps, photographer CMSs, editorial landing pages and ordering platforms. Every project left me with the same rule: if it doesn't survive real use, it isn't finished.",
      "I don't sell templates or subcontract design or code. What you see is what gets delivered.",
    ],
    facts: [
      { label: "Base", value: "Remote" },
      { label: "Languages", value: "Spanish · English" },
      { label: "Experience", value: "6+ years" },
      { label: "Focus", value: "Web product, design and development" },
    ],
    principlesTitle: "How I work.",
    principles: [
      {
        title: "Design and code in the same head.",
        body: "Visual decisions are made knowing what they cost to build. Nothing gets lost between Figma and production.",
      },
      {
        title: "Fewer parts, better maintained.",
        body: "I'd rather ship a small system someone can understand than an impressive architecture nobody dares to touch.",
      },
      {
        title: "I hand over code another person can read.",
        body: "Clear names, minimal but sufficient documentation and accounts in your name. You're not tied to me.",
      },
    ],
    elsewhere: "Elsewhere",
    portfolioLink: "Full portfolio",
    ctaTitle: "Let's talk about your project.",
    ctaText: "A thirty-minute call is usually enough to know if it fits.",
  },
  contact: {
    pageTitle: "Tell me what you need.",
    pageLede:
      "A thirty-minute call is usually enough to know if it fits. If you'd rather write, this form goes straight to my inbox.",
    directTitle: "Prefer email.",
    directNote: "Write and tell me the same thing. No mandatory form.",
    response: "I usually reply within 24 business hours.",
    remote: "Working remotely · Spanish and English",
    availability: "Available for new projects.",
    whatsapp: "WhatsApp",
    whatsappNote: "If you prefer something more direct, message me on WhatsApp.",
    nextTitle: "What happens next.",
    nextSteps: [
      "I read your message and check whether the project fits.",
      "If it does, I suggest a thirty-minute call.",
      "If not, I'll tell you clearly and point you somewhere useful.",
    ],
    formTitle: "Form",
    fields: {
      name: "Name",
      namePlaceholder: "Your name",
      nameHint: "What should I call you.",
      email: "Email",
      emailPlaceholder: "you@email.com",
      emailHint: "Only to reply.",
      project: "What you need",
      projectPlaceholder: "Choose one",
      projectHint: "If you're not sure, pick the last one.",
      projectOptions: [
        { value: "landing", label: "A landing page" },
        { value: "sitio", label: "A full site" },
        { value: "producto", label: "A web product" },
        { value: "otro", label: "I don't know yet" },
      ],
      message: "Tell me about the project",
      messagePlaceholder:
        "Goal, timeline and anything you already have: brand, current site, references.",
      messageHint: "One paragraph is enough. No forty-page briefs.",
    },
    consent: "I've read and accept the",
    consentLink: "privacy policy",
    privacyNote:
      "Your data goes to Formspree and lands in my inbox. It isn't used for anything else.",
    submit: "Send message",
    sending: "Sending…",
    errorTitle: "The message couldn't be sent.",
    errorBody:
      "Formspree rejected the submission. Check your connection and try again, or email me directly.",
    errorMail: "Email me instead",
    required: "Required",
  },
  privacy: {
    pageTitle: "Privacy, on one page.",
    pageLede:
      "No tracking cookies, no third-party analytics and no selling data. This is what does happen when you use this site.",
    updated: "Last updated: October 2026",
    sections: [
      {
        title: "Who processes your data",
        body: "Luis Rivas, at luisfrm1610@gmail.com. It's the same person who replies to your messages.",
      },
      {
        title: "What I receive",
        body: "Only what you type into the form: name, email, project type and message. No hidden fields, profiling or data sales.",
      },
      {
        title: "Why",
        body: "To reply and decide whether I can help. The legal basis is your consent when you submit the form.",
      },
      {
        title: "Who else sees it",
        body: "The form is processed by Formspree (Formspree, Inc.), which delivers the message to my inbox. The site is hosted on Cloudflare, which logs requests for security. There are no other analytics or advertising tools.",
      },
      {
        title: "How long",
        body: "As long as needed to reply and, if a project follows, for the duration of the relationship. If you want a message deleted sooner, ask and I'll do it.",
      },
      {
        title: "Your rights",
        body: "You can ask for access, correction or deletion by writing to luisfrm1610@gmail.com. I reply on the same timeline as any other email.",
      },
      {
        title: "Cookies",
        body: "I don't use first-party cookies or analytics tools. There's no banner because there's nothing to accept.",
      },
      {
        title: "Changes",
        body: "If this policy changes, the date on this page changes with it.",
      },
    ],
  },
  thanks: {
    pageTitle: "Message received.",
    pageLede:
      "Thanks for writing. I read the email and usually reply within 24 business hours.",
    steps: [
      "I read your message and check whether the project fits.",
      "If it does, I suggest a thirty-minute call.",
      "If not, I'll tell you clearly and point you somewhere useful.",
    ],
    back: "Back to home",
    work: "Meanwhile, see the work",
  },
  notFound: {
    pageTitle: "This page doesn't exist.",
    pageLede:
      "The link may be wrong, or the page may have moved. Try here:",
    home: "Go home",
    contact: "Email me",
  },
  footer: {
    line: "Let's build something that survives use.",
    tagline: "Web design and development · Remote",
    rights: "All rights reserved.",
    social: "Elsewhere",
    portfolio: "Portfolio",
    available: "Available for new projects",
    whatsapp: "WhatsApp",
  },
};
