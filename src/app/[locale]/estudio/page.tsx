import * as React from "react"

import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import Image from "next/image"

import { Footer } from "@/src/components/common/footer"
import { Header } from "@/src/components/common/header"
import { Section } from "@/src/components/ui/section"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("StudioPage")
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  }
}

export default async function StudioPage(): Promise<React.JSX.Element> {
  const t = await getTranslations("StudioPage")
  const values = t.raw("values") as string[]
  const philosophyItems = t.raw("philosophy_items") as Array<{
    title: string
    description: string
  }>

  return (
    <div className="relative min-h-svh w-full overflow-x-hidden bg-background font-sans text-foreground selection:bg-brand-primary/30 selection:text-brand-primary">
      <Header />
      <main className="pt-24 md:pt-32">
        {/* Studio Hero - Massive and Structural */}
        <Section className="py-24 md:py-32 lg:py-48" withContainer>
          <div className="relative space-y-12">
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-primary/5 blur-3xl" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-brand-primary" />
                <span className="text-[11px] font-black uppercase tracking-[0.45em] text-brand-primary">
                  {t("eyebrow")}
                </span>
              </div>
              <h1 className="font-heading text-6xl font-black uppercase leading-[0.75] tracking-[-0.08em] md:text-9xl lg:text-[160px] xl:text-[200px]">
                {t("title")}
              </h1>
            </div>
            
            <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:items-end">
              <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-3xl">
                {t("description")}
              </p>
              <div className="hidden h-px w-full bg-foreground/10 lg:block" />
            </div>
          </div>
        </Section>

        {/* Vision & Identity */}
        <Section className="border-t border-foreground/5 py-24 md:py-32 lg:py-40" withContainer>
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary">
                  {t("vision_label")}
                </p>
                <h2 className="font-heading text-4xl font-black uppercase leading-none tracking-tight md:text-6xl">
                  {t("vision_title")}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {t("vision_description")}
                </p>
              </div>
            </div>
            
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-foreground/10 bg-muted/20 grayscale transition-all duration-700 hover:grayscale-0 md:aspect-[16/10]">
              <Image
                src="/images/strategy.webp"
                alt="Studio Vision"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </Section>

        {/* Boutique Values - Grid Based */}
        <Section className="border-t border-foreground/5 py-24 md:py-32 lg:py-48 bg-foreground/[0.01]" withContainer>
          <div className="space-y-20">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl space-y-6">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary">
                  {t("boutique_label")}
                </p>
                <h2 className="font-heading text-4xl font-black uppercase leading-none tracking-tight md:text-6xl lg:text-7xl">
                  {t("boutique_title")}
                </h2>
              </div>
              <p className="max-w-sm text-lg leading-relaxed text-muted-foreground">
                {t("boutique_description")}
              </p>
            </div>

            <div className="grid gap-px border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={value} className="group relative flex flex-col justify-between bg-background p-8 transition-colors hover:bg-foreground/[0.02] md:p-10">
                  <span className="font-mono text-xs font-bold text-foreground/20">
                    0{index + 1}
                  </span>
                  <p className="mt-12 text-sm font-black uppercase tracking-widest text-foreground/80 lg:text-base">
                    {value}
                  </p>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-primary transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* The Philosophy - Artifact Style */}
        <Section className="border-t border-foreground/5 py-24 md:py-32 lg:py-40" withContainer>
          <div className="space-y-16 lg:space-y-24">
            <div className="max-w-3xl space-y-6">
              <h2 className="font-heading text-4xl font-black uppercase leading-none tracking-tight md:text-6xl lg:text-8xl">
                {t("philosophy_title")}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-2xl">
                {t("philosophy_description")}
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
              {Array.isArray(philosophyItems) && philosophyItems.map((item) => (
                <div key={item.title} className="space-y-8">
                  <div className="h-px w-full bg-foreground/10" />
                  <div className="space-y-4">
                    <h3 className="text-xl font-black uppercase tracking-tight text-brand-primary">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Founder Signature - Discrete */}
        <Section className="border-t border-foreground/10 bg-background py-24 md:py-32" withContainer>
          <div className="mx-auto max-w-4xl border-l border-brand-primary/20 pl-8 md:pl-16">
            <div className="grid gap-10 md:grid-cols-[120px_1fr] md:items-center md:gap-16">
              <div className="relative aspect-square overflow-hidden rounded-full grayscale filter">
                <Image
                  src="/images/profile.jpg"
                  alt={t("founder_title")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary">
                  {t("founder_label")}
                </p>
                <div className="space-y-2">
                  <h2 className="text-2xl font-black uppercase tracking-tight md:text-3xl">
                    {t("founder_title")}
                  </h2>
                  <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {t("founder_description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
