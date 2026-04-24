// src/components/Hero.tsx
"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center space-y-4">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter font-sans">
        Binit Budwal
      </h1>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
  )
}