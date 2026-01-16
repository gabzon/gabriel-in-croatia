## ADDED Requirements

### Requirement: Newsletter Subscription API
The system SHALL provide an API endpoint that accepts email subscription requests and forwards them to ConvertKit.

#### Scenario: Successful subscription
- **WHEN** a valid email address is submitted to the newsletter endpoint
- **THEN** the system subscribes the email to the configured ConvertKit form
- **AND** returns a success response

#### Scenario: Invalid email format
- **WHEN** an invalid email format is submitted
- **THEN** the system returns a validation error
- **AND** does not call the ConvertKit API

#### Scenario: ConvertKit API failure
- **WHEN** the ConvertKit API returns an error
- **THEN** the system returns an appropriate error response to the client

### Requirement: Newsletter Form Component
The system SHALL provide an interactive newsletter signup form that can be embedded in multiple locations (footer, sidebar).

#### Scenario: Form displays idle state
- **WHEN** the form is initially loaded
- **THEN** the user sees an email input field and submit button

#### Scenario: Form displays loading state
- **WHEN** the user submits the form
- **THEN** the submit button shows a loading indicator
- **AND** the form inputs are disabled

#### Scenario: Form displays success state
- **WHEN** the subscription is successful
- **THEN** the user sees a success message
- **AND** the form is replaced with a confirmation

#### Scenario: Form displays error state
- **WHEN** the subscription fails
- **THEN** the user sees an error message
- **AND** can retry the submission

### Requirement: Newsletter Form Variants
The newsletter form component SHALL support different visual variants to match its placement context.

#### Scenario: Footer variant styling
- **WHEN** the form is rendered in the footer
- **THEN** it uses horizontal layout with compact styling

#### Scenario: Sidebar variant styling
- **WHEN** the form is rendered in the sidebar
- **THEN** it uses vertical layout with prominent styling on primary background

### Requirement: Newsletter Configuration
The system SHALL use environment variables for ConvertKit configuration to keep credentials secure.

#### Scenario: Required environment variables
- **WHEN** the newsletter API is called
- **THEN** it reads CONVERTKIT_API_KEY and CONVERTKIT_FORM_ID from environment
- **AND** fails gracefully if configuration is missing