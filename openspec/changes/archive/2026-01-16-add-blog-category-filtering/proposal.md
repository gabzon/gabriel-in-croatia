# Change: Add Blog Category Filtering

## Why
Category filter links on the homepage and blog page don't work because the site uses static generation (SSG). The existing query parameter approach (`/blog?category=xxx`) only runs at build time, not request time.

## What Changes
- Create static category pages using Astro's `getStaticPaths()` at `/blog/category/[category]`
- Update all category links to use path-based URLs instead of query parameters
- Add backwards-compatibility redirect for legacy `?category=xxx` URLs

## Impact
- Affected specs: `pages`
- Affected code:
  - `src/pages/blog/category/[category].astro` (new)
  - `src/pages/blog/index.astro`
  - `src/config/site.ts`
  - `src/components/CategoryCard.astro`
  - `src/layouts/BlogPostLayout.astro`
