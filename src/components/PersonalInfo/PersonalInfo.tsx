import { CardDescription, CardTitle } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
	content: {
		title?: string;
		name: string;
		role: string;
		about: string;
	};
}

export default function PersonalInfo({ content }: Props) {
	const { name, role, about, title } = content;
	return (
		<>
			<div id="about" className="flex flex-col items-center space-y-4">
				{/* <Avatar className="w-32 h-32">
					<AvatarImage src="/placeholder-avatar.jpg" alt="Tu Nombre" />
					<AvatarFallback>LR</AvatarFallback>
				</Avatar> */}
				<div className="text-center">
					<CardTitle className="text-3xl font-bold">{name}</CardTitle>
					<CardDescription className="text-xl">{role}</CardDescription>
				</div>
				<div className="space-y-2">
					<h3 className="text-xl font-semibold">{title}</h3>
					<p>{about}</p>
				</div>
			</div>
		</>
	);
}
