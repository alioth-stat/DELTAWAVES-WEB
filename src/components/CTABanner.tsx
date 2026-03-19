export default function CTABanner() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden p-12 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(124,58,237,0.2) 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-blue-600/20 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10">
            <p className="text-blue-300 text-sm font-medium uppercase tracking-widest mb-4">
              Expo Logística Panamá · 11 Mar 2026
            </p>
            <h2
              className="text-4xl md:text-5xl text-white mb-6"
              style={{ fontFamily: "Instrument Serif, serif" }}
            >
              Encuéntranos en{" "}
              <span className="gradient-text italic">Expo Logística 2026</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Demo en vivo de TYR Logistics OS y el Gemelo Centenario. El futuro de la
              logística panameña, construido por estudiantes del ITSE.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://tyr-logistics-os.vercel.app/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all hover:scale-[1.02]"
              >
                Ver TYR en Vercel
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <a
                href="#proyectos"
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl glass hover:bg-white/[0.08] text-white font-medium transition-all"
              >
                Ver proyectos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
