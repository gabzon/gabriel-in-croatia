# Tasks: SEO, AEO, and GEO Optimization

## 1. Technical SEO Foundations

- [x] 1.1 Install `@astrojs/sitemap` package
- [x] 1.2 Configure sitemap in `astro.config.mjs`
- [x] 1.3 Create `public/robots.txt` with sitemap reference
- [x] 1.4 Add canonical URL to `BaseLayout.astro`
- [x] 1.5 Add `og:url` meta tag to `BaseLayout.astro`

## 2. Structured Data (JSON-LD)

- [x] 2.1 Create `src/components/seo/JsonLd.astro` component
- [x] 2.2 Add `Organization` schema to `BaseLayout.astro`
- [x] 2.3 Add `Article`/`BlogPosting` schema to `BlogPostLayout.astro`
- [x] 2.4 Add `Article` schema to `GuideLayout.astro`
- [x] 2.5 Add `BreadcrumbList` schema to layouts with breadcrumbs
- [x] 2.6 Add `Person` schema for author
- [x] 2.7 Create `FAQPage` schema component for future use

## 3. Enhanced Meta Tags

- [x] 3.1 Add `article:published_time` to blog/guide layouts
- [x] 3.2 Add `article:modified_time` to blog/guide layouts
- [x] 3.3 Add `article:author` meta tag
- [x] 3.4 Add `article:section` (category) meta tag
- [x] 3.5 Add geo meta tags to `site.ts` and `BaseLayout.astro`

## 4. Image Optimization

- [x] 4.1 Audit current hero image dimensions
- [ ] 4.2 Create image resize/crop utility for 1200x630 OG images (deferred - manual process for now)
- [x] 4.3 Update hero image handling to use eager loading for LCP
- [ ] 4.4 Document image guidelines for content authors (deferred)

## 5. Accessibility Fixes

- [x] 5.1 Fix "IN CROATIA" color contrast in `Header.astro`
- [x] 5.2 Fix heading order in `CategoryCard.astro` (H4 → span)
- [ ] 5.3 Verify fixes with Lighthouse re-audit (requires deployed site)

## 6. Performance Fixes

- [x] 6.1 Identify and address render-blocking resources (DNS prefetch added)
- [x] 6.2 Review unused JavaScript in bundles (Astro handles this well by default)
- [x] 6.3 Configure cache headers (created `public/_headers` for Cloudflare)
- [ ] 6.4 Re-run Lighthouse audit to verify improvements (requires deployed site)

## 7. Validation & Documentation

- [ ] 7.1 Test structured data with Google Rich Results Test (requires deployed site)
- [x] 7.2 Verify sitemap.xml is accessible (confirmed in build output)
- [x] 7.3 Verify robots.txt is accessible (file created)
- [ ] 7.4 Run final Lighthouse audit on all page types (requires deployed site)
- [ ] 7.5 Document SEO guidelines for future content (deferred)
