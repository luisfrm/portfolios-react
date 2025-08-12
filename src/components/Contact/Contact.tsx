import { Download, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { goToPdf } from "@/lib/utils";
import { AnimatedSection } from "@/components/common/AnimatedSection";

interface Props {
	content: {
		title?: string;
		email: string;
		phone: string;
		city: string;
		download?: string;
	};
	lang: "en" | "es";
}

const CONTACT_STYLES = {
	container: "space-y-4 sm:space-y-6",
	title: cn(
		"text-3xl font-semibold text-center",
		"bg-gradient-to-r from-blue-600 via-slate-700 to-gray-800 bg-clip-text text-transparent",
		"dark:from-blue-400 dark:via-slate-400 dark:to-gray-300",
		"mb-4"
	),
	decorativeLine: "w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-700 mx-auto mb-4 sm:mb-6 lg:mb-8 rounded-full",
	contactInfo: "space-y-3 sm:space-y-4",
	contactItem: cn(
		"flex items-center space-x-3 font-semibold text-lg",
		"hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
	),
	buttonContainer: "pt-6 flex justify-center md:justify-start"
} as const;

const Contact = ({ content, lang }: Props) => {
	const { email, phone, city } = content;
	
	return (
		<section id="contact" className={CONTACT_STYLES.container}>
			{content.title && (
				<AnimatedSection animation="fade-scale" delay={0}>
					<div className="text-center">
						<h2 className={CONTACT_STYLES.title}>{content.title}</h2>
						<div className={CONTACT_STYLES.decorativeLine}></div>
					</div>
				</AnimatedSection>
			)}
			
			<div className={CONTACT_STYLES.contactInfo}>
				<AnimatedSection animation="fade-left" delay={200}>
					<a
						href={`mailto:${email}`}
						className={CONTACT_STYLES.contactItem}
						aria-label="Button that take you to send an email"
					>
						<Mail className="w-5 h-5" />
						<span>{email}</span>
					</a>
				</AnimatedSection>
				
				<AnimatedSection animation="fade-left" delay={300}>
					<div className={CONTACT_STYLES.contactItem}>
						<Phone className="w-5 h-5" />
						<span>{phone}</span>
					</div>
				</AnimatedSection>
				
				<AnimatedSection animation="fade-left" delay={400}>
					<div className={CONTACT_STYLES.contactItem}>
						<MapPin className="w-5 h-5" />
						<span>{city}</span>
					</div>
				</AnimatedSection>
				
				<AnimatedSection animation="fade-up" delay={500}>
					<div className={CONTACT_STYLES.buttonContainer}>
						<Button 
							id="contact-download-cv-button"
							variant="outline" 
							size="lg" 
							onClick={() => goToPdf(lang)}
							className="hover:scale-105 transition-transform duration-200"
						>
							<Download className="mr-2" /> {content.download}
						</Button>
					</div>
				</AnimatedSection>
			</div>
		</section>
	);
};

export default Contact;
