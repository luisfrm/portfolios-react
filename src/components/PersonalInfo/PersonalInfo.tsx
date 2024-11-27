import { CardDescription, CardTitle } from "@/components/ui/card";

interface Props {
	content: {
		title?: string;
		name: string;
		role: string;
		about: string;
	};
}

export default function PersonalInfo({ content }: Props) {
	const { name, role, about } = content;
	return (
		<section>
			<div id="about" className="relative flex flex-col items-center space-y-4">
				<div className="text-center">
					<CardTitle className="text-3xl font-semibold">{name}</CardTitle>
					<CardDescription className="text-xl">{role}</CardDescription>
				</div>
				<div className="space-y-2">
					{/* <h2 className="text-2xl font-semibold">{title}</h2> */}
					<p className="text-pretty">{about}</p>
				</div>
			</div>
		</section>
	);
}
