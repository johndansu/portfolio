"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowDown, Github, Linkedin, Mail, Code2, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Full-Stack Developer & Tech Innovator"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      // Blinking cursor effect after typing is complete
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, 500)
      return () => clearInterval(cursorInterval)
    }
  }, [currentIndex, fullText])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-pulse" />

      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/10 rounded-full animate-bounce" />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-secondary/30 animate-pulse" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="relative">
            <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300 hover:scale-105 shadow-2xl">
              <AvatarImage src="/professional-headshot-of-a-tech-developer.png" alt="Profile" />
              <AvatarFallback className="text-2xl font-montserrat font-bold bg-primary text-primary-foreground">
                TD
              </AvatarFallback>
            </Avatar>
            <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-primary/20 blur-xl animate-pulse" />
          </div>
        </div>

        <div className="relative">
          <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-balance mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Hi, I'm{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent relative">
              Alex Chen
              <Sparkles className="absolute -top-2 -right-8 h-6 w-6 text-primary animate-pulse" />
            </span>
          </h1>
        </div>

        <p className="font-montserrat font-bold text-xl sm:text-2xl text-muted-foreground mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <Code2 className="inline h-6 w-6 mr-2 text-primary" />
          {displayText}
          <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}>|</span>
        </p>

        <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 relative">
          <span className="bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-lg backdrop-blur-sm">
            I craft exceptional digital experiences through clean code, innovative solutions, and user-centered design.
            Passionate about building scalable applications that make a difference.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="font-open-sans font-medium hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 bg-gradient-to-r from-primary to-primary/90 group"
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce transition-all duration-300" />
          </Button>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="hover:scale-110 hover:rotate-12 transition-all duration-300 bg-transparent hover:bg-primary/10 hover:border-primary/50 group"
            >
              <Github className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:scale-110 hover:-rotate-12 transition-all duration-300 bg-transparent hover:bg-primary/10 hover:border-primary/50 group"
            >
              <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:scale-110 hover:rotate-12 transition-all duration-300 bg-transparent hover:bg-primary/10 hover:border-primary/50 group"
            >
              <Mail className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="animate-bounce hover:animate-pulse cursor-pointer group" onClick={scrollToProjects}>
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/30 transition-all duration-300" />
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground hover:text-primary transition-colors duration-300 relative z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
