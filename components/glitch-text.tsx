"use client";

import { useState, useEffect, useCallback } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitch = useCallback(() => {
    setIsGlitching(true);
    setGlitchText(
      text
        .split("")
        .map((char, index) => {
          if (Math.random() < 0.3) {
            return "!@#$%^&*"[Math.floor(Math.random() * 8)];
          }
          return char;
        })
        .join("")
    );

    setTimeout(() => {
      setGlitchText(text);
      setIsGlitching(false);
    }, 100);
  }, [text]);

  useEffect(() => {
    const interval = setInterval(glitch, 2000);
    return () => clearInterval(interval);
  }, [glitch]);

  return (
    <span
      className={`${className} ${isGlitching ? "animate-pulse" : ""}`}
      style={{
        textShadow: isGlitching
          ? "2px 0 red, -2px 0 blue, 0 2px green, 0 -2px yellow"
          : "none",
      }}
    >
      {glitchText}
    </span>
  );
}
