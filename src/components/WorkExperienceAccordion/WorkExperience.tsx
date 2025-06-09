import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LAYOUT, TYPOGRAPHY, COLORS, SPACING, ANIMATION_CLASSES } from "@/lib/constants"
import type { WorkExperiences, WorkExperiencesList } from "@/lib/types.d"

// Constants for timeline styling
const TIMELINE_STYLES = {
	container: cn(LAYOUT.CONTAINER_MAX_WIDTH, "mx-auto", SPACING.SECTION),
	timeline: "relative",
	timelineLine: "absolute left-8 top-0 h-full w-px bg-gray-500 md:left-1/2",
	timelineDot: "absolute left-8 h-4 w-4 -translate-x-1/2 rounded-full bg-primary md:left-1/2",
	experienceContainer: cn("mb-12 flex flex-col", SPACING.FLEX_GAP_8),
	spacer: "hidden flex-1 md:block"
} as const

const CARD_STYLES = {
	base: cn("relative flex-1 bg-card backdrop-blur-sm", COLORS.TEXT_PRIMARY, ANIMATION_CLASSES.ANIMATE_SHOW),
	time: cn(TYPOGRAPHY.SMALL_TEXT, COLORS.TEXT_MUTED),
	title: TYPOGRAPHY.CARD_TITLE,
	company: COLORS.TEXT_ACCENT,
	description: cn(COLORS.TEXT_SECONDARY, TYPOGRAPHY.DESCRIPTION),
	skillsContainer: cn("flex flex-wrap", SPACING.FLEX_GAP_2)
} as const

interface WorkExperienceProps {
	workExperiences: WorkExperiences
}

interface ExperienceCardProps {
	experience: WorkExperiencesList
	isEven: boolean
}

function ExperienceCard({ experience, isEven }: ExperienceCardProps) {
	return (
		<div className={cn(
			TIMELINE_STYLES.experienceContainer,
			isEven ? "md:flex-row" : "md:flex-row-reverse"
		)}>
			{/* Timeline dot */}
			<div className={TIMELINE_STYLES.timelineDot} />

			<Card className={CARD_STYLES.base}>
				<CardHeader>
					<time className={CARD_STYLES.time}>
						{experience.period}
					</time>
					<h3 className={CARD_STYLES.title}>
						{experience.position}{" "}
						<span className={CARD_STYLES.company}>
							- {experience.company}
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
		</div>
	)
}

function SkillsBadges({ skills }: { skills: string[] }) {
	return (
		<div className={CARD_STYLES.skillsContainer}>
			{skills.map((skill, skillIndex) => (
				<Badge key={`skill-${skillIndex}`} variant="secondary">
					{skill}
				</Badge>
			))}
		</div>
	)
}

function Timeline({ experiences }: { experiences: WorkExperiencesList[] }) {
	return (
		<div className={TIMELINE_STYLES.timeline}>
			{/* Timeline line */}
			<div className={TIMELINE_STYLES.timelineLine} />
			
			{experiences.map((experience: WorkExperiencesList, index: number) => (
				<ExperienceCard
					key={`experience-${index}`}
					experience={experience}
					isEven={index % 2 === 0}
				/>
			))}
		</div>
	)
}

export default function WorkExperience({ workExperiences }: WorkExperienceProps) {
	const { workExperiencesList, title } = workExperiences

	return (
		<section id="experience" className={TIMELINE_STYLES.container}>
			<h2 className={TYPOGRAPHY.SECTION_TITLE}>{title}</h2>
			<Timeline experiences={workExperiencesList} />
		</section>
	)
}