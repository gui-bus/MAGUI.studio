import { MetadataRoute } from "next"

import { siteConfig } from "@/src/config/site"

export default function robots(): MetadataRoute.Robots {
  return {
    host: siteConfig.url,
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
