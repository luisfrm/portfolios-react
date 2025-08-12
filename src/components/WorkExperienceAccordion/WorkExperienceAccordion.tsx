import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { TYPOGRAPHY, COLORS, SPACING } from "@/lib/constants";
import type { WorkExperiences, WorkExperiencesList } from "@/lib/types.d";

// Constants for accordion styling
const ACCORDION_STYLES = {
	container: SPACING.SECTION,
	trigger: "text-left",
	content: SPACING.CARD_CONTENT,
	position: "font-semibold",
	companyInfo: cn(TYPOGRAPHY.SMALL_TEXT, COLORS.TEXT_ACCENT),
  descriptionList: "list-disc list-outside pl-5 space-y-2",
	skillsContainer: cn("flex flex-wrap", SPACING.FLEX_GAP_2)
} as const;

interface WorkExperienceAccordionProps {
	workExperiences: WorkExperiences;
}

interface AccordionItemProps {
	experience: WorkExperiencesList;
	index: number;
}

function ExperienceDescription({ description }: { description?: string }) {
	// Assuming description is a single string, but if it needs to be split into list items
	// we can split by periods, newlines, or other delimiters
	const text = description ?? '';
	const descriptionItems = text.split(/[.!?]\s+/).filter(item => item.trim().length > 0);
	
	if (descriptionItems.length <= 1) {
		return <p className={COLORS.TEXT_SECONDARY}>{text}</p>;
	}

	return (
		<ul className={ACCORDION_STYLES.descriptionList}>
			{descriptionItems.map((desc, descIndex) => (
				<li key={`desc-${descIndex}`} className={COLORS.TEXT_SECONDARY}>
					{desc.trim()}{desc.trim().match(/[.!?]$/) ? '' : '.'}
				</li>
			))}
		</ul>
	);
}

function SkillsBadges({ skills }: { skills: string[] }) {
	return (
		<div className={ACCORDION_STYLES.skillsContainer}>
			{skills.map((skill, skillIndex) => (
				<Badge key={`skill-${skillIndex}`} variant="secondary">
					{skill}
				</Badge>
			))}
		</div>
	);
}

function ExperienceAccordionItem({ experience, index }: AccordionItemProps) {
	return (
		<AccordionItem key={`experience-${index}`} value={`item-${index}`}>
			<AccordionTrigger className={ACCORDION_STYLES.trigger}>
				<div>
					<div className={ACCORDION_STYLES.position}>
						{experience.position}
					</div>
					<div className={ACCORDION_STYLES.companyInfo}>
						{experience.company} | {experience.period}
					</div>
				</div>
			</AccordionTrigger>
			<AccordionContent className={ACCORDION_STYLES.content}>
				<ExperienceDescription description={experience.description} />
				<SkillsBadges skills={experience.skills} />
			</AccordionContent>
		</AccordionItem>
	);
}

export default function WorkExperienceAccordion({ workExperiences }: WorkExperienceAccordionProps) {
	const { workExperiencesList, title } = workExperiences;

	return (
		<section id="experience" className={ACCORDION_STYLES.container}>
			<h2 className={TYPOGRAPHY.SECTION_TITLE}>{title}</h2>
			<Accordion type="single" collapsible className="w-full">
				{workExperiencesList.map((experience, index) => (
					<ExperienceAccordionItem
						key={`accordion-item-${index}`}
						experience={experience}
						index={index}
					/>
				))}
			</Accordion>
		</section>
	);
}