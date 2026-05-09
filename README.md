# Marco Alecci Website

Personal academic website built with **SvelteKit** and **Tailwind CSS**.

This README explains the basic workflow in simple terms: install the project, test it locally, push it to GitHub, and edit the website content.

## 🚀 Quick Start: Test And Publish

### 1. Test the website locally

Start the local development server:

```bash
npm run dev
```

Then open the local link shown in the terminal. It is usually:

```text
http://localhost:5173/
```

If that port is already busy, Vite may use another one, such as `5174` or `5175`. Use the exact URL printed in the terminal.


### 2. Install the project [Pushing Updates]

Run this before pushing updates to github the repository:

```bash
npm install
```

Cloudflare reads the website from GitHub. 
After running 'npm install' push to GitHub

After the push, Cloudflare should detect the GitHub update and redeploy the website automatically.

## 📁 Repository Structure

Most edits happen in `src/content/`. Think of these files as the website database.

```text
marcoalecci-web/
├── src/
│   ├── content/
│   │   ├── profile.ts        # Name, headline, bio, homepage text
│   │   ├── publications.ts   # Papers and publication data
│   │   ├── experience.ts     # Work/research experience
│   │   ├── education.ts      # Degrees and education history
│   │   ├── supervision.ts    # Supervised students
│   │   ├── teaching.ts       # Teaching activities
│   │   ├── service.ts        # Program committees, reviews, service
│   │   ├── awards.ts         # Awards and honors
│   │   └── contact.ts        # Email, office, map, social profiles
│   │
│   ├── routes/
│   │   ├── +page.svelte              # Home page layout
│   │   ├── contact/+page.svelte      # Contact page layout
│   │   ├── publications/+page.svelte # Publications page layout
│   │   ├── education/+page.svelte    # Education page layout
│   │   ├── experience/+page.svelte   # Experience page layout
│   │   ├── teaching/+page.svelte     # Teaching page layout
│   │   ├── service/+page.svelte      # Service page layout
│   │   ├── awards/+page.svelte       # Awards page layout
│   │   └── supervision/+page.svelte  # Supervision page layout
│   │
│   ├── lib/
│   │   ├── components/       # Reusable visual pieces
│   │   ├── config/site.ts    # Navigation links and social links
│   │   ├── config/palette.ts # Main color palette
│   │   └── config/theme.ts   # Theme settings
│   │
│   └── app.css               # Global CSS styles
│
├── static/
│   ├── marcoalecci.webp      # Profile picture
│   ├── logo/                 # University/company logos
│   └── flags/                # Country flags
│
├── package.json              # Project commands and dependencies
├── package-lock.json         # Exact dependency versions
├── tailwind.config.js        # Tailwind CSS configuration
├── svelte.config.js          # SvelteKit configuration
└── vite.config.ts            # Vite configuration
```

## 🧭 Where To Edit Things

Use this table when you want to change something quickly.

| What you want to change | File to edit |
| --- | --- |
| Homepage name, headline, biography, tags | `src/content/profile.ts` |
| Profile photo | Replace `static/marcoalecci.webp` |
| Email, office, map, social profiles | `src/content/contact.ts` |
| Publications | `src/content/publications.ts` |
| Education | `src/content/education.ts` |
| Experience | `src/content/experience.ts` |
| Teaching | `src/content/teaching.ts` |
| Supervision | `src/content/supervision.ts` |
| Service activities | `src/content/service.ts` |
| Awards | `src/content/awards.ts` |
| Navigation menu | `src/lib/config/site.ts` |
| Colors | `src/lib/config/palette.ts` |
| General styling | `src/app.css` |
