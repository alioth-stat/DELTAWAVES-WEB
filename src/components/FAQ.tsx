import { useState } from "react"

const items = [
  {
    q: "¿Qué es DELTAWAVES?",
    a: "DELTAWAVES es un grupo estudiantil de Inteligencia Artificial del ITSE (Instituto Técnico Superior Especializado) en Panamá. Fundado en el MUPA Hackathon a finales de 2025, desarrollamos soluciones de IA aplicadas a la logística.",
  },
  {
    q: "¿Qué es TYR Logistics OS?",
    a: "TYR Logistics OS es una plataforma de gestión de envíos con IA, desplegada en Vercel. Incluye un dashboard con KPIs, tablero Kanban arrastrable (dnd-kit), lista de envíos filtrables y un AI Copilot basado en Groq LLM para consultas en lenguaje natural sobre envíos y contenedores.",
  },
  {
    q: "¿Qué es el Gemelo Centenario Digital Twin?",
    a: "Es un simulador en tiempo real de la Vía Centenario de Panamá. Usa MapLibre GL para el mapa 3D, anima 40 vehículos con un motor de simulación a 100ms (1 seg real = 60 min simulados) y soporta 6 escenarios de tráfico: normal, rush, accident, construction, mercapeak y newwarehouse.",
  },
  {
    q: "¿Cómo se integran los dos proyectos?",
    a: "TYR actúa como el shell (navbar, chat IA). El gemelo digital está accesible desde la ruta /twin. Los envíos activos de TYR aparecen como puntos en el mapa, y el estado del corredor (tráfico, incidentes) alimenta el contexto del AI Copilot.",
  },
  {
    q: "¿Puedo ver la plataforma en acción?",
    a: "Sí. TYR Logistics OS está desplegado en tyr-logistics-os.vercel.app/dashboard. También puedes vernos en persona en Expo Logística Panamá 2026, donde presentamos la plataforma unificada con demo en vivo.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 grid-bg">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-3">FAQ</p>
          <h2
            className="text-4xl md:text-5xl text-white"
            style={{ fontFamily: "Instrument Serif, serif" }}
          >
            Preguntas{" "}
            <span className="gradient-text italic">frecuentes</span>
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="glass rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
              >
                <span className="text-white font-medium pr-4">{item.q}</span>
                <svg
                  className={`w-5 h-5 text-white/30 flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-white/40 text-sm leading-relaxed border-t border-white/[0.05] pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
