"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillRadar() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "AWS", level: 75 },
    { name: "Docker", level: 70 },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const maxRadius = Math.min(centerX, centerY) - 40

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw grid circles
    ctx.strokeStyle = "rgba(34, 197, 94, 0.2)"
    ctx.lineWidth = 1
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath()
      ctx.arc(centerX, centerY, (maxRadius / 5) * i, 0, 2 * Math.PI)
      ctx.stroke()
    }

    // Draw axes
    const angleStep = (2 * Math.PI) / skills.length
    skills.forEach((skill, index) => {
      const angle = index * angleStep - Math.PI / 2
      const x = centerX + Math.cos(angle) * maxRadius
      const y = centerY + Math.sin(angle) * maxRadius

      // Draw axis line
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x, y)
      ctx.stroke()

      // Draw skill label
      ctx.fillStyle = "rgb(34, 197, 94)"
      ctx.font = "12px monospace"
      ctx.textAlign = "center"
      const labelX = centerX + Math.cos(angle) * (maxRadius + 20)
      const labelY = centerY + Math.sin(angle) * (maxRadius + 20)
      ctx.fillText(skill.name, labelX, labelY)
    })

    // Draw skill polygon
    ctx.beginPath()
    ctx.fillStyle = "rgba(34, 197, 94, 0.3)"
    ctx.strokeStyle = "rgb(34, 197, 94)"
    ctx.lineWidth = 2

    skills.forEach((skill, index) => {
      const angle = index * angleStep - Math.PI / 2
      const radius = (skill.level / 100) * maxRadius
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }

      // Draw skill points
      ctx.save()
      ctx.fillStyle = "rgb(34, 197, 94)"
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, 2 * Math.PI)
      ctx.fill()
      ctx.restore()
    })

    ctx.closePath()
    ctx.fill()
    ctx.stroke()
  }, [])

  return (
    <Card className="hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="font-montserrat font-bold text-center">Skill Radar</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <canvas ref={canvasRef} width={300} height={300} className="max-w-full h-auto" />
      </CardContent>
    </Card>
  )
}
