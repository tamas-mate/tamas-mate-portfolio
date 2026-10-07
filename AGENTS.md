# Tamás Máté Portfolio

## Stack

- **Language / Runtime**: TypeScript, Node.js
- **Framework**: React with Vite
- **Styling**: Tailwind CSS 4
- **Key dependencies**: TanStack Query, Supabase, Swiper, i18next
- **Package manager**: pnpm (version pinned in `package.json`)

## Build approach

<TBD, set by /scope>

## Commands

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev

# Build for production
pnpm build

# Check lint rules
pnpm lint
```

There is no test script in `package.json` yet.

## Rules

- Keep application code in `src/`, using TypeScript and React components.
- Use the `@/` alias for imports from `src/`.
- Keep reusable interface components in `src/components/ui/` and page sections in `src/components/sections/`.
- Keep shared content typed as `Content`. The app loads remote content through Supabase and uses `src/data/content.json` as fallback content.
- Keep application providers in `src/main.tsx` and their contexts under `src/context/`.
- Put user facing text in the English, Hungarian, and Romanian locale files, and access it with `useTranslation`.
- Tailwind CSS 4 is imported in `src/index.css`. Prefer utility classes, keeping shared base styles and custom component styles there.
- Keep TypeScript strict and use type only imports for types.
- Read environment variables through Vite's `import.meta.env` using the `VITE_` prefix. Keep local values in `.env.local` and out of source control.

## Context files

<!-- Nested AGENTS.md files are listed here as they are created -->

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
