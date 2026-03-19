import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Team from "./components/Team"
import TryOut from "./components/TryOut"
import Projects from "./components/Projects"
import Events from "./components/Events"
import VisionMision from "./components/VisionMision"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        {/* 1. Hero — full-screen banner with logo + AccretionBackground */}
        <Hero />

        {/* 2. Team — 4 portrait cards */}
        <Team />

        {/* 3. TryOut — live demos + what is a digital twin */}
        <TryOut />

        {/* 4. Projects — all project cards */}
        <Projects />

        {/* 5. Events — past hackathons/expositions + upcoming */}
        <Events />

        {/* 6. Visión, Misión & How we met at ITSE */}
        <VisionMision />
      </main>
      <Footer />
    </div>
  )
}
