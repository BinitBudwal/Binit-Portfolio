"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SiDotnet, SiNextdotjs, SiSharp } from "react-icons/si"
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi"

// 1. Define Types to fix the "Unexpected any" error
interface Project {
  id: number;
  type: 'dotnet' | 'nextjs' | 'security';
  title: string;
  desc: string;
}

interface MetaData {
  icon: React.ReactNode;
  color: string;
}

const projects: Project[] = [
  { id: 1, type: "dotnet", title: "Enterprise Backend", desc: "C#/.NET MVC Backend Architecture" },
  { id: 2, type: "nextjs", title: "Fullstack Platform", desc: "Next.js 15 & Tailwind CSS System" },
  { id: 3, type: "security", title: "Infrastructure", desc: "Cybersecurity Protocol Simulation" },
]

const cardMeta: Record<string, MetaData> = {
  dotnet: { icon: <SiSharp />, color: "text-blue-500" },
  nextjs: { icon: <SiNextdotjs />, color: "text-zinc-400" },
  security: { icon: <FiExternalLink />, color: "text-emerald-500" },
}

export default function ProjectsSection() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextProject = () => {
    setDirection(1)
    setIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  return (
    <div className="w-full max-w-4xl px-4 py-12 flex flex-col items-center">
      <div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/5 backdrop-blur-sm shadow-2xl">
        
        {/* Navigation Buttons */}
        <button 
          onClick={prevProject}
          className="absolute left-6 z-20 p-4 rounded-full bg-zinc-100/50 dark:bg-white/5 hover:bg-blue-500 hover:text-white transition-all text-zinc-500"
          aria-label="Previous Project"
        >
          <FiChevronLeft size={24} />
        </button>

        <button 
          onClick={nextProject}
          className="absolute right-6 z-20 p-4 rounded-full bg-zinc-100/50 dark:bg-white/5 hover:bg-blue-500 hover:text-white transition-all text-zinc-500"
          aria-label="Next Project"
        >
          <FiChevronRight size={24} />
        </button>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 text-center"
          >
            <div className={`text-7xl mb-8 ${cardMeta[projects[index].type].color}`}>
              {cardMeta[projects[index].type].icon}
            </div>
            
            <h3 className="text-4xl font-bold tracking-tighter mb-4 uppercase">
              {projects[index].title}
            </h3>
            
            <p className="text-zinc-500 font-mono text-sm mb-12 max-w-sm">
              {projects[index].desc}
            </p>

            <div className="px-10 py-3 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-full bg-zinc-50/50 dark:bg-black/20">
               <span className="text-[10px] uppercase tracking-[0.4em] font-black text-blue-500 animate-pulse">
                 Status: Development in Progress
               </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-4 mt-10">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1)
              setIndex(i)
            }}
            className={`h-1.5 transition-all duration-700 rounded-full ${
              index === i 
                ? "w-12 bg-blue-500" 
                : "w-3 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}