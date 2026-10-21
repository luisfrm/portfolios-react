export interface Skill {
  name: string;
  url: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const SKILLS_CATEGORIES_DATA: SkillCategory[] = [
  {
    category: "Frontend & Mobile",
    skills: [
      { name: "React.js", url: "https://reactjs.org/docs/getting-started.html" },
      { name: "Next.js", url: "https://nextjs.org/docs" },
      { name: "React Native", url: "https://reactnative.dev/" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/docs/" },
      { name: "JavaScript (ES6+)", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Vue.js", url: "https://vuejs.org/" },
      { name: "Angular", url: "https://angular.dev/" },
      { name: "Astro", url: "https://docs.astro.build" },
      { name: "Aurelia", url: "https://aurelia.io/" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
      { name: "Zustand", url: "https://zustand-demo.pmnd.rs/" },
      { name: "Tanstack Query", url: "https://tanstack.com/query/" },
      { name: "Redux Toolkit", url: "https://redux-toolkit.js.org/" },
      { name: "HTML5 / CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "SASS / SCSS", url: "https://sass-lang.com/" },
    ],
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "Node.js", url: "https://nodejs.org/" },
      { name: "NestJS", url: "https://nestjs.com/" },
      { name: ".NET / C#", url: "https://dotnet.microsoft.com/" },
      { name: "Express.js", url: "https://expressjs.com/" },
      { name: "Python", url: "https://docs.python.org/3/" },
      { name: "Django", url: "https://docs.djangoproject.com/" },
      { name: "RESTful APIs", url: "https://restfulapi.net/" },
      { name: "GraphQL", url: "https://graphql.org/" },
      { name: "WebSockets", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
      { name: "JWT", url: "https://jwt.io/" },
      { name: "Clean Architecture", url: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" },
    ],
  },
  {
    category: "AI & Automation",
    skills: [
      { name: "Claude API / Anthropic", url: "https://docs.anthropic.com/" },
      { name: "Cursor / AI Workflows", url: "https://cursor.com/" },
      { name: "OpenAI / RAG Architecture", url: "https://platform.openai.com/" },
      { name: "AI Function Calling", url: "https://platform.openai.com/docs/guides/function-calling" },
      { name: "OpenCode", url: "https://github.com/" },
      { name: "Prompt Engineering", url: "https://www.promptingguide.ai/" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS (S3, Lambda)", url: "https://docs.aws.amazon.com/" },
      { name: "Azure", url: "https://learn.microsoft.com/en-us/azure/" },
      { name: "Google Cloud", url: "https://cloud.google.com/docs" },
      { name: "Serverless & Edge Functions", url: "https://vercel.com/docs/functions/edge-functions" },
      { name: "Docker", url: "https://docs.docker.com/" },
      { name: "Kubernetes", url: "https://kubernetes.io/" },
      { name: "GitHub Actions / CI/CD", url: "https://docs.github.com/en/actions" },
      { name: "Terraform", url: "https://www.terraform.io/" },
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "MongoDB", url: "https://docs.mongodb.com/" },
      { name: "PostgreSQL", url: "https://www.postgresql.org/" },
      { name: "MySQL", url: "https://dev.mysql.com/doc/" },
      { name: "SQL Server", url: "https://docs.microsoft.com/en-us/sql/sql-server/" },
      { name: "TypeORM", url: "https://typeorm.io/" },
      { name: "Prisma", url: "https://www.prisma.io/" },
      { name: "Git", url: "https://git-scm.com/" },
      { name: "Jest", url: "https://jestjs.io/" },
      { name: "Bash / Shell Scripting", url: "https://www.gnu.org/software/bash/" },
      { name: "Scrum & Agile", url: "https://www.scrum.org/" },
    ],
  },
];
