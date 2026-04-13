type AnalyticsEventValue = boolean | number | string | undefined

interface TrackEventWindow extends Window {
  gtag?: (
    command: "event",
    eventName: string,
    params?: Record<string, AnalyticsEventValue>
  ) => void
}

export function trackEvent(
  eventName: string,
  params?: Record<string, AnalyticsEventValue>
): void {
  if (typeof window === "undefined") {
    return
  }

  const analyticsWindow = window as TrackEventWindow
  analyticsWindow.gtag?.("event", eventName, params)
}
