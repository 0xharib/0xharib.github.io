# haribalaji.net

Personal site of Hari Balaji — essays on AI, agents, LLM systems, fintech, books,
and assorted geekery. Built with Jekyll on a customized fork of the
[TeXt theme](https://github.com/kitian616/jekyll-TeXt-theme) (MIT, see LICENSE),
deployed via GitHub Pages.

## Local preview

GitHub Pages builds the live site with its own Jekyll environment; the Gemfile here
exists only for local preview (Jekyll 4.x, needs Ruby ≥ 3.1):

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Layout

- `_posts/` — all writing, one Markdown file per post
- `_layouts/home.html` + `_sass/custom.scss` — the custom homepage and site-wide styling
- `_data/home.yml` — curated sections shown on the homepage
- `_data/navigation.yml` — header navigation
- `docs/plans/` — design/overhaul notes (excluded from the build)
