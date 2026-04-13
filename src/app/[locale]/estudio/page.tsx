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
        {/* Intro Section */}
        <Section className="py-24 md:py-32 lg:py-40" withContainer>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-brand-primary" />
                  <span className="text-[11px] font-black uppercase tracking-[0.45em] text-brand-primary">
                    {t("eyebrow")}
                  </span>
                </div>
                <h1 className="font-heading text-5xl font-black uppercase leading-[0.8] tracking-[-0.06em] md:text-7xl lg:text-[112px]">
                  {t("title")}
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-2xl">
                  {t("description")}
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">
                  {t("founder_label")}
                </p>
                <div className="space-y-4">
                  <h2 className="font-heading text-3xl font-black uppercase leading-tight tracking-tight">
                    {t("founder_title")}
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {t("founder_description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden bg-muted/20 grayscale transition-all duration-700 hover:grayscale-0">
              <Image
                src="/images/profile.jpg"
                alt={t("founder_title")}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </Section>

        {/* Philosophy Section */}
        <Section className="border-t border-foreground/5 py-24 md:py-32 lg:py-40 bg-foreground/[0.01]" withContainer>
          <div className="space-y-16">
            <div className="max-w-3xl space-y-6">
              <h2 className="font-heading text-4xl font-black uppercase leading-[0.85] tracking-tight md:text-6xl">
                {t("philosophy_title")}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                {t("philosophy_description")}
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              {Array.isArray(philosophyItems) && philosophyItems.map((item) => (
                <div key={item.title} className="space-y-4 border-l border-brand-primary/20 pl-8 transition-colors hover:border-brand-primary">
                  <h3 className="text-xl font-black uppercase tracking-tight">
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

        {/* Approach & Values */}
        <Section className="border-t border-foreground/5 py-24 md:py-32 lg:py-40" withContainer>
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary">
                {t("approach_label")}
              </p>
              <h2 className="font-heading text-4xl font-black uppercase leading-[0.85] tracking-tight md:text-6xl">
                {t("approach_title")}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t("approach_description")}
              </p>
            </div>
            <div className="rounded-3xl border border-foreground/5 bg-foreground/[0.02] p-8 md:p-12">
              <ul className="space-y-6">
                {Array.isArray(values) && values.map((value) => (
                  <li
                    key={value}
                    className="flex items-start gap-4 text-sm font-bold uppercase tracking-tight text-foreground/80"
                  >
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
