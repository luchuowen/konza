# Pre-Launch Audit — Konza Elevators Website

**Session 9, 2026-08-31.** Final quality gate before client review. Every claim
below was checked in this session (production build, `npm run start`, port
4300) — not carried over from memory of earlier sessions' own claims.
Firestore provisioning and domain mapping are explicitly out of scope (a
separate, future, client-requested task).

## Branch note

PR #8 (Session 8's work) had already been merged into `main` before this
session started. Per the house rule for a merged designated branch, this
branch was reset to `origin/main` rather than stacked on now-closed history.

## Summary of what this session changed

Auditing surfaced two real, sitewide defects, both fixed and re-verified:

1. **Broken internal links, every page, since at least Session 2.** The
   header nav, the footer nav, and all 4 "Where We Work" tiles on the Home
   page linked to `/products` and `/industries` — two of the ten pages in the
   approved IA (`docs/KONZA_SPEC.md` §5) that no build session has ever
   produced. Every page load also fired an RSC-prefetch request to both
   routes, logging a real `404` in the browser console on every single page
   — invisible unless you watch the network/console tab, exactly the class
   of bug this project's Verification standard exists to catch. Fixed by
   removing both routes from `NAV_LINKS` (`src/lib/constants.ts`, also drives
   `FOOTER_LINKS`) and un-linking the Home industry tiles (now plain `<div>`s,
   not dead `<Link>`s). `sitemap.ts` already excluded both routes (a Session
   8 decision) — its comment, which had drifted out of sync with
   `NAV_LINKS`, is corrected. **Re-verified:** crawled every `<a href>` on
   all 10 live routes programmatically; every internal href now resolves
   200. `/products` and `/industries` still correctly 404 (they don't exist)
   but nothing links to them anymore.
2. **Stray hex outside the token system.** Six inner-page hero sections
   (About, Services, Projects, Maintenance, Resources, Resources/[slug],
   Quote) repeated an identical, un-tokenized dark gradient
   (`#1d3a5f`/`#0d2036`/`#081422`) inline seven times. Centralized into a new
   `.inner-hero` class in `src/styles/tokens.css`, built from the real locked
   `--navy-800`/`--navy-900`/`--navy-950` tokens. Also fixed a one-character
   color drift in the generated OG images (`src/lib/og-image.tsx`): the
   eyebrow text used `#e8433f`, not the locked `--red` (`#E8453D`); and its
   subtitle text used an invented `#c7d0dc` instead of the locked
   `--slate-dark` (`#93A2B2`). Remaining hex outside `tokens.css` — WhatsApp's
   own brand teal `#075E54` (3 files, a deliberate Session 8 contrast fix,
   not part of the locked palette by design) and the `LiftShaftVideo.tsx` SVG
   fallback's literal `#E8453D`/`#142A47` (exact token values, used as literal
   SVG attributes since the fallback is a static `<svg>`, not styled CSS) —
   are justified, not stray.

Full grep re-run after the fix: zero unexplained hex values remain outside
`tokens.css`/`og-image.tsx`(edge-runtime, can't use CSS custom properties)/the
two justified cases above.

## Route-by-route verification

Every route below was rendered with Playwright against a production build
(`next build` + `next start`, not `next dev` — Session 8 found a bug that
`next dev` never surfaced), screenshotted full-page in 4 scroll increments at
both 1440px and 390px, and checked for `console.error`/`pageerror`/failed
network requests.

| Route | Content vs. spec | Console/page errors | Notes |
|---|---|---|---|
| `/` (Home) | Matches `KONZA_SPEC.md` §6 structurally (hero → 3 carousels → proof band → compliance strip → signature motion → 6 featured projects → testimonial → industries grid → footer CTA). Hero headline/sub-line diverge from §6's literal locked copy — see **Content deviations** below. | 0 / 0 | All 6 featured project cards, all 4 industry tiles, all 3 hero photos, the compliance band, and the lift-shaft video render with real photography. |
| `/about` | Matches §6: founding story → milestone strip → vision/mission/values editorial section → credentials/brand-partner band (Fuji/Delfar/Glarie/Maurer/KS ISO 8100, each stated exactly per §2's precision table) → team → CTA. | 0 / 0 | Denis Kitili correctly carries no title (the source's own internal contradiction, per §2/§10 item 4, unresolved). |
| `/services` | Matches §6: all 6 real service lines in spec order, keyboard-operable accordion, 3-step "How an Engagement Works," Maintenance teaser. | 0 / 0 | — |
| `/projects` | Matches §6: dark stats header (50/5/13+) → sticky filter bar with live counts → 3-col grid → dark CTA. 15 curated projects, "Apricot Property Solutions" correctly excluded. Filter counts verified against rendered card counts (4+3+2+1+5=15, matches "All (15)"). | 0 / 0 | 6 of 15 cards have real photography; 9 use the `.ph-projects` placeholder (see **Image inventory**). |
| `/maintenance` | Matches §6: no fabricated pricing tiers — single "What's Included" 5-item section, honest per the "never invent pricing" mandate. CTAs read "Get a Maintenance Quote" throughout, not generic. | 0 / 0 | — |
| `/resources` | Matches §6: 2 real articles + an intentionally-styled "More Guides on the Way" empty-state card (not fabricated filler). | 0 / 0 | Both article cards use `.ph-projects` (no article photography was ever specified in `KONZA_MEDIA_PROMPTS.md`). |
| `/resources/how-to-choose-the-right-elevator-for-your-building` | Real Kenya price bands intact and unaltered: residential KES 2.5–6M, freight/service KES 5–12M, home KES 1.5–3M; 6–12 month servicing guidance; Statista $79.06B→$116.14B market sizing. | 0 / 0 | — |
| `/resources/top-construction-trends-to-watch-in-2026` | Matches §2's 4 real trend topics. | 0 / 0 | — |
| `/quote` | Segmented form (building type/project type/floors/timeline → contact), phone required, email optional, no fabricated turnaround-time claim, always-visible WhatsApp panel beside the form. | 0 / 0 | — |
| `/contact` | Real address, both phone numbers, confirmed hours, WhatsApp panel, static map placeholder with a real pin at the confirmed coordinates and a working "Get Directions" link. | 0 / 0 | — |

**Zero console errors, zero page errors, zero failed network requests on any
route at either breakpoint** — this is after the nav-link fix; before it,
every route logged 2–3 real `404`s per page load (see Summary, item 1).

No Lorem-ipsum placeholder text, no leftover `TODO`/`FIXME` comments in any
user-facing copy anywhere in `src/app`. (One legitimate `TODO` remains in
`src/lib/notify-lead-email.ts` — a server-side stub for the email-notification
provider, explicitly deferred to the future Firestore/launch session per
Session 7's decision log, not user-facing.)

### Content deviation flagged, not fixed

Home's rendered hero (`"Elevators & Escalators for Every Building"` / a
services-first sub-line) does **not** match `KONZA_SPEC.md` §6's literal
locked copy (`"Nairobi is building up. We've been moving it since 2013."`).
Git history (commit `3115e023`, `feat(home): rewrite hero headline and drop
eyebrow badge`) states this was done "per client direction," which is
plausible and not something this audit session can independently verify or
should unilaterally revert. Flagged because, unlike the business-hours
resolution (which got its own dated entry in this file's Decisions Log), this
change to previously "locked, client-approved" copy has no corresponding log
entry — recommend Konza/NAVAC confirm it's intentional and a retroactive
decision-log entry gets added.

## Image & video inventory

23 of the 28 real photos in `docs/KONZA_MEDIA_PROMPTS.md`'s checklist are
wired into live pages under their exact filenames; the Lift Shaft Cutaway
video is wired with a fail-safe SVG fallback (`LiftShaftVideo.tsx`) if it
fails to load. Nothing is a broken `<img>` anywhere — every unfilled slot
uses one of the locked `.ph-*`/`.ph-map` placeholder classes.

**Still on a placeholder gradient (no photo exists for these specific
subjects in the media-prompts doc):**
- Projects page (9 of 15 cards): Jesse Kay Hospital · Ruai Family Hospital ·
  Halisi Family Hospital, Kitengela · Ruai Mega Mall · Kajiado Law Courts ·
  Biodeal Industries · Sycamore Court, Ruaka · Khamakis Fewa Palace · Villa
  Platform Elevators — only 6 of the 15 curated projects had a "Project
  Re-Shoot" prompt commissioned; these 9 didn't.
- Home's "Trusted By" carousel (3 client names) — no client-logo assets were
  ever specified in the media-prompts doc for these.
- Both `/resources` article cards — no article photography was ever
  specified.
- Contact page's map — `.ph-map` is a deliberate static design (grid +
  vignette + a real pin at the confirmed coordinates), not a pending photo
  asset; it isn't meant to become a photo.

**Real assets present in `public/images/` but currently unused by any
page** — Product — Freight Elevators.jpg, Dumbwaiters.jpg, Car Lifts.jpg,
Goods Hoist.jpg, Villa Platform Elevators.jpg, and Video — Escalator Ambient
Loop.mp4 — solely because the Products and Industries pages those assets are
slotted for (per the media-prompts checklist) don't exist yet. See **Missing
pages** below; once those pages are built, these assets drop in under their
existing filenames with no regeneration needed.

`Logo — High-Resolution Recreation.png` correctly remains unused — it's an
AI-recreation and the real client logo (`konza-logo-hires.jpg`) is used
everywhere, per the non-negotiable against regenerating the logo.

## Missing pages — the most consequential open item

**`/products` and `/industries` were never built.** They're 2 of the 10 pages
in the approved IA (`KONZA_SPEC.md` §5), each with a full content spec in §6,
and this audit found live nav/footer/home-page links pointing at both (now
removed — see Summary). No session in this repo's history (Sessions 2–8) built
either page; this isn't a regression to fix by re-adding a link, it's
unbuilt scope. 5 real product photos and 1 ambient video already sit ready
in `public/images/` for exactly this. Recommend a dedicated future session
build both pages per §6's spec before treating the site as feature-complete
against the original IA — this is a bigger gap than any image-asset
placeholder on this list.

## Design-system consistency

- **Header/footer:** identical on all 10 routes (shared `Header`/`Footer`
  components) — sticky nav with focus-trapped mobile drawer, footer social
  row with real vs. "coming soon" (dimmed, non-interactive `<span>`, not a
  dead link) states for Facebook/Instagram/LinkedIn/WhatsApp.
- **Color tokens:** see Summary item 2 — 2 real drift/duplication issues
  found and fixed; nothing else outside `tokens.css` is unjustified.
- **Typography:** grepped every `font-serif`/Playfair usage site-wide (47
  occurrences) — confined to H1/H2/H3 headline-tier elements, testimonial/
  pull-quote blockquotes, stat numbers, and card-title-tier text (project
  names, service names, team names). Zero uses on body copy, buttons, nav,
  or form labels — matches §4's "headline-only, no exceptions" rule.

## Accessibility (axe-core, all 10 routes, re-run this session)

Same single violation class as Session 8, unchanged: `color-contrast` on
`--red`-background buttons and `--red` eyebrow/label text (3.57–3.92:1,
short of the 4.5:1 AA minimum), 32 violation instances across all 10 routes,
100% traceable to the one locked `--red` token. Not fixed here for the same
reason Session 8 left it — `--red` is this project's locked palette token
per `CLAUDE.md`, and changing it site-wide is a design decision for
Konza/NAVAC, not one a build session makes unilaterally. No new violation
classes were introduced by Sessions 6–8's work.

## Mobile (390px), re-run this session

Zero horizontal overflow and zero sub-44px tap targets on any of the 10
routes (`scripts/audit-mobile.mjs`, re-run against this session's build).

## Build health

```
npm run build     → clean, 0 errors
npm run lint       → clean, 0 errors
npx tsc --noEmit   → clean, 0 errors
```

## Open `[CONFIRM]` items — still need a real answer from Konza

Carried forward from `docs/KONZA_SPEC.md` §10, checked against the current
code state:

1. **Business hours** — ✅ **Resolved.** `Monday–Friday, 9:00AM–5:00PM`,
   confirmed by direct client instruction (2026-08-30, logged in
   `CLAUDE.md`'s Decisions Log). Live everywhere hours are shown.
2. **General contact email vs. `david@konzaelevators.co.ke`** — ⚠️ **Live as
   `info@konzaelevators.co.ke`, but unlike item 1 this change has no matching
   Decisions Log entry confirming it was client-directed** — it was changed
   in the same commit as a rewritten brand tagline described as
   "client-provided," which suggests it likely was, but this audit could not
   independently verify it. **Recommend Konza explicitly confirm** `info@`
   is live and monitored before launch; if not yet set up, this is the one
   item most likely to silently lose an inbound lead.
3. **Delfar distributor renewal status** — still expired (Jan 10 2026),
   still correctly stated only in past-tense project context on `/about`,
   never as a present-tense "authorized distributor" claim.
4. **Denis Kitili's title** — still unresolved; still correctly shown with
   no title claim on `/about` rather than guessing between "Sales Technical
   Director" and "Electrical Supervisor."
5. **"Apricot Property Solutions"** — still excluded from `/projects`, per
   spec, pending a client-supplied source.
6. **Which phone number carries the WhatsApp Business badge** — unresolved;
   the build uses `+254 726 053 238` for every WhatsApp link/panel site-wide
   (`COMPANY_INFO.whatsappNumber`), consistent at least.
7. **Final curated 12–16 project list** — the build ships 15, curated per
   §2's recommendation; still pending Konza's final sign-off on which
   projects to feature (some may be commercially sensitive or superseded).
8. **Refreshed, current-address Fuji distributor letter** — not needed for
   anything currently on the live site (no letter is embedded/linked), but
   still recommended before any future "download our credentials" feature.

## Definition-of-done checklist

- [x] `docs/PRE-LAUNCH-AUDIT.md` exists and is accurate — every claim above
      backed by a check run this session.
- [x] Zero build/lint/typecheck errors.
- [x] Zero broken internal links (found 2 sitewide, fixed, re-verified by
      crawling every route's rendered `<a href>`).
- [x] Zero stray hardcoded design-token values outside the token files
      (found 2 real issues, fixed; remainder justified and documented above).
- [x] Full list of remaining `[CONFIRM]` items, separated from what's done.

---

## Overall launch-readiness (for Konza/NAVAC)

**Fully done:** all 10 built pages render cleanly at 1440px and 390px with
zero console/page errors, zero broken links, zero build/lint/type errors,
and content that traces to real source material with no fabricated claims,
pricing, or certifications. Two real sitewide bugs (dead nav links to
unbuilt pages; a duplicated, un-tokenized hex value) were found and fixed
this session.

**Placeholder-pending on images:** 9 of 15 project cards and both resource
article cards use a styled placeholder gradient, never a broken image — real
photography for these specific subjects was never commissioned in
`KONZA_MEDIA_PROMPTS.md`.

**Biggest open item, pending a build decision (not a client answer):**
`/products` and `/industries` — 2 of the 10 approved pages — were never
built. 5 real product photos and 1 video already exist in `public/images/`
waiting for them.

**Pending a client answer:** business hours are confirmed and live; the
general contact email is live as `info@konzaelevators.co.ke` but should get
an explicit client confirmation since (unlike hours) that change wasn't
logged as client-directed; Delfar's renewal status, Denis Kitili's title,
Apricot Property Solutions, the WhatsApp badge number, and the final project
list remain open per `KONZA_SPEC.md` §10.

Work stops here pending client review.
