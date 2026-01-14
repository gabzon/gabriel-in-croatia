# Change: Redesign Homepage and Blog Post Pages

## Why
The current scaffolded pages use minimal default styling. Gabriel has created wireframe prototypes (Google Stitch) that define a distinctive brand identity - a Venezuelan-in-Croatia personal blog with playful "confusion" theming, Croatian red primary color, and modern typography.

## What Changes
- **Header**: New branded header with "GABRIEL" (red italic) + "IN CROATIA" (gray), navigation links, and CTA button
- **Footer**: Branded footer with logo, description, newsletter signup, and social links
- **Homepage hero**: Large tagline "I make Croatian culture make sense by not understanding it at all", profile image with quote overlay
- **Homepage sections**: "Latest Disaster" featured post, "Choose Your Struggle" category filters, "The Confusion Feed" post grid, sidebar with bio and newsletter
- **Blog post layout**: Serif title typography, hero image with handwritten caption, drop cap styling, blockquote styling, confusion rating display, sidebar with status widgets and related posts
- **Content schema**: Add `confusionLevel` (1-5) and `category` fields to blog post frontmatter
- **Design system**: Croatian red (#FF1700) primary color, Plus Jakarta Sans + Playfair Display fonts, Lucide icons, warm cream backgrounds

## Impact
- Affected specs: `pages` (new capability)
- Affected code:
  - `src/layouts/BaseLayout.astro` - Header/footer redesign
  - `src/layouts/BlogPostLayout.astro` - New blog post design
  - `src/pages/index.astro` - Homepage redesign
  - `src/pages/blog/index.astro` - Blog listing updates
  - `src/content.config.ts` - Schema updates for confusionLevel, category
  - `src/styles/global.css` - Design tokens, fonts, custom styles
  - New components for reusable UI elements
