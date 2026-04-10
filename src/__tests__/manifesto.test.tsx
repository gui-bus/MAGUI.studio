import * as React from "react"

import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Manifesto } from "@/src/components/sections/manifesto"

describe("Manifesto", () => {
  it("renders the manifesto section content", () => {
    render(<Manifesto />)

    expect(screen.getByText("Manifesto do Estúdio")).toBeInTheDocument()
    expect(screen.getByText("Rigor visual.")).toBeInTheDocument()
  })
})
