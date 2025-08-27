"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, RotateCcw } from "lucide-react"

export function InteractiveCodeDemo() {
  const [isRunning, setIsRunning] = useState(false)
  const [output, setOutput] = useState("")
  const [currentLine, setCurrentLine] = useState(-1)

  const codeLines = [
    "const fibonacci = (n) => {",
    "  if (n <= 1) return n;",
    "  return fibonacci(n-1) + fibonacci(n-2);",
    "};",
    "",
    "const result = fibonacci(8);",
    "console.log(`Fibonacci(8) = ${result}`);",
  ]

  const runDemo = async () => {
    setIsRunning(true)
    setOutput("")
    setCurrentLine(-1)

    for (let i = 0; i < codeLines.length; i++) {
      setCurrentLine(i)
      await new Promise((resolve) => setTimeout(resolve, 800))

      if (i === 5) {
        setOutput("Calculating...")
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }

      if (i === 6) {
        setOutput("Fibonacci(8) = 21")
      }
    }

    setCurrentLine(-1)
    setIsRunning(false)
  }

  const reset = () => {
    setIsRunning(false)
    setOutput("")
    setCurrentLine(-1)
  }

  return (
    <Card className="bg-slate-900 border-slate-700 text-green-400 font-mono">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-green-400 font-montserrat">Live Code Demo</CardTitle>
        <div className="flex gap-2">
          <Button size="sm" onClick={runDemo} disabled={isRunning} className="bg-green-600 hover:bg-green-700">
            <Play className="h-4 w-4 mr-1" />
            Run
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={reset}
            className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-1 mb-4">
          {codeLines.map((line, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                currentLine === index ? "bg-green-900/30 border-l-2 border-green-400 pl-2" : ""
              }`}
            >
              <span className="text-slate-500 mr-4">{index + 1}</span>
              <span className={line.includes("fibonacci") ? "text-blue-400" : ""}>{line}</span>
            </div>
          ))}
        </div>

        {output && (
          <div className="bg-slate-800 p-3 rounded border-l-4 border-green-400">
            <div className="text-slate-400 text-sm mb-1">Output:</div>
            <div className="text-green-400">{output}</div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
