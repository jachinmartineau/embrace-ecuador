import { defineConfig } from 'astro/config';

// `site` drives the canonical + hreflang tags. Must match the domain the site is
// actually served from — add it in Netlify → Domain management to match.
export default defineConfig({
  site: 'https://embrace.ec',
});
