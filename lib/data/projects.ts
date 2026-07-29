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

// Unified project array — each project carries its technologies internally
export interface Project {
  key: string;
  technologies: readonly string[];
}

export const projects: Project[] = [
  { key: "gymManager",         technologies: [...gymManagerTechnologies] },
  { key: "fishersImports",     technologies: [...fishersImportsTechnologies] },
  { key: "portfolio",          technologies: [...portfolioTechnologies] },
  { key: "godsGoodBarbershop", technologies: [...godsGoodBarbershopTechnologies] },
  { key: "taskManager",        technologies: [...taskManagerTechnologies] },
];
