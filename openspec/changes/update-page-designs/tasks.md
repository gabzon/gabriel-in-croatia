# Implementation Tasks

## 1. Design System Setup
- [x] 1.1 Configure Tailwind with Croatian red (#FF1700) primary color and warm palette
- [x] 1.2 Add Plus Jakarta Sans and Playfair Display fonts
- [x] 1.3 Install and configure Lucide icons for Astro
- [x] 1.4 Add custom CSS for drop caps, handwritten quote styling

## 2. Content Schema Updates
- [x] 2.1 Add `confusionLevel` field (1-5 number) to blog collection schema
- [x] 2.2 Add `category` field (enum: latino-vs-slavic, adventure, language, hidden-stories) to schema
- [x] 2.3 Update sample blog post with new frontmatter fields

## 3. Shared Components
- [x] 3.1 Create Header component with logo, navigation, and CTA button
- [x] 3.2 Create Footer component with branded layout and newsletter form
- [x] 3.3 Create ConfusionRating component (star display from frontmatter)
- [x] 3.4 Create CategoryBadge component
- [x] 3.5 Create PostCard component for blog listings
- [x] 3.6 Create Sidebar component with bio, status widgets, newsletter
- [x] 3.7 Create CategoryCard component for category grid
- [x] 3.8 Create RelatedPosts component

## 4. Homepage Implementation
- [x] 4.1 Build hero section with tagline, subtitle, CTA buttons, and profile image
- [x] 4.2 Build "Latest Disaster" featured post section
- [x] 4.3 Build "Choose Your Struggle" category filter grid
- [x] 4.4 Build "The Confusion Feed" post grid
- [x] 4.5 Build sidebar with bio, current mood, status widgets, and newsletter signup

## 5. Blog Post Page Implementation
- [x] 5.1 Add breadcrumb navigation
- [x] 5.2 Build post header with category badge, title (serif), author info, date
- [x] 5.3 Build hero image section with handwritten caption overlay
- [x] 5.4 Style article content with drop cap, blockquotes, typography
- [x] 5.5 Build sidebar with status widgets, location widget, and related posts

## 6. Blog Listing Page Updates
- [x] 6.1 Update blog index to use new PostCard component
- [x] 6.2 Add category filtering UI with URL query params
- [x] 6.3 Display confusion ratings on post cards

## 7. Testing & Polish
- [x] 7.1 Run Astro build and verify no errors
