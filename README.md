# TecHacks 5.0 · website (Next.js, ready for Vercel)

The full TecHacks 5.0 site (13 pages, Bear Launch, boarding pass, swag, share kit, TecHacks FX, FAQ) running on Next.js 14.

## How it is built
- `public/index.html` is the whole site: HTML, CSS and JavaScript in one file, with pages as hash routes (`#tracks`, `#fx`, `#faq` …).
- `public/img`, `public/swag`, `public/docs` and `public/fx` hold the images, digital swag, PDFs and the TecHacks FX zip.
- `next.config.mjs` serves `index.html` at `/`, sends friendly links such as `/fx` or `/register` to the right page, and sets caching and download headers.
- `app/` only holds a branded 404 page.

## Run it on your computer
```bash
npm install
npm run dev      # http://localhost:3000
```
Production check: `npm run build && npm start`.

## Deploy on Vercel
1. Push this folder to a GitHub repository (or run `npx vercel` inside it).
2. In Vercel, **Add New → Project**, import the repo. Vercel detects Next.js, so leave the build settings as they are.
3. Deploy. Then **Settings → Domains → add `techacks.tech`** and set the DNS records Vercel shows at your domain registrar.

The share tags (og:image, canonical) already point to `https://techacks.tech`.

## Editing content
Edit `public/index.html` directly. Every placeholder still to fill is marked `class="tbc"` (registration link, deadline, start time, judging weights, mentors, judges, crew names, volunteer form). Keep doc 00 (source of truth) in sync, as the team's sync rule asks.

## Known limits
- **Ask the Pilot** (the AI FAQ helper) only appears inside Claude. On Vercel it stays hidden until a small API route with an AI key is added.
- **TecHacks FX download** works here (the zip is served from `/fx/`), which the Claude preview could not do.
