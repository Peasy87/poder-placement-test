# PODER Placement Test

Mobile-friendly React app for the PODER English placement test. Deployed on Vercel, posts submissions to an n8n webhook that routes to Google Sheets / Microsoft Excel / Salesforce.

## Quick start (run locally first to make sure everything works)

You need [Node.js](https://nodejs.org) version 18 or newer installed.

```bash
npm install     # install dependencies (only needs to run once)
npm run dev     # start the dev server — opens at http://localhost:5173
```

Open the URL it prints, take the test on your phone or browser, confirm it looks right.

## Before deploying — set your webhook URL

Open `src/App.jsx` and find this line near the top:

```js
const WEBHOOK_URL = "https://YOUR-N8N-INSTANCE.com/webhook/poder-placement-test";
```

Replace it with your actual n8n webhook URL. Save the file.

If you don't have n8n set up yet, you can deploy with the placeholder — submissions will just fail with an error message on screen, which is fine for testing the UI.

---

## Deploying to Vercel — pick one of three paths

### 🟢 Path A — Drag-and-drop (no terminal, simplest)

1. Run `npm install && npm run build` once locally — this creates a `dist/` folder
2. Go to [vercel.com](https://vercel.com), sign in, click **Add New → Project**
3. Click **"Deploy without Git"** at the bottom, or look for the upload option
4. Drag the entire **project folder** (not just `dist/`) onto the page
5. Vercel auto-detects Vite, builds, and gives you a URL like `https://poder-placement-test-abc123.vercel.app`

> If you don't see a drag-drop option in your Vercel UI, use Path B or C instead — Vercel occasionally hides this flow behind a flag for new accounts.

### 🟡 Path B — Vercel CLI (one terminal command)

```bash
npm install -g vercel    # install the CLI once
cd path/to/poder-placement-test
vercel                   # follow the prompts (defaults are correct)
```

Vercel will ask a few questions — accept all the defaults (it auto-detects Vite). After a minute or two it prints your live URL.

For future updates: run `vercel --prod` again from the same folder.

### 🔵 Path C — GitHub + Vercel (best for ongoing changes)

This is the right path if you'll be editing the test over time. Every git push redeploys automatically.

1. Create a free [GitHub](https://github.com) account if you don't have one
2. Create a new repository — name it `poder-placement-test`, keep it private if you want
3. Upload these project files using GitHub's web uploader (Add file → Upload files → drag the entire folder contents, **except** `node_modules` and `dist`)
4. Commit
5. Go to [vercel.com](https://vercel.com) → **Add New → Project** → **Import Git Repository**
6. Pick your `poder-placement-test` repo → click **Deploy**
7. Done. Vercel rebuilds whenever you push changes to GitHub.

---

## After deployment

1. **Copy your Vercel URL** (e.g. `https://poder-placement-test-abc123.vercel.app`)
2. **Regenerate the QR code** with the new URL (any free QR generator works — qr-code-generator.com, or Chrome's Share menu)
3. **Update the intake card** (`intake-card.html`) — swap the QR image and the URL text under it
4. **Print and post** at the PODER intake desk

## Updating the test later

- Edit `src/App.jsx`
- If you used Path C (GitHub): commit and push → auto-redeploys
- If you used Path B (CLI): run `vercel --prod` again
- If you used Path A (drag-drop): rebuild (`npm run build`) and re-drag the folder

## Custom domain (optional)

In your Vercel project → Settings → Domains → Add. If PODER owns a domain like `poderworks.org`, you can point a subdomain like `placement.poderworks.org` to this app. Vercel walks you through the DNS settings.

## Troubleshooting

| Problem | Fix |
|---|---|
| `npm install` fails | Make sure Node.js 18+ is installed (`node -v` should print 18 or higher) |
| Submit button shows error | Your `WEBHOOK_URL` is wrong, or n8n isn't running yet — check the URL and that you can hit it manually |
| Fonts look wrong | Make sure you're online — the Archivo and DM Sans fonts load from Google Fonts |
| QR scans to the wrong URL | You forgot to regenerate the QR after deploying — see "After deployment" above |
| Page looks weird on mobile | Hard refresh (close and reopen the browser tab) — old cached version |
