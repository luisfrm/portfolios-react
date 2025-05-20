import { ThemeProvider } from "@/context/useTheme";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Navigation from "@/components/Navigation/Navigation";
import Skills from "@/components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Projects from "./components/Projects/Projects";
import { es, en } from "@/translations";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import WorkExperience from "@/components/WorkExperienceAccordion/WorkExperience";
import MouseMoveEffect from "./components/MouseMove/MouseMoveEffect";

const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get("lang");

const App = () => {
	const [lang, setLang] = useLocalStorage<"en" | "es">("lang", langParam === "es" ? "es" : "en");
	const [data, setData] = useState(lang === "en" ? en : es);

	// useEffect(() => {
	// 	generateSnow();
	// }, []);

	const changeLanguage = () => {
		setData(data === es ? en : es);
		setLang(lang === "en" ? "es" : "en");
	};

	return (
		<ThemeProvider>
			<MouseMoveEffect />
			<div className="relative flex flex-col gap-16 mx-auto min-h-dvh">
				<div className="pointer-events-none fixed inset-0">
					<div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
					<div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
					<div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
				</div>
				<Navigation
					navItems={data.navItems}
					changeLanguage={changeLanguage}
					language={lang}
					socialMedia={data.socialMedia}
				/>
				<Card className="w-full max-w-6xl mx-auto rounded-none sm:px-12 bg-transparent border-0 shadow-none pb-36 z-10">
					<CardContent className="flex flex-col gap-16">
						<section className="h-screen lg:h-dvh flex justify-center items-center">
							<section className="flex flex-col gap-4 bg-card p-8 rounded-xl shadow-xl border border-gray-200 pb-8 dark:border-gray-800">
								<PersonalInfo content={data.personal} />
								<Contact content={data.contact} lang={lang} />
							</section>
						</section>
						<WorkExperience workExperiences={data.workExperiences} />
						<Projects content={data.projects} />
					</CardContent>

					<CardFooter className="flex flex-col gap-5">
						<Skills skills={data.skills} />
						<SocialMedia content={data.socialMedia} />
						Developed with ❤️ by Luis Rivas
					</CardFooter>
				</Card>
			</div>
		</ThemeProvider>
	);
};

export default App;
