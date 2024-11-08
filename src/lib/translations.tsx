import { fishers_import, overfuel, remote360, gym_manager, virtualvegas, starauto } from "@/assets";
import { Github, Linkedin } from "lucide-react";
import { Data } from "./types";

export const es: Data = {
	personal: {
		title: "Acerca de mi",
		name: "¡Hola! Soy Luis Rivas👋",
		role: "Full Stack Web Developer",
		about: `Soy un Ingeniero informatico, autodidacta ubicado en Latinoamérica. Con +4 años de experiencia en el desarrollo web, me especializo en Full-Stack Web Development. Mi pasión radica en la automatizacion, innovacion y creacion de nuevos productos. Siempre estoy emocionado por asumir nuevos desafíos en el mundo en constante evolución de la tecnología.`,
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
	},
	navItems: [
		{ name: "Sobre mi", href: "about" },
		{ name: "Proyectos", href: "projects" },
		{ name: "Experiencia", href: "experience" },
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
				title: "Gym Manager Frontend",
				description:
					"Gym Manager es una aplicación web para administrar gimnasios. Ayuda a los dueños de gimnasios a controlar miembros, clases y equipos. La app usa tecnología moderna para manejar membresías, programar clases y crear informes. Hace más fácil dirigir un gimnasio y ayuda a los dueños a ver cómo va su negocio.",
				imageUrl: gym_manager,
				technologies: [
					"Vite",
					"React",
					"Tailwind CSS",
					"Shadcn-ui",
					"TypeScript",
					"Redux Toolkit",
					"Redux Toolkit Query",
				],
				githubUrl: "https://github.com/luisfrm/gym-manager-frontend",
				liveUrl: "https://gym-manager-frontend.netlify.app/",
			},
			{
				title: "Gym Manager Backend",
				description:
					"El backend de Gym Manager es el motor que hace funcionar la aplicación. Usa Node.js y una base de datos para guardar información de miembros, clases y equipos del gimnasio. Maneja las peticiones de la app, procesa datos y asegura que todo funcione rápido y seguro. Permite que la información esté siempre actualizada y disponible para los dueños del gimnasio.",
				technologies: [
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
				githubUrl: "https://github.com/luisfrm/gym-manager-frontend",
			},
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
			},
			{
				title: "Overfuel LLC",
				description:
					"Overfuel crea sitios web de vanguardia para concesionarios de automóviles. Sus soluciones ofrecen diseño responsive, gestión de inventario eficiente y herramientas de marketing digital, mejorando la presencia en línea y las ventas de los concesionarios.",
				imageUrl: overfuel,
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
				liveUrl: "https://overfuel.com/",
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
				title: "5Star Auto",
				description:
					"El sitio web de 5Star Auto, desarrollado por 321Ignition, empresa adquirida por Overfuel, destaca por un diseño elegante basado en el tipo de diseño web Mobile first. Ofrece una presentación muy bonita del inventario y todas sus paginas con un gran optimizacion, velocidad de rendimiento, búsqueda intuitiva y opciones de financiamiento. 321Ignition fue adquirida por Overfuel LLC y 5StarAuto dejo de formar parte de la cartera de clientes de Overfuel LLC.",
				imageUrl: starauto,
				technologies: [
					"Vue.js",
					"Bootstrap CSS",
					"Node.js",
					"MongoDB",
					"Google Tag Manager",
					"Google Analytics",
					"GCP / GCloud",
					"Docker",
					"Kubernetes",
					"RESTful",
				],
			},
			{
				title: "Virtual Vegas",
				description:
					"VirtualVegas es un bot de Python que simula juegos de casino. Permite a los usuarios jugar juegos como blackjack y ruleta sin usar dinero real. El bot usa librerías de Python para crear los juegos, manejar las apuestas virtuales y mostrar los resultados. Es una forma divertida y segura de experimentar la emoción del casino desde casa.",
				imageUrl: virtualvegas,
				technologies: [
					"Python3",
					"Django",
					"Python-telegram-bot",
					"Docker",
					"RESTful",
				],
				githubUrl: "https://github.com/luisfrm/virtualvegas",
				liveUrl: "https://t.me/virtualvegasbot",
			},
			{
				title: "Portafolio",
				description:
					"Mi portafolio es una aplicación web que muestra mis proyectos y habilidades. Usa tecnología moderna para presentar información de forma clara y atractiva. Muestra proyectos destacados, habilidades y formas de contacto. Es una forma de mostrar mi trabajo y experiencia a empleadores y colegas.",
				technologies: [
					"React",
					"Tailwind CSS",
					"TypeScript",
					"useContext",
					"Vite",
					"Shadcn-ui",
					"Netlify"
				],
				githubUrl: "https://github.com/luisfrm/portfolios-react",
				liveUrl: "https://luisrivas-portfolios.netlify.app",
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
					"Zod"
				],
				githubUrl: "https://github.com/luisfrm/task-manager",
			}
		],
	},
	workExperiences: {
		title: "Experiencia Laboral",
		workExperiencesList: [
			{
				company: "Overfuel",
				position: "Full-Stack Developer",
				period: "Mayo 2023 — Septiembre 2024",
				description: [
					"Diseñé e implemente funcionalidades innovadoras utilizando Next.js y Vue para mejorar la interacción del usuario.",
					"Trabajé en el análisis y corrección de errores en el software empleando herramientas de diagnóstico y seguimiento en GitHub y Jira, asegurando estabilidad y rendimiento óptimo.",
					"Colaboré en el desarrollo del Back-end utilizando Node.js y Express dentro de una arquitectura de microservicios, promoviendo la escalabilidad y mantenibilidad. Utilizando ademas una base de datos en MongoDB.",
					"Manejé eficazmente de peticiones técnicas y no técnicas de los clientes, utilizando la metodología Scrum para gestionar y priorizar tareas, y Google Tag Manager para optimizar la recopilación de datos y su análisis. Utilizando React.js y Node.js para la elaboracion de nuevos features, formularios y cualquier petición solicitada por los clientes.",
				],
				skills: [
					"Next.js",
					"Vue",
					"Node.js",
					"Express",
					"GitHub",
					"Jira",
					"Scrum",
					"Google Tag Manager",
					"Microservicios",
					"API Rest",
					"Google Analytics",
					"Docker",
					"Kubernetes",
					"CI/CD",
					"AWS",
				],
			},
			{
				company: "321ignition",
				position: "Front-End Lead Developer",
				period: "Mayo 2020 — Mayo 2023",
				description: [
					"Desarrollé una arquitectura Front-end en colaboracion con el equipo que mejoró la escalabilidad y el rendimiento del sitio web.",
					"Desarrollé e implementade APIRest para integrar la aplicación Front-end con microservicios de fondo.",
					"Optimicé la interfaz de usuario de Front-end para mejorar UX/UI.",
					"Colaboré en la migración de varias aplicaciones Front-end de Vue.js a Next.js.",
					"Atendi y resolvi peticiones de clientes para elaboración de nuevos features."
				],
				skills: [
					"Vue.js",
					"Next.js",
					"Node.js",
					"Express",
					"API Development",
					"UX/UI",
					"Liderazgo de equipo",
					"Microservicios",
					"Google Tag Manager",
					"Google Analytics",
					"Scrum",
					"Docker",
					"Kubernetes",
					"CI/CD",
					"GPC / GCloud",
				],
			},
			{
				company: "Fira onLive",
				position: "Front End Developer",
				period: "Mayo 2019 — Marzo 2020",
				description: [
					"Desarrolle un reproductor de streaming utilizando React.js junto a Redux como biblioteca de gestión de estados globales y Red5 Pro como SDK.",
					"Implemente un chat en React.js utilizando la libreria de GetStream.io para la gestión de mensajes en tiempo real.",
					"Cree una librería en Javascript para la implementación del reproductor de Streaming para el uso de clientes."
				],
				skills: [
					"React.js",
					"TypeScript",
					"Redux",
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

export const en: Data = {
	personal: {
		title: "About me",
		name: "Hello! I'm Luis Rivas👋",
		role: "Full Stack Web Developer",
		about: `I am a Computer Engineer, self-taught and based in Latin America. With over 4 years of experience in web development, I specialize in Full-Stack Web Development. My passion lies in automation, innovation, and creating new products. I am always excited to take on new challenges in the ever-evolving world of technology.`,
	},
	skills: {
		title: "Skills",
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
		city: "Latin America",
	},
	navItems: [
		{ name: "About", href: "about" },
		{ name: "Projects", href: "projects" },
		{ name: "Experience", href: "experience" },
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
		title: "Projects",
		projectList: [
			{
				title: "Gym Manager Frontend",
				description:
					"Gym Manager's frontend is a React-based web application for gym management. It features a user-friendly interface for member registration, class scheduling, and performance tracking. The responsive design ensures seamless access across devices, enhancing the gym experience for both staff and members.",
				imageUrl: gym_manager,
				technologies: [
					"Vite",
					"React",
					"Tailwind CSS",
					"Shadcn-ui",
					"TypeScript",
					"Redux Toolkit",
					"Redux Toolkit Query",
				],
				githubUrl: "https://github.com/luisfrm/gym-manager-frontend",
				liveUrl: "https://gym-manager-frontend.netlify.app/",
			},
			{
				title: "Gym Manager Backend",
				description:
					"The Gym Manager backend, built with Node.js and Express, powers the gym management system. It handles user authentication, membership management, and class scheduling. The API integrates with a MongoDB database, ensuring efficient data storage and retrieval for smooth gym operations.",
				technologies: [
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
				githubUrl: "https://github.com/luisfrm/gym-manager-frontend",
			},
			{
				title: "Remote 360",
				description:
					"Remote360 is a web-based platform for conducting 360-degree evaluations in remote work settings. Built with React and Node.js, it offers user authentication, employee management, and a comprehensive evaluation system. The application streamlines feedback processes for remote teams, featuring role-based access, real-time notifications, and detailed reporting to enhance performance management in distributed workforces.",
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
			},
			{
				title: "Overfuel LLC",
				description:
					"Overfuel creates cutting-edge websites for car dealerships. Their solutions offer responsive design, efficient inventory management, and digital marketing tools, enhancing dealers' online presence and sales.",
				imageUrl: overfuel,
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
				githubUrl: "https://github.com",
				liveUrl: "https://overfuel.com/",
			},
			{
				title: "Fishers Imports",
				description:
					"Fishers Imports' website, developed by Overfuel, showcases elegant design and advanced functionality. It features an impressive luxury inventory display, intuitive search, and financing options, demonstrating Overfuel's ability to boost high-end dealerships' digital presence.",
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
				title: "Virtual Vegas",
				description:
					"VirtualVegas is an immersive online casino platform developed using React and Node.js. It offers a range of popular casino games, secure payment processing, and real-time multiplayer functionality. The platform's sleek design and robust backend ensure an authentic Vegas-style gaming experience from anywhere.",
				imageUrl: virtualvegas,
				technologies: [
					"Python3",
					"Django",
					"Python-telegram-bot",
					"Docker",
					"RESTful",
				],
				githubUrl: "https://github.com/luisfrm/virtualvegas",
				liveUrl: "https://t.me/virtualvegasbot",
			},
			{
				title: "Portfolio",
				description:
					"My portfolio is a web application that showcases my projects and skills. It uses modern technology to present information clearly and attractively. It displays featured projects, skills, and contact information, providing a platform to showcase my work and experience to employers and peers.",
				technologies: [
					"React",
					"Tailwind CSS",
					"TypeScript",
					"useContext",
					"Vite",
					"Shadcn-ui",
					"Netlify"
				],
				githubUrl: "https://github.com/luisfrm/portfolios-react",
				liveUrl: "https://luisrivas-portfolios.netlify.app",
			},
			{
				title: "Task Manager",
				description:
					"Task Manager is a web application for managing tasks and projects. It offers a user-friendly interface for creating, assigning, and tracking tasks. The application uses modern technology to ensure seamless task management, featuring real-time updates, task prioritization, and detailed reporting.",
				technologies: [
					"React",
					"Tailwind CSS",
					"Javascript",
					"Node.js",
					"Express.js",
					"Mongoose",
					"MongoDB",
					"JWT",
					"Zod"
				],
				githubUrl: "https://github.com/luisfrm/task-manager",
			}
		],
	},
	workExperiences: {
		title: "Work Experience",
		workExperiencesList: [
			{
				company: "Overfuel",
				position: "Full-Stack Developer",
				period: "May 2023 — September 2024",
				description:
					["Focused on design and implementation of new innovator features using React.js and Vue.js. Handled bug fixing and client requests using Node.js and Express within a microservices architecture."],
					skills: [
						"Next.js",
						"Vue",
						"Node.js",
						"Express",
						"GitHub",
						"Jira",
						"Scrum",
						"Google Tag Manager",
						"Microservicios",
						"API Rest",
						"Google Analytics",
						"Docker",
						"Kubernetes",
						"CI/CD",
						"AWS",
					],
			},
			{
				company: "321ignition",
				position: "Front-End Developer Leadership",
				period: "May 2020 — May 2023",
				description:
					["Led front-end development teams, oversaw support activities, and handled back-end requests. Implemented APIs and optimized front-end UI to improve UX/UI."],
				skills: [
					"Vue.js",
					"Next.js",
					"Node.js",
					"Express",
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
					"GPC / GCloud",
				],
			},
			{
				company: "Fira onLive",
				position: "Front End Developer",
				period: "May 2019 — March 2020",
				description:
					["Created logic for new React components, developed a streaming player, and implemented chat functionality using various libraries."],
					skills: [
						"React.js",
						"TypeScript",
						"Redux",
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