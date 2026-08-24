# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start Next.js development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier

# Sanity Studio (run from /sanity directory)
cd sanity && npm run dev    # Start Sanity Studio
cd sanity && npm run build  # Build Sanity Studio
```

## Architecture

This is a Next.js 16 portfolio website using the App Router with Sanity as the headless CMS.

### Project Structure

- **`/app`** - Next.js App Router pages and sections
  - `/sections` - Page sections (WelcomeSection, AboutSection, ProjectsSection, TechnologiesSection)
  - `/projects` - Projects listing page with filtering
- **`/components`** - Shared UI components (Header, Footer, ThemeSwitcher, etc.)
- **`/context`** - React context providers (theme context using next-themes)
- **`/hooks`** - Custom React hooks
- **`/utils`** - Utilities including Sanity fetcher, Framer Motion animations, media queries
- **`/styles`** - CSS files (Tailwind-based with custom utilities)
- **`/sanity`** - Sanity Studio v3 configuration and schemas

### Key Patterns

**Module imports** use absolute paths from the project root (configured in `jsconfig.json`):
```js
import { AppHeader } from "components";
import { ThemeContext } from "context";
```

**Data fetching** uses SWR with a custom fetcher. The `production` dataset is public, so reads are unauthenticated — no token is involved. GROQ queries live in `constants/queries.js`.

**Project ordering** is controlled by the `sortOrder` number field on each project in Sanity Studio (lower shows first). Projects without one fall back to oldest-first.

**Styling** uses Tailwind CSS with dark mode (`class` strategy). Custom colors are defined in `tailwind.config.js` (brand-light, brand-dark, brand-purple, etc.).

**Animations** use Framer Motion with reusable variants defined in `utils/motions.js`.

### Sanity Schema Types

Located in `/sanity/schemas`:
- `project` - Portfolio projects: title, slug, description, sortOrder, featured, image, techStack (array of strings), url, github
- `category` - Project categories
- `stack` - Technology stack items

## Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_SANITY_URL` - Sanity API endpoint

That is the only one required. GROQ queries are defined in `constants/queries.js`, not
in environment variables.

## Deployment

Production is deployed from the CLI with `vercel --prod`. Pushes to `master` create
Preview deployments only, unless the project's Production Branch is set to `master`.
