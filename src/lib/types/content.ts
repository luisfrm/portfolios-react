import { BaseContent, BaseItem, ListContent } from './common';

// Skills types
export interface Skill extends BaseItem {
  url: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface SkillsSection extends BaseContent {
  skillsList: Skill[]; // For backward compatibility
  skillsByCategory?: SkillCategory[]; // New categorized structure
}

// Projects types
export interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ProjectsSection extends ListContent<Project> {
  projectList: Project[];
}

// Work experience types
export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  description: string;
  skills: string[];
}

export interface WorkExperienceSection extends BaseContent {
  workExperiencesList: WorkExperience[];
} 