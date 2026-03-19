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
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Chat mockup */}
          <div className="flex-1 w-full">
            <div className="glass-strong rounded-2xl overflow-hidden glow-violet">
              {/* Header */}
              <div className="px-5 py-4 border-b border-white/[0.06] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-xs font-bold">
                  AI
                </div>
                <div>
                  <p className="text-sm font-medium text-white">TYR Copilot</p>
                  <p className="text-xs text-slate-500">llama-3.3-70b-versatile · Groq</p>
                </div>
                <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4 bg-[#0a0f1e]/60">
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-xs flex-shrink-0">U</div>
                  <div className="glass rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-200 max-w-xs">
                    ¿Cuántos contenedores están en el puerto de Colón ahora?
                  </div>
                </div>
                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-xs flex-shrink-0 font-bold">
                    AI
                  </div>
                  <div
                    className="rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-slate-200 max-w-xs"
                    style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.25)" }}
                  >
                    Detecté <strong>PUERTO: Colón</strong>. Actualmente tienes{" "}
                    <strong className="text-violet-300">47 contenedores</strong> en ese puerto:
                    23 en espera de carga y 24 en descarga. El tiempo promedio de estadía es{" "}
                    <strong>2.3 días</strong>.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-xs flex-shrink-0">U</div>
                  <div className="glass rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-200 max-w-xs">
                    Muéstrame el BL MSKU-9234 y su estado actual.
                  </div>
                </div>
                {/* Typing indicator */}
                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-xs flex-shrink-0 font-bold">
                    AI
                  </div>
                  <div
                    className="rounded-2xl rounded-tr-sm px-4 py-3 flex gap-1 items-center"
                    style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="px-5 py-4 border-t border-white/[0.06] flex gap-3 items-center">
                <input
                  type="text"
                  placeholder="Consulta sobre tus envíos..."
                  className="flex-1 bg-transparent text-sm text-slate-300 placeholder-slate-600 outline-none"
                  readOnly
                />
                <button className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Impulsado por <strong className="text-slate-300">Groq LLM (llama-3.3-70b-versatile)</strong> y
              un backend FastAPI con conocimiento del dominio logístico. Consulta envíos, extrae
              entidades de documentos y obtén resúmenes al instante.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {aiFeatures.map((f) => (
                <div key={f.title} className="glass rounded-xl p-4 flex gap-3">
                  <span className="text-xl">{f.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-white mb-1">{f.title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
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
