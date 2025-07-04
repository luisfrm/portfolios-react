import { ThemeProvider } from "@/context/useTheme";
import Navigation from "@/components/Navigation/Navigation";
import Projects from "./components/Projects/Projects";
import WorkExperience from "@/components/WorkExperienceAccordion/WorkExperience";
import MouseMoveEffect from "./components/MouseMove/MouseMoveEffect";
import { Layout, MainContent, Footer, ModernHero, HeroContent } from "@/components/Layout";
import { useLanguage, useHeroActions } from "@/hooks";

function App() {
	const { language, data, changeLanguage } = useLanguage();
	const { handleDownloadCV } = useHeroActions(language);

	return (
		<ThemeProvider>
			<MouseMoveEffect />
			<Layout>
				<Navigation
					navItems={data.navItems}
					changeLanguage={changeLanguage}
					language={language}
					socialMedia={data.socialMedia}
					downloadText={data.personal.downloadText}
				/>
				
				{/* Modern Hero Section */}
				<ModernHero>
					<HeroContent
						name={data.personal.name}
						role={data.personal.role}
						about={data.personal.about}
						onDownloadCV={handleDownloadCV}
						downloadText={data.personal.downloadText}
						email={data.contact.email}
						getInTouchText={data.personal.getInTouchText}
					/>
				</ModernHero>

				<MainContent footer={
					<Footer 
						skills={data.skills} 
						socialMedia={data.socialMedia} 
					/>
				}>
					<WorkExperience workExperiences={data.workExperiences} />
					<Projects content={data.projects} />
				</MainContent>
			</Layout>
		</ThemeProvider>
	);
};

export default App;
