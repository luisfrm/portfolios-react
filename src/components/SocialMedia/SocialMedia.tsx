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
		<div id="social" className="flex justify-center space-x-4 my-4">
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
		</div>
	);
};

export default SocialMedia;
