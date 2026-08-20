export const en = {
  meta: {
    title: "Luis Rivas — Senior Full Stack Developer & AI Engineer",
    description:
      "Professional portfolio of Luis Rivas, Senior Full Stack Engineer with 6+ years of experience specializing in React, Next.js, Node.js, .NET, Serverless, and AI Solutions.",
    keywords:
      "Luis Rivas, Full Stack Developer, Senior Software Engineer, React Developer, Next.js, Node.js, .NET, AI Engineering, Serverless, Web Developer",
  },
  personal: {
    name: "Hello! I'm Luis Rivas",
    role: "Senior Full Stack Developer",
    about:
      "Bilingual Computer Engineer with 6+ years of experience in Full Stack development (React, Next.js, Node, .NET). Specialized in serverless architecture and AI-powered engineering (Claude, Cursor, RAG & Function Calling) to build high-performance web and mobile products.",
    downloadText: "Download CV",
    getInTouchText: "Get in touch",
  },
  skills: {
    title: "Skills",
  },
  contact: {
    title: "Contact",
    email: "luisfrm1610@gmail.com",
    phone: "+58 4124722407",
    city: "Latin America",
    download: "Download CV",
  },
  contactForm: {
    title: "Contact",
    subtitle: "GET IN TOUCH",
    headline: "Let's build something exceptional together.",
    responseTime: "Typical response within <24 hours",
    nameLabel: "Name",
    emailLabel: "Email",
    subjectLabel: "Subject",
    messageLabel: "Message",
    namePlaceholder: "Your full name",
    emailPlaceholder: "your@email.com",
    subjectPlaceholder: "Message subject",
    messagePlaceholder: "Write your message here...",
    sendButtonText: "Send Message",
    sendingText: "Sending...",
    messages: {
      validationError: "Please complete all required fields",
      validationDescription: "All fields are required to send your message.",
      successMessage: "Message sent successfully!",
      successDescription:
        "I will respond as soon as possible. Thank you for reaching out!",
      errorMessage: "Error sending message",
      errorDescription: "An unexpected error occurred. Please try again.",
    },
  },
  nav: {
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    skills: "Skills",
    about: "About",
  },
  social: {
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  projects: {
    title: "Projects",
    pageTitle: "Featured Projects",
    pageSubtitle:
      "Explore the full collection of web applications, platforms, and innovations I have built.",
    backToHome: "Back to home",
    viewAll: "View all projects",
    viewCode: "View Code",
    liveDemo: "Live Demo",
    contactCode: "Contact",
    code: "Code",
    demo: "Demo",
    list: [
      {
        key: "fitStack",
        title:
          "Fit-Stack - Multi-Tenant B2B Gym SaaS, AI Assistant & Hardware Access Control",
        description:
          "High-performance B2B SaaS platform for gym operations, financial auditability, AI assistance, and physical access control. Engineered as a Turborepo monorepo featuring an Edge Serverless API on Cloudflare Workers using Hono, a serverless Neon Postgres database powered by Drizzle ORM, Upstash Redis edge caching, and an AI Chat engine with real-time SSE streaming leveraging Cloudflare Workers AI and OpenRouter models. Comprises a Gym Admin Panel (Next.js 16 / React 19) with cumulative renewal logic and multi-currency billing; a SaaS Super-Admin Console (Next.js 16); a Member Portal (Next.js 16) with dynamic CMS rendering; full monorepo test suite with Vitest; asynchronous task queues via Cloudflare Queues and Resend transactional emails; and a native Desktop Bridge (Python / Flet) for turnstile hardware integration via biometric/QR sensors. Infrastructure fully managed via Terraform and deployed with GitHub Actions CI/CD pipelines.",
        media: [
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/fitstack-1.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/fitstack-2.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/fitstack-3.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/fitstack-4.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/fitstack-5.webp" },
        ],
        githubUrl: "https://github.com/luisfrm/fit-stack",
        liveUrl: "https://panel.luisrivas.site",
      },
      {
        key: "pulseStream",
        title:
          "Pulse Stream - High-Performance Music Streaming Platform, Catalog Management & Offline PWA",
        description:
          "Full-featured audio streaming platform inspired by Spotify engineered with a Turborepo and pnpm workspaces monorepo. High-concurrency asynchronous backend built with Python 3.13, FastAPI, SQLAlchemy 2.0 Async, Neon Serverless PostgreSQL, and Alembic database migrations. Media storage and audio streaming powered by Cloudflare R2 using presigned URLs via Boto3, alongside ID3 metadata extraction via Mutagen for automated batch ZIP album imports. Modern frontend built on Next.js 16 (App Router) and React 19 with a custom dark UI in Tailwind CSS v4 and Radix UI; features a persistent global player integrated with the OS Media Session API, Progressive Web App (PWA) offline audio caching via Cache API, and end-to-end type safety with OpenAPI-to-TypeScript code generation. Implements RBAC authentication via HttpOnly JWT session cookies (fastapi-users with Argon2 hashing), rate limiting via Slowapi, comprehensive admin management dashboards, and robust test suites using Pytest (real Postgres integration) and Vitest.",
        media: [
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/pulsestream-1.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/pulsestream-2.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/pulsestream-3.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/pulsestream-4.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/pulsestream-5.webp" },
        ],
        githubUrl: "https://github.com/luisfrm/pulse-stream",
        liveUrl: "https://pulse-stream.luisrivas.site",
      },
      {
        key: "dnovaGallery",
        title: "D'Nova Gallery - Photography Portfolio & Custom CMS",
        description:
          "Professional web application and Content Management System (CMS) designed for studio photographers. Features interactive portfolio showcases, service package management, dynamic galleries, and booking requests. Includes a dedicated administration dashboard with secure authentication, high-performance image storage via Cloudflare R2, and multi-language support (English/Spanish).",
        media: [
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/dnova-1.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/dnova-2.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/dnova-3.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/dnova-4.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/dnova-5.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/dnova-6.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/dnova-7.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/dnova-8.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/dnova-9.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/dnova-10.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/dnova-11.webp" },
        ],
        githubUrl: "https://github.com/luisfrm/photographer-ui",
        liveUrl: "https://dnovagallery.luisrivas.site/en",
      },
      {
        key: "deliveryLosLatinos",
        title: "Delivery Los Latinos - Food Delivery Platform",
        description:
          "Full-stack food delivery and restaurant management web platform built for Orihuela. Features an intuitive admin dashboard for store and catalog management, interactive menu editor with drag-and-drop reordering, role-based access control (RBAC) with Supabase Auth and database Row Level Security (RLS), and a mobile-first responsive user interface.",
        media: [
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/loslatinos-1.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/loslatinos-2.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/loslatinos-3.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/loslatinos-4.webp" },
        ],
        githubUrl: "https://github.com/luisfrm/delivery-orihuela",
        liveUrl: "https://deliveryloslatinos.es",
      },
      {
        key: "elPoaig",
        title: "El Poaig — El Mil del Poaig",
        description:
          "Luxury high-end landing page crafted for El Mil del Poaig, the world's first organic extra virgin olive oil harvested from millenary Farga olive trees (1,000 to 3,000 years old). Features a cinematic editorial aesthetic, custom color grading, subtle micro-animations, infinite press marquee, interactive media gallery, and a fully self-contained multilingual web experience.",
        media: [
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/elpoaig-1.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/elpoaig-2.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/elpoaig-3.webp" },
          { type: "image", url: "https://r2-personal.luisrivas.site/portfolios/elpoaig-4.webp" },
        ],
        liveUrl: "http://elpoaig.luisrivas.site",
      },
      {
        key: "fishersImports",
        title: "Fishers Imports",
        description:
          "Fishers Imports' website, developed by Overfuel, showcases elegant design and advanced functionality. It features an impressive luxury inventory display, intuitive search, and financing options, demonstrating Overfuel's ability to boost high-end dealerships' digital presence.",
        media: [
          { type: "image", url: "https://res.cloudinary.com/dw4ecbwo9/image/upload/v1732662466/fishers_zerdbg.webp" },
        ],
        liveUrl: "https://www.fishersimports.com/",
      },
      {
        key: "portfolio",
        title: "Portfolio",
        description:
          "My portfolio is a web application that showcases my projects and skills. It uses modern technology to present information clearly and attractively. It displays featured projects, skills, and contact information.",
        media: [
          { type: "image", url: "https://res.cloudinary.com/dw4ecbwo9/image/upload/v1732641749/portfolios_qvrtul.png" },
        ],
        githubUrl: "https://github.com/luisfrm/portfolios-react",
        liveUrl: "https://luisrivas.work",
      },
      {
        key: "godsGoodBarbershop",
        title: "God's Good BarberShop",
        description:
          "God's Good BarberShop is a landing page for a barbershop. The site is designed to attract and keep customers informed about available services and promotions. With a focus on modernity and convenience, the page will be continuously updated with new features and improvements.",
        media: [
          { type: "image", url: "https://res.cloudinary.com/dw4ecbwo9/image/upload/v1732264975/god-is-good-compress_drf1ce.webp" },
        ],
        githubUrl: "https://github.com/luisfrm/god-is-good-barbershop",
        liveUrl: "https://god-is-good-barbershop.vercel.app",
      },
      {
        key: "taskManager",
        title: "Task Manager",
        description:
          "Task Manager is a web application for managing tasks and projects. It offers a user-friendly interface for creating, assigning, and tracking tasks. The application uses modern technology to ensure seamless task management, featuring real-time updates, task prioritization, and detailed reporting.",
        media: [
          { type: "image", url: "https://res.cloudinary.com/dw4ecbwo9/image/upload/v1732669722/taskmanager_agogip.webp" },
        ],
        githubUrl: "https://github.com/luisfrm/task-manager",
      },
    ],
  },
  workExperiences: {
    title: "Work Experience",
    viewMore: "View more",
    pageTitle: "Work Experience",
    pageSubtitle:
      "Detailed overview of my professional career, responsibilities, and key achievements.",
    backToHome: "Back to home",
    list: [
      {
        key: "chicksGroup",
        company: "Chicks Group",
        position: "Full-Stack Developer",
        period: "January 2025 — Current",
        description:
          "Assigned to multiple projects such as ChicksGold, an e-commerce platform; and ChicksX, a cryptocurrency exchange platform.",
        items: [
          "Implementation of new advanced functionalities using the Aurelia Framework, integrating MDC (Material Design Components) and CDS (Custom Design Components), for optimizing UX/UI.",
          "Implementation of new functionalities for a Marketplace developed in Aurelia Framework and multiple web components built with Lit library, TypeScript, and StoryBook.",
          "Implemented AI-powered solutions leveraging RAG and function calling to automate complex workflows, including the development of intelligent chat agents integrated with Groq and OpenRouter to enhance application capabilities.",
          "Use of Storybook to systematically document the creation of new components by establishing clear development guidelines and real-time visualization.",
          "Complex problem-solving and real-time communication implementation using SignalR/WebSockets, ensuring optimal performance in high-traffic applications.",
          "Handle technical requests using modular architectures and advanced patterns, maintaining backward compatibility while modernizing legacy interfaces.",
          "Maintenance and enhancement of backend services using C# and .NET, including the implementation of new features, bug fixes, and optimization for performance and scalability.",
          "Design and creation of database migrations with Entity Framework Core to ensure data integrity and support evolving business requirements.",
        ],
      },
      {
        key: "overfuel",
        company: "Overfuel",
        position: "Senior Full-Stack Developer",
        period: "May 2023 — September 2024",
        description:
          "Provider of websites for car dealerships. I was assigned to the 321ignition project after Overfuel acquired it as the leader of the Front-end and collaborator of the Back-end.",
        items: [
          "Led the maintenance of 321 ignition and its migration to Overfuel Platform",
          "Developed a unified platform of components and tools for different products in the company, and accelerated product delivery by 35% and reduced reported bugs.",
          "Implemented good CI/CD practices to improve the efficiency in software delivery, reducing errors and delivery times.",
          "Led a 15% increase in web performance for dealerships such as Indy Auto Man and Fishers Imports.",
          "Collaborated on the creation of a unified marketplace for car dealerships in React Native with Expo, implementing real-time inventory sync and compatibility between iOS and Android devices.",
          "Implemented different third parties through Google Tag Manager.",
          "Built a cookie management tool to comply with user consent laws across more than 60 dealerships.",
          "Led the handled of technical requests from more than 100 clients, developing new features and resolving client requests.",
        ],
      },
      {
        key: "ignition321",
        company: "321ignition",
        position: "Senior Full-Stack Developer",
        period: "May 2020 — May 2023",
        description:
          "Multidisciplinary Team Lead: I started in this role as a Front-end developer and was later promoted to a leadership position. I was responsible for problem-solving, coordinating activities, and ensuring quality in the development of both Front-end (web and mobile) and Back-end applications and features.",
        items: [
          "Developed a Front-end architecture in collaboration with the team that improved website scalability and performance.",
          "Collaborated on the construction and maintenance of various API Rest microservices to integrate with Front-end applications.",
          "Optimized the Front-end user interface to improve the UX/UI and performance of different projects.",
          "Collaborated on the creation of new mobile projects using React Native, supporting compatibility with iOS and Android devices.",
          "Collaborated on the migration of the existing platform to a new, more scalable and maintainable infrastructure, using a group of technologies aligned with the project's needs.",
          "Optimized the implementation of third-party scripts (analytics, marketing, and tracking) using Google Tag Manager, which resulted in a 60% reduction in deployment time for new tags, eliminating the need for additional code changes.",
          "Led a multidisciplinary Front-end and QA team for the management, distribution, supervision, and development of tasks for the client support team.",
          "Reduced deployment time and accelerated the onboarding process to just 15 minutes by dockerizing environments with multi-stage builds, achieving images that were up to 70% lighter.",
        ],
      },
      {
        key: "firaOnlive",
        company: "Fira onLive",
        position: "Front End Developer",
        period: "May 2019 — March 2020",
        description:
          "Assigned to the creation of a new livestreaming player and a new library to easily handle the functionality in the player.",
        items: [
          "Developed a live streaming player using React and Red5Pro.",
          "Built a chat feature for each streaming event using the getStreaming library.",
          "Created a JavaScript library to allow the streaming player to be implemented on third-party websites.",
          "Collaborated on the creation and implementation of new functionalities for the streaming events from the CMS.",
          "Implemented the creation of Docker containers to standardize development and production environments, achieving deployment consistency across teams.",
          "Developed a JavaScript library to simplify the implementation of the live-streaming player on client websites, significantly reducing deployment times and ensuring consistency across all integrations.",
        ],
      },
    ],
  },
  education: {
    title: "Education",
    degree: "Computer Engineer",
    institution: "University Rafael Belloso Chacín",
    period: "January, 2017 - December, 2021",
    description:
      "Graduated as Computer Engineer from the University Rafael Belloso Chacín in 2021 after 5 years of study and obtaining approval in the special work of degree.",
    items: [
      "Special work of degree:",
      "Web application for the distribution of medicines developed in React.js and Node with Express and MySQL for the server and database.",
      "The application consisted of a solution for the problem that occurred during the pandemic of 2020 for the distribution of medicines in a safer and more efficient way through a marketplace of different distributors in the region.",
    ],
  },
  cv: {
    url: "https://drive.google.com/file/d/1OUK_vJieKiYb9ZRVlBksZwVAhgAU2r9v/view?usp=sharing",
  },
  theme: {
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  common: {
    languageSwitchTo: "ES",
    scrollToTop: "Scroll to top",
    menu: "Menu",
  },
  footer: {
    status: "Available for new opportunities",
    builtWith: "Built with Next.js & TypeScript",
    rights: "All rights reserved.",
    sitemap: "Sitemap",
  },
  notFound: {
    code: "404",
    title: "Page not found",
    description: "The page you are looking for does not exist or has been moved.",
    homeButton: "Back to home",
  },
} as const;

export type Dictionary = typeof en;
