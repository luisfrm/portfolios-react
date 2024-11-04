import { ThemeProvider } from "@/context/useTheme";
import PersonalInfo from "@/components/PersonalInfo";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import Navigation from "@/components/Navigation/Navigation";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Projects from "./components/Projects/Projects";
import { data } from "@/lib/mockdata";


function App() {
	return (
		<ThemeProvider>
			<div className="mx-auto bg-slate-300 dark:bg-slate-900 min-h-[100dvh]">
				<Navigation socialMedia={data.socialMedia} />
				<Card className="w-full min-h-dvh max-w-6xl mx-auto rounded-none pt-24 sm:px-12">
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
