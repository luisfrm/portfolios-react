import { cn } from "@/lib/utils"
import { LAYOUT, TYPOGRAPHY, SPACING } from "@/lib/constants"
import { AnimatedSection } from "@/components/common/AnimatedSection"
import ProjectItem from "./ProjectItem";

interface Project {
	title: string;
	description: string;
	imageUrl?: string;
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
}

interface Props {
	content: {
		title: string;
		projectList: Project[];
	};
}

const PROJECTS_STYLES = {
	  container: cn(LAYOUT.CONTAINER_MAX_WIDTH, "mx-auto", SPACING.SECTION, "py-8 sm:py-12 lg:py-16"),
	title: cn(
		TYPOGRAPHY.SECTION_TITLE,
		"bg-gradient-to-r from-blue-600 via-slate-700 to-gray-800 bg-clip-text text-transparent",
		"dark:from-blue-400 dark:via-slate-400 dark:to-gray-300",
		"mb-4"
	),
	decorativeLine: "w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-700 mx-auto mb-8 sm:mb-12 lg:mb-16 rounded-full",
	grid: "grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
} as const

const getDelayClass = (index: number) => {
	const delayClasses = ['delay-1', 'delay-2', 'delay-3', 'delay-4'];
	return delayClasses[index % delayClasses.length];
};

const Projects = ({ content }: Props) => {
	const { title, projectList } = content;
	
	if (projectList.length === 0) return null;

	return (
		<section id="projects" className={PROJECTS_STYLES.container}>
			{/* Section title with gradient effect */}
			<AnimatedSection animation="fade-scale" delay={0}>
				<div className="text-center">
					<h2 className={PROJECTS_STYLES.title}>
						{title}
					</h2>
					<div className={PROJECTS_STYLES.decorativeLine}></div>
				</div>
			</AnimatedSection>
			
			{/* Projects grid */}
			<div className={PROJECTS_STYLES.grid}>
				{projectList.map((project, index) => (
					<ProjectItem 
						key={`project-${index}`} 
						project={project}
						delayClass={getDelayClass(index)}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
