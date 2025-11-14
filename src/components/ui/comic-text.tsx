"use client"

import { CSSProperties } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

type ComicTextProps = {
  children: string
  className?: string
  style?: CSSProperties
  fontSize?: number
}

export function ComicText({
  children,
  className,
  style,
  fontSize = 5,
}: ComicTextProps) {
  if (typeof children !== "string") {
    throw new Error("children must be a string")
  }

  return (
    <motion.div
      className={cn("text-center select-none", className)}
      style={{
        fontSize: `${fontSize}rem`,
        fontFamily: "'Bangers', 'Comic Sans MS', 'Impact', sans-serif",
        fontWeight: "900",
        textTransform: "uppercase",
        // Red to dark red gradient with halftone dots
        background: "linear-gradient(180deg, #ff1a1a 0%, #cc0000 100%)",
        backgroundImage: `
          radial-gradient(circle at 2px 2px, rgba(0,0,0,0.3) 1.5px, transparent 0),
          linear-gradient(180deg, #ff1a1a 0%, #cc0000 100%)
        `,
        backgroundSize: "6px 6px, 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        // Thick black stroke
        WebkitTextStroke: `${Math.max(4, fontSize * 0.8)}px #000000`,
        // Strong 3D drop-shadow effect
        filter: `
          drop-shadow(8px 8px 0px #000000)
          drop-shadow(6px 6px 0px #000000)
          drop-shadow(4px 4px 0px #000000)
        `,
        transform: "skewY(-2deg)",
        ...style,
      }}
      initial={{ opacity: 0, scale: 0.85, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  )
}
