import { MetadataRoute } from "next"

import { getProjectCaseSlugs } from "@/src/content/projects"
import { locales } from "@/src/i18n/config"
import { getPathname } from "@/src/i18n/navigation"

import { siteConfig } from "@/src/config/site"

interface LocalizedRouteDefinition {
  changeFrequency: "weekly" | "monthly"
  href: "/" | "/contato" | "/metodo" | "/estudio"
  priority: number
}

interface SitemapRoute {
  changeFrequency: "weekly" | "monthly"
  path: string
  priority: number
}

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRouteDefinitions: LocalizedRouteDefinition[] = [
    {
      changeFrequency: "weekly",
      href: "/",
      priority: 1,
    },
    {
      changeFrequency: "monthly",
      href: "/contato",
      priority: 0.8,
    },
    {
      changeFrequency: "monthly",
      href: "/metodo",
      priority: 0.7,
    },
    {
      changeFrequency: "monthly",
      href: "/estudio",
      priority: 0.7,
    },
  ]

  const localizedPaths: SitemapRoute[] = localizedRouteDefinitions.flatMap(
    (route): SitemapRoute[] => {
      if (route.href === "/") {
        return [
          {
            changeFrequency: route.changeFrequency,
            path: route.href,
            priority: route.priority,
          },
        ]
      }

      return locales.map((locale) => ({
        changeFrequency: route.changeFrequency,
        path: getPathname({
          locale,
          href: route.href,
        }),
        priority: route.priority,
      }))
    }
  )

  const projectPaths: SitemapRoute[] = getProjectCaseSlugs().flatMap((slug) =>
    locales.map((locale) => ({
      changeFrequency: "monthly",
      path: getPathname({
        locale,
        href: {
          pathname: "/projetos/[slug]",
          params: { slug },
        },
      }),
      priority: 0.75,
    }))
  )

  return [...localizedPaths, ...projectPaths].map((route) => ({
    url: new URL(route.path, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
