export {
  ANIMATION_CLASSES,
  COLORS,
  LAYOUT,
  NAV_CONFIG,
  SPACING,
  TYPOGRAPHY,
} from "@portfolio/shared/constants";

// Site-specific: hero look and feel (this portfolio's branding)
export const HERO_STYLES = {
  container:
    "min-h-screen relative overflow-hidden flex items-center justify-center",
  background:
    "absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900",
  content: "relative z-10 text-center px-4 sm:px-6 lg:px-8",
  decorativeElements: "absolute inset-0 overflow-hidden pointer-events-none",
  nameGradient:
    "bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-300 dark:to-slate-300 bg-clip-text text-transparent",
  roleHighlight: "text-blue-600 dark:text-blue-400",
  ctaButton:
    "inline-flex items-center px-8 py-4 text-lg font-medium rounded-full border-2 border-transparent bg-gradient-to-r from-blue-600 to-slate-700 text-white hover:from-blue-700 hover:to-slate-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl",
  secondaryButton:
    "inline-flex items-center px-6 py-4 text-lg font-medium rounded-full border-2 border-slate-800 text-slate-800 dark:border-slate-400 dark:text-slate-100 hover:bg-slate-600 hover:text-white dark:hover:bg-slate-400 dark:hover:text-gray-900 transition-all duration-300",
} as const;

// Site-specific: colors keyed by this portfolio's skill categories
export const SKILL_CATEGORY_COLORS = {
  Frontend:
    "bg-slate-50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-700",
  Backend:
    "bg-gray-50 dark:bg-gray-900/30 border-gray-200 dark:border-gray-700",
  Database:
    "bg-slate-50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-700",
  "DevOps & Cloud":
    "bg-slate-50 dark:bg-slate-900/30 border-slate-300 dark:border-slate-600",
  "Tools & Other":
    "bg-gray-100 dark:bg-gray-800/30 border-gray-300 dark:border-gray-600",
} as const;
