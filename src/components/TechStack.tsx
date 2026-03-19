const categories = [
  { label: "Frontend",        techs: ["React 19", "TypeScript", "Tailwind 4", "Vite 7", "Zustand"] },
  { label: "Visualización",   techs: ["Recharts", "dnd-kit", "MapLibre GL", "react-map-gl"] },
  { label: "Backend",         techs: ["FastAPI", "Python", "Groq API", "logistics.json"] },
  { label: "IA & NLP",        techs: ["llama-3.3-70b", "NER Pipeline", "Prompt Engineering"] },
  { label: "i18n & Diseño",   techs: ["i18n ES/EN", "Instrument Serif", "Barlow", "Azeret Mono"] },
  { label: "Infraestructura", techs: ["Vercel", "Git", "ESM Modules"] },
]

export default function TechStack() {
  return (
    <section className="py-24 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Stack Tecnológico</p>
          <h2
            className="text-4xl md:text-5xl text-white"
            style={{ fontFamily: "Instrument Serif, serif" }}
          >
            Construido con las{" "}
            <span className="gradient-text italic">mejores herramientas</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.label} className="glass rounded-xl p-6">
              <p className="section-label mb-4">{cat.label}</p>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
