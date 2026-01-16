## ADDED Requirements

### Requirement: Blog Category Page Filtering
The blog SHALL provide dedicated category pages at `/blog/category/[category]` that display only posts matching that category.

Each category page SHALL:
- Display filtered posts for the selected category
- Show the category name in the page title and header
- Include category filter buttons with the active category highlighted
- Be statically generated at build time using `getStaticPaths()`

#### Scenario: User navigates to category page
- **WHEN** user visits `/blog/category/latino-vs-slavic`
- **THEN** only posts with `category: "latino-vs-slavic"` are displayed
- **AND** the page title shows "Latino vs. Slavic"
- **AND** the "Latino vs. Slavic" filter button is highlighted

#### Scenario: Category filter buttons navigate to category pages
- **WHEN** user clicks a category filter button on the blog page
- **THEN** user is navigated to `/blog/category/[category-slug]`
- **AND** the filtered posts are displayed

#### Scenario: Legacy query parameter URLs redirect
- **WHEN** user visits `/blog?category=latino-vs-slavic`
- **THEN** user is redirected to `/blog/category/latino-vs-slavic`

---

## MODIFIED Requirements

### Requirement: Category Filters
The homepage SHALL display a "Choose Your Struggle" section with category filter cards:
- Latino vs. Slavic (red accent)
- Adventure Diaries (blue accent)
- Language Struggle (yellow accent)
- Hidden Stories (green accent)

Each card SHALL use an icon and hover effect.
Each card SHALL link to `/blog/category/[category-slug]`.

#### Scenario: Category cards display
- **WHEN** user views the homepage
- **THEN** four category cards are visible
- **AND** each card has a distinct color accent
- **AND** cards have hover state with background color fill

#### Scenario: Category card links to filtered blog
- **WHEN** user clicks on a category card
- **THEN** user is navigated to `/blog/category/[category-slug]`
- **AND** only posts matching that category are displayed
