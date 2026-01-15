## ADDED Requirements

### Requirement: Dynamic Location Display
The sidebar location card SHALL display the location associated with the current blog post when viewing a blog post page.

#### Scenario: Blog post with custom location
- **WHEN** viewing a blog post that has a `location` field in its frontmatter
- **THEN** the sidebar location card displays that post's location (city, region, country)

#### Scenario: Blog post without location field
- **WHEN** viewing a blog post that does not have a `location` field in its frontmatter
- **THEN** the sidebar location card displays "Zagreb" as the default city

#### Scenario: Non-blog pages
- **WHEN** viewing a page that is not a blog post (e.g., home, about)
- **THEN** the sidebar location card displays the default location from site configuration

### Requirement: Blog Post Location Frontmatter
The blog post schema SHALL support an optional `location` field in frontmatter to specify where the post was written.

#### Scenario: Location field structure
- **WHEN** a blog post includes a `location` field
- **THEN** the field SHALL accept a city name as a string (e.g., `location: "Split"`)

#### Scenario: Location field omitted
- **WHEN** a blog post omits the `location` field
- **THEN** the system SHALL treat the location as "Zagreb" by default

### Requirement: Blog Post Region Enum
The blog post schema SHALL support an optional `region` enum field to specify the Croatian region with a predefined funny description.

#### Scenario: Region field with valid value
- **WHEN** a blog post includes a `region` field with a valid enum value (dalmatia, dubrovnik, istria, slavonia, continental, kvarner, lika)
- **THEN** the sidebar location card SHALL display the corresponding region description

#### Scenario: Region field omitted
- **WHEN** a blog post omits the `region` field
- **THEN** the system SHALL default to "continental" region
