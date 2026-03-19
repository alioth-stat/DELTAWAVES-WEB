import AccretionBackground from "./AccretionBackground"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      <AccretionBackground />

      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-6 select-none">
        {/* δ glyph */}
        <span
          className="text-7xl md:text-8xl font-bold text-white/10 leading-none mb-2"
          style={{ fontFamily: "Instrument Serif, serif" }}
        >
          δ
        </span>

        {/* Name */}
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-none"
          style={{ fontFamily: "Instrument Serif, serif", letterSpacing: "-0.02em" }}
        >
          DELTA<span className="gradient-text">WAVES</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-base md:text-lg text-white/35 max-w-md leading-relaxed mt-2"
          style={{ fontFamily: "Barlow, sans-serif", fontWeight: 400 }}
        >
          Estudiantes de IA que llevan tecnologías del futuro a Panamá.
          <br />
          Instituto Técnico Superior Especializado · 2025–
        </p>

        {/* Divider line */}
        <div className="w-24 h-px bg-white/10 mt-4" />

        {/* Scroll cue */}
        <div className="mt-8 flex flex-col items-center gap-2 text-white/20 text-xs" style={{ fontFamily: "Azeret Mono, monospace" }}>
          <span>scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </section>
  )
}
