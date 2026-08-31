# Personal Portfolio Website

A modern portfolio website built with **React**, **TypeScript**, and **Vite** to showcase my projects, skills, and experience.

## About

This repository contains my personal portfolio site.  
Its purpose is to provide a clear, professional overview of who I am, what I build, and how to contact me.

## Features

- Responsive portfolio layout
- Project showcase with descriptions and links
- About section with background and skills
- Contact section for professional opportunities
- Fast loading and optimized production build

## Tech Stack

- **React** — component-based UI
- **TypeScript** — safer and maintainable code
- **Vite** — fast dev server and build tooling
- **CSS** (or your styling solution) — custom styling and responsive design

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```text
.
├── public/
│   ├── images/         # Content images, referenced as /images/<file>
│   └── _redirects      # SPA fallback for Cloudflare Pages
├── src/
│   ├── api/            # Loads content from src/content/ at build time
│   ├── components/
│   │   ├── layout/     # Header, Footer, Hero, cards, etc.
│   │   └── pages/      # One component per route
│   ├── content/        # All site content — see src/content/README.md
│   ├── lib/            # Types, theme context, frontmatter parser
│   ├── router.tsx
│   └── main.tsx        # App entry point
├── index.html
└── vite.config.ts
```

## Editing content

All content lives in [`src/content/`](src/content/) as plain files — there is no
database and no runtime fetch. See [`src/content/README.md`](src/content/README.md)
for the field reference.

- **Projects** — one markdown file per project in `src/content/projects/`. The
  filename is the URL slug. Add a project by dropping in a new `.md` file; no
  code change needed.
- **Profile, experience, education, skills** — `src/content/about.json`.
- **Social and footer links** — `src/lib/data.ts`.
- **Images** — put them in `public/images/` and reference `/images/<file>`.
  Keep them under ~1600px on the long edge; they ship to every visitor.

Content is bundled at build time, so changes go live by committing and pushing
to `main`.

## Deployment

The site is hosted on **Cloudflare Pages** (project `minghsuan`, live at
<https://minghsuan.pages.dev>) and builds automatically from the `main` branch.

**To deploy: push to `main`.** There is no manual deploy command — `npm run
deploy` only prints this reminder and exits.

Cloudflare Pages build settings:

| Setting          | Value           |
| ---------------- | --------------- |
| Build command    | `npm run build` |
| Output directory | `dist`          |

`public/_redirects` routes every unmatched path to `index.html` so client-side
routes like `/portfolio/data-2` resolve on a hard refresh.

## Roadmap

- [ ] Add project filtering by tech stack
- [ ] Add dark/light theme toggle
- [ ] Add blog or notes section
- [ ] Add animations and micro-interactions
- [ ] Improve accessibility and SEO metadata

## License

MIT License
