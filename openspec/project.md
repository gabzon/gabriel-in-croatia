# Project Context

## Purpose
A personal brand blog documenting Gabriel's experience as a Venezuelan living in Croatia. The site showcases humorous cultural observations, language learning struggles, and travel adventures through the lens of a Latino navigating Slavic culture. Goals include building an engaged audience, establishing a unique voice in the expat/travel blog space, and potentially capturing newsletter subscribers.

## Tech Stack
- **Framework**: Astro 5 (static site generation with islands architecture)
- **Language**: TypeScript (strict mode)
- **UI Components**: React (for interactive islands)
- **Content**: MDX for blog posts with custom frontmatter (confusionLevel, category)
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Fonts**: Plus Jakarta Sans (display), Playfair Display (serif headings)
- **Icons**: Lucide icons
- **Hosting**: Cloudflare Pages with automatic deploys from GitHub
- **Testing**: Vitest for unit tests, Playwright for integration tests (to be added)

## Project Conventions

### Code Style
- Use TypeScript strict mode
- Prefer functional components for React islands
- Use Astro components (`.astro`) for static content, React only when interactivity is needed
- File naming: kebab-case for files, PascalCase for components
- Prefer named exports over default exports

### Architecture Patterns
- Content lives in `src/content/` using Astro's content collections
- Layouts in `src/layouts/` for page templates
- Reusable components in `src/components/`
- Site configuration centralized in `src/config/site.ts`
- Images in `src/images/` for Astro optimization, exported via `src/images/index.ts`
- React islands only for interactive features (newsletter signup, etc.)
- Static generation by default; minimize client-side JavaScript

### Content Schema
Blog posts use the following frontmatter:
- `title`: Post title
- `description`: Meta description
- `pubDate`: Publication date
- `updatedDate`: (optional) Last update date — used for SEO signals (sitemap `lastmod`, JSON-LD `dateModified`, OG `article:modified_time`)
- `heroImage`: URL or path to hero image
- `caption`: Handwritten-style caption for hero image
- `category`: One of `latino-vs-slavic`, `adventure`, `language`, `hidden-stories`
- `confusionLevel`: 1-5 rating of cultural confusion
- `tags`: Array of topic tags
- `draft`: Boolean for unpublished posts

### Design System
- **Primary color**: Croatian red (#FF1700)
- **Background**: Warm cream (#F8F7F6, #FDFBF7)
- **Typography**: Plus Jakarta Sans for body, Playfair Display for headlines
- **Special styles**: Drop caps on first paragraph, handwritten caption overlays

### Testing Strategy
- Unit tests for utility functions and content processing logic
- Integration tests for critical user flows (navigation, newsletter signup)
- Test content collection schemas validate correctly
- No tests required for purely presentational Astro components

### Git Workflow
- Main branch is always deployable (auto-deploys to Cloudflare Pages)
- Feature branches for new work
- Conventional commits: `feat:`, `fix:`, `docs:`, `chore:`
- Squash merge PRs to keep history clean

## Domain Context
- **Brand name**: "Gabriel in Croatia"
- **Tagline**: "A Venezuelan's Guide to Cultural Confusion"
- **Blog focus**: Cultural observations, language learning (Croatian), travel adventures, Latino-vs-Slavic comparisons
- **Target audience**: Expats, language learners, travel enthusiasts, anyone interested in cross-cultural humor
- **Voice/tone**: Self-deprecating humor, relatable struggles, warm and approachable, occasionally poetic

## Important Constraints
- Performance is critical: target 100 Lighthouse score
- Accessibility: WCAG 2.1 AA compliance
- SEO: every page needs proper meta tags, Open Graph, and structured data
- Privacy-first: no invasive tracking or third-party cookies

## External Dependencies
- **Hosting**: Cloudflare Pages (connected to GitHub repo `gabzon/gabriel-in-croatia`)
- **Newsletter**: TBD (future feature)
- **Analytics**: TBD (consider Plausible or Cloudflare Analytics)
- **Domain**: TBD (currently at `gabriel-in-croatia.pages.dev`)

## Key Files
- `src/config/site.ts` - Central configuration (hero quote, social links, status widgets, navigation)
- `src/content.config.ts` - Content collection schema definitions
- `src/styles/global.css` - Design tokens and custom styles
- `src/images/index.ts` - Centralized image exports for Astro optimization
- `astro.config.mjs` - Astro configuration with Cloudflare adapter
- `wrangler.jsonc` - Cloudflare Workers configuration
