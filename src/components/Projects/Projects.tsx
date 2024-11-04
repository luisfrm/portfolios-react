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

const Projects = ({ content }: Props) => {
	const { title, projectList } = content;
	return (
		<>
			{projectList.length > 0 && (
				<div id="projects" className="space-y-2">
					<h3 className="text-xl font-semibold">{title}</h3>
					<div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
						{projectList.map((project, index) => (
							<ProjectItem key={index} project={project} />
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default Projects;
