"use client"

import * as React from "react"

import { useTranslations } from "next-intl"

import { ArrowUpRight } from "@phosphor-icons/react"
import { motion } from "framer-motion"

import { Button } from "@/src/components/ui/button"

export function CTA(): React.JSX.Element {
  const t = useTranslations("Index.CTA")

  return (
    <section className="relative w-full py-48 lg:py-72 overflow-hidden bg-background border-t border-foreground/5">
      {/* NOISE OVERLAY - Premium Texture */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />

      <div className="container mx-auto max-w-[1800px] px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-end">
          
          {/* LEFT: MASSIVE TYPOGRAPHY */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <div className="h-[2px] w-16 bg-brand-primary" />
              <span className="text-[11px] font-black uppercase tracking-[0.6em] text-brand-primary">
                Next Step
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-6xl md:text-9xl lg:text-[140px] font-black leading-[0.8] tracking-[-0.06em] text-foreground uppercase max-w-5xl"
            >
              {t("title")}
            </motion.h2>
          </div>

          {/* RIGHT: DESCRIPTION & ACTION */}
          <div className="lg:col-span-4 space-y-16">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed border-l border-foreground/10 pl-10"
            >
              {t("description")}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pl-10"
            >
              <Button
                size="lg"
                className="group relative h-24 px-12 rounded-full bg-foreground text-background dark:bg-foreground dark:text-background overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-brand-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center gap-6 text-xs font-black uppercase tracking-[0.4em]">
                  {t("button")}
                  <ArrowUpRight weight="bold" size={24} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* BACKGROUND DECOR - Ultra Subtle */}
      <div className="absolute bottom-0 right-0 text-[240px] font-black text-foreground/[0.02] select-none leading-none translate-y-1/2 translate-x-1/4 pointer-events-none uppercase font-heading">
        Studio
      </div>
    </section>
  )
}
