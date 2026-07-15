# namonexus.com

เว็บไซต์แบรนด์อย่างเป็นทางการของ **NamoNexus** (v5.0.0 Sovereign AI Hub) — https://www.namonexus.com

React 19 + Vite SPA ตาม NamoNexus Brand Guideline:
Deep Navy `#0A0F2C` · Neon Cyan `#00E0FF` · Poppins / Noto Sans Thai

| Path | Purpose |
|---|---|
| `src/pages/BrandWebsite.tsx` | Brand homepage (route `/`) |
| `src/pages/TeacherView.tsx` | Smart Classroom teacher dashboard (route `/teacher`) |
| `src/pages/DisplayView.tsx` | Smart Classroom display view (route `/display`) |
| `public/favicon.svg` | NN monogram favicon |
| `public/brand-video.mp4` | Official brand film, embedded in the hero section |

## Deploy

Connected to the Vercel project **namo-nexus-dashboard** (domain `namonexus.com`).
Every push to `main` deploys to production automatically. `vercel.json` rewrites all
paths to `index.html` for client-side SPA routing.
