# Proposal: Add Sitemap lastmod for SEO Freshness Signals

## Summary
Configure the Astro sitemap integration to include `<lastmod>` dates for blog posts, guides, and weekly content using each entry's `updatedDate` (or `pubDate` as fallback). This completes the SEO freshness signal chain alongside the existing `dateModified` in JSON-LD and `article:modified_time` in Open Graph.

## Motivation
Currently:
- Blog posts have an optional `updatedDate` field in their schema
- Layouts output `dateModified` in JSON-LD structured data
- Layouts output `article:modified_time` in Open Graph meta tags
- **BUT** the sitemap has no `<lastmod>` entries

Search engines use sitemap `<lastmod>` to prioritize recrawling updated content. Without it, Google has to guess which pages have fresh content based solely on crawl discovery.

## Scope
- Configure `@astrojs/sitemap` to serialize `lastmod` for content pages
- Use `updatedDate` when available, otherwise fall back to `pubDate`
- Static pages (homepage, category pages) will not have `lastmod` (acceptable default behavior)

## Out of Scope
- No schema changes (the `updatedDate` field already exists)
- No layout changes (already displaying updated dates)
- No new UI components

## Dependencies
None - uses existing Astro sitemap integration.
