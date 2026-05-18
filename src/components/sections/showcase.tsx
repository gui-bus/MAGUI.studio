"use client"

import * as React from "react"

import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import NextLink from "next/link"

import { AppLocale, getProjectCases } from "@/src/content/projects"
import { Link } from "@/src/i18n/navigation"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowSquareOutIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react"

import { Section } from "@/src/components/ui/section"
import { StaggeredText } from "@/src/components/ui/staggeredText"

import { trackEvent } from "@/src/lib/analytics"

interface ProjectMetaItem {
  label: string
  value: string
}

export function Showcase(): React.JSX.Element {
  const locale = useLocale()
  const t = useTranslations("Index.Showcase")
  const idT = useTranslations("Index.Ids")
  const projects = React.useMemo(
    (): ReturnType<typeof getProjectCases> =>
      getProjectCases(locale as AppLocale),
    [locale]
  )
  const hasMultipleProjects = projects.length > 1
  const showcaseTitlePrimary = t("title_primary")
  const showcaseTitleAccent = t("title_accent")

  const [currentIndex, setCurrentIndex] = React.useState(0)
  const activeProject = projects[currentIndex]

  React.useEffect((): (() => void) | void => {
    if (!hasMultipleProjects) return

    const autoplayTimer = window.setInterval(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % projects.length)
    }, 10000)

    return (): void => {
      window.clearInterval(autoplayTimer)
    }
  }, [currentIndex, hasMultipleProjects, projects.length])

  const projectMeta: ProjectMetaItem[] = [
    { label: t("sector_label"), value: activeProject.sector },
    { label: t("scope_label"), value: activeProject.scope },
    { label: t("year_label"), value: activeProject.year },
  ]

  const handleProjectSelect = React.useCallback(
    (index: number): void => {
      if (index === currentIndex) return

      setCurrentIndex(index)

      trackEvent("select_content", {
        content_type: "portfolio_preview",
        item_id: projects[index]?.id ?? `project-${index}`,
      })
    },
    [currentIndex, projects]
  )

  const goToPreviousProject = React.useCallback((): void => {
    if (!hasMultipleProjects) return
    handleProjectSelect((currentIndex - 1 + projects.length) % projects.length)
  }, [currentIndex, handleProjectSelect, hasMultipleProjects, projects.length])

  const goToNextProject = React.useCallback((): void => {
    if (!hasMultipleProjects) return
    handleProjectSelect((currentIndex + 1) % projects.length)
  }, [currentIndex, handleProjectSelect, hasMultipleProjects, projects.length])

  return (
    <Section
      id={idT("portfolio")}
      className="relative overflow-hidden py-20 lg:py-32"
      withContainer={true}
    >
      <div className="pointer-events-none absolute right-0 top-10 z-0 hidden select-none lg:block">
        <span className="whitespace-nowrap text-[220px] font-black uppercase leading-none tracking-[-0.08em] text-foreground/3">
          {t("background_text")}
        </span>
      </div>

      <div className="relative z-10 space-y-16 lg:space-y-24">
        <header className="mx-auto max-w-5xl space-y-8 text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="h-px w-10 bg-brand-primary sm:w-12" />
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-primary sm:text-[11px] sm:tracking-[0.5em]">
              {t("eyebrow")}
            </span>
            <div className="h-px w-10 bg-brand-primary sm:w-12" />
          </div>

          <h2 className="font-heading text-5xl font-black uppercase leading-[1.15] tracking-[-0.06em] text-foreground md:text-8xl 2xl:text-[136px]">
            <span className="block">
              <StaggeredText text={showcaseTitlePrimary} />
            </span>
            <span className="mt-3 block text-brand-primary">
              <StaggeredText text={showcaseTitleAccent} />
            </span>
          </h2>

          <div className="mx-auto h-px w-24 bg-foreground/10" />

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-xl">
            {t("description")}
          </p>
        </header>

        <article className="space-y-10">
          <div className="group relative w-full">
            <Link
              href={{
                pathname: "/projetos/[slug]",
                params: { slug: activeProject.slug },
              }}
              prefetch={false}
              onClick={() =>
                trackEvent("select_content", {
                  content_type: "portfolio_case",
                  item_id: activeProject.id,
                })
              }
              className="block w-full"
            >
              <div className="relative h-120 w-full overflow-hidden md:h-160 xl:h-192">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  sizes="100vw"
                  quality={90}
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                  priority={currentIndex === 0}
                />
              </div>
            </Link>

            {hasMultipleProjects && (
              <div className="pointer-events-none absolute left-4 right-4 top-1/2 z-20 flex -translate-y-1/2 justify-between">
                <button
                  type="button"
                  onClick={goToPreviousProject}
                  aria-label={t("previous_project_label")}
                  className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-foreground/10 bg-background/80 text-foreground backdrop-blur-md transition-all hover:border-brand-primary hover:text-brand-primary active:scale-95"
                >
                  <ArrowLeftIcon size={20} weight="bold" />
                </button>
                <button
                  type="button"
                  onClick={goToNextProject}
                  aria-label={t("next_project_label")}
                  className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-foreground/10 bg-background/80 text-foreground backdrop-blur-md transition-all hover:border-brand-primary hover:text-brand-primary active:scale-95"
                >
                  <ArrowRightIcon size={20} weight="bold" />
                </button>
              </div>
            )}
          </div>

          <div className="grid items-start gap-8 border-t border-foreground/10 pt-10 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-4">
              <div className="flex items-center gap-4">
                <p className="text-[10px] font-black uppercase tracking-[0.34em] text-brand-primary">
                  {t("selected_case_label")}
                </p>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-heading text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] text-foreground sm:text-6xl">
                {activeProject.title}
              </h3>
            </div>

            <div className="space-y-4 lg:col-span-4">
              <p className="text-[10px] font-black uppercase tracking-[0.34em] text-brand-primary">
                {t("case_overview_label")}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {activeProject.summary}
              </p>
            </div>

            <div className="space-y-6 lg:col-span-4">
              <dl className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-3">
                {projectMeta.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col border-b border-foreground/5 lg:flex-row lg:items-center lg:justify-between lg:pb-2"
                  >
                    <dt className="text-[9px] font-black uppercase tracking-[0.28em] text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-foreground lg:mt-0">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
            <Link
              href={{
                pathname: "/projetos/[slug]",
                params: { slug: activeProject.slug },
              }}
              prefetch={false}
              onClick={() =>
                trackEvent("select_content", {
                  content_type: "portfolio_case",
                  item_id: activeProject.id,
                })
              }
              className="group inline-flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-foreground/10 bg-background px-5 py-4 text-foreground transition-all duration-500 hover:border-foreground/20 hover:bg-muted/18"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.28em]">
                {t("view_case")}
              </span>
              <ArrowSquareOutIcon
                weight="bold"
                size={16}
                className="transition-transform duration-500 group-hover:-translate-y-0.5"
              />
            </Link>

            <NextLink
              href={activeProject.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackEvent("select_content", {
                  content_type: "live_project",
                  item_id: activeProject.id,
                })
              }
              className="group inline-flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-foreground/10 bg-background px-5 py-4 text-foreground transition-all duration-500 hover:border-foreground/20 hover:bg-muted/18"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.28em]">
                {t("view_project")}
              </span>
              <ArrowSquareOutIcon
                weight="bold"
                size={16}
                className="transition-transform duration-500 group-hover:-translate-y-0.5"
              />
            </NextLink>

            <NextLink
              href={`/#${idT("contact")}`}
              prefetch={false}
              onClick={() =>
                trackEvent("select_content", {
                  content_type: "portfolio_contact_cta",
                  item_id: activeProject.id,
                })
              }
              className="group inline-flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-brand-primary/20 px-5 py-4 bg-brand-primary"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.24em] text-white">
                {t("project_cta")}
              </span>
              <ArrowUpRightIcon
                weight="bold"
                size={16}
                className="text-white transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </NextLink>
          </div>
        </article>
      </div>
    </Section>
  )
}
