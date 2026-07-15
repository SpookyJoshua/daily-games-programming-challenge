# Daily Games Programming Challenge

A globally shared interview-style games programming challenge generated once
per day and archived in GitHub.

## How it works

1. GitHub Actions runs every day at **00:17 Europe/London**.
2. `scripts/generate-challenge.mjs` randomly combines:
   - one detailed games programming brief;
   - one architectural constraint;
   - one stretch goal.
3. The exact combination is committed permanently to:
   - `challenges/YYYY-MM-DD/README.md`
   - `docs/challenges/YYYY-MM-DD/`
4. `docs/api/current.json` exposes today's challenge.
5. `docs/api/challenges.json` exposes the complete archive.
6. GitHub Pages publishes the archive and each individual challenge page.

The result is random when generated, but permanent after it has been committed,
so every visitor receives the same global challenge for that date.

## Repository setup

### 1. Create the repository

Create a public repository named:

```text
daily-games-programming-challenge
```

Upload all files from this project to its `main` branch.

### 2. Update configuration

Edit `config.json` if your GitHub username, repository name, or Pages URL is
different.

### 3. Enable GitHub Pages

Open:

```text
Repository Settings → Pages → Build and deployment
```

Set **Source** to:

```text
GitHub Actions
```

### 4. Check workflow permissions

The workflow explicitly requests the minimum permissions it needs:

- `contents: write`
- `pages: write`
- `id-token: write`

If an organisation policy blocks write access, allow GitHub Actions to write to
the repository in the repository Actions settings.

### 5. Run the first challenge manually

Open the **Actions** tab, choose **Generate Daily Challenge**, and select
**Run workflow**.

The scheduled workflow then creates future challenges automatically.

## Generate a challenge locally

Requires Node.js 20 or newer.

Generate today's challenge:

```bash
node scripts/generate-challenge.mjs
```

Generate a specific date:

```bash
node scripts/generate-challenge.mjs --date=2026-07-15
```

The generator will not overwrite a date already present in the archive.

## Add the feature to joshelder.co.uk

The `website-embed` directory contains:

- `daily-challenge.html`
- `daily-challenge.css`
- `daily-challenge.js`

Copy the HTML into the required page, append the CSS to the site's stylesheet,
and load the JavaScript using `defer`.

Example:

```html
<link rel="stylesheet" href="/styles/daily-challenge.css">
<script src="/scripts/daily-challenge.js" defer></script>
```

The section reads its API URLs from these data attributes:

```html
data-current-api="https://raw.githubusercontent.com/SpookyJoshua/daily-games-programming-challenge/main/docs/api/current.json"
data-archive-api="https://raw.githubusercontent.com/SpookyJoshua/daily-games-programming-challenge/main/docs/api/challenges.json"
```

This means the portfolio does not generate challenges itself. It only displays
the globally published GitHub version.

## Suggested solution workflow

For each challenge, add your implementation beneath its dated directory:

```text
challenges/
└── 2026-07-15/
    ├── README.md
    ├── Solution/
    │   └── ...
    └── Tests/
        └── ...
```

Commit the solution to the same folder after completing it. The generated
challenge brief remains the folder's root README.

## Public URLs

Repository folder:

```text
https://github.com/SpookyJoshua/daily-games-programming-challenge/tree/main/challenges/YYYY-MM-DD
```

GitHub Pages challenge page:

```text
https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/YYYY-MM-DD/
```

A custom domain can later shorten this to something such as:

```text
https://challenges.joshelder.co.uk/challenges/YYYY-MM-DD/
```
