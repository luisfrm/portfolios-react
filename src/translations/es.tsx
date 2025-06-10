// import { fishers_import, overfuel, remote360, gym_manager, virtualvegas, starauto } from "@/assets";
import { fishers_import, god_is_good, portfolios, task_manager, gymmanager } from "@/assets";

import { Github, Linkedin } from "lucide-react";
import { Data } from "@/lib/types";
import { SKILLS_CATEGORIES_DATA } from "@/lib/skillsData";

export const es: Data = {
	personal: {
		title: "Acerca de mi",
		name: "¡Hola! Soy Luis Rivas👋",
		role: "Full Stack Web Developer",
		about: `Ingeniero informatico, autodidacta ubicado en Latinoamérica. Con +4 años de experiencia en el desarrollo web, me especializo en Full-Stack Web Development. Mi pasión radica en la automatizacion, innovacion y creacion de nuevos productos. Siempre estoy emocionado por asumir nuevos desafíos en el mundo en constante evolución de la tecnología.`,
		downloadText: "Descargar CV",
		getInTouchText: "Contactar",
	},
	skills: {
		title: "Habilidades",
		skillsCategories: SKILLS_CATEGORIES_DATA,
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
				title: "Gym Manager",
				description:
					"La aplicación Gym Manager es una aplicación Full-Stack para la gestión de gimnasios. Cuenta con una interfaz fácil de usar para el registro de miembros, la programación de clases y el seguimiento del rendimiento. El diseño responsivo garantiza un acceso sin inconvenientes en todos los dispositivos. Construida con Node.js y Express, maneja la autenticación de usuarios, la gestión de membresías y la programación de clases. La API se integra con una base de datos MongoDB, lo que garantiza un almacenamiento y recuperación de datos eficiente para operaciones fluidas del gimnasio y mejora la experiencia del gimnasio para el personal y los miembros.",
				imageUrl: gymmanager,
				technologies: [
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
					"TypeScript",
					"Jest",
					"Docker",
					"Mongoose",
					"RESTful API",
					"Zod",
				],
				githubUrl: "https://github.com/luisfrm/gym-manager",
				liveUrl: "https://gym-manager-frontend.onrender.com/",
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
