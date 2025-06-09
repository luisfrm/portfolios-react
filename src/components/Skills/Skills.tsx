import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TYPOGRAPHY, SPACING, SKILL_CATEGORY_COLORS } from "@/lib/constants";
import { useSkillsCategories } from "@/hooks/useSkillsCategories";
import type { Skills as SkillsType, Skill } from "@/lib/types.d";

// Constants for skills styling
const SKILLS_STYLES = {
	container: cn("id-skills", SPACING.SECTION),
	categoriesGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
	categoryCard: "p-4 rounded-lg border",
	categoryTitle: TYPOGRAPHY.CATEGORY_TITLE,
	skillsContainer: cn("flex flex-wrap", SPACING.FLEX_GAP_2),
	skillBadge: "bg-card hover:scale-105 transition-transform duration-200"
} as const;

interface SkillsProps {
	skills: SkillsType;
}

interface SkillBadgeProps {
	skill: Skill;
}

interface CategorySectionProps {
	category: string;
	skills: Skill[];
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

function CategorySection({ category, skills }: CategorySectionProps) {
	const categoryColorClass = SKILL_CATEGORY_COLORS[category as keyof typeof SKILL_CATEGORY_COLORS] || 
		SKILL_CATEGORY_COLORS['Tools & Other'];

	return (
		<div className={cn(SKILLS_STYLES.categoryCard, categoryColorClass)}>
			<h3 className={SKILLS_STYLES.categoryTitle}>
				{category}
			</h3>
			<div className={SKILLS_STYLES.skillsContainer}>
				{skills.map((skill, index) => (
					<SkillBadge 
						key={`${category}-skill-${index}`} 
						skill={skill} 
					/>
				))}
			</div>
		</div>
	);
}

function SkillsGrid({ categorizedSkills }: { categorizedSkills: Array<{category: string, skills: Skill[]}> }) {
	return (
		<div className={SKILLS_STYLES.categoriesGrid}>
			{categorizedSkills.map((categoryData, index) => (
				<CategorySection
					key={`category-${index}`}
					category={categoryData.category}
					skills={categoryData.skills}
				/>
			))}
		</div>
	);
}

function FallbackSkillsList({ skills }: { skills: Skill[] }) {
	return (
		<div className="flex flex-wrap gap-2 justify-center">
			{skills.map((skill, index) => (
				<SkillBadge 
					key={`fallback-skill-${index}`} 
					skill={skill} 
				/>
			))}
		</div>
	);
}

export default function Skills({ skills }: SkillsProps) {
	const { title, skillsList } = skills;
	const { categorizedSkills, hasCategories } = useSkillsCategories(skillsList);

	return (
		<section id="skills" className={SKILLS_STYLES.container}>
			<h2 className={TYPOGRAPHY.SECTION_TITLE}>{title}</h2>
			
			{hasCategories ? (
				<SkillsGrid categorizedSkills={categorizedSkills} />
			) : (
				<FallbackSkillsList skills={skillsList} />
			)}
		</section>
	);
}
