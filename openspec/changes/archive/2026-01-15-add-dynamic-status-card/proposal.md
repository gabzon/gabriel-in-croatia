# Change: Add Dynamic Status Card

## Why
The Current Status card (confusion level, temperature, social battery) is currently hardcoded with string values. Making it dynamic with enums allows for consistent, funny descriptions and enables per-blog-post overrides - similar to how the Location card already works with `regionConfig`.

## What Changes
- Add `temperatureConfig` enum with 7 levels and humorous descriptions
- Add `socialBatteryConfig` enum with 6 levels and humorous descriptions
- Update `site.ts` status to use enum keys instead of raw strings
- Update blog post frontmatter schema to allow optional status overrides
- Update `Sidebar.astro` to resolve enum keys to descriptions
- Update `BlogPostLayout.astro` to use frontmatter overrides when available

## Impact
- Affected specs: status-card (new capability)
- Affected code:
  - `src/config/site.ts` - Add new config objects, update status type
  - `src/content.config.ts` - Add optional frontmatter fields
  - `src/components/Sidebar.astro` - Resolve enums to descriptions
  - `src/layouts/BlogPostLayout.astro` - Pass frontmatter overrides to Sidebar
