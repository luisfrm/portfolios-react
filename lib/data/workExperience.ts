// Named skill constants per work experience — easy to reference and extend
export const chicksGroupSkills = [
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
] as const;

export const overfuelSkills = [
  "Javascript",
  "Typescript",
  "Next.js",
  "React Native",
  "Vue",
  "Node.js",
  "Express",
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
] as const;

export const ignition321Skills = [
  "Javascript",
  "Vue",
  "React",
  "Node.js",
  "Express",
  "Git",
  "Github",
  "HTML",
  "CSS",
  "Google Tag Manager",
  "Docker",
  "Docker Compose",
  "Cypress",
] as const;

export const firaOnliveSkills = [
  "Typescript",
  "Javascript",
  "React",
  "Red5Pro SDK",
  "GetStream.io",
  "WebSockets",
  "Azure",
  "Git",
  "Github",
  "HTML",
  "CSS",
  "Docker",
  "GitHub Actions",
  "Jest",
  "CI/CD",
] as const;

// Unified work experience array — each entry carries its skills internally
export interface WorkExperienceData {
  key: string;
  skills: readonly string[];
}

export const workExperiences: WorkExperienceData[] = [
  { key: "chicksGroup",  skills: [...chicksGroupSkills] },
  { key: "overfuel",     skills: [...overfuelSkills] },
  { key: "ignition321",  skills: [...ignition321Skills] },
  { key: "firaOnlive",   skills: [...firaOnliveSkills] },
];
