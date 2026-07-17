export interface Skill {
  name: string;
  url: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const SKILLS_CATEGORIES_DATA: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", url: "https://reactjs.org/docs/getting-started.html", icon: "⚛️" },
      { name: "Next.js", url: "https://nextjs.org/docs", icon: "▲" },
      { name: "Astro", url: "https://docs.astro.build", icon: "🚀" },
      { name: "Vue.js", url: "https://vuejs.org/guide/introduction.html", icon: "🖖" },
      { name: "Aurelia", url: "https://aurelia.io/docs/getting-started/what-is-aurelia", icon: "🔴" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/docs/", icon: "🔷" },
      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: "🟨" },
      { name: "Zustand", url: "https://zustand-demo.pmnd.rs/", icon: "🔍" },
      { name: "Tanstack Query", url: "https://tanstack.com/query/latest/docs/framework/react/overview", icon: "🔍" },
      { name: "Redux Toolkit", url: "https://redux-toolkit.js.org/introduction/getting-started", icon: "🔄" },
      { name: "RTK Query", url: "https://redux-toolkit.js.org/rtk-query/overview", icon: "🔍" },
      { name: "HTML5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: "🌐" },
      { name: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", icon: "🎨" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/docs", icon: "🌬️" },
      { name: "SASS / SCSS", url: "https://sass-lang.com/documentation", icon: "💅" },
      { name: "Bootstrap", url: "https://getbootstrap.com/docs/", icon: "🅱️" },
      { name: "jQuery", url: "https://api.jquery.com/", icon: "🌐" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", url: "https://nodejs.org/en/docs/", icon: "📗" },
      { name: "Express.js", url: "https://expressjs.com/en/4x/api.html", icon: "🚂" },
      { name: "Python", url: "https://docs.python.org/3/", icon: "🐍" },
      { name: "Django", url: "https://docs.djangoproject.com/", icon: "🎸" },
      { name: "RESTful API", url: "https://restfulapi.net/", icon: "🔗" },
      { name: "Cron Job", url: "https://cron-job.org/en/", icon: "🕒" },
      { name: "GraphQL", url: "https://graphql.org/learn/", icon: "📊" },
      { name: "JWT", url: "https://jwt.io/introduction", icon: "🔐" },
      { name: "WebSockets", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API", icon: "🔌" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", url: "https://docs.mongodb.com/", icon: "🍃" },
      { name: "MySQL", url: "https://dev.mysql.com/doc/", icon: "🐬" },
      { name: "SQL Server", url: "https://docs.microsoft.com/en-us/sql/sql-server/", icon: "🗄️" },
      { name: "Postgres", url: "https://www.postgresql.org/docs/", icon: "🐘" },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS", url: "https://docs.aws.amazon.com/", icon: "☁️" },
      { name: "Google Cloud", url: "https://cloud.google.com/docs", icon: "☁️" },
      { name: "Azure", url: "https://learn.microsoft.com/en-us/azure/", icon: "🔵" },
      { name: "S3", url: "https://docs.aws.amazon.com/s3/index.html", icon: "🔴" },
      { name: "Docker", url: "https://docs.docker.com/", icon: "🐳" },
      { name: "Kubernetes", url: "https://kubernetes.io/docs/home/", icon: "☸️" },
      { name: "Terraform", url: "https://www.terraform.io/docs", icon: "🏗️" },
      { name: "CI/CD", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd", icon: "🔄" },
      { name: "GitHub Actions", url: "https://docs.github.com/en/actions", icon: "🔄" },
    ],
  },
  {
    category: "Tools & Other",
    skills: [
      { name: "Git", url: "https://git-scm.com/doc", icon: "🌿" },
      { name: "Jest", url: "https://jestjs.io/docs/getting-started", icon: "🃏" },
      { name: "Bash", url: "https://www.gnu.org/software/bash/manual/bash.html", icon: "💻" },
      { name: "Scrum", url: "https://www.scrum.org/resources/what-is-scrum", icon: "🏉" },
      { name: "Google Tag Manager", url: "https://developers.google.com/tag-manager", icon: "🏷️" },
      { name: "Kanban", url: "https://www.atlassian.com/agile/kanban", icon: "📊" },
      { name: "Figma", url: "https://www.figma.com/design/1234567890/1234567890", icon: "🎨" },
      { name: "Micro-Frontend", url: "https://micro-frontends.org/", icon: "🧩" },
    ],
  },
];
