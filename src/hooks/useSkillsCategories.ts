import { useMemo } from 'react';
import { SKILL_CATEGORIES } from '@/lib/constants';
import type { Skill, SkillCategory } from '@/lib/types/content';

export interface UseSkillsCategoriesReturn {
  categorizedSkills: SkillCategory[];
  hasCategories: boolean;
}

// Default categorization logic - can be customized
function categorizeSkill(skillName: string): string {
  const name = skillName.toLowerCase();
  
  // Frontend technologies
  if (name.includes('react') || name.includes('vue') || name.includes('angular') || 
      name.includes('html') || name.includes('css') || name.includes('javascript') ||
      name.includes('typescript') || name.includes('next') || name.includes('nuxt') ||
      name.includes('svelte') || name.includes('tailwind') || name.includes('sass') ||
      name.includes('bootstrap') || name.includes('jquery')) {
    return SKILL_CATEGORIES.FRONTEND;
  }
  
  // Backend technologies
  if (name.includes('node') || name.includes('express') || name.includes('fastify') ||
      name.includes('python') || name.includes('django') || name.includes('flask') ||
      name.includes('java') || name.includes('spring') || name.includes('php') ||
      name.includes('laravel') || name.includes('ruby') || name.includes('rails') ||
      name.includes('go') || name.includes('rust') || name.includes('c#') ||
      name.includes('.net') || name.includes('api')) {
    return SKILL_CATEGORIES.BACKEND;
  }
  
  // Database technologies
  if (name.includes('mysql') || name.includes('postgresql') || name.includes('postgres') ||
      name.includes('mongodb') || name.includes('redis') || name.includes('sqlite') ||
      name.includes('oracle') || name.includes('sql') || name.includes('database') ||
      name.includes('prisma') || name.includes('sequelize') || name.includes('mongoose')) {
    return SKILL_CATEGORIES.DATABASE;
  }
  
  // DevOps & Cloud
  if (name.includes('docker') || name.includes('kubernetes') || name.includes('aws') ||
      name.includes('azure') || name.includes('gcp') || name.includes('cloud') ||
      name.includes('terraform') || name.includes('ansible') || name.includes('jenkins') ||
      name.includes('github actions') || name.includes('gitlab') || name.includes('ci/cd') ||
      name.includes('nginx') || name.includes('apache') || name.includes('heroku') ||
      name.includes('vercel') || name.includes('netlify')) {
    return SKILL_CATEGORIES.DEVOPS_CLOUD;
  }
  
  // Default to Tools & Other
  return SKILL_CATEGORIES.TOOLS_OTHER;
}

export function useSkillsCategories(
  skills: Skill[], 
  predefinedCategories?: SkillCategory[]
): UseSkillsCategoriesReturn {
  
  const categorizedSkills = useMemo(() => {
    // If predefined categories are provided, use them
    if (predefinedCategories && predefinedCategories.length > 0) {
      return predefinedCategories;
    }
    
    // Otherwise, auto-categorize skills
    const categoryMap = new Map<string, Skill[]>();
    
    skills.forEach(skill => {
      const category = categorizeSkill(skill.name);
      if (!categoryMap.has(category)) {
        categoryMap.set(category, []);
      }
      categoryMap.get(category)!.push(skill);
    });
    
    // Convert map to array and sort categories
    const categoryOrder = [
      SKILL_CATEGORIES.FRONTEND,
      SKILL_CATEGORIES.BACKEND,
      SKILL_CATEGORIES.DATABASE,
      SKILL_CATEGORIES.DEVOPS_CLOUD,
      SKILL_CATEGORIES.TOOLS_OTHER
    ];
    
    return categoryOrder
      .filter(category => categoryMap.has(category))
      .map(category => ({
        category,
        skills: categoryMap.get(category)!
      }));
  }, [skills, predefinedCategories]);
  
  return {
    categorizedSkills,
    hasCategories: categorizedSkills.length > 0
  };
} 