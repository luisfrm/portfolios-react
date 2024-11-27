import { ThemeProvider } from "@/context/useTheme";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import {
	Card,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import Navigation from "@/components/Navigation/Navigation";
import Skills from "@/components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Projects from "./components/Projects/Projects";
import { es, en } from "@/translations";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import WorkExperience from "@/components/WorkExperienceAccordion/WorkExperience";


function App() {
	const [lang, setLang] = useLocalStorage("lang", "en");
	const [data, setData] = useState(lang === "en" ? en : es);

	const changeLanguage = () => {
		setData(data === es ? en : es);
		setLang(lang === "en" ? "es" : "en");
	}

	return (
		<ThemeProvider>
			<div className="flex flex-col gap-16 mx-auto min-h-dvh bg-gradient-to-b from-slate-100 to-slate-300 dark:from-[#060436] dark:to-[#0f1236]">
				<Navigation
					navItems={data.navItems}
					changeLanguage={changeLanguage}
					language={lang}
					socialMedia={data.socialMedia}
				/>
				<Card className="w-full max-w-6xl mx-auto rounded-none sm:px-12 bg-transparent border-0 shadow-none py-36">
					<CardContent className="flex flex-col gap-16">
						<section className="flex flex-col gap-4">
							<PersonalInfo content={data.personal} />
							<Contact content={data.contact} />
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
}

export default App;
