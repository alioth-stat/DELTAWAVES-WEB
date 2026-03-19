const navLinks = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Equipo",    href: "#equipo"    },
  { label: "Timeline",  href: "#timeline"  },
  { label: "FAQ",       href: "#faq"       },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white text-xl font-bold">δ</span>
              <span
                className="font-semibold text-white"
                style={{ fontFamily: "Barlow, sans-serif" }}
              >
                DELTAWAVES
              </span>
            </div>
            <p className="text-white/30 text-sm max-w-xs">
              Grupo estudiantil de IA del ITSE, Panamá. Construyendo el futuro de la logística.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/30 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://tyr-logistics-os.vercel.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              Demo →
            </a>
          </nav>
        </div>

        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-sm">
            © 2026 DELTAWAVES · Estudiantes de Técnico en IA · ITSE, Panamá
          </p>
          <p
            className="text-white/15 text-xs"
            style={{ fontFamily: "Azeret Mono, monospace" }}
          >
            React 19 · Tailwind 4 · Vite 6
          </p>
        </div>
      </div>
    </footer>
  )
}
