# Buildly Git Workflow

## Repository

GitHub repository:

cjcboy25/bldy-web

---

## Branches

### dev

Purpose:

Website development and DEV deployment.

Website:

https://dev1.buildly.ph

### main

Purpose:

Future production website.

Website:

https://buildly.ph

Production is not currently the active deployment target for this Phase 2 work.

---

## Current Branch Relationship

The normal website development flow is:

```text
Local VM
   |
   v
dev
   |
   v
origin/dev
   |
   v
GitHub Actions
   |
   v
dev1.buildly.ph
