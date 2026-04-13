import * as React from "react"

import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Process } from "@/src/components/sections/process"

describe("Process", () => {
  it("renders the process section steps", async () => {
    render(await Process())

    expect(screen.getByText("Protocolo MAGUI")).toBeInTheDocument()
    expect(screen.getAllByText("Estratégia")).toHaveLength(2)
    expect(screen.getAllByText("Engenharia")).toHaveLength(2)
  })
})
