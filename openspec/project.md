# Project Context

## Purpose
A personal brand blog built with Astro. The site serves as Gabriel's professional online presence, showcasing writing, projects, and expertise. Goals include building an audience, establishing thought leadership, and capturing newsletter subscribers.

## Tech Stack
- **Framework**: Astro (static site generation with islands architecture)
- **Language**: TypeScript
- **UI Components**: React (for interactive islands)
- **Content**: Markdown/MDX for blog posts
- **Styling**: Tailwind CSS
- **Testing**: Vitest for unit tests, Playwright for integration tests

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
- React islands only for interactive features (newsletter signup, etc.)
- Static generation by default; minimize client-side JavaScript

### Testing Strategy
- Unit tests for utility functions and content processing logic
- Integration tests for critical user flows (navigation, newsletter signup)
- Test content collection schemas validate correctly
- No tests required for purely presentational Astro components

### Git Workflow
- Main branch is always deployable
- Feature branches for new work
- Conventional commits: `feat:`, `fix:`, `docs:`, `chore:`
- Squash merge PRs to keep history clean

## Domain Context
- "Gabriel in Croatia" is the personal brand name
- Blog content focuses on [add your topics: tech, travel, career, etc.]
- Target audience: [add your audience description]
- Voice/tone: [add your preferred writing style]

## Important Constraints
- Performance is critical: target 100 Lighthouse score
- Accessibility: WCAG 2.1 AA compliance
- SEO: every page needs proper meta tags, Open Graph, and structured data
- Privacy-first: no invasive tracking or third-party cookies

## External Dependencies
- **Hosting**: [Vercel/Netlify/Cloudflare Pages - pick one]
- **Newsletter**: [ConvertKit/Buttondown/Resend - pick one]
- **Analytics**: [Plausible/Fathom/none - pick one]
- **Domain**: [your domain if you have one]
