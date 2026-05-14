import * as React from "react"

import { getTranslations } from "next-intl/server"
import Image from "next/image"
import Link from "next/link"

import { Link as LocalizedLink } from "@/src/i18n/navigation"

import { Button } from "@/src/components/ui/button"
import { Section } from "@/src/components/ui/section"
import { ArrowUpRightIcon } from "@/src/components/ui/serverIcons"

import { siteConfig } from "@/src/config/site"

export async function Hero(): Promise<React.JSX.Element> {
  const t = await getTranslations("Index.Hero")
  const idT = await getTranslations("Index.Ids")

  return (
    <Section
      id={idT("hero")}
      withContainer={false}
      className="relative overflow-hidden bg-background"
    >
      <div className="relative w-full">
        <div className="relative aspect-video w-full md:aspect-21/9">
          <Image
            src="/images/BANNER.png"
            alt={t("image_alt")}
            fill
            priority
            fetchPriority="high"
            quality={100}
            sizes="100vw"
            className="hidden object-cover md:block"
          />

          <Image
            src="/images/BANNER_MOBILE.png"
            alt={t("image_alt")}
            fill
            priority
            fetchPriority="high"
            quality={100}
            sizes="100vw"
            className="object-cover md:hidden"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent md:h-48" />
      </div>

      <div className="relative z-10 -mt-6 flex justify-center px-6 pb-10 md:-mt-10 md:px-12 md:pb-16 lg:-mt-12">
        <div className="flex flex-col items-center gap-4 rounded-4xl border border-white/10 bg-background/80 p-4 shadow-2xl backdrop-blur-xl md:flex-row md:rounded-full md:px-6 md:py-4">
          <Button
            asChild
            size="lg"
            className="group h-14 rounded-full bg-brand-primary px-8 text-white! shadow-xl shadow-brand-primary/20 transition-all duration-300 hover:scale-[1.03]"
          >
            <LocalizedLink href={siteConfig.contact.path} prefetch={false}>
              <span className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em]">
                {t("cta")}
                <ArrowUpRightIcon
                  weight="bold"
                  className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </LocalizedLink>
          </Button>

          <Link
            href="/#portfolio"
            prefetch={false}
            className="group inline-flex h-14 items-center justify-center rounded-full border border-foreground/15 px-8 text-xs font-black uppercase tracking-[0.18em] text-foreground transition-all hover:border-brand-primary hover:text-brand-primary"
          >
            {t("secondary_cta")}
          </Link>
        </div>
      </div>
    </Section>
  )
}
