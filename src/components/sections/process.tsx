"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { m } from "framer-motion"

import { ProcessStep as ProcessStepType } from "@/src/types/sections"
import { Section } from "@/src/components/ui/section"
import { SectionHeader } from "@/src/components/ui/sectionHeader"
import { ProcessStep } from "@/src/components/ui/processStep"

export function Process(): React.JSX.Element {
  const t = useTranslations("Index.Process")
  const idT = useTranslations("Index.Ids")
  const steps = t.raw("steps") as ProcessStepType[]

  return (
    <Section
      id={idT("process")}
      className="py-32 lg:py-64"
    >
      {/* SECTION HEADER */}
      <SectionHeader 
        title={t("title")}
        align="center"
        eyebrowType="double-line"
        className="mb-32 lg:mb-48"
      />

      {/* TIMELINE FLOW */}
      <div className="relative">
        <div className="absolute top-0 left-[15px] md:left-0 md:top-12 w-px h-full md:w-full md:h-px bg-foreground/5 overflow-hidden">
          <m.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="w-full h-full bg-gradient-to-r from-brand-primary/10 via-brand-primary to-brand-primary/10 origin-left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 relative z-10">
          {steps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}
