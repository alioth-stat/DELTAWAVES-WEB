const tyrFeatures = [
  {
    icon: "📊",
    title: "Dashboard con KPIs",
    desc: "Gráficos en tiempo real (Recharts) con métricas de envíos, volumen, SLA y estado de contenedores.",
  },
  {
    icon: "🤖",
    title: "AI Copilot (Groq)",
    desc: "Chat contextual sobre envíos con llama-3.3-70b-versatile. Historial persistido con Zustand.",
  },
  {
    icon: "📋",
    title: "Pipeline Kanban",
    desc: "Tablero arrastrable con dnd-kit: Backlog → En Tránsito → Entregado → Incidente.",
  },
  {
    icon: "🔍",
    title: "Backend NER",
    desc: "FastAPI con servicios de Named Entity Recognition para PUERTO, BL y CONTENEDOR en texto libre.",
  },
]

const gemeloFeatures = [
  {
    icon: "🗺️",
    title: "Mapa 3D en Tiempo Real",
    desc: "Vía Centenario renderizada con MapLibre GL y react-map-gl con capa de tráfico live.",
  },
  {
    icon: "🚛",
    title: "40 Vehículos Animados",
    desc: "Motor de simulación a 100ms (1 seg real = 60 min simulados). Perfiles de tráfico por hora.",
  },
  {
    icon: "⚠️",
    title: "Escenarios de Tráfico",
    desc: "normal · rush · accident · construction · mercapeak · newwarehouse con factores de velocidad/volumen.",
  },
  {
    icon: "📈",
    title: "Analytics de Corredor",
    desc: "Gráficos de flujo vehicular, tiempos de travesía y detección de cuellos de botella.",
  },
]

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="glass rounded-xl p-5 flex flex-col gap-3 hover:bg-white/[0.06] transition-colors">
      <span className="text-2xl">{icon}</span>
      <h4 className="text-white font-medium text-sm">{title}</h4>
      <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

export default function FeaturesSection() {
  return (
    <section className="py-24 grid-bg">
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* TYR Features */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3 flex-shrink-0">
            <span className="route-pill mb-4 inline-block">TYR Logistics OS</span>
            <h2
              className="text-3xl md:text-4xl text-white mb-4"
              style={{ fontFamily: "Instrument Serif, serif" }}
            >
              Gestión de envíos,{" "}
              <span className="gradient-text italic">potenciada por IA</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Una plataforma completa para operadores logísticos — desde el seguimiento de
              contenedores hasta consultas en lenguaje natural con el copilot de IA.
            </p>
            <a
              href="https://tyr-logistics-os.vercel.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
            >
              Abrir dashboard →
            </a>
          </div>
          <div className="flex-1 grid sm:grid-cols-2 gap-4">
            {tyrFeatures.map((f) => <FeatureCard key={f.title} {...f} />)}
          </div>
        </div>

        <div className="border-t border-white/[0.05]" />

        {/* Gemelo Features */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
          <div className="md:w-1/3 flex-shrink-0">
            <span className="route-pill mb-4 inline-block">Gemelo Centenario</span>
            <h2
              className="text-3xl md:text-4xl text-white mb-4"
              style={{ fontFamily: "Instrument Serif, serif" }}
            >
              La Vía Centenario,{" "}
              <span className="gradient-text italic">en digital</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Un gemelo digital que simula el corredor logístico más importante de Panamá,
              con escenarios de congestión, accidentes y eventos especiales.
            </p>
            <span className="text-sm text-white/25 italic">
              Disponible en la plataforma unificada · /twin
            </span>
          </div>
          <div className="flex-1 grid sm:grid-cols-2 gap-4">
            {gemeloFeatures.map((f) => <FeatureCard key={f.title} {...f} />)}
          </div>
        </div>

      </div>
    </section>
  )
}
