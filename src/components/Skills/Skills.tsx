import { Badge } from "@/components/ui/badge";

interface Props {
	skills: {
		name: string;
		url: string;
		icon: string;
	}[];
}

const Skills = ({ skills }: Props) => {
	return (
		<div id="skills" className="space-y-2">
			<h3 className="text-xl font-semibold">Habilidades</h3>
			<div className="flex flex-wrap gap-2">
				{skills &&
					skills.length > 0 &&
					skills.map((skill, index) => (
						<a key={index} href={skill.url} target="_blank">
							<Badge className="hover:opacity-60" variant="secondary" >{skill.icon} {skill.name}</Badge>
						</a>
					))}
			</div>
		</div>
	);
};

export default Skills;
