# Content

All site content lives here as plain files — no database, no network request at
runtime. Everything is bundled at build time, so editing content means editing a
file and pushing to `main`.

## Languages

`en/` and `zh/` each hold the same three JSON files. English is served
unprefixed (`/about`); Chinese lives under `/zh` (`/zh/about`).

| File        | Holds                                              |
| ----------- | -------------------------------------------------- |
| `about.json` | Profile, experience, education, skills            |
| `links.json` | The /links hub: bio, social accounts, link list    |
| `ui.json`    | Interface strings (nav, buttons, labels)          |

**Both languages must keep the same shape** — the same keys, and the same number
of entries in every array. `zh/links.json` reuses the English URLs and icon keys
and only translates the descriptions, so a link added to one language has to be
added to the other or the pages fall out of step.

Projects (`projects/`) are English only for now. They render as-is under `/zh`,
which is the intended fallback rather than a bug.

## Projects

One markdown file per project in `projects/`. **The filename is the URL slug**:
`projects/nextup-live.md` is served at `/projects/nextup-live`. Renaming a file
changes its public URL, so only rename when you mean to — and add a 301 for the
old path in `public/_redirects`, above the SPA fallback line, so links already
shared keep working.

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

The first paragraph doubles as the card blurb when no `summary` is set.

#### ***A heading***

The rest of the body renders as markdown on the project detail page.
```

| Field       | Required | Notes                                              |
| ----------- | -------- | -------------------------------------------------- |
| `title`     | yes      |                                                    |
| `tag`       | yes      | Badge on the card, e.g. `Web` / `Data`; the value  |
|             |          | lowercased picks the badge colour                  |
| `summary`   | no       | Card blurb. Without it the first paragraph is used,|
|             |          | which a long opening paragraph truncates mid-line  |
| `image`     | yes      | Path under `public/`, e.g. `/images/foo.jpg`       |
| `stack`     | no       | Comma-separated list in brackets                   |
| `sourceUrl` | no       | Shows the "Source" button                          |
| `liveUrl`   | no       | Shows the "Live demo" button                       |
| `featured`  | no       | `true` puts it on the landing page, which shows    |
|             |          | featured first and tops up to three by `order`     |
| `order`     | no       | Ascending; files without it sort last              |

Adding a project is just dropping a new `.md` file in `projects/` — no code
change, the loader picks it up via `import.meta.glob`.

The frontmatter parser (`src/lib/frontmatter.ts`) understands `key: value` and
`key: [a, b]` only. Anything more structured belongs in `about.json`.

## About page

`en/about.json` and `zh/about.json` hold the profile, experience, education, and
skills. Array order is display order, and nothing sorts by date at runtime —
periods are free text like `2019-2026`, so parsing them would break the moment
one says `present`. **List experience and education newest first**, and keep the
two languages in the same order.

## Images

Put images in `public/images/` and reference them as `/images/<file>`. Keep them
under ~1600px on the long edge and prefer JPEG for photos and figures — they are
committed to the repo and shipped to every visitor.
