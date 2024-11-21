import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Badge } from "../ui/badge";

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

export default function WorkExperienceAccordion({workExperiences}: Props) {
  const { workExperiencesList, title } = workExperiences;
  return (
		<div id="experience" className="space-y-6">
			<h2 className="text-3xl font-semibold text-center">{title}</h2>
			<Accordion type="single" collapsible className="w-full">
				{workExperiencesList.map((experience, index) => (
					<AccordionItem key={index} value={`item-${index}`}>
						<AccordionTrigger className="text-left">
							<div>
								<div className="font-semibold">{experience.position}</div>
								<div className="text-sm text-gray-500">
									{experience.company} | {experience.period}
								</div>
							</div>
						</AccordionTrigger>
						<AccordionContent className="space-y-4">
							{experience.description.length > 0 &&
								(
									<ul className="list-disc list-inside">
										{experience.description.map((desc, descIndex) => (
											<li key={descIndex}>
												{desc}
											</li>
										))}
									</ul>
								)}
							<div className="flex flex-wrap gap-2">
								{experience.skills.map((skill, skillIndex) => (
									<Badge key={skillIndex} variant="secondary">
										{skill}
									</Badge>
								))}
							</div>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}