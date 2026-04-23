import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa" // Official logos

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-zinc-800 flex flex-col items-center justify-center p-6">

      {/* Top Navigation */}
      <nav className="fixed top-0 w-full max-w-5xl flex justify-end items-center p-8 z-20 gap-3">
        <a href="https://github.com/BinitBudwal" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
            <FaGithub className="w-5 h-5" />
          </Button>
        </a>
        <a href="https://linkedin.com/in/binit-budwal-749228246/" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
            <FaLinkedin className="w-5 h-5" />
          </Button>
        </a>
        <a href="mailto:Binitsaini@gmail.com">
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
            <Mail className="w-5 h-5" />
          </Button>
        </a>
        <a href="/BinitBudwal_Resume.pdf" target="_blank" rel="noopener noreferrer" className="ml-2">
          <Button variant="outline" className="border-zinc-800 bg-transparent text-white hover:bg-white hover:text-black gap-2">
            <Download className="w-4 h-4" />
            Resume
          </Button>
        </a>
      </nav>

      {/* Hero */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
          Binit Budwal
        </h1>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-zinc-400 text-lg md:text-xl font-mono uppercase tracking-widest">
            Computer Science @ UofM
          </p>
          <p className="max-w-[500px] text-zinc-500 text-sm">
            Pursuing a BSc in Computer Science. Focused on Cybersecurity & Infrastructure.
          </p>
        </div>
      </div>

      <footer className="fixed bottom-8 text-zinc-600 text-xs tracking-widest uppercase font-mono">
        Winnipeg, MB // 2026
      </footer>
    </main>
  )
}