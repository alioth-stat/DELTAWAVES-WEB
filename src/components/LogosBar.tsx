const events = [
  { label: "ITSE",           sublabel: "Instituto Técnico Superior Especializado" },
  { label: "MUPA Hackathon", sublabel: "Fundación · Finales 2025 🏆" },
  { label: "Expo Logística", sublabel: "Panamá · 11 Mar 2026" },
  { label: "Vercel",         sublabel: "tyr-logistics-os.vercel.app" },
]

export default function LogosBar() {
  return (
    <section className="py-12 border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center section-label mb-8">Desarrollado y presentado en</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {events.map((e) => (
            <div
              key={e.label}
              className="flex flex-col items-center text-center gap-1 opacity-40 hover:opacity-80 transition-opacity"
            >
              <span className="text-white font-semibold text-sm">{e.label}</span>
              <span className="text-white/50 text-xs">{e.sublabel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
