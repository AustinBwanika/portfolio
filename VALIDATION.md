# Validation — media update, 15 November 2026

## Passed

- `npm run check`: 18 files, zero errors, warnings or hints. `npm run build`: eight static pages including custom 404; 66 responsive image variants.
- npm dependency audit at installation: zero vulnerabilities. Added Node type definitions for build-time document size calculation.
- Parsed production HTML: 213 internal page/anchor/asset references resolve, all use `/portfolio/`, each page has one H1.
- Production HTTP HEAD checks: homepage, all four project routes, Metricell, Outside the code, all three PDFs and all three videos returned 200 with expected content types.
- Browser: desktop visual checks of homepage, PumpSync, football, Airbnb, Metricell and personal page. Mobile route/overflow checks across all seven content pages at 390 px; additional 320 px checks for homepage and all three new pages. Fixed a film-section grid minimum-width overflow and verified the personal page at 320 px again.
- Browser native playback: all three videos advanced with readyState 4 and no video error. Full durations verified with ffprobe: 149.933 s PumpSync; 299.467 s football; 26.930 s basketball. PumpSync is silent; football and basketball retain AAC audio.
- PDF view link from Airbnb opens the local PDF destination. Download links have native download attributes; PDF and video URLs are served correctly beneath the base path. Source files remain separate from published copies.
- PDF text extraction: dissertation 70 pages/~177k characters; Airbnb 53 pages/~105k; public placement copy 13 pages/~25k. Converted placement layout rendered and visually inspected, with administrative cover/blank/signed pages omitted. No DOCX renamed to PDF.
- Photos have no EXIF metadata. Aspect ratios retained. Lazy responsive images and preload=none video avoid eager media downloads. Keyboard-operated native players work; visible player focus ring observed. Existing skip link, focus styles and reduced-motion CSS retained.
- No push or deployment. Existing manual workflow and base path preserved.

## Limits and content notes

- No full screen-reader, cross-browser or automated WCAG/Lighthouse audit. Reduced motion reviewed in CSS, not browser emulation. Caption/transcript gap remains for narration; visual outlines are labelled accurately. Incidental music in basketball audio not conclusively assessed.
- Download destinations and attributes checked; not every browser download dialogue exercised. Live GitHub Pages deployment remains unchanged and was not tested for this update.
- Uncertain Metricell screenshot matches are omitted and recorded in IMPLEMENTATION_NOTES.md. Optional personal captions/preferences are in CONTENT_TODO.md, not visitor-facing pages.
- Built size approximately 32.6 MiB; largest selected file ~6.5 MiB. Within current GitHub/Pages size limits; future video traffic may warrant different hosting.

## Working previews

Production: http://127.0.0.1:4323/portfolio/ — latest build, left running.
Development: http://127.0.0.1:4322/portfolio/ — reflects edits immediately.

If stopped: `npm run dev -- --port 4322`, or `npm run build` then `npm run preview -- --port 4323`. Always include `/portfolio/` in the browser URL. A production preview changes only after rebuilding.
