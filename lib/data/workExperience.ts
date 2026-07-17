export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  description?: string;
  descriptionItems?: string[];
  skills: string[];
}

export const workExperienceSkills = {
  chicksGroup: [
    "Typescript",
    "Javascript",
    "Aurelia Framework",
    "Bootstrap",
    "SCSS",
    "StoryBook",
    "MySQL",
    "Azure",
    "AWS S3",
    "Git",
    "Github",
    "SignalR",
    "WebSockets",
  ],
  overfuel: [
    "Javascript",
    "Typescript",
    "Next",
    "React Native",
    "Vue",
    "Node,Express",
    "Git",
    "Github",
    "Jira",
    "Scrum",
    "Google Tag Manager",
    "Docker",
    "CI/CD",
    "AWS",
    "GCP",
    "CircleCI",
    "HTML",
    "CSS",
    "Tailwind",
  ],
  ignition321: [
    "Javascript",
    "Vue",
    "React",
    "Node",
    "Express",
    "Git",
    "Github",
    "HTML",
    "CSS",
    "Google Tag Manager",
    "Docker",
    "Docker Compose",
    "Cypress",
  ],
  firaOnlive: [
    "Typescript",
    "Javascript",
    "React",
    "Red5Pro SDK",
    "GetStream.io",
    "WebSockets",
    "Azure",
    "Git",
    "Github",
    "HMTL",
    "CSS",
    "Docker",
    "GitHub Actions",
    "Jest",
    "CI/CD",
  ],
} as const;

export const workExperienceOrder = [
  "chicksGroup",
  "overfuel",
  "ignition321",
  "firaOnlive",
] as const;

export type WorkExperienceKey = (typeof workExperienceOrder)[number];
