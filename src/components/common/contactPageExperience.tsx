"use client"

import * as React from "react"

import { useTranslations } from "next-intl"
import Image from "next/image"

import { ArrowUpRightIcon, SparkleIcon } from "@phosphor-icons/react"
import { m } from "framer-motion"

import { Section } from "@/src/components/ui/section"

import { ProjectInquiryForm } from "@/src/components/common/projectInquiryForm"

import { EASE_APPLE } from "@/src/config/animations"

export function ContactPageExperience(): React.JSX.Element {
  const t = useTranslations("Index.ContactPage")

  return (
    <Section className="border-b border-foreground/5 py-16 md:py-24">
      <div className="space-y-8 md:space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end">
          <m.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_APPLE }}
            className="relative overflow-hidden border border-border/60 bg-foreground px-6 py-8 text-background md:px-10 md:py-10"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 52px) 0, 100% 52px, 100% 100%, 52px 100%, 0 calc(100% - 52px))",
            }}
          >
            <div className="absolute left-0 top-0 h-16 w-16 border-r border-b border-white/10 bg-white/5" />
            <div className="absolute right-0 top-0 h-20 w-20 border-l border-b border-white/10 bg-brand-primary/20" />
            <div className="absolute bottom-0 left-0 h-24 w-24 border-r border-t border-white/10 bg-white/[0.04]" />

            <div className="relative space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-px w-10 bg-brand-primary" />
                <span className="text-[11px] font-black uppercase tracking-[0.45em] text-brand-primary">
                  {t("eyebrow")}
                </span>
              </div>

              <div className="space-y-5">
                <h1 className="font-heading text-5xl font-black uppercase leading-[0.8] tracking-[-0.07em] md:text-7xl lg:text-[92px]">
                  {t("title")}
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-white/72 md:text-xl">
                  {t("description")}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="border border-white/10 bg-white/[0.04] px-4 py-5"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                    }}
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-primary">
                        {t(`pill${item}Label`)}
                      </span>
                      <p className="text-sm leading-relaxed text-white/72">
                        {t(`pill${item}Text`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </m.article>

          <m.aside
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: EASE_APPLE }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            <div
              className="relative overflow-hidden border border-border/60 bg-background px-5 py-6"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px))",
              }}
            >
              <div className="absolute right-0 top-0 h-12 w-12 border-l border-b border-border/60 bg-brand-primary/10" />
              <div className="relative space-y-4">
                <div className="flex items-center gap-3">
                  <SparkleIcon
                    size={16}
                    weight="fill"
                    className="text-brand-primary"
                  />
                  <span className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-primary">
                    {t("sideEyebrow")}
                  </span>
                </div>
                <p className="font-heading text-2xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-foreground">
                  {t("sideTitle")}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t("sideDescription")}
                </p>
              </div>
            </div>

            <div
              className="relative overflow-hidden border border-border/60 bg-brand-primary px-5 py-6 text-white"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px))",
              }}
            >
              <div className="absolute left-0 top-0 h-12 w-12 border-r border-b border-white/10 bg-white/10" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.35em] text-white/72">
                    {t("miniCardLabel")}
                  </span>
                  <p className="text-base leading-relaxed text-white">
                    {t("miniCardText")}
                  </p>
                </div>
                <ArrowUpRightIcon
                  size={18}
                  weight="bold"
                  className="shrink-0"
                />
              </div>
            </div>
          </m.aside>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
          <m.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.16, ease: EASE_APPLE }}
            className="relative"
          >
            <div
              className="relative aspect-[0.9] overflow-hidden border border-border/60 bg-muted/20"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 48px) 0, 100% 48px, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/images/ui.webp"
                alt={t("imageAlt")}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              <div className="absolute inset-0 bg-brand-primary/8 mix-blend-overlay" />
            </div>

            <m.div
              initial={{ opacity: 0, x: -24, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: EASE_APPLE }}
              className="absolute -bottom-4 left-4 w-[72%] md:left-6 md:w-[68%]"
            >
              <div
                className="relative overflow-hidden border border-border/60 bg-background px-5 py-5 shadow-2xl shadow-black/10"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                }}
              >
                <div className="absolute right-0 top-0 h-10 w-10 border-l border-b border-border/60 bg-brand-primary/10" />
                <div className="relative space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-primary">
                    {t("imageCardLabel")}
                  </span>
                  <p className="font-heading text-2xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-foreground">
                    {t("imageCardTitle")}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t("imageCardText")}
                  </p>
                </div>
              </div>
            </m.div>
          </m.div>

          <m.aside
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.22, ease: EASE_APPLE }}
            className="relative overflow-hidden border border-border/60 bg-background p-4 md:p-5"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 42px) 0, 100% 42px, 100% 100%, 42px 100%, 0 calc(100% - 42px))",
            }}
          >
            <div className="absolute right-0 top-0 h-16 w-16 border-l border-b border-border/60 bg-brand-primary/10" />
            <div className="absolute left-0 top-0 h-px w-full bg-border/60" />
            <div className="absolute bottom-0 left-0 h-20 w-20 border-r border-t border-border/60 bg-foreground/[0.03]" />

            <div className="relative space-y-5">
              <div className="space-y-2 border-b border-border/60 pb-5">
                <span className="text-[11px] font-black uppercase tracking-[0.35em] text-brand-primary">
                  {t("formEyebrow")}
                </span>
                <p className="font-heading text-3xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-foreground md:text-4xl">
                  {t("formTitle")}
                </p>
              </div>

              <ProjectInquiryForm origin="contactPage" />
            </div>
          </m.aside>
        </div>
      </div>
    </Section>
  )
}
