"use client"

import { Button } from "@/components/ui/button"
import { Image, FileImage, Layout, UserPlus, Calculator } from "lucide-react"

export default function QuickActions() {
  const actions = [
    { icon: <Image className="h-4 w-4 mr-2" />, label: "Clone a Screenshot" },
    { icon: <FileImage className="h-4 w-4 mr-2" />, label: "Import from Figma" },
    { icon: <Layout className="h-4 w-4 mr-2" />, label: "Landing Page" },
    { icon: <UserPlus className="h-4 w-4 mr-2" />, label: "Sign Up Form" },
    { icon: <Calculator className="h-4 w-4 mr-2" />, label: "Calculate Factorial" },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4 mb-16">
      {actions.map((action, index) => (
        <Button key={index} variant="outline" size="sm" className="text-sm bg-white border-gray-200 hover:bg-gray-50">
          {action.icon}
          {action.label}
        </Button>
      ))}
    </div>
  )
}

