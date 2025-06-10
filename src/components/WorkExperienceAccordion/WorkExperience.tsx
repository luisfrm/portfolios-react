import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LAYOUT, TYPOGRAPHY, COLORS, SPACING, ANIMATION_CLASSES } from "@/lib/constants"
import { AnimatedSection } from "@/components/common/AnimatedSection"
import type { WorkExperiences, WorkExperiencesList } from "@/lib/types.d"

// Constants for timeline styling
const TIMELINE_STYLES = {
	container: cn(LAYOUT.CONTAINER_MAX_WIDTH, "mx-auto", SPACING.SECTION),
	timeline: "relative",
	timelineLine: "absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-600 via-slate-600 to-gray-700 md:left-1/2 opacity-40",
	timelineDot: "absolute left-8 h-5 w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-slate-700 md:left-1/2 shadow-lg ring-4 ring-background z-10",
	experienceContainer: cn("mb-8 sm:mb-12 lg:mb-16 flex flex-col", SPACING.FLEX_GAP_8, "group"),
	spacer: "hidden flex-1 md:block"
} as const

const CARD_STYLES = {
	base: cn(
		"relative flex-1 bg-gradient-to-br from-card via-card to-card/90 backdrop-blur-sm border-2 border-border/50",
		"hover:border-blue-600/30 hover:shadow-xl hover:shadow-blue-600/10",
		"transition-all duration-300 ease-out",
		COLORS.TEXT_PRIMARY, 
		ANIMATION_CLASSES.ANIMATE_SHOW
	),
	time: cn(TYPOGRAPHY.SMALL_TEXT, "text-blue-600 dark:text-blue-400 font-medium"),
	title: cn(TYPOGRAPHY.CARD_TITLE, "bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text"),
	company: cn("text-slate-600 dark:text-slate-400 font-medium"),
	description: cn(COLORS.TEXT_SECONDARY, TYPOGRAPHY.DESCRIPTION, "leading-relaxed"),
	skillsContainer: cn("flex flex-wrap", SPACING.FLEX_GAP_2)
} as const

const SKILL_BADGE_STYLE = "bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:from-blue-50 hover:to-slate-100 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-200 hover:scale-105"

interface WorkExperienceProps {
	workExperiences: WorkExperiences
}

interface ExperienceCardProps {
	experience: WorkExperiencesList
	isEven: boolean
	index: number
}

function ExperienceCard({ experience, isEven, index }: ExperienceCardProps) {
	const animationType = isEven ? 'fade-left' : 'fade-right';
	
	return (
		<AnimatedSection 
			animation={animationType}
			delay={index * 200}
			className={cn(
				TIMELINE_STYLES.experienceContainer,
				isEven ? "md:flex-row" : "md:flex-row-reverse"
			)}
		>
			{/* Timeline dot with pulse effect */}
			{
				index !== 0 && (
					<div className={cn(TIMELINE_STYLES.timelineDot, "animate-pulse")}>
						<div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-slate-700 animate-ping opacity-20"></div>
					</div>
				)
			}

			<Card className={CARD_STYLES.base}>
				<CardHeader className="pb-4">
					<time className={CARD_STYLES.time}>
						{experience.period}
					</time>
					<h3 className={CARD_STYLES.title}>
						{experience.position}{" "}
						<span className={CARD_STYLES.company}>
							@ {experience.company}
						</span>
					</h3>
				</CardHeader>
				<CardContent className={SPACING.CARD_CONTENT}>
					<p className={CARD_STYLES.description}>
						{experience.description}
					</p>
					<SkillsBadges skills={experience.skills} />
				</CardContent>
			</Card>

			{/* Spacer for timeline alignment */}
			<div className={TIMELINE_STYLES.spacer} />
		</AnimatedSection>
	)
}

function SkillsBadges({ skills }: { skills: string[] }) {
	return (
		<div className={CARD_STYLES.skillsContainer}>
			{skills.map((skill, skillIndex) => (
				<Badge 
					key={`skill-${skillIndex}`} 
					variant="outline"
					className={SKILL_BADGE_STYLE}
				>
					{skill}
				</Badge>
			))}
		</div>
	)
}

function Timeline({ experiences }: { experiences: WorkExperiencesList[] }) {
	return (
		<div className={TIMELINE_STYLES.timeline}>
			{/* Timeline line with gradient */}
			<div className={TIMELINE_STYLES.timelineLine}>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/20 to-transparent blur-sm"></div>
			</div>
			
			{experiences.map((experience: WorkExperiencesList, index: number) => (
				<ExperienceCard
					key={`experience-${index}`}
					experience={experience}
					isEven={index % 2 === 0}
					index={index}
				/>
			))}
		</div>
	)
}

export default function WorkExperience({ workExperiences }: WorkExperienceProps) {
	const { workExperiencesList, title } = workExperiences

	return (
		<section id="experience" className={TIMELINE_STYLES.container}>
			{/* Section title with gradient effect */}
			<AnimatedSection animation="fade-scale" delay={0}>
				<div className="text-center mb-6 sm:mb-8 lg:mb-12">
					<h2 className={cn(
						TYPOGRAPHY.SECTION_TITLE, 
						"bg-gradient-to-r from-blue-600 via-slate-700 to-gray-800 bg-clip-text text-transparent",
						"dark:from-blue-400 dark:via-slate-400 dark:to-gray-300"
					)}>
						{title}
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-700 mx-auto mt-2 sm:mt-3 lg:mt-4 rounded-full"></div>
				</div>
			</AnimatedSection>
			<Timeline experiences={workExperiencesList} />
		</section>
	)
}