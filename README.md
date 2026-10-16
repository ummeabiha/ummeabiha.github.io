# Abiha Rizvi · Portfolio

Personal portfolio built with **Angular 21** (standalone components, signals), Lucide icons and Devicon logos.

## Run locally
```bash
npm install
npm start          # http://localhost:4200
```

## Edit content
All text, links, projects, skills and experience live in **`src/app/data/portfolio.data.ts`**.
- Add a photo: put `profile.jpg` in `/public` and set `photo: 'profile.jpg'`.
- Update resume: replace `/public/Syeda-Umm-E-Abiha-Rizvi-Resume.pdf` (keep the same name).

## Build
```bash
npx ng build       # output: dist/abiha-portfolio/browser
```

## Deploy (free)
- **GitHub Pages:** push this repo to `ummeabiha.github.io` → Settings → Pages → Source: **GitHub Actions**. The included workflow builds and deploys on every push to `main`.
- **Netlify / Vercel:** import the repo; `netlify.toml` already sets the build command and output folder.
