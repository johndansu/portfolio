"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";

export function HireMe() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [output, setOutput] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [currentTyping, setCurrentTyping] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const customText = [
    { text: "// Developer Profile Information", delay: 1200 },
    { text: "const developer = {", delay: 1000 },
    { text: "  name: 'Dansu John',", delay: 800 },
    { text: "  role: 'Full-Stack Developer',", delay: 800 },
    { text: "  experience: '5+ years',", delay: 800 },
    { text: "  skills: [", delay: 600 },
    { text: "    'React', 'Next.js', 'Node.js', 'Python'", delay: 1000 },
    { text: "  ],", delay: 400 },
    { text: "  expertise: [", delay: 600 },
    {
      text: "    'Cybersecurity', 'Network Security', 'Penetration Testing'",
      delay: 1200,
    },
    { text: "  ],", delay: 400 },
    { text: "  leadership: 'Team Lead & Mentor',", delay: 1000 },
    { text: "  availability: 'Immediate',", delay: 800 },
    {
      text: "  passion: 'Creating elegant solutions to complex problems'",
      delay: 1200,
    },
    { text: "};", delay: 600 },
    {
      text: "",
      delay: 800,
    },
    {
      text: "// Current Status",
      delay: 800,
    },
    {
      text: "if (developer.availability === 'Immediate') {",
      delay: 1000,
    },
    {
      text: "  console.log('Ready for new opportunities!');",
      delay: 1000,
    },
    {
      text: "  console.log('Let\\'s build something amazing together.');",
      delay: 1200,
    },
    { text: "}", delay: 400 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("hire-me");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const startProcess = useCallback(() => {
    setIsRunning(true);
    setCurrentStep(0);
    setOutput([]);
    setIsComplete(false);
    setCurrentTyping("");
    setIsTyping(false);
  }, []);

  const stopProcess = useCallback(() => {
    setIsRunning(false);
    setIsTyping(false);
  }, []);

  const resetProcess = useCallback(() => {
    setIsRunning(false);
    setCurrentStep(0);
    setOutput([]);
    setIsComplete(false);
    setCurrentTyping("");
    setIsTyping(false);
  }, []);

  // Type out text word by word
  const typeText = useCallback(async (text: string, speed: number = 600) => {
    setIsTyping(true);
    setCurrentTyping("");

    const words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, speed));
      setCurrentTyping((prev) => prev + (i === 0 ? "" : " ") + words[i]);
    }

    setIsTyping(false);
    return text;
  }, []);

  useEffect(() => {
    if (!isRunning || currentStep >= customText.length) return;

    const step = customText[currentStep];

    const executeStep = async () => {
      // Type out the text
      await typeText(step.text, 600);

      // Add text to output
      setOutput((prev) => [...prev, step.text]);

      // Wait for the specified delay
      await new Promise((resolve) => setTimeout(resolve, step.delay));

      // Clear current typing
      setCurrentTyping("");

      // Move to next step or complete
      if (currentStep === customText.length - 1) {
        setIsComplete(true);
        setIsRunning(false);

        // Auto-restart after 8 seconds
        setTimeout(() => {
          startProcess();
        }, 8000);
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    };

    executeStep();
  }, [currentStep, isRunning, customText.length, typeText, startProcess]);

  // Auto-start when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      startProcess();
    }, 1000); // Start after 1 second

    return () => clearTimeout(timer);
  }, [startProcess]);

  // Auto-scroll to bottom when new content is added
  useEffect(() => {
    const terminal = document.querySelector(".terminal-output");
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight;
    }
  }, [output, currentTyping]);

  return (
    <section
      id="hire-me"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-white transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-bold text-white dark:text-gray-900 mb-4 hover:scale-105 transition-transform duration-300 transition-colors duration-300">
            Interactive Developer Profile
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-600 max-w-2xl mx-auto transition-colors duration-300">
            Watch my developer profile come to life in this interactive terminal
          </p>
        </div>

        <Card
          className={`bg-slate-800 dark:bg-gray-50 border-slate-600 dark:border-gray-200 text-slate-100 dark:text-gray-900 font-mono shadow-xl hover:shadow-2xl transition-all duration-500 transition-colors duration-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="ml-4 text-gray-300 dark:text-slate-600 transition-colors duration-300">
                  terminal@portfolio:~$
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={startProcess}
                  disabled={isRunning}
                  className="text-emerald-600 dark:text-emerald-400 border-emerald-600 dark:border-emerald-400 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-slate-900 hover:scale-105 transition-all duration-200"
                >
                  <Play className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={stopProcess}
                  disabled={!isRunning}
                  className="text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-400 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-400 dark:hover:text-slate-900 hover:scale-105 transition-all duration-200"
                >
                  <Pause className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={resetProcess}
                  className="text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 hover:scale-105 transition-all duration-200"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="terminal-output h-80 overflow-y-auto mb-4 space-y-1 bg-slate-950 dark:bg-gray-50 p-4 rounded border border-slate-700 dark:border-gray-200 transition-colors duration-300">
              {output.map((line, index) => (
                <div
                  key={index}
                  className="text-emerald-600 dark:text-emerald-400 font-mono text-sm animate-fade-in transition-colors duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {line}
                </div>
              ))}

              {/* Current typing line */}
              {isTyping && (
                <div className="text-emerald-600 dark:text-emerald-400 font-mono text-sm animate-fade-in transition-colors duration-300">
                  {currentTyping}
                  <span className="animate-pulse">|</span>
                </div>
              )}

              {isRunning && !isTyping && (
                <div className="text-emerald-600 dark:text-emerald-400 animate-pulse font-mono text-sm transition-colors duration-300">
                  Processing...
                </div>
              )}

              {isComplete && (
                <div className="text-amber-600 dark:text-amber-400 font-bold font-mono text-sm animate-fade-in scale-110 transition-colors duration-300">
                  ✓ COMPLETE
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
