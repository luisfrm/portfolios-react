import { Badge } from "@/components/ui/badge";

interface Props {
	skills: {
		title: string;
		skillsList: {
			name: string;
			url: string;
			icon: string;
		}[];
	};
}

const Skills = ({ skills }: Props) => {
	const { title, skillsList } = skills;
	return (
		<div id="skills" className="space-y-2">
			<h3 className="text-xl font-semibold">{title}</h3>
			<div className="flex flex-wrap gap-2">
				{skillsList &&
					skillsList.length > 0 &&
					skillsList.map((skill, index) => (
						<a key={index} href={skill.url} target="_blank">
							<Badge className="hover:opacity-60" variant="secondary" >{skill.icon} {skill.name}</Badge>
						</a>
					))}
			</div>
		</div>
	);
};

export default Skills;
