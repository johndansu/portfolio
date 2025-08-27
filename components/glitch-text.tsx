"use client"

import { useEffect, useState } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  const glitchChars = "!<>-_\\/[]{}—=+*^?#________"

  const glitch = () => {
    setIsGlitching(true)
    let iterations = 0

    const interval = setInterval(() => {
      setGlitchText((prev) =>
        prev
          .split("")
          .map((char, index) => {
            if (index < iterations) {
              return text[index]
            }
            return glitchChars[Math.floor(Math.random() * glitchChars.length)]
          })
          .join(""),
      )

      if (iterations >= text.length) {
        clearInterval(interval)
        setGlitchText(text)
        setIsGlitching(false)
      }

      iterations += 1 / 3
    }, 30)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (Math.random() > 0.95 && !isGlitching) {
        glitch()
      }
    }, 2000)

    return () => clearInterval(timer)
  }, [isGlitching])

  return (
    <span
      className={`${className} ${isGlitching ? "animate-pulse" : ""}`}
      style={{
        textShadow: isGlitching ? "2px 0 #ff0000, -2px 0 #00ff00" : "none",
      }}
    >
      {glitchText}
    </span>
  )
}
