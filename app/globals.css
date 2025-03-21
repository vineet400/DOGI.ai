"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, GitFork } from "lucide-react"

type Project = {
  id: string
  title: string
  image: string
  author: {
    name: string
    avatar: string
  }
  forks: number
}

export default function CommunityProjects() {
  const [projects] = useState<Project[]>([
    {
      id: "1",
      title: "Next.js Conf 2024",
      image: "/placeholder.svg?height=200&width=300",
      author: {
        name: "Vercel",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      forks: 4500,
    },
    {
      id: "2",
      title: "AI Chat Interface",
      image: "/placeholder.svg?height=200&width=300",
      author: {
        name: "OpenAI",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      forks: 4000,
    },
    {
      id: "3",
      title: "OpenAI and AI SDK Chatbot",
      image: "/placeholder.svg?height=200&width=300",
      author: {
        name: "AI Team",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      forks: 2000,
    },
    {
      id: "4",
      title: "Background Paths",
      image: "/placeholder.svg?height=200&width=300",
      author: {
        name: "Design Team",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      forks: 7700,
    },
    {
      id: "5",
      title: "Currency Transfer Animation",
      image: "/placeholder.svg?height=200&width=300",
      author: {
        name: "Finance UI",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      forks: 2700,
    },
    {
      id: "6",
      title: "Product Launch Waitlist",
      image: "/placeholder.svg?height=200&width=300",
      author: {
        name: "Marketing",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      forks: 2300,
    },
    {
      id: "7",
      title: "Financial Dashboard",
      image: "/placeholder.svg?height=200&width=300",
      author: {
        name: "FinTech",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      forks: 9000,
    },
    {
      id: "8",
      title: "AI Card Generation",
      image: "/placeholder.svg?height=200&width=300",
      author: {
        name: "AI Design",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      forks: 2100,
    },
  ])

  return (
    <div className="mt-8 mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">From the Community</h2>
        <Button variant="ghost" size="sm" className="text-sm">
          View All <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-200 bg-gray-50 mb-3">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full overflow-hidden">
                <Image
                  src={project.author.avatar || "/placeholder.svg"}
                  alt={project.author.name}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-sm">{project.title}</h3>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <GitFork className="h-3 w-3 mr-1" />
                  {project.forks.toLocaleString()} Forks
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

