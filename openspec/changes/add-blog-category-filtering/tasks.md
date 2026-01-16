## 1. Implementation
- [x] 1.1 Create `src/pages/blog/category/[category].astro` with `getStaticPaths()`
- [x] 1.2 Update `src/pages/blog/index.astro` - remove query param logic, update links
- [x] 1.3 Update `src/config/site.ts` - change nav link to path-based URL
- [x] 1.4 Update `src/components/CategoryCard.astro` - use path-based URLs
- [x] 1.5 Update `src/layouts/BlogPostLayout.astro` - update breadcrumb links
- [x] 1.6 Add client-side redirect for backwards compatibility

## 2. Testing
- [x] 2.1 Verify `/blog` shows all posts
- [x] 2.2 Verify `/blog/category/latino-vs-slavic` filters correctly
- [x] 2.3 Verify all category filter buttons work
- [x] 2.4 Verify homepage category cards link correctly
- [x] 2.5 Verify `?category=xxx` redirects to new URL
- [x] 2.6 Run `npm run build` to verify static generation
