"use client"

import * as React from "react"
import Image from "next/image"

import { useTranslations } from "next-intl"

import { m, useTransform, useScroll, AnimatePresence } from "framer-motion"

import { Section } from "@/src/components/ui/section"
import { StaggeredText } from "@/src/components/ui/staggeredText"
import { useSpotlight } from "@/src/lib/hooks/useSpotlight"
import { Discipline } from "@/src/types/sections"
import { TRANSITION_MEDIUM } from "@/src/config/animations"
import { cn } from "@/src/lib/utils/utils"

export function Value(): React.JSX.Element {
  const t = useTranslations("Index.Value")
  const idT = useTranslations("Index.Ids")
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  const [activeIndex, setActiveIndex] = React.useState(0)

  const { spotlightX, spotlightY, handleMouseMove } = useSpotlight(containerRef)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const disciplines = t.raw("disciplines") as Discipline[]
  const disciplineImages = [
    "/images/strategy.webp",
    "/images/code.webp",
    "/images/ui.webp",
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % disciplines.length)
    }, 4000) 
    return () => clearInterval(interval)
  }, [disciplines.length])

  return (
    <Section 
      id={idT("value")}
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="pt-32 border-t border-foreground/5"
      withContainer={true}
    >
      <m.div 
        style={{ 
          background: `radial-gradient(800px circle at ${spotlightX}px ${spotlightY}px, var(--brand-primary), transparent 80%)`,
        }}
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] hidden lg:block"
      />

      {/* UNIQUE STRUCTURAL HEADER FOR VALUE */}
      <m.div style={{ opacity }} className="mb-40 relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* VERTICAL SIDEBAR EYEBROW */}
          <div className="hidden lg:flex flex-col items-center gap-8 py-4">
             <m.div 
               initial={{ height: 0 }}
               whileInView={{ height: 120 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
               className="w-0.5 bg-brand-primary" 
             />
             <span className="[writing-mode:vertical-lr] rotate-180 text-[11px] font-black uppercase tracking-[0.6em] text-brand-primary whitespace-nowrap">
                {t("eyebrow")}
             </span>
          </div>

          <div className="flex-1 space-y-20">
            {/* CLEAN SOLID TITLE WITH INDENTATION */}
            <h2 className="font-heading text-6xl md:text-9xl lg:text-[150px] font-black leading-[0.75] tracking-[-0.06em] text-foreground uppercase select-none">
              <m.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                <StaggeredText text="A Ciência da" />
              </m.div>
              <m.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="block lg:ml-32 text-brand-primary mt-2"
              >
                <StaggeredText text="Autoridade." delayBase={0.3} />
              </m.div>
            </h2>

            {/* DESCRIPTION WITH TECHNICAL BOX */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
               <div className="lg:col-start-4 lg:col-span-9">
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative p-8 md:p-12 border border-foreground/5 bg-foreground/1 rounded-2xl"
                  >
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-primary/40 -translate-x-px -translate-y-px" />
                    
                    <p className="text-xl md:text-3xl text-muted-foreground font-medium leading-tight tracking-tight">
                      {t("description")}
                    </p>
                  </m.div>
               </div>
            </div>
          </div>
        </div>
      </m.div>

      {/* DISCIPLINES GRID - CLEAN DOUBLE-CLIP BORDERS */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {disciplines.map((discipline, i) => (
          <DisciplineCard 
            key={discipline.id} 
            discipline={discipline} 
            index={i} 
            image={disciplineImages[i] || disciplineImages[0]}
            isActive={activeIndex === i}
          />
        ))}
      </div>

    </Section>
  )
}

function DisciplineCard({ 
  discipline, 
  index, 
  image, 
  isActive 
}: { 
  discipline: Discipline, 
  index: number, 
  image: string,
  isActive: boolean
}): React.JSX.Element {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])
  
  const clipPath = React.useMemo(() => {
    if (index === 0) {
      return isMobile 
        ? "polygon(60px 0, 100% 0, 100% 100%, 0 100%, 0 60px)"
        : "polygon(0 0, 100% 0, 100% 100%, 60px 100%, 0 calc(100% - 60px))"
    }
    if (index === 2) {
      return isMobile
        ? "polygon(0 0, 100% 0, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0 100%)"
        : "polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)"
    }
    return "none"
  }, [index, isMobile])

  return (
    <div 
      className="relative h-150 bg-foreground/10 lg:-ml-px first:ml-0"
      style={{ clipPath: clipPath !== "none" ? clipPath : undefined }}
    >
      <div 
        className="absolute inset-px bg-background overflow-hidden flex flex-col justify-between"
        style={{ clipPath: clipPath !== "none" ? clipPath : undefined }}
      >
        {/* BACKGROUND IMAGE - AUTO ROTATING */}
        <AnimatePresence mode="wait">
          {isActive && (
            <m.div 
              key={image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={TRANSITION_MEDIUM}
              className="absolute inset-0 z-0 pointer-events-none"
            >
              <Image
                src={image}
                alt={discipline.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/70" />
            </m.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 p-12 lg:p-16 h-full flex flex-col justify-between">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary">
                {discipline.label}
              </span>
              <div className="overflow-hidden">
                <m.span 
                  animate={{ y: isActive ? 0 : "100%" }}
                  initial={{ y: "100%" }}
                  transition={TRANSITION_MEDIUM}
                  className="block font-heading text-4xl font-black text-white"
                >
                  {discipline.id}
                </m.span>
              </div>
            </div>
            <h3 className={cn(
              "font-heading text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[1.1] transition-colors duration-500",
              isActive ? "text-white" : "text-foreground"
            )}>
              {discipline.title}
            </h3>
          </div>

          <div className="space-y-12">
            <p className={cn(
              "text-lg md:text-xl leading-relaxed font-medium transition-all duration-700",
              isActive ? "text-white/80 -translate-y-2" : "text-muted-foreground translate-y-0"
            )}>
              {discipline.description}
            </p>
            <div className="relative h-0.5 w-12 bg-foreground/10 overflow-hidden">
              <m.div 
                animate={{ x: isActive ? 0 : "-100%" }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="absolute inset-0 bg-brand-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
