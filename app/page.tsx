import Header from "@/components/header"
import PromptSection from "@/components/prompt-section"
import QuickActions from "@/components/quick-actions"
import CommunityProjects from "@/components/community-projects"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-16 max-w-6xl">
        <PromptSection />
        <QuickActions />
        <CommunityProjects />
      </div>
    </main>
  )
}

