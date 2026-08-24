# 00A — Scroll World Final Scene & Asset Instructions
## Jordan Story Tours — Siq → Treasury → Wadi Rum

**Priority:** CRITICAL  
**Read after:** `00-AI-Agent-Implementation-Reset-Walkthrough.md`

This file replaces earlier Scroll World wording that caused technical scene names to appear publicly.

## 1. Critical Rule: Internal Scene IDs Are NOT Public Captions

Technical names such as:

- `scene_02_siq_depth`
- `scene_03_siq_bend`
- `scene_05_treasury_partial`

exist only for code, animation timelines, debugging, analytics and asset mapping.

They must NEVER render as visitor-facing captions.

Bad:
```tsx
<h2>{scene.name}</h2>
```

Correct:
```tsx
{
  id: "scene_02_siq_depth",
  publicTitle: null,
  publicCaption: null
}
```

The user should never see text such as:

- SCENE 2 — CANYON CLOSES
- THE BEND
- TREASURY PARTIAL REVEAL
- PETRA TO WADI RUM TRANSITION

These are developer concepts only.

---

# 2. Final Generated Hero Asset Sequence

Use the generated Scroll World images with these intended web filenames:

```text
scroll-01-siq-entrance.webp
scroll-02-siq-depth.webp
scroll-03-siq-bend.webp
scroll-04-treasury-first-glimpse.webp
scroll-05-treasury-partial-reveal.webp
scroll-06-petra-treasury-full.webp
scroll-07-petra-to-wadi-rum-transition.webp
scroll-08-wadi-rum-horizon.webp
```

Preserve original generated PNG/JPG files in:

```text
/assets/scroll-world/source/
```

Create optimized derivatives in:

```text
/assets/scroll-world/webp/
/assets/scroll-world/avif/
/assets/scroll-world/mobile/
```

The images are key visual states, not slideshow slides.

---

# 3. Visual Consistency

All frames must feel like one continuous journey.

Maintain:

- realistic Petra sandstone
- consistent daylight direction
- cinematic human-eye camera height
- documentary realism
- realistic Jordan geology
- no fantasy architecture
- no text baked into the images
- no logos baked into the images
- no close-up tourists
- no UI elements inside source imagery

The images must look 3D and spatial even when some layers are 2.5D.

---

# 4. Scroll World Technique

Use a hybrid:

- Three.js / React Three Fiber
- GSAP ScrollTrigger or equivalent
- selective real 3D canyon geometry
- depth-mapped generated images
- foreground rock occluders
- layered parallax
- camera translation
- lighting masks
- subtle dust/fog
- crossfades hidden by rocks or atmospheric transitions

Do NOT use the eight images as a simple fade slideshow.

The visitor must perceive continuous forward travel.

---

# 5. Public Chapter Copy

Only the following visitor-facing text is approved.

## Opening
**Your Jordan Story begins here.**

Microcopy:
**Scroll to enter**

## Optional Siq microcopy
Use at most one:
- **Follow the path.**
- **Deeper into Jordan.**

Or show no text.

## Petra Reveal
**PETRA**

**The first chapter is only the beginning.**

CTA:
**Explore Petra**

## Wadi Rum Reveal
**WADI RUM**

**The horizon opens.**

Then:
**Continue your Jordan Story.**

CTA:
**Explore Wadi Rum**

## Exit to Tours
**Choose How Your Story Continues**

Supporting copy:
**From a single day in Petra to a complete journey across Jordan, choose the route that becomes yours.**

No other technical scene captions should appear publicly.

---

# 6. Scene-by-Scene Behavior

## Scene 00 — Arrival
Asset:
`scroll-01-siq-entrance.webp`

Internal ID:
`scene_00_arrival`

Public copy:
**Your Jordan Story begins here.**
**Scroll to enter**

Behavior:
- camera is nearly stationary
- subtle dust/light movement
- foreground rocks frame the view
- user sees depth into the Siq
- no loading wall before this frame

---

## Scene 01 — Enter the Siq
Asset:
`scroll-01-siq-entrance.webp`

Internal ID:
`scene_01_enter_siq`

Public caption:
None.

Behavior:
- camera starts moving forward
- foreground rock moves faster than distant canyon
- opening copy fades away
- scroll direction equals forward movement

---

## Scene 02 — Deeper Siq
Asset:
`scroll-02-siq-depth.webp`

Internal ID:
`scene_02_siq_depth`

Public caption:
None, or optionally:
**Follow the path.**

Behavior:
- walls feel taller and closer
- less sky is visible
- stronger shadow
- foreground rock occasionally passes close to camera edges
- motion parallax must be obvious but elegant

---

## Scene 03 — Canyon Bend
Asset:
`scroll-03-siq-bend.webp`

Internal ID:
`scene_03_siq_bend`

Public caption:
None.

Behavior:
- camera follows a curved spline
- large foreground rock temporarily covers part of frame
- new corridor appears around the bend
- this scene must prove the environment has spatial depth

Never render “THE BEND”.

---

## Scene 04 — First Treasury Glimpse
Asset:
`scroll-04-treasury-first-glimpse.webp`

Internal ID:
`scene_04_treasury_first_glimpse`

Public caption:
None.

Behavior:
- Treasury is still mostly hidden
- only a small architectural fragment appears through the canyon
- camera slows slightly
- final rock obstruction remains dominant
- no headline spoils the discovery

---

## Scene 05 — Treasury Partial Reveal
Asset:
`scroll-05-treasury-partial-reveal.webp`

Internal ID:
`scene_05_treasury_partial`

Public caption:
None.

Behavior:
- camera advances and moves slightly sideways
- foreground canyon wall slides across frame
- Treasury changes from a glimpse to a substantial partial view
- brighter Treasury contrasts with darker Siq

Never render “TREASURY PARTIAL REVEAL”.

---

## Scene 06 — Full Petra Reveal
Asset:
`scroll-06-petra-treasury-full.webp`

Internal ID:
`scene_06_petra_reveal`

Public title:
**PETRA**

Public caption:
**The first chapter is only the beginning.**

CTA:
**Explore Petra**

Behavior:
- final canyon wall moves past camera
- Treasury becomes fully visible
- camera almost stops
- composition opens into the plaza
- monument dominates the frame
- text stays small and elegant

This is the signature moment.

---

## Scene 07 — Petra to Desert Transition
Asset:
`scroll-07-petra-to-wadi-rum-transition.webp`

Internal ID:
`scene_07_desert_transition`

Public caption:
None.

Behavior:
- camera begins moving again
- dust/sand/light passes across the lens
- sandstone fills enough of frame to hide asset/scene transition
- colors gradually shift from Petra rose/shadow to Wadi Rum openness
- no hard cut

Never render the transition name publicly.

---

## Scene 08 — Wadi Rum Horizon
Asset:
`scroll-08-wadi-rum-horizon.webp`

Internal ID:
`scene_08_wadi_rum`

Public title:
**WADI RUM**

Public caption:
**The horizon opens.**

Secondary caption:
**Continue your Jordan Story.**

CTA:
**Explore Wadi Rum**

Behavior:
- dust clears into a very wide desert composition
- distant formations move slowly
- camera remains human-height
- the contrast from narrow Siq to open desert must feel dramatic

---

# 7. Exit Into Product Discovery

After Wadi Rum, do not jump into a generic white card grid.

Use a visual bridge.

Heading:
**Choose How Your Story Continues**

Then introduce:
- Day Tours
- Petra & Wadi Rum
- Classical Jordan
- Luxury Jordan
- Sacred Journeys
- Custom Jordan Story

The cinematic world should gradually become the booking/discovery experience.

---

# 8. Camera Path

Use a predefined smooth spline.

Conceptual progress:

```text
0.00  Siq entrance
0.15  forward into canyon
0.30  narrow passage
0.45  canyon bend
0.58  final approach
0.66  first Treasury glimpse
0.74  partial reveal
0.82  full Treasury reveal
0.88  plaza
0.93  dust transition
1.00  Wadi Rum horizon
```

These values are internal only.

---

# 9. Camera Rules

- approximate eye height: 1.65–1.75m
- cinematic FOV: roughly 45–60°
- use separate camera position and look-at paths
- slight natural lateral variation
- no drone feeling
- no exaggerated walking bob
- no free-roaming game controls

Optional desktop pointer movement:
- yaw ±2–3°
- pitch ±1–2°
- never enough to break the reveal

---

# 10. Foreground Occlusion

The 3D feeling depends heavily on foreground rocks.

Create lightweight geometry or segmented depth layers such as:

```text
siq-left-wall.glb
siq-right-wall.glb
siq-final-occluder.glb
```

or equivalent.

These should:
- pass close to camera
- move faster than distant layers
- hide crossfades
- physically reveal the Treasury
- create strong parallax

Without foreground occlusion, the world will look like zoomed photographs.

---

# 11. Depth Layers

For each Siq image separate or estimate:

- background
- midground
- foreground
- depth map

Suggested files:

```text
scroll-01-siq-entrance-depth.webp
scroll-02-siq-depth-depth.webp
scroll-03-siq-bend-depth.webp
scroll-04-treasury-first-glimpse-depth.webp
scroll-05-treasury-partial-reveal-depth.webp
scroll-06-petra-treasury-full-depth.webp
scroll-08-wadi-rum-horizon-depth.webp
```

Depth maps are implementation assets, never visible content.

---

# 12. Scroll Physics

Do not map mouse-wheel pixels mechanically to camera position.

Use:
- normalized scroll progress
- smoothing
- small inertia
- clamped maximum visual velocity
- easing around major moments

Slow down before the Treasury.

Nearly stop at full reveal.

Resume through transition.

Fast user scrolling must not destroy the reveal.

Backward scrolling must correctly reverse:
Wadi Rum → Petra → Treasury occlusion → Siq.

---

# 13. Scroll Section Length

A pinned/sticky Scroll World is acceptable.

Conceptual implementation:

```text
long scroll section
→ sticky viewport
→ scroll progress drives timeline
```

Tune length by feel.

Do not make the experience exhausting.

---

# 14. Mobile

Mobile must preserve the same narrative:

Siq → glimpse → Treasury → Wadi Rum.

Simplify with:
- lower-res plates
- fewer geometry layers
- lower DPR
- fewer particles
- shorter path
- lighter transitions
- 2.5D image sequence if necessary

Do not remove the experience entirely on mobile.

---

# 15. Reduced Motion

For `prefers-reduced-motion: reduce`:

Use:
1. Siq still
2. short fade to Treasury
3. Wadi Rum still
4. normal content

No simulated long walk.

Include:
**Skip Journey**

---

# 16. Performance Loading

Initial:
- Siq poster
- first Siq assets
- semantic HTML

As scrolling begins:
- deeper Siq

Before halfway:
- preload Treasury

Before Petra exit:
- preload Wadi Rum

Do not load the entire journey before first paint.

Three.js/WebGL must be progressively enhanced and code-split.

---

# 17. SEO / AEO / GEO Protection

The Scroll World is visual enhancement.

The homepage must still contain real semantic HTML for:
- H1
- Petra
- Wadi Rum
- destinations
- tours
- internal links
- FAQs
- organization data

Never bake essential text into images or canvas.

Use real destination relationships in HTML.

---

# 18. Data Structure

Recommended:

```ts
const scrollWorldScenes = [
  {
    id: "scene_00_arrival",
    asset: "/assets/scroll-world/scroll-01-siq-entrance.webp",
    publicTitle: null,
    publicCaption: "Your Jordan Story begins here.",
    microcopy: "Scroll to enter"
  },
  {
    id: "scene_02_siq_depth",
    asset: "/assets/scroll-world/scroll-02-siq-depth.webp",
    publicTitle: null,
    publicCaption: null
  },
  {
    id: "scene_03_siq_bend",
    asset: "/assets/scroll-world/scroll-03-siq-bend.webp",
    publicTitle: null,
    publicCaption: null
  },
  {
    id: "scene_04_treasury_first_glimpse",
    asset: "/assets/scroll-world/scroll-04-treasury-first-glimpse.webp",
    publicTitle: null,
    publicCaption: null
  },
  {
    id: "scene_05_treasury_partial",
    asset: "/assets/scroll-world/scroll-05-treasury-partial-reveal.webp",
    publicTitle: null,
    publicCaption: null
  },
  {
    id: "scene_06_petra_reveal",
    asset: "/assets/scroll-world/scroll-06-petra-treasury-full.webp",
    publicTitle: "PETRA",
    publicCaption: "The first chapter is only the beginning.",
    cta: "Explore Petra"
  },
  {
    id: "scene_07_desert_transition",
    asset: "/assets/scroll-world/scroll-07-petra-to-wadi-rum-transition.webp",
    publicTitle: null,
    publicCaption: null
  },
  {
    id: "scene_08_wadi_rum",
    asset: "/assets/scroll-world/scroll-08-wadi-rum-horizon.webp",
    publicTitle: "WADI RUM",
    publicCaption: "The horizon opens.",
    secondaryCaption: "Continue your Jordan Story.",
    cta: "Explore Wadi Rum"
  }
];
```

Never render `id` as visible text.

---

# 19. Acceptance Criteria

Reject the build if:
- technical scene labels appear publicly
- frames behave like a slideshow
- no true depth/parallax exists
- Treasury simply fades in
- foreground rocks do not reveal the monument
- camera feels like a drone
- Wadi Rum appears through a hard cut
- mobile loses the story
- hero blocks semantic SEO content
- generated images look like unrelated travel photos

Approve only when the visitor feels:
**I moved through the Siq and arrived at Petra.**

Then:
**The journey continued into Wadi Rum.**

Then:
**Which tour lets me experience this?**

That is the purpose of the Scroll World.
