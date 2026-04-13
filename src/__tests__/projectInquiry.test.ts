import { describe, expect, it } from "vitest"

import { createProjectInquirySchema } from "@/src/lib/validations/projectInquiry"

const schema = createProjectInquirySchema({
  nameMin: "name_min",
  emailInvalid: "email_invalid",
  phoneMin: "phone_min",
  projectTypeRequired: "project_type_required",
  projectTypeOtherRequired: "project_type_other_required",
  budgetRequired: "budget_required",
  deadlineRequired: "deadline_required",
  messageMin: "message_min",
})

describe("Project inquiry schema", () => {
  it("accepts a valid payload", () => {
    const result = schema.safeParse({
      name: "Gui Borges",
      email: "contato@magui.studio",
      phone: "11999999999",
      link: "https://magui.studio",
      company: "MAGUI",
      projectType: "landing",
      budget: "range2",
      deadline: "thirtyDays",
      message: "Preciso de uma landing page com posicionamento forte.",
    })

    expect(result.success).toBe(true)
  })

  it("requires projectTypeOther when projectType is 'other'", () => {
    const result = schema.safeParse({
      name: "Gui Borges",
      email: "contato@magui.studio",
      phone: "11999999999",
      projectType: "other",
      budget: "range2",
      deadline: "thirtyDays",
      message: "Preciso de algo muito específico.",
    })

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.projectTypeOther).toContain(
        "project_type_other_required"
      )
    }

    const validOther = schema.safeParse({
      name: "Gui Borges",
      email: "contato@magui.studio",
      phone: "11999999999",
      projectType: "other",
      projectTypeOther: "Mobile App",
      budget: "range2",
      deadline: "thirtyDays",
      message: "Preciso de algo muito específico.",
    })
    expect(validOther.success).toBe(true)
  })

  it("rejects invalid payloads with configured messages", () => {
    const result = schema.safeParse({
      name: "G",
      email: "email-invalido",
      phone: "123",
      company: "",
      projectType: "",
      budget: "",
      deadline: "",
      message: "curto",
    })

    expect(result.success).toBe(false)

    if (!result.success) {
      expect(result.error.flatten().fieldErrors.name).toContain("name_min")
      expect(result.error.flatten().fieldErrors.email).toContain(
        "email_invalid"
      )
      expect(result.error.flatten().fieldErrors.phone).toContain("phone_min")
      expect(result.error.flatten().fieldErrors.projectType).toContain(
        "project_type_required"
      )
      expect(result.error.flatten().fieldErrors.budget).toContain(
        "budget_required"
      )
      expect(result.error.flatten().fieldErrors.deadline).toContain(
        "deadline_required"
      )
      expect(result.error.flatten().fieldErrors.message).toContain(
        "message_min"
      )
    }
  })
})
