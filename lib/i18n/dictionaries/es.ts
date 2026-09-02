export const es = {
  meta: {
    title: "Luis Rivas — Senior Full Stack Developer & AI Engineer",
    description:
      "Portafolio profesional de Luis Rivas, Ingeniero de Software Full Stack con +6 años de experiencia especializado en React, Next.js, Node.js, .NET, Serverless y Soluciones impulsadas por IA.",
    keywords:
      "Luis Rivas, Full Stack Developer, Senior Software Engineer, React Developer, Next.js, Node.js, .NET, AI Engineering, Serverless, Web Developer Latinoamérica",
  },
  personal: {
    name: "¡Hola! Soy Luis Rivas",
    role: "Desarrollador Full Stack Senior",
    about:
      "Ingeniero en Computación Bilingüe con +6 años de experiencia en desarrollo Full Stack (React, Next.js, Node, .NET). Especializado en arquitectura serverless y desarrollo impulsado por IA (Claude, Cursor, RAG y Function Calling) para construir productos web y móviles escalables.",
    downloadText: "Descargar CV",
    getInTouchText: "Contactar",
  },
  skills: {
    title: "Habilidades",
  },
  contact: {
    title: "Contacto",
    email: "luisfrm1610@gmail.com",
    phone: "+58 4124722407",
    city: "Latinoamérica",
    download: "Descargar CV",
  },
  contactForm: {
    title: "Contacto",
    subtitle: "PONTE EN CONTACTO",
    headline: "Construyamos algo excepcional juntos.",
    responseTime: "Respuesta habitual en <24 horas",
    nameLabel: "Nombre",
    emailLabel: "Email",
    subjectLabel: "Asunto",
    messageLabel: "Mensaje",
    namePlaceholder: "Tu nombre completo",
    emailPlaceholder: "tu@email.com",
    subjectPlaceholder: "Asunto del mensaje",
    messagePlaceholder: "Escribe tu mensaje aquí...",
    sendButtonText: "Enviar Mensaje",
    sendingText: "Enviando...",
    messages: {
      validationError: "Por favor, completa todos los campos requeridos",
      validationDescription:
        "Todos los campos son obligatorios para enviar tu mensaje.",
      successMessage: "¡Mensaje enviado exitosamente!",
      successDescription:
        "Te responderé lo antes posible. ¡Gracias por contactarme!",
      errorMessage: "Error al enviar el mensaje",
      errorDescription:
        "Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.",
    },
  },
  nav: {
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
    skills: "Habilidades",
    about: "Sobre mí",
  },
  social: {
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  projects: {
    title: "Proyectos",
    pageTitle: "Proyectos Destacados",
    pageSubtitle:
      "Explora la colección completa de aplicaciones web, plataformas e innovaciones que he desarrollado.",
    backToHome: "Volver al inicio",
    viewAll: "Ver todos los proyectos",
    viewCode: "Ver Código",
    liveDemo: "Demo en Vivo",
    contactCode: "Contactar",
    code: "Código",
    demo: "Demo",
    list: [
      {
        key: "fitStack",
        title:
          "Fit-Stack - Plataforma B2B SaaS Multi-inquilino de Gestión de Gimnasios, Asistente IA y Control de Acceso",
        description:
          "Plataforma B2B SaaS de alto rendimiento para la automatización operativa, financiera y asistida por Inteligencia Artificial en gimnasios. Arquitectura monorepo (Turborepo + pnpm) impulsada por una API Edge Serverless en Cloudflare Workers con Hono, base de datos Serverless Neon Postgres con Drizzle ORM, caché distribuido en Upstash Redis y un motor de Asistente IA con streaming SSE (Server-Sent Events) multi-proveedor (Cloudflare Workers AI + OpenRouter). Incluye un Panel de Gestión (Next.js 16 / React 19) con reglas de renovación acumulativa y cobros multimoneda; una Consola de Super-Admin SaaS (Next.js 16); un Portal de Miembros (Next.js 16) con CMS dinámico; suite de pruebas automatizadas con Vitest a lo largo de todo el monorepo; procesamiento asíncrono en colas con Cloudflare Queues y correos transaccionales con Resend; y un cliente nativo de escritorio (Python / Flet) para control de acceso por hardware (biometría/QR). Infraestructura declarada en Terraform y CI/CD con GitHub Actions.",
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
          "Pulse Stream - Plataforma de Streaming de Música, Gestión de Catálogo y Reproducción Offline PWA",
        description:
          "Plataforma integral de streaming de audio inspirada en Spotify con arquitectura monorepo (Turborepo + pnpm workspaces). Backend asíncrono de alto rendimiento desarrollado en Python 3.13 con FastAPI, SQLAlchemy 2.0 Async, PostgreSQL Serverless en Neon y migraciones controladas con Alembic. Almacenamiento y streaming de audio distribuido en Cloudflare R2 mediante URLs prefirmadas con Boto3 y procesamiento ID3 con Mutagen para importación masiva de álbumes por ZIP. Frontend en Next.js 16 (App Router) y React 19 con diseño oscuro personalizado en Tailwind CSS v4 y Radix UI; cuenta con un reproductor global persistente sincronizado con la Media Session API del sistema operativo, soporte PWA con descargas a la Cache API para reproducción offline y tipado estricto extremo a extremo mediante generación automática de tipos TypeScript desde OpenAPI. Incluye control de acceso basado en roles (RBAC) con cookies HttpOnly y JWT (fastapi-users con hash Argon2), rate limiting con Slowapi, panel de administración con métricas y suites completas de pruebas automatizadas con Pytest (integración en Postgres real) y Vitest.",
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
        title: "D'Nova Gallery - Portafolio Fotográfico y CMS Autogestionable",
        description:
          "Plataforma web profesional y sistema de gestión de contenidos (CMS) diseñado para fotógrafos de estudio. Permite administrar galerías de fotos dinámicas, paquetes de servicios, testimonios y secciones informativas en tiempo real. Cuenta con un panel administrativo intuitivo con autenticación segura, integración con Cloudflare R2 para la carga masiva y optimizada de fotografías, e internacionalización multilenguaje (Español/Inglés).",
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
        title: "Delivery Los Latinos - Plataforma de Pedidos a Domicilio",
        description:
          "Plataforma web integral de pedidos a domicilio y gestión de restaurantes en Orihuela. Cuenta con un panel de administración para la gestión de tiendas y productos, editor interactivo de menús con reordenamiento drag & drop, sistema de autenticación por roles (RBAC) integrado con Supabase Auth y seguridad RLS a nivel de base de datos, además de una interfaz optimizada para móvil y escritorio.",
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
          "Landing page de lujo y alta gastronomía desarrollada para El Mil del Poaig, el primer aceite de oliva virgen extra ecológico del mundo procedente de olivos milenarios de variedad Farga (de 1.000 a 3.000 años de antigüedad). Cuenta con una estética editorial cinematográfica, gradación de color personalizada, micro-animaciones, carrusel infinito de prensa internacional, galería interactiva y experiencia autocontenida multilingüe.",
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
          "El sitio web de Fishers Imports, desarrollado por Overfuel, destaca por su diseño elegante y funcionalidad avanzada. Ofrece una presentación impactante del inventario de lujo, búsqueda intuitiva y opciones de financiamiento, demostrando la capacidad de Overfuel para potenciar la presencia digital de concesionarios de alta gama.",
        media: [
          { type: "image", url: "https://res.cloudinary.com/dw4ecbwo9/image/upload/v1732662466/fishers_zerdbg.webp" },
        ],
        liveUrl: "https://www.fishersimports.com/",
      },
      {
        key: "portfolio",
        title: "Portafolio",
        description:
          "Mi portafolio es una aplicación web que muestra mis proyectos y habilidades. Usa tecnología moderna para presentar información de forma clara y atractiva. Muestra proyectos destacados, habilidades y formas de contacto.",
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
          "God's Good BarberShop es una landing page para una barbería. El sitio está diseñado para atraer y mantener a los clientes informados sobre los servicios y promociones disponibles. Con un enfoque en la modernidad y la conveniencia, la página se actualizará continuamente con nuevas funcionalidades y mejoras.",
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
          "Task Manager es una aplicación web que permite a los usuarios crear, editar y eliminar tareas. Usa tecnología moderna para manejar tareas, usuarios y autenticación. Permite a los usuarios crear cuentas, iniciar sesión y gestionar tareas de forma segura.",
        media: [
          { type: "image", url: "https://res.cloudinary.com/dw4ecbwo9/image/upload/v1732669722/taskmanager_agogip.webp" },
        ],
        githubUrl: "https://github.com/luisfrm/task-manager",
      },
    ],
  },
  workExperiences: {
    title: "Experiencia Laboral",
    viewMore: "Ver más",
    pageTitle: "Experiencia Laboral",
    pageSubtitle:
      "Detalle completo de mi trayectoria profesional, responsabilidades y logros destacados.",
    backToHome: "Volver al inicio",
    list: [
      {
        key: "chicksGroup",
        company: "Chicks Group",
        position: "Desarrollador Full-Stack",
        period: "Enero, 2025 – Actualidad",
        description:
          "Asignado a múltiples proyectos como ChicksGold, una plataforma de comercio electrónico; y ChicksX, una plataforma de intercambio de criptomonedas.",
        items: [
          "Implementación de nuevas funcionalidades avanzadas utilizando frameworks modulares basados en componentes (Aurelia y Angular), integrando MDC (Material Design Components) y CDS (Custom Design Components) para la optimización de UX/UI.",
          "Implementación de nuevas funcionalidades para un Marketplace desarrollado en Aurelia y Angular, junto a múltiples componentes web construidos con la librería Lit, TypeScript y StoryBook.",
          "Implementación de soluciones potenciadas por IA utilizando RAG y function calling para automatizar flujos de trabajo complejos, incluyendo el desarrollo de agentes de chat inteligentes integrados con Groq y OpenRouter para mejorar las capacidades de la aplicación.",
          "Uso de Storybook para documentar sistemáticamente la creación de nuevos componentes, estableciendo pautas de desarrollo claras y visualización en tiempo real.",
          "Resolución de problemas complejos e implementación de comunicación en tiempo real mediante SignalR/WebSockets, asegurando un rendimiento óptimo en aplicaciones de alto tráfico.",
          "Gestión de requerimientos técnicos utilizando arquitecturas modulares y patrones avanzados, manteniendo la compatibilidad con versiones anteriores mientras se modernizan interfaces heredadas.",
          "Mantenimiento y mejora de servicios backend utilizando C# y .NET, incluyendo la implementación de nuevas características, corrección de errores y optimización de rendimiento y escalabilidad.",
          "Diseño y creación de migraciones de bases de datos relacionales en MySQL con Entity Framework Core para garantizar la integridad de los datos y dar soporte a los requisitos comerciales en evolución.",
        ],
      },
      {
        key: "overfuel",
        company: "Overfuel",
        position: "Desarrollador SR Full-Stack",
        period: "Mayo 2023 — Septiembre 2024",
        description:
          "Aplicación que proporciona plataformas web para concesionarios de automóviles. Fui asignado como líder de la plataforma de 321 ignition y de el mantenimiento de esta.",
        items: [
          "Lideré la migración de 321 ignition a Overfuel, además del mantenimiento de la plataforma de 321 ignition.",
          "Desarrollé una plataforma unificada de componentes y herramientas para los diferentes productos de la empresa y acelerar la entrega de producto en un 35% de incremento.",
          "Implementé prácticas de CI/CD para mejorar la eficiencia en la entrega de software, reduciendo errores y tiempos de entrega.",
          "Lideré la mejora del rendimiento web de concesionarias como Indy Auto Man y Fishers Imports en un 15% de incremento.",
          "Colaboré en la creación de un marketplace unificado para concesionarias de vehículos en React Native con Expo, implementando sincronización de inventarios en tiempo real y con compatibilidad entre dispositivos de iOS y Android.",
          "Implementé diversos scripts de terceros mediante el manejo de Google Tag Manager.",
          "Construí una herramienta de gestión de cookies de forma transversal para todos los productos para cumplir con las leyes de consentimiento de permisos de los usuarios en más de 60 concesionarios de vehículos.",
          "Lideré el manejo de peticiones técnicas de más de 100 clientes, desarrollando así nuevos features y solicitudes.",
        ],
      },
      {
        key: "ignition321",
        company: "321ignition",
        position: "Desarrollador SR Full-Stack",
        period: "Mayo 2020 — Mayo 2023",
        description:
          "Líder de Equipo Multidisciplinario: Comencé en este rol como desarrollador Front-end, y mi desempeño me llevó a asumir un puesto de liderazgo. Fui responsable de la resolución de problemas, la coordinación de actividades y la garantía de calidad en el desarrollo de aplicaciones y funcionalidades tanto en Front-end (web y móvil) como en Back-end.",
        items: [
          "Desarrollé una arquitectura Front-end en colaboración con el equipo que mejoró la escalabilidad y el rendimiento del sitio web.",
          "Colaboré en la construcción y mantenimiento de distintos microservicios API Rest para integrar a las aplicaciones Front-end.",
          "Optimicé la interfaz de usuario de Front-end para mejorar UX/UI y performance de distintos proyectos.",
          "Colaboré en la creación de nuevos proyectos en plataformas móviles utilizando React Native, soportando la compatibilidad con dispositivos iOS y Android.",
          "Colaboré en la migración de la plataforma existente en una nueva infraestructura más escalable y mantenible con un grupo de tecnologías acorde a la necesidad del proyecto.",
          "Optimicé la implementación de scripts de terceros (analytics, marketing y tracking) usando Google Tag Manager, logrando la reducción del 60% en tiempo de deploy de nuevos tags sin necesidad de nuevos cambios en el código.",
          "Lideré un equipo multidisciplinario entre Front-end y QA para la gestión, reparto, supervisión y desarrollo de tareas de parte del equipo de client support.",
          "Dockericé entornos con multistage builds (70% más ligeros) y docker compose, acelerando despliegues y onboarding a 15 minutos.",
        ],
      },
      {
        key: "firaOnlive",
        company: "Fira onLive",
        position: "Desarrollador Front-End",
        period: "Mayo 2019 — Marzo 2020",
        description:
          "Asignado en la creación de un nuevo reproductor live-streaming y una nueva librería para fácilmente manejar las funcionalidades del player.",
        items: [
          "Desarrollé un reproductor de live streaming utilizando React y Red5Pro.",
          "Desarrollé un chat para cada uno de los eventos de streaming utilizando la librería getStreaming.",
          "Desarrollé una librería en javascript para la implementación del reproductor de streaming en sitios de terceros.",
          "Colaboré en la creación e implementación de nuevas funcionalidades en el CMS de los eventos de streaming.",
          "Automaticé el despliegue mediante pipelines CI/CD (GitHub Actions) y pruebas automatizadas con Jest, estandarizando procesos que aceleraron la entrega de features y redujeron fallos.",
          "Implementé la creación de contenedores de Docker para estandarizar entornos de desarrollo y producción, logrando consistencia en despliegues entre equipos.",
        ],
      },
    ],
  },
  education: {
    title: "Educación",
    degree: "Ingeniero Informático",
    institution: "Universidad Rafael Belloso Chacín",
    period: "Enero, 2017 - Diciembre, 2021",
    description:
      "Graduado como Ingeniero Informático desde la Universidad Rafael Belloso Chacín en el año 2021 tras 5 años de estudio y obtener aprobación en el trabajo especial de grado.",
    items: [
      "Trabajo especial de grado:",
      "Aplicación web farmacéutica desarrollada en React.js y Node junto a express y MySQL para el servidor y base de datos.",
      "La aplicación consistió en una solución para la problemática que hubo durante la pandemia del 2020 para la distribución de medicamentos de una manera más segura y eficiente a través de un marketplace de distintos distribuidores en la región.",
    ],
  },
  cv: {
    url: "https://drive.google.com/file/d/1z6Qk6MLHX2ekxokBYDe-36Hm2tGOTsf_/view?usp=sharing",
  },
  theme: {
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
  },
  common: {
    languageSwitchTo: "EN",
    scrollToTop: "Volver arriba",
    menu: "Menú",
  },
  footer: {
    status: "Disponible para nuevos proyectos",
    builtWith: "Desarrollado con Next.js & TypeScript",
    rights: "Todos los derechos reservados.",
    sitemap: "Mapa del sitio",
  },
  notFound: {
    code: "404",
    title: "Página no encontrada",
    description: "La página que buscas no existe o ha sido movida.",
    homeButton: "Volver al inicio",
  },
} as const;
