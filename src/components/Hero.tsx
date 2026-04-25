"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"

// --- Scramble Component (One-Shot Version) ---
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%@#$*&"

function ScrambleText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState(text)
  const hasScrambled = useRef(false) // Tracks if we've already run the effect

  const scramble = useCallback(() => {
    if (hasScrambled.current) return // Exit if already done
    hasScrambled.current = true

    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index]
            if (text[index] === " ") return " "
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )

      if (iteration >= text.length) clearInterval(interval)
      iteration += 1 / 3
    }, 30)
  }, [text])

  useEffect(() => {
    const timer = setTimeout(scramble, delay)
    return () => clearTimeout(timer)
  }, [scramble, delay])

  return <span>{displayText}</span>
}

// --- Main Hero Component ---
export default function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center space-y-4">
      {/* Name: Scrambles first */}
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter font-sans cursor-default">
        <ScrambleText text="BINIT BUDWAL" />
      </h1>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center space-y-2"
      >
        {/* Subtitle: Scrambles with a small delay */}
        <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl uppercase tracking-[0.3em] cursor-default">
          <ScrambleText text="Computer Science @ UofM" delay={600} />
        </p>
        
        {/* Bio: Scrambles last */}
        <p className="max-w-[500px] text-zinc-400 dark:text-zinc-600 text-sm italic font-mono cursor-default">
          {"// "}
          <ScrambleText 
            text="Pursuing BSc in Computer Science. Focused on Cybersecurity & Infrastructure." 
            delay={1000} 
          />
        </p>
      </motion.div>
    </div>
  )
}