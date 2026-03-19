const navLinks = [
  { label: "Equipo",    href: "#equipo"    },
  { label: "Demos",     href: "#demos"     },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Eventos",   href: "#eventos"   },
  { label: "Visión",    href: "#vision"    },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "Instrument Serif, serif" }}
              >
                δ
              </span>
              <span className="font-semibold text-white text-lg tracking-wide">
                DELTAWAVES
              </span>
            </div>
            <p className="text-white/25 text-sm max-w-xs leading-relaxed">
              Grupo estudiantil de IA del ITSE, Panamá.<br />
              Primera línea en tecnologías del futuro.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/25 hover:text-white/70 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/15 text-xs">
            © 2026 DELTAWAVES · Estudiantes de Técnico en IA · ITSE, Panamá
          </p>
          <p
            className="text-white/10 text-xs"
            style={{ fontFamily: "Azeret Mono, monospace" }}
          >
            React 19 · Tailwind 4 · Vite
          </p>
        </div>

      </div>
    </footer>
  )
}
