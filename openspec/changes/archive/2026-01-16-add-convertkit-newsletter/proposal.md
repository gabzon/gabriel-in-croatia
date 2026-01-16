# Change: Connect Newsletter Forms to ConvertKit

## Why
The site has newsletter signup forms in the footer and sidebar that are currently non-functional. Connecting them to ConvertKit (Kit) will enable capturing subscriber emails and building an audience for the "Gabriel in Croatia" brand.

## What Changes
- Create a new API endpoint to handle newsletter form submissions
- Connect both footer and sidebar newsletter forms to the ConvertKit API
- Add form validation and user feedback (loading, success, error states)
- Store ConvertKit configuration (API key, form ID) via environment variables

## Impact
- Affected specs: New `newsletter` capability
- Affected code:
  - `src/components/Footer.astro` - Update form to submit to API
  - `src/components/Sidebar.astro` - Update form to submit to API
  - New: `src/pages/api/newsletter.ts` - API endpoint for form submission
  - New: `src/components/NewsletterForm.tsx` - React island for interactive form
  - `.env` - ConvertKit credentials (API key already present, need form ID)