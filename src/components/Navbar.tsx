import { useState, useEffect } from "react"

const navLinks = [
  { label: "Equipo",    href: "#equipo"    },
  { label: "Demos",     href: "#demos"     },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Eventos",   href: "#eventos"   },
  { label: "Visión",    href: "#vision"    },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/[0.06]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-white text-xl font-bold select-none">δ</span>
          <span
            className="font-semibold text-lg tracking-wide text-white group-hover:text-white/70 transition-colors"
            style={{ fontFamily: "Barlow, sans-serif" }}
          >
            DELTAWAVES
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA — white button, black text */}
        <a
          href="https://tyr-logistics-os.vercel.app/dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
        >
          Ver Demo
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white/40 hover:text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menú"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/[0.06] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://tyr-logistics-os.vercel.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black text-sm font-medium w-fit"
          >
            Ver Demo →
          </a>
        </div>
      )}
    </header>
  )
}
