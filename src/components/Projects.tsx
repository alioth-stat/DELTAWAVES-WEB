const projects = [
  {
    name: "TYR Logistics OS",
    tagline: "Plataforma de gestión de envíos con IA",
    description:
      "Dashboard con KPIs en tiempo real, Kanban arrastrable, lista de envíos filtrables y un Copilot de IA impulsado por Groq LLM para consultas sobre envíos.",
    url: "https://tyr-logistics-os.vercel.app/dashboard",
    routes: ["/dashboard", "/pipeline", "/shipments", "/documents"],
    stack: ["React 19", "TypeScript", "Tailwind 4", "Vite 7", "Zustand", "FastAPI"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    name: "Gemelo Centenario",
    tagline: "Simulador en tiempo real de la Vía Centenario",
    description:
      "Mapa 3D interactivo (MapLibre GL) con 40 vehículos animados, motor de simulación a 100ms y 6 escenarios de tráfico. Resuelve congestión, accidentes y optimización de sensores.",
    url: null,
    routes: ["/corridor", "/simulator", "/analytics"],
    stack: ["React 18", "MapLibre GL", "react-map-gl", "Tailwind 3", "i18n ES/EN"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Proyectos Principales</p>
          <h2
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: "Instrument Serif, serif" }}
          >
            Dos Proyectos.{" "}
            <span className="gradient-text italic">Una Visión.</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Integrados en una plataforma unificada para Expo Logística 2026.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="glass rounded-2xl p-8 flex flex-col gap-6 hover:bg-white/[0.06] transition-all duration-300"
            >
              {/* Icon + name */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0 text-white/70">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                  <p className="text-sm text-white/40 mt-0.5">{p.tagline}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/50 leading-relaxed text-sm">{p.description}</p>

              {/* Routes */}
              <div>
                <p className="text-xs text-white/25 uppercase tracking-wider mb-2">Rutas</p>
                <div className="flex flex-wrap gap-2">
                  {p.routes.map((r) => (
                    <span key={r} className="route-pill">{r}</span>
                  ))}
                </div>
              </div>

              {/* Stack */}
              <div>
                <p className="text-xs text-white/25 uppercase tracking-wider mb-2">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              {/* Link */}
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
                >
                  Ver en Vercel
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              ) : (
                <span className="mt-auto text-sm text-white/25 italic">
                  Integrado en la plataforma unificada · /twin
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Fusion callout */}
        <div className="mt-8 glass rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0 text-white/60">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Plataforma Unificada</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                TYR como shell (navbar, chat IA), con el gemelo digital en la ruta{" "}
                <code
                  className="text-white/70 bg-white/[0.07] px-1.5 py-0.5 rounded"
                  style={{ fontFamily: "Azeret Mono, monospace" }}
                >
                  /twin
                </code>
                . Los envíos de TYR aparecen en el mapa; el estado del corredor alimenta el chat IA.
                Diseño: liquid-glass, Instrument Serif / Barlow / Azeret Mono.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
