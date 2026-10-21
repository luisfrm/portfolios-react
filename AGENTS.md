# AGENTS.md

## Project

pnpm monorepo for Luis Rivas' portfolio projects. The main app is `apps/web` (Next.js 16 App Router + Turbopack, React 19, TypeScript strict, Tailwind v4, shadcn/ui, next-intl). The client-facing services site is `apps/services` (Astro 7 static output, Tailwind v4, ES/EN) deployed to Cloudflare Workers static assets at `servicios.luisrivas.site`. Shared code lives in `packages/ui` (design system) and `packages/shared` (constants, hooks, generic components).

Workspace packages: `@portfolio/web`, `@portfolio/services`, `@portfolio/ui`, `@portfolio/shared`. Package manager is **pnpm** (`pnpm-lock.yaml` committed, pnpm 11).

`apps/web/tests/README.md` documents the Playwright suite (commands updated for the monorepo).

## Commands

Run from the repo root:

- `pnpm dev` — main portfolio dev server on port 3000 (`pnpm --filter @portfolio/web dev`)
- `pnpm dev:services` — services site dev server on port 3001 (`pnpm --filter @portfolio/services dev`)
- `pnpm dev:all` — runs both apps in parallel
- `pnpm build` — production build of the main portfolio (verified passing)
- `pnpm build:services` — static build of the services site (verified passing)
- `pnpm deploy:services` — `astro build` + `wrangler deploy` for `apps/services`
- `pnpm typecheck` — recursive `tsc --noEmit` across all workspace packages (verified passing)
- `pnpm test` — Playwright E2E for `apps/web` (see below)
- `pnpm lint` — ESLint 9 with the flat-native configs from `eslint-config-next` (`core-web-vitals` + `typescript`). ESLint stays on 9.x because `eslint-plugin-react` (pulled in by `eslint-config-next`) still calls `context.getFilename`, which ESLint 10 removed. `next` is a root devDependency only so the config's babel parser resolves.
- `pnpm install` — installs all workspaces. `pnpm-workspace.yaml` `allowBuilds` values are explicit: `esbuild: true` (Astro/Vite), `workerd: false` (only needed for local Workers runtime), `sharp: false` (images are unoptimized).

## Testing

- Playwright config lives in `apps/web/playwright.config.ts`; tests in `apps/web/tests`.
- Root `pnpm test` filters `@portfolio/web`. Single file / browser: `pnpm --filter @portfolio/web exec playwright test tests/navigation.spec.ts --project=chromium`.
- Playwright runs all 5 projects by default (`chromium`, `firefox`, `webkit`, `Mobile Chrome`, `Mobile Safari`) and auto-starts `pnpm dev` via `webServer` with `baseURL: http://localhost:3000`.
- E2E only, no unit test runner. Specs `page.goto("/")` and rely on the i18n middleware redirect to `/en`.
- `apps/web/tests/contact-form.spec.ts` posts to the real Formspree endpoint (`https://formspree.io/f/mvgqkavr`) — running it sends actual email. Mock the request before adding/changing submit tests.
- `apps/web/tests/helpers.ts` holds the viewport-aware helpers (`clickNavItem`, `toggleLanguage`, `openMobileNav`); the header collapses below `sm`, so specs must not click desktop nav links directly.
- Current state: 32/32 pass on `chromium` and on `Mobile Chrome`. `firefox` and `webkit` are not installed locally, so those projects are unverified here.
- `apps/services` has no committed E2E suite yet. Verify it with `pnpm --filter @portfolio/services typecheck`, `pnpm build:services`, and a headless Playwright pass at 320/375/768/1280/1440 px (menu dialog, language switch, mocked Formspree submit, no horizontal overflow).

## Architecture

- `apps/web` is one independent Next app. New apps go in `apps/<name>` with their own `package.json`, framework config, tsconfig extending root `tsconfig.base.json`, and stylesheet. `apps/services` is Astro, not Next.
- `apps/services` is Astro 7 with static output. There is **no** Cloudflare adapter and no Worker: `wrangler.jsonc` uploads `dist/` as static assets with `html_handling: "force-trailing-slash"`, `not_found_handling: "404-page"` and the `servicios.luisrivas.site` custom domain. `/` is a meta-refresh page plus a 301 in `public/_redirects`; security/cache headers live in `public/_headers`.
- Services i18n: `es` is the default with `en`; both use prefixes (`prefixDefaultLocale: true`, `redirectToDefaultLocale: false`). Localized routes are `/es/servicios`, `/es/trabajos`, `/en/services`, `/en/work`, etc. `src/pages/**` are thin wrappers; layouts live in `src/views/**`; localized URL helpers in `src/lib/routes.ts`.
- Services copy lives in `src/i18n/es.ts` and `src/i18n/en.ts`. `en` is typed as `typeof es`, so a missing or extra key fails `pnpm typecheck`. Case/service media and links are language-neutral in `src/data/services.ts`; images come from `r2-personal.luisrivas.site` and are not transformed by Astro.
- Services design system: `apps/services/tokens.css` holds the OKLCH tokens plus the Hallmark stamp; `src/styles/global.css` consumes only `var(--color-*)`, `var(--font-*)`, `var(--space-*)` and the motion tokens. Extend the token file rather than inlining colours. `.hallmark/log.json` records the macrostructure/theme for future diversification.
- Services contact form posts to the existing Formspree endpoint. JS posts with `fetch` and redirects to the localized thank-you page; without JS the form posts natively using `_next`. Never test it against the live endpoint; mock `https://formspree.io/f/mvgqkavr`.
- Services SEO: `@astrojs/sitemap` excludes the root and thank-you pages; `robots.txt` points to `sitemap-index.xml`; the base layout emits canonical, hreflang (es/en/x-default), OG/Twitter tags and JSON-LD (ProfessionalService, WebSite, Service, CreativeWork).
- Every page lives under `apps/web/app/[locale]/`. Locales are `en` (default) and `es` with `localePrefix: "always"` (`apps/web/lib/i18n/routing.ts`); `/` is redirected by `apps/web/proxy.ts`.
- `apps/web/proxy.ts` is the Next 16 middleware — do not create `middleware.ts`.
- UI strings live in `apps/web/lib/i18n/dictionaries/en.ts` and `es.ts`; add every key to both. `getDictionary` is `server-only`; client components use `useTranslations()` from next-intl.
- `apps/web/lib/data/` (projects, skills, workExperience) holds untranslated data; translated project text/media lives in the dictionaries, keyed by project `key`.
- Routes: `/` (single page with all sections), `/projects`, `/work-experience`, and `[...rest]` catch-all calling `notFound()`. Section anchors are ids `hero`, `experience`, `projects`, `skills`, `contact-form`.
- Path alias `@/*` maps to the app root (`apps/web/*`, there is no `src/`). Cross-package imports use the workspace names:
  - `@portfolio/ui/components/<name>` — shadcn primitives (`sonner`, `theme-provider` included)
  - `@portfolio/ui/lib/utils` — `cn()`
  - `@portfolio/shared/constants` — `LAYOUT`, `TYPOGRAPHY`, `SPACING`, `COLORS`, `NAV_CONFIG`, `ANIMATION_CLASSES`
  - `@portfolio/shared/hooks` — `useInView`, `useScrollTo`
  - `@portfolio/shared/components/*` — `AnimatedSection`, `ExpandableText`, `MouseMoveEffect`, icons
- `apps/web/lib/utils.ts`, `apps/web/lib/constants.ts` and `apps/web/hooks/index.ts` are thin re-exports of the shared versions; site-specific values (`HERO_STYLES`, `SKILL_CATEGORY_COLORS`, `useLanguage`, `useHeroActions`) stay in the app.
- Tailwind v4: no `tailwind.config.js`. Tokens, base theme and animations live in `packages/ui/src/styles/theme.css` under `@theme inline`. `apps/web/app/globals.css` imports it and adds `@source "../../../packages/ui/src"` / `@source "../../../packages/shared/src"` because Tailwind ignores node_modules (workspace packages are symlinked there).
- `packages/ui` and `packages/shared` export TypeScript source via `package.json` `exports`; there is no build step. Apps must list both in `next.config.ts` `transpilePackages`.
- `apps/web/next.config.ts` must stay wrapped in `withNextIntl(...)`; it points at `./lib/i18n/request.ts`.
- Image optimization is disabled; allowed remote hosts are `res.cloudinary.com/dw4ecbwo9/**` and `r2-personal.luisrivas.site`.
- `packages/ui/src/components/` is generated shadcn (new-york style). `apps/web/components.json` points the shadcn CLI at `@portfolio/ui/components` and `@portfolio/ui/lib/utils`. Extend or wrap rather than rewriting by hand.
- `packages/ui/src/components/theme-provider.tsx` passes children via `createElement` because next-themes' props type does not surface `children` in this workspace setup.

## Conventions

- Commits use conventional style with scope, e.g. `feat(projects): ...`, `fix(...)`, matching `git log`. The `/super-commit` command groups changes into semantic commits and pushes.
- Shared Tailwind class strings live in `@portfolio/shared/constants`; site-specific ones in `apps/web/lib/constants.ts`. Reuse them instead of re-declaring inline.
