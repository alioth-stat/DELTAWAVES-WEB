const members = [
  {
    name: "Alioth Polo",
    role: "Fundador · Desarrollador IA",
    initials: "AP",
    bio: "Arquitecto principal de TYR Logistics OS y la plataforma unificada. Lleva la visión técnica de DELTAWAVES y coordina la integración de los proyectos.",
    hue: "from-red-900 to-violet-900",
  },
  {
    name: "Nicole Ocque",
    role: "Diseño & Desarrollo Frontend",
    initials: "NO",
    bio: "Contribuye al diseño de interfaces y la experiencia de usuario de los proyectos. Especialista en hacer que la tecnología compleja se vea simple.",
    hue: "from-violet-900 to-blue-900",
  },
  {
    name: "Martin Bundy",
    role: "Desarrollo & Presentaciones",
    initials: "MB",
    bio: "Participante clave en el desarrollo y la presentación de los proyectos ante jueces y audiencias técnicas en hackathons y exposiciones.",
    hue: "from-blue-900 to-cyan-900",
  },
  {
    name: "Damian Valdez",
    role: "Desarrollo & Despliegue",
    initials: "DV",
    bio: "Colaborador en el desarrollo y el despliegue de las plataformas. Contribuye al mantenimiento y la evolución continua del ecosistema DELTAWAVES.",
    hue: "from-fuchsia-900 to-red-900",
  },
]

export default function Team() {
  return (
    <section id="equipo" className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label mb-4">El Equipo</p>
          <h2
            className="text-5xl md:text-6xl text-white"
            style={{ fontFamily: "Instrument Serif, serif" }}
          >
            Cuatro estudiantes.
            <br />
            <span className="gradient-text italic">Una misión.</span>
          </h2>
        </div>

        {/* Portrait cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m) => (
            <div
              key={m.name}
              className="glass rounded-2xl overflow-hidden flex flex-col hover:bg-white/[0.06] transition-colors duration-300 group"
            >
              {/* Portrait area */}
              <div
                className={`relative h-56 bg-gradient-to-br ${m.hue} flex items-end p-5 overflow-hidden`}
              >
                {/* Initials watermark */}
                <span
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-white/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "Instrument Serif, serif" }}
                >
                  {m.initials}
                </span>

                {/* Name overlay at bottom */}
                <div className="relative z-10">
                  <p className="text-white font-semibold text-lg leading-tight">{m.name}</p>
                  <p className="text-white/50 text-xs mt-0.5">{m.role}</p>
                </div>
              </div>

              {/* Bio */}
              <div className="p-5 flex-1">
                <p className="text-white/40 text-sm leading-relaxed">{m.bio}</p>
              </div>

              {/* Footer chip */}
              <div className="px-5 pb-5">
                <span className="tech-badge">ITSE · IA & Big Data</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
