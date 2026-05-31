# Locks101 Website

Static single-page Astro site for Locks101 residential locksmith services.

## Owner-Editable Content

Most site content lives in `src/data/site.json`. Update that file to change business details without editing page markup.

Common edits:

- `contact.phoneDisplay` changes the visible phone number.
- `contact.phoneHref` changes the click-to-call number. Use digits with country code, for example `+17575550101`.
- `contact.email` changes the email link.
- `contact.availability` changes appointment/availability text.
- `services.items` controls the residential service cards.
- `serviceArea.body` and `serviceArea.areas` control service-area wording.
- `siteUrl` controls production metadata and should be updated if the final domain changes.
- `hero.imageUrl` controls the main licensed stock image.

After editing, run:

```sh
npm run build
```

## Development

```sh
npm install
npm run dev
```

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the Astro site and publishes it to GitHub Pages.

In the GitHub repository settings, set Pages to use GitHub Actions as the source. When the final domain is confirmed, configure the custom domain in GitHub Pages settings and update `siteUrl` in `src/data/site.json`.
