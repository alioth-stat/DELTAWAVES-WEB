export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden grid-bg">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-sm text-blue-300">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Presentado en Expo Logística Panamá 2026
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl leading-tight text-white max-w-5xl"
          style={{ fontFamily: "Instrument Serif, serif" }}
        >
          IA para la Logística{" "}
          <span className="gradient-text italic">del Mañana</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
          <strong className="text-slate-200">TYR Logistics OS</strong> y{" "}
          <strong className="text-slate-200">Gemelo Centenario Digital Twin</strong> — dos
          plataformas desarrolladas por estudiantes de IA del ITSE, fusionadas en una visión
          unificada para la logística panameña.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://tyr-logistics-os.vercel.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all hover:scale-[1.02] glow-blue"
          >
            Ver TYR Logistics OS
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
          <a
            href="#proyectos"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass hover:bg-white/[0.07] text-white font-medium transition-all hover:scale-[1.02]"
          >
            Explorar proyectos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
        </div>

        {/* Dashboard mockup */}
        <div className="w-full max-w-4xl mt-8">
          <div className="glass-strong rounded-2xl overflow-hidden glow-blue">
            {/* Window bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06] bg-white/[0.03]">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span
                className="ml-3 text-xs text-slate-500"
                style={{ fontFamily: "Azeret Mono, monospace" }}
              >
                tyr-logistics-os.vercel.app/dashboard
              </span>
            </div>

            {/* Mock dashboard content */}
            <div className="p-6 bg-[#0a0f1e]/80">
              {/* KPI row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {[
                  { label: "Envíos Activos", value: "847", delta: "+12%", color: "text-blue-400" },
                  { label: "En Tránsito", value: "324", delta: "+5%", color: "text-violet-400" },
                  { label: "Entregados", value: "512", delta: "+18%", color: "text-emerald-400" },
                  { label: "Incidentes", value: "11", delta: "-3%", color: "text-amber-400" },
                ].map((kpi) => (
                  <div key={kpi.label} className="glass rounded-lg p-3">
                    <p className="text-xs text-slate-500 mb-1">{kpi.label}</p>
                    <p className={`text-xl font-bold ${kpi.color}`}>{kpi.value}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{kpi.delta} vs ayer</p>
                  </div>
                ))}
              </div>

              {/* Fake chart */}
              <div className="glass rounded-lg p-4">
                <p className="text-xs text-slate-500 mb-3">Volumen de envíos — últimos 7 días</p>
                <div className="flex items-end gap-2 h-20">
                  {[40, 65, 50, 80, 55, 90, 72].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-blue-600/60 to-blue-400/30"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  {["L", "M", "X", "J", "V", "S", "D"].map((d) => (
                    <span key={d} className="text-xs text-slate-600 flex-1 text-center">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
