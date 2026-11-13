# Morganz Landing Page

Marketing site for Morganz Integrated Solutions and the CyberFlow® irrigation
control platform. Built with Next.js (App Router) + Tailwind CSS.

## Local development

```bash
npm install
npm run dev        # http://localhost:8883
```

## Build

```bash
npm run build      # static export written to out/
```

## Deployment

The site is a fully static export and is published to GitHub Pages at
<https://morganz-integrated.github.io/morganz-landing-page/>.

- Source lives on `main`.
- The compiled site lives on the `gh-pages` branch, which GitHub Pages serves.
- `.github/workflows/deploy.yml` rebuilds and republishes `gh-pages` on every
  push to `main`.

Because this is a project site (served from a subpath), builds in CI set
`GITHUB_PAGES=1`, which turns on the `/morganz-landing-page` `basePath`
(see `next.config.mjs`). Public assets referenced in JSX must go through the
`asset()` helper in `lib/base-path.ts` so they respect that prefix.
