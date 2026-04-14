import * as React from "react"

import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import {
  CheckCircleIcon,
  DotOutlineIcon,
  SparkleIcon,
} from "@phosphor-icons/react/dist/ssr"

import { Section } from "@/src/components/ui/section"

import { Footer } from "@/src/components/common/footer"
import { Header } from "@/src/components/common/header"

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
    description: string
    details: string[]
  }>
  const qaItems = t.raw("qa_items") as string[]
  const protocolHighlights = t.raw("protocol_highlights") as string[]
  const outcomes = t.raw("outcomes") as Array<{
    title: string
    description: string
  }>
  const cadenceItems = t.raw("cadence_items") as Array<{
    title: string
    description: string
  }>

  return (
    <div className="relative min-h-svh w-full overflow-x-hidden bg-background font-sans text-foreground selection:bg-brand-primary/30 selection:text-brand-primary">
      <Header />
      <main className="pt-24 md:pt-32">
        <Section className="py-20 md:py-28 lg:py-32" withContainer>
          <div className="relative space-y-10">
            <div className="absolute -left-20 -top-16 h-56 w-56 rounded-full bg-brand-primary/10 blur-3xl md:h-80 md:w-80" />
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div className="relative z-10 space-y-7">
                <p className="text-[10px] font-black uppercase tracking-[0.44em] text-brand-primary md:text-[11px]">
                  {t("eyebrow")}
                </p>
                <h1 className="font-heading text-5xl font-black uppercase leading-[0.8] tracking-[-0.07em] md:text-7xl lg:text-[120px]">
                  {t("title")}
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-2xl">
                  {t("description")}
                </p>
              </div>

              <aside className="relative overflow-hidden border border-border/60 bg-foreground/[0.02] p-8 [clip-path:polygon(0_0,100%_0,100%_88%,86%_100%,0_100%)] md:p-10">
                <div className="absolute -right-10 -top-12 h-28 w-28 rounded-full border border-brand-primary/20" />
                <p className="text-[10px] font-black uppercase tracking-[0.32em] text-brand-primary">
                  {t("protocol_highlights_label")}
                </p>
                <ul className="mt-7 space-y-4">
                  {Array.isArray(protocolHighlights) &&
                    protocolHighlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm font-semibold uppercase tracking-tight text-foreground/80"
                      >
                        <DotOutlineIcon
                          size={18}
                          className="mt-0.5 shrink-0 text-brand-primary"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                </ul>
              </aside>
            </div>
          </div>
        </Section>

        <Section
          className="border-y border-border/60 bg-foreground/[0.02] py-20 md:py-28"
          withContainer
        >
          <div className="space-y-8">
            <p className="text-[10px] font-black uppercase tracking-[0.34em] text-brand-primary">
              {t("map_label")}
            </p>
            <div className="grid gap-6">
              {Array.isArray(phases) &&
                phases.map((phase, index) => (
                  <article
                    key={phase.id}
                    className="relative overflow-hidden border border-border/60 bg-background p-7 md:p-9"
                    style={{
                      clipPath:
                        index % 2 === 0
                          ? "polygon(0 0, 100% 0, 100% 88%, 92% 100%, 0 100%)"
                          : "polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 12%)",
                    }}
                  >
                    <div className="grid gap-8 lg:grid-cols-[100px_1fr_0.8fr] lg:items-start">
                      <div className="space-y-2">
                        <p className="font-heading text-6xl font-black leading-none tracking-[-0.06em] text-brand-primary/70 md:text-7xl">
                          {phase.id}
                        </p>
                        <p className="text-[10px] font-black uppercase tracking-[0.32em] text-brand-primary">
                          {phase.label}
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h2 className="font-heading text-3xl font-black uppercase leading-[0.92] tracking-tight md:text-5xl">
                          {phase.title}
                        </h2>
                        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                          {phase.description}
                        </p>
                      </div>
                      <aside className="rounded-2xl border border-border/60 bg-foreground/[0.01] p-6">
                        <p className="text-[10px] font-black uppercase tracking-[0.32em] text-foreground/55">
                          {t("phase_focus_label")}
                        </p>
                        <ul className="mt-4 space-y-3">
                          {Array.isArray(phase.details) &&
                            phase.details.map((detail) => (
                              <li
                                key={detail}
                                className="text-sm font-bold uppercase tracking-tight text-foreground/80"
                              >
                                {detail}
                              </li>
                            ))}
                        </ul>
                      </aside>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </Section>

        <Section className="py-20 md:py-28 lg:py-32" withContainer>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.34em] text-brand-primary">
                {t("cadence_label")}
              </p>
              <h2 className="font-heading text-4xl font-black uppercase leading-[0.9] tracking-tight md:text-6xl">
                {t("cadence_title")}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {t("cadence_description")}
              </p>
            </div>
            <div className="grid gap-4">
              {Array.isArray(cadenceItems) &&
                cadenceItems.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-border/60 bg-foreground/[0.01] p-6"
                  >
                    <h3 className="text-lg font-black uppercase tracking-tight text-foreground md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.description}
                    </p>
                  </article>
                ))}
            </div>
          </div>
        </Section>

        <Section
          className="border-y border-border/60 bg-foreground/[0.03] py-20 md:py-28"
          withContainer
        >
          <div className="space-y-8">
            <p className="text-[10px] font-black uppercase tracking-[0.34em] text-brand-primary">
              {t("outcomes_label")}
            </p>
            <div className="grid gap-5 md:grid-cols-3">
              {Array.isArray(outcomes) &&
                outcomes.map((outcome) => (
                  <article
                    key={outcome.title}
                    className="rounded-2xl border border-border/60 bg-background p-7"
                  >
                    <h3 className="text-xl font-black uppercase tracking-tight text-foreground">
                      {outcome.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {outcome.description}
                    </p>
                  </article>
                ))}
            </div>
          </div>
        </Section>

        <Section className="py-20 md:py-28 lg:py-32" withContainer>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-brand-primary">
                <CheckCircleIcon size={28} weight="fill" />
                <p className="text-[10px] font-black uppercase tracking-[0.34em]">
                  {t("qa_title")}
                </p>
              </div>
              <h2 className="font-heading text-4xl font-black uppercase leading-[0.9] tracking-tight md:text-6xl">
                {t("qa_heading")}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {t("qa_description")}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {Array.isArray(qaItems) &&
                qaItems.map((item) => (
                  <article
                    key={item}
                    className="rounded-2xl border border-border/60 bg-background p-6"
                  >
                    <div className="mb-4 inline-flex rounded-full border border-brand-primary/20 p-2 text-brand-primary">
                      <SparkleIcon size={16} />
                    </div>
                    <p className="text-sm font-black uppercase tracking-tight text-foreground/85">
                      {item}
                    </p>
                  </article>
                ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
