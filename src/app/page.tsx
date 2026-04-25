"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Moon, Sun } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import Background from "@/components/Background"
import StatusGroup from "@/components/StatusGroup"
import Hero from "@/components/Hero"
import TechMarquee from "@/components/TechMarquee"


export default function Home() {
  // Inside your Home function
  const { scrollYProgress } = useScroll();
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
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-blue-500/30 selection:text-blue-200 flex flex-col items-center justify-center p-6 relative font-mono overflow-hidden">
      <motion.div 
  className="fixed top-0 left-0 right-0 h-[1px] bg-blue-500 origin-left z-[100]"
  style={{ scaleX: scrollYProgress }}
/>
      <Background />
      
      {/* Film Grain / Noise Overlay */}
      <div 
        className="fixed inset-0 z-[1] opacity-[0.03] pointer-events-none contrast-150 brightness-100" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />

      {/* Unified Top Header: Responsive with Glassmorphism */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none px-4 pt-4 md:px-0 md:pt-0">
        <div className="w-full max-w-7xl pointer-events-auto">
          <div className="flex justify-between items-center md:items-start p-4 md:p-10 bg-white/5 dark:bg-black/5 backdrop-blur-md border border-white/10 dark:border-white/5 rounded-2xl md:bg-transparent md:backdrop-blur-none md:border-none md:p-10 transition-all duration-300 shadow-xl shadow-black/5 md:shadow-none">
            
            {/* Left Side: Status */}
            <StatusGroup />

            {/* Right Side: Navigation & Socials */}
            <nav className="flex items-center gap-1 md:gap-3">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </motion.div>

              <div className="flex items-center">
                <motion.div whileHover={{ y: -2, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <a href="https://github.com/BinitBudwal" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-black dark:hover:text-white">
                      <FaGithub className="w-5 h-5" />
                    </Button>
                  </a>
                </motion.div>
                
                <motion.div whileHover={{ y: -2, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <a href="https://linkedin.com/in/binit-budwal-749228246/" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-black dark:hover:text-white">
                      <FaLinkedin className="w-5 h-5" />
                    </Button>
                  </a>
                </motion.div>

                <motion.div whileHover={{ y: -2, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <a href="mailto:Binitsaini@gmail.com">
                    <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-black dark:hover:text-white">
                      <Mail className="w-5 h-5" />
                    </Button>
                  </a>
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-1">
                <a href="/BinitBudwal_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    className="border-zinc-200 dark:border-zinc-800 bg-transparent text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all px-2 md:px-4 gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden md:inline text-[10px] uppercase tracking-[0.2em] font-bold">Resume</span>
                  </Button>
                </a>
              </motion.div>
            </nav>
          </div>
        </div>
      </header>
      
      <Hero />
      {/* --- ADD THIS SECTION --- */}
      <div className="w-full mt-32 mb-8 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-[1px] w-8 bg-zinc-800" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">
            Technical Stack & Tooling
          </span>
          <div className="h-[1px] w-8 bg-zinc-800" />
        </div>
        <TechMarquee />
      </div>
      

      <footer className="fixed bottom-8 text-zinc-400 dark:text-zinc-800 text-xs tracking-widest uppercase">
        Winnipeg, MB // 2026
      </footer>
    </main>
  )
}