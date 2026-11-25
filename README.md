# earlchirchir.github.io

Earl Chirchir's engineering portfolio: **https://earlchirchir.github.io**

The site is edited in Lovable. `mirror.py` copies the published Lovable site into GitHub Pages (without the Lovable badge or its tracking script) and rewrites its address to earlchirchir.github.io. The workflow in `.github/workflows/deploy.yml` runs it (`npm run build`) on every push and on demand (Actions > Deploy Portfolio to GitHub Pages > Run workflow): run it after publishing changes in Lovable. If the copy fails, the last good version stays live.


Project videos live in `media/videos/` (compressed MP4 + poster JPG). The build copies them into the site, so they are served at `https://earlchirchir.github.io/media/videos/<name>.mp4` and survive every refresh. The Lovable pages embed them by that full address.
