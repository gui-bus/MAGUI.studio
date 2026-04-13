import * as React from "react"

import "@testing-library/jest-dom/vitest"
import { vi } from "vitest"

process.env.NEXT_PUBLIC_SITE_URL = "https://example.com"
process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY =
  "4fc93430-7b53-491f-a7ed-8cb2c3b3fd46"

const translationData: Record<string, Record<string, unknown>> = {
  "Index.About": {
    eyebrow: "Manifesto do Estúdio",
    title: "O Conceito MAGUI",
    title_1: "Precisão",
    title_2: "Editorial.",
    description: "Descrição",
    badge: "Autoridade de Interface",
    image_alt: "Imagem",
    panel_eyebrow: "O Estúdio",
    panel_title: "Rigor visual.",
    panel_description: "Painel",
    principles: ["Um", "Dois", "Três"],
    pillars: ["Autoridade", "Performance", "Escala", "Precisão"],
    highlights: [
      {
        id: "01",
        title: "Estratégia Visual",
        label: "Estratégia Visual",
        description: "Design",
      },
      {
        id: "02",
        title: "Entrega Engenheirada",
        label: "Entrega Engenheirada",
        description: "Sistema",
      },
    ],
  },
  "Index.Process": {
    eyebrow: "Protocolo MAGUI",
    title: "Protocolo de Execução.",
    title_1: "Execution",
    title_2: "Protocol.",
    description: "Processo",
    step_label: "Etapa {step}",
    method_label: "Método MAGUI",
    steps: [
      { title: "Estratégia", description: "Mapeamento" },
      { title: "Arquitetura", description: "Estruturação" },
      { title: "Design", description: "Criação" },
      { title: "Engenharia", description: "Implementação" },
    ],
  },
  "Index.FAQ": {
    eyebrow: "Dúvidas Técnicas",
    title: "Perguntas Frequentes.",
    items: [
      {
        answer: "Resposta um",
        question: "Pergunta um",
      },
    ],
  },
  "Index.Ids": {
    about: "manifesto",
    faq: "duvidas",
    process: "processo",
  },
}

const serverMessages = {
  Index: {
    About: translationData["Index.About"],
    FAQ: translationData["Index.FAQ"],
    Ids: translationData["Index.Ids"],
    Process: translationData["Index.Process"],
  },
}

vi.mock("next-intl", () => ({
  useTranslations: (namespace?: string) => {
    const scopedData = namespace ? (translationData[namespace] ?? {}) : {}
    const translate = (
      key: string,
      values?: Record<string, string | number>
    ): string => {
      const value = scopedData[key]

      if (typeof value !== "string") {
        return key
      }

      if (!values) {
        return value
      }

      return Object.entries(values).reduce(
        (result, [token, tokenValue]) =>
          result.replace(`{${token}}`, String(tokenValue)),
        value
      )
    }

    translate.raw = (key: string): unknown => scopedData[key] ?? []

    return translate
  },
  useLocale: () => "pt",
}))

vi.mock("next-intl/server", () => ({
  getMessages: async () => serverMessages,
  getTranslations: async (namespace?: string) => {
    const scopedData = namespace ? (translationData[namespace] ?? {}) : {}

    return (key: string, values?: Record<string, string | number>): string => {
      const value = scopedData[key]

      if (typeof value !== "string") {
        return key
      }

      if (!values) {
        return value
      }

      return Object.entries(values).reduce(
        (result, [token, tokenValue]) =>
          result.replace(`{${token}}`, String(tokenValue)),
        value
      )
    }
  },
}))

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}))

const motionElement = ({
  children,
  ...props
}: { children?: React.ReactNode } & Record<string, unknown>) =>
  React.createElement(
    "div",
    props as React.HTMLAttributes<HTMLDivElement>,
    children
  )

vi.mock("framer-motion", () => ({
  motion: {
    div: motionElement,
  },
  m: {
    div: motionElement,
    span: motionElement,
    h2: motionElement,
    h3: motionElement,
    p: motionElement,
    article: motionElement,
  },
  AnimatePresence: ({ children }: { children?: React.ReactNode }) =>
    React.createElement(React.Fragment, null, children),
  useScroll: () => ({
    scrollYProgress: 0,
  }),
  useTransform: () => "0%",
}))
