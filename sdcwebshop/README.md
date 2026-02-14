# Shopmaiah (React conversion)

Converted from the provided zip (`Technical 3/*.html`) into a React + Vite app.

## Pages converted
- / (index)
- /about
- /contact
- /catalog (uses legacy `public/script.js`)
- /cart (uses legacy `public/script.js`)
- /login
- /signup
- /profile
- /payment
- /transaction

Routing uses **HashRouter** so links work reliably on GitHub Pages.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

Output goes to `dist/`.

## Deploy to GitHub Pages (new folder inside your GH Pages repo)
1) Copy this whole folder into a NEW folder inside your `username.github.io` repo (example: `/shopmaiah-react/`).
2) Inside `/shopmaiah-react/` run:
```bash
npm install
npm run build
```
3) Copy **contents** of `/shopmaiah-react/dist/` into the folder you want published (common options):
- If your repo publishes from `/docs`: copy dist contents to `/docs/shopmaiah-react/`
- If your repo publishes from `/root`: copy dist contents to `/shopmaiah-react/`

If you tell me your repo’s Pages publishing setting (root vs docs), I can give the exact copy target.
