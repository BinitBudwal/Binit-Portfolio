"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export default function Background() {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; duration: number; delay: number }[]>([])
  const hasGenerated = useRef(false) // This acts as a permanent lock

  useEffect(() => {
    // If we've already generated stars, don't do it again
    if (hasGenerated.current) return;
    
    const newStars = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 40}%`, 
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 2 + 1,
      delay: Math.random() * 10,
    }))
    
    setStars(newStars)
    hasGenerated.current = true // Lock the generation
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" suppressHydrationWarning>
      {/* Sunrise Hue */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-blue-900/20 via-blue-900/5 to-transparent dark:from-blue-900/30 dark:via-blue-900/10" />
      
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute h-[1px] w-[80px] bg-gradient-to-r from-transparent via-blue-300 to-white"
          style={{ top: star.top, left: star.left, rotate: "140deg" }}
          initial={{ opacity: 0, x: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: -400,
            y: 400,
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: star.delay + 2,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}