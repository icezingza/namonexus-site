# namonexus.com

เว็บไซต์แบรนด์อย่างเป็นทางการของ **NamoNexus** — https://www.namonexus.com

Static site (single-page, bilingual TH/EN) ตาม NamoNexus Brand Guideline:
Deep Navy `#0A0F2C` · Neon Cyan `#00E0FF` · Poppins / Noto Sans Thai

| File | Purpose |
|---|---|
| `index.html` | The whole site — markup, styles, and TH/EN language toggle |
| `favicon.svg` | NN monogram favicon |
| `brand-video.mp4` | Official brand film (shown automatically on the page) |
| `package.json` | Build script for Vercel — copies static files into `dist/` |

## Deploy

Connected to the Vercel project **namo-nexus-dashboard** (domain `namonexus.com`).
Every push to `main` deploys to production automatically.
