"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Chart.js"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "AI Content Generator",
      description:
        "AI-powered content creation platform that helps businesses generate marketing copy and social media content.",
      image: "/ai-content-generation-interface.png",
      technologies: ["Next.js", "OpenAI API", "Prisma", "Vercel", "Tailwind CSS"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: "/weather-dashboard-with-maps-and-charts.png",
      technologies: ["Vue.js", "Weather API", "Mapbox", "Chart.js"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Fitness Tracker",
      description:
        "Mobile-first fitness tracking application with workout plans, progress tracking, and social features.",
      image: "/fitness-tracking-app.png",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Blog Platform",
      description: "Modern blogging platform with markdown support, SEO optimization, and content management system.",
      image: "/modern-blog-platform.png",
      technologies: ["Next.js", "MDX", "Sanity CMS", "Vercel"],
      github: "#",
      demo: "#",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-4 text-balance">Featured Projects</h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            A showcase of my recent work, demonstrating technical expertise and creative problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 group hover:scale-[1.02] hover:-translate-y-2 ${
                isVisible ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="font-montserrat font-bold text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="font-open-sans leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="font-open-sans text-xs hover:scale-110 transition-transform duration-200 cursor-default"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:scale-105 transition-transform duration-200 bg-transparent"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="hover:scale-105 transition-transform duration-200 hover:shadow-lg"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3
            className={`font-montserrat font-bold text-2xl mb-8 text-center transition-all duration-1000 delay-500 ${
              isVisible ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0 translate-y-8"
            }`}
          >
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-1 group ${
                  isVisible ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-lg group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="font-open-sans text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="font-open-sans text-xs hover:scale-110 transition-transform duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="outline"
                        className="font-open-sans text-xs hover:scale-110 transition-transform duration-200"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="hover:scale-125 hover:rotate-12 transition-all duration-300"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="hover:scale-125 hover:-rotate-12 transition-all duration-300"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
