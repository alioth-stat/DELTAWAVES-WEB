const aiFeatures = [
  {
    title: "Chat sobre envíos",
    desc: 'Consulta en lenguaje natural: "¿Dónde está el BL MSKU123?" y obtén respuesta contextual al instante.',
    icon: "💬",
  },
  {
    title: "NER especializado",
    desc: "Extracción de entidades logísticas: PUERTO, BL y CONTENEDOR desde cualquier texto o documento.",
    icon: "🏷️",
  },
  {
    title: "Historial persistido",
    desc: "Contexto de conversación guardado con Zustand. El copilot recuerda tus envíos y consultas anteriores.",
    icon: "🧠",
  },
  {
    title: "Proxy inteligente a Groq",
    desc: "Backend FastAPI que enriquece cada prompt con datos de logistics.json antes de enviarlo al LLM.",
    icon: "⚡",
  },
]

export default function AISection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Faint glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 40% at 50% 50%, rgba(114,9,183,0.06) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Chat mockup */}
          <div className="flex-1 w-full">
            <div
              className="glass-strong rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 0 60px rgba(114,9,183,0.1)" }}
            >
              {/* Header */}
              <div className="px-5 py-4 border-b border-white/[0.06] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white/70">
                  AI
                </div>
                <div>
                  <p className="text-sm font-medium text-white">TYR Copilot</p>
                  <p className="text-xs text-white/30" style={{ fontFamily: "Azeret Mono, monospace" }}>
                    llama-3.3-70b-versatile · Groq
                  </p>
                </div>
                <span className="ml-auto flex items-center gap-1.5 text-xs text-white/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
                  Online
                </span>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4 bg-black/40">
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs flex-shrink-0 text-white/50">
                    U
                  </div>
                  <div className="glass rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-white/70 max-w-xs">
                    ¿Cuántos contenedores están en el puerto de Colón ahora?
                  </div>
                </div>
                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs flex-shrink-0 font-bold text-white/50">
                    AI
                  </div>
                  <div className="glass rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-white/70 max-w-xs">
                    Detecté <strong className="text-white/90">PUERTO: Colón</strong>. Actualmente tienes{" "}
                    <strong className="text-white">47 contenedores</strong> en ese puerto:
                    23 en espera de carga y 24 en descarga.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs flex-shrink-0 text-white/50">
                    U
                  </div>
                  <div className="glass rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-white/70 max-w-xs">
                    Muéstrame el BL MSKU-9234 y su estado actual.
                  </div>
                </div>
                {/* Typing indicator */}
                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs flex-shrink-0 text-white/50">
                    AI
                  </div>
                  <div className="glass rounded-2xl rounded-tr-sm px-4 py-3 flex gap-1 items-center">
                    {[0, 150, 300].map((delay) => (
                      <span
                        key={delay}
                        className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce"
                        style={{ animationDelay: `${delay}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="px-5 py-4 border-t border-white/[0.06] flex gap-3 items-center">
                <input
                  readOnly
                  type="text"
                  placeholder="Consulta sobre tus envíos..."
                  className="flex-1 bg-transparent text-sm text-white/40 placeholder-white/20 outline-none"
                />
                <button className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Text + features */}
          <div className="flex-1">
            <span className="route-pill mb-4 inline-block">AI Copilot</span>
            <h2
              className="text-3xl md:text-4xl text-white mb-4"
              style={{ fontFamily: "Instrument Serif, serif" }}
            >
              Tu copilot logístico,{" "}
              <span className="gradient-text italic">en lenguaje natural</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Impulsado por{" "}
              <strong className="text-white/70">Groq LLM (llama-3.3-70b-versatile)</strong> y un
              backend FastAPI con conocimiento del dominio logístico. Consulta envíos, extrae
              entidades de documentos y obtén resúmenes al instante.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {aiFeatures.map((f) => (
                <div key={f.title} className="glass rounded-xl p-4 flex gap-3">
                  <span className="text-xl">{f.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-white mb-1">{f.title}</p>
                    <p className="text-xs text-white/40 leading-relaxed">{f.desc}</p>
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
