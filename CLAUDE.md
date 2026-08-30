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
- **2026-08-30 — PR #1 merged mid-build; branch rebased, not restacked.**
  The client merged PR #1 (Session 0's scaffold) into `main` immediately
  after opening it, before Session 1's commit landed on this branch. Per the
  house rule for a merged designated branch, `main` was fetched and the
  Session 1 commit was rebased onto the new `main` (a clean, conflict-free
  replay — `main`'s merge commit already contained Session 0's tree exactly)
  and force-pushed, rather than stacking further work on now-closed history.
  A new PR will be needed for this branch going forward since #1 is merged
  and closed.
- **2026-08-30 — Session 1 spot-check fixes.** Verified the merged-in Session
  1 shell (tokens, Header, Footer, WhatsAppWidget, Carousel, Button, Chip,
  Container, RevealOnScroll) against KONZA_SPEC.md with Playwright before
  trusting the commit's own "verified" claim, per this file's Verification
  standard. Found and fixed two real deviations: (1) the footer credit line
  was hand-assembled with a dynamic `{year}` and a "·" separator instead of
  §9's exact verbatim string — now renders `DESIGNER_CREDIT.prefix` +
  `DESIGNER_CREDIT.linkLabel` from `src/lib/constants.ts` so the source of
  truth can't drift from the rendered output; (2) `WhatsAppWidget` was a
  plain `<a target="_blank">` that redirected to `wa.me` on a single click —
  §7 requires an in-page panel first, with only the panel's own "Send"
  button opening WhatsApp with the message pre-filled. Rebuilt it as a
  toggleable panel (Escape/outside-click to close, `aria-expanded`, editable
  pre-filled message) that only hands off on explicit Send. Also added
  `playwright` as a devDependency (browsers already present at
  `/opt/pw-browsers` in this sandbox, `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1`
  used on install) so future sessions can run this file's mandated
  Playwright verification directly instead of only via `npx`.
