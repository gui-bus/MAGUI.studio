"use client"

import * as React from "react"
import Image from "next/image"

import { useTranslations } from "next-intl"

import { ArrowRight } from "@phosphor-icons/react"
import { m, AnimatePresence } from "framer-motion"

import { cn } from "@/src/lib/utils/utils"
import { StaggeredText } from "@/src/components/ui/staggeredText"

const EASE_APPLE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function Showcase(): React.JSX.Element {
  const t = useTranslations("Index.Showcase")
  const idT = useTranslations("Index.Ids")
  const projects = t.raw("projects") as { title: string }[]
  const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <section id={idT("portfolio")} className="relative w-full py-32 lg:py-64 bg-background overflow-hidden px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        
        {/* SECTION HEADER */}
        <div className="mb-32 space-y-8">
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE_APPLE }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-12 bg-brand-primary" />
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-primary">
              {t("eyebrow")}
            </span>
          </m.div>
          <h2 className="font-heading text-5xl md:text-7xl lg:text-[100px] font-black leading-[0.9] tracking-tight text-foreground uppercase">
            <StaggeredText text={t("title")} />
          </h2>
        </div>

        {/* MAIN INTERACTION AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center min-h-[600px]">
          
          {/* LEFT: THE LIST */}
          <div className="lg:col-span-5 flex flex-col border-t border-foreground/10">
            {projects.map((project, index) => (
              <button
                key={index}
                aria-label={`View ${project.title} project`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className="group relative w-full py-10 border-b border-foreground/10 text-left transition-all duration-500 focus-visible:outline-brand-primary"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-8">
                    <span className={cn(
                      "font-heading text-xl font-black transition-colors duration-500",
                      activeIndex === index ? "text-brand-primary" : "text-foreground/40"
                    )}>
                      0{index + 1}
                    </span>
                    <h3 className={cn(
                      "font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter transition-all duration-500",
                      activeIndex === index ? "text-foreground translate-x-4" : "text-foreground/60"
                    )}>
                      {project.title}
                    </h3>
                  </div>
                  <div className={cn(
                    "h-12 w-12 rounded-full border flex items-center justify-center transition-all duration-500",
                    activeIndex === index ? "bg-brand-primary border-brand-primary text-white scale-110" : "border-foreground/10 text-transparent"
                  )}>
                    <ArrowRight weight="bold" size={20} aria-hidden="true" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: THE LENS */}
          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[16/10] w-full">
            <div className="absolute inset-0 rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border border-foreground/10 bg-muted/10 shadow-2xl">
              <AnimatePresence mode="wait">
                <m.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: EASE_APPLE }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/utils/placeholder.svg"
                    alt={`${projects[activeIndex].title} Case Study Visual`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 via-transparent to-transparent mix-blend-overlay" />
                </m.div>
              </AnimatePresence>
            </div>

            <div className="absolute -inset-4 border border-foreground/[0.05] rounded-[3.5rem] lg:rounded-[4.5rem] pointer-events-none" aria-hidden="true" />
          </div>

        </div>

      </div>
    </section>
  )
}
