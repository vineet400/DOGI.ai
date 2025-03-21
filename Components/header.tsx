"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const isMobile = useMobile()

  return (
    <header className="border-b border-gray-100 bg-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between max-w-6xl">
        <Link href="/" className="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black"
          >
            <path
              d="M5.636 5.636L18.364 18.364M18.364 5.636L5.636 18.364"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <span className="font-bold text-xl">v0</span>
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size={isMobile ? "sm" : "default"}>
            Sign In
          </Button>
          <Button variant="default" size={isMobile ? "sm" : "default"}>
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}

