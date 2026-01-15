# Pages Capability

## ADDED Requirements

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
- Social media links
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
- Floating quote card with handwritten styling

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

#### Scenario: Category cards display
- **WHEN** user views the homepage
- **THEN** four category cards are visible
- **AND** each card has a distinct color accent
- **AND** cards have hover state with background color fill

---

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
- Background dark: Deep brown (#1A1310)
- Text: Slate gray (#1B140D)
- Accent colors for categories (blue, yellow, green, teal)

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
