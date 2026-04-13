import { Page, expect, test } from "@playwright/test"

async function acceptCookiesIfVisible(page: Page): Promise<void> {
  const acceptButton = page.getByRole("button", { name: /Aceitar|Accept/i })

  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click()
  }
}

async function setLocaleCookie(page: Page, locale: "en" | "pt"): Promise<void> {
  await page.context().clearCookies()
  await page.context().addCookies([
    {
      name: "NEXT_LOCALE",
      value: locale,
      url: "http://localhost:3000",
    },
  ])
}

test.describe("Critical flows", () => {
  test("loads the home page and renders the main heading", async ({ page }) => {
    await page.goto("/")
    await acceptCookiesIfVisible(page)

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
  })

  test("applies locale and updates hero copy", async ({ page }) => {
    await setLocaleCookie(page, "pt")
    await page.goto("/")
    await acceptCookiesIfVisible(page)

    await expect(
      page.getByRole("link", { name: /Abrir Briefing/i }).first()
    ).toBeVisible()

    await setLocaleCookie(page, "en")
    await page.goto("/")

    await expect(
      page.getByRole("link", { name: /Open Brief/i }).first()
    ).toBeVisible()
  })

  test("opens the mobile menu and exposes navigation links", async ({
    page,
  }) => {
    await setLocaleCookie(page, "pt")
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto("/")
    await acceptCookiesIfVisible(page)

    await page.getByRole("button", { name: /Abrir Menu|Open Menu/i }).click()

    const mobileDialog = page.getByRole("dialog")
    await expect(mobileDialog).toBeVisible()
    await expect(
      mobileDialog.locator('a[href="/#portfolio"]').first()
    ).toBeVisible()
  })

  test("navigates between showcase projects", async ({ page }) => {
    await setLocaleCookie(page, "pt")
    await page.goto("/")
    await acceptCookiesIfVisible(page)

    await expect(
      page.locator(`a[href="${"/projetos/apareca-e-venda"}"]`).first()
    ).toBeVisible()

    await page.locator('section#portfolio button[type="button"]').last().click()

    await expect(
      page.locator(`a[href="${"/projetos/powervet"}"]`).first()
    ).toBeVisible()
  })

  test("opens an individual project page from the portfolio", async ({
    page,
  }) => {
    await setLocaleCookie(page, "pt")
    await page.goto("/projetos/apareca-e-venda")
    await acceptCookiesIfVisible(page)

    await expect(
      page.getByRole("heading", { name: /Apareça e venda/i })
    ).toBeVisible()
    await expect(
      page.getByRole("link", { name: /Ver projeto ao vivo/i })
    ).toBeVisible()
  })

  test("submits the contact brief successfully", async ({ page }) => {
    await setLocaleCookie(page, "pt")
    await page.route("https://api.web3forms.com/submit", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true }),
      })
    })

    await page.goto("/contato")
    await acceptCookiesIfVisible(page)

    await page.getByLabel("Nome").fill("Guilherme")
    await page.getByLabel("E-mail").fill("guibus.dev@gmail.com")
    await page.getByLabel("Empresa").fill("MAGUI")
    await page
      .getByLabel("Briefing")
      .fill("Quero uma landing page com posicionamento premium.")

    await page.getByRole("button", { name: /Enviar Briefing/i }).click()

    await expect(
      page.getByRole("heading", { name: /Briefing recebido/i })
    ).toBeVisible()
  })
})
