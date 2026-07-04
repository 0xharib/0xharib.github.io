# Site overhaul — haribalaji.net — 2026-07-05

Goal: make the site dramatically more readable and make the homepage read like what it
is — the personal site of a deeply technical AI practitioner — without losing the warm,
bookish voice of the essays.

## Current state (audit)

- Jekyll site on a vendored fork of the TeXt theme, deployed via GitHub Pages
  (classic build; the Gemfile is ignored by Pages).
- 59 posts, 2010–2026. Strong clusters: AI/LLM essays (2023–2026), data experiments
  (property prices, tilings, TIFF compression, Delhi schools), books, life, cricket.
- A previous pass added a "home-v2" hero (Fraunces + Space Grotesk, warm paper palette),
  card feed, and bookshelf section. It looks pleasant but generic — nothing signals
  "AI expert" and nothing is curated.
- Problems found:
  - Site identity is stale: description is "Fintech | Sci-Fi | Books | Geekery";
    author bio and avatar are empty; the AI work is invisible until you scroll.
  - The hero right column is a large personal photo — friendly, but it reads
    "lifestyle blog", not "technical practitioner".
  - Homepage is a flat reverse-chron feed; the best AI/technical writing from 2023–24
    is buried under newer personal posts.
  - "Books" nav points at `?tag=books` but almost no post carries a `books` tag,
    so the filter comes up empty. Same for the Bookshelf section (keyed on a
    `books` category only one post has).
  - Google Analytics ID is configured but the provider is switched off.
  - `2023-04-05-the-llm-stack...` front-matter date (2023-03-10) contradicts its
    filename; it sorts wrong.
  - Repo is full of upstream-theme development cruft: theme screenshots, test site,
    theme docs, docker configs, lint configs, gemspec, CHANGELOG, zh README, a stray
    309 KB phone screenshot at the root and another inside `_data/`, an empty
    `changes.patch`, committed `.DS_Store`.
  - No reading-time indicator; article meta is thin; long essays have no visual
    breathing room beyond what the earlier pass added.

## Design direction

Keep the light paper aesthetic (it is distinctive and ideal for long-form reading) and
layer engineering precision on top of it:

- **Type system**: Fraunces for display, Space Grotesk for body, and a new mono
  (IBM Plex Mono) for all metadata, labels, dates, tags, and the hero panel. Mono
  metadata is the cheapest reliable "technical" signal there is.
- **Hero**: left column carries real positioning copy — enterprise AI, agents,
  LLM systems, ex-derivatives — with mono eyebrow and CTA buttons. The right column
  replaces the photo with a dark terminal-style profile card (`hari@haribalaji.net`)
  rendering a YAML-ish readout of focus areas and stack. The photo moves to About,
  where it belongs.
- **Curation over chronology**: a `_data/home.yml` file drives a featured
  "Working notes on AI" section (hand-picked agent/LLM essays) and a
  "Field experiments" section (data-driven posts). Latest writing and the bookshelf
  follow. Curated sections are what separates "a blog" from "a body of work".
- **Stats strip**: essays count, years writing, topic count — computed from site data,
  set in mono.

## Phases (one commit each, roughly)

1. **Plan** — this document.
2. **Repo hygiene** — delete theme-development cruft (screenshots/, test/, theme docs/,
   docker/, tools/, lint configs, gemspec, CHANGELOG, HOW_TO_RELEASE, README-zh,
   .travis.yml, package.json, stray images, changes.patch, .DS_Store), write a real
   README for the site, replace the gemspec-based Gemfile with an explicit one that
   works for local dev, trim `_config.yml` excludes, extend .gitignore.
3. **Identity & metadata** — AI-forward site description and author bio; avatar;
   enable the already-configured Google Analytics; navigation gains an "AI" filter and
   the Books link actually works; fix the llm-stack date; tag book posts `books` and
   ensure the AI essays all carry `ai` so archive filters return them.
4. **Homepage redesign** — new hero with terminal profile card, featured sections from
   `_data/home.yml`, field experiments, latest writing, fixed bookshelf, stats strip;
   IBM Plex Mono added to the font load; all styling in `_sass/custom.scss`.
5. **Readability pass** — reading-time in article meta, article header/meta set in
   mono, improved code-block/blockquote/table styling, tighter archive page, about
   page copy sharpened (keeps the voice, adds the substance).
6. **Verify** — build locally (modern Ruby via Homebrew, local-only Gemfile.lock),
   serve, screenshot home/article/archive at desktop and mobile widths, fix what's
   broken, commit.

## Non-goals

- No JS framework, no build pipeline changes, no comment system, no dark mode toggle
  (the theme's skin system stays as-is).
- No rewriting of essay content beyond the About page.
- No URL changes to existing posts (permalinks preserved; only the llm-stack
  front-matter date moves to match its filename, which changes its date-based URL —
  acceptable: the filename was always the intended date and the wrong-dated URL is
  what's live... verify before changing; if the live URL matters, keep date and fix
  sort another way).
