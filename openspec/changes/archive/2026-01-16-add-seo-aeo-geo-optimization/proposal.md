# Change: Add SEO, AEO, and GEO Optimization

## Why

The site has strong foundations but lacks critical SEO infrastructure (sitemap, robots.txt, canonical URLs, structured data) that search engines and AI systems need to properly index and understand content. Lighthouse audits also revealed accessibility and performance issues that need addressing.

**Baseline Lighthouse Scores (January 2026):**
| Page | Performance | Accessibility | Best Practices | SEO |
|------|-------------|---------------|----------------|-----|
| Homepage | 79 | 93 | 100 | 100 |
| Blog Post | 94 | 93 | 100 | 100 |

## What Changes

### Phase 1: Technical SEO Foundations
- Add `robots.txt` with sitemap reference
- Add `@astrojs/sitemap` for automatic sitemap generation
- Add canonical URLs to all pages
- Add `og:url` to Open Graph meta tags

### Phase 2: Structured Data (JSON-LD) for AEO/GEO
- Add `Article`/`BlogPosting` schema to blog posts
- Add `Person` schema for author (E-E-A-T signals)
- Add `BreadcrumbList` schema (matches existing visual breadcrumbs)
- Add `Organization` schema for site identity
- Add `FAQPage` schema component for Q&A content

### Phase 3: Enhanced Meta Tags
- Add `article:published_time` and `article:modified_time`
- Add `article:author` and `article:section`
- Add geo meta tags (`geo.position`, `ICBM`) for Croatia-focused content

### Phase 4: Image Optimization
- Standardize OG images to 1200x630px (1.91:1 ratio)
- Ensure hero images use `loading="eager"` (fix LCP lazy-loading issue)
- Create OG image generation/cropping utility

### Phase 5: Accessibility Fixes
- **BREAKING** Fix color contrast on "IN CROATIA" header text (gray-400 to darker shade)
- Fix heading order (H4 used without H2/H3 ancestors on homepage)

### Phase 6: Performance Fixes
- Address render-blocking resources
- Review and reduce unused JavaScript
- Improve cache policy headers

## Impact

- **Affected specs:** None directly (new capability)
- **Affected code:**
  - `src/layouts/BaseLayout.astro` - meta tags, JSON-LD
  - `src/layouts/BlogPostLayout.astro` - Article schema
  - `src/layouts/GuideLayout.astro` - Article schema
  - `src/components/Navbar.astro` - color contrast fix
  - `src/components/CategoryCard.astro` - heading order fix
  - `astro.config.mjs` - sitemap integration
  - `public/robots.txt` - new file
  - `src/config/site.ts` - add geo coordinates

## Success Metrics

- Lighthouse SEO score: maintain 100
- Lighthouse Accessibility score: 100 (from 93)
- Lighthouse Performance score: 90+ (from 79/94)
- Structured data validation: passes Google Rich Results Test
- All pages have valid canonical URLs
- Sitemap accessible at `/sitemap.xml`
