# Pages Capability

## Purpose
This specification defines the page layouts, components, and design system for the Gabriel in Croatia blog.
## Requirements
### Requirement: Branded Header
The site SHALL display a consistent header across all pages with the following elements:
- Logo: "GABRIEL" in red (#FF1700) italic font + "IN CROATIA" in gray
- Navigation links: Stories, The Struggle, Maps
- Call-to-action button with primary styling

#### Scenario: Header displays on homepage
- **WHEN** user visits the homepage
- **THEN** the branded header is visible at the top
- **AND** navigation links are clickable
- **AND** the logo links to the homepage

#### Scenario: Header displays on blog post
- **WHEN** user views a blog post
- **THEN** the same branded header is visible
- **AND** navigation remains consistent

---

### Requirement: Branded Footer
The site SHALL display a consistent footer across all pages with:
- Logo and tagline
- Newsletter signup form
- Navigation links (Privacy, Contact, RSS Feed)
- Social media links (Instagram, TikTok, YouTube)
- Copyright notice

#### Scenario: Footer newsletter signup
- **WHEN** user enters email in footer form
- **THEN** the form accepts the input
- **AND** displays the newsletter CTA styling

---

### Requirement: Homepage Hero Section
The homepage SHALL display a hero section with:
- Tagline: "I make Croatian culture make sense by not understanding it at all"
- Subtitle describing the Venezuelan-in-Croatia concept
- Primary and secondary CTA buttons
- Profile image with decorative rotation effect
- Floating quote card with handwritten styling (configurable in site config)

#### Scenario: Hero renders with all elements
- **WHEN** user visits the homepage
- **THEN** the hero section displays the tagline in large typography
- **AND** the profile image is visible with rotation effect
- **AND** CTA buttons are clickable

---

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

### Requirement: Post Listings with Confusion Rating
Blog post listings SHALL display:
- Post title and excerpt
- Publication date
- Category badge
- Confusion rating (1-5 stars based on frontmatter `confusionLevel`)
- Featured image (when available)

#### Scenario: Confusion rating displays correctly
- **WHEN** a blog post has `confusionLevel: 4` in frontmatter
- **THEN** the post card displays 4 filled stars and 1 empty star

#### Scenario: Post card shows category
- **WHEN** a blog post has `category: "language"` in frontmatter
- **THEN** the post card displays a "Language" badge with yellow styling

---

### Requirement: Blog Post Layout
Individual blog posts SHALL display:
- Breadcrumb navigation (Home > Category > Post title)
- Category badge and reading time
- Title in serif font (Playfair Display)
- Author avatar, name, and publication date
- Hero image with handwritten caption overlay
- Drop cap styling on first paragraph
- Styled blockquotes with primary color accent
- Sidebar with status widgets and related posts

#### Scenario: Blog post renders with drop cap
- **WHEN** user views a blog post
- **THEN** the first letter of the first paragraph is styled as a large drop cap
- **AND** the drop cap uses the primary red color

#### Scenario: Hero image caption displays
- **WHEN** a blog post has a hero image
- **THEN** a handwritten-style caption card overlays the image
- **AND** the caption is slightly rotated for visual interest

---

### Requirement: Blog Post Content Schema
Blog post frontmatter SHALL support the following fields:
- `title` (string, required)
- `description` (string, required)
- `pubDate` (date, required)
- `updatedDate` (date, optional)
- `heroImage` (string, optional)
- `tags` (array of strings, optional)
- `category` (enum: latino-vs-slavic | adventure | language | hidden-stories, required)
- `confusionLevel` (number 1-5, required)
- `draft` (boolean, optional)
- `caption` (string, optional) - handwritten caption for hero image

#### Scenario: Schema validates confusionLevel
- **WHEN** a blog post has `confusionLevel: 6`
- **THEN** the build fails with a validation error

#### Scenario: Schema requires category
- **WHEN** a blog post is missing the `category` field
- **THEN** the build fails with a validation error

---

### Requirement: Design System Colors
The site SHALL use the following color palette:
- Primary: Croatian red (#FF1700)
- Background light: Warm cream (#F8F7F6)
- Background cream: (#FDFBF7)
- Text: Dark brown (#1B140D)
- Text muted: (#9A704C)
- Border: (#F3EDE7)
- Accent colors for categories (blue-500, yellow-500, emerald-500, teal)

#### Scenario: Primary color usage
- **WHEN** rendering interactive elements (buttons, links, badges)
- **THEN** the primary red (#FF1700) is used for emphasis
- **AND** hover states use a darker red (#DC2626)

---

### Requirement: Typography System
The site SHALL use the following fonts:
- Display/body: Plus Jakarta Sans (weights 300-800)
- Headings/serif accents: Playfair Display (weights 700, 900)
- Icons: Lucide icons

#### Scenario: Blog post title uses serif font
- **WHEN** viewing a blog post
- **THEN** the post title uses Playfair Display font
- **AND** the title is bold/black weight

#### Scenario: Body text uses display font
- **WHEN** viewing any page content
- **THEN** body text uses Plus Jakarta Sans
- **AND** the font renders with proper weights

---

### Requirement: Site Configuration
The site SHALL centralize configurable values in `src/config/site.ts`:
- Hero quote and attribution
- Social media links (Instagram, TikTok, YouTube)
- Author information (name, bio)
- Status widgets (mood, confusion level, temperature, location)
- Navigation links
- Category configuration (labels, colors, icons)

#### Scenario: Hero quote is configurable
- **WHEN** the hero quote is updated in site config
- **THEN** the homepage displays the new quote
- **AND** no code changes are required

#### Scenario: Social links display in footer
- **WHEN** social links are configured in site config
- **THEN** the footer displays icons linking to each platform

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

