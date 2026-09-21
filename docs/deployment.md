# Buildly Deployment Guide

## DEV Deployment

The current public DEV site is:

https://dev1.buildly.ph

Deployment source:

GitHub branch `dev`

---

## GitHub Actions

Workflow:

.github/workflows/deploy-dev.yml

The workflow runs when changes are pushed to:

dev

It can also be manually triggered through GitHub Actions.

---

## Deployment Process

```text
Local VM
   |
   | git push origin dev
   v
GitHub
   |
   v
GitHub Actions
   |
   +-- Checkout repository
   |
   +-- Configure GitHub Pages
   |
   +-- Install Node.js 22
   |
   +-- npm ci
   |
   +-- npm run build
   |
   +-- Upload dist
   |
   +-- Deploy GitHub Pages
   |
   v
dev1.buildly.ph
