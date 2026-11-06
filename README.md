# ggcr.github.io

Static multipage site built with Vite and Tailwind CSS 4.

```sh
npm ci
npm run dev
```

Open `http://localhost:5173`. For access from another device on the same network,
run `npm run dev -- --host 0.0.0.0` and open the network URL printed by Vite.

Run `npm run build` to compile all seven pages and their shared stylesheet into
`dist/`. Run `npm run preview` to check the production build locally. Deploy
`dist/` rather than the source HTML, which needs Vite to compile Tailwind.

```sh
npm run build
npm run preview
```

The production preview is available at `http://localhost:4173`.

Tailwind is compiled through PostCSS. Shared theme settings and the HTML source
paths are in `styles.css`; use Tailwind utility classes in each page's markup.

## GitHub Pages deployment

In the GitHub repository, go to **Settings → Pages → Build and deployment**
and set **Source** to **GitHub Actions**. The workflow in
`.github/workflows/deploy.yml` runs `npm ci` and `npm run build` on Node.js 24,
then publishes `dist/` whenever changes are pushed to `main`. It can also be
started manually from the Actions tab.

Publishing the repository root directly serves uncompiled Tailwind CSS and
leaves Vite public assets at the wrong URLs. Publish the build output instead.

## Publication hygiene

The site includes no analytics or view-counter scripts. Google Fonts, MathJax,
and the existing GitHub Gist embeds remain external resources.

Finder metadata and local `.env` files are ignored. Check embedded metadata and
visible contact information before adding new photos or documents.
