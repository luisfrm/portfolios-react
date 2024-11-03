import ProjectItem from "./ProjectItem";

interface Props {
	content: {
		title: string;
		description: string;
		imageUrl?: string;
		technologies: string[];
		githubUrl?: string;
		liveUrl?: string;
	}[];
}

const Projects = ({ content }: Props) => {
	return (
		<>
			{content.length > 0 && (
				<div className="space-y-2">
					<h3 className="text-xl font-semibold">Projects</h3>
					<div className="grid grid-col md:grid-cols-3 gap-4">
						{content.map((project, index) => (
							<ProjectItem key={index} project={project} />
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default Projects;
