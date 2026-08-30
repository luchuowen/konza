# Konza Elevators Website — CLAUDE.md

## What this is
A premium marketing/lead-gen website for Konza Elevators & Escalator Co. Ltd
(Nairobi elevator/escalator installer, est. 2013, authorized Fuji Elevator
distributor). Rebuild of konzaelevators.co.ke. Agency: NAVAC GLOBAL.

## Non-negotiables
- Every fact about the business comes from `docs/KONZA_SPEC.md`. Never invent
  products, certifications, project names, or client names. Anything marked
  `[CONFIRM]` in that doc must NOT be presented as fact — use the safe
  fallback language specified next to it, or omit the claim.
- Design system is FINAL (see `src/styles/tokens.css` once Session 1 lands).
  Do not change the palette, fonts, or spacing scale without being told to.
- The Konza logo (`public/brand/konza-logo.png`) is a REAL client asset. Never
  regenerate, redraw, or AI-generate a replacement logo. Only resize/recompress
  the existing file if a page needs a different resolution.
- Every image slot maps to an EXACT filename defined in `docs/KONZA_MEDIA_PROMPTS.md`.
  Match by the item name in that doc, never by guessing. If the file isn't in
  `public/images/` yet, use the CSS placeholder classes (`.ph-products`,
  `.ph-projects`, `.ph-trust`) defined in `src/styles/tokens.css` — never ship
  a broken `<img src>`.
- Mobile-first. Every component must be verified at 390px width before it's
  considered done, not just checked at desktop width.
- Scroll-reveal must use the fail-safe pattern (content visible by default in
  CSS; a `.pre` hide-class is added only immediately before
  `IntersectionObserver.observe()`, and removed on intersection; the whole
  init wrapped in try/catch). Never ship `opacity:0` as an unconditional base
  style — if JS fails, content must still be visible.

## Verification standard
Before marking any page "done": render it with Playwright (headless Chromium
is pre-installed in most Claude Code sandboxes — check with
`npx playwright --version` before trying to install), screenshot it at 1440px
and 390px, scroll through the FULL page in at least 4 increments (not just the
top), and check `page.on('console', ...)` / `page.on('pageerror', ...)` for
errors. Read the screenshots. A page is not done because the code "looks
right" — it's done because you looked at the rendered output and it matches
the approved mockup. This project shipped a mockup with an invisible hero
(invalid CSS color token silently killed the whole `background` shorthand) and
a carousel collapsed to 38px wide (flexbox auto-margin suppressing stretch) —
both were invisible from reading the code and only caught by rendering.

## Model routing (for subagent delegation within this build)
- Sonnet 5 (you, the primary session): all structural/architectural work,
  component design, page assembly, anything requiring design judgment.
- Haiku 4.5 subagents: mechanical, well-specified sub-tasks only — e.g.
  formatting a large data array from spec content, writing alt-text for a
  list of images whose captions are already given, generating repetitive
  metadata blocks. Never delegate anything that requires interpreting the
  design system or making a content call.

## Commit style
Small, working commits per component/page. Message format:
`feat(page): short description` or `fix(component): short description`.
Never commit with a failing build or lint error.

## Deferred (do NOT do these here)
- Live Firestore project provisioning.
- Firebase App Hosting deploy.
- Domain mapping to konza.navac.co.ke or konzaelevators.co.ke.
These are a separate future prompt the client will provide explicitly.

---

## Decisions Log

- **2026-08-29 — Session 0.** Stack pinned to Next.js **15.5.24** (App Router)
  + React 19, not the `create-next-app@latest` default of Next 16, per the
  workbook's explicit "Next.js 15 — do not substitute."
- **2026-08-29 — Session 0 — Logo assets incomplete, flagged, not fabricated.**
  The client has so far uploaded only one of the three real logo files: a
  582×216 solid-maroon-background JPEG, saved at
  `public/brand/konza-logo-hires.jpg` (matches the spec's description of the
  existing hi-res export). The 192×192 transparent PNG (`konza-logo.png`,
  needed for the header/nav against dark navy backgrounds) and `favicon.png`
  have NOT been supplied yet. Per the non-negotiable against regenerating or
  reinterpreting the logo, nothing was derived (no background removal, no
  synthesized favicon) to fill the gap. Session 1's Header/Footer/nav work
  will need the transparent PNG before it can place the logo on a dark bar
  without a maroon box artifact — get it from the client before or during
  Session 1. Next.js's own default favicon/demo assets were removed from
  `public/` and `src/app/` rather than left in place or replaced with a fake.
- **2026-08-29 — Session 0 — npm audit.** `npm audit` reports 8 advisories
  (1 high, 7 moderate), all transitive and all with only breaking fixes:
  (1) `postcss`, pulled in by `next@15.5.24`'s own build tooling — the fix
  upgrades to Next 16, contradicting the pinned stack; (2) `uuid`, pulled in
  by `firebase-admin`'s `@google-cloud/storage` dependency (a code path this
  app doesn't call — no GCS usage) — the fix downgrades `firebase-admin` to
  v10. Left both as-is; revisit if upstream patches land on the pinned major
  versions.
