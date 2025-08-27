import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Testimonials } from "@/components/testimonials"
import { Certifications } from "@/components/certifications"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { ParticleBackground } from "@/components/particle-background"
import { FloatingTechIcons } from "@/components/floating-tech-icons"
import { InteractiveCodeDemo } from "@/components/interactive-code-demo"
import { ScrollAnimations } from "@/components/scroll-animations"
import { CursorFollower } from "@/components/cursor-follower"
import { MatrixRain } from "@/components/matrix-rain"
import { CodeTypingAnimation } from "@/components/code-typing-animation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <ScrollAnimations />
      <CursorFollower />
      <MatrixRain />

      {/* Unique interactive background elements */}
      <ParticleBackground />
      <FloatingTechIcons />

      <Navigation />
      <Hero />

      <div className="scroll-fade-in">
        <About />
      </div>

      <div className="scroll-fade-in">
        <Skills />
      </div>

      {/* Interactive code demo section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-20 scroll-fade-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl text-center mb-12 text-gradient">Interactive Code Demo</h2>
          <InteractiveCodeDemo />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-20 scroll-fade-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl text-center mb-12 text-gradient">Live Coding</h2>
          <CodeTypingAnimation />
        </div>
      </section>

      <div className="scroll-fade-in">
        <Projects />
      </div>

      <div className="scroll-fade-in">
        <Experience />
      </div>

      <div className="scroll-fade-in">
        <Testimonials />
      </div>

      <div className="scroll-fade-in">
        <Certifications />
      </div>

      <div className="scroll-fade-in">
        <Blog />
      </div>

      <div className="scroll-fade-in">
        <Contact />
      </div>
    </main>
  )
}
