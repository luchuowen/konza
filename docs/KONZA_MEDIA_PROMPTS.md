# Konza Elevators — Image & Video Generation Prompts ("Vertical City")

**On the logo — read before generating anything:** Konza's real logo (a 192×192 transparent PNG, extracted directly from the live site) is a real client asset, not something to be generated. It is embedded directly by Claude Code in the build (`public/brand/konza-logo.png`) per `KONZA_BUILD_WORKBOOK.md`'s pre-flight step. **Do not generate a replacement or reinterpreted logo with any of the prompts below.** The one exception — if a specific page needs a resolution the two existing exported files (192×192 transparent PNG, 582×216 solid-maroon JPG) don't cleanly cover — is prompt #29 at the end of this document, which uses the real logo as an identity-preserving reference image rather than inventing a new mark.

**On the accent color:** every hex reference below (`#E8453D`) is the corrected, real accent — sampled directly from the extracted logo's actual red, not an earlier placeholder. `#0A1628` (navy) was correct from the start and needs no change.

**Tool:** Google **Nano Banana Pro** (Gemini app / AI Studio) for every image below. It is free in the Gemini app, supports reference-image-based identity-preserving re-shoots (attach the reference photo alongside the prompt), strong in-image text rendering, and 1K/2K/4K output at the aspect ratios used below. **It does not reliably support negative-prompt lists** — every prompt below is written in positive language only (say what you want, not what to exclude) to match how the model actually responds. For the six "Project Re-Shoot" prompts, first export the named page from `COMPANY-PROFILE-KONZA.pdf` (page numbers given) as a still image and attach it as the reference image in the same Gemini turn as the prompt text — the prompt tells the model to preserve that reference's identity, not invent a new building.

**How to use this document:** each block below is a complete, standalone prompt. Copy exactly one block at a time into Nano Banana Pro — do not combine blocks, and nothing outside a block needs to be pasted alongside it. Save the result under the exact filename given in that block's first line, inside `/public/images/` (URL-encode spaces as `%20` if your framework requires it — Next.js serves `/public/images/Hero%20—%20Vertical%20City%20Nairobi.jpg` correctly either way). Do not rename files — the build workbook (Document 3) maps content slots to these exact names.

---

## Asset checklist (for tracking only — the prompts below are what you paste)

| # | Filename | Slot | Aspect | Format |
|---|---|---|---|---|
| 1 | `Hero — Vertical City Nairobi.jpg` | Home hero, slide 1 | 16:9 | JPG |
| 2 | `Hero — Technician At Work.jpg` | Home hero, slide 2 | 16:9 | JPG |
| 3 | `Hero — Hospital Lift Lobby.jpg` | Home hero, slide 3 | 16:9 | JPG |
| 4 | `Project — Junction Trade Centre.jpg` | Projects page | 4:3 | JPG |
| 5 | `Project — MPESA Foundation Academy.jpg` | Projects page | 4:3 | JPG |
| 6 | `Project — Radiant Hospital.jpg` | Projects page | 4:3 | JPG |
| 7 | `Project — Village Market.jpg` | Projects page | 4:3 | JPG |
| 8 | `Project — The Moon Apartments Ruaka.jpg` | Projects page | 4:3 | JPG |
| 9 | `Project — Blessed House Thika Road.jpg` | Projects page | 4:3 | JPG |
| 10 | `Product — Passenger Lifts.jpg` | Products page | 4:3 | JPG |
| 11 | `Product — Freight Elevators.jpg` | Products page | 4:3 | JPG |
| 12 | `Product — Home Lifts.jpg` | Products page | 4:3 | JPG |
| 13 | `Product — Escalators.jpg` | Products page | 4:3 | JPG |
| 14 | `Product — Moving Walkways.jpg` | Products page | 4:3 | JPG |
| 15 | `Product — Dumbwaiters.jpg` | Products page | 4:3 | JPG |
| 16 | `Product — Car Lifts.jpg` | Products page | 4:3 | JPG |
| 17 | `Product — Goods Hoist.jpg` | Products page | 4:3 | JPG |
| 18 | `Product — Villa Platform Elevators.jpg` | Products page | 4:3 | JPG |
| 19 | `Industry — Residential Highrise.jpg` | Industries tiles | 16:10 | JPG |
| 20 | `Industry — Commercial and Office.jpg` | Industries tiles | 16:10 | JPG |
| 21 | `Industry — Hospital and Institutional.jpg` | Industries tiles | 16:10 | JPG |
| 22 | `Industry — Retail and Escalators.jpg` | Industries tiles | 16:10 | JPG |
| 23 | `About — Team At Work.jpg` | About page | 4:3 | JPG |
| 24 | `Maintenance — Technician Inspection.jpg` | Maintenance Contracts page | 4:3 | JPG |
| 25 | `Compliance — Credentials Band Background.jpg` | Home + Maintenance compliance strip | 21:9 | JPG |
| 26 | `Careers — Workshop Bench.jpg` | About page, team module | 4:3 | JPG |
| 27 | `Contact — Nairobi Office Exterior.jpg` | Contact page | 4:3 | JPG |
| 28 | `OG — Social Share Card.jpg` | Global `og:image` | 1.91:1 | JPG |
| V1 | `Video — Lift Shaft Cutaway Loop.mp4` | Home signature motion moment (fallback still: reuse asset #1) | 16:9 | MP4 |
| V2 | `Video — Escalator Ambient Loop.mp4` | Industries / Products ambient background | 16:9 | MP4 |

---

## 1. `Hero — Vertical City Nairobi.jpg`

```
Create a photorealistic, documentary-style architectural photograph titled "Hero — Vertical City Nairobi." Wide establishing shot looking up at a cluster of modern Nairobi high-rise office towers in the Upper Hill district at golden-hour late afternoon — glass-and-concrete facades catching warm equatorial sunlight against a deep, near-navy blue sky (colour reference #0A1628 in the shadow areas). Include construction cranes on at least one tower under construction in the background to suggest a city actively building upward. Foreground includes a glimpse of a jacaranda tree branch with soft purple blossoms at the lower frame edge for local specificity. Shot on a full-frame camera with a 24mm wide-angle lens, deep depth of field, sharp corner-to-corner detail, natural warm-to-cool colour grade with lifted navy shadows and no oversaturation. No text, no logos, no watermark, no people in this frame — pure architecture and sky. High-resolution 4K output, aspect ratio 16:9. Save as JPG named exactly "Hero — Vertical City Nairobi.jpg".
```

## 2. `Hero — Technician At Work.jpg`

```
Create a photorealistic, documentary-style photograph titled "Hero — Technician At Work." A Kenyan elevator technician in his 30s, wearing NCA/OSHA-compliant navy-blue coveralls, a white hard hat, and safety gloves, is inspecting an open elevator machine-room control panel inside a real-feeling Nairobi commercial building's rooftop plant room. He is captured mid-task, genuinely focused, not posing or smiling at camera — natural working posture, one hand on a multimeter probe, the other steadying the panel door. Lighting is a mix of practical fluorescent plant-room light plus a soft window-daylight fill from the left, rendered with accurate warm Kenyan skin tones and no waxy or plastic CGI skin texture. A small out-of-focus red safety-tag accent (colour reference #E8453D) hangs from the panel latch for a single rationed pop of the brand's red. Shot on a 35mm prime lens at a wide aperture for a shallow depth of field that keeps the technician sharp and the plant-room background softly blurred. Natural, slightly desaturated industrial colour grade with deep navy shadow tones. No text, no logos, no watermark. High-resolution 4K output, aspect ratio 16:9. Save as JPG named exactly "Hero — Technician At Work.jpg".
```

## 3. `Hero — Hospital Lift Lobby.jpg`

```
Create a photorealistic, documentary-style interior photograph titled "Hero — Hospital Lift Lobby." A clean, modern Kenyan hospital lift lobby — polished light-grey terrazzo floor, soft white ceiling downlighting, and a pair of stainless-steel hospital bed-elevator doors centred in frame, one door partially open revealing the warmly-lit car interior with handrails. A hospital gurney is parked just out of frame to the right, only its edge visible, to suggest real institutional use without making the medical equipment the subject. No people in this frame. The steel doors carry a very subtle reflected wash of deep navy blue (#0A1628) from the ceiling lighting, with no red or logo elements present. Shot on a 24mm lens at eye level, straight-on architectural framing, clean converging verticals, soft even lighting with no harsh shadows, photorealistic material rendering on the brushed steel. No text, no watermark, no signage. High-resolution 4K output, aspect ratio 16:9. Save as JPG named exactly "Hero — Hospital Lift Lobby.jpg".
```

## 4. `Project — Junction Trade Centre.jpg`

```
I am attaching a reference photograph of a real, completed elevator installation at Junction Trade Centre in Nairobi's CBD, sourced from page 12 of Konza Elevators' company profile document (Fuji-branded panoramic passenger elevators, 10-stop, installed by Konza Elevators). Using the attached image as an identity reference, re-render this exact same building, lobby and elevator installation — preserve the real architecture, the real elevator car and door design, and the real spatial layout exactly as shown in the reference; do not invent a different building or change the installation's identity. Apply only a professional photographic upgrade: correct the lighting to a clean, even, professionally-lit documentary photography style, apply a unified colour grade with deep navy shadow tones (#0A1628) and warm neutral highlights, sharpen focus, and remove any visible watermark, low-resolution artifacts or compression noise from the source scan. Keep the framing similar to the original reference. No people should be invented if none are in the source; no new text or logos added. High-resolution 4K output, aspect ratio 4:3. Save as JPG named exactly "Project — Junction Trade Centre.jpg".
```

## 5. `Project — MPESA Foundation Academy.jpg`

```
I am attaching a reference photograph of a real, completed Glarie two-stop elevator installation at MPESA Foundation Academy, sourced from Konza Elevators' company profile document (Project Highlights section, pages 11–18). Using the attached image as an identity reference, re-render this exact same building and elevator installation — preserve the real architecture, the real elevator car and door design, and the real spatial layout exactly as shown in the reference; do not invent a different building or change the installation's identity. Apply only a professional photographic upgrade: correct the lighting to a clean, even, professionally-lit documentary photography style appropriate to an educational campus setting, apply a unified colour grade with deep navy shadow tones (#0A1628) and warm neutral highlights, sharpen focus, and remove any visible watermark, low-resolution artifacts or compression noise from the source scan. Keep the framing similar to the original reference. No new people, text or logos added. High-resolution 4K output, aspect ratio 4:3. Save as JPG named exactly "Project — MPESA Foundation Academy.jpg".
```

## 6. `Project — Radiant Hospital.jpg`

```
I am attaching a reference photograph of real, completed Fuji hospital bed-elevator installations (11-stop) at Radiant Group of Hospitals, sourced from Konza Elevators' company profile document (Project Highlights section, pages 11–18). Using the attached image as an identity reference, re-render this exact same building and elevator installation — preserve the real architecture, the real elevator car and door design (hospital bed-lift proportions), and the real spatial layout exactly as shown in the reference; do not invent a different building or change the installation's identity. Apply only a professional photographic upgrade: correct the lighting to a clean, bright, clinical-but-warm documentary photography style suitable for a healthcare setting, apply a unified colour grade with deep navy shadow tones (#0A1628) and clean neutral-white highlights, sharpen focus, and remove any visible watermark, low-resolution artifacts or compression noise from the source scan. Keep the framing similar to the original reference. No new people, text or logos added. High-resolution 4K output, aspect ratio 4:3. Save as JPG named exactly "Project — Radiant Hospital.jpg".
```

## 7. `Project — Village Market.jpg`

```
I am attaching a reference photograph of real, completed Fuji escalator installations at Village Market shopping centre, Nairobi, sourced from Konza Elevators' company profile document (Project Highlights / Referral List section — Village Market, 11 escalators plus a 3-stop elevator, the largest single documented installation Konza has completed). Using the attached image as an identity reference, re-render this exact same retail environment and escalator installation — preserve the real architecture, the real escalator design, balustrade style and spatial layout exactly as shown in the reference; do not invent a different mall or change the installation's identity. Apply only a professional photographic upgrade: correct the lighting to a bright, energetic, professionally-lit retail-documentary style, apply a unified colour grade with deep navy shadow tones (#0A1628) and warm highlight tones, sharpen focus, and remove any visible watermark, low-resolution artifacts or compression noise from the source scan. Keep the framing similar to the original reference. No new people, text or logos added. High-resolution 4K output, aspect ratio 4:3. Save as JPG named exactly "Project — Village Market.jpg".
```

## 8. `Project — The Moon Apartments Ruaka.jpg`

```
I am attaching a reference photograph of a real, completed 8-stop Fuji elevator installation at The Moon Apartments, Ruaka, sourced from Konza Elevators' company profile document (Project Highlights section, pages 11–18). Using the attached image as an identity reference, re-render this exact same residential building and elevator installation — preserve the real architecture, the real elevator car and door design, and the real spatial layout exactly as shown in the reference; do not invent a different building or change the installation's identity. Apply only a professional photographic upgrade: correct the lighting to a clean, warm, residential-documentary photography style, apply a unified colour grade with deep navy shadow tones (#0A1628) and warm neutral highlights, sharpen focus, and remove any visible watermark, low-resolution artifacts or compression noise from the source scan. Keep the framing similar to the original reference. No new people, text or logos added. High-resolution 4K output, aspect ratio 4:3. Save as JPG named exactly "Project — The Moon Apartments Ruaka.jpg".
```

## 9. `Project — Blessed House Thika Road.jpg`

```
I am attaching a reference photograph of a real, completed 6-stop Delfar elevator installation at Blessed House, Thika Road, sourced from Konza Elevators' company profile document (Project Highlights section, pages 11–18). Using the attached image as an identity reference, re-render this exact same building and elevator installation — preserve the real architecture, the real elevator car and door design, and the real spatial layout exactly as shown in the reference; do not invent a different building or change the installation's identity. Apply only a professional photographic upgrade: correct the lighting to a clean, even, professionally-lit documentary photography style, apply a unified colour grade with deep navy shadow tones (#0A1628) and warm neutral highlights, sharpen focus, and remove any visible watermark, low-resolution artifacts or compression noise from the source scan. Keep the framing similar to the original reference. No new people, text or logos added. High-resolution 4K output, aspect ratio 4:3. Save as JPG named exactly "Project — Blessed House Thika Road.jpg".
```

## 10. `Product — Passenger Lifts.jpg`

```
Create a photorealistic product photograph titled "Product — Passenger Lifts." A modern stainless-steel passenger elevator car interior, doors fully open toward camera, photographed straight-on from just outside the car threshold in a clean commercial-building lobby. Car interior features brushed stainless steel walls, a mirror on the rear wall, a stainless handrail at waist height, and a slim ceiling downlight strip. The lobby floor is polished light-grey stone. Lighting is bright, even, professional product-photography lighting with a soft navy-toned reflection (#0A1628) visible faintly in the mirror and steel surfaces for brand consistency, no other colour cast. Shot on a 35mm lens, straight-on architectural symmetry, sharp focus throughout, photorealistic material rendering on brushed steel and mirror. No people, no text, no logos, no watermark. High-resolution 4K output, aspect ratio 4:3. Save as JPG named exactly "Product — Passenger Lifts.jpg".
```

## 11. `Product — Freight Elevators.jpg`

```
Create a photorealistic product photograph titled "Product — Freight Elevators." A heavy-duty industrial freight elevator car, doors fully open, photographed straight-on from a warehouse or industrial loading-bay setting. Car interior features reinforced steel walls with protective panel cladding, a diamond-plate steel floor, and visible heavy-duty door tracks — clearly built for cargo, not passengers. The surrounding warehouse space shows exposed structural beams and a concrete floor. Lighting is bright, even industrial lighting with a cool undertone, a subtle deep navy shadow grade (#0A1628) in the background depth. Shot on a 28mm lens, straight-on framing, sharp focus, photorealistic industrial-material rendering. No people, no text, no logos, no watermark. High-resolution 4K output, aspect ratio 4:3. Save as JPG named exactly "Product — Freight Elevators.jpg".
```

## 12. `Product — Home Lifts.jpg`

```
Create a photorealistic product photograph titled "Product — Home Lifts." A compact, elegant residential home-lift installation inside a warm, modern Kenyan home interior — the lift shaft has a glass-panelled enclosure revealing the small passenger car within, set beside a wooden staircase. Interior styling is warm and residential: light timber flooring, a neutral wall in soft off-white, warm ambient lamplight mixed with daylight from an unseen window. The lift car itself is finished in a warm brushed-bronze and off-white palette, distinct from the commercial passenger-lift steel look. Shot on a 35mm lens at a natural eye-level angle showing both the staircase and the lift for context, soft natural lighting, photorealistic material rendering on glass and timber. No people, no text, no logos, no watermark. High-resolution 4K output, aspect ratio 4:3. Save as JPG named exactly "Product — Home Lifts.jpg".
```

## 13. `Product — Escalators.jpg`

```
Create a photorealistic product photograph titled "Product — Escalators." A modern commercial escalator, photographed from a three-quarter angle ascending from lower-left to upper-right of frame, inside a bright retail or office-atrium setting. Escalator features stainless-steel balustrades with clear glass side panels and black rubber handrails, chrome step edges catching the light. Background shows a softly out-of-focus multi-level atrium with a hint of natural daylight from a skylight. Lighting is bright and clean with a subtle deep-navy colour grade (#0A1628) in the shadow areas. Shot on a 24mm lens, dynamic three-quarter composition, sharp focus on the nearest steps, photorealistic reflective-material rendering on steel and glass. No people, no text, no logos, no watermark. High-resolution 4K output, aspect ratio 4:3. Save as JPG named exactly "Product — Escalators.jpg".
```

## 14. `Product — Moving Walkways.jpg`

```
Create a photorealistic product photograph titled "Product — Moving Walkways." A modern horizontal moving walkway (travelator) inside an airport-style or large commercial-atrium corridor, photographed straight down its length toward a vanishing point. Features stainless-steel side balustrades with black rubber handrails and a flat rubber-tread walking surface with visible directional grooves. Corridor is bright, wide, with clean architectural ceiling lighting receding into the distance. Subtle deep-navy colour grade (#0A1628) in the far background shadow. Shot on a 24mm lens, one-point perspective composition, sharp focus throughout, photorealistic material rendering. No people, no text, no logos, no watermark. High-resolution 4K output, aspect ratio 4:3. Save as JPG named exactly "Product — Moving Walkways.jpg".
```

## 15. `Product — Dumbwaiters.jpg`

```
Create a photorealistic product photograph titled "Product — Dumbwaiters." A compact commercial dumbwaiter (small service/dining elevator) installation inside a professional kitchen or hotel service-corridor setting, doors open revealing the small stainless-steel service car interior at waist height. Surrounding environment shows clean stainless-steel kitchen surfaces and practical overhead task lighting. Lighting is bright, clean, and functional with a faint deep-navy tone (#0A1628) in the deeper shadow areas. Shot on a 35mm lens, straight-on framing at the unit's natural height, sharp focus, photorealistic brushed-steel material rendering. No people, no text, no logos, no watermark. High-resolution 4K output, aspect ratio 4:3. Save as JPG named exactly "Product — Dumbwaiters.jpg".
```

## 16. `Product — Car Lifts.jpg`

```
Create a photorealistic product photograph titled "Product — Car Lifts." A heavy-duty vehicle/car lift platform inside a modern multi-storey parking structure, photographed from a three-quarter angle showing the reinforced steel platform, guide rails and the concrete parking-deck opening above. The platform is empty (no vehicle on it) to keep focus on the lift mechanism itself. Environment shows exposed concrete columns and structured parking-deck lighting. Lighting is bright, even, industrial-architectural in style, with a subtle deep-navy shadow grade (#0A1628). Shot on a 24mm lens, three-quarter angle, sharp focus, photorealistic rendering of steel and concrete materials. No people, no vehicles, no text, no logos, no watermark. High-resolution 4K output, aspect ratio 4:3. Save as JPG named exactly "Product — Car Lifts.jpg".
```

## 17. `Product — Goods Hoist.jpg`

```
Create a photorealistic product photograph titled "Product — Goods Hoist." A rugged external/semi-industrial goods hoist mounted on the exterior of a mid-rise construction or warehouse building, photographed from ground level looking up at a moderate angle, showing the steel lattice mast, hoist cage/platform, and safety cage guarding. Setting is an active but tidy construction-site exterior with scaffolding visible in the soft-focus background. Overcast, even daylight typical of a working site, natural colour grade with a subtle deep-navy undertone (#0A1628) in shadowed steel. Shot on a 28mm lens, low-angle architectural perspective, sharp focus on the hoist structure, photorealistic weathered-steel material rendering. No people, no text, no logos, no watermark. High-resolution 4K output, aspect ratio 4:3. Save as JPG named exactly "Product — Goods Hoist.jpg".
```

## 18. `Product — Villa Platform Elevators.jpg`

```
Create a photorealistic product photograph titled "Product — Villa Platform Elevators." A low-rise open platform lift installed beside an exterior staircase of an upscale Kenyan villa or townhouse, photographed from a three-quarter angle in natural daylight. The platform lift has a slim steel guide-rail mast, a compact open platform with a low glass safety guard, finished in a warm bronze-and-off-white palette consistent with residential styling. Surrounding architecture shows warm plastered walls, tropical landscaping (a hint of a palm or banana-leaf plant at the frame edge) and bright equatorial daylight with soft natural shadows. Shot on a 35mm lens, three-quarter angle, sharp focus, photorealistic material rendering on steel and glass. No people, no text, no logos, no watermark. High-resolution 4K output, aspect ratio 4:3. Save as JPG named exactly "Product — Villa Platform Elevators.jpg".
```

## 19. `Industry — Residential Highrise.jpg`

```
Create a photorealistic architectural photograph titled "Industry — Residential Highrise." An upward-angled shot of a modern Nairobi residential apartment tower (10–15 storeys, balconies visible, warm-toned plastered facade with glass balcony railings) photographed from street level against a clear late-afternoon sky with soft equatorial warm light. Include a hint of ground-level greenery (jacaranda or palm) at the base of frame for local specificity. Deep navy tones (#0A1628) in the sky gradient toward the top of frame. Shot on a 24mm wide-angle lens, strong upward converging-vertical composition, sharp focus, photorealistic architectural rendering. No people, no text, no logos, no watermark. High-resolution 4K output, aspect ratio 16:10. Save as JPG named exactly "Industry — Residential Highrise.jpg".
```

## 20. `Industry — Commercial and Office.jpg`

```
Create a photorealistic architectural photograph titled "Industry — Commercial and Office." A modern Nairobi CBD or Upper Hill glass office tower entrance plaza, photographed at eye level from across a paved plaza, showing a full-height glass curtain wall facade reflecting a warm late-afternoon sky. Include a subtle reflection of a jacaranda tree in the glass for local specificity. Lighting is bright, clean, professional-architectural with a deep navy undertone (#0A1628) in the reflected shadow areas of the glass. Shot on a 28mm lens, level horizon, sharp focus, photorealistic glass-and-steel material rendering. No people, no text, no logos, no watermark. High-resolution 4K output, aspect ratio 16:10. Save as JPG named exactly "Industry — Commercial and Office.jpg".
```

## 21. `Industry — Hospital and Institutional.jpg`

```
Create a photorealistic architectural photograph titled "Industry — Hospital and Institutional." The clean modern exterior entrance of a Kenyan private hospital building — light-coloured plastered facade, a covered drop-off canopy, clear signage-free glass entrance doors, and well-maintained landscaping with tropical plants, photographed from a slight low angle in soft midday light with minimal harsh shadow. A subtle deep-navy tone (#0A1628) is present in the canopy's shaded underside. Shot on a 28mm lens, level architectural framing, sharp focus, photorealistic rendering. No people, no text, no signage, no logos, no watermark. High-resolution 4K output, aspect ratio 16:10. Save as JPG named exactly "Industry — Hospital and Institutional.jpg".
```

## 22. `Industry — Retail and Escalators.jpg`

```
Create a photorealistic interior photograph titled "Industry — Retail and Escalators." The bright, multi-level atrium interior of a modern Nairobi shopping mall, photographed from an upper-level vantage point looking down across open retail floors connected by visible escalators in the mid-ground, with a skylight washing the space in natural daylight. Lighting is bright and airy with a subtle deep-navy undertone (#0A1628) in the architectural shadow lines. Shot on a 24mm lens, elevated three-quarter perspective, sharp focus throughout, photorealistic rendering of glass, steel and stone. No people, no text, no store signage/logos, no watermark. High-resolution 4K output, aspect ratio 16:10. Save as JPG named exactly "Industry — Retail and Escalators.jpg".
```

## 23. `About — Team At Work.jpg`

```
Create a photorealistic, documentary-style photograph titled "About — Team At Work." Three Kenyan elevator technicians in matching navy-blue coveralls and white hard hats, working together around an open elevator machine-room control panel in a real-feeling Nairobi building's plant room — one pointing at a schematic diagram, one holding a tool, one observing, genuine collaborative body language, not posed for camera, no direct eye contact with the lens. Lighting is a natural mix of practical plant-room light and soft daylight fill, accurate warm Kenyan skin tones, no waxy CGI look. A single small red safety-tag accent (#E8453D) is visible on one technician's tool belt for a rationed brand touch. Shot on a 35mm lens, natural candid framing, moderate depth of field keeping all three technicians sharp, industrial colour grade with deep navy shadow tones. No text, no logos, no watermark. High-resolution 4K output, aspect ratio 4:3. Save as JPG named exactly "About — Team At Work.jpg".
```

## 24. `Maintenance — Technician Inspection.jpg`

```
Create a photorealistic, documentary-style photograph titled "Maintenance — Technician Inspection." A Kenyan elevator technician in navy-blue coveralls, kneeling beside an open elevator pit or door-track mechanism, using a torch and a small tablet/clipboard to log an inspection checklist — genuine focused working posture, not posing for camera. Setting is a clean commercial-building lift lobby with the car doors open beside him. Lighting is soft and practical, mixing ambient lobby light with the torch's warm beam, accurate warm Kenyan skin tones, no CGI waxy look. Shot on a 35mm lens at a slightly low angle for a sense of diligence and scale, shallow depth of field with the technician sharp and the lobby softly blurred, industrial colour grade with deep navy shadow tones (#0A1628). No text, no logos, no watermark. High-resolution 4K output, aspect ratio 4:3. Save as JPG named exactly "Maintenance — Technician Inspection.jpg".
```

## 25. `Compliance — Credentials Band Background.jpg`

```
Create a photorealistic, abstract architectural detail photograph titled "Compliance — Credentials Band Background." An extreme close-up, wide-format detail shot of a modern elevator's stainless-steel door track and guide-rail mechanism, photographed at a raking angle so the polished steel recedes into a soft-focus blur toward one edge of frame. The lighting is a controlled studio-style rim light in deep navy blue (#0A1628) along the top edge of the steel, with a single thin line of crimson-red light (#E8453D) tracing one guide-rail edge as the only accent colour in the frame. The overall mood is precise, engineered, and quiet — a texture/background image, not a scene with a clear subject in the centre. Shot on a macro-capable lens, extremely shallow depth of field, photorealistic metal-material rendering with soft highlight bloom. No people, no text, no logos, no watermark. High-resolution 4K output, ultra-wide aspect ratio 21:9. Save as JPG named exactly "Compliance — Credentials Band Background.jpg".
```

## 26. `Careers — Workshop Bench.jpg`

```
Create a photorealistic, documentary-style photograph titled "Careers — Workshop Bench." A well-organized elevator-parts workshop bench in a Nairobi technical workshop — real tools (wrenches, multimeters, wire strippers) neatly arranged, a partially disassembled control-panel relay unit under a work lamp, and elevator door-track components stacked to one side. No people in this frame — the bench itself communicates skilled, hands-on craft. Lighting is warm practical workshop lighting from an overhead lamp, with ambient daylight from an unseen window filling the shadows, natural unstaged colour grade with a subtle deep-navy tone (#0A1628) in the background depth. Shot on a 35mm lens at a slightly elevated angle looking down at the bench, sharp focus across the tools, photorealistic material rendering on metal and wood. No text, no logos, no watermark. High-resolution 4K output, aspect ratio 4:3. Save as JPG named exactly "Careers — Workshop Bench.jpg".
```

## 27. `Contact — Nairobi Office Exterior.jpg`

```
Create a photorealistic architectural photograph titled "Contact — Nairobi Office Exterior." The exterior entrance of a mid-rise modern commercial office building in Nairobi, generic and professional in style (representative of an office park such as Ramco Court off Mombasa Road — not a specific real building, since no reference photo exists for this exact location), photographed at a three-quarter angle in soft late-afternoon light. Features a clean glass-and-plaster facade, a covered entrance canopy, a small parking area with a few generic cars, and modest landscaping. Deep navy undertone (#0A1628) in the shaded canopy area, warm equatorial light on the upper facade. Shot on a 28mm lens, three-quarter architectural framing, sharp focus, photorealistic rendering. No people, no readable signage or logos (leave any signage area blank/blurred), no watermark. High-resolution 4K output, aspect ratio 4:3. Save as JPG named exactly "Contact — Nairobi Office Exterior.jpg".
```

## 28. `OG — Social Share Card.jpg`

```
Create a clean, premium social-share graphic titled "OG — Social Share Card." Deep architectural navy background (#0A1628) with a subtle, softly-blurred photographic texture behind it suggesting an out-of-focus Nairobi glass tower facade at low opacity. In the lower-left third of the frame, render the bold headline text "KONZA ELEVATORS" in a confident white heavy-weight grotesque-sans typeface, with a smaller crimson-red (#E8453D) subtitle line beneath it reading "Vertical Transportation for Nairobi's Next Skyline" in a lighter weight. Leave generous clean negative space in the upper-right third of the frame for a logo to be added separately in post-production — do not render any logo or lift-shaft icon yourself. Keep all text sharp, legible, and precisely rendered with no spelling errors. No other imagery, no watermark, no additional text. High-resolution 2K output, aspect ratio 1.91:1. Save as JPG named exactly "OG — Social Share Card.jpg".
```

---

## Video prompts (Veo 3 / Kling / Runway — pick by access; prompt works for any of the three)

**These two are optional premium enhancements, not build blockers.** The build workbook already gives the Home signature motion moment a fully-functional, reduced-motion-safe, zero-video-weight CODED line-drawing animation (built in Session 1 of `KONZA_BUILD_WORKBOOK.md`) — that alone satisfies the requirement and is the better default for Kenya's mobile-data-sensitive audience. Generate V1 only if you want an even richer, more cinematic version of that same moment layered in as a "connection-permitting" enhancement (the coded animation stays as the automatic fallback). Generate V2 only if you want an ambient texture on the Products page's Escalators card or the Industries page's "Retail and Escalators" tile hover-state — a nice-to-have, not required for launch.

## V1. `Video — Lift Shaft Cutaway Loop.mp4`

```
Create a short, seamless, looping ambient background video titled "Lift Shaft Cutaway Loop." Subject: a stylized but physically plausible cutaway animation of a modern elevator shaft — the elevator car, counterweight, guide rails and hoist cable — rendered as a clean architectural line-drawing/wireframe in crimson red (#E8453D) against a deep navy background (#0A1628), similar in spirit to a technical blueprint brought to life. Camera: completely static, no camera movement. Action: the car and counterweight move slowly and smoothly past each other along the rails in a continuous, perfectly loopable cycle — very slow, meditative pacing, no sudden motion. Lighting: flat, even, graphic — this is a line-drawing animation, not a photorealistic scene. Duration: 6 seconds, seamlessly loopable (first and last frame must match exactly). Mute, no audio track needed. No text, no logos, no watermark. Export as MP4, compressed for web (target under 3MB), aspect ratio 16:9. Save as "Video — Lift Shaft Cutaway Loop.mp4". Provide a static PNG poster frame fallback for prefers-reduced-motion users, exported from the loop's first frame.
```

## V2. `Video — Escalator Ambient Loop.mp4`

```
Create a short, seamless, looping ambient background video titled "Escalator Ambient Loop." Subject: a photorealistic close-up of modern escalator steps in continuous motion, shot from a low angle so the moving steps fill the frame diagonally, stainless-steel step edges catching soft studio light, black rubber handrail moving in parallel at the top edge of frame. Camera: completely static, no camera movement — only the escalator mechanism moves. Lighting: clean, bright, professional product-lighting style with a subtle deep-navy colour undertone (#0A1628) in the shadowed step gaps. Action: continuous, smooth, perfectly loopable escalator step motion at a natural real-world speed — no speed ramping. Duration: 5 seconds, seamlessly loopable. Mute, no audio track needed. No people, no text, no logos, no watermark. Export as MP4, compressed for web (target under 3MB), aspect ratio 16:9. Save as "Video — Escalator Ambient Loop.mp4". Provide a static JPG poster frame fallback for prefers-reduced-motion users, exported from the loop's first frame.
```

---

## 29. `Logo — High-Resolution Recreation.png` *(only generate if the two real exported files can't cover a needed size — read the note above first)*

```
I am attaching Konza Elevators & Escalator Co. Ltd's real, existing logo file (a
192×192 transparent-background PNG, extracted directly from the company's live
website) as an identity reference. Using the attached image as an exact identity
reference, recreate this precise same logo mark — same red lift/arrow icon
shape, same "KONZA ELEVATORS" wordmark, same proportions and relative
positioning between icon and text — at a larger, cleaner resolution suitable
for high-DPI display and print use. Do not redesign, restyle, recolor,
simplify, or reinterpret the mark in any way; this is a resolution upscale and
edge-cleanup task only, not a redesign. Preserve the exact red tone shown in
the reference (do not shift it toward a different red). Keep the background
fully transparent. Remove any compression artifacts or soft/blurry edges
visible in the reference source, replacing them with clean, crisp vector-like
edges at the higher resolution, while keeping every proportion identical to
the reference. No new elements, no added tagline, no added colour, no
watermark. Output as a transparent PNG at 512×512. Save as PNG named exactly
"Logo — High-Resolution Recreation.png".
```

---

## Post-processing & swap path

1. Generate all 28 images + 2 videos above, saving each under its exact filename.
2. Export sizes: images at 4K from Nano Banana Pro, then batch-resize/compress to WebP alongside the JPG originals (`cwebp -q 82`) for production use — keep the JPG as the source-of-truth filename the build workbook references, output `.webp` siblings for `<picture>` srcset.
3. Videos: compress to both MP4 (H.264) and WebM for browser coverage; keep each under ~3MB for the mobile-heavy, data-cost-sensitive Kenyan audience the research identified.
4. Drop all files into `/public/images/` and `/public/video/` using the exact names in the checklist table above — do not rename. Document 3 (`KONZA_BUILD_WORKBOOK.md`) contains the mandatory slot → filename → page verification table that Claude Code uses to confirm every image landed in the right place.
5. When Konza supplies real professional photography later (recommended for the 6 "Project Re-Shoot" assets especially, once real photographers can shoot the actual sites), swap 1:1 into the same filenames — no code changes required.
