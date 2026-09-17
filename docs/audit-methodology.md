# Audit Methodology

**Site audited:** [india.gov.in](https://www.india.gov.in/) — National Portal of India
**Date:** 17 September 2026
**Auditor:** Claude (structural/code-level review) + manual verification steps below for you to run

## What this pass actually did

This sandbox has no browser runtime and no live network access from its shell, so
the five findings in `accessibility-audit-report.csv` come from a **structural
review of the live page's rendered markup** (headings, links, image alt text,
DOM duplication) fetched directly from `india.gov.in`. This is a legitimate and
common first pass for an accessibility audit, but it is **not** a substitute for:

- A real **Lighthouse** run (gives you a scored report: Performance,
  Accessibility, Best Practices, SEO)
- A real **keyboard-only navigation pass** (Tab / Shift+Tab / Enter / Escape
  through the whole page, with no mouse)
- **Screenshots** of both

Those three are still required for the "expected proof" of this project, so
here's exactly how to produce them and drop them into this repo.

## Reproduce the Lighthouse report

```bash
# Chrome DevTools > Lighthouse tab > check "Accessibility" > Analyze page load
# or, from the command line:
npm install -g lighthouse
lighthouse https://www.india.gov.in/ --only-categories=accessibility \
  --output=html --output-path=./docs/screenshots/lighthouse-report.html
```

Save the HTML report and a screenshot of the score summary into
`docs/screenshots/`.

## Reproduce the keyboard-only pass

1. Open the site, click once in the address bar to remove mouse focus, then use
   **only** Tab, Shift+Tab, Enter, Space, and Escape from here on.
2. Confirm a visible focus ring appears on every interactive element as you Tab
   through: skip link, search icon, accessibility-tools icon, nav items, every
   card/link in the Online Services and Information Categories grids, the
   virtual keyboard toggle (`WEB-005` below), carousel controls, footer links.
3. Specifically try to Tab **into and back out of** the "Change Input to
   Keyboard" virtual keyboard overlay — this is the step that confirms or
   rules out `WEB-005`.
4. Note every point where focus disappears, jumps unexpectedly, or gets stuck,
   with a screenshot of the focus ring at that point.

Drop your findings and screenshots into `docs/screenshots/keyboard-pass/` and
reference them from `docs/accessibility-audit-report.csv` by updating the
`evidence` column with the screenshot filename once you've run this.

## Why these five issues were prioritized

Severity in the report is scored 1 (minor) to 5 (severe), weighted by how many
users are affected and whether there's a workaround:

| ID | Issue | Severity | Why |
|---|---|---|---|
| WEB-001 | Placeholder alt text ("Loading...") never replaced | 5 | Affects every screen-reader user on every one of 18+ tiles/banners on the homepage — no workaround |
| WEB-002 | Duplicated DOM blocks for responsive breakpoints | 4 | Affects all screen-reader/link-list navigation on the busiest page of the site |
| WEB-005 | Unverified virtual-keyboard focus trap risk | 4 | Potentially blocks keyboard-only users entirely if unresolved — flagged high pending manual confirmation |
| WEB-003 | Ambiguous repeated "View All" links | 3 | Adds friction but a workaround exists (users can explore surrounding context) |
| WEB-004 | Inconsistent heading levels | 3 | Degrades navigation efficiency but doesn't block task completion |
