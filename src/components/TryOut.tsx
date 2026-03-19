/**
 * TryOut section — live demos and explanations for TYR AI and Gemelo Digital.
 */

function WhatIsGemelo() {
  return (
    <div className="glass rounded-2xl p-8 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <span className="text-3xl">🌐</span>
        <div>
          <h3 className="text-white font-semibold text-lg">¿Qué es un Gemelo Digital?</h3>
          <p className="text-white/30 text-xs mt-0.5" style={{ fontFamily: "Azeret Mono, monospace" }}>Digital Twin</p>
        </div>
      </div>
      <p className="text-white/50 text-sm leading-relaxed">
        Un <strong className="text-white/80">gemelo digital</strong> es una réplica virtual en tiempo real de un objeto, sistema o proceso físico.
        En el mundo logístico, permite simular el comportamiento de infraestructuras completas —
        carreteras, puertos, almacenes — antes de tomar decisiones costosas en el mundo real.
      </p>
      <div className="space-y-3">
        {[
          { icon: "🔄", label: "Sincronizado en tiempo real", desc: "Los datos del mundo físico alimentan el modelo virtual continuamente." },
          { icon: "🎯", label: "Simulación de escenarios", desc: "Prueba qué pasa con un accidente, una huelga o un evento especial sin riesgos." },
          { icon: "📊", label: "Análisis predictivo", desc: "El gemelo anticipa cuellos de botella y propone soluciones antes de que ocurran." },
        ].map((f) => (
          <div key={f.label} className="flex gap-3 items-start">
            <span className="text-lg flex-shrink-0 mt-0.5">{f.icon}</span>
            <div>
              <p className="text-white/70 text-sm font-medium">{f.label}</p>
              <p className="text-white/35 text-xs leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-white/30 text-xs leading-relaxed border-t border-white/[0.06] pt-4">
        Nuestro <strong className="text-white/50">Gemelo de la Vía Centenario</strong> simula el corredor logístico
        más importante de Panamá con 40 vehículos animados, 6 escenarios de tráfico y un motor de
        simulación a 100ms. No existe nada parecido implementado para infraestructura panameña.
      </p>
    </div>
  )
}

function DemoCard({
  badge,
  title,
  desc,
  features,
  url,
  urlLabel,
  note,
  glow,
}: {
  badge: string
  title: string
  desc: string
  features: string[]
  url?: string
  urlLabel?: string
  note?: string
  glow?: string
}) {
  return (
    <div
      className="glass rounded-2xl p-8 flex flex-col gap-6 h-full"
      style={glow ? { boxShadow: glow } : undefined}
    >
      <div>
        <span className="route-pill">{badge}</span>
        <h3
          className="text-2xl text-white mt-4 mb-2"
          style={{ fontFamily: "Instrument Serif, serif" }}
        >
          {title}
        </h3>
        <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
      </div>

      <ul className="space-y-2 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-white/50">
            <span className="text-white/20 mt-0.5 flex-shrink-0">—</span>
            {f}
          </li>
        ))}
      </ul>

      <div>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-all hover:scale-[1.02]"
          >
            {urlLabel ?? "Probar ahora"}
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        ) : (
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-white/30 text-sm cursor-not-allowed">
            {note ?? "Próximamente"}
          </div>
        )}
      </div>
    </div>
  )
}

export default function TryOut() {
  return (
    <section id="demos" className="py-32 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label mb-4">Prueba en Vivo</p>
          <h2
            className="text-5xl md:text-6xl text-white"
            style={{ fontFamily: "Instrument Serif, serif" }}
          >
            Dos plataformas.
            <br />
            <span className="gradient-text italic">Construidas aquí.</span>
          </h2>
          <p className="text-white/35 text-base max-w-lg mx-auto mt-5 leading-relaxed">
            No son maquetas ni slides. Son sistemas reales, desplegados, que puedes usar ahora mismo.
          </p>
        </div>

        {/* Demos row */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <DemoCard
            badge="TYR AI · tyr-logistics-os.vercel.app"
            title="TYR Logistics OS"
            desc="Plataforma de gestión de envíos con IA. Dashboard con KPIs en tiempo real, tablero Kanban y un Copilot de IA que entiende lenguaje natural sobre logística."
            features={[
              "AI Copilot con Groq LLM — pregunta sobre tus envíos en español",
              "Tablero Kanban arrastrable (dnd-kit) con estados de envío",
              "Dashboard con gráficos de volumen y estado de contenedores",
              "Backend FastAPI con NER para extraer puertos, BLs y contenedores",
              "Historial de conversación persistido con Zustand",
            ]}
            url="https://tyr-logistics-os.vercel.app/dashboard"
            urlLabel="Abrir TYR Dashboard"
            glow="0 0 60px rgba(255,26,64,0.08)"
          />
          <DemoCard
            badge="Gemelo Digital · /twin"
            title="Gemelo de la Vía Centenario"
            desc="Simulador en tiempo real del corredor logístico más importante de Panamá. Mapa 3D interactivo con 40 vehículos animados y 6 escenarios de tráfico distintos."
            features={[
              "Mapa 3D con MapLibre GL — Vía Centenario completa renderizada",
              "40 vehículos animados con motor de simulación a 100ms",
              "6 escenarios: normal, rush, accidente, construcción, mercapeak, nuevo almacén",
              "Analytics de flujo vehicular y tiempos de travesía",
              "Integrado con TYR: los envíos aparecen como puntos en el mapa",
            ]}
            note="Demo integrado en plataforma unificada"
            glow="0 0 60px rgba(67,97,238,0.08)"
          />
        </div>

        {/* What is a Gemelo Digital */}
        <WhatIsGemelo />

      </div>
    </section>
  )
}
