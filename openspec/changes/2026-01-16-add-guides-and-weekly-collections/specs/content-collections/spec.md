# Content Collections Capability

## Purpose
This specification defines the guides and weekly content collections for expanding the site beyond personal blog posts.

## ADDED Requirements

### Requirement: Guides Content Collection Schema
The site SHALL support a `guides` content collection with the following frontmatter schema:
- `title` (string, required)
- `description` (string, required)
- `pubDate` (date, required)
- `updatedDate` (date, optional)
- `heroImage` (image, optional)
- `caption` (string, optional) - handwritten caption for hero image
- `guideType` (enum: food | drinks | activities | seasonal | neighborhoods, required)
- `neighborhood` (string, optional) - area of the city/town
- `priceRange` (enum: budget | moderate | luxury, optional)
- `tags` (array of strings, default [])
- `draft` (boolean, default false)
- `location` (string, required) - city/town name (e.g., "Zagreb", "Split")
- `region` (regionEnum, default 'continental')

#### Scenario: Guide with all fields validates
- **WHEN** a guide has valid values for all required fields including location
- **THEN** the build succeeds
- **AND** the guide is available in the collection

#### Scenario: Guide type is validated
- **WHEN** a guide has `guideType: "invalid"`
- **THEN** the build fails with a validation error

#### Scenario: Guide requires location
- **WHEN** a guide is missing the `location` field
- **THEN** the build fails with a validation error

---

### Requirement: Weekly Content Collection Schema
The site SHALL support a `weekly` content collection with the following frontmatter schema:
- `title` (string, required)
- `description` (string, required)
- `weekStart` (date, required) - first day of the week covered
- `weekEnd` (date, required) - last day of the week covered
- `pubDate` (date, required)
- `heroImage` (image, optional)
- `caption` (string, optional)
- `tags` (array of strings, default [])
- `draft` (boolean, default false)
- `location` (string, required) - city/town name (e.g., "Zagreb", "Split")
- `region` (regionEnum, default 'continental')

Slug format SHALL be descriptive: `{location}-events-week-{weekNumber}-{year}` (e.g., `zagreb-events-week-3-2026`).

#### Scenario: Weekly with date range validates
- **WHEN** a weekly post has valid `weekStart`, `weekEnd`, and `location`
- **THEN** the build succeeds
- **AND** the weekly is available in the collection

#### Scenario: Weekly requires week dates
- **WHEN** a weekly post is missing `weekStart`
- **THEN** the build fails with a validation error

#### Scenario: Weekly requires location
- **WHEN** a weekly post is missing the `location` field
- **THEN** the build fails with a validation error

---

### Requirement: Guide Type Configuration
The site SHALL define guide type configuration in `src/config/site.ts` with the following structure:
- `food`: label "Food & Restaurants", orange color scheme, UtensilsCrossed icon
- `drinks`: label "Cafes & Bars", amber color scheme, Coffee icon
- `activities`: label "Things to Do", violet color scheme, Sparkles icon
- `seasonal`: label "Seasonal", cyan color scheme, Sun icon
- `neighborhoods`: label "Neighborhoods", rose color scheme, MapPin icon

Each type SHALL have: label, color, bgColor, activeBgColor, textColor, icon.

#### Scenario: Guide type config matches pattern
- **WHEN** accessing guideTypeConfig['food']
- **THEN** it returns an object with label, color, bgColor, activeBgColor, textColor, icon properties

---

### Requirement: Guides List Page
The site SHALL provide a guides list page at `/guides/` that:
- Displays all non-draft guides sorted by publication date (newest first)
- Shows guide type filter buttons (similar to blog category filters)
- Uses PostCard component (or adapted version) for each guide
- Includes "All" filter that is active by default

#### Scenario: Guides page lists all guides
- **WHEN** user visits `/guides/`
- **THEN** all non-draft guides are displayed
- **AND** guide type filter buttons are visible
- **AND** "All" filter is highlighted

---

### Requirement: Guides Type Filter Page
The site SHALL provide filtered guide pages at `/guides/type/[type]` that:
- Display only guides matching the selected type
- Show the type name in the page header
- Highlight the active type in filter buttons
- Be statically generated at build time

#### Scenario: User views food guides
- **WHEN** user visits `/guides/type/food`
- **THEN** only guides with `guideType: "food"` are displayed
- **AND** the "Food & Restaurants" filter is highlighted

---

### Requirement: Individual Guide Page
The site SHALL provide individual guide pages at `/guides/[slug]` that:
- Display the guide content with a dedicated GuideLayout (adapted from BlogPostLayout)
- Show guide type badge instead of category badge
- Include breadcrumb navigation (Home > Guides > Guide title)
- Display location prominently (city/town)
- Display neighborhood if available
- Include a sidebar with guide-specific indicators (NOT the status card with temperature/social battery)

#### Scenario: Guide page renders
- **WHEN** user visits `/guides/best-cafes-zagreb`
- **THEN** the guide content is displayed
- **AND** the guide type badge is visible
- **AND** breadcrumbs show the correct path
- **AND** location is displayed

---

### Requirement: Guide Sidebar Indicators
Individual guide pages SHALL display a sidebar with guide-specific indicators instead of the blog's status card. The sidebar SHALL include:

**Price Range Indicator** (when priceRange is set):
- `budget`: "Won't break the bank" - green indicator, Wallet icon
- `moderate`: "A fair deal" - yellow indicator, CreditCard icon
- `luxury`: "I feel like a Kardashian" - red indicator, Gem icon

**Location Card**:
- City/town name prominently displayed
- Neighborhood (if set)
- Region with humorous description (from existing regionConfig)

**Guide Type Badge**:
- Visual indicator of the guide type with icon

The sidebar SHALL NOT include temperature or social battery indicators (those are blog-specific).

#### Scenario: Budget guide shows price indicator
- **WHEN** viewing a guide with `priceRange: "budget"`
- **THEN** the sidebar shows "Won't break the bank" with green styling

#### Scenario: Guide without price range
- **WHEN** viewing a guide without `priceRange` set
- **THEN** the price indicator section is not displayed

---

### Requirement: Price Range Configuration
The site SHALL define price range configuration in `src/config/site.ts` with humorous descriptions:
- `budget`: label "Budget Friendly", description "Won't break the bank", green color, Wallet icon
- `moderate`: label "Mid-Range", description "A fair deal", yellow/amber color, CreditCard icon
- `luxury`: label "Luxury", description "I feel like a Kardashian", red color, Gem icon

#### Scenario: Price range config provides descriptions
- **WHEN** accessing priceRangeConfig['budget']
- **THEN** it returns label, description, color, and icon properties

---

### Requirement: Weekly List Page
The site SHALL provide a weekly list page at `/weekly/` that:
- Displays all non-draft weekly posts sorted by `weekStart` date (newest first)
- Shows the week date range (e.g., "Jan 13-19, 2026") prominently
- Uses a card layout suitable for time-based content

#### Scenario: Weekly page lists all weekly posts
- **WHEN** user visits `/weekly/`
- **THEN** all non-draft weekly posts are displayed
- **AND** posts show their week date ranges

---

### Requirement: Individual Weekly Page
The site SHALL provide individual weekly pages at `/weekly/[slug]` that:
- Display the weekly content with a dedicated WeeklyLayout (adapted from BlogPostLayout)
- Show the week date range prominently in the header (e.g., "January 13-19, 2026")
- Include breadcrumb navigation (Home > Weekly > Week title)
- Display location prominently (city/town)
- Include a simplified sidebar with location card only (no status card, no price range)

#### Scenario: Weekly page renders
- **WHEN** user visits `/weekly/zagreb-events-week-3-2026`
- **THEN** the weekly content is displayed
- **AND** the week date range is visible in the header
- **AND** location is displayed

---
