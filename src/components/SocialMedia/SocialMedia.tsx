import SocialItem from "./SocialItem";

interface Props {
	content: {
		name: string;
		icon: React.ReactNode;
		url: string;
	}[];
}

const SocialMedia = ({ content }: Props) => {
	return (
		<>
			{content.length > 0 &&
				content.map((item, index) => {
					return (
						<SocialItem
							key={index}
							name={item.name}
							icon={item.icon}
							url={item.url}
						/>
					);
				})}
		</>
	);
};

export default SocialMedia;
