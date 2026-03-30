# Portfolio Web

Personal portfolio website for **sebasing.dev** -- a senior fullstack/backend engineer with 9+ years of experience.

Built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Features

- **Dark/light theme** with smooth CSS transitions and localStorage persistence
- **i18n** -- English and Spanish via URL-based routing (`/en`, `/es`) with browser language detection
- **6 sections** -- Hero, About, Projects, Skills & Stack, Semantic Search Demo, Contact
- **Semantic Search Demo** -- upload documents and run semantic queries against the search API
- **GitHub profile preview** -- live data from GitHub API on hover
- **Fully responsive** -- mobile-first with collapsible navigation
- **CSS variables for theming** -- change the accent color palette from one file

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Linting | ESLint + Prettier |
| Testing | Vitest + React Testing Library |
| Containerization | Docker (multi-stage, standalone output) |

## Running

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |
| `npm run test` | Run tests |
| `npm run test:coverage` | Tests with coverage |

## Project Structure

```
src/
  app/
    [lang]/           -- i18n dynamic route (en, es)
  components/
    layout/           -- Header, Footer
    sections/         -- Hero, About, Projects, Skills, SearchDemo, Contact
    ui/               -- SectionHeader, FormInput, Icons, HoverCard
  data/
    content.ts        -- Static content (projects, skills)
  i18n/               -- Dictionaries (en.ts, es.ts)
  lib/                -- Theme provider, GitHub hook
  middleware.ts       -- Locale detection and redirect
```

## Testing

27 tests covering UI components, static data integrity, and i18n dictionary consistency.

```bash
npm run test:coverage
```

## Docker

```bash
docker build -t portfolio-web .
docker run -p 3000:3000 portfolio-web
```

## Part of sebasing.dev

| Project | Stack |
|---|---|
| **portfolio-web** (this) | Next.js, TypeScript, Tailwind |
| [nexus-crm-api](../nexus-crm-api) | FastAPI, SQLAlchemy, PostgreSQL |
| [nexus-crm-dashboard](../nexus-crm-dashboard) | Angular, TypeScript, Tailwind |
| [event-driven-service](../event-driven-service) | Go, Gin, Redis Streams |
| [semantic-search-api](../semantic-search-api) | FastAPI, ChromaDB, sentence-transformers |

All services are orchestrated via Docker Compose and deployed on a single Hetzner VPS with Nginx reverse proxy.

## License

MIT
