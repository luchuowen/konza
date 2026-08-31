# Konza Elevators — Missing Media Audit & Nano Banana Pro Prompts

## Audit summary

Cross-checked every `Image`/`IMAGES.*`/`.ph-*` reference in `src/` against
`public/images/` and `docs/KONZA_MEDIA_PROMPTS.md`'s 28-asset checklist (all
28 of which already exist and are wired up — confirmed, not missing).
Everything below is a real gap found live in the code:

| # | Filename to generate | Slot | Sector/context | Aspect | Size |
|---|---|---|---|---|---|
| 1 | `Project — Jesse Kay Hospital Roysambu.jpg` | `/projects` grid card | Healthcare | 4:3 | 1200×896 |
| 2 | `Project — Ruai Family Hospital.jpg` | `/projects` grid card | Healthcare | 4:3 | 1200×896 |
| 3 | `Project — Halisi Family Hospital Kitengela.jpg` | `/projects` grid card | Healthcare | 4:3 | 1200×896 |
| 4 | `Project — Ruai Mega Mall.jpg` | `/projects` grid card | Commercial | 4:3 | 1200×896 |
| 5 | `Project — Kajiado Law Courts.jpg` | `/projects` grid card | Institutional | 4:3 | 1200×896 |
| 6 | `Project — Biodeal Industries Mombasa Road.jpg` | `/projects` grid card | Industrial | 4:3 | 1200×896 |
| 7 | `Project — Sycamore Court Ruaka.jpg` | `/projects` grid card | Residential | 4:3 | 1200×896 |
| 8 | `Project — Khamakis Fewa Palace.jpg` | `/projects` grid card | Residential | 4:3 | 1200×896 |
| 9 | `Project — Villa Platform Elevators.jpg` | `/projects` grid card | Residential | 4:3 | 1200×896 |
| 10 | `Trust — Harvest Family Church Ministries.jpg` | Home "Trusted By" carousel | Institutional | 4:3 | 1200×896 |
| 11 | `Resource — How to Choose the Right Elevator for Your Building.jpg` | `/resources` article card + article hero | Editorial | 4:3 | 1200×896 |
| 12 | `Resource — Top Construction Trends 2026.jpg` | `/resources` article card + article hero | Editorial | 4:3 | 1200×896 |

**9 of `/projects`' 15 curated cards** (`src/lib/projects-data.ts`) have no
`image` field and render the `.ph-projects` gradient placeholder — items
1–9 above cover all of them.

**Home's "Trusted By" carousel** (`TRUST_SLIDES` in `src/app/page.tsx`) has
three real client names and zero images, so it always shows the `.ph-trust`
placeholder. Two of the three don't need new generation: **Radiant Group of
Hospitals** and **Greenhills Investment Ltd** are the real organizations
behind two projects that already have real photos in `public/images/`
(`Project — Radiant Hospital.jpg` and `Project — Village Market.jpg` per
`docs/KONZA_SPEC.md`'s testimonial attributions — Sanjay Shah is Director of
Greenhills Investment Ltd, the developer behind Village Market) — wiring
those existing files into `TRUST_SLIDES` is a code fix, not a missing asset.
Only **Harvest Family Church Ministries** (item 10 above) has no matching
project entry or photo anywhere in the repo and needs new generation.

**Both `/resources` article cards** (`src/lib/resources-data.ts`) have no
`image` field on the `Article` type at all and always render `.ph-projects`
— items 11–12 above cover both. (Adding the `image` field to the `Article`
type and wiring it into the card/hero is a small code change, not part of
this asset list.)

**Not included below, on purpose:**
- **Favicon and a transparent-background logo PNG** are still missing
  (flagged since Session 0) but are logo derivatives — CLAUDE.md's
  non-negotiable against regenerating, redrawing, or AI-generating the logo
  applies to these too. They need a real file from the client, not a Nano
  Banana Pro prompt.
- **Contact page's map** (`.ph-map`) is a deliberate static design (grid +
  vignette + a real pin at the confirmed coordinates), not a pending photo.
- **`/products` and `/industries`** aren't built yet, but every image their
  spec calls for already exists and is unused in `public/images/`
  (`Product — Freight Elevators.jpg`, `Dumbwaiters.jpg`, `Car Lifts.jpg`,
  `Goods Hoist.jpg`, `Villa Platform Elevators.jpg`, `Video — Escalator
  Ambient Loop.mp4`) — nothing new to generate once those pages are built.

Every prompt below generates at Nano Banana Pro's highest available
resolution (up to 4K) and should be downscaled/exported to the exact pixel
size given above (1200×896, matching every existing 4:3 asset in
`public/images/`) before saving. Style, lighting and colour language match
`docs/KONZA_MEDIA_PROMPTS.md` exactly (deep navy `#0A1628` shadow grading,
rationed crimson `#E8453D` accents only where the equivalent existing prompt
uses one, no people/text/logos/watermarks unless noted). None of the 9
project photos or the 1 trust photo below has a real reference photograph on
file in this repo, so — following the same established pattern already used
in this codebase for `Contact — Nairobi Office Exterior.jpg` — each is
written as honest, generic, representative documentary photography for its
real sector and equipment context, not a claimed likeness of the specific
named building.

---

## 1. `Project — Jesse Kay Hospital Roysambu.jpg`

```
Create a photorealistic, documentary-style architectural photograph titled "Project — Jesse Kay Hospital Roysambu." This is generic, representative photography for a real but unphotographed Konza Elevators installation — a private hospital in Roysambu, Nairobi, fitted with 2 Delfar 5-stop hospital elevators — not a claimed likeness of the actual building. Subject: a clean, modern Kenyan private-hospital lift lobby, photographed straight-on at eye level, with a pair of stainless-steel hospital bed-elevator doors centred in frame, one door partially open revealing a warmly-lit car interior with handrails sized for hospital bed traffic. Composition: polished light-grey terrazzo floor, soft white ceiling downlighting, clean converging verticals, no people in frame. Style and colour: photorealistic documentary architectural photography, deep navy blue (#0A1628) reflected softly in the steel door surfaces, clean neutral-white highlights, no red accent. Lighting: bright, even, soft, no harsh shadows. Lens: 24mm, sharp focus corner to corner. No text, no signage, no logos, no watermark, no people. Generate at the highest available resolution (up to 4K) for downscaling to the final production size of 1200×896px. Output aspect ratio 4:3, JPG format. Save as "Project — Jesse Kay Hospital Roysambu.jpg".
```

## 2. `Project — Ruai Family Hospital.jpg`

```
Create a photorealistic, documentary-style architectural photograph titled "Project — Ruai Family Hospital." This is generic, representative photography for a real but unphotographed Konza Elevators installation — a private family hospital in Ruai, Nairobi, fitted with 3 Delfar 7-stop elevators — not a claimed likeness of the actual building. Subject: the exterior entrance of a mid-rise Kenyan private hospital building, photographed at a three-quarter angle in soft midday light — light-coloured plastered facade, a covered vehicle drop-off canopy, clear glass entrance doors, modest tropical landscaping. Composition: level architectural framing, sharp focus, minimal harsh shadow. Style and colour: photorealistic documentary architectural photography, a subtle deep navy blue (#0A1628) tone in the canopy's shaded underside, warm equatorial daylight on the upper facade, no red accent. Lens: 28mm, three-quarter perspective. No text, no signage, no logos, no watermark, no people. Generate at the highest available resolution (up to 4K) for downscaling to the final production size of 1200×896px. Output aspect ratio 4:3, JPG format. Save as "Project — Ruai Family Hospital.jpg".
```

## 3. `Project — Halisi Family Hospital Kitengela.jpg`

```
Create a photorealistic, documentary-style architectural photograph titled "Project — Halisi Family Hospital Kitengela." This is generic, representative photography for a real but unphotographed Konza Elevators installation — a private family hospital in Kitengela, a satellite town south of Nairobi — not a claimed likeness of the actual building. Subject: a bright, clean Kenyan hospital ground-floor lift lobby, photographed straight-on, with closed stainless-steel elevator doors centred in frame flanked by a simple wayfinding wall (blank, no readable signage) and a low waiting bench just visible at the frame edge. Composition: polished light stone floor, soft recessed ceiling lighting, level eye-height framing, no people. Style and colour: photorealistic documentary architectural photography, deep navy blue (#0A1628) softly present in the steel door reflections, clean bright neutral highlights, no red accent. Lighting: soft, even, clinical-but-warm. Lens: 24mm, sharp focus throughout. No text, no signage, no logos, no watermark, no people. Generate at the highest available resolution (up to 4K) for downscaling to the final production size of 1200×896px. Output aspect ratio 4:3, JPG format. Save as "Project — Halisi Family Hospital Kitengela.jpg".
```

## 4. `Project — Ruai Mega Mall.jpg`

```
Create a photorealistic, documentary-style interior photograph titled "Project — Ruai Mega Mall." This is generic, representative photography for a real but unphotographed Konza Elevators installation at a retail mall in Ruai, Nairobi — not a claimed likeness of the actual building. Subject: the bright ground-floor atrium of a modern Nairobi neighbourhood shopping mall, photographed from an elevated three-quarter vantage point looking down across an open retail concourse, with a stainless-steel-and-glass passenger elevator visible mid-ground beside a row of shopfronts (shopfronts left generically unbranded, no readable signage). Composition: a skylight or large glazed opening washes the space in natural daylight, clean architectural lines, no people. Style and colour: photorealistic documentary retail-architecture photography, a subtle deep navy blue (#0A1628) undertone in the architectural shadow lines, bright airy highlights, no red accent. Lens: 24mm, elevated perspective, sharp focus throughout. No text, no store signage or logos, no watermark, no people. Generate at the highest available resolution (up to 4K) for downscaling to the final production size of 1200×896px. Output aspect ratio 4:3, JPG format. Save as "Project — Ruai Mega Mall.jpg".
```

## 5. `Project — Kajiado Law Courts.jpg`

```
Create a photorealistic, documentary-style architectural photograph titled "Project — Kajiado Law Courts." This is generic, representative photography for a real but unphotographed Konza Elevators installation — a government courthouse in Kajiado, Kenya, fitted with 2 Fuji 5-stop elevators — not a claimed likeness of the actual building. Subject: the formal, civic exterior of a modern Kenyan government courthouse building, photographed at a three-quarter angle in clear midday light — light stone or plastered facade, symmetrical entrance steps, a covered portico, a flagpole silhouette at the frame edge (no visible flag design or emblem). Composition: level, formal architectural framing conveying institutional gravity, sharp focus, minimal landscaping. Style and colour: photorealistic documentary architectural photography, a subtle deep navy blue (#0A1628) tone in the portico's shaded underside, warm neutral daylight on the facade, no red accent. Lens: 28mm, three-quarter perspective. No text, no signage, no crests, no logos, no watermark, no people. Generate at the highest available resolution (up to 4K) for downscaling to the final production size of 1200×896px. Output aspect ratio 4:3, JPG format. Save as "Project — Kajiado Law Courts.jpg".
```

## 6. `Project — Biodeal Industries Mombasa Road.jpg`

```
Create a photorealistic, documentary-style architectural photograph titled "Project — Biodeal Industries Mombasa Road." This is generic, representative photography for a real but unphotographed Konza Elevators installation — an industrial facility on Mombasa Road, Nairobi's industrial corridor, fitted with 1 Fuji 7-stop passenger elevator and 1 Fuji 7-stop goods elevator — not a claimed likeness of the actual building. Subject: a heavy-duty industrial goods-elevator car, doors fully open, photographed straight-on from a warehouse loading-bay setting — reinforced steel walls with protective panel cladding, diamond-plate steel floor, visible heavy-duty door tracks. Composition: exposed structural beams and a concrete floor in the surrounding space, no people. Style and colour: photorealistic documentary industrial photography, bright even industrial lighting with a cool undertone, a subtle deep navy blue (#0A1628) shadow grade in the background depth, no red accent. Lens: 28mm, straight-on framing, sharp focus. No text, no logos, no watermark, no people. Generate at the highest available resolution (up to 4K) for downscaling to the final production size of 1200×896px. Output aspect ratio 4:3, JPG format. Save as "Project — Biodeal Industries Mombasa Road.jpg".
```

## 7. `Project — Sycamore Court Ruaka.jpg`

```
Create a photorealistic, documentary-style architectural photograph titled "Project — Sycamore Court Ruaka." This is generic, representative photography for a real but unphotographed Konza Elevators installation — a residential apartment development in Ruaka, Nairobi, fitted with a passenger lift — not a claimed likeness of the actual building. Subject: the entrance courtyard of a modern mid-rise Kenyan residential apartment building, photographed at a three-quarter angle in warm late-afternoon light — warm-toned plastered facade, glass balcony railings visible on upper floors, a landscaped entrance walkway with a hint of tropical planting. Composition: level architectural framing, welcoming residential mood, no people. Style and colour: photorealistic documentary architectural photography, warm equatorial light on the facade, a subtle deep navy blue (#0A1628) tone in the ground-floor shadow, no red accent. Lens: 28mm, three-quarter perspective, sharp focus. No text, no signage, no logos, no watermark, no people. Generate at the highest available resolution (up to 4K) for downscaling to the final production size of 1200×896px. Output aspect ratio 4:3, JPG format. Save as "Project — Sycamore Court Ruaka.jpg".
```

## 8. `Project — Khamakis Fewa Palace.jpg`

```
Create a photorealistic, documentary-style architectural photograph titled "Project — Khamakis Fewa Palace." This is generic, representative photography for a real but unphotographed Konza Elevators installation — a private upscale residential property in Kenya fitted with a passenger lift — not a claimed likeness of the actual building. Subject: the entrance facade of a large, upscale private Kenyan residence, photographed at a three-quarter angle in soft late-afternoon light — warm plastered walls, tall windows, a grand entrance stair, manicured tropical landscaping (a hint of palm planting at the frame edge). Composition: level architectural framing conveying quiet residential luxury, no people, no vehicles. Style and colour: photorealistic documentary architectural photography, warm equatorial light on the upper facade, a subtle deep navy blue (#0A1628) tone in the entrance-stair shadow, no red accent. Lens: 28mm, three-quarter perspective, sharp focus. No text, no signage, no logos, no watermark, no people. Generate at the highest available resolution (up to 4K) for downscaling to the final production size of 1200×896px. Output aspect ratio 4:3, JPG format. Save as "Project — Khamakis Fewa Palace.jpg".
```

## 9. `Project — Villa Platform Elevators.jpg`

```
Create a photorealistic, documentary-style photograph titled "Project — Villa Platform Elevators." This represents Konza Elevators' villa platform-lift installations across multiple private residential properties in Nairobi as a single documentary scene, not one specific address. Subject: a low-rise open platform lift installed beside an exterior staircase of an upscale Kenyan villa, photographed in-context from a three-quarter angle in natural daylight, in use as part of the home's real architecture (distinct from a studio product shot) — the platform lift has a slim steel guide-rail mast, a compact open platform with a low glass safety guard, finished in a warm bronze-and-off-white palette. Composition: warm plastered villa walls, a stone exterior stair beside the lift, tropical landscaping (a hint of palm or banana-leaf planting) framing the scene, bright equatorial daylight with soft natural shadows, no people. Style and colour: photorealistic documentary residential-architecture photography, warm neutral daylight grade, a subtle deep navy blue (#0A1628) tone in the deepest shadow only, no red accent. Lens: 35mm, three-quarter angle, sharp focus, photorealistic material rendering on steel and glass. No text, no logos, no watermark, no people. Generate at the highest available resolution (up to 4K) for downscaling to the final production size of 1200×896px. Output aspect ratio 4:3, JPG format. Save as "Project — Villa Platform Elevators.jpg".
```

## 10. `Trust — Harvest Family Church Ministries.jpg`

```
Create a photorealistic, documentary-style architectural photograph titled "Trust — Harvest Family Church Ministries." This is generic, representative photography for a real Konza Elevators client (a Nairobi church that provided a testimonial after Konza installed elevators and escalators on its premises) — not a claimed likeness of the actual building, and no church name, crest, signage or wordmark should be rendered anywhere in the image. Subject: the exterior of a large modern Kenyan church building, photographed at a three-quarter angle in soft late-afternoon light — clean contemporary architecture (not historic/gothic style), a wide covered entrance portico, tall plain glazed windows, a modest forecourt. Composition: level, welcoming architectural framing, minimal landscaping, no people, no vehicles. Style and colour: photorealistic documentary architectural photography, warm equatorial light on the facade, a subtle deep navy blue (#0A1628) tone in the portico shadow, no red accent. Lens: 28mm, three-quarter perspective, sharp focus. No text, no signage, no crests, no logos, no watermark, no people. Generate at the highest available resolution (up to 4K) for downscaling to the final production size of 1200×896px. Output aspect ratio 4:3, JPG format. Save as "Trust — Harvest Family Church Ministries.jpg".
```

## 11. `Resource — How to Choose the Right Elevator for Your Building.jpg`

```
Create a photorealistic, editorial-style photograph titled "Resource — How to Choose the Right Elevator for Your Building," a cover image for a Konza Elevators buying-guide article aimed at developers and homeowners comparing elevator options. Subject: a close, three-quarter view of two different open elevator car interiors visible side by side through their open doorways in a bright modern lobby — one a compact residential home-lift finished in warm brushed bronze and off-white, the other a larger stainless-steel commercial passenger-lift car — suggesting comparison and choice without any chart, label or diagram. Composition: clean lobby with a polished light stone floor, soft ceiling downlighting, both car interiors sharply in focus, no people. Style and colour: photorealistic editorial architectural photography, bright even lighting, a subtle deep navy blue (#0A1628) reflected in the steel car's surfaces, warm neutral tones in the home-lift car, no red accent. Lens: 28mm, level eye-height framing, sharp focus throughout. No text, no logos, no watermark, no people. Generate at the highest available resolution (up to 4K) for downscaling to the final production size of 1200×896px. Output aspect ratio 4:3, JPG format. Save as "Resource — How to Choose the Right Elevator for Your Building.jpg".
```

## 12. `Resource — Top Construction Trends 2026.jpg`

```
Create a photorealistic, editorial-style architectural photograph titled "Resource — Top Construction Trends 2026," a cover image for a Konza Elevators industry-trends article about Kenya's growing construction and vertical-transportation market. Subject: a wide establishing shot looking up at a cluster of modern Nairobi high-rise towers under active construction — visible tower cranes, partially glazed facades on at least one building still under scaffolding, set against a bright late-afternoon sky. Composition: dynamic upward-angled architectural framing conveying growth and momentum, a hint of jacaranda-tree foliage at the lower frame edge for local specificity, no people. Style and colour: photorealistic documentary architectural photography, warm equatorial light on the towers, deep navy blue (#0A1628) tones in the sky's upper gradient and building shadow areas, no red accent. Lens: 24mm wide-angle, deep depth of field, sharp corner-to-corner detail. No text, no logos, no watermark, no people. Generate at the highest available resolution (up to 4K) for downscaling to the final production size of 1200×896px. Output aspect ratio 4:3, JPG format. Save as "Resource — Top Construction Trends 2026.jpg".
```
