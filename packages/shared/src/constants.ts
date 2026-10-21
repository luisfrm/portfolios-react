// Navigation
export const NAV_CONFIG = {
  MAX_WIDTH: "max-w-7xl",
  PADDING_X: "px-4 sm:px-6",
  PADDING_Y: "py-5",
} as const;

// Layout
export const LAYOUT = {
  CONTAINER_MAX_WIDTH: "max-w-7xl",
  CONTENT_GAP: "gap-8 sm:gap-12 lg:gap-16",
  CARD_GAP: "gap-3 sm:gap-4 lg:gap-5",
} as const;

// Typography
export const TYPOGRAPHY = {
  SECTION_TITLE: "text-3xl font-semibold text-center",
  CATEGORY_TITLE: "text-xl font-semibold mb-3",
  CARD_TITLE: "text-xl font-semibold",
  SMALL_TEXT: "text-sm",
  DESCRIPTION: "text-balance",
  HERO_NAME: "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold",
  HERO_ROLE: "text-xl sm:text-2xl lg:text-3xl font-medium",
  HERO_ABOUT: "text-lg sm:text-xl leading-relaxed",
} as const;

// Colors
export const COLORS = {
  TEXT_PRIMARY: "text-gray-900 dark:text-white",
  TEXT_SECONDARY: "text-gray-700 dark:text-gray-100",
  TEXT_MUTED: "text-gray-600 dark:text-gray-400",
  TEXT_ACCENT: "text-gray-500 dark:text-gray-400",
} as const;

// Spacing
export const SPACING = {
  SECTION: "space-y-4 sm:space-y-6",
  CARD_CONTENT: "space-y-3 sm:space-y-4",
  FLEX_GAP_2: "gap-2",
  FLEX_GAP_3: "gap-3",
  FLEX_GAP_4: "gap-4",
  FLEX_GAP_8: "gap-4 sm:gap-6 lg:gap-8",
  HERO_SPACING: "space-y-6 sm:space-y-8",
} as const;

// Animations
export const ANIMATION_CLASSES = {
  HOVER_SCALE: "lg:hover:scale-110",
  TRANSITION: "transition-transform duration-100",
  ANIMATE_SHOW: "animate-show",
  FADE_IN_UP: "animate-fade-in-up",
  FLOAT: "animate-float",
} as const;
