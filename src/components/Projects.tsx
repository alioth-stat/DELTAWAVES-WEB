const projects = [
  {
    id: "conecta",
    name: "Conecta-Panamá",
    area: "Conectividad & Datos Abiertos",
    status: "En desarrollo",
    icon: "🇵🇦",
    desc: "Plataforma de datos abiertos y conectividad digital para Panamá. Agrega fuentes de datos gubernamentales, logísticos y de infraestructura en una API unificada accesible para desarrolladores y tomadores de decisiones.",
    tags: ["Open Data", "API", "Infraestructura", "Gov-Tech"],
  },
  {
    id: "tyr",
    name: "TYR AI — Logistics OS",
    area: "Inteligencia Artificial · Logística",
    status: "Desplegado",
    icon: "📦",
    desc: "Sistema operativo de logística impulsado por IA. Dashboard con KPIs, Kanban de envíos, AI Copilot con Groq LLM y backend FastAPI con Named Entity Recognition para documentos logísticos.",
    tags: ["React 19", "FastAPI", "Groq LLM", "NER", "Vercel"],
    url: "https://tyr-logistics-os.vercel.app/dashboard",
  },
  {
    id: "gemelo-centenario",
    name: "Gemelo Digital · Vía Centenario",
    area: "Digital Twin · Infraestructura",
    status: "Desplegado",
    icon: "🛣️",
    desc: "Réplica virtual en tiempo real del corredor logístico más importante de Panamá. Simula 40 vehículos, 6 escenarios de tráfico y analiza flujos vehiculares para anticipar congestionamientos y tomar decisiones de infraestructura.",
    tags: ["MapLibre GL", "Simulación", "React 18", "Digital Twin"],
  },
  {
    id: "gemelos-otros",
    name: "Otros Gemelos Digitales",
    area: "Digital Twin · Expansión",
    status: "Roadmap",
    icon: "🌐",
    desc: "Expansión del modelo de gemelos digitales a otros puntos críticos de infraestructura panameña: Puerto de Colón, Aeropuerto de Tocumen, Canal de Panamá y zonas de libre comercio. El objetivo es construir una red de gemelos interconectados.",
    tags: ["Roadmap", "Puertos", "Aeropuertos", "Canal de Panamá"],
  },
  {
    id: "outbreaks",
    name: "Outbreaks Prevention",
    area: "Salud Pública · IA Epidemiológica",
    status: "Investigación",
    icon: "🦠",
    desc: "Sistema de detección temprana y prevención de brotes epidemiológicos en Panamá. Usa modelos de IA para procesar datos de salud pública, flujos migratorios y patrones climáticos, y alerta a autoridades antes de que un brote se propague.",
    tags: ["Epidemiología", "Salud Pública", "Predicción", "Datos"],
  },
]

const statusColor: Record<string, string> = {
  "Desplegado":    "bg-white/10 text-white/70",
  "En desarrollo": "bg-white/[0.06] text-white/45",
  "Roadmap":       "bg-white/[0.04] text-white/30",
  "Investigación": "bg-white/[0.04] text-white/30",
}

export default function Projects() {
  return (
    <section id="proyectos" className="py-32 border-t border-white/[0.05] grid-bg">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label mb-4">Proyectos</p>
          <h2
            className="text-5xl md:text-6xl text-white"
            style={{ fontFamily: "Instrument Serif, serif" }}
          >
            Lo que estamos
            <br />
            <span className="gradient-text italic">construyendo.</span>
          </h2>
          <p className="text-white/35 text-base max-w-lg mx-auto mt-5 leading-relaxed">
            Desde logística con IA hasta salud pública. Proyectos reales para problemas reales de Panamá.
          </p>
        </div>

        {/* Project cards — first two large, then three smaller */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {projects.slice(0, 2).map((p) => (
            <ProjectCard key={p.id} project={p} large />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.slice(2).map((p) => (
            <ProjectCard key={p.id} project={p} large={false} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ProjectCard({
  project: p,
  large,
}: {
  project: typeof projects[number]
  large: boolean
}) {
  return (
    <div
      className="glass rounded-2xl p-7 flex flex-col gap-5 hover:bg-white/[0.06] transition-colors duration-300"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className={`${large ? "text-4xl" : "text-3xl"}`}>{p.icon}</span>
          <div>
            <h3
              className={`text-white font-semibold ${large ? "text-xl" : "text-base"}`}
            >
              {p.name}
            </h3>
            <p className="text-white/30 text-xs mt-0.5">{p.area}</p>
          </div>
        </div>
        <span
          className={`text-xs px-2.5 py-1 rounded-full flex-shrink-0 ${statusColor[p.status] ?? "bg-white/[0.05] text-white/30"}`}
          style={{ fontFamily: "Azeret Mono, monospace" }}
        >
          {p.status}
        </span>
      </div>

      {/* Description */}
      <p className={`text-white/45 leading-relaxed ${large ? "text-sm" : "text-xs"}`}>
        {p.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {p.tags.map((t) => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
      </div>

      {/* Link if deployed */}
      {p.url && (
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors w-fit"
        >
          Abrir
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      )}
    </div>
  )
}
