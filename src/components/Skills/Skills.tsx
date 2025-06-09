import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TYPOGRAPHY, SPACING, SKILL_CATEGORY_COLORS } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import type { Skill, SkillCategory } from "@/lib/types/content";

// Constants for skills styling
const SKILLS_STYLES = {
	container: cn("id-skills", SPACING.SECTION),
	categoriesGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
	categoryCard: "p-4 rounded-lg border",
	categoryTitle: TYPOGRAPHY.CATEGORY_TITLE,
	skillsContainer: cn("flex flex-wrap", SPACING.FLEX_GAP_2),
	skillBadge: "bg-card hover:scale-105 transition-transform duration-200",
	sectionTitle: cn(
		TYPOGRAPHY.SECTION_TITLE,
		"bg-gradient-to-r from-blue-600 via-slate-700 to-gray-800 bg-clip-text text-transparent",
		"dark:from-blue-400 dark:via-slate-400 dark:to-gray-300",
		"text-center mb-4"
	),
	decorativeLine: "w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-700 mx-auto mb-6 sm:mb-8 lg:mb-12 rounded-full"
} as const;

interface SkillsProps {
	skills: {
		title: string;
		skillsCategories: SkillCategory[];
	};
}

interface SkillBadgeProps {
	skill: Skill;
}

interface CategorySectionProps {
	category: string;
	skills: Skill[];
	index: number;
}

function SkillBadge({ skill }: SkillBadgeProps) {
	return (
		<a 
			href={skill.url} 
			target="_blank" 
			rel="noopener noreferrer"
			aria-label={`${skill.name} - Ver más información`}
		>
			<Badge 
				className={SKILLS_STYLES.skillBadge} 
				variant="secondary"
			>
				<span className="mr-1">{skill.icon}</span>
				{skill.name}
			</Badge>
		</a>
	);
}

function CategorySection({ category, skills, index }: CategorySectionProps) {
	const categoryColorClass = SKILL_CATEGORY_COLORS[category as keyof typeof SKILL_CATEGORY_COLORS] || 
		SKILL_CATEGORY_COLORS['Tools & Other'];

	return (
		<AnimatedSection 
			animation="fade-up" 
			delay={index * 150}
		>
			<div className={cn(SKILLS_STYLES.categoryCard, categoryColorClass)}>
				<h3 className={SKILLS_STYLES.categoryTitle}>
					{category}
				</h3>
				<div className={SKILLS_STYLES.skillsContainer}>
					{skills.map((skill, skillIndex) => (
						<SkillBadge 
							key={`${category}-skill-${skillIndex}`} 
							skill={skill} 
						/>
					))}
				</div>
			</div>
		</AnimatedSection>
	);
}

export default function Skills({ skills }: SkillsProps) {
	const { title, skillsCategories } = skills;

	return (
		<section id="skills" className={SKILLS_STYLES.container}>
			<AnimatedSection animation="fade-scale" delay={0}>
				<div className="text-center">
					<h2 className={SKILLS_STYLES.sectionTitle}>{title}</h2>
					<div className={SKILLS_STYLES.decorativeLine}></div>
				</div>
			</AnimatedSection>
			
			<div className={SKILLS_STYLES.categoriesGrid}>
				{skillsCategories.map((categoryData, index) => (
					<CategorySection
						key={`category-${index}`}
						category={categoryData.category}
						skills={categoryData.skills}
						index={index}
					/>
				))}
			</div>
		</section>
	);
}
