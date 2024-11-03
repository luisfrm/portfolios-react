import { Button } from "../ui/button";

interface Props {
	icon: React.ReactNode;
	name?: string;
	url: string;
	size?: "default" | "icon" | "sm" | "lg";
}

const SocialItem = ({ icon, name, url, size="default" }: Props) => {
	return (
		<>
			<a href={url} target="_blank">
				<Button variant="outline" size={size}>
					{icon}
					{name && ` ${name}`}
				</Button>
			</a>
		</>
	);
};

export default SocialItem;
