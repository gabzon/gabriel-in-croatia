# Status Card Capability

## ADDED Requirements

### Requirement: Temperature Enum Configuration
The system SHALL provide a `temperatureConfig` object with predefined temperature levels and humorous descriptions.

#### Scenario: Temperature levels are defined
- **WHEN** the configuration is loaded
- **THEN** the following temperature levels SHALL be available:
  - `freezing`: "Bura has entered the chat"
  - `too-cold`: "Time for rakija therapy"
  - `cold`: "Jacket weather, finally"
  - `taman`: "The one day a year this happens"
  - `hot`: "Ice cream for breakfast is acceptable"
  - `too-hot`: "Even the sea is sweating"
  - `burning`: "Hell borrowed our weather"

### Requirement: Social Battery Enum Configuration
The system SHALL provide a `socialBatteryConfig` object with predefined battery levels and humorous descriptions.

#### Scenario: Social battery levels are defined
- **WHEN** the configuration is loaded
- **THEN** the following social battery levels SHALL be available:
  - `full`: "Ready to kiss strangers on both cheeks"
  - `high`: "Can handle 3 coffee invitations"
  - `medium`: "One 'ajmo na kavu' is my limit"
  - `low`: "Pretending I don't speak Croatian"
  - `empty`: "Gone full Slavic introvert mode"
  - `negative`: "Might fake a phone call to escape"

### Requirement: Default Status Configuration
The system SHALL use default status values from `site.ts` for the homepage and as fallback for blog posts.

#### Scenario: Homepage displays default status
- **WHEN** a user visits the homepage
- **THEN** the status card SHALL display values from `siteConfig.status`

#### Scenario: Blog post without overrides uses defaults
- **WHEN** a blog post does not specify status overrides in frontmatter
- **THEN** the status card SHALL display values from `siteConfig.status`

### Requirement: Blog Post Status Overrides
The system SHALL allow blog posts to override status values via frontmatter fields.

#### Scenario: Blog post with temperature override
- **WHEN** a blog post specifies `temperature: freezing` in frontmatter
- **THEN** the status card SHALL display "Bura has entered the chat"

#### Scenario: Blog post with social battery override
- **WHEN** a blog post specifies `socialBattery: empty` in frontmatter
- **THEN** the status card SHALL display "Gone full Slavic introvert mode"

#### Scenario: Blog post with confusion level override
- **WHEN** a blog post specifies `confusionLevel: 45` in frontmatter
- **THEN** the status card SHALL display 45% on the confusion meter

#### Scenario: Partial overrides use defaults for missing fields
- **WHEN** a blog post only specifies `temperature` override
- **THEN** `socialBattery` and `confusionLevel` SHALL use defaults from `siteConfig.status`

### Requirement: Frontmatter Schema Validation
The system SHALL validate status override fields in blog post frontmatter.

#### Scenario: Valid temperature enum value
- **WHEN** frontmatter contains `temperature: taman`
- **THEN** validation SHALL pass

#### Scenario: Invalid temperature value rejected
- **WHEN** frontmatter contains `temperature: invalid-value`
- **THEN** validation SHALL fail with an error

#### Scenario: Confusion level within valid range
- **WHEN** frontmatter contains `confusionLevel: 75`
- **THEN** validation SHALL pass

#### Scenario: Confusion level out of range rejected
- **WHEN** frontmatter contains `confusionLevel: 150`
- **THEN** validation SHALL fail with an error
