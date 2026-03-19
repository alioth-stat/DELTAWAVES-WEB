const pastEvents = [
  {
    name: "Hackathon ITSE MUPA 2025",
    date: "Finales 2025",
    role: "Participantes & Ganadores 🏆",
    desc: "Nuestro punto de origen. DELTAWAVES nació en el hackathon del ITSE organizado por la Fundación MUPA. Presentamos los primeros prototipos de TYR y el Gemelo Centenario y nos llevamos el primer lugar.",
    icon: "⚡",
  },
  {
    name: "Expo Logística Panamá 2026",
    date: "11 de Marzo, 2026",
    role: "Expositores Oficiales",
    desc: "Presentación formal de TYR Logistics OS y la plataforma unificada ante la industria logística panameña. Demo en vivo del dashboard, el AI Copilot y el Gemelo Digital de la Vía Centenario.",
    icon: "🎤",
  },
]

const upcomingEvents = [
  {
    name: "Hackathon COPA",
    date: "Próximamente",
    desc: "Participación en el hackathon organizado por Copa Airlines. DELTAWAVES llevará su expertise en gemelos digitales y IA aplicada al sector de aviación y transporte.",
    icon: "✈️",
  },
  {
    name: "BLU — ITSE",
    date: "Próximamente",
    desc: "Evento tecnológico del ITSE donde presentaremos el avance de Conecta-Panamá y los últimos desarrollos en nuestro ecosistema de gemelos digitales.",
    icon: "🔵",
  },
  {
    name: "Festival MATH 2026 — ITSE",
    date: "2026",
    desc: "Participación en el Festival de Matemáticas del ITSE con una demostración del componente de modelado matemático que sustenta nuestros motores de simulación y predicción epidemiológica.",
    icon: "∑",
  },
]

export default function Events() {
  return (
    <section id="eventos" className="py-32 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label mb-4">Eventos</p>
          <h2
            className="text-5xl md:text-6xl text-white"
            style={{ fontFamily: "Instrument Serif, serif" }}
          >
            Donde hemos estado
            <br />y <span className="gradient-text italic">a dónde vamos.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Past events */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-white/10" />
              <span className="section-label">Pasados</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="space-y-5">
              {pastEvents.map((e) => (
                <div
                  key={e.name}
                  className="glass rounded-2xl p-6 flex gap-5"
                >
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-2xl flex-shrink-0">
                    {e.icon}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-white font-semibold text-sm">{e.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="text-xs text-white/30"
                        style={{ fontFamily: "Azeret Mono, monospace" }}
                      >
                        {e.date}
                      </span>
                      <span className="text-xs text-white/25">·</span>
                      <span className="text-xs text-white/45">{e.role}</span>
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed mt-1">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming events */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-white/10" />
              <span className="section-label flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse inline-block" />
                Próximos
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="space-y-5">
              {upcomingEvents.map((e) => (
                <div
                  key={e.name}
                  className="rounded-2xl p-6 flex gap-5 border border-white/[0.06] border-dashed hover:bg-white/[0.03] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-2xl flex-shrink-0 opacity-60">
                    {e.icon}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-white/70 font-semibold text-sm">{e.name}</h3>
                    <span
                      className="text-xs text-white/25"
                      style={{ fontFamily: "Azeret Mono, monospace" }}
                    >
                      {e.date}
                    </span>
                    <p className="text-white/30 text-xs leading-relaxed mt-1">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
