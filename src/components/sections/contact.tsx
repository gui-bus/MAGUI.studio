"use client"

import * as React from "react"

import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

import { ArrowUpRightIcon } from "@phosphor-icons/react"
import { m } from "framer-motion"

import { Button } from "@/src/components/ui/button"
import { Section } from "@/src/components/ui/section"

const EASE_APPLE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function Contact(): React.JSX.Element {
  const t = useTranslations("Index.CTA")
  const idT = useTranslations("Index.Ids")
  const configT = useTranslations("Config")
  const containerRef = React.useRef<HTMLDivElement>(null)

  return (
    <Section
      id={idT("contact")}
      ref={containerRef}
      className="border-t border-foreground/5 py-32 md:py-40 lg:py-48"
      withContainer={true}
    >
      <article className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_360px]">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE_APPLE }}
          className="relative overflow-hidden border border-border/60 bg-background px-6 py-8 md:px-10 md:py-10 lg:px-14 lg:py-14"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 64px) 0, 100% 64px, 100% 100%, 0 100%)",
          }}
        >
          <div className="absolute right-0 top-0 h-16 w-16 border-l border-b border-border/60 bg-brand-primary/8" />
          <div className="absolute bottom-0 left-0 h-20 w-20 border-r border-t border-border/60 bg-foreground/[0.03]" />

          <div className="relative space-y-10">
            <div className="space-y-5 border-b border-border/60 pb-8">
              <div className="relative h-12 w-48 lg:h-16 lg:w-64">
                <Image
                  src="/logos/LOGO_VAR_03_DM.svg"
                  alt={configT("name")}
                  fill
                  className="object-contain object-left dark:hidden"
                />
                <Image
                  src="/logos/LOGO_VAR_03_LM.svg"
                  alt={configT("name")}
                  fill
                  className="hidden object-contain object-left dark:block"
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-brand-primary" />
                <span className="text-brand-primary text-[11px] font-black uppercase tracking-[0.45em]">
                  {t("eyebrow")}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-heading text-5xl font-black leading-[0.82] tracking-[-0.06em] text-foreground uppercase md:text-8xl lg:text-[104px]">
                {t("title")}
              </h2>

              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-2xl">
                {t("description")}
              </p>
            </div>
          </div>
        </m.div>

        <m.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.9, ease: EASE_APPLE }}
          className="relative overflow-hidden border border-border/60 bg-foreground px-6 py-8 text-background md:px-8 md:py-10"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% calc(100% - 52px), calc(100% - 52px) 100%, 0 100%)",
          }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
          <div className="absolute right-0 top-0 h-16 w-16 border-l border-b border-white/10 bg-white/5" />

          <div className="relative flex h-full flex-col justify-between gap-10">
            <div className="space-y-4">
              <span className="text-brand-primary text-[11px] font-black uppercase tracking-[0.35em]">
                {t("cardEyebrow")}
              </span>
              <p className="font-heading text-3xl font-black uppercase leading-[0.92] tracking-[-0.05em] md:text-4xl">
                {t("cardTitle")}
              </p>
              <p className="text-base leading-relaxed text-white/68">
                {t("cardDescription")}
              </p>
            </div>

            <Button
              asChild={true}
              size="lg"
              className="h-16 w-full rounded-full border border-white/12 bg-brand-primary px-8 text-[11px] font-black uppercase tracking-[0.35em] text-white hover:bg-white hover:text-black"
            >
              <Link href="/contato">
                {t("button")}
                <ArrowUpRightIcon size={18} weight="bold" />
              </Link>
            </Button>
          </div>
        </m.aside>
      </article>
    </Section>
  )
}
