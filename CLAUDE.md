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
- Domain mapping to konzaelevators.co.ke (the real production domain — see
  the 2026-08-31 deploy-session entry below for the current state of
  konza.navac.co.ke, the temporary preview mapping, which IS done).
These are a separate future prompt the client will provide explicitly.

## Deploy target (live as of the entry below)
- Project: `konza-elevators` (Firebase project ID), Blaze plan.
- Firestore: Native mode, `europe-west1` (Belgium) — chosen per explicit
  client instruction; no African GCP region was generally available at
  provisioning time other than `africa-south1` (Johannesburg), which was
  visible in the region picker but not selected.
- Hosting: Firebase App Hosting, tracking `main`.
- `src/lib/firebase-admin.ts` authenticates via Application Default
  Credentials on App Hosting (no service-account key) — see that file's own
  comments. `firestore.rules` denies all direct client reads/writes; every
  write goes through the Admin SDK server-side.
- `src/middleware.ts` sets `X-Robots-Tag: noindex, nofollow` on every
  request whose Host header isn't `konzaelevators.co.ke` (or `www.` of it) —
  this is what keeps `konza.navac.co.ke` and the Firebase-provided URL out
  of search indexes while `SITE_URL`/`metadataBase` still correctly point at
  the real production domain that isn't live here yet.

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
- **2026-08-30 — Session 7, Get a Quote & Contact Us — Lead schema followed
  the already-established spec fields, not the session-brief's own draft
  schema.** The build brief's suggested `Lead` type (`propertyType`,
  `status`-only, no `page`) conflicts with the exact schema docs/KONZA_SPEC.md
  §7 already specifies (`name, phone, email, projectType, buildingType,
  floorCount, timeline, message, source (form|whatsapp), page, createdAt`) —
  a schema an earlier session had already encoded verbatim in
  `src/types/content.ts` (unused until now). Per CLAUDE.md's non-negotiable
  that facts and structures come from the spec, `src/types/lead.ts` uses the
  spec's real field names (`buildingType`/`page`, not the brief's
  `propertyType`/`source:'quote'|'contact'`) and only adds an internal
  `status` field for future CRM triage, since that's additive operational
  metadata, not a business fact. The duplicate `Lead`/`LeadSource` in
  `content.ts` was removed (nothing imported it yet). `.env.example` already
  anticipated this exact build (unset `FIREBASE_ADMIN_*` vars and a
  `[CONFIRM]`-flagged `SALES_NOTIFICATION_EMAIL`, added in an earlier
  session), confirming this was the intended shape rather than a deviation.
  **Split "use server" file:** `submitQuoteLead`/`submitContactLead` live in
  `src/app/actions/submit-lead.ts`; the shared `initialSubmitLeadState`
  constant had to move to `src/lib/lead-form-state.ts` because Next.js
  rejects a non-async-function export from a `"use server"` file (build
  failed on this exact line before the fix — logged here so a future session
  doesn't reintroduce it). **Graceful-degradation write path:** with
  `firebase-admin` unconfigured (true in every environment until Konza's
  Firestore project exists), `submit-lead.ts` logs the full lead payload and
  still returns success to the visitor, so the form's real UX is verifiable
  pre-launch; once real admin credentials are set, the same code path
  attempts a real write and surfaces a genuine failure to the visitor instead
  of silently swallowing it. Email notification is a clearly-marked
  `// TODO` stub (`src/lib/notify-lead-email.ts`) that never blocks or fails
  the lead write. **Contact form is deliberately simpler** (name, phone,
  optional email, message — no project segmentation per §6); since the
  shared `Lead` type still requires `buildingType`/`projectType`/`timeline`,
  contact-sourced leads get honest internal placeholders ("Not specified" /
  "General Inquiry"), not fabricated answers. **No invented turnaround
  time:** KONZA_SPEC.md states no SLA for how fast a quote request gets a
  response, so the hero and success copy describe the real next step (a
  phone/WhatsApp follow-up) instead of a fabricated "24 hours" promise.
  **WhatsApp, not buried:** built a new inline, always-visible
  `WhatsAppInline` component (`src/components/ui/WhatsAppInline.tsx`) for
  both pages, since the existing floating `WhatsAppWidget` is hidden below
  900px width and so isn't a mobile-visible option on its own — both inline
  cards keep the non-negotiable in-page-panel-first pattern (message
  editable, only the panel's own Send button opens `wa.me`). Real, verbatim
  testimonials from §2 (Sanjay Shah, Pastor Jimmy Macharia) reinforce trust
  beside the Quote form. Contact page's map is a static `.ph-map` placeholder
  (new class in `tokens.css`, grid pattern, no iframe) with a working
  "Get Directions" link to a Google Maps search on the real confirmed
  address — no API key needed, never a silently-broken embed. Business hours
  render the exact `[CONFIRM]` fallback string from `lib/constants.ts`, not
  a guessed range. **Verification:** Playwright at 1440px/390px on both
  pages, full scroll-through screenshots, zero console/page errors;
  functional test of both forms confirmed client-side validation blocks an
  empty submit (inline errors appear, no server round-trip) and a valid
  submit reaches the real success state end-to-end through the actual server
  action (not mocked) via the graceful-degradation path, with server logs
  confirming the exact Lead payload shape. Confirmed phone fields use
  `type="tel" inputmode="tel"` on both pages and both WhatsApp links resolve
  to the real number in `lib/constants.ts`. `npm run build`, `tsc --noEmit`
  and `eslint` all clean.
- **2026-08-30 — Session 7 follow-up — Business hours `[CONFIRM]` resolved by
  direct instruction; a flex-shrink bug silently collapsed the Contact map.**
  `COMPANY_INFO.hours` in `lib/constants.ts` was the honest "to be confirmed
  by Konza" placeholder docs/KONZA_SPEC.md required while unresolved. Asked
  explicitly whether Konza had actually confirmed real hours before
  overwriting it (the spec flags this exact field as contradictory between
  the old site's header and footer) — confirmed by direct instruction, so it
  now reads "Monday–Friday, 9:00AM–5:00PM" as a real fact, styled as a normal
  labeled field rather than the italic placeholder treatment. Real office
  coordinates (-1.3188588346016903, 36.83547029202306) were also supplied and
  added to `COMPANY_INFO.coordinates`; the Contact page's "Get Directions"
  link now points at those coordinates instead of a text-address search, and
  the static `.ph-map` placeholder got a proper red `MapPinIcon` (new, in
  `ContactIcons.tsx`) labeled "Konza Elevators", plus a radial-vignette layer
  so it reads as an intentional map rather than a flat grid.
  **Testimonials removed from the Quote page's WhatsApp sidebar** (the
  session's own build brief had put them there, but they read as
  out-of-place next to a WhatsApp panel) — replaced with a same-component
  "Why WhatsApp" / "What to Expect" filler section (`WhatsAppInline.tsx`,
  `ContactForm.tsx`) so the WhatsApp card and the form/map stack can match
  height without dead space, and the floating `WhatsAppWidget` now hides
  itself on `/quote` and `/contact` (`usePathname` check) since both pages
  already carry their own always-visible WhatsApp panel — confirmed via
  Playwright that the floating bubble is gone on those two pages but still
  renders everywhere else.
  **Real bug hit and fixed while wiring up the height-matching:** giving
  `WhatsAppInline` an unconditional `h-full` (added for the Quote page, where
  it's the sole sidebar card) broke the Contact page, where the same
  component is one of three stacked siblings (office card, map, WhatsApp).
  Once Contact's own form column also got taller (from adding its own
  "What to Expect" filler) and the grid stretched both columns to match, the
  WhatsApp card's `h-full` tried to consume the *entire* stretched column for
  itself, and flex-shrink's default `min-height:auto` behavior sacrificed the
  map (a replaced-like aspect-ratio box with no text content forcing a
  floor) to make room — collapsing it from ~325px to ~50px and clipping the
  pin out of view entirely, while the office and WhatsApp cards barely
  shrank. This was invisible from reading the JSX and only caught by
  rendering and measuring actual computed heights — exactly the failure mode
  this file's Verification standard exists to catch. Fixed by making
  `h-full` opt-in via the existing `className` prop instead of hardcoded, so
  a shared component's sizing behavior can't silently break a different page
  reusing it. Re-verified with Playwright (fresh dev server, full rebuild)
  that the map, pin, and both sidebar cards render at the correct height on
  both pages at 1440px and 390px with zero console/page errors.
- **2026-08-30 — Real image/video assets landed on `main` mid-build; merged
  in and wired up everywhere a filename maps exactly.** The client uploaded
  the complete asset set from `docs/KONZA_MEDIA_PROMPTS.md` (28 photos + 2
  videos + a bonus logo file) directly to `main`'s `public/images/` as two
  plain commits, bypassing this branch. Fetched and merged `origin/main`
  (a clean, conflict-free merge — main's new commits only touched binary
  assets, this branch's only touched code) rather than losing that content,
  then replaced `.ph-*` placeholders with real `next/image` usage wherever
  an asset's filename exactly named an existing page's slot: Home (hero
  background, product/project carousel slides, all 6 featured-project
  cards, all 4 industry tiles, the compliance-band divider, and the Lift
  Shaft Cutaway video replacing the hand-drawn SVG in "How It Works"),
  Projects (`ProjectsFilterGrid` now honors `project.image` — already
  populated for 6 of 15 projects in `projects-data.ts` from an earlier
  session, just never rendered until now), About (Team At Work + Workshop
  Bench photos), Maintenance (compliance band + Technician Inspection
  photo), Contact (office exterior photo as the hero background), and a
  sitewide OG image + `metadataBase` on the root layout. New
  `src/lib/images.ts` centralizes the filename-to-path mapping so no path
  is ever hand-typed twice. Built `HeroBackground` (crossfading hero photo
  rotation) and `LiftShaftVideo` (video with a graceful fallback to the
  original SVG animation on load error, per this file's fail-safe mandate)
  as the two new pieces of real functionality this required.
  **Two assets deliberately left unused, not silently dropped:**
  `Logo — High-Resolution Recreation.png` is an AI-recreated mark (the
  media-prompts doc's own prompt #29 admits as much) — this file's
  non-negotiable against regenerating the logo means branding still uses
  the real `konza-logo-hires.jpg`, not this file, regardless of it now
  being present in the repo. `Video — Escalator Ambient Loop.mp4` is slotted
  for Industries/Products pages that don't exist yet in this build (only
  linked to from Home's preview tiles) — left unreferenced rather than
  forcing it into an unrelated page; worth revisiting once those pages are
  built. Verified with Playwright across Home (1440/390), Projects, About,
  Maintenance and Contact: zero console/page errors and zero failed image
  requests (checked via response-status monitoring, not just visual
  inspection). `npm run build`, `tsc --noEmit` and `eslint` all clean.
- **2026-08-30 — Session 8, SEO/Structured Data/Accessibility/Mobile audit —
  found and fixed a production-only bug that broke every real photo
  sitewide, invisible in every prior session's `next dev` verification.**
  While instrumenting the mobile-console-error check, `/_next/image`
  requests for every real photo (all named with an em dash per
  `KONZA_MEDIA_PROMPTS.md`, e.g. `Hero — Vertical City Nairobi.jpg`) returned
  400 under `next start` (production) while working fine under `next dev` —
  exactly the "looks right in dev, broken on render" failure class this
  file's Verification standard exists to catch, except this one only shows
  up in a production build, which no prior session's Playwright pass ever
  ran against. Root-caused by patching Next's own `image-optimizer.js` with
  a temporary debug log (reverted after diagnosis): the optimizer's internal
  self-fetch for local images was returning Next's own HTML error page
  instead of the file's bytes, and `detectContentType()` correctly rejected
  it. Isolated the trigger to non-ASCII filenames by testing an ASCII
  control file (`public/brand/konza-logo-hires.jpg`, which optimized fine)
  against the em-dash-named files (which all failed identically) — a
  confirmed Next.js 15.5.24 bug, not a config or asset problem. Renaming the
  real client-delivered asset files was ruled out (breaks the
  exact-filename-match non-negotiable), so `next.config.ts` now sets
  `images.unoptimized: true` to bypass the broken optimizer entirely,
  restoring every real photo site-wide (verified: zero failed image
  requests across Home/About/Projects/Maintenance/Contact in a production
  build specifically, not dev). **Trade-off, flagged for Session 9 per this
  session's brief:** this also disables automatic resizing/WebP conversion/
  responsive `srcset` for every image, and Lighthouse (mobile, home page,
  post-fix) confirms the cost is real — Performance 63, LCP 21.5s, page
  weight 7.3MB (several full-resolution 600–900KB JPEGs). Session 9 should
  resolve this properly rather than leaving `unoptimized: true` permanent:
  either `patch-package` the Next.js fix, or get client sign-off to rename
  the real asset files to ASCII-safe names (updating `images.ts` and
  `projects-data.ts` to match) so automatic optimization can be re-enabled.
  **SEO:** every route now has a unique 150–160 char meta description and a
  canonical `alternates` entry; added `app/sitemap.ts` (only the routes that
  actually exist as pages — `NAV_LINKS` in `constants.ts` also lists
  `/products` and `/industries`, which aren't built yet, so they're excluded)
  and `app/robots.ts`; added per-route `opengraph-image.tsx` using
  `ImageResponse`. **Real bug caught by rendering, not assumed from the
  brief:** the brief's plan to composite each page's title over the shared
  `OG — Social Share Card.jpg` background broke on the first render — that
  asset already has "Konza Elevators / Vertical Transportation for
  Nairobi's Skyline" baked into it as real pixels (it was composed as
  Home's own card, not a blank background), so every other route's title
  rendered as illegible double-exposed text on top of it. Fixed by reusing
  the asset untouched for Home (where its baked text already matches
  exactly) and, for every other route, drawing only the photo's text-free
  top ~460px (scaled via pure CSS positioning in the `ImageResponse` JSX, no
  new file) with that route's own title composited on a gradient overlay.
  **JSON-LD:** sitewide `LocalBusiness` in the root layout (address, geo,
  phones, hours — all already-confirmed facts, nothing `[CONFIRM]`ed filled
  in); `Product` entries on Home for the 4 carousel product lines (brand
  claim limited to Passenger Lifts, the only line the spec's Fuji catalog
  data actually covers); one `Review` for the Salome Chiira testimonial —
  the only one actually rendered on the page it's attached to, deliberately
  not all 3 real testimonials from the spec, since Google's review-markup
  guidance requires the markup to match what's visibly on that page, and no
  numeric rating was fabricated since none was ever stated. Validated by
  fetching the built pages and `json.loads`-ing every `<script
  type="application/ld+json">` block, not just asserting it's fine.
  **Accessibility:** installed `@axe-core/playwright`, audited all 10
  routes. First pass found the same near-1.0 contrast ratio on hero
  headings across every route — investigated rather than dismissed, and
  confirmed by screenshot (all legible, real bug ruled out) plus root cause:
  `.pre{opacity:0}` from the scroll-reveal fail-safe pattern was still
  mid-transition when axe's snapshot ran; re-scanning after the 600ms
  transition settles removed all of them, leaving one real, fixable class of
  violation (`bg-[#25D366]` WhatsApp buttons at 1.98:1 contrast, not part of
  the locked palette — darkened to `#075E54`, WhatsApp's own dark-teal brand
  color, 7.67:1) and one real, **not** fixed: white-on-`--red` CTA buttons
  and `--red`-on-white labels sitewide sit at 3.57–3.92:1, short of the 4.5:1
  AA minimum — left alone because `--red` is this file's locked palette
  token, and changing it site-wide is a design decision for Konza/NAVAC, not
  one this session makes unilaterally. 32 real serious violations remain,
  100% traceable to that one token; zero elsewhere. **Mobile (390px):** zero
  horizontal overflow on any route. Fixed real sub-44px tap targets (footer
  credit link, contact-page phone/email links, "Get Directions", the quote
  page's WhatsApp anchor, carousel dots via an invisible hit-slop pattern
  that doesn't change their visual 8px size, the header logo link) via
  `min-h-[44px]`/padding, never by touching the locked visual design.
  Caught and fixed a second real bug while doing this: the mobile nav
  drawer opened but had no focus trap at all — tabbing 15 times from an
  open drawer landed focus on a card in the page behind it (verified with a
  script comparing `checkVisibility()` against raw `getBoundingClientRect()`
  after first ruling out a false-positive class from closed `<details>`
  footer panels, which report non-zero layout geometry via
  `content-visibility: hidden` despite being untappable). Fixed with a real
  trap (`Header.tsx`): focus moves into the drawer on open, Tab/Shift+Tab
  cycles within it, Escape closes and returns focus to the toggle button,
  `role="dialog"`/`aria-modal="true"` added. Re-verified all of the above
  with fresh Playwright scripts after every fix, not just re-reading the
  diff. `npm run build`, `tsc --noEmit` and `eslint` all clean throughout.
  Two small, reusable audit scripts kept in `scripts/` (`audit-axe.mjs`,
  `audit-mobile.mjs`) for future sessions; every one-off diagnostic script
  used to chase the image bug and the false positives was deleted.
- **2026-08-31 — Session 9, Pre-Launch Audit — found and fixed a real
  sitewide broken-link bug invisible from reading any single page's code.**
  PR #8 (Session 8) had already merged into `main`; branch reset to
  `origin/main` per the house rule, no unmerged work lost. Rendered all 10
  built routes with Playwright against a **production** build (`next build`
  + `next start`, matching the lesson from Session 8's dev-vs-prod image
  bug) at 1440px/390px, full scroll-through, console/network monitoring.
  Found: the header nav, footer nav, and all 4 Home industry tiles linked to
  `/products` and `/industries` — 2 of the 10 approved IA pages
  (`KONZA_SPEC.md` §5) that no session had ever actually built — so every
  single page load fired a real 404 (both a live dead link and an
  RSC-prefetch console error), sitewide, since whichever session first added
  those nav entries. `sitemap.ts` already excluded both routes (Session 8
  knew they didn't exist) but nothing had propagated that to `NAV_LINKS`,
  which both `Header`/`Footer` and the sitemap's own stale comment still
  assumed included them. Fixed by removing both from `NAV_LINKS`
  (`src/lib/constants.ts`) and un-linking the Home industry tiles (plain
  `<div>`s now, not dead `<Link>`s) rather than inventing two pages under
  audit-session time pressure — 5 real product photos and 1 ambient video
  already sit in `public/images/` ready for whenever `/products` and
  `/industries` do get built, flagged as this audit's single biggest open
  item, bigger than any image-placeholder gap. Also grepped every hex color
  outside `tokens.css` sitewide: found and fixed a duplicated, un-tokenized
  dark-gradient triplet (`#1d3a5f`/`#0d2036`/`#081422`) copy-pasted across 7
  inner-page hero sections (centralized into a new `.inner-hero` class built
  from the real locked navy tokens) and a one-character `--red` color drift
  plus an invented near-`--slate-dark` value in the generated OG images
  (`src/lib/og-image.tsx`) — both corrected to the exact locked hex.
  Re-ran Session 8's `audit-axe.mjs`/`audit-mobile.mjs` against all 10
  routes: zero new violations, same single pre-existing `--red`-contrast
  class as before (still not fixed, still a Konza/NAVAC design call per
  Session 8's reasoning, not this session's to make). Flagged, did not
  revert: Home's rendered hero copy no longer matches `KONZA_SPEC.md` §6's
  literal locked text — git blame shows an earlier session changed it "per
  client direction" but never logged that decision here the way the
  business-hours resolution below it was, so this audit could not
  independently confirm it and left it as-is with a note asking Konza/NAVAC
  to confirm. Also flagged, not changed: `COMPANY_INFO.email` reads
  `info@konzaelevators.co.ke` (changed from `david@konzaelevators.co.ke` in
  an earlier session's commit, bundled with a "client-provided" tagline
  rewrite but without its own decision-log entry) — plausibly resolved
  correctly, but recommended for an explicit client confirmation before
  launch since, unlike hours, there's no dated record of it being
  client-directed. Full findings, the complete real-vs-placeholder image
  inventory, and all remaining `[CONFIRM]` items are in the deliverable,
  `docs/PRE-LAUNCH-AUDIT.md`. `npm run build`, `npm run lint` and
  `npx tsc --noEmit` all clean; zero console/page/network errors and zero
  horizontal overflow or sub-44px tap targets across all 10 routes at both
  breakpoints after the fixes.
- **2026-08-31 — Site-wide font swap, by explicit client instruction
  (reference PDF), superseding the "design system is FINAL" non-negotiable
  for typography only.** The client supplied a reference screenshot (a
  "tastemaker" landing page) whose signature look is bold, geometric
  sans-serif headings sitewide, with a light, elegant italic serif reserved
  for one decorative accent (its wordmark). `--font-sans` swapped from Inter
  to **Geist** (`next/font/google`, matches the reference's grotesk weight
  and letterforms closely, and is a natural fit given the reference itself
  is a `*.vercel.app` deploy) and `--font-serif` from Playfair Display to
  **Instrument Serif** (the closest Google Fonts match to the reference's
  thin italic wordmark treatment) — both wired only in `src/app/layout.tsx`
  and `src/styles/tokens.css`, so no page/component imports a font name
  directly. **The larger, non-mechanical part of this change:** the prior
  design system used serif-bold (`font-serif font-bold`) as the actual
  heading font sitewide — h1/h2/h3s, stat numbers, card titles — not as a
  rare accent, so a pure token-value swap alone would have re-skinned every
  heading in Instrument Serif's single light weight instead of matching the
  reference's bold sans headings. Reading the reference precisely — sans for
  every heading, italic serif for exactly one decorative role — meant
  reclassifying each of the ~45 `font-serif` call sites across every page
  and shared component: all `font-bold`/`font-light` heading and stat-number
  instances (including the accordion's serif "+"/"×" toggle glyph) were
  changed to `font-sans`, while the single true italic use — the Home page's
  Salome Chiira pull-quote (`src/app/page.tsx`, `italic` with `font-normal`,
  the only such combination sitewide) — was deliberately left on
  `font-serif` so Instrument Serif's italic renders there, the one place the
  design already called for an italic serif treatment. No color, spacing, or
  layout token touched. Verified with Playwright against a **production**
  build (`next build` + `next start`, per this file's own dev-vs-prod
  lesson) across all 8 built routes at 1440px/390px: computed
  `getComputedStyle(...).fontFamily` confirmed `Geist` is active on every
  route's `<h1>` and `<body>`, full-page screenshots read correctly at both
  widths, zero console/page errors. `npm run build`, `npx tsc --noEmit` and
  `npm run lint` all clean.
- **2026-08-31 — Session 5, Products & Industries — the two long-missing IA
  pages, built specifically to give the 6 real-but-unused assets a home.**
  `/products` (`src/app/products/page.tsx`): all 9 real products from
  KONZA_SPEC.md §2, each with a real photo — added the 5 that had no page to
  render on (`Product — Car Lifts/Dumbwaiters/Freight Elevators/Goods
  Hoist/Villa Platform Elevators.jpg`) to `src/lib/images.ts` alongside the 4
  already used on Home. The Fuji FJK450–1150 passenger-lift series is
  presented as a definition list of real range-level facts (model names,
  450kg–1,150kg+ capacity, 1.0–3.0 m/s speed) — deliberately not broken out
  per-model, since §2 only gives a series-wide range, not a per-model
  breakdown; inventing one would violate this file's non-negotiable against
  fabricated specs. A Home Lifts vs. Villa Platform Elevators comparison
  section was built (both real residential product lines, genuinely
  differentiated by real facts — indoor vs. exterior, steel vs. bronze
  finish) rather than forcing a comparison onto the six other products,
  which don't have differentiating detail in source material.
  `/industries` (`src/app/industries/page.tsx`, titled "Industries" in
  nav/metadata per direct instruction, not "Industries We Serve"): expands
  Home's 4 tiles into full sections, each importing and filtering
  `PROJECTS` from `src/lib/projects-data.ts` (Session 3) rather than
  retyping any project name/detail — confirmed by grep that `projects-data`
  is imported, not duplicated. The 4 industry tiles don't map 1:1 onto that
  file's 5 sectors (Hospital & Institutional merges `healthcare` +
  `institutional`; Commercial & Office and Retail & Escalators both draw
  from the single `commercial` sector) — split by matching each project's
  real name against what it actually is (Junction Trade Centre → office
  tower; Village Market/Ruai Mega Mall → retail malls), documented inline,
  never by re-tagging or duplicating the source data. Also fixed two now-stale
  artifacts of the pages' prior absence: `NAV_LINKS`/`sitemap.ts` (both had
  comments explaining the intentional omission — now removed along with the
  omission itself) and Home's 4 industry tiles, which a Session 9 comment had
  explicitly left as non-`<Link>` `<div>`s "re-wrap in Link once it exists" —
  now real links to `/industries`.
  **Real bug caught by the fail-safe pattern, not by reading the code:**
  wired `Video — Escalator Ambient Loop.mp4` as an ambient background on the
  Retail & Escalators section (`src/components/ui/AmbientSectionVideo.tsx`,
  new — mirrors `HeroBackground`'s reduced-motion check and
  `LiftShaftVideo`'s image-fallback-on-error pattern). The video throws a
  real `error` event in Chromium — code 4,
  `DEMUXER_ERROR_NO_SUPPORTED_STREAMS` — despite being a structurally valid
  MP4 container per `file`; some encoding defect from whichever tool
  generated it, invisible from the file existing and opening in a container
  inspector. Never investigated before now because no page had ever tried to
  play it. The fail-safe catches it correctly and every visitor sees the
  real static photo instead of a blank section — flagged here rather than
  silently left for a future session to rediscover; the file should be
  re-exported before the motion effect itself is considered live. On a
  ghost/secondary CTA: found mid-build that this codebase's `Button
  variant="ghost"` (white-on-transparent) has never been used on a light
  section anywhere else in the site — using it on this page's `--paper`
  sections would have produced a white-bordered, near-invisible button, so
  secondary CTAs on light sections use a plain text link ("See All Projects
  →", the same pattern Home already uses for "View all 50 →") instead of
  forcing the dark-only ghost variant to do something it was never styled
  for. **Verified** with Playwright against a **production** build (`next
  build` + `next start`) at 1440px/390px on both pages: full scroll-through
  screenshots, zero console/page/network errors, zero horizontal overflow
  (`scrollWidth === clientWidth`, checked explicitly since technical
  spec content is the most common overflow source), and the Fuji spec list
  independently screenshotted at 390px to confirm it stacks cleanly rather
  than squeezing a table. `npm run build`, `npx tsc --noEmit` and `npm run
  lint` all clean.
