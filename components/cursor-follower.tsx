"use client"

import { useEffect, useState } from "react"

export function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 w-4 h-4 bg-primary rounded-full mix-blend-difference transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: position.x - 8,
          top: position.y - 8,
          transform: "translate3d(0, 0, 0)",
        }}
      />
      <div
        className={`fixed pointer-events-none z-40 w-8 h-8 border-2 border-primary rounded-full transition-all duration-500 ${
          isVisible ? "opacity-50 scale-100" : "opacity-0 scale-0"
        }`}
        style={{
          left: position.x - 16,
          top: position.y - 16,
          transform: "translate3d(0, 0, 0)",
        }}
      />
    </>
  )
}
