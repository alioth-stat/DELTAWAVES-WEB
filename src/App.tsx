import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import LogosBar from "./components/LogosBar"
import Projects from "./components/Projects"
import FeaturesSection from "./components/FeaturesSection"
import AISection from "./components/AISection"
import TechStack from "./components/TechStack"
import Team from "./components/Team"
import Timeline from "./components/Timeline"
import FAQ from "./components/FAQ"
import CTABanner from "./components/CTABanner"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <LogosBar />
        <Projects />
        <FeaturesSection />
        <AISection />
        <TechStack />
        <Team />
        <Timeline />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
