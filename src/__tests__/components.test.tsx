import * as React from "react"

import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Button } from "@/src/components/ui/button"

describe("Components", () => {
  describe("Button", () => {
    it("renders correctly with children", () => {
      render(<Button>Click me</Button>)
      expect(screen.getByText("Click me")).toBeInTheDocument()
    })
  })
})
