"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Code2,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { useEffect, useState } from "react";
import { GlitchText } from "@/components/glitch-text";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <div className="mb-8 animate-fade-in animate-slide-in-from-bottom-4">
          <div className="relative">
            <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300 hover:scale-105 shadow-2xl">
              <AvatarImage
                src="/professional-headshot-of-a-tech-developer.png"
                alt="Profile"
              />
              <AvatarFallback className="text-2xl font-montserrat font-bold bg-primary text-primary-foreground">
                TD
              </AvatarFallback>
            </Avatar>
            <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-primary/20 blur-xl animate-pulse" />
          </div>
        </div>

        <div className="relative animate-fade-in animate-slide-in-from-bottom-4">
          <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-6 text-balance">
            <span className="text-gradient">Dansu John</span>
          </h1>
        </div>

        <div className="relative animate-fade-in animate-slide-in-from-bottom-4">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-semibold text-foreground mb-4 text-balance">
              Full-Stack Developer
            </h2>
          </div>
        </div>

        <div className="font-montserrat font-bold text-xl sm:text-2xl text-muted-foreground mb-6 text-balance animate-fade-in animate-slide-in-from-bottom-4">
          Cybersecurity Specialist & Team Leader
        </div>

        <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty leading-relaxed animate-fade-in animate-slide-in-from-bottom-4 relative">
          Passionate about creating secure, scalable solutions and leading teams
          to deliver exceptional results. Specializing in modern web
          technologies and cybersecurity best practices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in animate-slide-in-from-bottom-4">
          <Button
            size="lg"
            className="group hover:scale-105 transition-transform duration-200"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group hover:scale-105 transition-transform duration-200"
            onClick={() => {
              const element = document.getElementById("projects");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            View My Work
            <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
          </Button>
        </div>

        {/* Stats Section */}
        <div className="relative animate-fade-in animate-slide-in-from-bottom-4">
          <div
            className="animate-bounce hover:animate-pulse cursor-pointer group"
            onClick={scrollToProjects}
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/30 transition-all duration-300" />
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground hover:text-primary transition-colors duration-300 relative z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
