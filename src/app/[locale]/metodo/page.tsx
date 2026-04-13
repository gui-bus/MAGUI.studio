import * as React from "react"

import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import Image from "next/image"

import { Footer } from "@/src/components/common/footer"
import { Header } from "@/src/components/common/header"
import { Section } from "@/src/components/ui/section"
import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("MethodPage")
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  }
}

export default async function MethodPage(): Promise<React.JSX.Element> {
  const t = await getTranslations("MethodPage")
  const phases = t.raw("phases") as Array<{
    id: string
    title: string
    label: string
    image: string
    description: string
    details: string[]
  }>
  const qaItems = t.raw("qa_items") as string[]

  return (
    <div className="relative min-h-svh w-full overflow-x-hidden bg-background font-sans text-foreground selection:bg-brand-primary/30 selection:text-brand-primary">
      <Header />
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <Section className="py-16 md:py-32 lg:py-40" withContainer>
          <div className="relative space-y-10 md:space-y-16">
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-brand-primary/5 blur-3xl md:h-96 md:w-96" />
            
            <div className="relative z-10 space-y-6 md:space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-primary md:w-12" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary md:text-[11px] md:tracking-[0.45em]">
                  {t("eyebrow")}
                </span>
              </div>
              <h1 className="font-heading text-4xl font-black uppercase leading-[0.85] tracking-[-0.06em] md:text-7xl lg:text-[112px]">
                {t("title")}
              </h1>
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-xl lg:text-2xl">
                {t("description")}
              </p>
            </div>
          </div>
        </Section>

        {/* Protocol Detail Section */}
        <Section className="border-t border-foreground/5 py-0" withContainer={false}>
          <div className="grid grid-cols-1">
            {Array.isArray(phases) &&
              phases.map((phase) => (
                <article
                  key={phase.id}
                  className="group relative border-b border-foreground/5 px-6 py-16 md:px-12 md:py-24 lg:px-24 lg:py-32 last:border-0"
                >
                  <div className="relative z-10 grid gap-12 lg:grid-cols-[300px_1fr_320px] lg:items-start lg:gap-16 xl:grid-cols-[360px_1fr_360px] xl:gap-24">
                    {/* Column 1: Number & Image */}
                    <div className="space-y-8">
                      <div className="relative h-fit">
                        <span className="font-heading text-7xl font-black leading-none tracking-tighter text-foreground/5 md:text-[10rem] lg:text-[12rem] xl:text-[14rem]">
                          {phase.id}
                        </span>
                        <div className="absolute bottom-2 left-0 flex items-center gap-3">
                          <div className="h-px w-6 bg-brand-primary md:w-8" />
                          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-primary md:text-[10px]">
                            {phase.label}
                          </span>
                        </div>
                      </div>
                      
                      <div className="relative aspect-square overflow-hidden rounded-2xl border border-foreground/5 grayscale transition-all duration-700 group-hover:rounded-[3rem] group-hover:grayscale-0 sm:aspect-video lg:aspect-square">
                        <Image
                          src={phase.image}
                          alt={phase.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
                      </div>
                    </div>

                    {/* Column 2: Narrative */}
                    <div className="space-y-8 lg:pt-16 xl:pt-20">
                      <h2 className="font-heading text-3xl font-black uppercase leading-none tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
                        {phase.title}
                      </h2>
                      <p className="text-base leading-relaxed text-muted-foreground md:max-w-2xl md:text-lg lg:text-xl">
                        {phase.description}
                      </p>
                    </div>

                    {/* Column 3: Artifacts/Details */}
                    <div className="space-y-8 rounded-3xl border border-foreground/5 bg-foreground/[0.02] p-6 transition-colors group-hover:bg-foreground/[0.03] md:p-8 lg:mt-16 xl:mt-20">
                      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-foreground/40">
                        {t("phase_focus_label")}
                      </p>
                      <ul className="space-y-4">
                        {Array.isArray(phase.details) && phase.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3">
                            <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-primary" />
                            <span className="text-xs font-bold uppercase tracking-tight text-foreground/80 md:text-sm">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </Section>

        {/* Quality Standard Section */}
        <Section className="border-t border-foreground/10 bg-foreground/5 py-20 md:py-32 lg:py-48" withContainer>
          <div className="grid gap-12 md:gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4 text-brand-primary">
                <CheckCircleIcon size={32} weight="fill" className="h-8 w-8 md:h-10 md:w-10" />
                <h2 className="font-heading text-3xl font-black uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
                  {t("qa_title")}
                </h2>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
                {t("qa_description")}
              </p>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {Array.isArray(qaItems) && qaItems.map((item) => (
                <div key={item} className="flex h-full flex-col justify-between rounded-2xl border border-foreground/10 bg-background p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-primary/20 md:p-8">
                  <p className="text-xs font-black uppercase leading-tight tracking-tight text-foreground md:text-sm lg:text-base">
                    {item}
                  </p>
                  <div className="mt-6 h-1 w-8 bg-brand-primary/20 transition-all duration-500 group-hover:w-12 group-hover:bg-brand-primary" />
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
