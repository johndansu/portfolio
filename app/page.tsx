"use client";

import { useEffect, useCallback } from "react";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { InteractiveTerminal } from "@/components/interactive-terminal";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { HireMe } from "@/components/hire-me";
import { Contact } from "@/components/contact";
import { Navigation } from "@/components/navigation";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ParticleBackground } from "@/components/particle-background";
import { FloatingActions } from "@/components/floating-actions";

export default function Home() {
  // Throttle function for scroll events
  const throttle = useCallback((func: Function, limit: number) => {
    let inThrottle: boolean;
    return function (this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }, []);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    // Improved intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px", // Trigger slightly before element comes into view
      }
    );

    const scrollElements = document.querySelectorAll(".scroll-fade-in");
    scrollElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Optimized scroll event handling
  useEffect(() => {
    const handleScroll = throttle(() => {
      // Add scroll class to body for CSS-based optimizations
      const scrolled = window.scrollY > 50;
      document.body.classList.toggle("scrolled", scrolled);
    }, 16); // ~60fps

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [throttle]);

  return (
    <main className="min-h-screen bg-background scroll-smooth">
      <ParticleBackground />
      <Navigation />
      <Hero />

      <div className="scroll-fade-in">
        <About />
      </div>

      <div className="scroll-fade-in">
        <Skills />
      </div>

      <div className="scroll-fade-in">
        <InteractiveTerminal />
      </div>

      <div className="scroll-fade-in">
        <Projects />
      </div>

      <div className="scroll-fade-in">
        <Experience />
      </div>

      <HireMe />
      <Contact />

      <FloatingActions />
      <ScrollToTop />
    </main>
  );
}
