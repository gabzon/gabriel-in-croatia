# Tasks: Add Dynamic Status Card

## 1. Configuration
- [x] 1.1 Add `temperatureConfig` enum and descriptions to `site.ts`
- [x] 1.2 Add `socialBatteryConfig` enum and descriptions to `site.ts`
- [x] 1.3 Update `status` object to use enum keys
- [x] 1.4 Export TypeScript types for the new enums

## 2. Content Schema
- [x] 2.1 Add `temperatureEnum` to `content.config.ts`
- [x] 2.2 Add `socialBatteryEnum` to `content.config.ts`
- [x] 2.3 Add optional `statusTemperature` field to blog schema
- [x] 2.4 Add optional `statusSocialBattery` field to blog schema
- [x] 2.5 Add optional `statusConfusionLevel` field to blog schema (1-100)

## 3. Components
- [x] 3.1 Update `Sidebar.astro` to accept optional status override props
- [x] 3.2 Add enum resolution logic (key -> description)
- [x] 3.3 Update `BlogPostLayout.astro` to use frontmatter status overrides

## 4. Verification
- [x] 4.1 Test build passes
- [x] 4.2 Homepage displays default status from `site.ts`
- [x] 4.3 Blog posts can override status via frontmatter
