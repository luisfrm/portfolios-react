import { fishers_import, overfuel, remote360, gym_manager, virtualvegas } from "@/assets";
import { Github, Linkedin } from "lucide-react";

export const mock = {
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
			description: "Gym Manager es una aplicación web para administrar gimnasios. Ayuda a los dueños de gimnasios a controlar miembros, clases y equipos. La app usa tecnología moderna para manejar membresías, programar clases y crear informes. Hace más fácil dirigir un gimnasio y ayuda a los dueños a ver cómo va su negocio.",
			imageUrl: gym_manager,
			technologies: ["Vite", "React", "Tailwind CSS", "Shadcn-ui", "TypeScript", "Redux Toolkit", "Redux Toolkit Query"],
			githubUrl: "https://github.com/luisfrm/gym-manager-frontend",
			liveUrl: "https://gym-manager-frontend.netlify.app/",
		},
		{
			title: "Gym Manager Backend",
			description: "El backend de Gym Manager es el motor que hace funcionar la aplicación. Usa Node.js y una base de datos para guardar información de miembros, clases y equipos del gimnasio. Maneja las peticiones de la app, procesa datos y asegura que todo funcione rápido y seguro. Permite que la información esté siempre actualizada y disponible para los dueños del gimnasio.",
			technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "TypeScript", "Jest", "Docker", "Kubernetes", "CI/CD", "Mongoose", "RESTful API", "zod"],
			githubUrl: "https://github.com/luisfrm/gym-manager-frontend",
		},
		{
			title: "Remote 360",
			description: "REMOTE-360 es una app web para evaluar empleados que trabajan desde casa. Permite a jefes y compañeros dar opiniones sobre el trabajo de otros. Usa tecnología moderna para hacer formularios, manejar usuarios y crear informes simples. Ayuda a ver cómo trabaja la gente sin estar en la oficina.",
			imageUrl: remote360,
			technologies: ["Vite", "React", "Tailwind CSS", "Shadcn-ui", "TypeScript", "Redux Toolkit", "Redux Toolkit Query","Node.js", "Express.js", "MongoDB", "JWT", "TypeScript", "Jest", "Docker", "Kubernetes", "CI/CD", "Mongoose", "RESTful API", "zod"],
			githubUrl: "https://github.com/luisfrm/remote-360",
		},
		{
			title: "Overfuel LLC",
			description: "Overfuel crea sitios web de vanguardia para concesionarios de automóviles. Sus soluciones ofrecen diseño responsive, gestión de inventario eficiente y herramientas de marketing digital, mejorando la presencia en línea y las ventas de los concesionarios.",
			imageUrl: overfuel,
			technologies: ["Next.js", "Tailwind CSS", "CodeIgniter", "MySQL", "Google Tag Manager", "AWS", "Docker", "Kubernetes", "RESTful"],
			githubUrl: "https://github.com",
			liveUrl: "https://overfuel.com/",
		},
		{
			title: "Fishers Imports",
			description: "El sitio web de Fishers Imports, desarrollado por Overfuel, destaca por su diseño elegante y funcionalidad avanzada. Ofrece una presentación impactante del inventario de lujo, búsqueda intuitiva y opciones de financiamiento, demostrando la capacidad de Overfuel para potenciar la presencia digital de concesionarios de alta gama.",
			imageUrl: fishers_import,
			technologies: ["Next.js", "Tailwind CSS", "CodeIgniter", "MySQL", "Google Tag Manager", "AWS", "Docker", "Kubernetes", "RESTful"],
			liveUrl: "https://www.fishersimports.com/",
		},
		{
			title: "Virtual Vegas",
			description: "VirtualVegas es un bot de Python que simula juegos de casino. Permite a los usuarios jugar juegos como blackjack y ruleta sin usar dinero real. El bot usa librerías de Python para crear los juegos, manejar las apuestas virtuales y mostrar los resultados. Es una forma divertida y segura de experimentar la emoción del casino desde casa.",
			imageUrl: virtualvegas,
			technologies: ["Python3", "Django", "Python-telegram-bot", "Docker", "RESTful"],
			githubUrl: "https://github.com/luisfrm/virtualvegas",
			liveUrl: "https://t.me/virtualvegasbot",
		},
	],
	workExperiences: [
		{
			company: "Overfuel",
			position: "Full-Stack Developer",
			period: "Mayo 2023 — Septiembre 2024",
			description: "Enfoque en el diseño e implementación de funcionalidades innovadoras utilizando React y Vue. Análisis y corrección de errores en el software usando GitHub y Jira. Desarrollo de backend con Node.js y Express en arquitectura de microservicios. Manejo de peticiones de clientes usando Scrum y Google Tag Manager.",
			skills: ["React", "Vue", "Node.js", "Express", "GitHub", "Jira", "Scrum", "Google Tag Manager", "Microservicios"]
		},
		{
			company: "321ignition",
			position: "Front-End Lead Developer",
			period: "Mayo 2020 — Mayo 2023",
			description: "Liderazgo de equipos de desarrolladores front-end y manejo de solicitudes back-end. Supervisión y coordinación del equipo de soporte. Desarrollo de arquitectura front-end para mejorar escalabilidad y rendimiento. Implementación de APIs para integrar aplicaciones front-end con microservicios. Optimización de UX/UI y migración de aplicaciones de React.js a Next.js.",
			skills: ["React.js", "Next.js", "Node.js", "Express", "API Development", "UX/UI", "Liderazgo de equipo", "Microservicios"]
		},
		{
			company: "Fira onLive",
			position: "Front End Developer",
			period: "Mayo 2019 — Marzo 2020",
			description: "Creación de lógica para nuevos componentes de React y consumo de servicios API Rest. Diseño de sistemas para visualización de productos. Desarrollo de un Sistema de Gestión de Contenidos (CMS). Implementación de un reproductor de streaming con React.js, Redux y Red5 Pro SDK. Creación de un chat usando GetStream.io y desarrollo de una librería JavaScript para el reproductor de Streaming.",
			skills: ["React.js", "Redux", "API Rest", "CMS", "Streaming", "Red5 Pro", "GetStream.io", "JavaScript"]
		}
	]
};

export const mock_en = {
	personal: {
		title: "About me",
		name: "Hello! I'm Luis Rivas👋",
		role: "Full Stack Web Developer",
		about: `I am a Computer Engineer, self-taught and based in Venezuela. With over 4 years of experience in web development, I specialize in Full-Stack Web Development. My passion lies in automation, innovation, and creating new products. I am always excited to take on new challenges in the ever-evolving world of technology.`,
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
			description: "Gym Manager's frontend is a React-based web application for gym management. It features a user-friendly interface for member registration, class scheduling, and performance tracking. The responsive design ensures seamless access across devices, enhancing the gym experience for both staff and members.",
			imageUrl: gym_manager,
			technologies: ["Vite", "React", "Tailwind CSS", "Shadcn-ui", "TypeScript", "Redux Toolkit", "Redux Toolkit Query"],
			githubUrl: "https://github.com/luisfrm/gym-manager-frontend",
			liveUrl: "https://gym-manager-frontend.netlify.app/",
		},
		{
			title: "Gym Manager Backend",
			description: "The Gym Manager backend, built with Node.js and Express, powers the gym management system. It handles user authentication, membership management, and class scheduling. The API integrates with a MongoDB database, ensuring efficient data storage and retrieval for smooth gym operations.",
			technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "TypeScript", "Jest", "Docker", "Kubernetes", "CI/CD", "Mongoose", "RESTful API", "zod"],
			githubUrl: "https://github.com/luisfrm/gym-manager-frontend",
		},
		{
			title: "Remote 360",
			description: "Remote360 is a web-based platform for conducting 360-degree evaluations in remote work settings. Built with React and Node.js, it offers user authentication, employee management, and a comprehensive evaluation system. The application streamlines feedback processes for remote teams, featuring role-based access, real-time notifications, and detailed reporting to enhance performance management in distributed workforces.",
			imageUrl: remote360,
			technologies: ["Vite", "React", "Tailwind CSS", "Shadcn-ui", "TypeScript", "Redux Toolkit", "Redux Toolkit Query","Node.js", "Express.js", "MongoDB", "JWT", "TypeScript", "Jest", "Docker", "Kubernetes", "CI/CD", "Mongoose", "RESTful API", "zod"],
			githubUrl: "https://github.com/luisfrm/remote-360",
		},
		{
			title: "Overfuel LLC",
			description: "Overfuel creates cutting-edge websites for car dealerships. Their solutions offer responsive design, efficient inventory management, and digital marketing tools, enhancing dealers' online presence and sales.",
			imageUrl: overfuel,
			technologies: ["Next.js", "Tailwind CSS", "CodeIgniter", "MySQL", "Google Tag Manager", "AWS", "Docker", "Kubernetes", "RESTful"],
			githubUrl: "https://github.com",
			liveUrl: "https://overfuel.com/",
		},
		{
			title: "Fishers Imports",
			description: "Fishers Imports' website, developed by Overfuel, showcases elegant design and advanced functionality. It features an impressive luxury inventory display, intuitive search, and financing options, demonstrating Overfuel's ability to boost high-end dealerships' digital presence.",
			imageUrl: fishers_import,
			technologies: ["Next.js", "Tailwind CSS", "CodeIgniter", "MySQL", "Google Tag Manager", "AWS", "Docker", "Kubernetes", "RESTful"],
			liveUrl: "https://www.fishersimports.com/",
		},
		{
			title: "Virtual Vegas",
			description: "VirtualVegas is an immersive online casino platform developed using React and Node.js. It offers a range of popular casino games, secure payment processing, and real-time multiplayer functionality. The platform's sleek design and robust backend ensure an authentic Vegas-style gaming experience from anywhere.",
			imageUrl: virtualvegas,
			technologies: ["Python3", "Django", "Python-telegram-bot", "Docker", "RESTful"],
			githubUrl: "https://github.com/luisfrm/virtualvegas",
			liveUrl: "https://t.me/virtualvegasbot",
		},
	],
	workExperiences: [
		{
			company: "Overfuel",
			position: "Full-Stack Developer",
			period: "May 2023 — September 2024",
			description: "Focused on design and implementation of new innovator features using React.js and Vue.js. Handled bug fixing and client requests using Node.js and Express within a microservices architecture.",
			skills: ["React.js", "Vue.js", "Node.js", "Express.js", "Microservices"]
		},
		{
			company: "321ignition",
			position: "Front-End Developer Leadership",
			period: "May 2020 — May 2023",
			description: "Led front-end development teams, oversaw support activities, and handled back-end requests. Implemented APIs and optimized front-end UI to improve UX/UI.",
			skills: ["React.js", "Next.js", "API Development", "Team Leadership"]
		},
		{
			company: "Fira onLive",
			position: "Front End Developer",
			period: "May 2019 — March 2020",
			description: "Created logic for new React components, developed a streaming player, and implemented chat functionality using various libraries.",
			skills: ["React.js", "Redux", "Streaming Technologies", "GetStream.io"]
		}
	]
};