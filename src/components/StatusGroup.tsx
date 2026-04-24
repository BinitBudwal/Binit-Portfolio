"use client"

import { useEffect, useState } from "react"

export default function StatusGroup() {
  const [time, setTime] = useState<string>("")
  const [date, setDate] = useState<string>("")
  const [temp, setTemp] = useState<string>("FETCHING...")

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      
      // Format: THU, 23RD APR 2026
      const formatter = new Intl.DateTimeFormat('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
      
      const parts = formatter.formatToParts(now)
      const getPart = (type: string) => parts.find(p => p.type === type)?.value.toUpperCase()

      // Ordinal Logic
      const day = now.getDate()
      const suffix = ["TH", "ST", "ND", "RD"][(day % 10 > 3 || Math.floor(day % 100 / 10) === 1) ? 0 : day % 10]
      
      setDate(`${getPart('weekday')}, ${day}${suffix} ${getPart('month')} ${getPart('year')}`)
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase())
    }

    const fetchWeather = async () => {
  try {
    const res = await fetch("https://wttr.in/Winnipeg?format=%t")
    const data = await res.text()

    // Safety Check: If it contains HTML tags, it's a glitch/error page
    if (data.includes("<html") || data.length > 10) {
      setTemp("STATION_BUSY")
    } else {
      setTemp(data.toUpperCase().replace('+', ''))
    }
  } catch (e) {
    setTemp("STATION_OFFLINE")
  }
}

    updateDateTime()
    fetchWeather()
    const timer = setInterval(updateDateTime, 10000) // Update every 10s

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed top-0 left-0 p-8 z-50 font-mono pointer-events-none select-none">
      <div className="flex flex-col gap-0.5">
        {/* Date & Time Row */}
        <div className="flex items-center gap-4 text-[11px] tracking-[0.15em] text-zinc-400 dark:text-zinc-500">
          <span className="opacity-80">{date}</span>
          <span className="text-zinc-900 dark:text-zinc-100 font-bold">{time}</span>
        </div>

        {/* System/Weather Status Row */}
        <div className="flex items-center gap-3 text-[9px] tracking-[0.2em] text-zinc-500 dark:text-zinc-600">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
            </span>
            <span>{temp}</span>
          </div>
          <span className="opacity-30">|</span>
          <div className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-green-500/50"></span>
            <span>UOM_ENCRYPTION_ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  )
}