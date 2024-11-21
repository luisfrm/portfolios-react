import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface WorkExperience {
  position: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

interface Props {
  workExperiences: {
    workExperiencesList: WorkExperience[];
    title: string;
  };
}

export default function WorkExperience({ workExperiences }: Props) {
	const { workExperiencesList, title } = workExperiences;
	
	return (
		<div id="experience" className="mx-auto max-w-3xl space-y-6">
			<h2 className="text-3xl font-semibold text-center">{title}</h2>
			<div className="relative">
				{/* Timeline line */}
				<div className="absolute left-8 top-0 h-full w-px bg-gray-500 md:left-1/2" />

				{workExperiencesList.map((experience, index) => (
					<div
						key={index}
						className={`mb-12 flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}
					>
						{/* Timeline dot */}
						<div className="absolute left-8 h-4 w-4 -translate-x-1/2 rounded-full bg-primary md:left-1/2" />

						<Card className="relative flex-1 bg-card text-gray-900 dark:text-white backdrop-blur-sm">
							<CardHeader>
								<time className="text-sm text-gray-600 dark:text-gray-400">{experience.period}</time>
								<h3 className="text-xl font-semibold">
									{experience.position} <span className="text-gray-600 dark:text-gray-400">{experience.company}</span>
								</h3>
							</CardHeader>
							<CardContent className="space-y-4">
								{experience.description.length > 0 && (
									<ul className="list-disc list-inside">
										{experience.description.map((desc, descIndex) => (
											<li className="text-gray-700 dark:text-gray-300" key={descIndex}>
												{desc}
											</li>
										))}
									</ul>
								)}
								<div className="flex flex-wrap gap-2">
									{experience.skills.map(tech => (
										<Badge
											key={tech}
											variant="secondary"
											className="bg-gray-200 dark:bg-gray-800/50 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-800"
										>
											{tech}
										</Badge>
									))}
								</div>
							</CardContent>
						</Card>

						{/* Spacer for timeline alignment */}
						<div className="hidden flex-1 md:block" />
					</div>
				))}
			</div>
		</div>
	);
}