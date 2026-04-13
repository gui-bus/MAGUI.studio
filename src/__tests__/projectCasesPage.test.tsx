import * as React from "react"

import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import ProjectCasePage, {
  generateMetadata as generateProjectCaseMetadata,
  generateStaticParams,
} from "@/src/app/[locale]/projetos/[slug]/page"
import ProjectsPage, {
  generateMetadata as generateProjectsMetadata,
} from "@/src/app/[locale]/projetos/page"

vi.mock("@/src/components/common/header", () => ({
  Header: () => <div>Header</div>,
}))

vi.mock("@/src/components/common/footer", () => ({
  Footer: () => <div>Footer</div>,
}))

describe("project case routes", () => {
  it("renders the projects archive page", async () => {
    render(await ProjectsPage())

    expect(screen.getByText("Projetos individuais.")).toBeInTheDocument()
    expect(screen.getByText("Apareça e venda")).toBeInTheDocument()
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Powervet",
      })
    ).toBeInTheDocument()
    expect(screen.getByText("Horizon Travels")).toBeInTheDocument()
  })

  it("renders the project case page with visual sections", async () => {
    render(
      await ProjectCasePage({
        params: Promise.resolve({
          locale: "pt",
          slug: "powervet",
        }),
      })
    )

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Powervet",
      })
    ).toBeInTheDocument()
    expect(screen.queryByText("Style guide")).not.toBeInTheDocument()
    expect(screen.queryByText("Mockups")).not.toBeInTheDocument()
    expect(screen.getAllByAltText("Powervet").length).toBeGreaterThanOrEqual(3)
    expect(
      screen.getByText("Tom visual mais confiável e controlado")
    ).toBeInTheDocument()
    expect(screen.getByText("Outros projetos")).toBeInTheDocument()
  })

  it("generates static params for every locale and project slug", () => {
    const params = generateStaticParams()

    expect(params).toHaveLength(6)
    expect(params).toContainEqual({
      locale: "pt",
      slug: "powervet",
    })
    expect(params).toContainEqual({
      locale: "en",
      slug: "horizon-travels",
    })
  })

  it("generates archive and case metadata", async () => {
    const archiveMetadata = await generateProjectsMetadata()
    const projectMetadata = await generateProjectCaseMetadata({
      params: Promise.resolve({
        locale: "pt",
        slug: "apareca-e-venda",
      }),
    })

    expect(archiveMetadata.title).toBe("Projetos individuais.")
    expect(projectMetadata.title).toBe("Apareça e venda")
    expect(projectMetadata.description).toContain("clareza comercial")
    expect(projectMetadata.openGraph?.title).toBe("Apareça e venda")
  })
})
