# Marco Alecci Website

Personal academic website built with SvelteKit and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

The site runs at http://localhost:5173.

## Content structure

All editable content lives in a single file per section under src/content:

- profile.ts
- publications.ts
- experience.ts
- education.ts
- supervision.ts
- teaching.ts
- service.ts
- awards.ts
- contact.ts

Each file exports plain objects/arrays. Edit the data directly and save.

## Theme and palette

Edit the full color palette in:

- src/lib/config/palette.ts

The active theme reads from the palette in:

- src/lib/config/theme.ts

## Navigation and links

Update navigation labels and social links in:

- src/lib/config/site.ts

## Common updates

- Add a publication: append a new item to src/content/publications.ts.
- Add a supervised student: add an entry in src/content/supervision.ts.
- Add a course: add an entry in src/content/teaching.ts.
- Update contact details: edit src/content/contact.ts.

## Build and preview

```bash
npm run build
npm run preview
```
