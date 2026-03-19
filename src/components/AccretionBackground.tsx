/**
 * AccretionBackground — replicates the Framer template's hero visual.
 *
 * Layer stack (bottom → top):
 *   1. PNG alpha mask clips the glow to a soft nebula/disk shape
 *   2. Radial gradient glow (crimson → pink → violet → blue → dark ocean)
 *   3. Dark vignette (transparent center → solid black at edges)
 *   4. Subtle breathing CSS animation
 *
 * Mask source: framerusercontent.com/images/KrtEpetX0JndZB1QUZVp2ZKCDiY.png
 * (2400×1080 white nebula shape on transparent background, used as alpha mask)
 */

const MASK_URL =
  "https://framerusercontent.com/images/KrtEpetX0JndZB1QUZVp2ZKCDiY.png?width=2400&height=1080"

// Crimson → hot pink → magenta → violet → bright blue → dark ocean blue
const GLOW_GRADIENT =
  "radial-gradient(32% 25% at 50% 60.4%, #ff1a40 0%, #f72585 22%, #b5179e 44%, #7209b7 62%, #4361ee 80%, #0c2461 100%)"

// Transparent center fading to solid black at edges (matches original 42% 50% at 50% 50%)
const VIGNETTE_GRADIENT =
  "radial-gradient(42% 50% at 50% 50%, transparent 30%, rgba(0,0,0,0.65) 62%, #000 100%)"

export default function AccretionBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Masked glow — the PNG mask clips this div to the nebula cloud shape */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -52%)",
          width: 2400,
          height: 1080,
          WebkitMask: `url(${MASK_URL}) 50% / cover no-repeat`,
          mask: `url(${MASK_URL}) 50% / cover no-repeat alpha`,
        }}
      >
        <div
          className="accretion-glow"
          style={{
            position: "absolute",
            inset: 0,
            background: GLOW_GRADIENT,
            opacity: 0.88,
          }}
        />
      </div>

      {/* Vignette — keeps edges dark, pulls focus to the glowing center */}
      <div
        style={{
          position: "absolute",
          inset: -1,
          background: VIGNETTE_GRADIENT,
          zIndex: 2,
        }}
      />
    </div>
  )
}
