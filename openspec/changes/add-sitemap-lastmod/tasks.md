# Tasks: Add Sitemap lastmod

## Implementation

1. [x] **Configure sitemap integration with serialize function**
   - Update `astro.config.mjs` to add a `serialize` option to the sitemap integration
   - For content URLs (blog, guides, weekly), look up the entry and set `lastmod` to `updatedDate || pubDate`
   - File: `astro.config.mjs`

2. [x] **Create sitemap helper utility**
   - Created inline in `astro.config.mjs` using `buildContentDateMap()` function
   - Reads frontmatter directly from content files at config time using gray-matter
   - Handles blog, guides, and weekly collections

## Validation

3. [x] **Rebuild and verify sitemap output**
   - Ran `npm run build`
   - Confirmed `<lastmod>` elements are present for all content pages
   - Format is ISO 8601 (e.g., `2025-11-26T00:00:00.000Z`)

4. [x] **Test with updated content**
   - Added `updatedDate: 2026-01-17` to `cuidado-con-la-curva.mdx`
   - Verified sitemap shows `2026-01-17` (not the original `pubDate`)

## Documentation

5. [x] **Update project.md Content Schema section**
   - Documented `updatedDate` field and its SEO uses
