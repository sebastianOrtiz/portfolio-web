# portfolio-web

Personal portfolio website for **sebasing.dev** — a senior fullstack/backend engineer with 9+ years of experience.

Built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Features

- **Dark/light theme** with smooth CSS transitions and localStorage persistence
- **i18n support** — English and Spanish via URL-based routing (`/en`, `/es`) with automatic browser language detection
- **5 sections** — Hero, About, Projects, Skills & Stack, Contact
- **GitHub profile preview** — live data from GitHub API on hover (avatar, company, location, repos)
- **LinkedIn preview card** on hover
- **Reusable component library** — SectionHeader, FormInput, BulletList, centralized Icons
- **CSS variables for theming** — change the entire accent color palette from one file
- **Fully responsive** — mobile-first with collapsible navigation

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Linting | ESLint + eslint-config-next + eslint-config-prettier |
| Formatting | Prettier |
| Testing | Vitest + React Testing Library + @testing-library/jest-dom |
| Coverage | @vitest/coverage-v8 |
| Containerization | Docker (multi-stage, standalone output) |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting without writing |
| `npm run test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |

## Project Structure

```
src/
├── app/
│   ├── [lang]/            # i18n dynamic route (en, es)
│   │   ├── layout.tsx     # Lang-specific layout with header/footer
│   │   └── page.tsx       # Home page composing all sections
│   ├── layout.tsx         # Root layout (fonts, metadata)
│   └── globals.css        # Tailwind config, CSS variables, theme
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Hero, About, Projects, Skills, Contact
│   └── ui/                # Reusable: SectionHeader, FormInput, BulletList, Icons, HoverCard
├── data/
│   └── content.ts         # Static content (site config, skills, projects)
├── i18n/
│   ├── en.ts              # English dictionary
│   ├── es.ts              # Spanish dictionary
│   ├── types.ts           # Dictionary type definition
│   └── index.ts           # getDictionary helper
├── lib/
│   ├── theme-provider.tsx # Dark/light theme with useSyncExternalStore
│   └── use-github-profile.ts  # Hook for GitHub API data
└── middleware.ts           # Locale detection and redirect
```

## Theming

The accent color is defined as CSS custom properties in `globals.css`. To rebrand the entire site, change the `--accent-*` variables:

```css
:root {
  --accent-500: #ef4444; /* Change this to any color */
}
```

All components use Tailwind's `accent-*` utility classes which map to these variables.

## Testing

27 tests covering reusable UI components, static data integrity, and i18n dictionary consistency:

```bash
npm run test:coverage
```

## Docker

```bash
# Build production image
docker build -t portfolio-web .

# Run container
docker run -p 3000:3000 portfolio-web
```

## Part of sebasing.dev

This is one of 5 demonstrative projects in the sebasing.dev portfolio ecosystem:

| Project | Stack | Repo |
|---|---|---|
| **portfolio-web** (this) | Next.js + TypeScript + Tailwind | [portfolio-web](https://github.com/sebastianOrtiz/portfolio-web) |
| nexus-crm-api | FastAPI + PostgreSQL + SQLAlchemy | Coming soon |
| nexus-crm-dashboard | Angular + TypeScript | Coming soon |
| event-driven-service | Go + Redis Streams | Coming soon |
| semantic-search-api | FastAPI + ChromaDB + sentence-transformers | Coming soon |

All services are orchestrated via Docker Compose and deployed on a single Hetzner VPS with Nginx reverse proxy.

## License

MIT
