"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export function AnimatedCounter({
  target,
  duration = 2000,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

function AnimatedNumber({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  label,
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <Card className="text-center hover:scale-105 transition-transform duration-300">
      <CardContent className="p-6">
        <div className="text-3xl font-bold text-primary mb-2">
          {prefix}
          {count}
          {suffix}
        </div>
        <div className="text-sm text-muted-foreground font-medium">{label}</div>
      </CardContent>
    </Card>
  );
}

export function StatsSection() {
  const stats = [
    { end: 50, suffix: "+", label: "Projects Completed" },
    { end: 5, suffix: "+", label: "Years Experience" },
    { end: 100, suffix: "%", label: "Client Satisfaction" },
    { end: 24, suffix: "/7", label: "Code Availability" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
      {stats.map((stat, index) => (
        <AnimatedNumber key={index} {...stat} />
      ))}
    </div>
  );
}
