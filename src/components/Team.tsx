const members = [
  {
    name: "Alioth Polo",
    role: "Desarrollador IA & Fundador",
    initials: "AP",
    gradient: "from-blue-500 to-violet-600",
    desc: "Arquitecto principal de TYR Logistics OS y la plataforma unificada.",
  },
  {
    name: "Nicole Ocque",
    role: "Miembro del Equipo",
    initials: "NO",
    gradient: "from-violet-500 to-pink-500",
    desc: "Contribuye al diseño y desarrollo de las interfaces de usuario.",
  },
  {
    name: "Martin Bundy",
    role: "Miembro del Equipo",
    initials: "MB",
    gradient: "from-cyan-500 to-blue-500",
    desc: "Participante clave en el desarrollo y presentación de los proyectos.",
  },
  {
    name: "Damian Valdez",
    role: "Miembro del Equipo",
    initials: "DV",
    gradient: "from-emerald-500 to-cyan-500",
    desc: "Colaborador en el desarrollo y despliegue de las plataformas.",
  },
]

export default function Team() {
  return (
    <section id="equipo" className="py-24 grid-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">El Equipo</p>
          <h2
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: "Instrument Serif, serif" }}
          >
            Estudiantes de IA que{" "}
            <span className="gradient-text italic">construyen el futuro</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            Técnico en Inteligencia Artificial · ITSE, Panamá
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m) => (
            <div
              key={m.name}
              className="glass rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:bg-white/[0.06] transition-colors"
            >
              {/* Avatar */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${m.gradient} flex items-center justify-center text-white font-bold text-lg`}
              >
                {m.initials}
              </div>
              <div>
                <h3 className="text-white font-semibold">{m.name}</h3>
                <p className="text-blue-400 text-xs mt-0.5">{m.role}</p>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
              <span className="tech-badge">ITSE · Panamá</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
