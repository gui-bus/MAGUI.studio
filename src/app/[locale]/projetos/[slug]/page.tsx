import * as React from "react"

import { Metadata } from "next"
import { getLocale, getTranslations } from "next-intl/server"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import {
  getAdjacentProjectCases,
  getProjectCaseBySlug,
  getProjectCaseSlugs,
} from "@/src/content/projects"
import { locales } from "@/src/i18n/config"

import { ArrowUpRightIcon, PlusIcon } from "@/src/components/ui/serverIcons"

import { Footer } from "@/src/components/common/footer"
import { Header } from "@/src/components/common/header"

import { siteConfig } from "@/src/config/site"

interface ProjectCasePageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export function generateStaticParams(): Array<{
  locale: string
  slug: string
}> {
  return locales.flatMap((locale) =>
    getProjectCaseSlugs().map((slug) => ({ locale, slug }))
  )
}

export async function generateMetadata({
  params,
}: ProjectCasePageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const project = getProjectCaseBySlug(slug, locale as "pt" | "en")

  if (!project) {
    return {}
  }

  const url = new URL(
    `${siteConfig.projects.path}/${project.slug}`,
    siteConfig.url
  )
  const imageUrl = new URL(project.image, siteConfig.url)

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: url.toString(),
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      url: url.toString(),
      images: [
        {
          url: imageUrl.toString(),
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [imageUrl.toString()],
    },
  }
}

export default async function ProjectCasePage({
  params,
}: ProjectCasePageProps): Promise<React.JSX.Element> {
  const { locale, slug } = await params
  const t = await getTranslations("ProjectCases")
  const project = getProjectCaseBySlug(slug, locale as "pt" | "en")

  if (!project) {
    notFound()
  }

  const adjacentProjects = getAdjacentProjectCases(
    project.slug,
    locale as "pt" | "en"
  )

  if (!adjacentProjects) {
    notFound()
  }

  const projectUrl = new URL(
    `${siteConfig.projects.path}/${project.slug}`,
    siteConfig.url
  )
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${projectUrl.toString()}#webpage`,
        name: project.title,
        description: project.summary,
        url: projectUrl.toString(),
      },
      {
        "@type": "CreativeWork",
        "@id": `${projectUrl.toString()}#creative-work`,
        name: project.title,
        description: project.summary,
        image: new URL(project.image, siteConfig.url).toString(),
        url: projectUrl.toString(),
        creator: {
          "@type": "Organization",
          name: siteConfig.legalName,
        },
      },
    ],
  }

  return (
    <div className="relative min-h-svh w-full overflow-x-hidden bg-background font-sans text-foreground selection:bg-brand-primary/30 selection:text-brand-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-24 md:pt-32">
        <section className="border-b border-foreground/5 px-6 py-16 md:px-12 md:py-24 lg:px-24 lg:py-28">
          <div className="mx-auto max-w-7xl space-y-10">
            <Link
              href={siteConfig.projects.path}
              className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.35em] text-brand-primary transition-colors hover:text-foreground"
            >
              {t("back_to_projects")}
              <ArrowUpRightIcon size={16} weight="bold" />
            </Link>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-end">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-brand-primary" />
                  <span className="text-[11px] font-black uppercase tracking-[0.45em] text-brand-primary">
                    {t("hero_label")}
                  </span>
                </div>

                <div className="space-y-5">
                  <h1 className="font-heading text-5xl font-black uppercase leading-[0.8] tracking-[-0.06em] md:text-7xl lg:text-[104px]">
                    {project.title}
                  </h1>
                  <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-xl">
                    {project.summary}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: t("facts_sector"), value: project.sector },
                    { label: t("facts_scope"), value: project.scope },
                    { label: t("facts_role"), value: project.role },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="border border-foreground/8 bg-foreground/[0.02] px-4 py-5"
                    >
                      <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-primary">
                          {item.label}
                        </span>
                        <p className="text-sm leading-relaxed text-foreground/76">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden border border-foreground/8 bg-background">
                <div
                  className={`absolute inset-0 bg-linear-to-br ${project.theme.accent} opacity-18`}
                />
                <div className="relative aspect-[1.08] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/48 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24">
          <div className="mx-auto max-w-7xl space-y-12">
            <div
              className={`overflow-hidden border border-foreground/8 ${project.theme.panel} ${project.theme.glow} px-6 py-8 text-white md:px-8 md:py-10`}
            >
              <div className="space-y-5">
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-white/60">
                  {t("summary_label")}
                </span>
                <p className="max-w-4xl text-xl leading-relaxed text-white/82 md:text-2xl">
                  {project.intro}
                </p>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  description: project.context,
                  title: t("context_label"),
                },
                {
                  description: project.direction,
                  title: t("direction_label"),
                },
                {
                  description: project.system,
                  title: t("system_label"),
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="border border-foreground/8 bg-background px-5 py-6 md:px-6 md:py-7"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <PlusIcon
                        size={10}
                        weight="bold"
                        className="text-brand-primary"
                      />
                      <span className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-primary">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
              <article className="border border-foreground/8 bg-background px-6 py-7 md:px-8 md:py-9">
                <div className="space-y-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-primary">
                    {t("deliverables_label")}
                  </span>
                  <div className="space-y-4">
                    {project.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 border-t border-foreground/8 pt-4 first:border-t-0 first:pt-0"
                      >
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-brand-primary" />
                        <p className="text-sm leading-relaxed text-foreground/76 md:text-base">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <article className="border border-foreground/8 bg-background px-6 py-7 md:px-8 md:py-9">
                <div className="space-y-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-primary">
                    {t("stack_label")}
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-foreground/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-foreground/76"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>

            <article className="border border-foreground/8 bg-background px-6 py-7 md:px-8 md:py-9">
              <div className="space-y-5">
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-primary">
                  {t("notes_label")}
                </span>
                <div className="grid gap-4 md:grid-cols-3">
                  {project.notes.map((item) => (
                    <div
                      key={item}
                      className="border border-foreground/8 bg-foreground/[0.02] px-4 py-5"
                    >
                      <p className="text-sm leading-relaxed text-foreground/74 md:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <section
              className={`overflow-hidden border border-foreground/8 ${project.theme.panel} px-6 py-8 text-white md:px-8 md:py-10`}
            >
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.35em] text-white/55">
                    MAGUI.studio
                  </span>
                  <h2 className="font-heading text-3xl font-black uppercase leading-[0.88] tracking-[-0.05em] md:text-5xl">
                    {t("cta_title")}
                  </h2>
                  <p className="max-w-3xl text-base leading-relaxed text-white/74 md:text-lg">
                    {t("cta_description")}
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 px-6 py-4 text-[11px] font-black uppercase tracking-[0.32em] text-white transition-colors hover:border-white/30 hover:bg-white/8"
                  >
                    {t("live_project")}
                    <ArrowUpRightIcon size={16} weight="bold" />
                  </Link>

                  <Link
                    href={siteConfig.contact.path}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-[11px] font-black uppercase tracking-[0.32em] text-black transition-colors hover:bg-brand-primary hover:text-white"
                  >
                    {t("open_brief")}
                    <ArrowUpRightIcon size={16} weight="bold" />
                  </Link>
                </div>
              </div>
            </section>

            <section className="space-y-6 pt-2">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-brand-primary" />
                <span className="text-[11px] font-black uppercase tracking-[0.35em] text-brand-primary">
                  {t("more_projects")}
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    href: `${siteConfig.projects.path}/${adjacentProjects.previousProject.slug}`,
                    label: t("previous_project"),
                    project: adjacentProjects.previousProject,
                  },
                  {
                    href: `${siteConfig.projects.path}/${adjacentProjects.nextProject.slug}`,
                    label: t("next_project"),
                    project: adjacentProjects.nextProject,
                  },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group overflow-hidden border border-foreground/8 bg-background transition-colors hover:border-brand-primary/35"
                  >
                    <div className="grid items-center gap-0 md:grid-cols-[11rem_minmax(0,1fr)]">
                      <div className="relative aspect-[1.1] overflow-hidden">
                        <Image
                          src={item.project.image}
                          alt={item.project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 176px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-4 p-5 md:p-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-primary">
                          {item.label}
                        </span>
                        <div className="space-y-2">
                          <p className="font-heading text-2xl font-black uppercase leading-[0.9] tracking-[-0.04em]">
                            {item.project.title}
                          </p>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {item.project.summary}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
