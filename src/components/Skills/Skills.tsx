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
			<h3 className="text-3xl text-center mb-4 font-semibold">{title}</h3>
			<div className="flex flex-wrap gap-2 justify-center">
				{skillsList &&
					skillsList.length > 0 &&
					skillsList.map((skill, index) => (
						<a key={index} href={skill.url} target="_blank" aria-label={`${skill.name} redirect.`}>
							<Badge className="bg-card" variant="secondary" >{skill.icon} {skill.name}</Badge>
						</a>
					))}
			</div>
		</div>
	);
};

export default Skills;
