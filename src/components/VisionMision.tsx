export default function VisionMision() {
  return (
    <section id="vision" className="py-32 border-t border-white/[0.05] relative overflow-hidden">

      {/* Faint gradient accent behind section */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, rgba(114,9,183,0.05) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label mb-4">Visión & Misión</p>
          <h2
            className="text-5xl md:text-6xl text-white"
            style={{ fontFamily: "Instrument Serif, serif" }}
          >
            No quedarse atrás.
            <br />
            <span className="gradient-text italic">Jamás.</span>
          </h2>
        </div>

        {/* Vision + Mission cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">

          {/* Vision */}
          <div className="glass rounded-2xl p-8 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🔭</span>
              <h3
                className="text-white text-2xl"
                style={{ fontFamily: "Instrument Serif, serif" }}
              >
                Visión
              </h3>
            </div>
            <p className="text-white/50 text-base leading-relaxed">
              Ser la <strong className="text-white/80">primera línea de defensa</strong> en el futuro del desarrollo e
              implementación de tecnologías en Panamá.
            </p>
            <p className="text-white/40 text-sm leading-relaxed">
              Traer conocimientos de tecnologías del futuro — inteligencia artificial, gemelos digitales,
              automatización — que aún no se están implementando en el país, y asegurarnos de que Panamá
              no solo las adopte, sino que las lidere.
            </p>
          </div>

          {/* Mission */}
          <div className="glass rounded-2xl p-8 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              <h3
                className="text-white text-2xl"
                style={{ fontFamily: "Instrument Serif, serif" }}
              >
                Misión
              </h3>
            </div>
            <p className="text-white/50 text-base leading-relaxed">
              Construir soluciones reales que resuelvan problemas reales de Panamá,
              usando las herramientas más avanzadas disponibles.
            </p>
            <p className="text-white/40 text-sm leading-relaxed">
              Queremos ser aquellos quienes lleven al país a esa línea de meta —
              en vez de quedarse atrás en papeleo y falsas promesas de digitalización
              que nunca llegan a materializarse en impacto tangible.
            </p>
          </div>

        </div>

        {/* How we met — ITSE story */}
        <div className="glass rounded-3xl p-10 md:p-14 relative overflow-hidden">

          {/* Decorative quote mark */}
          <span
            className="absolute top-6 right-8 text-[12rem] font-bold text-white/[0.02] leading-none pointer-events-none select-none"
            style={{ fontFamily: "Instrument Serif, serif" }}
          >
            "
          </span>

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">🏛️</span>
              <div>
                <h3
                  className="text-white text-2xl"
                  style={{ fontFamily: "Instrument Serif, serif" }}
                >
                  Cómo nos conocimos
                </h3>
                <p className="text-white/30 text-xs mt-0.5">Instituto Técnico Superior Especializado · Panamá</p>
              </div>
            </div>

            <div className="space-y-5 text-white/50 text-base leading-relaxed">
              <p>
                Somos integrantes de la carrera de{" "}
                <strong className="text-white/80">Inteligencia Artificial y Big Data del ITSE</strong> — y al
                conocernos, nos dimos cuenta de algo que nadie estaba diciendo en voz alta.
              </p>
              <p>
                El ITSE es una institución excepcional. Tiene tecnología del futuro, docentes comprometidos
                y una visión que pocas instituciones panameñas tienen. Pero incluso allí — incluso en ese
                ambiente — había una brecha entre lo que aprendíamos dentro del aula y lo que estábamos
                viendo afectar al mercado laboral{" "}
                <strong className="text-white/70">afuera</strong>: en nuestros trabajos, nuestras pasantías,
                los proyectos freelance.
              </p>
              <p>
                LLMs, gemelos digitales, agentes de IA, automatización de procesos logísticos —
                el mundo ya estaba siendo transformado por estas herramientas, y Panamá todavía
                estaba debatiendo si adoptar digitalización básica.
              </p>
              <p className="text-white/70 font-medium">
                Decidimos no esperar a que alguien más lo resolviera.
                Formamos DELTAWAVES para ser ese puente — entre el futuro que ya existe afuera
                y el Panamá que podría liderarlo.
              </p>
            </div>

            {/* ITSE chip */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="tech-badge">ITSE · Panamá</span>
              <span className="tech-badge">Carrera: IA & Big Data</span>
              <span className="tech-badge">Fundado: 2025</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
