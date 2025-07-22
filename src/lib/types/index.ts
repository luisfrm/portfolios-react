// Export all types
export * from './common';
export * from './content';

// Main data interface
import type { 
  PersonalInfo, 
  ContactInfo, 
  ContactFormInfo,
  NavItem, 
  SocialMediaItem 
} from './common';
import type { 
  SkillsSection, 
  ProjectsSection, 
  WorkExperienceSection 
} from './content';

export interface AppData {
  personal: PersonalInfo;
  contact: ContactInfo;
  contactForm: ContactFormInfo;
  navItems: NavItem[];
  socialMedia: SocialMediaItem[];
  skills: SkillsSection;
  projects: ProjectsSection;
  workExperiences: WorkExperienceSection;
}

// Re-export from original types.d.ts for backward compatibility
export type Data = AppData;
export type { 
  Contact, 
  Personal, 
  Projects, 
  ProjectList, 
  Skill, 
  Skills, 
  SocialMedia, 
  WorkExperiences, 
  WorkExperiencesList 
} from '../types.d'; 