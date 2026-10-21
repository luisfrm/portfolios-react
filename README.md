# Portfolios Monorepo

Personal portfolio of Luis Rivas plus the shared foundation for future portfolio projects.

The main app is built with **Next.js 16** (App Router, Turbopack), **React 19**, **TypeScript** (strict), **Tailwind v4**, **shadcn/ui** and **next-intl**. The services site (`apps/services`) is built with **Astro 7**, Tailwind v4 and a small ES/EN dictionary layer, and deploys as static assets on Cloudflare Workers.

## Structure

```
.
├── apps/
│   ├── web/                  # Main portfolio (luisrivas.site)
│   │   ├── app/              # App Router routes, global styles
│   │   ├── components/       # Site-specific sections (hero, nav, projects, ...)
│   │   ├── hooks/            # Site-specific hooks (language, hero actions)
│   │   ├── lib/              # i18n dictionaries, portfolio data, site constants
│   │   ├── public/
│   │   └── tests/            # Playwright E2E
│   └── services/             # Services site (servicios.luisrivas.site)
│       ├── src/pages/        # Thin ES/EN route wrappers
│       ├── src/views/        # Page compositions
│       ├── src/components/   # Nav, footer, ledger, cases, form, SEO
│       ├── src/i18n/         # ES/EN copy (type-checked key parity)
│       ├── src/data/         # Services, cases, media and site config
│       ├── tokens.css        # OKLCH design tokens + Hallmark stamp
│       ├── astro.config.mjs
│       └── wrangler.jsonc    # Static assets + custom domain
├── packages/
│   ├── ui/                   # @portfolio/ui — design system
│   │   └── src/
│   │       ├── components/   # shadcn primitives + ThemeProvider + Toaster
│   │       ├── lib/utils.ts  # cn()
│   │       └── styles/theme.css  # design tokens, base theme, animations
│   └── shared/               # @portfolio/shared — cross-app logic
│       └── src/
│           ├── components/   # AnimatedSection, ExpandableText, icons, ...
│           ├── hooks/        # useInView, useScrollTo
│           └── constants.ts  # LAYOUT, TYPOGRAPHY, SPACING, COLORS, ...
├── tsconfig.base.json        # shared TS compiler options
├── pnpm-workspace.yaml
└── package.json              # workspace scripts
```

## Commands

Run from the repository root:

| Command | Description |
| --- | --- |
| `pnpm install` | Install every workspace package |
| `pnpm dev` | Start the main portfolio on http://localhost:3000 |
| `pnpm dev:services` | Start the services site on http://localhost:3001 |
| `pnpm dev:all` | Start every app that has a `dev` script |
| `pnpm build` | Production build of the main portfolio |
| `pnpm build:services` | Static build of the services site |
| `pnpm deploy:services` | Build and deploy the services site with Wrangler |
| `pnpm typecheck` | Typecheck every workspace package |
| `pnpm test` | Playwright E2E for the main portfolio |
| `pnpm lint` | ESLint 9 with `eslint-config-next` flat configs |

App-scoped examples:

```bash
pnpm --filter @portfolio/web dev
pnpm --filter @portfolio/web exec playwright test tests/navigation.spec.ts --project=chromium
pnpm --filter @portfolio/services dev
pnpm --filter @portfolio/ui typecheck
```

## Apps

### `@portfolio/services`

Client-facing services site for `servicios.luisrivas.site`: landing pages, full sites and web products. Astro 7 static output, deployed with `wrangler deploy` (no adapter, no Worker — Wrangler uploads `dist/` as static assets).

- `es` is the default locale and `en` the second; every route is prefixed (`/es/servicios/`, `/en/services/`, ...). The root redirects to `/es/` through `src/pages/index.astro` plus a 301 in `public/_redirects`.
- Copy lives in `src/i18n/es.ts` and `src/i18n/en.ts`; the English dictionary is typed against the Spanish one, so `pnpm typecheck` fails on key drift.
- Design tokens are in `tokens.css` (OKLCH + type/space/motion tokens, with the Hallmark stamp). Components consume tokens only.
- The contact form reuses the existing Formspree endpoint and works without JS (native POST + `_next`).
- Images are served from the `r2-personal.luisrivas.site` bucket; Astro does not transform them.
- Deploy requires a Wrangler login and the `servicios.luisrivas.site` zone. `wrangler.jsonc` sets `html_handling: "force-trailing-slash"` and a custom 404 page.

Use this app as the reference when adding another static marketing site instead of the Next.js steps below.

## Packages

### `@portfolio/ui`

Design system shared by every portfolio app:

- shadcn/ui primitives (`button`, `card`, `dialog`, `carousel`, `sheet`, ...)
- `ThemeProvider` (next-themes) and `Toaster` (sonner)
- `cn()` helper
- `styles/theme.css` with CSS variables, radii, colors and animations

Import primitives through subpaths to keep bundles small:

```tsx
import { Button } from "@portfolio/ui/components/button";
import { cn } from "@portfolio/ui/lib/utils";
```

### `@portfolio/shared`

Framework-level logic and generic building blocks:

```tsx
import { LAYOUT, TYPOGRAPHY } from "@portfolio/shared/constants";
import { useInView, useScrollTo } from "@portfolio/shared/hooks";
import { AnimatedSection } from "@portfolio/shared/components/animated-section";
import { GithubIcon } from "@portfolio/shared/components/icons/brand-icons";
```

Both packages ship TypeScript source directly; the app compiles them via
`transpilePackages` in `next.config.ts`. There is no package build step.

## Creating a new portfolio project

1. Create `apps/<name>/` with its own `package.json`:

   ```json
   {
     "name": "@portfolio/<name>",
     "private": true,
     "scripts": {
       "dev": "next dev --port 3001",
       "build": "next build",
       "start": "next start --port 3001",
       "typecheck": "tsc --noEmit"
     },
     "dependencies": {
       "@portfolio/shared": "workspace:*",
       "@portfolio/ui": "workspace:*",
       "next": "^16.2.10",
       "react": "^19.2.7",
       "react-dom": "^19.2.7"
     }
   }
   ```

2. Extend the shared TypeScript config in `apps/<name>/tsconfig.json`:

   ```json
   {
     "extends": "../../tsconfig.base.json",
     "compilerOptions": {
       "plugins": [{ "name": "next" }],
       "paths": { "@/*": ["./*"] }
     },
     "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
     "exclude": ["node_modules"]
   }
   ```

3. Add `transpilePackages: ["@portfolio/ui", "@portfolio/shared"]` to its `next.config.ts`.

4. In its global stylesheet, import Tailwind and the shared theme, then teach
   Tailwind to scan the workspace packages:

   ```css
   @import "tailwindcss";
   @import "../../../packages/ui/src/styles/theme.css";

   @source "../../../packages/ui/src";
   @source "../../../packages/shared/src";
   ```

   Provide the font variables expected by the theme (`--font-work-sans`,
   `--font-bitter`) or override `--font-sans` / `--font-heading`.

5. Run `pnpm install` and `pnpm --filter @portfolio/<name> dev`.

Apps are independent deployments: each one has its own `next.config.ts`,
routes and dictionaries, while the design system and generic logic stay
centralized in `packages/`.

## Testing

E2E tests live in `apps/web/tests` and run with Playwright against
`http://localhost:3000` (the dev server is started automatically). See
`apps/web/tests/README.md`.

> `apps/web/tests/contact-form.spec.ts` submits to the real Formspree endpoint
> and sends an actual email. Mock the request before running it.

## Deployment

Each app builds independently with `pnpm --filter @portfolio/<app> build`.
The main portfolio deploys to Vercel; per-app root directories are
`apps/<app>`.
