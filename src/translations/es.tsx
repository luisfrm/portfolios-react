// import { fishers_import, overfuel, remote360, gym_manager, virtualvegas, starauto } from "@/assets";
import { fishers_import, remote360, god_is_good, portfolios, task_manager } from "@/assets";

import { Github, Linkedin } from "lucide-react";
import { Data } from "@/lib/types";

export const es: Data = {
	personal: {
		title: "Acerca de mi",
		name: "¡Hola! Soy Luis Rivas👋",
		role: "Full Stack Web Developer",
		about: `Ingeniero informatico, autodidacta ubicado en Latinoamérica. Con +4 años de experiencia en el desarrollo web, me especializo en Full-Stack Web Development. Mi pasión radica en la automatizacion, innovacion y creacion de nuevos productos. Siempre estoy emocionado por asumir nuevos desafíos en el mundo en constante evolución de la tecnología.`,
	},
	skills: {
		title: "Habilidades",
		skillsList: [
			{
				name: "React.js",
				url: "https://reactjs.org/docs/getting-started.html",
				icon: "⚛️",
			},
			{
				name: "Next.js",
				url: "https://nextjs.org/docs",
				icon: "▲",
			},
			{
				name: "Redux Toolkit",
				url: "https://redux-toolkit.js.org/introduction/getting-started",
				icon: "🔄",
			},
			{
				name: "Redux Toolkit Query",
				url: "https://redux-toolkit.js.org/rtk-query/overview",
				icon: "🔍",
			},
			{
				name: "Vue.js",
				url: "https://vuejs.org/guide/introduction.html",
				icon: "🖖",
			},
			{
				name: "Node.js",
				url: "https://nodejs.org/en/docs/",
				icon: "📗",
			},
			{
				name: "Express.js",
				url: "https://expressjs.com/en/4x/api.html",
				icon: "🚂",
			},
			{
				name: "Astro",
				url: "https://docs.astro.build",
				icon: "🚀",
			},
			{
				name: "Python",
				url: "https://docs.python.org/3/",
				icon: "🐍",
			},
			{
				name: "Django",
				url: "https://docs.djangoproject.com/",
				icon: "🎸",
			},
			{
				name: "TypeScript",
				url: "https://www.typescriptlang.org/docs/",
				icon: "🔷",
			},
			{
				name: "JavaScript",
				url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
				icon: "🟨",
			},
			{
				name: "MongoDB",
				url: "https://docs.mongodb.com/",
				icon: "🍃",
			},
			{
				name: "MySQL",
				url: "https://dev.mysql.com/doc/",
				icon: "🐬",
			},
			{
				name: "SQL Server",
				url: "https://docs.microsoft.com/en-us/sql/sql-server/",
				icon: "🗄️",
			},
			{
				name: "Postgres",
				url: "https://www.postgresql.org/docs/",
				icon: "🐘",
			},
			{
				name: "jQuery",
				url: "https://api.jquery.com/",
				icon: "🌐",
			},
			{
				name: "Git",
				url: "https://git-scm.com/doc",
				icon: "🌿",
			},
			{
				name: "SASS / SCSS",
				url: "https://sass-lang.com/documentation",
				icon: "💅",
			},
			{
				name: "Google Tag Manager",
				url: "https://developers.google.com/tag-manager",
				icon: "🏷️",
			},
			{
				name: "Bootstrap",
				url: "https://getbootstrap.com/docs/",
				icon: "🅱️",
			},
			{
				name: "Tailwind CSS",
				url: "https://tailwindcss.com/docs",
				icon: "🌬️",
			},
			{
				name: "AWS",
				url: "https://docs.aws.amazon.com/",
				icon: "☁️",
			},
			{
				name: "Google Cloud",
				url: "https://cloud.google.com/docs",
				icon: "☁️",
			},
			{
				name: "HTML5",
				url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
				icon: "🌐",
			},
			{
				name: "CSS3",
				url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
				icon: "🎨",
			},
			{
				name: "WebSockets",
				url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
				icon: "🔌",
			},
			{
				name: "Scrum",
				url: "https://www.scrum.org/resources/what-is-scrum",
				icon: "🏉",
			},
			{
				name: "Kanban",
				url: "https://www.atlassian.com/agile/kanban",
				icon: "📊",
			},
			{
				name: "Micro-Frontend",
				url: "https://micro-frontends.org/",
				icon: "🧩",
			},
			{
				name: "CI/CD",
				url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
				icon: "🔄",
			},
			{
				name: "Jest",
				url: "https://jestjs.io/docs/getting-started",
				icon: "🃏",
			},
			{
				name: "Bash",
				url: "https://www.gnu.org/software/bash/manual/bash.html",
				icon: "💻",
			},
			{
				name: "Docker",
				url: "https://docs.docker.com/",
				icon: "🐳",
			},
			{
				name: "Kubernetes",
				url: "https://kubernetes.io/docs/home/",
				icon: "☸️",
			},
			{
				name: "RESTful API",
				url: "https://restfulapi.net/",
				icon: "🔗",
			},
			{
				name: "GraphQL",
				url: "https://graphql.org/learn/",
				icon: "📊",
			},
			{
				name: "JWT",
				url: "https://jwt.io/introduction",
				icon: "🔐",
			},
			{
				name: "Terraform",
				url: "https://www.terraform.io/docs",
				icon: "🏗️",
			},
		],
	},
	contact: {
		email: "luisfrm_@outlook.com",
		phone: "+58 4124722407",
		city: "Latinoamérica",
		download: "Descargar CV",
	},
	navItems: [
		{ name: "Experiencia", href: "experience" },
		{ name: "Proyectos", href: "projects" },
		{ name: "Sobre mi", href: "about" },
	],
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
		},
	],
	projects: {
		title: "Proyectos",
		projectList: [
			{
				title: "Remote 360",
				description:
					"REMOTE-360 es una app web para evaluar empleados que trabajan desde casa. Permite a jefes y compañeros dar opiniones sobre el trabajo de otros. Usa tecnología moderna para hacer formularios, manejar usuarios y crear informes simples. Ayuda a ver cómo trabaja la gente sin estar en la oficina.",
				imageUrl: remote360,
				technologies: [
					"Vite",
					"React",
					"Tailwind CSS",
					"Shadcn-ui",
					"TypeScript",
					"Redux Toolkit",
					"Redux Toolkit Query",
					"Node.js",
					"Express.js",
					"MongoDB",
					"JWT",
					"TypeScript",
					"Jest",
					"Docker",
					"Kubernetes",
					"CI/CD",
					"Mongoose",
					"RESTful API",
					"Zod",
				],
				githubUrl: "https://github.com/luisfrm/remote-360",
				liveUrl: "https://remote360.netlify.app/login",
			},
			{
				title: "God's Good BarberShop",
				description: 
					"God's Good BarberShop es una landing page para una barbería. El sitio está diseñado para atraer y mantener a los clientes informados sobre los servicios y promociones disponibles. Con un enfoque en la modernidad y la conveniencia, la página se actualizará continuamente con nuevas funcionalidades y mejoras para seguir siendo relevante y atractiva.",
				technologies: ["Next.js", "Typescript", "Tailwind CSS", "Shadcn-ui", "Server components", "Client components"],
				imageUrl: god_is_good,
				githubUrl: "https://github.com/luisfrm/god-is-good-barbershop",
				liveUrl: "https://god-is-good-barbershop.vercel.app",
			},
			{
				title: "Portafolio",
				description:
					"Mi portafolio es una aplicación web que muestra mis proyectos y habilidades. Usa tecnología moderna para presentar información de forma clara y atractiva. Muestra proyectos destacados, habilidades y formas de contacto. Es una forma de mostrar mi trabajo y experiencia a empleadores y colegas.",
				technologies: ["React", "Tailwind CSS", "TypeScript", "useContext", "Vite", "Shadcn-ui", "Netlify"],
				imageUrl: portfolios,
				githubUrl: "https://github.com/luisfrm/portfolios-react",
				liveUrl: "https://luisrivas-portfolios.netlify.app",
			},
			{
				title: "Fishers Imports",
				description:
					"El sitio web de Fishers Imports, desarrollado por Overfuel, destaca por su diseño elegante y funcionalidad avanzada. Ofrece una presentación impactante del inventario de lujo, búsqueda intuitiva y opciones de financiamiento, demostrando la capacidad de Overfuel para potenciar la presencia digital de concesionarios de alta gama.",
				imageUrl: fishers_import,
				technologies: [
					"Next.js",
					"Tailwind CSS",
					"CodeIgniter",
					"MySQL",
					"Google Tag Manager",
					"AWS",
					"Docker",
					"Kubernetes",
					"RESTful",
				],
				liveUrl: "https://www.fishersimports.com/",
			},
			{
				title: "Task Manager",
				description:
					"Task Manager es una aplicación web monorepo que permite a los usuarios crear, editar y eliminar tareas. Usa tecnología moderna para manejar tareas, usuarios y autenticación. Permite a los usuarios crear cuentas, iniciar sesión y gestionar tareas de forma segura. Es una forma de organizar y planificar tareas de forma eficiente.",
				technologies: [
					"React",
					"Tailwind CSS",
					"Javascript",
					"Node.js",
					"Express.js",
					"Mongoose",
					"MongoDB",
					"JWT",
					"Zod",
				],
				imageUrl: task_manager,
				githubUrl: "https://github.com/luisfrm/task-manager",
			},
		],
	},
	workExperiences: {
		title: "Experiencia Laboral",
		workExperiencesList: [
			{
				company: "Overfuel",
				position: "Desarrollador Full-Stack",
				period: "Mayo 2023 — Presente",
				description:
					"Diseñé e implementé funcionalidades innovadoras utilizando Next.js o Vue para mejorar la interacción del usuario. Trabajé en el análisis y corrección de errores en el software empleando herramientas de diagnóstico y seguimiento en GitHub y Jira, asegurando estabilidad y rendimiento óptimo. Colaboré en el desarrollo del Back-end utilizando Node.js y Express dentro de una arquitectura de microservicios, promoviendo la escalabilidad y mantenibilidad. Utilizando ademas una base de datos en MongoDB. Manejé eficazmente de peticiones técnicas y no técnicas de los clientes, utilizando la metodología Scrum para gestionar y priorizar tareas, y Google Tag Manager para la implementación de thirdparties.",
				skills: [
					"Next.js",
					"Vue",
					"Node.js",
					"Express",
					"JavaScript",
					"TypeScript",
					"Git",
					"GitHub",
					"Jira",
					"Scrum",
					"Google Tag Manager",
					"Microservices",
					"API Rest",
					"Google Analytics",
					"Docker",
					"Kubernetes",
					"CI/CD",
					"CircleCI",
					"AWS",
				],
			},
			{
				company: "321ignition",
				position: "Desarrollador Lead Front-End",
				period: "Mayo 2020 — Mayo 2023",
				description:
					"Desarrollé una arquitectura Front-end en colaboración con el equipo que mejoró la escalabilidad y el rendimiento del sitio web. Desarrollé e implementé APIs REST para integrar la aplicación Front-end con microservicios de backend. Optimicé la interfaz de usuario del Front-end para mejorar la experiencia de usuario (UX/UI). Colaboré en la migración de varias aplicaciones Front-end de Vue.js a Next.js. Atendí y resolví peticiones de clientes para la elaboración de nuevas funcionalidades.",
				skills: [
					"Vue.js",
					"Next.js",
					"Node.js",
					"Express",
					"JavaScript",
					"TypeScript",
					"Git",
					"GitHub",
					"API Development",
					"UX/UI",
					"Team Leadership",
					"Microservices",
					"Google Tag Manager",
					"Google Analytics",
					"Scrum",
					"Docker",
					"Kubernetes",
					"CI/CD",
					"CircleCI",
					"GPC / GCloud",
				],
			},
			{
				company: "Fira onLive",
				position: "Front End Developer",
				period: "Mayo 2019 — Marzo 2020",
				description:
					"Desarrollé un reproductor de streaming utilizando React.js junto con Redux para la gestión de estados globales y Red5 Pro como SDK. Implementé un chat en React.js utilizando la librería de GetStream.io para la gestión de mensajes en tiempo real. Creé una librería en JavaScript para la implementación del reproductor de streaming para el uso de clientes.",
				skills: [
					"React.js",
					"Redux",
					"Redux-thunk",
					"JavaScript",
					"TypeScript",
					"Git",
					"API Rest",
					"CMS",
					"Live Streaming",
					"Red5 Pro",
					"GetStream.io",
					"WebSockets",
					"MS Azure",
				],
			},
		],
	},
};
