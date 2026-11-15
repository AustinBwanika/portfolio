# Austin Bwanika — personal portfolio

A light-only, static Astro portfolio using TypeScript and plain CSS. Includes a responsive homepage, three project case studies with conceptual diagrams, a custom 404, accessible navigation and page-specific social metadata. No client JavaScript, analytics, external fonts or services are needed.

## Local setup

Use Node **22.23.4 or newer** (the minimum required by the installed Astro release). `.nvmrc` pins the version tested here. npm 9.6.5+ is required; npm 10.9.9 was used. Astro and its checker are pinned; the lockfile records all exact versions. TypeScript 6 is used because the checker does not yet support TypeScript 7.

```sh
nvm use
npm ci
npm run dev
```

Open the Local URL printed by Astro (normally http://127.0.0.1:4321). Astro 7 runs its dev server in the background; use `npx astro dev stop` to stop it and `npx astro dev logs` for logs.

```sh
npm run check
npm run build
npm run preview
```

`dist/` is the deployable output. Preview serves the production build. In a restricted filesystem environment, prefix the commands with `ASTRO_TELEMETRY_DISABLED=1` to avoid Astro writing its preference directory.

## Editing

- `src/data/site.ts`: typed project content, dates, statuses, technologies, links and contact details. Add a project object to generate a case-study route automatically. The first three entries are selected projects.
- `src/pages/index.astro`: introduction, other projects, experience, education and interests.
- `src/components/ProjectCard.astro`: reusable project summary.
- `src/components/ProjectFlow.astro`: accessible HTML project flows, based on source material rather than screenshots.
- `src/pages/projects/[slug].astro`: shared case-study template.
- `src/styles/global.css`: colour variables, typography, responsive layouts and reduced-motion behaviour.
- `src/layouts/Layout.astro`: shared document, metadata, favicon and skip link.
- `CONTENT_TODO.md`: evidence gaps and missing assets to review before publication.

Use UK English. Keep claims and measurements traceable to supplied materials. Do not describe PumpSync’s estimated losses as measured savings. All site links are native anchors and work without JavaScript.

## Images and public CV

No screenshots or photos were supplied, so none are fabricated. To add genuine images, put source images in `src/assets/`, import Astro’s `Image` from `astro:assets`, and render it with meaningful `alt`, explicit dimensions and a responsive `sizes` value. Use the source aspect ratio and `width:100%; height:auto`; lazy-load images below the fold. Replace or accompany the relevant flow component with the approved image. Never include credentials, payment records or customer personal details in screenshots.

The original CV remains outside the workspace and public assets. PDFs are ignored by default. After preparing and reviewing a redacted public CV, add it under `public/austin-bwanika-cv.pdf`, add a specific allow-list exception to `.gitignore` (`!public/austin-bwanika-cv.pdf`), and set `profile.publicCv` to `austin-bwanika-cv.pdf`. The homepage download link then appears. Do not publish a phone number or home address.

## GitHub Pages — deliberate, manual publishing

Nothing has been published, pushed or registered remotely. When ready:

1. Review content and the missing-details checklist.
2. Create the repository `AustinBwanika.github.io` under the verified `AustinBwanika` account, then commit and push this workspace including `package-lock.json`. Do not add the private CV or ignored build/dependency files.
3. In repository **Settings → Pages**, choose **GitHub Actions** as source.
4. In **Actions → Deploy portfolio to GitHub Pages**, select **Run workflow**. There is deliberately no `push` trigger. Every publication requires a manual run.
5. Verify the deployed homepage, all three direct project URLs, and an unknown URL for the 404 page.

`astro.config.mjs` uses `site: 'https://austinbwanika.github.io'`, `base: '/'`, static output and trailing slashes. Each project builds to its own `index.html`, so direct requests and refreshes do not require SPA rewrites.

For a different username, change `site` and use its `<username>.github.io` repository. For a project repository (e.g. `portfolio`), keep the user origin as `site` and set `base: '/portfolio'`. Internal links, assets and metadata use Astro’s base-aware helper. Rebuild and test the prefixed URLs. Do not add `base` to `site` as well.

The workflow follows [Astro’s official GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/) checked 15 November 2026: checkout v7, withastro/action v6, deploy-pages v5. It installs from the lockfile, checks types, builds and uploads the static artifact before deployment. Publishing itself has not been exercised.

## Design references

Reviewed [Brittany Chiang](https://brittanychiang.com/) for clear navigation and a restrained two-column hierarchy, and [Josh W. Comeau](https://www.joshwcomeau.com/) for approachable writing and thoughtful details. No source code, text or distinctive assets were copied. System sans-serif and Georgia keep the site fast and self-contained.

## Validation

See `VALIDATION.md` for the checks performed and remaining limits.
