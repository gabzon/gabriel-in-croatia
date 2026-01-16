# Tasks: Connect Newsletter Forms to ConvertKit

## 1. Configuration
- [ ] 1.1 Add CONVERTKIT_FORM_ID to environment variables
- [ ] 1.2 Create newsletter configuration in site config or dedicated config file

## 2. API Endpoint
- [ ] 2.1 Create `src/pages/api/newsletter.ts` endpoint
- [ ] 2.2 Implement ConvertKit API integration (subscribe endpoint)
- [ ] 2.3 Add input validation (email format)
- [ ] 2.4 Add error handling for API failures

## 3. Newsletter Form Component
- [ ] 3.1 Create `src/components/NewsletterForm.tsx` React island
- [ ] 3.2 Implement form state management (idle, loading, success, error)
- [ ] 3.3 Add email validation on client side
- [ ] 3.4 Display appropriate feedback messages to user

## 4. Integration
- [ ] 4.1 Update `Footer.astro` to use NewsletterForm component
- [ ] 4.2 Update `Sidebar.astro` to use NewsletterForm component
- [ ] 4.3 Support different visual variants (footer vs sidebar styling)

## 5. Testing & Verification
- [ ] 5.1 Test form submission with valid email
- [ ] 5.2 Test form validation with invalid email
- [ ] 5.3 Test error handling when API is unavailable
- [ ] 5.4 Verify subscriber appears in ConvertKit dashboard