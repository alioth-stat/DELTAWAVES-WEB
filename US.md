<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# more context

**DELTAWAVES** es un grupo estudiantil de IA del ITSE que ha desarrollado proyectos innovadores en logística y gemelos digitales, con raíces en hackathons como el ITSE MUPA Hackathon y presentaciones en Expo Logística Panamá. Aquí tienes el contenido actualizado para tu sitio web, ahora con el contexto completo del archivo CLAUDE.md, que detalla **TYR Logistics OS** y **Gemelo Centenario Digital Twin** como los dos proyectos principales que se fusionan en una plataforma unificada.[^1]

## Proyectos Clave

### 1. TYR Logistics OS

Una **plataforma de gestión de envíos con IA**, desplegada en [tyr-logistics-os.vercel.app/dashboard](https://tyr-logistics-os.vercel.app/dashboard). Incluye:[^1]

- Dashboard con KPIs, gráficos (Recharts), Kanban arrastrable (dnd-kit) y lista de envíos filtrables.
- Copilot de IA (Groq LLM: llama-3.3-70b-versatile) para chat sobre envíos, con historial persistido (Zustand).
- Backend FastAPI con servicios de NER (PUERTO, BL, CONTENEDOR), conocimiento JSON (logistics.json) y proxy a Groq.
- Stack: React 19, TypeScript, Tailwind 4, Vite 7, Zustand.[^1]

Rutas clave: `/dashboard` (KPIs y gráficos), `/pipeline` (Kanban), `/shipments` (lista), `/documents` (BL, AWB).[^1]

### 2. Gemelo Centenario Digital Twin

**Simulador en tiempo real de la Vía Centenario**, con mapa 3D (MapLibre GL), vehículos animados y escenarios. Resuelve congestión, accidentes, mantenimiento y optimización de sensores.[^1]

- Motor de simulación: tick 100ms (1 seg real = 60 min sim), 40 vehículos, perfiles de tráfico por hora.
- Escenarios: normal, rush, accident, construction, mercapeak, newwarehouse (con factores de velocidad/volumen).
- Stack: React 18, JSX, Tailwind 3, react-map-gl, i18n (ES/EN).[^1]

Rutas: `/corridor` (mapa live), `/simulator` (escenarios), `/analytics` (gráficos).[^1]

### Fusión: Plataforma Unificada

Los proyectos se integran en una sola app para Expo Logística 2026: TYR como shell (navbar, chat), con vista de gemelo digital en ruta `/twin`. Envíos de TYR aparecen en el mapa, el estado del corredor (tráfico, incidentes) alimenta el chat IA. Diseño unificado: liquid-glass cards, fonts Instrument Serif/Barlow/Azeret Mono.[^1]

## Equipo

| Nombre | Rol |
| :-- | :-- |
| **Alioth Polo** | Desarrollador IA \& Fundador |
| **Nicole Ocque** | Miembro del equipo |
| **Martin Bundy** | Miembro del equipo |
| **Damian Valdez** | Miembro del equipo |

Estudiantes de *Técnico en Inteligencia Artificial* en ITSE, Panamá.

## Timeline Actualizada

| Fecha | Hito |
| :-- | :-- |
| Finales 2025 | Fundación en ITSE MUPA Hackathon 🏆 |
| 2026 Q1 | Desarrollo TYR Logistics OS \& Gemelo Centenario |
| 11 Mar 2026 | Presentación en Expo Logística Panamá |
| Mar 2026 | Fusión en plataforma unificada para Expo 2026 [^1] |

Este contenido está listo para copiar en Google Sites, Notion o Framer — con descripciones técnicas precisas del README. Incluye capturas de pantalla del dashboard o mapa para hacerlo más visual.[^1]

¿Quieres que genere el código HTML completo con este copy, o un template en Notion/Google Slides?

<div align="center">⁂</div>

[^1]: CLAUDE.md

