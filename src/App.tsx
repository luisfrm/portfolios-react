import { ThemeProvider } from "@/context/useTheme";
import PersonalInfo from "@/components/PersonalInfo";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import Navigation from "@/components/Navigation/Navigation";
import { Github, Linkedin } from "lucide-react";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Projects from "./components/Projects/Projects";
import { fishers_import, overfuel, remote360, gym_manager, virtualvegas } from "./assets";

const data = {
	personal: {
		title: "About me",
		name: "Luis Rivas",
		role: "Full Stack Web Developer",
		about: `Hello, I'm Luis Rivas, a Full Stack Developer from Venezuela. I work with many web technologies like React.js, Next.js, Vue.js, and Node.js. I'm good at making new features and fixing hard problems in websites and apps. I know how to work with different types of databases too. I like to work in teams and I'm always learning new things. In my job, I help make websites better and faster. I also work well with clients and help them get what they need. I'm excited about new technologies and always try to bring new ideas to my work. I enjoy leading teams and making sure we do good work together.`,
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

function App() {
	return (
		<ThemeProvider>
			<div className="mx-auto bg-slate-300 dark:bg-slate-900 min-h-[100dvh]">
				<Navigation socialMedia={data.socialMedia} />
				<Card className="w-full min-h-dvh max-w-6xl mx-auto rounded-none pt-20 sm:px-12">
					<CardHeader className="flex flex-col">
						<PersonalInfo content={data.personal} />
						<Contact content={data.contact} />
					</CardHeader>
					<CardContent className="flex flex-col gap-10">
						<Skills skills={data.skills} />
						<Projects content={data.projects} />
					</CardContent>
					<CardFooter className="flex flex-col gap-5 mb-10">
						<SocialMedia content={data.socialMedia} />
						Developed with ❤️ by Luis Rivas
					</CardFooter>
				</Card>
			</div>
		</ThemeProvider>
	);
}

export default App;
