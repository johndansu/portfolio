import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Lightbulb, Users, Zap } from "lucide-react";
import { AnimatedCounter, StatsSection } from "@/components/animated-counter";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code that stands the test of time.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Constantly exploring new technologies and methodologies to solve complex problems.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively with cross-functional teams to deliver exceptional results.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed, accessibility, and user experience.",
    },
  ];

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "GraphQL",
    "Tailwind CSS",
    "MongoDB",
    "Redis",
    "Network Security",
    "Penetration Testing",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-4 text-balance">
            About Me
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Passionate developer with 5+ years of experience building modern web
            applications and leading technical initiatives that drive business
            growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          <div className="lg:col-span-2">
            <h3 className="font-montserrat font-bold text-2xl mb-6">
              My Journey
            </h3>
            <div className="space-y-4 font-open-sans leading-relaxed mb-8">
              <p>
                Started my journey in computer science with a fascination for
                problem-solving and creating digital solutions. Over the years,
                I&apos;ve evolved from writing my first &quot;Hello World&quot;
                to architecting complex, scalable applications.
              </p>
              <p>
                I specialize in full-stack development with a strong focus on
                modern JavaScript frameworks, cybersecurity, and user experience
                design. My approach combines technical excellence with business
                acumen to deliver solutions that truly matter.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me contributing to
                open-source projects, mentoring junior developers, or exploring
                the latest in AI and machine learning.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <highlight.icon className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-montserrat font-bold text-lg mb-2">
                      {highlight.title}
                    </h4>
                    <p className="font-open-sans text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="font-montserrat font-bold text-xl mb-4">
              Quick Stats
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-open-sans">Years Experience:</span>
                <span className="font-montserrat font-bold text-primary">
                  <AnimatedCounter target={5} suffix="+" />
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-open-sans">Projects Completed:</span>
                <span className="font-montserrat font-bold text-primary">
                  <AnimatedCounter target={50} suffix="+" />
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-open-sans">Technologies:</span>
                <span className="font-montserrat font-bold text-primary">
                  <AnimatedCounter target={20} suffix="+" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-montserrat font-bold text-2xl mb-6">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="font-open-sans text-sm hover:scale-110 transition-transform duration-200 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Interactive Stats Section */}
          <StatsSection />
        </div>
      </div>
    </section>
  );
}
