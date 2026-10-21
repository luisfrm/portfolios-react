import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    rules: {
      // The workspace has no `pages/` directory: every route is an App Router
      // segment under `apps/web/app`, so this rule cannot resolve page paths.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  globalIgnores([
    "**/.next/**",
    "**/.astro/**",
    "**/.wrangler/**",
    "**/dist/**",
    "**/node_modules/**",
    "**/next-env.d.ts",
    "**/playwright-report/**",
    "**/test-results/**",
    "**/out/**",
    "**/build/**",
    "next.config.ts",
    "apps/web/next.config.ts",
  ]),
]);
