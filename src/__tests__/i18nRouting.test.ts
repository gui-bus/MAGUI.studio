import { pathnames } from "@/src/i18n/routing"
import { describe, expect, it } from "vitest"

describe("i18n routing", () => {
  it("should localize the static studio pages in english", () => {
    expect(pathnames["/contato"].en).toBe("/contact")
    expect(pathnames["/metodo"].en).toBe("/method")
    expect(pathnames["/estudio"].en).toBe("/studio")
  })

  it("should preserve the portuguese slugs for the static studio pages", () => {
    expect(pathnames["/contato"].pt).toBe("/contato")
    expect(pathnames["/metodo"].pt).toBe("/metodo")
    expect(pathnames["/estudio"].pt).toBe("/estudio")
  })
})
