# Buildly Technical Architecture

## Overview

Buildly consists of two major systems:

1. Public Website
2. Buildly Application

The public website and application are maintained as separate projects.

---

## Public Website

Current development website:

https://dev1.buildly.ph

Technology:

- Astro 7.3.2
- Node.js 22.22.1
- GitHub
- GitHub Actions
- GitHub Pages
- Decap CMS
- Astro Content Collections

Repository:

cjcboy25/bldy-web

Development branch:

dev

Future production branch:

main

---

## Public Website Architecture

```text
Browser
   |
   v
dev1.buildly.ph
   |
   v
GitHub Pages
   |
   v
Astro static site
   |
   +-- BaseLayout
   |     |
   |     +-- SEO
   |     +-- Header
   |     +-- Footer
   |
   +-- Pages
   |     +-- Home
   |     +-- How It Works
   |     +-- Blog
   |     +-- 404
   |
   +-- Content
   |     +-- Blog Markdown
   |
   +-- Static Assets
         +-- CSS
         +-- JavaScript
         +-- Images
