"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState, useRef, useMemo } from "react";
import { SkillRadar } from "@/components/skill-radar";

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{
    [key: string]: number;
  }>({});
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = useMemo(
    () => [
      {
        title: "Frontend Development",
        skills: [
          { name: "React", level: 90 },
          { name: "Next.js", level: 85 },
          { name: "TypeScript", level: 80 },
          { name: "Tailwind CSS", level: 85 },
          { name: "HTML/CSS", level: 90 },
          { name: "JavaScript", level: 90 },
        ],
      },
      {
        title: "Backend Development",
        skills: [
          { name: "Node.js", level: 80 },
          { name: "Python", level: 75 },
          { name: "Express.js", level: 80 },
          { name: "REST APIs", level: 85 },
          { name: "PostgreSQL", level: 70 },
          { name: "MongoDB", level: 70 },
        ],
      },
      {
        title: "Cybersecurity & Networking",
        skills: [
          { name: "Network Security", level: 75 },
          { name: "Penetration Testing", level: 70 },
          { name: "Security Auditing", level: 75 },
          { name: "Firewall Configuration", level: 70 },
          { name: "Vulnerability Assessment", level: 75 },
          { name: "Incident Response", level: 70 },
        ],
      },
      {
        title: "Tools & Technologies",
        skills: [
          { name: "Git", level: 85 },
          { name: "VS Code", level: 90 },
          { name: "Figma", level: 70 },
          { name: "npm/yarn", level: 80 },
          { name: "Webpack", level: 70 },
          { name: "Docker", level: 65 },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Simple animation without multiple timers
          const animateProgress = () => {
            skillCategories.forEach((category) => {
              category.skills.forEach((skill) => {
                const key = `${category.title}-${skill.name}`;
                setAnimatedValues((prev) => ({
                  ...prev,
                  [key]: skill.level,
                }));
              });
            });
          };

          // Delay animation slightly for better UX
          setTimeout(animateProgress, 300);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [skillCategories]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "animate-fade-in animate-slide-in-from-bottom-4"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-4 text-balance">
            Skills & Expertise
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            A comprehensive toolkit built through years of hands-on experience
            and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isVisible
                  ? "animate-fade-in animate-slide-in-from-bottom-4"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <CardTitle className="font-montserrat font-bold text-xl">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const key = `${category.title}-${skill.name}`;
                  const animatedValue = animatedValues[key] || 0;

                  return (
                    <div key={skillIndex} className="space-y-2 group">
                      <div className="flex justify-between items-center">
                        <span className="font-open-sans font-medium group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="font-open-sans text-sm text-muted-foreground font-mono">
                          {animatedValue}%
                        </span>
                      </div>
                      <Progress
                        value={animatedValue}
                        className="h-2 transition-all duration-300 group-hover:h-3"
                      />
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Skill Radar */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible
              ? "animate-fade-in animate-slide-in-from-bottom-4"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-montserrat font-bold text-2xl mb-8">
            Alternative View
          </h3>
          <div className="flex justify-center">
            <SkillRadar />
          </div>
        </div>
      </div>
    </section>
  );
}
