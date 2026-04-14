import { defineRouting } from "next-intl/routing"

import { defaultLocale, locales } from "./config"

export const pathnames = {
  "/": "/",
  "/contato": {
    pt: "/contato",
    en: "/contact",
  },
  "/metodo": {
    pt: "/metodo",
    en: "/method",
  },
  "/estudio": {
    pt: "/estudio",
    en: "/studio",
  },
  "/projetos": {
    pt: "/projetos",
    en: "/projects",
  },
  "/projetos/[slug]": {
    pt: "/projetos/[slug]",
    en: "/projects/[slug]",
  },
} as const

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "never",
  pathnames,
})
