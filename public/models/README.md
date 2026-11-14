# 3D assets

Put Three.js / Spline exports here (e.g. `spica.glb`, `body-onboard.glb`).
Files in /public are served from the site root, so load them as `/models/spica.glb`.

- Spica star → `src/components/SpicaStar/SpicaStar.tsx` (mount the renderer in `stageRef`)
- Body figure → `src/components/BodyMap.tsx` (replace `.bodymap__figure`, keep the hotspot buttons)
