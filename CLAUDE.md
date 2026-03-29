# Claude Instructions

## Project Overview

This is a **pnpm monorepo** using TurboRepo for task orchestration and Biome for linting/formatting.

## Structure

```
extract-component-modularise/
├── apps/
│   ├── todo-app/       # Next.js 15 app — full todo CRUD, Jotai state (port 3000)
│   └── landing-page/   # Next.js 15 app — hero + todo list, Jotai state (port 3001)
└── libs/               # Vite library package (@repo/ui)
    └── src/
        ├── index.ts        # Library entry point — export components here
        └── components/     # React component definitions go here
```

## Commands

```bash
pnpm dev          # Run all apps in dev mode (via TurboRepo)
pnpm build        # Build all packages
pnpm lint         # Biome lint check across the entire repo
pnpm format       # Biome auto-format all files
pnpm typecheck    # TypeScript type check across all packages
```

To run a single workspace:
```bash
pnpm --filter todo-app dev
pnpm --filter landing-page dev
pnpm --filter @repo/ui build
```

## Key Conventions

- **Package manager**: pnpm only — do not use npm or yarn
- **Linter/formatter**: Biome — do not add ESLint or Prettier
- **State management**: Jotai for React state
- **TypeScript**: strict mode enabled in all packages
- **Indentation**: tabs (enforced by Biome)

## Adding Components to libs

1. Create the component file in `libs/src/components/`
2. Export it from `libs/src/index.ts`
3. To use in an app, add `"@repo/ui": "workspace:*"` to the app's `package.json` dependencies

## Branch Strategy

- `develop` — main development branch
- `claude/...` — Claude working branches
