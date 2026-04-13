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
        {/* Studio Hero */}
        <Section className="py-24 md:py-32 lg:py-40" withContainer>
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-brand-primary" />
              <span className="text-[11px] font-black uppercase tracking-[0.45em] text-brand-primary">
                {t("eyebrow")}
              </span>
            </div>
            <div className="grid gap-12 lg:grid-cols-[1fr_0.6fr] lg:items-end">
              <h1 className="font-heading text-6xl font-black uppercase leading-[0.8] tracking-[-0.06em] md:text-8xl lg:text-[140px]">
                {t("title")}
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl lg:mb-4">
                {t("description")}
              </p>
            </div>
          </div>
        </Section>

        {/* Vision Section */}
        <Section className="border-t border-foreground/5 py-24 md:py-32 lg:py-40 bg-foreground/[0.01]" withContainer>
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-8">
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
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-foreground/10 bg-muted/20 grayscale transition-all duration-700 hover:grayscale-0">
              <Image
                src="/images/strategy.webp"
                alt="Studio Vision"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Section>

        {/* Boutique Model Section */}
        <Section className="border-t border-foreground/5 py-24 md:py-32 lg:py-40" withContainer>
          <div className="grid gap-16 lg:grid-cols-[0.6fr_1fr]">
            <div className="relative hidden aspect-[3/4] overflow-hidden rounded-3xl border border-foreground/10 bg-muted/10 lg:block">
              <Image
                src="/images/code.webp"
                alt="Crafting code"
                fill
                className="object-cover opacity-40 mix-blend-multiply dark:mix-blend-screen"
              />
            </div>
            <div className="flex flex-col justify-center space-y-12">
              <div className="space-y-8">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary">
                  {t("boutique_label")}
                </p>
                <h2 className="font-heading text-4xl font-black uppercase leading-none tracking-tight md:text-6xl">
                  {t("boutique_title")}
                </h2>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {t("boutique_description")}
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {values.map((value) => (
                  <div key={value} className="flex items-center gap-4 rounded-full border border-foreground/5 bg-foreground/[0.02] px-6 py-4">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground/80">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Philosophy / Visual Criteria */}
        <Section className="border-t border-foreground/5 py-24 md:py-32 lg:py-40 bg-foreground/[0.02]" withContainer>
          <div className="space-y-16">
            <h2 className="font-heading text-4xl font-black uppercase leading-none tracking-tight md:text-6xl text-center">
              {t("philosophy_title")}
            </h2>
            <div className="grid gap-px border border-foreground/10 bg-foreground/10 md:grid-cols-3">
              {Array.isArray(philosophyItems) && philosophyItems.map((item) => (
                <div key={item.title} className="bg-background p-10 space-y-6 transition-colors hover:bg-foreground/[0.01]">
                  <h3 className="text-xl font-black uppercase tracking-tight text-brand-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Founder Section - More discrete */}
        <Section className="border-t border-foreground/5 py-24 md:py-32 lg:py-40" withContainer>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:items-center lg:gap-20">
              <div className="relative aspect-square overflow-hidden rounded-full border-4 border-foreground/5 grayscale">
                <Image
                  src="/images/profile.jpg"
                  alt={t("founder_title")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary">
                  {t("founder_label")}
                </p>
                <h2 className="font-heading text-4xl font-black uppercase tracking-tight">
                  {t("founder_title")}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t("founder_description")}
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
