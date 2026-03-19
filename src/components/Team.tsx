const members = [
  {
    name: "Alioth Polo",
    role: "Desarrollador IA & Fundador",
    initials: "AP",
    desc: "Arquitecto principal de TYR Logistics OS y la plataforma unificada.",
  },
  {
    name: "Nicole Ocque",
    role: "Miembro del Equipo",
    initials: "NO",
    desc: "Contribuye al diseño y desarrollo de las interfaces de usuario.",
  },
  {
    name: "Martin Bundy",
    role: "Miembro del Equipo",
    initials: "MB",
    desc: "Participante clave en el desarrollo y presentación de los proyectos.",
  },
  {
    name: "Damian Valdez",
    role: "Miembro del Equipo",
    initials: "DV",
    desc: "Colaborador en el desarrollo y despliegue de las plataformas.",
  },
]

export default function Team() {
  return (
    <section id="equipo" className="py-24 grid-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-3">El Equipo</p>
          <h2
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: "Instrument Serif, serif" }}
          >
            Estudiantes de IA que{" "}
            <span className="gradient-text italic">construyen el futuro</span>
          </h2>
          <p className="text-white/40 text-lg max-w-md mx-auto">
            Técnico en Inteligencia Artificial · ITSE, Panamá
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m) => (
            <div
              key={m.name}
              className="glass rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:bg-white/[0.06] transition-colors"
            >
              {/* Avatar — white monogram on dark glass */}
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-white font-bold text-lg">
                {m.initials}
              </div>
              <div>
                <h3 className="text-white font-semibold">{m.name}</h3>
                <p className="text-white/40 text-xs mt-0.5">{m.role}</p>
              </div>
              <p className="text-white/30 text-xs leading-relaxed">{m.desc}</p>
              <span className="tech-badge">ITSE · Panamá</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
