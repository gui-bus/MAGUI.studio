import { MetadataRoute } from "next"

import { getProjectCaseSlugs } from "@/src/content/projects"

import { siteConfig } from "@/src/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      changeFrequency: "weekly" as const,
      path: "/",
      priority: 1,
    },
    {
      changeFrequency: "monthly" as const,
      path: siteConfig.contact.path,
      priority: 0.8,
    },
    {
      changeFrequency: "monthly" as const,
      path: siteConfig.projects.path,
      priority: 0.8,
    },
    ...getProjectCaseSlugs().map((slug) => ({
      changeFrequency: "monthly" as const,
      path: `${siteConfig.projects.path}/${slug}`,
      priority: 0.75,
    })),
  ]

  return routes.map((route) => ({
    url: new URL(route.path, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
