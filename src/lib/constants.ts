// PDF URLs
export const PDF_URLS = {
  en: "https://drive.google.com/file/d/1uZU-2QexviG9ET6u8dLI6f2R1topivXR/view?usp=sharing",
  es: "https://drive.google.com/file/d/1RAgnxrdfFGLuvQir7EuUsh_vxmVhDi9v/view?usp=sharing"
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  LANGUAGE: 'lang',
  THEME: 'theme'
} as const;

// URL Parameters
export const URL_PARAMS = {
  LANGUAGE: 'lang'
} as const;

// Navigation
export const NAV_CONFIG = {
  MAX_WIDTH: 'max-w-7xl',
  PADDING_X: 'px-4 sm:px-6',
  PADDING_Y: 'py-5'
} as const;

// Layout
export const LAYOUT = {
  CONTAINER_MAX_WIDTH: 'max-w-7xl',
  CONTENT_GAP: 'gap-16',
  CARD_GAP: 'gap-5'
} as const;

// Typography
export const TYPOGRAPHY = {
  SECTION_TITLE: 'text-3xl font-semibold text-center',
  CATEGORY_TITLE: 'text-xl font-semibold mb-3',
  CARD_TITLE: 'text-xl font-semibold',
  SMALL_TEXT: 'text-sm',
  DESCRIPTION: 'text-balance'
} as const;

// Colors
export const COLORS = {
  TEXT_PRIMARY: 'text-gray-900 dark:text-white',
  TEXT_SECONDARY: 'text-gray-700 dark:text-gray-100',
  TEXT_MUTED: 'text-gray-600 dark:text-gray-400',
  TEXT_ACCENT: 'text-gray-500 dark:text-gray-400'
} as const;

// Spacing
export const SPACING = {
  SECTION: 'space-y-6',
  CARD_CONTENT: 'space-y-4',
  FLEX_GAP_2: 'gap-2',
  FLEX_GAP_3: 'gap-3',
  FLEX_GAP_4: 'gap-4',
  FLEX_GAP_8: 'gap-8'
} as const;

// Skills Categories
export const SKILL_CATEGORIES = {
  FRONTEND: 'Frontend',
  BACKEND: 'Backend', 
  DATABASE: 'Database',
  DEVOPS_CLOUD: 'DevOps & Cloud',
  TOOLS_OTHER: 'Tools & Other'
} as const;

export const SKILL_CATEGORY_COLORS = {
  [SKILL_CATEGORIES.FRONTEND]: 'bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700',
  [SKILL_CATEGORIES.BACKEND]: 'bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700',
  [SKILL_CATEGORIES.DATABASE]: 'bg-purple-100 dark:bg-purple-900/30 border-purple-300 dark:border-purple-700',
  [SKILL_CATEGORIES.DEVOPS_CLOUD]: 'bg-orange-100 dark:bg-orange-900/30 border-orange-300 dark:border-orange-700',
  [SKILL_CATEGORIES.TOOLS_OTHER]: 'bg-gray-100 dark:bg-gray-900/30 border-gray-300 dark:border-gray-700'
} as const;

// Animations
export const ANIMATION_CLASSES = {
  HOVER_SCALE: 'lg:hover:scale-110',
  TRANSITION: 'transition-transform duration-100',
  ANIMATE_SHOW: 'animate-show'
} as const; 