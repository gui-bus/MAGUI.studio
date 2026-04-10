"use client"

import * as React from "react"

import { useTranslations } from "next-intl"
import Image from "next/image"

import { Discipline } from "@/src/types/sections"
import {
  ArrowUpRightIcon,
  SparkleIcon,
  SquaresFourIcon,
} from "@phosphor-icons/react"
import { m, useScroll, useTransform } from "framer-motion"

import { Section } from "@/src/components/ui/section"
import { StaggeredText } from "@/src/components/ui/staggeredText"

export function Manifesto(): React.JSX.Element {
  const t = useTranslations("Index.About")
  const idT = useTranslations("Index.Ids")
  const containerRef = React.useRef<HTMLElement>(null)
  const principles = t.raw("principles") as string[]
  const highlights = t.raw("highlights") as Discipline[]
  const pillars = t.raw("pillars") as string[]

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"])
  const frameY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"])

  return (
    <Section
      id={idT("about")}
      ref={containerRef}
      className="border-t border-foreground/5 py-24 md:py-36 lg:py-48"
      withContainer={true}
    >
      <div className="space-y-14 lg:space-y-20">
        <div className="max-w-6xl space-y-8">
          <m.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-12 bg-brand-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.45em] text-brand-primary">
              {t("eyebrow")}
            </span>
          </m.div>

          <div className="space-y-8">
            <h2 className="font-heading text-5xl font-black uppercase leading-[0.82] tracking-[-0.06em] text-foreground md:text-7xl lg:text-[128px]">
              <span className="block">
                <StaggeredText text={t("title_1")} />
              </span>
              <span className="mt-2 block text-brand-primary lg:ml-28">
                <StaggeredText text={t("title_2")} delayBase={0.28} />
              </span>
            </h2>

            <m.p
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-5xl text-xl font-medium leading-tight tracking-tight text-foreground/72 md:text-3xl lg:text-[2.2rem] dark:text-white/72"
            >
              {t("description")}
            </m.p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
          <article className="space-y-6 xl:col-span-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(19rem,0.9fr)]">
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden border border-foreground/8 bg-background"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 64px) 0, 100% 64px, 100% 100%, 0 100%)",
                }}
              >
                <m.div
                  style={{ y: imageY }}
                  className="relative h-88 w-full md:h-120"
                >
                  <Image
                    src="/images/manifesto.webp"
                    alt={t("image_alt")}
                    fill
                    sizes="(max-width: 1280px) 100vw, 56vw"
                    className="object-cover"
                  />
                </m.div>

                <m.div
                  style={{ y: frameY }}
                  className="pointer-events-none absolute inset-x-6 bottom-6 top-6 border border-white/45 mix-blend-screen"
                />

                <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/45 bg-background/22 px-4 py-2 text-white backdrop-blur-sm">
                  <SparkleIcon size={16} weight="fill" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                    MAGUI.studio
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 grid grid-cols-1 gap-px bg-white/20 md:grid-cols-2">
                  {highlights.map((highlight) => (
                    <div
                      key={highlight.id}
                      className="bg-black/18 px-6 py-6 text-white backdrop-blur-[2px]"
                    >
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/72">
                        {highlight.label}
                      </p>
                      <p className="mt-3 max-w-md text-lg font-medium leading-snug text-white">
                        {highlight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.85,
                  delay: 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col justify-between gap-6"
              >
                <div className="space-y-4 border border-foreground/8 bg-background px-7 py-7">
                  <span className="inline-flex rounded-full border border-border/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.35em] text-foreground/72 dark:border-white/12 dark:text-white/70">
                    {t("badge")}
                  </span>

                  <div className="space-y-3">
                    <h3 className="font-heading text-4xl font-black uppercase tracking-[-0.05em] text-foreground md:text-5xl dark:text-white">
                      {t("title")}
                    </h3>
                    <p className="text-lg font-medium leading-relaxed text-foreground/68 dark:text-white/68">
                      {t("panel_description")}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-px overflow-hidden border border-foreground/8 bg-foreground/8 dark:border-white/10 dark:bg-white/8">
                  {principles.map((item, index) => (
                    <m.div
                      key={item}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{
                        duration: 0.75,
                        delay: 0.08 + index * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="bg-background px-6 py-6 text-base font-medium leading-relaxed text-foreground/72 dark:bg-white/4 dark:text-white/72"
                    >
                      {item}
                    </m.div>
                  ))}
                </div>
              </m.div>
            </div>
          </article>

          <aside className="xl:col-span-4">
            <m.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.85,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex h-full flex-col justify-between gap-6 border border-foreground/8 bg-foreground px-8 py-8 text-background dark:border-white/10 dark:bg-white dark:text-black"
            >
              <div className="space-y-8">
                <span className="inline-flex rounded-full border border-white/16 px-4 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-white/68 dark:border-black/12 dark:text-black/62">
                  {t("panel_eyebrow")}
                </span>

                <div className="space-y-4">
                  <h3 className="font-heading text-4xl font-black uppercase leading-[0.88] tracking-[-0.05em] md:text-6xl">
                    {t("panel_title")}
                  </h3>
                  <p className="text-lg font-medium leading-relaxed text-white/76 dark:text-black/72">
                    {t("sidebar_description")}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {pillars.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-white/14 bg-white/7 px-5 py-5 dark:border-black/10 dark:bg-black/4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] font-black uppercase tracking-[0.35em] text-white/74 dark:text-black/70">
                        {item}
                      </span>
                      <ArrowUpRightIcon size={18} weight="bold" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.75rem] border border-white/12 bg-black/14 p-6 dark:border-black/10 dark:bg-black/6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/7 dark:border-black/10 dark:bg-black/4">
                    <SquaresFourIcon size={20} weight="bold" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.38em] text-white/60 dark:text-black/58">
                      {t("focus_label")}
                    </p>
                    <p className="text-base font-medium leading-snug text-white/84 dark:text-black/78">
                      {t("focus")}
                    </p>
                  </div>
                </div>
              </div>
            </m.div>
          </aside>
        </div>
      </div>
    </Section>
  )
}
