// PDF URLs
export const PDF_URLS = {
  en: "https://drive.google.com/file/d/1uZU-2QexviG9ET6u8dLI6f2R1topivXR/view?usp=sharing",
  es: "https://drive.google.com/file/d/1OYRBnOrc_7WfK9MCtbj50X6GkB64IcX7/view?usp=sharing"
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
  CONTENT_GAP: 'gap-8 sm:gap-12 lg:gap-16',
  CARD_GAP: 'gap-3 sm:gap-4 lg:gap-5'
} as const;

// Typography
export const TYPOGRAPHY = {
  SECTION_TITLE: 'text-3xl font-semibold text-center',
  CATEGORY_TITLE: 'text-xl font-semibold mb-3',
  CARD_TITLE: 'text-xl font-semibold',
  SMALL_TEXT: 'text-sm',
  DESCRIPTION: 'text-balance',
  // Hero typography
  HERO_NAME: 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold',
  HERO_ROLE: 'text-xl sm:text-2xl lg:text-3xl font-medium',
  HERO_ABOUT: 'text-lg sm:text-xl leading-relaxed'
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
  SECTION: 'space-y-4 sm:space-y-6',
  CARD_CONTENT: 'space-y-3 sm:space-y-4',
  FLEX_GAP_2: 'gap-2',
  FLEX_GAP_3: 'gap-3',
  FLEX_GAP_4: 'gap-4',
  FLEX_GAP_8: 'gap-4 sm:gap-6 lg:gap-8',
  HERO_SPACING: 'space-y-6 sm:space-y-8'
} as const;

// Hero Styles
export const HERO_STYLES = {
  container: 'min-h-screen relative overflow-hidden flex items-center justify-center',
  background: 'absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900',
  content: 'relative z-10 text-center px-4 sm:px-6 lg:px-8',
  decorativeElements: 'absolute inset-0 overflow-hidden pointer-events-none',
  nameGradient: 'bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-300 dark:to-slate-300 bg-clip-text text-transparent',
  roleHighlight: 'text-blue-600 dark:text-blue-400',
  ctaButton: 'inline-flex items-center px-8 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-blue-600 to-slate-700 text-white hover:from-blue-700 hover:to-slate-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl',
  secondaryButton: 'inline-flex items-center px-6 py-3 text-lg font-medium rounded-full border-2 border-slate-800 text-slate-800 dark:border-slate-400 dark:text-slate-100 hover:bg-slate-600 hover:text-white dark:hover:bg-slate-400 dark:hover:text-gray-900 transition-all duration-300'
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
  'Frontend': 'bg-slate-50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-700',
  'Backend': 'bg-gray-50 dark:bg-gray-900/30 border-gray-200 dark:border-gray-700',
  'Database': 'bg-slate-50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-700',
  'DevOps & Cloud': 'bg-slate-50 dark:bg-slate-900/30 border-slate-300 dark:border-slate-600',
  'Tools & Other': 'bg-gray-100 dark:bg-gray-800/30 border-gray-300 dark:border-gray-600'
} as const;

// Animations
export const ANIMATION_CLASSES = {
  HOVER_SCALE: 'lg:hover:scale-110',
  TRANSITION: 'transition-transform duration-100',
  ANIMATE_SHOW: 'animate-show',
  FADE_IN_UP: 'animate-fade-in-up',
  FLOAT: 'animate-float'
} as const; 