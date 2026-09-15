# Abderaouf Bouklab — Portfolio

A React portfolio for full-stack and applied AI engineering, with real product recordings, architecture illustrations, and project case studies.

## Run locally

```sh
npm ci
npm start
```

Open http://localhost:3000. Build with `npm run build`; run interaction tests with `npm test -- --watchAll=false`.

## Update the content

- `src/data/portfolio.js`: profile links, project roles, architecture steps, case-study evidence, experience, and current experiments.
- `src/App.js`: page composition and reusable project, diagram, and dialog components.
- `src/App.css`: editorial layouts and responsive styles.
- `src/index.css`: shared defaults, local fonts, and reduced-motion support.
- `public/Cv.pdf`: current résumé.
- `public/production-ai-architecture.pdf`: original architecture dossier.
- `src/assets/SDXL.mp4` and `src/assets/cryptovid.mp4`: original product recordings.

Add future workbench projects to the `experiments` array. Publish project status, metrics, and technical claims only when supported by the underlying work. Search and automation visuals are labeled simplified architecture illustrations.

## Interaction notes

The featured project switches between a recording and its system map. Switching away pauses playback. The featured recording autoplays muted on a continuous loop without controls, using its native 16:9 proportions. Returning to the product view resumes playback. The archive retains standard video controls. Case studies use the browser's modal dialog for keyboard focus containment, Escape dismissal, and returning focus to the initiating button. Motion follows the visitor's reduced-motion preference.

Fonts are bundled locally; there is no external font request at runtime. Font families: DM Sans and Space Grotesk (Google Fonts).
