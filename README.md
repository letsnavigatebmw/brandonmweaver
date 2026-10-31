# brandonmweaver.com

Personal site of Brandon M. Weaver. Built with [Astro](https://astro.build), deployed on Vercel.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

| What | File |
|---|---|
| All bio facts, roles, stats, testimonials, links | `src/data/site.ts` |
| Writing list and videos | `src/data/writing.ts` |
| Colors, type, spacing (design tokens) | `src/styles/global.css` |
| Pages | `src/pages/` (`index`, `work`, `writing`, `about`, `404`) |
| Contact form (Formspree) | `src/components/Contact.astro` |
| Social share image, favicons | `public/og.png`, `public/favicon.svg` |

To change a fact on the site, edit `src/data/site.ts`. Lines marked `CONFIRM` still need sign-off.

## Theme

Light editorial theme by default. A dark theme is defined in `global.css`; enable it by adding `data-theme="dark"` to the `<html>` tag in `src/layouts/Base.astro`.

## Style rules

American English. No em dashes. Facts must match the current CV.
