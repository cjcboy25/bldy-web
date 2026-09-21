# Buildly Maintenance Guide

## Routine Checks

Periodically verify:

- Git working tree
- DEV deployment
- GitHub Actions
- Astro build
- Blog
- Decap CMS
- Sitemap
- Robots
- Navigation
- Static assets

---

## Local Health Check

From:

~/gitProjects/bldy-web

Run:

git status

Then:

npm run build

A successful build confirms that Astro can generate the current site.

---

## Content Maintenance

Blog content is managed through Decap CMS.

Avoid directly editing published blog Markdown unless there is a specific development reason.

---

## Dependency Maintenance

The project uses:

package.json
package-lock.json

When dependencies are changed:

1. Review the proposed dependency.
2. Update package files.
3. Run npm ci.
4. Run npm run build.
5. Test the site.
6. Commit the dependency changes.

Do not update multiple major dependencies without testing the site afterward.

---

## Website Maintenance

The public website should remain lightweight and static where possible.

Avoid adding unnecessary runtime infrastructure to the marketing site.

---

## Application Separation

The Buildly application is a separate system.

Do not add:

- Supabase application logic
- FlutterFlow application exports
- application database configuration
- n8n workflows
- AI services

to the public website repository unless there is a documented architectural reason.

---

## Incident Procedure

If a DEV deployment fails:

1. Check GitHub Actions logs.
2. Identify the failing stage.
3. Reproduce locally when possible.
4. Check the most recent commit.
5. Fix the smallest relevant issue.
6. Run npm run build.
7. Push the fix to dev.
8. Verify the deployment.

Do not reset the repository blindly.

---

## Production Safety

Production resources must remain isolated from development.

Never use production credentials, databases, storage, or application services for normal DEV testing.
