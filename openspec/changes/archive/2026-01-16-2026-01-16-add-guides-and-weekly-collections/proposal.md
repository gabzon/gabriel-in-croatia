# Proposal: Add Guides and Weekly Content Collections

## Summary
Add two new Astro content collections to expand the blog's content types:
- **guides**: Evergreen recommendations like "Best cafes in Zagreb", "Best hamburgers", seasonal tips
- **weekly**: Time-sensitive event roundups and weekly plans

## Motivation
The current blog focuses on personal experiences with 4 categories. To expand coverage:
1. **Guides** provide lasting value - recommendations that readers search for and return to
2. **Weekly plans** capture time-sensitive content - events, seasonal activities, what's happening now

These have different lifecycles and purposes than personal blog posts, warranting separate collections.

## Scope

### In Scope
- New `guides` content collection with appropriate schema (guide types, price ranges, neighborhoods)
- New `weekly` content collection with date-based schema (week start/end, event listings)
- List pages for each collection (`/guides/`, `/weekly/`)
- Individual item pages (`/guides/[slug]`, `/weekly/[slug]`)
- Type filtering for guides (`/guides/type/[type]`)
- Configuration entries in `site.ts` for guide types
- Reuse existing components (PostCard pattern, BaseLayout)

### Out of Scope
- Homepage integration (can be added later)
- Navigation updates (can be added separately)
- Archive/expiry logic for weekly posts (keep simple for now)
- Maps or location features

## Approach
Follow existing patterns from the blog collection:
1. Define schemas in `content.config.ts` with collection-specific fields
2. Create config objects in `site.ts` for guide types (similar to categoryConfig)
3. Create pages following the blog structure
4. Reuse/adapt PostCard component for new content types

## Risks
- **Low**: Straightforward replication of existing patterns
- Schema design may need iteration based on actual content needs

## Spec Deltas
- `content-collections`: New requirements for guides and weekly collection schemas, pages, and filtering
