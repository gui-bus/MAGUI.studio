import * as React from "react"
import { m } from "framer-motion"
import { cn } from "@/src/lib/utils/utils"
import { ProcessStep as ProcessStepType } from "@/src/types/sections"
import { VARIANTS_FADE_IN_UP } from "@/src/config/animations"

interface ProcessStepProps {
  step: ProcessStepType
  index: number
}

export function ProcessStep({ step, index }: ProcessStepProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative pt-0 md:pt-24 group"
    >
      <div className="absolute top-0 left-0 md:left-0 md:top-12 -translate-y-1/2 md:-translate-x-0">
        <div className="relative flex items-center justify-center h-8 w-8">
          <m.div
            animate={{
              scale: isHovered ? 1.5 : 1,
              backgroundColor: isHovered
                ? "var(--brand-primary)"
                : "transparent",
            }}
            className="absolute inset-0 rounded-full border border-brand-primary/30"
          />
          <div className="h-2 w-2 rounded-full bg-brand-primary" />

          {isHovered && (
            <m.div
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute h-full w-full rounded-full bg-brand-primary"
            />
          )}
        </div>
      </div>

      <m.div
        variants={VARIANTS_FADE_IN_UP}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.8 + index * 0.1}
        className="space-y-6 pl-12 md:pl-0"
      >
        <div className="space-y-2">
          <span
            className={cn(
              "font-heading text-4xl font-black transition-colors duration-500",
              isHovered ? "text-brand-primary" : "text-foreground/10"
            )}
          >
            0{index + 1}
          </span>
          <h3 className="font-heading text-2xl lg:text-3xl font-bold uppercase tracking-tight text-foreground leading-[1.1]">
            {step.title}
          </h3>
        </div>

        <p className="text-lg text-muted-foreground/80 leading-relaxed font-medium max-w-xs transition-colors duration-500 group-hover:text-foreground">
          {step.description}
        </p>

        <div className="pt-4 overflow-hidden">
          <m.div
            animate={{ x: isHovered ? 0 : "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-px w-12 bg-brand-primary"
          />
        </div>
      </m.div>
    </div>
  )
}
