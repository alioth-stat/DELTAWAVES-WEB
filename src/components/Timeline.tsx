const milestones = [
  {
    date: "Finales 2025",
    title: "ITSE MUPA Hackathon",
    desc: "Fundación de DELTAWAVES. Primer prototipo de TYR Logistics OS y Gemelo Centenario presentado en el hackathon.",
    badge: "🏆 Ganadores",
  },
  {
    date: "2026 Q1",
    title: "Desarrollo de plataformas",
    desc: "Construcción completa de TYR Logistics OS (React 19 + FastAPI + Groq) y Gemelo Centenario (MapLibre + simulación).",
    badge: "⚙️ Dev",
  },
  {
    date: "11 Mar 2026",
    title: "Expo Logística Panamá",
    desc: "Presentación oficial de TYR Logistics OS ante la industria logística panameña. Demo en vivo del dashboard y AI Copilot.",
    badge: "🎤 Presentación",
  },
  {
    date: "Mar 2026",
    title: "Plataforma Unificada",
    desc: "Fusión de TYR + Gemelo Centenario en una sola app. Diseño liquid-glass, ruta /twin y chat IA alimentado por el corredor.",
    badge: "🚀 Launch",
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 border-t border-white/[0.05]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Timeline</p>
          <h2
            className="text-4xl md:text-5xl text-white"
            style={{ fontFamily: "Instrument Serif, serif" }}
          >
            De un hackathon a{" "}
            <span className="gradient-text italic">Expo Logística</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-8 pl-14 relative">
                {/* Dot */}
                <div className="absolute left-3 top-1.5 w-4 h-4 rounded-full bg-white/20 ring-4 ring-white/[0.06] flex-shrink-0" />

                {/* Content */}
                <div className="glass rounded-xl p-6 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span
                      className="text-xs text-white/30"
                      style={{ fontFamily: "Azeret Mono, monospace" }}
                    >
                      {m.date}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/[0.05] text-white/50">
                      {m.badge}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{m.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
