# accessibility Specification

## Purpose
TBD - created by archiving change add-seo-aeo-geo-optimization. Update Purpose after archive.
## Requirements
### Requirement: Color Contrast Compliance
All text elements SHALL meet WCAG AA color contrast requirements (4.5:1 for normal text, 3:1 for large text).

#### Scenario: Header text contrast
- **WHEN** viewing the navigation header
- **THEN** all text including "IN CROATIA" has sufficient contrast against its background

#### Scenario: Body text contrast
- **WHEN** viewing any page content
- **THEN** all text meets WCAG AA contrast ratios

### Requirement: Heading Hierarchy
Pages SHALL use headings in a sequentially-descending order without skipping levels.

#### Scenario: No skipped heading levels
- **WHEN** viewing any page
- **THEN** heading elements follow proper hierarchy (H1 → H2 → H3, never H1 → H4)

#### Scenario: Single H1 per page
- **WHEN** viewing any page
- **THEN** there is exactly one H1 element representing the page title

### Requirement: Lighthouse Accessibility Score
All pages SHALL achieve a Lighthouse accessibility score of 100.

#### Scenario: Homepage accessibility
- **WHEN** running Lighthouse audit on homepage
- **THEN** accessibility score is 100

#### Scenario: Blog post accessibility
- **WHEN** running Lighthouse audit on a blog post
- **THEN** accessibility score is 100

