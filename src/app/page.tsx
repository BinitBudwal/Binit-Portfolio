"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Moon, Sun } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Background from "@/components/Background"
import StatusGroup from "@/components/StatusGroup"
import Hero from "@/components/Hero"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, 0)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-black" />
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-zinc-200 dark:selection:bg-zinc-800 flex flex-col items-center justify-center p-6 relative font-mono overflow-hidden">
      
      <Background />
      <StatusGroup />

      {/* Top Navigation */}
      <nav className="fixed top-0 w-full max-w-5xl flex justify-end items-center p-8 z-20 gap-3">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>

        <a href="https://github.com/BinitBudwal" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-black dark:hover:text-white">
            <FaGithub className="w-5 h-5" />
          </Button>
        </a>
        <a href="https://linkedin.com/in/binit-budwal-749228246/" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-black dark:hover:text-white">
            <FaLinkedin className="w-5 h-5" />
          </Button>
        </a>
        <a href="mailto:Binitsaini@gmail.com">
          <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-black dark:hover:text-white">
            <Mail className="w-5 h-5" />
          </Button>
        </a>
        <a href="/BinitBudwal_Resume.pdf" target="_blank" rel="noopener noreferrer" className="ml-2">
          <Button 
            variant="outline" 
            className="border-zinc-200 dark:border-zinc-800 bg-transparent text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all gap-2"
          >
            <Download className="w-4 h-4" />
            Resume
          </Button>
        </a>
      </nav>

      {/* The Hero component now contains all the animation and text logic */}
      <Hero />

      <footer className="fixed bottom-8 text-zinc-400 dark:text-zinc-800 text-xs tracking-widest uppercase">
        Winnipeg, MB // 2026
      </footer>
    </main>
  )
}