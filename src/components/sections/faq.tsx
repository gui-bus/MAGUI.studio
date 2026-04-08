"use client"

import * as React from "react"

import { useTranslations } from "next-intl"

import { FAQItem } from "@/src/types/sections"
import { Section } from "@/src/components/ui/section"
import { SectionHeader } from "@/src/components/ui/sectionHeader"
import { AccordionItem } from "@/src/components/ui/accordion"

export function FAQ(): React.JSX.Element {
  const t = useTranslations("Index.FAQ")
  const idT = useTranslations("Index.Ids")
  const items = t.raw("items") as FAQItem[]
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <Section id={idT("faq")} className="py-32">
      <SectionHeader eyebrow={t("eyebrow")} title={t("title")} />

      <div className="flex flex-col border-t border-foreground/10" role="presentation">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </Section>
  )
}
