"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CodeTypingAnimation() {
  const [displayedCode, setDisplayedCode] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const codeSnippet = `const developer = {
  name: "Alex Chen",
  skills: ["React", "Node.js", "TypeScript"],
  passion: "Building amazing experiences",
  
  createMagic: () => {
    return "Code + Creativity = Innovation";
  },
  
  currentStatus: () => {
    return "Available for new opportunities!";
  }
};

console.log(developer.createMagic());`

  useEffect(() => {
    if (currentIndex < codeSnippet.length && isTyping) {
      const timer = setTimeout(() => {
        setDisplayedCode((prev) => prev + codeSnippet[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50)

      return () => clearTimeout(timer)
    } else if (currentIndex >= codeSnippet.length) {
      setTimeout(() => {
        setIsTyping(false)
        setTimeout(() => {
          setDisplayedCode("")
          setCurrentIndex(0)
          setIsTyping(true)
        }, 3000)
      }, 2000)
    }
  }, [currentIndex, isTyping, codeSnippet])

  return (
    <Card className="bg-gray-900 text-green-400 font-mono text-sm border-gray-700 hover:shadow-2xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-green-400 flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          developer.js
        </CardTitle>
      </CardHeader>
      <CardContent>
        <pre className="whitespace-pre-wrap">
          <code>
            {displayedCode}
            <span className="animate-pulse">|</span>
          </code>
        </pre>
      </CardContent>
    </Card>
  )
}
