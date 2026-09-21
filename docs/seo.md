# Buildly SEO Guide

## SEO Architecture

SEO metadata is centralized in:

src/components/SEO.astro

Pages use:

src/layouts/BaseLayout.astro

BaseLayout passes SEO properties to the SEO component.

---

## Supported Metadata

The current SEO component supports:

- title
- description
- canonical
- Open Graph type
- Open Graph title
- Open Graph description
- Open Graph URL
- Open Graph image
- Open Graph site name
- Twitter card
- Twitter title
- Twitter description
- Twitter image
- robots / noindex

---

## Canonical URLs

The site is currently configured for:

https://dev1.buildly.ph

The Astro site configuration is stored in:

astro.config.mjs

---

## Sitemap

Buildly uses:

@astrojs/sitemap

The sitemap is generated during the Astro build.

Generated files include:

sitemap-index.xml
sitemap-0.xml

---

## Robots

The public robots file is:

public/robots.txt

The generated robots file is included in the final static build.

---

## Blog SEO

Blog entries can provide:

- seoTitle
- seoDescription
- featuredImage
- description

These fields are managed through the CMS.

---

## SEO Development Rules

1. Every public page should have a meaningful title.
2. Every public page should have a meaningful description.
3. Canonical URLs should use the correct environment.
4. DEV content should not accidentally become production content.
5. Do not copy production canonical URLs into DEV pages without intentional review.
6. Test sitemap output after structural URL changes.
7. Verify robots behavior before production launch.
8. Keep SEO implementation centralized where practical.

---

## Environment Consideration

DEV and production will eventually use different canonical environments.

DEV:

https://dev1.buildly.ph

Production:

https://buildly.ph

Before production launch, all production SEO metadata and canonical behavior must be reviewed.
