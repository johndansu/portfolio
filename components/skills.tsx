"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState, useRef } from "react"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({})
  const sectionRef = useRef<HTMLElement>(null)

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vue.js", level: 75 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "GraphQL", level: 80 },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "AWS/Cloud", level: 85 },
        { name: "Docker", level: 82 },
        { name: "CI/CD", level: 78 },
        { name: "Kubernetes", level: 70 },
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate progress bars
          skillCategories.forEach((category) => {
            category.skills.forEach((skill) => {
              const key = `${category.title}-${skill.name}`
              let currentValue = 0
              const increment = skill.level / 50 // 50 steps for smooth animation
              const timer = setInterval(() => {
                currentValue += increment
                if (currentValue >= skill.level) {
                  currentValue = skill.level
                  clearInterval(timer)
                }
                setAnimatedValues((prev) => ({ ...prev, [key]: Math.round(currentValue) }))
              }, 30)
            })
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-4 text-balance">Skills & Expertise</h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            A comprehensive toolkit built through years of hands-on experience and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isVisible ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <CardTitle className="font-montserrat font-bold text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const key = `${category.title}-${skill.name}`
                  const animatedValue = animatedValues[key] || 0

                  return (
                    <div key={skillIndex} className="space-y-2 group">
                      <div className="flex justify-between items-center">
                        <span className="font-open-sans font-medium group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="font-open-sans text-sm text-muted-foreground font-mono">{animatedValue}%</span>
                      </div>
                      <Progress value={animatedValue} className="h-2 transition-all duration-300 group-hover:h-3" />
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
