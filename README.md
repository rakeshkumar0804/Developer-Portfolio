# Developer portfolio

## Run locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env`, then add your GitHub username and EmailJS credentials. The portfolio works without them; it displays a concise setup message instead of attempting requests.

## Personalize it

- Edit `src/data/portfolio.js` for your name, links, skills, projects, milestones, and certificates.
- Add your résumé as `public/resume.pdf` (create the `public` folder if needed), or update `profile.resume`.
- Replace each `live` and `code` placeholder in the project data with real links.
