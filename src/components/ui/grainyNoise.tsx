import * as React from "react"
import { cn } from "@/src/lib/utils/utils"

interface GrainyNoiseProps {
  className?: string
  opacity?: string
  zIndex?: string
}

export function GrainyNoise({ 
  className, 
  opacity = "opacity-[0.03] dark:opacity-[0.05]",
  zIndex = "z-0"
}: GrainyNoiseProps) {
  return (
    <div 
      className={cn(
        "pointer-events-none absolute inset-0",
        opacity,
        zIndex,
        className
      )} 
      style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} 
      aria-hidden="true" 
    />
  )
}
