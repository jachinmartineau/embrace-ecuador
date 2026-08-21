# Embrace Ecuador — Astro site

Bilingual (ES / EN) marketing site. Spanish renders at `/`, English at `/en/` —
two real pages with proper `hreflang` + canonical tags, so both languages are
indexable by Google (unlike a client-side language toggle).

## Editing
- Copy lives in `src/i18n/ui.js` (all EN + ES strings, keyed).
- Layout/markup is in `src/components/Site.astro`.
- Styles are in `src/styles/global.css`.
- Animated stat numbers are configured in the frontmatter of `Site.astro` (`stats`).

## Run locally
    npm install
    npm run dev        # preview at localhost:4321
    npm run build      # outputs static site to /dist

## Deploy to Netlify — two ways

### A. Continuous deploy (recommended)
1. Push this folder to a GitHub repo.
2. Netlify → Add new site → Import from Git → pick the repo.
3. Netlify auto-detects Astro (build: `npm run build`, publish: `dist`). Deploy.
   Every push now rebuilds and redeploys automatically.

### B. Instant, no account / no Git
1. Run `npm install` then `npm run build`.
2. Drag the generated `dist` folder onto https://app.netlify.com/drop
   (Same as dragging the old single HTML file — but this is the built bilingual site.)

## Before launch
- In `astro.config.mjs`, change `site` to your real domain. This drives the
  canonical + hreflang URLs. (Custom domain is added in Netlify → Domain management;
  you do NOT need the .netlify.app subdomain.)
- Wire the contact form to a real destination (Netlify Forms, Formspree, or a CRM endpoint).
- Confirm the EN vs ES second-audit naming ("Qualifying Audit" vs "Auditoría de Eficiencia").
