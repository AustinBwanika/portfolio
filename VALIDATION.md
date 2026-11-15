# Validation — 15 November 2026

## Passed

- `npm run check`: 0 errors, 0 warnings, 0 hints across 9 files.
- `npm run build`: generated five static pages (homepage, three case studies, custom 404). Rebuilt successfully after the final contrast adjustment.
- Dependency installation audit: 0 vulnerabilities at install time.
- Parsed built HTML: every internal page/anchor target resolves, each page has exactly one H1, and there are zero script tags.
- Output privacy check: no CV PDF, phone number or $40,000 estimate in the generated site.
- Browser visual review: homepage and all three project pages at 1440×960 and 390×844. No horizontal overflow in inspected layouts. Additional 320px checks passed for homepage and PumpSync.
- Keyboard: Tab reaches the visible skip link, focus outline is present, and Enter transfers focus to main content.
- Native project link navigation, direct project URL loading and PumpSync refresh worked.
- Production preview: homepage and PumpSync loaded; PumpSync had zero scripts and no overflow. Unknown URL showed the custom 404 and working home destination.
- Primary text contrast against cream: charcoal 13.81:1, muted 5.38:1, green 8.87:1. Muted text against the pale project surface is 5.00:1. Diagram numbering was darkened to this muted colour. Terracotta is used decoratively, not for small text.
- Reduced-motion CSS disables smooth scrolling and transitions; all content/navigation is static and independent of JavaScript.

## Limits

- No live GitHub Pages deployment was run, as requested. Workflow and user-site paths are prepared using current official Astro documentation. Validate live URLs after manually publishing.
- Not a full assistive-technology, automated accessibility, Lighthouse or cross-browser audit. Reduced motion was reviewed in CSS rather than emulated in the browser.
- External project destinations were copied from verified CV links. Research retrieval could not load the football repository or Inspire Talent website; current external availability remains to be checked.
- No source screenshots or public CV were supplied. These are omitted rather than fabricated.

## Preview

The production preview was started at http://127.0.0.1:4322 and left open for review. If it is no longer running, use `npm run preview -- --port 4322` after building. Stop it with `npx astro preview stop`. The development server can be started again with `npm run dev`.

## GitHub Pages project-path preparation

Target: https://austinbwanika.github.io/portfolio/ (repository AustinBwanika/portfolio).

- Astro check: 0 errors, warnings or hints; production build passed.
- Local production HTTP checks passed for `/portfolio/` and all three `/portfolio/projects/<slug>/` routes opened directly.
- Validated 41 internal page, anchor and asset references against the build output; stylesheet and favicon requests returned HTTP 200 under `/portfolio/`.
- Canonical and Open Graph URLs include the project base path. The generated 404 uses Astro’s `/portfolio/404/` canonical route while GitHub serves `404.html` for missing pages.
- No image, video or public document files currently exist; future public assets must use the existing `url()` helper as documented in Projects.md. The optional CV link already does so.
- The manually triggered workflow follows Astro’s official GitHub Pages guide. It has not been run against GitHub Pages as part of this preparation.
- Earlier preview URLs in this log describe previous checks. Development and preview URLs now require `/portfolio/`.
