"use client"

import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiPython, 
  SiTailwindcss, 
  SiPostgresql, 
  SiDocker, 
  SiLinux,
  SiSharp,      // If this fails, try SiSharp
  SiDotnet,
  SiGit,
  SiGithub, 
} from "react-icons/si"
const techStack = [
  { name: "C#", icon: <SiSharp /> },
  { name: ".NET", icon: <SiDotnet /> },
  { name: "SQL", icon: <SiPostgresql /> },
  { name: "CSS", icon: < SiTailwindcss/> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Linux", icon: <SiLinux /> },
  { name: "Github", icon: <SiGithub /> },
]

export default function TechMarquee() {
  return (
    <div className="relative flex overflow-x-hidden border-y border-zinc-200 dark:border-zinc-800 bg-white/5 py-6 backdrop-blur-sm">
      <div className="flex animate-marquee whitespace-nowrap">
  {/* Triple the stack to ensure the screen is never empty during the reset */}
  {[...techStack, ...techStack, ...techStack].map((tech, i) => (
    <div 
      key={i} 
      className="mx-12 flex items-center gap-3 text-zinc-500 hover:text-black dark:hover:text-white transition-colors duration-300"
    >
      <span className="text-2xl">{tech.icon}</span>
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono">
        {tech.name}
      </span>
    </div>
  ))}
</div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />
    </div>
  )
}