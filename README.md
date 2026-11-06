# Plain Words: a small SEO blog

A static blog about writing for the web and translating between French and English. It is a portfolio project: the articles are meant to be useful on their own, and the site is built to follow the SEO checklist in one of them.

**Live demo:** add your GitHub Pages link here once it is published.

![Home page](docs/home-desktop.jpg)

## What is inside

- Home page, three English articles, one French translation, an About page and a 404 page
- English and French versions of the checklist article linked with `hreflang` tags
- One `h1` per page, ordered headings, a table of contents and a breadcrumb on every article
- Title, meta description, canonical link, Open Graph and Twitter tags on every page
- `BlogPosting`, `BreadcrumbList`, `WebSite` and `AboutPage` structured data (JSON-LD)
- `sitemap.xml` (with language alternates), `robots.txt` and an RSS feed (`feed.xml`)
- Self-hosted fonts (Literata and Hanken Grotesk, SIL Open Font License), no JavaScript, no trackers
- Skip link, visible focus, 4.5:1 text contrast, tables that stack on phones, print styles

## Project structure

```
index.html            English home
fr/                   French home and French article
en/<article>/         English articles (clean URLs)
about/                About page
css/style.css         All styles
assets/               Fonts, favicon, social image (og-image.jpg)
sitemap.xml  robots.txt  feed.xml  404.html
```

## Run it locally

Open the folder in a terminal and start any static server, for example:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000. (Opening the files directly also works, but the clean links such as `en/article/` need a server.)

## Publish on GitHub Pages

1. Create a repository named `seo-blog` and upload these files.
2. In **Settings, Pages**, choose the `main` branch and the root folder.
3. The site appears at `https://<your-username>.github.io/seo-blog/`.

The canonical links, sitemap, RSS feed and social tags contain the full address `https://paulalan2509.github.io/seo-blog/`. If your username or repository name is different, replace that address in every file (a search and replace is enough), then check `sitemap.xml` and `robots.txt`.

## After publishing

1. Submit `sitemap.xml` in Google Search Console and Bing Webmaster Tools.
2. Test one article in the Rich Results Test to confirm the structured data.
3. Update the dates in the articles when you edit them (`dateModified` in the JSON-LD and the `lastmod` in the sitemap).

## Notes

- The advice in the articles is general guidance, not a promise of search rankings.
- The articles were written for this project. Replace or extend them with your own work and client samples as you go.
- Credits: fonts from Fontsource (SIL OFL).
