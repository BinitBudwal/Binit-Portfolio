"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Moon, Sun } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Background from "@/components/Background"
import Hero from "@/components/Hero"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Wait for mounting to prevent theme hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // If not mounted, render a placeholder with the same background to avoid a "flash"
  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-black" />
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-zinc-200 dark:selection:bg-zinc-800 flex flex-col items-center justify-center p-6 relative font-mono">
      
      <Background />
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full max-w-5xl flex justify-end items-center p-8 z-20 gap-3">
        {/* Theme Toggle Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors relative"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 transition-all" />
          ) : (
            <Moon className="h-5 w-5 transition-all" />
          )}
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

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        {/* Force Sans-serif for the name for a premium bold look */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter font-sans">
          Binit Budwal
        </h1>

        <motion.div 
  key={mounted ? "loaded" : "not-loaded"} // Forces animation on mount
  initial={{ opacity: 0, y: 40 }}        // Starts lower and invisible
  animate={{ opacity: 1, y: 0 }}         // Moves to position and fades in
  transition={{ 
    duration: 1.2,                       // Slower for more drama
    delay: 0.4,                          // Wait for the black background to settle
    ease: [0.16, 1, 0.3, 1]              // "Custom Cubic Bezier" for a premium feel
  }}
  className="flex flex-col items-center space-y-2"
>
  <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl uppercase tracking-[0.3em]">
    Computer Science @ UofM
  </p>
  <p className="max-w-[500px] text-zinc-400 dark:text-zinc-600 text-sm italic">
    {"// Pursuing BSc in Computer Science. Focused on Cybersecurity & Infrastructure."}
  </p>
</motion.div>
      </div>

      <footer className="fixed bottom-8 text-zinc-400 dark:text-zinc-800 text-xs tracking-widest uppercase">
        Winnipeg, MB // 2026
      </footer>
    </main>
  )
}