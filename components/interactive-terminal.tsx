"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function InteractiveTerminal() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([
    "Welcome to Alex's Interactive Terminal",
    "Type 'help' to see available commands",
    "",
  ])
  const [currentLine, setCurrentLine] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands = {
    help: () => [
      "Available commands:",
      "  about    - Learn about me",
      "  skills   - View my technical skills",
      "  projects - See my latest projects",
      "  contact  - Get my contact info",
      "  clear    - Clear terminal",
      "  whoami   - Display current user",
      "",
    ],
    about: () => [
      "Full-stack developer with 5+ years experience",
      "Passionate about clean code and innovative solutions",
      "Currently based in San Francisco, CA",
      "",
    ],
    skills: () => [
      "Frontend: React, Next.js, TypeScript, Tailwind CSS",
      "Backend: Node.js, Python, PostgreSQL, MongoDB",
      "Cloud: AWS, Docker, Kubernetes",
      "Tools: Git, VS Code, Figma",
      "",
    ],
    projects: () => [
      "🚀 E-commerce Platform - Next.js, Stripe, PostgreSQL",
      "📱 Task Management App - React Native, Node.js",
      "🤖 AI Chat Bot - Python, OpenAI API, FastAPI",
      "",
    ],
    contact: () => [
      "📧 alex.chen@example.com",
      "📱 +1 (555) 123-4567",
      "🌍 San Francisco, CA",
      "💼 linkedin.com/in/alexchen",
      "",
    ],
    clear: () => {
      setHistory(["Terminal cleared", ""])
      return []
    },
    whoami: () => ["alex.chen", ""],
  }

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim()
    const output = commands[command as keyof typeof commands]

    if (output) {
      const result = output()
      setHistory((prev) => [...prev, `$ ${cmd}`, ...result])
    } else {
      setHistory((prev) => [...prev, `$ ${cmd}`, `Command not found: ${cmd}`, "Type 'help' for available commands", ""])
    }
    setInput("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input)
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <Card className="bg-gray-900 text-green-400 font-mono text-sm border-gray-700 hover:shadow-2xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="ml-4 text-gray-400">alex@portfolio:~$</span>
        </div>

        <div className="h-64 overflow-y-auto mb-4 space-y-1">
          {history.map((line, index) => (
            <div key={index} className={line.startsWith("$") ? "text-cyan-400" : "text-green-400"}>
              {line}
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <span className="text-cyan-400 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-transparent outline-none text-green-400"
            placeholder="Type a command..."
          />
          <span className="animate-pulse text-green-400">|</span>
        </div>
      </CardContent>
    </Card>
  )
}
