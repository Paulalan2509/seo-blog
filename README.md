# Plain Words — editorial website

A bilingual English/French editorial blog built with semantic HTML, custom CSS and lightweight vanilla JavaScript.

## Run locally
Open `index.html` in a browser, or serve the `seo-blog/` directory with any static web server.

## Pages
- `/` — English article index
- `/fr/` — French article index
- `/about/` — About the publication
- `/en/.../` — English articles
- `/fr/liste-controle-seo-avant-publication/` — French article
- `/404.html` — Not-found page

## Design and frontend
- Shared design system in `css/style.css`
- Progressive enhancement in `js/site.js` (article filtering, reading progress and reduced-motion-aware reveal)
- Self-hosted Literata and Hanken Grotesk fonts
- Responsive editorial cards and article typography
- Keyboard focus states, skip links, semantic landmarks and reduced-motion support

## SEO preserved
Existing canonical URLs, hreflang links, Open Graph/Twitter metadata, JSON-LD, sitemap, RSS feed, robots.txt and article content have been retained. The visual refresh does not rename existing routes.

## Deployment
Deploy the contents of this directory to the existing static hosting target. Keep the directory structure intact so relative article, CSS, JavaScript, font and language links continue to resolve.
