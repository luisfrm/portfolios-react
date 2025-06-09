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
  CONTAINER_MAX_WIDTH: 'max-w-6xl',
  CONTENT_GAP: 'gap-16',
  CARD_GAP: 'gap-5'
} as const;

// Typography
export const TYPOGRAPHY = {
  SECTION_TITLE: 'text-3xl font-semibold text-center',
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
  FLEX_GAP_4: 'gap-4',
  FLEX_GAP_8: 'gap-8'
} as const;

// Animations
export const ANIMATION_CLASSES = {
  HOVER_SCALE: 'lg:hover:scale-110',
  TRANSITION: 'transition-transform duration-100',
  ANIMATE_SHOW: 'animate-show'
} as const; 