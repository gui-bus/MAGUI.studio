import * as React from "react"

import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { ContactPageExperience } from "@/src/components/common/contactPageExperience"
import { Footer } from "@/src/components/common/footer"
import { Header } from "@/src/components/common/header"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Index.ContactPage")

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  }
}

export default async function ContactPage(): Promise<React.JSX.Element> {
  const t = await getTranslations("Index.ContactPage")

  return (
    <div className="relative min-h-svh w-full overflow-x-hidden bg-background font-sans text-foreground selection:bg-brand-primary/30 selection:text-brand-primary">
      <Header />
      <main className="pt-24 md:pt-32">
        <ContactPageExperience />
      </main>
      <Footer />
    </div>
  )
}
