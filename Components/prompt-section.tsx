"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, Paperclip, ArrowUp } from "lucide-react"

export default function PromptSection() {
  const [prompt, setPrompt] = useState("")
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  return (
    <div className="flex flex-col items-center justify-center py-8 md:py-16">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12">What can I help you ship?</h1>
      <div className="w-full max-w-3xl relative">
        <Textarea
          placeholder="Ask v0 to build..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-24 resize-none border rounded-lg p-4 pr-20 text-base"
        />
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <Button variant="outline" size="sm" className="text-sm text-gray-500 flex items-center gap-1">
            {selectedProject ? selectedProject : "No project selected"}
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}

