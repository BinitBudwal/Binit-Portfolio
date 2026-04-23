import { Button } from "@/components/ui/button"
import { Download } from "lucide-react" // This adds a small icon

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-zinc-800 flex flex-col items-center justify-center p-6">
      {/* Subtle background detail */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#27272a,transparent)]" />

      <nav className="fixed top-0 w-full max-w-5xl flex justify-end p-8 z-20">
        {/* The Resume Button */}
        <a href="/BinitBudwal_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="border-zinc-800 bg-transparent text-white hover:bg-white hover:text-black transition-all gap-2">
            <Download className="w-4 h-4" />
            Resume
          </Button>
        </a>
      </nav>

      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
          Binit Budwal
        </h1>
        
        <div className="flex flex-col items-center space-y-2">
          <p className="text-zinc-400 text-lg md:text-xl font-mono uppercase tracking-widest">
            Computer Science @ UofM
          </p>
          <p className="max-w-[500px] text-zinc-500 text-sm">
            Specializing in Cybersecurity & Network Infrastructure.
          </p>
        </div>
      </div>

      <footer className="fixed bottom-8 text-zinc-600 text-xs tracking-widest uppercase">
        Winnipeg, MB • 2026
      </footer>
    </main>
  )
}