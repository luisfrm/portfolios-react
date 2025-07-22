export interface Data {
	personal: Personal;
	skills: Skills;
	contact: Contact;
	contactForm: ContactForm;
	navItems: NavItem[];
	socialMedia: SocialMedia[];
	projects: Projects;
	workExperiences: WorkExperiences;
}

export interface Contact {
	email: string;
	phone: string;
	city: string;
	download: string;
}

export interface ContactForm {
	title: string;
	namePlaceholder: string;
	emailPlaceholder: string;
	subjectPlaceholder: string;
	messagePlaceholder: string;
	sendButtonText: string;
	messages: {
		validationError: string;
		validationDescription: string;
		successMessage: string;
		successDescription: string;
		errorMessage: string;
		errorDescription: string;
		sendingText: string;
	};
}

export interface NavItem {
	name: string;
	href: string;
}

export interface Personal {
	title: string;
	name: string;
	role: string;
	about: string;
	downloadText: string;
	getInTouchText: string;
}

export interface Projects {
	title: string;
	projectList: ProjectList[];
}

export interface ProjectList {
	title: string;
	description: string;
	imageUrl?: string;
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
}

export interface Skill {
	name: string;
	url: string;
	icon: string;
}

export interface Skills {
	title: string;
	skillsCategories: SkillCategory[];
}

export interface SkillCategory {
	category: string;
	skills: Skill[];
}

export interface SocialMedia {
	name: string;
	url: string;
	icon: JSX.Element;
}

export interface WorkExperiences {
	title: string;
	workExperiencesList: WorkExperiencesList[];
}

export interface WorkExperiencesList {
	company: string;
	position: string;
	period: string;
	description: string;
	skills: string[];
}
