import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, Users, Zap } from "lucide-react"
import { InteractiveTerminal } from "./interactive-terminal"
import { SkillRadar } from "./skill-radar"
import { StatsSection } from "./animated-counter"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly exploring new technologies and methodologies to solve complex problems.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams to deliver exceptional results.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user experience.",
    },
  ]

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "AWS",
    "Docker",
    "GraphQL",
    "Tailwind CSS",
    "MongoDB",
    "Redis",
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-4 text-balance">About Me</h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Passionate developer with 5+ years of experience building modern web applications and leading technical
            initiatives that drive business growth.
          </p>
        </div>

        <StatsSection />

        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          <div className="lg:col-span-2">
            <h3 className="font-montserrat font-bold text-2xl mb-6">My Journey</h3>
            <div className="space-y-4 font-open-sans leading-relaxed mb-8">
              <p>
                Started my journey in computer science with a fascination for problem-solving and creating digital
                solutions. Over the years, I've evolved from writing my first "Hello World" to architecting complex,
                scalable applications.
              </p>
              <p>
                I specialize in full-stack development with a strong focus on modern JavaScript frameworks, cloud
                architecture, and user experience design. My approach combines technical excellence with business acumen
                to deliver solutions that truly matter.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, mentoring junior developers,
                or exploring the latest in AI and machine learning.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardContent className="p-0">
                    <highlight.icon className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-montserrat font-bold text-lg mb-2">{highlight.title}</h4>
                    <p className="font-open-sans text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <InteractiveTerminal />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="text-center">
            <h3 className="font-montserrat font-bold text-2xl mb-6">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="font-open-sans hover:scale-110 transition-transform duration-200"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <SkillRadar />
          </div>
        </div>
      </div>
    </section>
  )
}
