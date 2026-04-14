"use client"

import * as React from "react"

interface AnalyticsLoaderProps {
  clarityId: string
  googleAnalyticsId?: string
}

interface AnalyticsWindow extends Window {
  clarity?: (...args: unknown[]) => void
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
}

function appendScript(
  src: string,
  id: string,
  onLoad?: () => void
): HTMLScriptElement | null {
  if (document.getElementById(id)) {
    return null
  }

  const script = document.createElement("script")
  script.id = id
  script.async = true
  script.src = src

  if (onLoad) {
    script.addEventListener("load", onLoad, { once: true })
  }

  document.head.appendChild(script)

  return script
}

export function AnalyticsLoader({
  clarityId,
  googleAnalyticsId,
}: AnalyticsLoaderProps): null {
  const loadedRef = React.useRef(false)

  React.useEffect(() => {
    const analyticsWindow = window as AnalyticsWindow

    const loadAnalytics = (): void => {
      if (loadedRef.current) {
        return
      }

      loadedRef.current = true

      if (googleAnalyticsId) {
        analyticsWindow.dataLayer = analyticsWindow.dataLayer || []
        analyticsWindow.gtag = function gtag(...args: unknown[]): void {
          analyticsWindow.dataLayer?.push(args)
        }
        analyticsWindow.gtag("js", new Date())
        analyticsWindow.gtag("config", googleAnalyticsId)

        appendScript(
          `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
          "google-analytics-script"
        )
      }

      if (clarityId) {
        analyticsWindow.clarity =
          analyticsWindow.clarity ||
          function clarity(...args: unknown[]): void {
            ;(analyticsWindow.clarity as { q?: unknown[][] }).q =
              (analyticsWindow.clarity as { q?: unknown[][] }).q || []
            ;(analyticsWindow.clarity as { q?: unknown[][] }).q?.push(args)
          }

        appendScript(
          `https://www.clarity.ms/tag/${clarityId}`,
          "microsoft-clarity-script"
        )
      }

      cleanup()
    }

    const events: Array<keyof WindowEventMap> = [
      "keydown",
      "pointerdown",
      "scroll",
      "touchstart",
    ]

    const cleanup = (): void => {
      events.forEach((eventName) =>
        window.removeEventListener(eventName, loadAnalytics)
      )
    }

    events.forEach((eventName) =>
      window.addEventListener(eventName, loadAnalytics, {
        once: true,
        passive: true,
      })
    )

    return cleanup
  }, [clarityId, googleAnalyticsId])

  return null
}
