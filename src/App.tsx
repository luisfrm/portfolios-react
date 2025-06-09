import { ThemeProvider } from "@/context/useTheme";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import Navigation from "@/components/Navigation/Navigation";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import WorkExperience from "@/components/WorkExperienceAccordion/WorkExperience";
import MouseMoveEffect from "./components/MouseMove/MouseMoveEffect";
import { Layout, MainContent, HeroSection, Footer } from "@/components/Layout";
import { useLanguage } from "@/hooks/useLanguage";

function App() {
	const { language, data, changeLanguage } = useLanguage();

	return (
		<ThemeProvider>
			<MouseMoveEffect />
			<Layout>
				<Navigation
					navItems={data.navItems}
					changeLanguage={changeLanguage}
					language={language}
					socialMedia={data.socialMedia}
				/>
				<MainContent footer={
					<Footer 
						skills={data.skills} 
						socialMedia={data.socialMedia} 
					/>
				}>
					<HeroSection>
						<PersonalInfo content={data.personal} />
						<Contact content={data.contact} lang={language} />
					</HeroSection>
					<WorkExperience workExperiences={data.workExperiences} />
					<Projects content={data.projects} />
				</MainContent>
			</Layout>
		</ThemeProvider>
	);
}

export default App;
