import { Badge } from "./ui/badge";

interface Props {
	skills: {
		name: string;
		url: string;
		icon: string;
	}[];
}

const Skills = ({ skills }: Props) => {
	return (
		<div className="space-y-2">
			<h3 className="text-xl font-semibold">Habilidades</h3>
			<div className="flex flex-wrap gap-2">
				{skills &&
					skills.length > 0 &&
					skills.map((skill, index) => (
						<a href={skill.url} target="_blank">
							<Badge variant="secondary" key={index}>{skill.icon} {skill.name}</Badge>
						</a>
					))}
			</div>
		</div>
	);
};

export default Skills;
