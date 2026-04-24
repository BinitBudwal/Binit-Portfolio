"use client"

import { useEffect, useState } from "react"

export default function StatusGroup() {
  const [time, setTime] = useState<string>("")
  const [date, setDate] = useState<string>("")
  const [temp, setTemp] = useState<string>("FETCHING...")

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const formatter = new Intl.DateTimeFormat('en-GB', {
        weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
      })
      const parts = formatter.formatToParts(now)
      const day = now.getDate()
      const suffix = ["TH", "ST", "ND", "RD"][(day % 10 > 3 || Math.floor(day % 100 / 10) === 1) ? 0 : day % 10]
      
      const getPart = (type: string) => parts.find(p => p.type === type)?.value.toUpperCase()
      setDate(`${getPart('weekday')}, ${day}${suffix} ${getPart('month')} ${getPart('year')}`)
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toUpperCase())
    }

   const fetchWeather = async () => {
      const key = process.env.NEXT_PUBLIC_WEATHER_API_KEY
      if (!key) {
        setTemp("CONFIG_ERROR")
        return
      }

      const getWeather = async (query: string) => {
        try {
          const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${key}&q=${query}&aqi=no`
          )
          const data = await res.json()
          if (data.current) {
            setTemp(`${Math.round(data.current.temp_c)}°C`)
          }
        } catch (e) {
          setTemp("STATION_OFFLINE")
        }
      }

      // Check if browser supports Geolocation
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Success: Use actual coordinates
            const { latitude, longitude } = position.coords
            getWeather(`${latitude},${longitude}`)
          },
          () => {
            // User denied or error: Fallback to Winnipeg (or any default)
            getWeather("Winnipeg")
          }
        );
      } else {
        // Browser doesn't support geolocation: Fallback
        getWeather("Winnipeg")
      }
    }

    updateDateTime()
    fetchWeather()
    const timer = setInterval(updateDateTime, 10000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed top-0 left-0 p-8 z-50 font-mono pointer-events-none select-none">
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-4 text-[11px] tracking-[0.15em] text-zinc-400 dark:text-zinc-500">
          <span className="opacity-80">{date}</span>
          <span className="text-zinc-900 dark:text-zinc-100 font-bold">{time}</span>
        </div>
        <div className="flex items-center gap-3 text-[9px] tracking-[0.2em] text-zinc-500 dark:text-zinc-600">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
            </span>
            <span>{temp}  WPG_STATION</span>
          </div>
          <span className="opacity-30">|</span>
          <div className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-green-500/50"></span>
            <span>SECURE_SESSION</span>
          </div>
        </div>
      </div>
    </div>
  )
}