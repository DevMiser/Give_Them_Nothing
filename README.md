# The Nothing Project — givethemnothing.com

Static marketing site for **The Nothing Project**: a parody Kickstarter that
didn't fund, now released as free DIY design files under the MIT License.

## Stack

Astro (static output) + Tailwind CSS. Zero server runtime, zero API routes,
zero third-party services. Deployed on Cloudflare Pages.

## Local dev

```bash
npm install
npm run dev
```

Site runs at http://localhost:4321.

## Local production build

```bash
npm run build      # writes static site to dist/
npm run preview    # serves dist/ at http://localhost:4321
```

## Deploy to Cloudflare Pages

The site is designed to run on Cloudflare Pages' free tier: unlimited bandwidth,
auto TLS, custom domain in one click since givethemnothing.com is already on
Cloudflare.

### One-time setup

1. Push this repo to GitHub (any private/public repo works).
2. In Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Cloudflare builds and publishes to `nothing-project-xxxx.pages.dev`.
5. **Custom domains** tab → add `givethemnothing.com` (and `www.`). DNS wires up automatically since the domain is on Cloudflare.

### Ongoing

Push to `main` on GitHub → Cloudflare auto-builds and deploys. No manual step.

### Alternative: direct upload (no GitHub)

```bash
npm run build
npx wrangler pages deploy dist --project-name=nothing-project
```

First run prompts a browser login to Cloudflare.

## Files that make up the site

- `src/pages/` — page templates (`index.astro` is the landing)
- `src/components/` — Hero, Video, DIY, KickstarterNote, etc.
- `src/content/copy.ts` — all marketing copy in one file, edit here
- `src/content/faq.ts` — FAQ entries
- `public/` — static assets served at the root:
  - `owners-manual.pdf` — the printable Owner's Manual
  - `box-layout.png` — the printable box die-line
  - `images/give-them-nothing.mp4` — the launch video
  - `images/video-poster.png` — poster shown before the video plays
  - `images/the-nothing-project.png` — hero product photo
  - `_headers` — Cloudflare Pages cache directives

## Brand notes

- The Owner's Manual's 22 recommended uses are intentionally **not** on this site. The manual is part of the printed experience; revealing it here would remove the reason to make one.
- All quotable lines from the original Kickstarter campaign are preserved verbatim in `src/content/copy.ts` — they ARE the product.
- The original tagline, still printed on the box: *"You can't get something for nothing, but you can get nothing for something."*
