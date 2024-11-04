import { Mail, MapPin, Phone } from "lucide-react";

interface Props {
	content: {
		title?: string;
		email: string;
		phone: string;
		city: string;
	};
}

const Contact = ({ content }: Props) => {
	const { email, phone, city } = content;
	return (
		<div id="contact" className="space-y-2">
			{content.title && <h2 className="text-lg font-bold">{content.title}</h2>}
			<div className="space-y-1">
				<a href={`mailto:${email}`} className="flex items-center space-x-2 font-bold">
					<Mail className="w-4 h-4" />
					<span>{email}</span>
				</a>
				<div className="flex items-center space-x-2 font-bold">
					<Phone className="w-4 h-4" />
					<span>{phone}</span>
				</div>
				<div className="flex items-center space-x-2 font-bold">
					<MapPin className="w-4 h-4" />
					<span>{city}</span>
				</div>
			</div>
		</div>
	);
};

export default Contact;
