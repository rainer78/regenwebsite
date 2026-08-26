# Codex Task: Add Google Preferred Sources integration

Implement Google Search Preferred Sources on regencreatives.com.

## Context
- Google currently recognizes Regen Creatives (regencreatives.com) in the Preferred Sources selector, so the domain is eligible.
- Use Google's current Search Central documentation as the source of truth: https://developers.google.com/search/docs/appearance/preferred-sources

## Implementation
1. Inspect the existing site architecture and identify the correct shared layout/head location.
2. Add Google's recommended Preferred Sources library once, preferably in the document head:
   `<script async src="https://news.google.com/swg/js/v1/publisher.js"></script>`
3. Add the official interactive Preferred Sources control using:
   `<div google-add-preferred-source-btn></div>`
4. Place the control somewhere contextual and visible, ideally near educational/resources/article content or another trust/follow area. Do not make it the primary homepage CTA and do not bury it where users are unlikely to encounter it.
5. Match the site's current dark/light presentation appropriately using Google's supported `data-theme` option if needed. Preserve the native Google control rather than recreating its behavior unless the existing framework requires the advanced API.
6. Ensure the implementation is responsive and does not introduce layout shift, console errors, hydration problems, or duplicate script loading.
7. Preserve current accessibility. Do not remove or obscure existing content to make room for the control.
8. Verify the final flow returns users to Regen Creatives after they add the site as a Preferred Source.

## Acceptance criteria
- Preferred Sources script loads once.
- Google control renders correctly on desktop and mobile.
- Clicking it launches Google's Preferred Sources flow for regencreatives.com.
- Existing page layout and navigation remain intact.
- No new console errors.
- Build/tests pass.

Please make the smallest clean production-ready change and provide a short summary of the files changed and how you verified it.
