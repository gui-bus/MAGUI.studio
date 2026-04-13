import { defineConfig, devices } from "@playwright/test"

const shouldRunAllBrowsers =
  process.env.CI === "true" || process.env.PLAYWRIGHT_ALL_BROWSERS === "true"
const baseURL = process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000"
const useExternalServer = process.env.PLAYWRIGHT_EXTERNAL_SERVER === "true"

export default defineConfig({
  testDir: "./src/__tests__/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL,
    trace: "on-first-retry",
    video: "on-first-retry",
  },
  projects: shouldRunAllBrowsers
    ? [
        {
          name: "chromium",
          use: { ...devices["Desktop Chrome"] },
        },
        {
          name: "firefox",
          use: { ...devices["Desktop Firefox"] },
        },
        {
          name: "webkit",
          use: { ...devices["Desktop Safari"] },
        },
      ]
    : [
        {
          name: "chromium",
          use: { ...devices["Desktop Chrome"] },
        },
      ],
  webServer: useExternalServer
    ? undefined
    : {
        command: "pnpm dev",
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        stdout: "ignore",
        stderr: "pipe",
      },
})
