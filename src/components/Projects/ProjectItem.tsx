import { ExternalLink, Github } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";

interface Props {
	project: {
		title: string;
		description: string;
		imageUrl?: string;
		technologies: string[];
		githubUrl?: string;
		liveUrl?: string;
	};
}

const ProjectItem = ({ project }: Props) => {
	const { title, description, imageUrl, technologies, githubUrl, liveUrl } =
		project;
	return (
		<Card className="border rounded shadow-md break-inside-avoid animate-show">
			<CardHeader className="flex flex-col gap-5">
				<CardTitle className="text-lg font-semibold">{title}</CardTitle>
				{imageUrl && (
					<div>
						<img
							src={imageUrl}
							alt={`Preview of ${title}`}
							className="rounded-md object-cover layout-fill aspect-video lg:hover:scale-105 transition-transform duration-300 ease-in-out"
						/>
					</div>
				)}
				<CardDescription className="dark:text-gray-100">{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-wrap gap-2 mt-2">
					{technologies.map((tech, index) => (
						<Badge key={index} variant="secondary">
							{tech}
						</Badge>
					))}
				</div>
			</CardContent>
			<CardFooter className="flex justify-between">
				{githubUrl && (
					<Button variant="default" className="bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200 hover:border-gray-300 font-bold" size="sm" asChild>
						<a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Github Project redirect">
							<Github className="mr-2 h-4 w-4" />
							GitHub
						</a>
					</Button>
				)}
				{liveUrl && (
					<Button variant="default" className="bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200 hover:border-gray-300 font-bold" size="sm" asChild>
						<a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live site project redirect">
							<ExternalLink className="mr-2 h-4 w-4" />
							Live Site
						</a>
					</Button>
				)}
			</CardFooter>
		</Card>
	);
};

export default ProjectItem;
