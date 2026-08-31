# Content

All site content lives here as plain files — no database, no network request at
runtime. Everything is bundled at build time, so editing content means editing a
file and running `npm run deploy`.

## Projects

One markdown file per project in `projects/`. **The filename is the URL slug**:
`projects/web-1.md` is served at `/portfolio/web-1`. Renaming a file changes its
public URL, so only rename when you mean to.

```markdown
---
title: NextUp Live
tag: Web
image: /images/nextup-live.jpg
stack: [React, TypeScript, TailwindCSS]
sourceUrl: https://github.com/...
liveUrl: https://...
featured: false
order: 4
---

The first paragraph doubles as the card blurb on the portfolio page.

#### ***A heading***

The rest of the body renders as markdown on the project detail page.
```

| Field       | Required | Notes                                              |
| ----------- | -------- | -------------------------------------------------- |
| `title`     | yes      |                                                    |
| `tag`       | yes      | Badge on the card, e.g. `Web` / `Data`             |
| `image`     | yes      | Path under `public/`, e.g. `/images/foo.jpg`       |
| `stack`     | no       | Comma-separated list in brackets                   |
| `sourceUrl` | no       | Shows the "Source" button                          |
| `liveUrl`   | no       | Shows the "Live demo" button                       |
| `featured`  | no       | `true` / `false`                                   |
| `order`     | no       | Ascending; files without it sort last              |

Adding a project is just dropping a new `.md` file in `projects/` — no code
change, the loader picks it up via `import.meta.glob`.

The frontmatter parser (`src/lib/frontmatter.ts`) understands `key: value` and
`key: [a, b]` only. Anything more structured belongs in `about.json`.

## About page

`about.json` holds the profile, experience, education, and skills. Array order
is display order.

## Images

Put images in `public/images/` and reference them as `/images/<file>`. Keep them
under ~1600px on the long edge and prefer JPEG for photos and figures — they are
committed to the repo and shipped to every visitor.
