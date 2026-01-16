# Design: SEO, AEO, and GEO Optimization

## Context

This project is a personal blog about living in Croatia, targeting both search engines (SEO), AI answer engines (AEO - ChatGPT, Perplexity, etc.), and generative search (GEO - Google SGE, Bing Chat). The site uses Astro with static generation deployed to Cloudflare.

**Stakeholders:** Site owner (Gabriel), search engines, AI systems, readers

**Constraints:**
- Static site (no server-side rendering for dynamic content)
- Cloudflare hosting (limited header control)
- Must maintain current design aesthetic

## Goals / Non-Goals

**Goals:**
- Improve discoverability by search engines and AI systems
- Provide rich structured data for featured snippets and AI citations
- Fix accessibility issues for inclusive access
- Improve performance metrics (Core Web Vitals)
- Standardize OG images for consistent social sharing

**Non-Goals:**
- Multilingual support (future consideration)
- AMP pages
- Server-side rendering
- Paid SEO tools integration

## Decisions

### 1. Sitemap Generation
- **Decision:** Use `@astrojs/sitemap` package
- **Rationale:** Official Astro integration, zero config, automatic updates
- **Alternatives:** Manual sitemap (rejected - maintenance burden), third-party tools (rejected - unnecessary complexity)

### 2. JSON-LD Implementation
- **Decision:** Inline JSON-LD in `<script type="application/ld+json">` tags
- **Rationale:** Best practice for structured data, no external requests, works with static sites
- **Alternatives:** Microdata (rejected - harder to maintain), RDFa (rejected - verbose)

### 3. Schema Types
- **Decision:** Use these schema.org types:
  - `Article` for blog posts and guides
  - `BreadcrumbList` for navigation
  - `Person` for author
  - `Organization` for site
  - `FAQPage` for Q&A sections
- **Rationale:** These are the most impactful for blog content and have good support in Google/Bing

### 4. OG Image Sizing
- **Decision:** Standardize on 1200x630px (1.91:1 ratio)
- **Rationale:** This is the recommended size for Facebook, LinkedIn, and Twitter. Images will be cropped/resized at build time.
- **Alternatives:** Multiple sizes per platform (rejected - complexity not worth marginal gains)

### 5. Color Contrast Fix
- **Decision:** Change "IN CROATIA" text from `text-gray-400` to `text-gray-600`
- **Rationale:** Achieves WCAG AA contrast ratio (4.5:1 minimum) while maintaining design intent
- **Alternatives:** Change background (rejected - larger visual change), use different font weight (rejected - doesn't solve contrast)

### 6. Heading Order Fix
- **Decision:** Change category cards from H4 to H3 (or use semantic alternative)
- **Rationale:** H4 without preceding H2/H3 breaks document outline
- **Alternatives:** Add hidden H2/H3 (rejected - hacky), restructure entire page (rejected - over-engineering)

## Risks / Trade-offs

| Risk | Impact | Mitigation |
|------|--------|------------|
| Color change affects brand perception | Low | Gray-600 is subtle shift, still matches aesthetic |
| Sitemap adds build complexity | Low | Well-tested Astro integration |
| JSON-LD errors hurt SEO | Medium | Validate with Google Rich Results Test before deploy |
| OG image processing slows build | Low | Can be done at image upload time, not build time |

## Migration Plan

1. **Phase 1 (no breaking changes):** Add sitemap, robots.txt, canonical URLs
2. **Phase 2 (no breaking changes):** Add JSON-LD structured data
3. **Phase 3 (no breaking changes):** Add enhanced meta tags
4. **Phase 4 (visual change):** Fix color contrast and heading order
5. **Phase 5 (no breaking changes):** Image optimization
6. **Rollback:** All changes are additive except color/heading fixes; can revert individual commits

## Open Questions (To Decide During Implementation)

1. Should we generate OG images dynamically (e.g., with `satori`) or manually create them?
2. Do we want to add `FAQPage` schema to existing content, or only to new posts that explicitly have FAQ sections?
3. Should we add `LocalBusiness` or `Place` schemas for location-specific guides?

## Quick Start for Implementation

To begin implementation in a new chat, say:

> "Let's implement the SEO/AEO/GEO proposal. Start with Phase 1."

Or reference the proposal directly:

> "Apply the openspec proposal `add-seo-aeo-geo-optimization`"

### Key Files to Read First
- `openspec/changes/add-seo-aeo-geo-optimization/proposal.md` - Overview
- `openspec/changes/add-seo-aeo-geo-optimization/tasks.md` - Checklist
- `src/layouts/BaseLayout.astro` - Main layout to modify
- `src/config/site.ts` - Site configuration
- `astro.config.mjs` - Astro configuration

### Baseline Metrics (January 2026)
- Homepage: Performance 79, Accessibility 93, Best Practices 100, SEO 100
- Blog Post: Performance 94, Accessibility 93, Best Practices 100, SEO 100
- Lighthouse reports saved in: `lighthouse-reports/`
