# 28 — 3D Asset Production Pipeline
## Jordan Story Tours — Siq, Treasury, Wadi Rum & Cinematic World

**Purpose:** Define how the immersive homepage assets are sourced, modeled, optimized, tested and deployed.

---

# 1. Experience Goal

The visitor should feel:

**I am moving through the Siq.**
→ **I discover the Treasury.**
→ **Jordan opens into Wadi Rum.**

This requires believable spatial continuity, not simply pretty images.

---

# 2. Final Asset Strategy

Preferred production model:

## Petra / Siq
Optimized real 3D environment based on accurate references.

## Treasury
High-detail optimized focal asset.

## Wadi Rum
Lighter 3D terrain + formations + atmospheric environment.

## Dead Sea / later scenes
Light 3D or cinematic 2.5D where sufficient.

---

# 3. Source Priority

1. legal/approved real scan or photogrammetry
2. custom artist modeling from accurate references
3. licensed commercial model
4. hybrid reconstruction
5. AI-assisted support only

AI-generated geometry should not become the authoritative Petra representation.

---

# 4. Reference Package

Gather:

- real Siq photos
- video walkthrough
- wall shapes
- path width
- Treasury reveal angle
- Treasury proportions
- Wadi Rum formations
- daylight references
- sunset/night references

---

# 5. Rights

For every source:

- owner
- license
- allowed modification
- commercial web use
- attribution requirement
- redistribution restriction

Do not ship source assets without rights.

---

# 6. Blender Production

Recommended production tool:

**Blender**

Use for:

- cleanup
- modeling
- retopology
- UV
- baking
- LOD
- export

Other professional tools may be used, but final web assets must follow the same optimization rules.

---

# 7. Scan Cleanup

Raw scan/photogrammetry pipeline:

```text
raw scan
→ remove artifacts
→ close/repair geometry
→ decimate
→ retopology
→ UV
→ bake detail
→ texture optimization
→ LOD
→ export
```

---

# 8. Mesh Segmentation

Siq should be split:

- Entry
- Mid Canyon
- Final Turn
- Treasury Approach
- Treasury Plaza

This supports streaming/loading.

---

# 9. Camera Path

Author a spline/path.

Store control points as developer-controlled data.

The path must:

- feel natural
- avoid geometry clipping
- control reveal
- keep enough forward motion
- support backward scroll

---

# 10. Treasury Occlusion

The Treasury should be naturally hidden by canyon walls until the reveal moment.

Do not fake the reveal purely by opacity if actual geometry can create it.

---

# 11. Pointer Look

Camera may add subtle yaw/pitch offset.

Limits must prevent:

- seeing outside model
- breaking reveal
- motion sickness
- gameplay feel

---

# 12. Geometry Budgets

Set targets after prototype.

Monitor:

- visible triangles
- total loaded triangles
- draw calls
- mesh count

Do not approve raw scan density.

---

# 13. LOD

Create:

- LOD0 high
- LOD1 medium
- LOD2 low

Use based on distance/device tier.

---

# 14. Textures

Prefer:

- PBR
- compressed KTX2
- atlas where useful
- baked normals
- baked AO/detail

Avoid excessive unique maps.

---

# 15. Texture Tiers

Desktop high:
higher resolution

Mobile:
lower resolution

Fallback:
no 3D texture load

---

# 16. Lighting

Use:

- HDR/environment where appropriate
- baked lightmaps
- limited dynamic lighting

The reveal can change exposure/light subtly.

Avoid expensive real-time GI.

---

# 17. Shadows

Use only where important.

Treasury:
selected shadow quality

Mobile:
reduced

Fallback:
baked/static

---

# 18. Dust

Dust particles:

- subtle
- low count
- no heavy volumetric simulation

Atmosphere must not obscure the location.

---

# 19. Wadi Rum

Build with:

- simple terrain
- major rock silhouettes
- sky
- haze
- optional jeep/camel silhouette
- day/sunset progression

Do not recreate an entire open world.

---

# 20. Wadi Rum Transition

Possible:

**Petra sandstone**
→ particle/sand transition
→ widening field
→ Wadi Rum

Use shader/mask only if performance allows.

---

# 21. Dead Sea

If retained:

- simple terrain
- horizon
- reflective surface
- slow movement

It should be lighter than Petra/Wadi Rum.

---

# 22. GLB Export

Use GLB where practical.

Check:

- transforms applied
- scale
- origin
- normals
- materials
- animation tracks
- unused objects removed

---

# 23. Geometry Compression

Use:

- Meshopt
or
- Draco where justified

Benchmark decode cost vs transfer savings.

---

# 24. KTX2

Use KTX2/Basis texture compression.

Test browser/device compatibility.

---

# 25. Asset Naming

Example:

```text
petra-siq-entry-lod0-v001.glb
petra-siq-entry-lod1-v001.glb
petra-treasury-v003.glb
wadi-rum-rocks-v002.glb
```

Version files.

---

# 26. CDN Paths

Example:

```text
/assets/3d/petra/
/assets/3d/wadi-rum/
/assets/3d/dead-sea/
/assets/3d/shared/
```

---

# 27. Prototype First

Build only:

**Siq → Treasury**

before full production.

Test visual/performance.

---

# 28. Prototype Approval Criteria

- believable forward motion
- Treasury reveal works
- acceptable desktop FPS
- acceptable mid-range phone
- manageable transfer
- no long loading gate
- fallback works

---

# 29. Mobile Simplification

Possible:

- fewer segments
- lower LOD
- lower textures
- lower pixel ratio
- no post-processing
- fewer particles

Do not merely shrink desktop resolution.

---

# 30. Cinematic Fallback

Produce separate optimized fallback assets.

Possibilities:

- short video
- image sequence
- editorial images

Fallback must preserve scene order.

---

# 31. Reduced Motion

Prefer static editorial scenes.

Do not load unnecessary 3D.

---

# 32. Loading Poster

Use high-quality first visual so the user sees Jordan immediately.

No blank canvas.

---

# 33. Scene Loading

Load:

1. first Siq
2. near Siq
3. Treasury
4. Wadi Rum later
5. later scenes on demand

---

# 34. Memory

Dispose old scene resources when no longer needed.

Test iOS Safari memory.

---

# 35. Visual QA

Compare against references:

- color
- shape
- reveal
- scale
- atmosphere

Petra must remain recognizable and respectful.

---

# 36. Artistic QA

Avoid:

- fantasy architecture
- exaggerated canyon
- fake monument additions
- gaming UI
- excessive lens flare

---

# 37. Accessibility

3D is optional presentation.

HTML retains:

- headline
- text
- navigation
- CTA
- destination links

---

# 38. Asset Handover

Final 3D package should include:

- source Blender file or approved source project
- exported GLB
- texture source
- optimized KTX2
- LODs
- licenses
- README
- camera path config
- fallback assets

---

# 39. Final Principle

The goal is not:

**the most complex 3D Jordan website.**

The goal is:

**the most convincing first few moments of entering Jordan that still load fast enough to sell tours.**
