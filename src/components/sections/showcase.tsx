"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { useTranslations } from "next-intl"

import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react"
import { m, AnimatePresence } from "framer-motion"

import { cn } from "@/src/lib/utils/utils"
import { Project } from "@/src/types/sections"
import { Section } from "@/src/components/ui/section"
import { StaggeredText } from "@/src/components/ui/staggeredText"
import { TRANSITION_SLOW, VARIANTS_FADE_IN_UP } from "@/src/config/animations"

const AUTO_PLAY_DURATION = 6000 // 6 seconds

export function Showcase(): React.JSX.Element {
  const t = useTranslations("Index.Showcase")
  const idT = useTranslations("Index.Ids")
  const projects = t.raw("projects") as Project[]
  
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [direction, setDirection] = React.useState(1) // 1 for next, -1 for prev
  const [isPaused, setIsHovered] = React.useState(false)

  const nextProject = React.useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }, [projects.length])

  const prevProject = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  // AUTO PLAY EFFECT
  React.useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextProject, AUTO_PLAY_DURATION)
    return () => clearInterval(interval)
  }, [nextProject, isPaused])

  const activeProject = projects[currentIndex]

  return (
    <Section 
      id={idT("portfolio")} 
      className="py-32 lg:py-64 relative overflow-hidden" 
      withContainer={true}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        {/* DECORATIVE BACKGROUND TEXT */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 pointer-events-none select-none z-0">
          <span className="text-9xl md:text-[200px] lg:text-[320px] font-black text-foreground/[0.02] uppercase leading-none">
            Selected
          </span>
        </div>

        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 lg:mb-40 relative z-10">
          <div className="space-y-8">
            <m.div
              variants={VARIANTS_FADE_IN_UP}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-12 bg-brand-primary" />
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-primary">
                {t("eyebrow")}
              </span>
            </m.div>
            <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-[-0.04em] leading-[0.8]">
              {t("title")}
            </h2>
          </div>

          {/* CAROUSEL CONTROLS + PROGRESS */}
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-4">
              <button 
                onClick={prevProject}
                className="group h-16 w-16 rounded-full border border-foreground/10 flex items-center justify-center transition-all duration-500 hover:bg-foreground hover:text-background active:scale-90"
              >
                <ArrowLeft weight="bold" size={24} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              
              <div className="flex flex-col items-center gap-2 font-mono text-sm font-bold min-w-12">
                 <span className="text-brand-primary">0{currentIndex + 1}</span>
                 <div className="relative h-12 w-px bg-foreground/10 overflow-hidden">
                    <m.div 
                      key={currentIndex}
                      initial={{ y: "-100%" }}
                      animate={isPaused ? { y: 0 } : { y: "0%" }}
                      transition={isPaused ? { duration: 0.5 } : { duration: AUTO_PLAY_DURATION / 1000, ease: "linear" }}
                      className="absolute inset-0 bg-brand-primary origin-top"
                      style={{ height: isPaused ? "100%" : "auto" }}
                    />
                    {!isPaused && (
                      <m.div 
                        key={`progress-${currentIndex}`}
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: "linear" }}
                        className="w-full bg-brand-primary"
                      />
                    )}
                 </div>
                 <span className="opacity-30">0{projects.length}</span>
              </div>

              <button 
                onClick={nextProject}
                className="group h-16 w-16 rounded-full border border-foreground/10 flex items-center justify-center transition-all duration-500 hover:bg-foreground hover:text-background active:scale-90"
              >
                <ArrowRight weight="bold" size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* CAROUSEL CONTENT */}
        <div className="relative min-h-[600px] lg:min-h-[800px] z-10">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <m.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center"
            >
              {/* IMAGE SIDE WITH DIRECTIONAL CLIP-PATH */}
              <div className="lg:col-span-7 relative aspect-video lg:aspect-[16/10] group/img">
                <m.div 
                  initial={{ clipPath: direction > 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  exit={{ clipPath: direction > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full overflow-hidden bg-muted/10 rounded-2xl lg:rounded-[3rem] shadow-2xl"
                >
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-[4s] ease-out scale-105 group-hover/img:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </m.div>

                {/* Decorative technical markers */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-brand-primary/40 z-20" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-brand-primary/40 z-20" />
              </div>

              {/* CONTENT SIDE */}
              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-8">
                  <m.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-4"
                  >
                    <span className="font-mono text-sm lg:text-xl text-brand-primary font-bold uppercase tracking-widest">
                      Case Study
                    </span>
                    <div className="h-px w-12 bg-brand-primary/20" />
                  </m.div>
                  
                  <div className="overflow-hidden">
                    <m.h2 
                      key={activeProject.title}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                      className="font-heading text-6xl md:text-8xl lg:text-[120px] font-black uppercase tracking-tighter leading-[0.8] text-foreground"
                    >
                      {activeProject.title}
                    </m.h2>
                  </div>
                </div>

                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link 
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-8 group/btn bg-foreground text-background dark:bg-white dark:text-black py-6 px-12 rounded-full transition-all duration-500 hover:scale-105 shadow-2xl shadow-black/10"
                  >
                    <span className="text-xs font-black uppercase tracking-[0.4em]">
                      {t("view_project")}
                    </span>
                    <div className="h-12 w-12 rounded-full border border-current flex items-center justify-center group-hover/btn:bg-brand-primary group-hover/btn:border-brand-primary group-hover/btn:text-white transition-all duration-500">
                      <ArrowUpRight weight="bold" size={24} className="group-hover/btn:rotate-45 transition-transform duration-500" />
                    </div>
                  </Link>
                </m.div>
              </div>
            </m.div>
          </AnimatePresence>
        </div>
    </Section>
  )
}
