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
- **2026-08-30 — Session 3, Projects/Portfolio page — mockup file absent, not
  fabricated.** The session brief calls `mockups/design-projects-page.html`
  an approved, Playwright-verified mockup to match "exactly," but no
  `mockups/` directory exists anywhere in this repo's git history — only
  `docs/KONZA_SPEC.md` §4/§6's textual description of the locked layout
  (dark stats header → sticky white filter-chip bar with live counts →
  3-column hover-reveal card grid on `--paper` → dark closing CTA) is
  actually available to build from. Rather than inventing a pixel-exact
  match to a file that isn't there, `/projects` was built from that textual
  spec plus the existing locked design system (tokens, `Chip`/`Button`/
  `Container`/`RevealOnScroll` from Session 1) — get the real mockup file
  from the client/agency before treating this page as pixel-locked. One
  deliberate deviation from the brief's card description: the one-line spec
  detail is NOT hidden until hover — CLAUDE.md's mobile-first mandate means
  content gated behind `:hover` is permanently invisible on touch devices,
  so the detail renders always-visible, with hover reserved for a decorative
  card-lift/scrim-darken only. Curated 15 of the 50 real projects from
  §2 (within its own "12–16" guidance), excluding the `[CONFIRM]`ed
  "Apricot Property Solutions." Sector filter counts are computed from
  `projects-data.ts` at render time, not hardcoded. Verified with Playwright
  at 1440px/390px: all 6 filter chips' displayed counts matched actual
  rendered card counts on click, the sticky filter bar pins at exactly the
  header's real height (71px, measured — not assumed) and un-sticks after
  the grid (initially over-stuck through the footer until the bar and grid
  were wrapped in a shared positioning container; fixed and re-verified), no
  console/page errors at either width. No project imagery exists in
  `public/images/` yet, so every card uses the `.ph-projects` placeholder
  per the non-negotiable against shipping a broken `<img>`.
- **2026-08-30 — Session 4, About & Services.** Both pages use the locked
  design system only — Header/Footer/`Container`/`RevealOnScroll`, same
  eyebrow/numbered-card language as the home page's compliance strip — with
  creative latitude on layout per the brief. **About:** dark founding-story
  hero → a `--paper` milestone strip (2013 founded → 2020 Fuji authorization
  → 50 projects → today) reusing the compliance-strip's numbered-card
  pattern for the company timeline → a `--white` editorial 2-column section
  (Playfair pull-quote reframed from the real vision/mission statement,
  paired with the 5 real values as a short list, not an icon grid) → a dark
  credentials/brand-partner row naming Fuji (authorized distributor),
  Delfar (past-tense project mentions only — Radiant Group of Hospitals,
  Jesse Kay Hospital — no present-tense partnership claim, since its
  authorization is confirmed expired), Glarie ("featured brand"), Maurer
  ("catalogue range"), and KS ISO 8100 (design/install practice, not a
  certification) → closing CTA. Leadership: David Gachari's confirmed title
  and experience are stated as fact; Denis Kitili is named but given no
  specific title, since his title is a `[CONFIRM]` item where the source
  document contradicts itself (Sales Technical Director vs. Electrical
  Supervisor) — per the non-negotiable against presenting `[CONFIRM]` items
  as fact, he's listed under "Leadership Team" with no title claim rather
  than guessing between the two. **Services:** dark hero → a white section
  holding a custom, keyboard-operable accordion (`Accordion.tsx`, native
  `<button>` per item so Enter/Space work with no extra JS, real
  `aria-expanded` + `aria-controls`/`aria-labelledby`, first item open by
  default so the page isn't empty without interaction) for the six real
  service lines in the spec's exact order (Installation / Modernization /
  Maintenance & Repair / Repair / Construction & Contracting / Equipment &
  Plant Hire) → a dark 3-step "How an Engagement Works" strip (free
  condition report → quotation → scheduled work, the sequence §2 actually
  describes for Repair) → a short `--paper` Maintenance Contracts teaser
  linking to the not-yet-built `/maintenance` page rather than duplicating
  its content → closing CTA. Verified with Playwright at 1440px/390px: full
  scroll-through screenshots at both widths, zero console/page errors,
  and the accordion's `aria-expanded` state confirmed via
  `page.$eval` before/after both Enter and Space on a Tab-focused button
  (toggles `true`→`false` correctly, panel's `hidden` attribute tracks it).
- **2026-08-30 — PR #5 merged mid-build; branch restarted from `main`, not
  restacked.** Same situation as PR #1: the client merged PR #5 (Session 4's
  About/Services work, plus follow-up polish commits) into `main` before this
  session's work landed. Since this branch carried no unmerged commits beyond
  `main` (all prior work was already in the merge), the branch was reset to
  `origin/main` rather than stacked further onto now-closed history, per the
  house rule for a merged designated branch.
- **2026-08-30 — Session 6, Maintenance Contracts & Resources/Blog.**
  **Maintenance** (`/maintenance`): §6 specifies no concrete pricing tiers
  exist in source material, so per the "never fabricate pricing" mandate this
  is a single "What's Included" numbered-card section (5 items — free
  condition report, scheduled servicing, response-time SLA, KS ISO
  8100/NCA-aware compliance support, the 10-person technical team) reusing
  the compliance-strip/timeline numbered-card visual language already
  established on Home/About, not an invented tier comparison table. No FAQ
  section — KONZA_SPEC.md has no real FAQ content, and §6 only calls for one
  "if real FAQ content exists." No image slot used even though
  `Maintenance — Technician Inspection.jpg` is named in KONZA_MEDIA_PROMPTS.md
  for this page: following the precedent already set by About/Services (both
  also have designated-but-unused prompt images), the page didn't structurally
  need a photo section, and no file exists yet in `public/images/` to place
  there anyway. Closing CTA is worded "Get a Maintenance Quote" throughout,
  not the generic "Get a Quote." **Resources/Blog** (`/resources` +
  `/resources/[slug]`): the 2 real articles from §2 ("How to Choose the Right
  Elevator for Your Building," "Top Construction Trends to Watch in 2026")
  were reframed as original prose in `src/lib/resources-data.ts`, keeping the
  real Kenya price bands (residential KES 2.5–6M, freight/service KES 5–12M,
  home KES 1.5–3M), the 6–12 month servicing guidance, and the Statista
  $79.06B→$116.14B market-sizing data intact and unaltered. Publish dates
  (15 Jul / 5 Aug 2026) are original editorial metadata for the relaunch, not
  a business fact from source material. Built as real static pages under the
  dynamic route (`generateStaticParams`, per-article `generateMetadata`,
  `notFound()` on an unknown slug) rather than treating them as a stub. The
  index page's card grid reuses `/projects`' card visual language
  (`ph-projects` placeholder, sector-tag-style category label) per §6, with a
  third "More Guides on the Way" card as the honest, intentionally-styled
  empty-state slot §6 calls for (dashed border, muted tone) rather than
  fabricated filler articles. Verified with Playwright at 1440px/390px across
  all 4 pages (index + both articles + maintenance), full scroll-through
  screenshots at both widths, zero console/page errors; confirmed every
  numeric claim traces to KONZA_SPEC.md and the empty-state card reads as
  intentional rather than broken. `npm run build`, `tsc --noEmit` and
  `eslint` all clean.
