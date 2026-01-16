# Tasks

## Phase 1: Schema & Configuration

- [x] Add `guideTypeEnum` and `priceRangeEnum` to `content.config.ts`
- [x] Add `guides` collection schema to `content.config.ts` (with required `location`)
- [x] Add `weekly` collection schema to `content.config.ts` (with required `location`, `weekStart`, `weekEnd`)
- [x] Export new types (`GuideType`, `PriceRange`)
- [x] Add `guideTypeConfig` to `site.ts` with labels, colors, icons
- [x] Add `priceRangeConfig` to `site.ts` with labels, descriptions, colors, icons
- [x] Verify build passes with empty collections

## Phase 2: Guides Pages & Layout

- [x] Create `src/content/guides/` folder with sample guide
- [x] Create `GuideLayout.astro` - adapted from BlogPostLayout with guide-specific sidebar
- [x] Create `GuideSidebar.astro` - price range indicator, location card, guide type (no status card)
- [x] Create `GuideTypeBadge.astro` - badge component for guide types
- [x] Create `GuideCard.astro` - card component for guide listings
- [x] Create `/guides/index.astro` - list page with type filters
- [x] Create `/guides/type/[type].astro` - filtered by guide type
- [x] Create `/guides/[...slug].astro` - individual guide page using GuideLayout

## Phase 3: Weekly Pages & Layout

- [x] Create `src/content/weekly/` folder with sample weekly
- [x] Create `WeeklyLayout.astro` - adapted from BlogPostLayout with week date range header
- [x] Create `WeeklyCard.astro` - card component for weekly listings
- [x] Create `/weekly/index.astro` - list page sorted by weekStart date
- [x] Create `/weekly/[...slug].astro` - individual weekly page using WeeklyLayout

## Phase 4: Verification

- [x] Sample guide post renders correctly (with priceRange, neighborhood)
- [x] Sample weekly post renders correctly (with weekStart, weekEnd)
- [x] Type filtering works on guides
- [x] Date sorting works on weekly
- [x] Guide sidebar shows price indicator correctly
- [x] Weekly sidebar shows location only (no status card)
- [x] Build passes without errors
