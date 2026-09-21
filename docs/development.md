# Buildly Development Guide

## Project Location

The current Buildly public website project is located at:

~/gitProjects/bldy-web

Repository:

cjcboy25/bldy-web

---

## Development Branch

The active website development branch is:

dev

The DEV website is:

https://dev1.buildly.ph

The `main` branch is reserved for the future production website.

---

## Technology

- Node.js 22.22.1
- NPM 9.2.0
- Astro 7.3.2
- Decap CMS
- GitHub Pages

---

## Install Dependencies

From the project directory:

npm ci

---

## Start Local Development

Run:

npm run dev

The configured Astro development server uses:

http://localhost:4321

The server is configured to listen on all interfaces.

---

## Build

Run:

npm run build

The static output is generated in:

dist/

---

## Preview

Run:

npm run preview

The configured preview server uses port 4321.

---

## Development Rules

1. Work on the `dev` branch for website development.
2. Do not directly modify `main` for normal development.
3. Inspect Git status before making changes.
4. Test locally before pushing.
5. Run `npm run build` before deployment.
6. Do not commit generated `dist/` output.
7. Do not modify the CMS workflow without testing it.
8. Avoid destructive Git operations.
9. Do not use force-push unless explicitly approved.
10. Keep application development separate from this repository.

---

## Typical Development Workflow

```text
Check status
    |
    v
Make controlled change
    |
    v
Run local development server
    |
    v
Test affected pages
    |
    v
npm run build
    |
    v
Review git diff
    |
    v
Commit
    |
    v
Push dev
    |
    v
GitHub Actions
    |
    v
dev1.buildly.ph
