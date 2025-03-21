"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { Send, Sparkles, Bot, User, Trash, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { Badge } from "@/components/ui/badge"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

const examplePrompts = [
  "How can I build a website with Next.js?",
  "Create a responsive navbar using Tailwind CSS",
  "Explain how useState works in React",
  "Generate a simple API route in Next.js",
]

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! How can I assist you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response after a delay
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: generateResponse(input),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  const generateResponse = (prompt: string): string => {
    // Simple dummy response generator
    if (prompt.toLowerCase().includes("hello") || prompt.toLowerCase().includes("hi")) {
      return "Hello! How can I help you today?"
    } else if (prompt.toLowerCase().includes("next.js")) {
      return "Next.js is a React framework that enables server-side rendering and generating static websites. It's a great choice for building modern web applications."
    } else if (prompt.toLowerCase().includes("tailwind")) {
      return "Tailwind CSS is a utility-first CSS framework that allows you to build designs directly in your markup. It provides low-level utility classes that let you build completely custom designs."
    } else if (prompt.toLowerCase().includes("react")) {
      return "React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and efficiently update the DOM when data changes."
    } else {
      return (
        "I understand your question about '" +
        prompt +
        "'. To provide a more detailed response, I would need to analyze your query more thoroughly and draw from my knowledge base."
      )
    }
  }

  const clearChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: "Chat cleared. How can I assist you today?",
      },
    ])
  }

  const handleExampleClick = (example: string) => {
    setInput(example)
  }

  return (
    <div className="flex flex-col w-full h-[100dvh] overflow-hidden">
      {/* Header */}
      <header className="border-b border-border bg-background py-3 px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-semibold">AI Assistant</h1>
          </div>
          <Button variant="ghost" size="icon" onClick={clearChat} title="Clear chat">
            <Trash className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Chat Area */}
      <ScrollArea className="flex-1 p-4 sm:p-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-start gap-3 rounded-lg p-3",
                message.role === "assistant" ? "bg-secondary/50" : "bg-background",
              )}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background">
                {message.role === "assistant" ? <Bot className="h-5 w-5 text-primary" /> : <User className="h-5 w-5" />}
              </div>
              <div className="flex-1 space-y-2">
                <div className="prose prose-sm dark:prose-invert">{message.content}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3 rounded-lg p-3 bg-secondary/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
                <span className="text-sm text-muted-foreground">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </ScrollArea>

      {/* Example prompts - only show if no messages or just welcome message */}
      {messages.length <= 1 && (
        <div className="mx-auto w-full max-w-3xl px-4 py-3">
          <p className="text-sm text-muted-foreground mb-2">Try asking about:</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {examplePrompts.map((prompt, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="cursor-pointer hover:bg-secondary/80"
                onClick={() => handleExampleClick(prompt)}
              >
                {prompt}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="border-t border-border bg-background p-4">
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-3xl items-end gap-3">
          <Textarea
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-12 resize-none border rounded-lg"
            rows={1}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                if (input.trim()) handleSubmit(e)
              }
            }}
          />
          <Button type="submit" size={isMobile ? "icon" : "default"} disabled={!input.trim() || isLoading}>
            {isMobile ? <Send className="h-4 w-4" /> : "Send"}
          </Button>
        </form>
        <p className="mx-auto max-w-3xl mt-2 text-xs text-muted-foreground px-1">
          AI Assistant can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  )
}

