import { Download, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { goToPdf } from "@/lib/utils";

interface Props {
	content: {
		title?: string;
		email: string;
		phone: string;
		city: string;
		download?: string;
	};
}

const Contact = ({ content }: Props) => {
	const { email, phone, city } = content;
	return (
		<div id="contact" className="space-y-2">
			{content.title && <h2 className="text-2xl font-semibold">{content.title}</h2>}
			<div className="space-y-1">
				<a
					href={`mailto:${email}`}
					className="flex items-center space-x-2 font-semibold"
					aria-label="Button that take you to send an email"
				>
					<Mail className="w-4 h-4" />
					<span>{email}</span>
				</a>
				<div className="flex items-center space-x-2 font-semibold">
					<Phone className="w-4 h-4" />
					<span>{phone}</span>
				</div>
				<div className="flex items-center space-x-2 font-semibold">
					<MapPin className="w-4 h-4" />
					<span>{city}</span>
				</div>
				<div className="pt-5 flex justify-center md:justify-start">
					<Button variant="outline" size="lg" onClick={goToPdf}>
						<Download /> {content.download}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Contact;
