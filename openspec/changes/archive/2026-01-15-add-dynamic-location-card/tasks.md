# Tasks: Dynamic Location Card

## 1. Schema Update
- [x] 1.1 Add optional `location` field to blog schema in `content.config.ts`
- [x] 1.2 Add `region` enum field with Croatian regions
- [x] 1.3 Set defaults: location="Zagreb", region="continental"

## 2. Configuration
- [x] 2.1 Add `regionConfig` to `site.ts` with funny descriptions for each region

## 3. Component Updates
- [x] 3.1 Update `BlogPostLayout.astro` to use location and region from props
- [x] 3.2 Display region description from `regionConfig[region]`

## 4. Default Behavior
- [x] 4.1 Blog posts without location/region show "Zagreb" + "continental" description
- [x] 4.2 Non-blog pages continue using siteConfig location

## 5. Validation
- [x] 5.1 Build succeeds
- [x] 5.2 Blog post shows "Zagreb, Croatia" with "Where people almost show up on time"
