import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Badge } from "../ui/badge";

interface WorkExperience {
  position: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

interface Props {
  workExperiences: WorkExperience[];
}

export default function WorkExperienceAccordion({workExperiences}: Props) {
  return (
    <div id="experience" className="space-y-2">
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      <Accordion type="single" collapsible className="w-full">
        {workExperiences.map((experience, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              <div>
                <div className="font-semibold">{experience.position}</div>
                <div className="text-sm text-gray-500">{experience.company} | {experience.period}</div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p className="">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}