"use client"

import { useEffect, useState } from "react"

const techIcons = [
  { name: "React", symbol: "⚛️", color: "text-blue-400" },
  { name: "TypeScript", symbol: "📘", color: "text-blue-600" },
  { name: "Node.js", symbol: "🟢", color: "text-green-500" },
  { name: "Python", symbol: "🐍", color: "text-yellow-500" },
  { name: "Docker", symbol: "🐳", color: "text-blue-500" },
  { name: "AWS", symbol: "☁️", color: "text-orange-500" },
]

interface FloatingIcon {
  id: number
  tech: (typeof techIcons)[0]
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
  rotationSpeed: number
}

export function FloatingTechIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])

  useEffect(() => {
    const initialIcons: FloatingIcon[] = techIcons.map((tech, index) => ({
      id: index,
      tech,
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 100),
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      rotation: 0,
      rotationSpeed: (Math.random() - 0.5) * 4,
    }))

    setIcons(initialIcons)

    const animate = () => {
      setIcons((prevIcons) =>
        prevIcons.map((icon) => {
          let newX = icon.x + icon.vx
          let newY = icon.y + icon.vy
          let newVx = icon.vx
          let newVy = icon.vy

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth - 60) {
            newVx = -newVx
            newX = Math.max(0, Math.min(window.innerWidth - 60, newX))
          }
          if (newY <= 0 || newY >= window.innerHeight - 60) {
            newVy = -newVy
            newY = Math.max(0, Math.min(window.innerHeight - 60, newY))
          }

          return {
            ...icon,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            rotation: icon.rotation + icon.rotationSpeed,
          }
        }),
      )
    }

    const interval = setInterval(animate, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute text-4xl opacity-20 hover:opacity-60 transition-opacity duration-300 pointer-events-auto cursor-pointer"
          style={{
            left: `${icon.x}px`,
            top: `${icon.y}px`,
            transform: `rotate(${icon.rotation}deg)`,
          }}
          title={icon.tech.name}
        >
          <span className={icon.tech.color}>{icon.tech.symbol}</span>
        </div>
      ))}
    </div>
  )
}
