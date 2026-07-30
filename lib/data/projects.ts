// Named technology constants per project — easy to reference and extend
export const gymManagerTechnologies = [
  "Vite",
  "React",
  "Tailwind CSS",
  "Shadcn-ui",
  "TypeScript",
  "Zustand",
  "Tanstack Query",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JWT",
  "Jest",
  "Docker",
  "Mongoose",
  "RESTful API",
  "Zod",
] as const;

export const fishersImportsTechnologies = [
  "Next.js",
  "Tailwind CSS",
  "CodeIgniter",
  "MySQL",
  "Google Tag Manager",
  "AWS",
  "Docker",
  "Kubernetes",
  "RESTful",
] as const;

export const portfolioTechnologies = [
  "React",
  "Tailwind CSS",
  "TypeScript",
  "useContext",
  "Vite",
  "Shadcn-ui",
  "Netlify",
] as const;

export const godsGoodBarbershopTechnologies = [
  "Next.js",
  "Typescript",
  "Tailwind CSS",
  "Shadcn-ui",
  "Server components",
  "Client components",
] as const;

export const fitStackTechnologies = [
  "Next.js 16 (App Router)",
  "React 19",
  "TypeScript 5",
  "Turborepo",
  "Cloudflare Workers (Edge Functions)",
  "Cloudflare Queues",
  "Cloudflare R2",
  "Hono API",
  "Drizzle ORM",
  "Neon Serverless Postgres",
  "Upstash Redis",
  "Better Auth (Multi-tenant RBAC)",
  "Python (Flet Desktop)",
  "Tailwind CSS v4",
  "shadcn/ui",
  "Resend API",
  "Terraform (IaC)",
  "GitHub Actions (CI/CD)",
] as const;

export const dnovaGalleryTechnologies = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "Supabase",
  "Cloudflare R2",
  "shadcn/ui",
  "Lucide Icons",
] as const;

export const deliveryLosLatinosTechnologies = [
  "Next.js",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "dnd-kit",
] as const;

export const elPoaigTechnologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
] as const;

export const taskManagerTechnologies = [
  "React",
  "Tailwind CSS",
  "Javascript",
  "Node.js",
  "Express.js",
  "Mongoose",
  "MongoDB",
  "JWT",
  "Zod",
] as const;

// Media item interface — supports images and videos (video player coming soon)
export interface ProjectMedia {
  type: "image" | "video";
  url: string;
}

// Project interface
export interface Project {
  key: string;
  technologies: readonly string[];
}

// Unified project array — each project carries its technologies internally.
// Media (images/videos) lives in the i18n dictionaries alongside title and description.
export const projects: Project[] = [
  { key: "fitStack",           technologies: [...fitStackTechnologies] },
  { key: "dnovaGallery",       technologies: [...dnovaGalleryTechnologies] },
  { key: "deliveryLosLatinos", technologies: [...deliveryLosLatinosTechnologies] },
  { key: "elPoaig",            technologies: [...elPoaigTechnologies] },
  { key: "fishersImports",     technologies: [...fishersImportsTechnologies] },
  { key: "portfolio",          technologies: [...portfolioTechnologies] },
  { key: "godsGoodBarbershop", technologies: [...godsGoodBarbershopTechnologies] },
  { key: "taskManager",        technologies: [...taskManagerTechnologies] },
];
