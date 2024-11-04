import { fishers_import, overfuel, remote360, gym_manager, virtualvegas } from "@/assets";
import { Github, Linkedin } from "lucide-react";

export const data = {
	personal: {
		title: "About me",
		name: "¡Hola! Soy Luis Rivas👋",
		role: "Full Stack Web Developer",
		about: `Soy un Ingeniero informatico, autodidacta ubicado en Venezuela. Con +4 años de experiencia en el desarrollo web, me especializo en Full-Stack Web Development. Mi pasión radica en la automatizacion, innovacion y creacion de nuevos productos. Siempre estoy emocionado por asumir nuevos desafíos en el mundo en constante evolución de la tecnología.`,
	},
	skills: [
		{
			"name": "React.js",
			"url": "https://reactjs.org/docs/getting-started.html",
			"icon": "⚛️"
		},
		{
			"name": "Next.js",
			"url": "https://nextjs.org/docs",
			"icon": "▲"
		},
		{
			"name": "Redux Toolkit",
			"url": "https://redux-toolkit.js.org/introduction/getting-started",
			"icon": "🔄"
		},
		{
			"name": "Redux Toolkit Query",
			"url": "https://redux-toolkit.js.org/rtk-query/overview",
			"icon": "🔍"
		},
		{
			"name": "Vue.js",
			"url": "https://vuejs.org/guide/introduction.html",
			"icon": "🖖"
		},
		{
			"name": "Node.js",
			"url": "https://nodejs.org/en/docs/",
			"icon": "📗"
		},
		{
			"name": "Express.js",
			"url": "https://expressjs.com/en/4x/api.html",
			"icon": "🚂"
		},
		{
			"name": "Astro",
			"url": "https://docs.astro.build",
			"icon": "🚀"
		},
		{
			"name": "Python",
			"url": "https://docs.python.org/3/",
			"icon": "🐍"
		},
		{
			"name": "Django",
			"url": "https://docs.djangoproject.com/",
			"icon": "🎸"
		},
		{
			"name": "TypeScript",
			"url": "https://www.typescriptlang.org/docs/",
			"icon": "🔷"
		},
		{
			"name": "JavaScript",
			"url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
			"icon": "🟨"
		},
		{
			"name": "MongoDB",
			"url": "https://docs.mongodb.com/",
			"icon": "🍃"
		},
		{
			"name": "MySQL",
			"url": "https://dev.mysql.com/doc/",
			"icon": "🐬"
		},
		{
			"name": "SQL Server",
			"url": "https://docs.microsoft.com/en-us/sql/sql-server/",
			"icon": "🗄️"
		},
		{
			"name": "Postgres",
			"url": "https://www.postgresql.org/docs/",
			"icon": "🐘"
		},
		{
			"name": "jQuery",
			"url": "https://api.jquery.com/",
			"icon": "🌐"
		},
		{
			"name": "Git",
			"url": "https://git-scm.com/doc",
			"icon": "🌿"
		},
		{
			"name": "SASS / SCSS",
			"url": "https://sass-lang.com/documentation",
			"icon": "💅"
		},
		{
			"name": "Google Tag Manager",
			"url": "https://developers.google.com/tag-manager",
			"icon": "🏷️"
		},
		{
			"name": "Bootstrap",
			"url": "https://getbootstrap.com/docs/",
			"icon": "🅱️"
		},
		{
			"name": "Tailwind CSS",
			"url": "https://tailwindcss.com/docs",
			"icon": "🌬️"
		},
		{
			"name": "AWS",
			"url": "https://docs.aws.amazon.com/",
			"icon": "☁️"
		},
		{
			"name": "Google Cloud",
			"url": "https://cloud.google.com/docs",
			"icon": "☁️"
		},
		{
			"name": "HTML5",
			"url": "https://developer.mozilla.org/en-US/docs/Web/HTML",
			"icon": "🌐"
		},
		{
			"name": "CSS3",
			"url": "https://developer.mozilla.org/en-US/docs/Web/CSS",
			"icon": "🎨"
		},
		{
			"name": "WebSockets",
			"url": "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
			"icon": "🔌"
		},
		{
			"name": "Scrum",
			"url": "https://www.scrum.org/resources/what-is-scrum",
			"icon": "🏉"
		},
		{
			"name": "Kanban",
			"url": "https://www.atlassian.com/agile/kanban",
			"icon": "📊"
		},
		{
			"name": "Micro-Frontend",
			"url": "https://micro-frontends.org/",
			"icon": "🧩"
		},
		{
			"name": "CI/CD",
			"url": "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
			"icon": "🔄"
		},
		{
			"name": "Jest",
			"url": "https://jestjs.io/docs/getting-started",
			"icon": "🃏"
		},
		{
			"name": "Bash",
			"url": "https://www.gnu.org/software/bash/manual/bash.html",
			"icon": "💻"
		},
		{
			"name": "Docker",
			"url": "https://docs.docker.com/",
			"icon": "🐳"
		},
		{
			"name": "Kubernetes",
			"url": "https://kubernetes.io/docs/home/",
			"icon": "☸️"
		},
		{
			"name": "RESTful API",
			"url": "https://restfulapi.net/",
			"icon": "🔗"
		},
		{
			"name": "GraphQL",
			"url": "https://graphql.org/learn/",
			"icon": "📊"
		},
		{
			"name": "JWT",
			"url": "https://jwt.io/introduction",
			"icon": "🔐"
		},
		{
			"name": "Terraform",
			"url": "https://www.terraform.io/docs",
			"icon": "🏗️"
		}
	],
	contact: {
		email: "luisfrm_@outlook.com",
		phone: "+58 4124722407",
		city: "Maracaibo, Venezuela",
	},
	socialMedia: [
		{
			name: "GitHub",
			icon: <Github className="w-4 h-4" />,
			url: "https://github.com/luisfrm/",
		},
		{
			name: "LinkedIn",
			icon: <Linkedin className="w-4 h-4" />,
			url: "https://www.linkedin.com/in/luisfrm10/",
		}
	],
	projects: [
		{
			title: "Gym Manager Frontend",
			description: "This is a brief description of the project.",
			imageUrl: gym_manager,
			technologies: ["Vite", "React", "Tailwind CSS", "Shadcn-ui", "TypeScript", "Redux Toolkit", "Redux Toolkit Query"],
			githubUrl: "https://github.com/luisfrm/gym-manager-frontend",
			liveUrl: "https://gym-manager-frontend.netlify.app/",
		},
		{
			title: "Gym Manager Backend",
			description: "This is a brief description of the project.",
			technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "TypeScript", "Jest", "Docker", "Kubernetes", "CI/CD", "Mongoose", "RESTful API", "zod"],
			githubUrl: "https://github.com/luisfrm/gym-manager-frontend",
		},
		{
			title: "Remote 360",
			description: "This is a brief description of the project.",
			imageUrl: remote360,
			technologies: ["Vite", "React", "Tailwind CSS", "Shadcn-ui", "TypeScript", "Redux Toolkit", "Redux Toolkit Query","Node.js", "Express.js", "MongoDB", "JWT", "TypeScript", "Jest", "Docker", "Kubernetes", "CI/CD", "Mongoose", "RESTful API", "zod"],
			githubUrl: "https://github.com/luisfrm/remote-360",
		},
		{
			title: "Overfuel LLC",
			description: "This is a brief description of the project.",
			imageUrl: overfuel,
			technologies: ["Next.js", "Tailwind CSS", "CodeIgniter", "MySQL", "Google Tag Manager", "AWS", "Docker", "Kubernetes", "RESTful"],
			githubUrl: "https://github.com",
			liveUrl: "https://overfuel.com/",
		},
		{
			title: "Fishers Imports",
			description: "This is a brief description of the project.",
			imageUrl: fishers_import,
			technologies: ["Next.js", "Tailwind CSS", "CodeIgniter", "MySQL", "Google Tag Manager", "AWS", "Docker", "Kubernetes", "RESTful"],
			liveUrl: "https://www.fishersimports.com/",
		},
		{
			title: "Virtual Vegas",
			description: "This is a Telegram Bot made with Python3, Django and PostgreSQL.",
			imageUrl: virtualvegas,
			technologies: ["Python3", "Django", "Python-telegram-bot", "Docker", "RESTful"],
			githubUrl: "https://github.com/luisfrm/virtualvegas",
			liveUrl: "https://t.me/virtualvegasbot",
		},
	],
};