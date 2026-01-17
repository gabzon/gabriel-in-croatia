# seo-optimization Specification

## Purpose
TBD - created by archiving change add-seo-aeo-geo-optimization. Update Purpose after archive.
## Requirements
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

### Requirement: Robots.txt
The system SHALL serve a robots.txt file that allows crawling and references the sitemap.

#### Scenario: Robots.txt accessible
- **WHEN** a crawler requests `/robots.txt`
- **THEN** a valid robots.txt file is returned with sitemap location

### Requirement: Canonical URLs
Every page SHALL include a canonical URL meta tag pointing to the preferred URL.

#### Scenario: Blog post has canonical
- **WHEN** viewing a blog post
- **THEN** the page includes `<link rel="canonical" href="https://example.com/blog/post-slug/">`

#### Scenario: Homepage has canonical
- **WHEN** viewing the homepage
- **THEN** the page includes `<link rel="canonical" href="https://example.com/">`

### Requirement: Open Graph URL
Every page SHALL include an `og:url` meta tag matching the canonical URL.

#### Scenario: OG URL present
- **WHEN** viewing any page
- **THEN** the page includes `<meta property="og:url" content="...">` with the page's canonical URL

### Requirement: Article Meta Tags
Blog posts and guides SHALL include article-specific Open Graph meta tags.

#### Scenario: Published time present
- **WHEN** viewing a blog post
- **THEN** the page includes `<meta property="article:published_time" content="ISO-8601-date">`

#### Scenario: Modified time present when updated
- **WHEN** viewing a blog post that has been updated
- **THEN** the page includes `<meta property="article:modified_time" content="ISO-8601-date">`

#### Scenario: Author and section present
- **WHEN** viewing a blog post
- **THEN** the page includes `article:author` and `article:section` meta tags

### Requirement: Geo Meta Tags
The site SHALL include geographic meta tags for Croatia-focused content.

#### Scenario: Geo tags on pages
- **WHEN** viewing any page
- **THEN** the page includes `geo.region`, `geo.placename`, and `geo.position` meta tags for Croatia

### Requirement: JSON-LD Structured Data
Pages SHALL include JSON-LD structured data for enhanced search results and AI understanding.

#### Scenario: Organization schema on all pages
- **WHEN** viewing any page
- **THEN** JSON-LD with `@type: Organization` is present in the page head

#### Scenario: Article schema on blog posts
- **WHEN** viewing a blog post
- **THEN** JSON-LD with `@type: Article` is present including headline, author, datePublished, and image

#### Scenario: BreadcrumbList schema on content pages
- **WHEN** viewing a blog post or guide
- **THEN** JSON-LD with `@type: BreadcrumbList` is present matching the visual breadcrumb navigation

#### Scenario: Person schema for author
- **WHEN** viewing a blog post
- **THEN** JSON-LD includes a `Person` entity for the author with name and URL

### Requirement: FAQ Schema Support
The system SHALL support FAQPage schema for content with explicit Q&A sections.

#### Scenario: FAQ schema on FAQ content
- **WHEN** a page includes an FAQ component
- **THEN** JSON-LD with `@type: FAQPage` is present with Question and Answer entities

### Requirement: OG Image Sizing
Hero images used for Open Graph SHALL be optimized for social sharing at 1200x630px (1.91:1 ratio).

#### Scenario: OG image dimensions
- **WHEN** a blog post hero image is used as og:image
- **THEN** the image is served at or cropped to 1200x630px for optimal social display

