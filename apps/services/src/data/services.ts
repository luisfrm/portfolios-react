import { imageUrl, site } from "./site";

export const serviceKeys = ["landing", "sitio", "producto"] as const;
export type ServiceKey = (typeof serviceKeys)[number];

export interface Service {
  key: ServiceKey;
  slugs: Record<"es" | "en", string>;
  image: string;
  caseKeys: CaseKey[];
}

export const services: Service[] = [
  {
    key: "landing",
    slugs: { es: "landing", en: "landing" },
    image: "elpoaig-1.webp",
    caseKeys: ["el-poaig"],
  },
  {
    key: "sitio",
    slugs: { es: "sitio", en: "site" },
    image: "dnova-1.webp",
    caseKeys: ["dnova"],
  },
  {
    key: "producto",
    slugs: { es: "producto", en: "product" },
    image: "fitstack-1.webp",
    caseKeys: ["fit-stack", "delivery-los-latinos", "pulse-stream"],
  },
];

export function getService(key: ServiceKey): Service {
  const service = services.find((item) => item.key === key);
  if (!service) throw new Error(`Unknown service: ${key}`);
  return service;
}

export function serviceKeyFromSlug(
  locale: "es" | "en",
  slug: string,
): ServiceKey | undefined {
  return services.find((service) => service.slugs[locale] === slug)?.key;
}

export const caseKeys = [
  "el-poaig",
  "dnova",
  "fit-stack",
  "delivery-los-latinos",
  "pulse-stream",
] as const;
export type CaseKey = (typeof caseKeys)[number];

export type CaseClientType = "client" | "product" | "agency";
export type CaseStatus = "live" | "code";

export interface CaseImage {
  src: string;
  alt: Record<"es" | "en", string>;
}

export interface CaseLink {
  label: Record<"es" | "en", string>;
  href: string;
}

export interface CaseStudy {
  key: CaseKey;
  service: ServiceKey;
  cover: string;
  coverAlt: Record<"es" | "en", string>;
  gallery: CaseImage[];
  tech: string[];
  live: string;
  links?: CaseLink[];
  repo?: string;
  featured: boolean;
  clientType: CaseClientType;
  status: CaseStatus;
}

export const cases: CaseStudy[] = [
  {
    key: "el-poaig",
    service: "landing",
    cover: imageUrl("elpoaig-1.webp"),
    coverAlt: {
      es: "Portada de la landing de El Mil del Poaig con fotografía del olivar.",
      en: "El Mil del Poaig landing page cover with a photograph of the olive grove.",
    },
    gallery: [
      {
        src: imageUrl("elpoaig-2.webp"),
        alt: {
          es: "Detalle de la galería de El Mil del Poaig.",
          en: "Detail from the El Mil del Poaig gallery.",
        },
      },
      {
        src: imageUrl("elpoaig-3.webp"),
        alt: {
          es: "Sección editorial de la landing de El Mil del Poaig.",
          en: "Editorial section of the El Mil del Poaig landing page.",
        },
      },
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "https://elpoaig.luisrivas.site",
    featured: true,
    clientType: "client",
    status: "live",
  },
  {
    key: "dnova",
    service: "sitio",
    cover: imageUrl("dnova-1.webp"),
    coverAlt: {
      es: "Portada del sitio de D'Nova Gallery con una fotografía de estudio.",
      en: "D'Nova Gallery site cover with a studio photograph.",
    },
    gallery: [
      {
        src: imageUrl("dnova-2.webp"),
        alt: {
          es: "Galería de sesiones de D'Nova Gallery.",
          en: "Session gallery on the D'Nova Gallery site.",
        },
      },
      {
        src: imageUrl("dnova-3.webp"),
        alt: {
          es: "Panel de administración de D'Nova Gallery.",
          en: "D'Nova Gallery admin dashboard.",
        },
      },
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Supabase",
      "Cloudflare R2",
      "shadcn/ui",
    ],
    live: "https://dnovagallery.luisrivas.site/en",
    repo: "https://github.com/luisfrm/photographer-ui",
    featured: true,
    clientType: "client",
    status: "live",
  },
  {
    key: "fit-stack",
    service: "producto",
    cover: imageUrl("fitstack-1.webp"),
    coverAlt: {
      es: "Panel de administración de FIT Stack con métricas del gimnasio.",
      en: "FIT Stack admin panel with gym metrics.",
    },
    gallery: [
      {
        src: imageUrl("fitstack-2.webp"),
        alt: {
          es: "Vista de socios y renovaciones en FIT Stack.",
          en: "Members and renewals view in FIT Stack.",
        },
      },
      {
        src: imageUrl("fitstack-3.webp"),
        alt: {
          es: "Consola de super-administración de FIT Stack.",
          en: "FIT Stack super-admin console.",
        },
      },
      {
        src: imageUrl("fitstack-4.webp"),
        alt: {
          es: "Asistente de IA del panel de FIT Stack con cambio de sede.",
          en: "FIT Stack panel AI assistant with location switcher.",
        },
      },
      {
        src: imageUrl("fitstack-5.webp"),
        alt: {
          es: "Consola SaaS de FIT Stack con métricas globales y organizaciones.",
          en: "FIT Stack SaaS console with global metrics and organizations.",
        },
      },
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Cloudflare Workers",
      "Hono",
      "Neon Postgres",
      "Drizzle ORM",
      "Upstash Redis",
      "Workers AI",
      "RAG & Tool Calling",
      "CMS & Blog",
    ],
    live: "https://fitstack-panel.luisrivas.site",
    links: [
      {
        label: { es: "Panel de gimnasios", en: "Gym panel" },
        href: "https://fitstack-panel.luisrivas.site",
      },
      {
        label: { es: "Consola SaaS", en: "SaaS console" },
        href: "https://fitstack-console.luisrivas.site",
      },
    ],
    repo: "https://github.com/luisfrm/fit-stack",
    featured: false,
    clientType: "client",
    status: "live",
  },
  {
    key: "delivery-los-latinos",
    service: "producto",
    cover: imageUrl("loslatinos-1.webp"),
    coverAlt: {
      es: "Plataforma de pedidos a domicilio de Delivery Los Latinos.",
      en: "Delivery Los Latinos food ordering platform.",
    },
    gallery: [
      {
        src: imageUrl("loslatinos-2.webp"),
        alt: {
          es: "Panel de administración de Delivery Los Latinos.",
          en: "Delivery Los Latinos admin dashboard.",
        },
      },
      {
        src: imageUrl("loslatinos-3.webp"),
        alt: {
          es: "Editor de menú con arrastrar y soltar.",
          en: "Menu editor with drag and drop.",
        },
      },
      {
        src: imageUrl("loslatinos-4.webp"),
        alt: {
          es: "Vista móvil de la plataforma de pedidos.",
          en: "Mobile view of the ordering platform.",
        },
      },
    ],
    tech: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "dnd-kit",
    ],
    live: "https://deliveryloslatinos.es",
    repo: "https://github.com/luisfrm/delivery-orihuela",
    featured: true,
    clientType: "client",
    status: "live",
  },
  {
    key: "pulse-stream",
    service: "producto",
    cover: imageUrl("pulsestream-1.webp"),
    coverAlt: {
      es: "Biblioteca musical de Pulse Stream con el reproductor global.",
      en: "Pulse Stream music library with the global player.",
    },
    gallery: [
      {
        src: imageUrl("pulsestream-2.webp"),
        alt: {
          es: "Vista de álbum y cola de reproducción en Pulse Stream.",
          en: "Album view and playback queue in Pulse Stream.",
        },
      },
      {
        src: imageUrl("pulsestream-3.webp"),
        alt: {
          es: "Panel de catálogo de Pulse Stream.",
          en: "Pulse Stream catalogue dashboard.",
        },
      },
    ],
    tech: [
      "Python 3.13",
      "FastAPI",
      "SQLAlchemy 2.0",
      "Neon Postgres",
      "Cloudflare R2",
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "PWA",
    ],
    live: "https://pulse-stream.luisrivas.site",
    repo: "https://github.com/luisfrm/pulse-stream",
    featured: false,
    clientType: "product",
    // La demo pública devuelve 500; se muestra el repositorio.
    status: "code",
  },
];

export function getCase(key: CaseKey): CaseStudy {
  const study = cases.find((item) => item.key === key);
  if (!study) throw new Error(`Unknown case: ${key}`);
  return study;
}

export function nextCase(key: CaseKey): CaseStudy {
  const index = cases.findIndex((item) => item.key === key);
  return cases[(index + 1) % cases.length];
}

export const featuredCases = cases.filter((item) => item.featured);
export const orderedCases = [...cases];

export const siteEmailHref = `mailto:${site.email}`;
