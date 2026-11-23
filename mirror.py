"""Build dist/ for earlchirchir.github.io from the published Lovable site.

Lovable stays the editor. This script copies every page and asset of the
published site, removes Lovable's badge and tracking script, and rewrites the
site address to https://earlchirchir.github.io so the portfolio is served there.
Python standard library only.
"""
import os
import re
import shutil
import sys
import urllib.parse
import urllib.request
from collections import deque

SOURCE = "https://earl-chirchir-workbook.lovable.app"
SITE = "https://earlchirchir.github.io"
OUT = "dist"
UA = {"User-Agent": "Mozilla/5.0 (portfolio mirror)"}

ASSET_RE = re.compile(r"""["'(]\s*(/(?:assets|__l5e/assets-v1)/[^"')\s?#]+)""")
REL_ASSET_RE = re.compile(r"""["'](assets/[^"'\s?#]+\.(?:js|css|png|jpe?g|webp|svg|woff2?))["']""")
DOT_REL_RE = re.compile(r"""["'](\./[^"'\s?#]+\.(?:js|css))["']""")
FILE_RE = re.compile(r"""(?:href|src)=["'](/[^"'/?#]+\.(?:pdf|ico|txt|png|jpe?g|svg|webp|xml|webmanifest))["']""")
PAGE_RE = re.compile(r"""href=["'](/[^"'?#.]*)(?:[?#][^"']*)?["']""")


def fetch(path, allow_404=False):
    req = urllib.request.Request(SOURCE + path, headers=UA)
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return r.read(), r.headers.get("content-type", "")
    except urllib.error.HTTPError as e:
        if allow_404 and e.code == 404:
            return e.read(), e.headers.get("content-type", "")
        raise


def clean_html(html):
    # Lovable badge: its markup, its style block and its script.
    html = re.sub(r"<aside[^>]*id=\"lovable-badge\".*?</aside>", "", html, flags=re.S)
    html = re.sub(r"<style[^>]*>(?:(?!</style>).)*#lovable-badge(?:(?!</style>).)*</style>", "", html, flags=re.S)
    html = re.sub(r"<script[^>]*>(?:(?!</script>).)*#lovable-badge(?:(?!</script>).)*</script>", "", html, flags=re.S)
    # Lovable analytics script (does not work off lovable.app).
    html = re.sub(r"<script[^>]*src=\"/__l5e/events[^\"]*\"[^>]*></script>", "", html)
    return html.replace(SOURCE, SITE)


def save(path, data):
    rel = urllib.parse.unquote(path.lstrip("/"))
    dest = os.path.join(OUT, *rel.split("/"))
    os.makedirs(os.path.dirname(dest) or OUT, exist_ok=True)
    with open(dest, "wb") as f:
        f.write(data)


def main():
    shutil.rmtree(OUT, ignore_errors=True)
    os.makedirs(OUT)
    pages, seen_pages = deque(["/"]), {"/"}
    assets, seen_assets = deque(), set()

    def want_asset(p):
        p = p.split("?")[0].split("#")[0]
        if p not in seen_assets:
            seen_assets.add(p)
            assets.append(p)

    def scan(text, base_dir="/"):
        text = text.replace(SOURCE, "")
        for m in ASSET_RE.findall(text):
            want_asset(m)
        for m in REL_ASSET_RE.findall(text):
            want_asset("/" + m)
        for m in DOT_REL_RE.findall(text):
            want_asset(urllib.parse.urljoin(base_dir, m))
        for m in FILE_RE.findall(text):
            want_asset(m)

    while pages:
        page = pages.popleft()
        raw, _ = fetch(page)
        html = raw.decode("utf-8")
        scan(html)
        for link in PAGE_RE.findall(html):
            link = link.rstrip("/") or "/"
            if link.startswith("/__") or link.startswith("/assets") or link in seen_pages:
                continue
            seen_pages.add(link)
            pages.append(link)
        out = "/index.html" if page == "/" else page + "/index.html"
        save(out, clean_html(html).encode("utf-8"))
        print("page", page)

    raw, _ = fetch("/__not-found__", allow_404=True)
    save("/404.html", clean_html(raw.decode("utf-8")).encode("utf-8"))

    for extra in ("/favicon.ico", "/robots.txt"):
        want_asset(extra)

    while assets:
        a = assets.popleft()
        try:
            data, ctype = fetch(a)
        except Exception as e:  # noqa: BLE001
            print("MISSING", a, e)
            continue
        if a.endswith((".js", ".css", ".mjs")):
            text = data.decode("utf-8", errors="replace")
            scan(text, a.rsplit("/", 1)[0] + "/")
            data = text.replace(SOURCE, SITE).encode("utf-8")
        save(a, data)

    open(os.path.join(OUT, ".nojekyll"), "w").close()
    print(f"{len(seen_pages)} pages, {len(seen_assets)} assets")
    if "/" not in seen_pages or len(seen_pages) < 3:
        sys.exit("too few pages; refusing to deploy")


if __name__ == "__main__":
    main()
