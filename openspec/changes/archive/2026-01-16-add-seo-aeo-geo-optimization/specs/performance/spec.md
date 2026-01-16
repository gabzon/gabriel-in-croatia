# Performance Spec

## ADDED Requirements

### Requirement: LCP Image Loading
The Largest Contentful Paint (LCP) image SHALL NOT be lazily loaded.

#### Scenario: Hero image eager loading
- **WHEN** a page has a hero image that is the LCP element
- **THEN** the image uses `loading="eager"` or has no loading attribute (eager is default)

#### Scenario: No LCP lazy-load warning
- **WHEN** running Lighthouse audit
- **THEN** no "Largest Contentful Paint image was lazily loaded" warning appears

### Requirement: Render-Blocking Resources
Critical CSS SHALL be inlined or preloaded to minimize render-blocking.

#### Scenario: Minimal render blocking
- **WHEN** running Lighthouse audit
- **THEN** render-blocking resources score is above 0.5

### Requirement: Lighthouse Performance Score
All pages SHALL achieve a Lighthouse performance score of 90 or higher.

#### Scenario: Homepage performance
- **WHEN** running Lighthouse audit on homepage
- **THEN** performance score is 90 or higher

#### Scenario: Blog post performance
- **WHEN** running Lighthouse audit on a blog post
- **THEN** performance score is 90 or higher

### Requirement: Core Web Vitals
Pages SHALL meet Core Web Vitals thresholds for good user experience.

#### Scenario: LCP under threshold
- **WHEN** measuring Largest Contentful Paint
- **THEN** LCP is under 2.5 seconds

#### Scenario: CLS under threshold
- **WHEN** measuring Cumulative Layout Shift
- **THEN** CLS is under 0.1

#### Scenario: FID/INP under threshold
- **WHEN** measuring First Input Delay or Interaction to Next Paint
- **THEN** the metric is under 200ms
