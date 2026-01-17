# seo-optimization Spec Delta

## MODIFIED Requirements

### Requirement: Sitemap Generation
The system SHALL automatically generate a sitemap.xml file at build time containing all public pages.

**Content pages (blog posts, guides, weekly) SHALL include `<lastmod>` dates:**
- Use `updatedDate` if available
- Fall back to `pubDate` otherwise
- Format as ISO 8601 (e.g., `2025-11-26T00:00:00.000Z`)

#### Scenario: Sitemap accessible
- **WHEN** a crawler requests `/sitemap.xml`
- **THEN** a valid XML sitemap is returned containing all blog posts, guides, and static pages

#### Scenario: Sitemap updates on build
- **WHEN** new content is added and the site is rebuilt
- **THEN** the sitemap includes the new URLs

#### Scenario: Blog post with updatedDate has lastmod
- **WHEN** a blog post has `updatedDate: 2026-01-15`
- **THEN** its sitemap entry includes `<lastmod>2026-01-15T00:00:00.000Z</lastmod>`

#### Scenario: Blog post without updatedDate uses pubDate
- **WHEN** a blog post has only `pubDate: 2025-11-26` and no `updatedDate`
- **THEN** its sitemap entry includes `<lastmod>2025-11-26T00:00:00.000Z</lastmod>`

#### Scenario: Static pages have no lastmod
- **WHEN** the sitemap includes static pages like `/blog/` or `/guides/`
- **THEN** those entries do not include `<lastmod>` (acceptable default)
