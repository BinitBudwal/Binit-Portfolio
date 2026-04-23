"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Spring settings for the "lag" effect
  // stiffness: how fast it snaps, damping: how much it wobbles
  const springConfig = { stiffness: 150, damping: 20 };
  
  const mainX = useSpring(0, springConfig);
  const mainY = useSpring(0, springConfig);
  
  const trailingX = useSpring(0, { stiffness: 100, damping: 25 });
  const trailingY = useSpring(0, { stiffness: 100, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mainX.set(e.clientX);
      mainY.set(e.clientY);
      trailingX.set(e.clientX);
      trailingY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mainX, mainY, trailingX, trailingY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* The Solid Center Dot */}
      <motion.div
        className="w-2 h-2 bg-zinc-400 rounded-full fixed top-0 left-0"
        style={{ x: mainX, y: mainY, translateX: "-50%", translateY: "-50%" }}
      />
      {/* The Transparent Outer Circle (with more lag) */}
      <motion.div
        className="w-8 h-8 border border-zinc-600 rounded-full fixed top-0 left-0"
        style={{ x: trailingX, y: trailingY, translateX: "-50%", translateY: "-50%" }}
      />
    </div>
  );
}