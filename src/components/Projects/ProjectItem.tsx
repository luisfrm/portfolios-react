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
		<Card className="border rounded shadow-md">
			<CardHeader>
				<CardTitle className="text-lg font-semibold">{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col justify-center items-center gap-5">
				{imageUrl && (
					<div>
						<img
							src={imageUrl}
							alt={`Preview of ${title}`}
							className="rounded-md object-cover layout-fill aspect-video"
						/>
					</div>
				)}
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
					<Button variant="outline" size="sm" asChild>
						<a href={githubUrl} target="_blank" rel="noopener noreferrer">
							<Github className="mr-2 h-4 w-4" />
							GitHub
						</a>
					</Button>
				)}
				{liveUrl && (
					<Button variant="outline" size="sm" asChild>
						<a href={liveUrl} target="_blank" rel="noopener noreferrer">
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
