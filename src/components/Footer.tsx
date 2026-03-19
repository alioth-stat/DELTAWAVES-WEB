const navLinks = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Equipo", href: "#equipo" },
  { label: "Timeline", href: "#timeline" },
  { label: "FAQ", href: "#faq" },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-400 text-xl font-bold">δ</span>
              <span
                className="font-bold text-white"
                style={{ fontFamily: "Barlow, sans-serif", fontWeight: 600 }}
              >
                DELTAWAVES
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              Grupo estudiantil de IA del ITSE, Panamá. Construyendo el futuro de la logística.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://tyr-logistics-os.vercel.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              Demo →
            </a>
          </nav>
        </div>

        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © 2026 DELTAWAVES · Estudiantes de{" "}
            <span className="text-slate-500">Técnico en IA</span> · ITSE, Panamá
          </p>
          <p
            className="text-slate-700 text-xs"
            style={{ fontFamily: "Azeret Mono, monospace" }}
          >
            React 19 · Tailwind 4 · Vite 6
          </p>
        </div>
      </div>
    </footer>
  )
}
