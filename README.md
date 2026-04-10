# Resume Editor

Cloud-ready React application for building a single-page modular resume with live preview and PDF export.

## Features

- Central content library with summaries, education, projects, skills, and experience.
- Searchable job title selector with 40+ target roles.
- Modular selectors for summary, projects (3 to 4), and skill categories.
- Real-time split-screen preview.
- PDF export with compact one-page formatting via `@react-pdf/renderer`.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

- Vercel: `npm run build` output from `dist`.
- Render Static Site: Build command `npm install && npm run build`, publish directory `dist`.
- AWS S3 + CloudFront: upload `dist` directory and configure SPA routing.
