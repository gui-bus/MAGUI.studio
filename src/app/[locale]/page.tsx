import * as React from "react"

import { useTranslations } from "next-intl"
import dynamic from "next/dynamic"

import CurvedLoop from "@/src/components/common/curvedMarquee"
import { Footer } from "@/src/components/common/footer"
import { Header } from "@/src/components/common/header"
import { ScrollSpy } from "@/src/components/common/scrollSpy"
import { Hero } from "@/src/components/sections/hero"
import { Value } from "@/src/components/sections/value"

const Showcase = dynamic(() =>
  import("@/src/components/sections/showcase").then((mod) => mod.Showcase)
)
const Services = dynamic(() =>
  import("@/src/components/sections/services").then((mod) => mod.Services)
)
const FAQ = dynamic(() =>
  import("@/src/components/sections/faq").then((mod) => mod.FAQ)
)
const Contact = dynamic(() =>
  import("@/src/components/sections/contact").then((mod) => mod.Contact)
)

export default function Page(): React.JSX.Element {
  const t = useTranslations("Index.Marquee")

  return (
    <div className="relative min-h-svh w-full bg-background font-sans text-foreground selection:bg-brand-primary/30 selection:text-brand-primary overflow-x-hidden">
      <ScrollSpy />
      <Header />
      <main className="pt-24 md:pt-32">
        <Hero />
        <Value />
        <Showcase />
        <Services />

        <div className="pt-44!">
          <CurvedLoop marqueeText={t("text")} speed={1.5} curveAmount={150} />
        </div>

        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
