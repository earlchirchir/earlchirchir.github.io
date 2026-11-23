# earlchirchir.github.io

Earl Chirchir's portfolio now lives at **https://earl-chirchir-workbook.lovable.app** (built and edited in Lovable).

This repository only publishes a redirect, so the address on his CV and LinkedIn, https://earlchirchir.github.io, keeps working. Every path is forwarded to the same path on the new site (for example `/projects` and `/Earl_Chirchir_CV.pdf`).

- `redirect/index.html` and `redirect/404.html`: the redirect page, with the new site's link-preview tags
- `build.mjs`: copies `redirect/` to `dist/`, which the existing Pages workflow deploys
