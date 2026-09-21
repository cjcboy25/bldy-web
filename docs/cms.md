# Buildly CMS Guide

## Current CMS

Buildly currently uses Decap CMS for blog/content publishing.

CMS files:

public/admin/config.yml
public/admin/decap-cms.js

CMS URL:

https://dev1.buildly.ph/admin/

---

## Current CMS Scope

The current CMS manages the Blog collection.

Content location:

src/content/blog/

Blog content is stored as Markdown files.

---

## Publishing Architecture

```text
Decap CMS
    |
    v
GitHub / dev
    |
    v
src/content/blog/*.md
    |
    v
Astro Content Collection
    |
    v
Static Astro build
    |
    v
GitHub Pages
    |
    v
dev1.buildly.ph
